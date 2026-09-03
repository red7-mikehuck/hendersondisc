"use client";

import { useId, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { CONCERNS, SITE } from "@/lib/site";
import { track } from "@/lib/gtag";
import TelLink from "./TelLink";

export function formatPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 10);
  if (d.length === 0) return "";
  if (d.length < 4) return `(${d}`;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Errors = Partial<Record<"firstName" | "phone" | "email", string>>;

type Props = {
  heading?: string;
  location: string;
  className?: string;
};

export default function LeadForm({ heading = "Claim your FREE consultation", location, className }: Props) {
  const id = useId();
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [concern, setConcern] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  function validate(): Errors {
    const e: Errors = {};
    if (firstName.trim().length < 2) e.firstName = "Please enter your first name.";
    if (phone.replace(/\D/g, "").length !== 10) e.phone = "Enter a 10-digit phone number.";
    if (!EMAIL_RE.test(email.trim())) e.email = "Enter a valid email address.";
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0];
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    setStatus("submitting");
    setServerError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          phone,
          email: email.trim(),
          concern,
          company,
          source: location,
          page: window.location.href,
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error || `Request failed (${res.status})`);
      track("generate_lead", { location, concern: concern || "unspecified" });
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Request failed");
    }
  }

  const invalid = (k: keyof Errors) => (errors[k] ? true : undefined);

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-labelledby={`${id}-heading`}
      className={`card space-y-4 p-6 sm:p-8 ${className ?? ""}`}
    >
      <div>
        <h2 id={`${id}-heading`} className="text-2xl font-bold sm:text-[26px]">
          {heading}
        </h2>
        <p className="mt-1 text-sm text-brand-grey">Takes 30 seconds. We&apos;ll call to confirm you&apos;re a candidate.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-firstName`} className="label">
            First name
          </label>
          <input
            id={`${id}-firstName`}
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            className="field"
            placeholder="Jane"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            aria-invalid={invalid("firstName")}
            aria-describedby={errors.firstName ? `${id}-firstName-err` : undefined}
          />
          {errors.firstName && (
            <p id={`${id}-firstName-err`} className="mt-1 text-sm text-brand-red">
              {errors.firstName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${id}-phone`} className="label">
            Phone
          </label>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel-national"
            required
            className="field tabular"
            placeholder="(702) 555-0123"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            aria-invalid={invalid("phone")}
            aria-describedby={errors.phone ? `${id}-phone-err` : undefined}
          />
          {errors.phone && (
            <p id={`${id}-phone-err`} className="mt-1 text-sm text-brand-red">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${id}-email`} className="label">
            Email
          </label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            className="field"
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={invalid("email")}
            aria-describedby={errors.email ? `${id}-email-err` : undefined}
          />
          {errors.email && (
            <p id={`${id}-email-err`} className="mt-1 text-sm text-brand-red">
              {errors.email}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${id}-concern`} className="label">
            Main concern <span className="font-normal text-brand-grey">(optional)</span>
          </label>
          <select
            id={`${id}-concern`}
            name="concern"
            className="field"
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
          >
            <option value="">Select one…</option>
            {CONCERNS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Honeypot — hidden from people, tempting to bots */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${id}-company`}>Company</label>
        <input
          id={`${id}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <button type="submit" className="btn-primary w-full text-base" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Request My Consultation
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </>
        )}
      </button>

      <div aria-live="polite" role="status">
        {status === "error" && (
          <p className="rounded-xl border border-brand-red/30 bg-red-50 p-3 text-sm text-brand-ink">
            We couldn&apos;t send that just now.{" "}
            <TelLink location={`${location}_form_error`} className="tabular font-semibold text-brand-red underline">
              Call {SITE.phoneDisplay}
            </TelLink>{" "}
            and we&apos;ll book you directly.
            {serverError && process.env.NODE_ENV !== "production" && (
              <span className="mt-1 block text-xs text-brand-grey">({serverError})</span>
            )}
          </p>
        )}
      </div>

      <p className="flex items-center justify-center gap-1.5 text-xs text-brand-grey">
        <ShieldCheck className="h-3.5 w-3.5 text-brand-bluemid" aria-hidden="true" />
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
}
