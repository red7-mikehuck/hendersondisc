import { Resend } from "resend";
import { NAP_LINE, SITE } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Light per-instance rate limit (best effort on serverless; the honeypot does most of the work).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 6;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function json(body: unknown, status = 200) {
  return Response.json(body, { status });
}

function esc(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

function fmtPhone(d: string) {
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

type Payload = {
  firstName?: unknown;
  phone?: unknown;
  email?: unknown;
  concern?: unknown;
  company?: unknown;
  source?: unknown;
  page?: unknown;
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return json({ ok: false, error: "Invalid request" }, 400);
  }

  // Honeypot: bots fill the hidden "company" field. Pretend success and drop it.
  if (typeof data.company === "string" && data.company.trim() !== "") return json({ ok: true });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) return json({ ok: false, error: "Too many requests" }, 429);

  const firstName = String(data.firstName ?? "").trim().slice(0, 80);
  const digits = String(data.phone ?? "").replace(/\D/g, "");
  const email = String(data.email ?? "").trim().slice(0, 160);
  const concern = String(data.concern ?? "").trim().slice(0, 80);
  const source = String(data.source ?? "").trim().slice(0, 40);
  const page = String(data.page ?? "").trim().slice(0, 300);

  if (firstName.length < 2 || digits.length !== 10) return json({ ok: false, error: "Missing fields" }, 400);
  if (email && !EMAIL_RE.test(email)) return json({ ok: false, error: "Invalid email" }, 400);

  const phone = fmtPhone(digits);
  const submittedAt = new Date().toISOString();
  const lead = {
    firstName,
    phone,
    phoneE164: `+1${digits}`,
    email,
    concern,
    source,
    page,
    submittedAt,
    ip,
    userAgent: req.headers.get("user-agent") ?? "",
  };

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.LEAD_RECIPIENT;

  if (!apiKey || !recipient) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[lead] RESEND_API_KEY / LEAD_RECIPIENT not set — dev mode, lead logged only:", lead);
      return json({ ok: true, delivered: false });
    }
    console.error("[lead] RESEND_API_KEY / LEAD_RECIPIENT missing in production");
    return json({ ok: false, error: "Lead delivery is not configured" }, 503);
  }

  const resend = new Resend(apiKey);
  const from = process.env.LEAD_FROM ?? "Henderson Disc <leads@hendersondisc.com>";
  const to = recipient
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const rows: [string, string][] = [
    ["Name", firstName],
    ["Phone", phone],
    ["Email", email || "—"],
    ["Concern", concern || "—"],
    ["Form", source || "—"],
    ["Page", page || "—"],
    ["Submitted", submittedAt],
    ["IP", ip],
  ];

  const text = ["New consultation request", "", ...rows.map(([k, v]) => `${k}: ${v}`)].join("\n");
  const html = `<!doctype html><html><body style="font-family:Inter,Arial,sans-serif;color:#1F2A37;line-height:1.5">
<h2 style="color:#0E3A5E;margin:0 0 12px">New consultation request</h2>
<table cellpadding="6" style="border-collapse:collapse">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="color:#5B6773;padding-right:16px;vertical-align:top"><strong>${esc(k)}</strong></td><td>${esc(v)}</td></tr>`,
  )
  .join("")}
</table>
<p style="margin-top:16px"><a href="tel:+1${digits}" style="display:inline-block;background:#C8102E;color:#fff;text-decoration:none;padding:10px 18px;border-radius:999px;font-weight:600">Call ${esc(firstName)} now</a></p>
</body></html>`;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email || undefined,
    subject: `New consultation request — ${firstName}`,
    text,
    html,
  });

  if (error) {
    console.error("[lead] Resend error", error);
    return json({ ok: false, error: "Could not deliver request" }, 502);
  }

  // Visitor confirmation (best effort — a failure here must not fail the lead)
  if (email) {
    const confirm = await resend.emails.send({
      from,
      to: email,
      subject: `We got your request — ${SITE.name}`,
      text: [
        `Hi ${firstName},`,
        "",
        "Thanks for requesting a free consultation with Dr. Swolensky. We'll call you shortly to confirm you're a candidate.",
        "",
        `Want to lock in your time now? Call ${SITE.phoneDisplay}.`,
        "",
        SITE.name,
        NAP_LINE,
        SITE.phoneDisplay,
        "",
        "Individual results vary. This message is for scheduling and is not medical advice.",
      ].join("\n"),
    });
    if (confirm.error) console.error("[lead] confirmation email failed", confirm.error);
  }

  // Optional CRM / FormDr webhook
  const webhook = process.env.CRM_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(6000),
      });
    } catch (e) {
      console.error("[lead] CRM webhook failed", e);
    }
  }

  return json({ ok: true });
}
