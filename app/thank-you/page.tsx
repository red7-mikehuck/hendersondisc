import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import TelLink from "@/components/TelLink";
import { NAP_LINE, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "You're all set",
  description: "Thanks for requesting a free consultation. Call (702) 565-7474 to lock in your time.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="section bg-brand-surface">
      <div className="wrap">
        <div className="card mx-auto max-w-xl p-8 text-center sm:p-12">
          <CheckCircle2 className="mx-auto h-20 w-20 text-brand-bluemid" strokeWidth={1.5} aria-hidden="true" />
          <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">You&apos;re all set.</h1>
          <p className="mt-4 text-lg leading-8 text-brand-grey">
            Call us now at{" "}
            <TelLink location="thank_you_inline" className="tabular font-semibold text-brand-blue hover:text-brand-bluemid">
              {SITE.phoneDisplay}
            </TelLink>{" "}
            to lock in your consultation time.
          </p>

          <TelLink location="thank_you" className="btn-primary mt-8 w-full text-base sm:w-auto">
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call {SITE.phoneDisplay}
          </TelLink>

          <ol className="mx-auto mt-10 max-w-sm space-y-3 text-left text-brand-ink">
            {[
              "We've received your request.",
              "We'll call to confirm you're a candidate — or call us first.",
              "Meet Dr. Swolensky for your consultation & exam.",
            ].map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="tabular flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="pt-0.5">{s}</span>
              </li>
            ))}
          </ol>

          <p className="mt-10 text-sm text-brand-grey">
            {SITE.name} · {NAP_LINE}
          </p>
          <Link href="/" className="mt-4 inline-block text-sm font-semibold text-brand-bluemid hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
