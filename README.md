# Henderson Disc — Disc Centers of America, Henderson

Modern, single-page lead-generation site for **Disc Centers of America – Henderson** (Dr. Darrell Swolensky, D.C.).
It replaces the 2019 OptimizePress funnel at hendersondisc.com. The site has one job: capture free-consultation
requests (form submissions and calls to **(702) 565-7474**).

- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · lucide-react · Resend
- **Pages:** `/` (landing) · `/thank-you` · `/privacy` · `/api/lead` (POST)
- **Brand:** White / Red / Grey / Blue — tokens live in [`tailwind.config.ts`](tailwind.config.ts)
- **Imagery:** every image was ingested or generated through the Red7 MCP and committed under [`public/images`](public/images). Nothing is hot-linked.
- **Open items for the client:** see [`CLIENT-TODO.md`](CLIENT-TODO.md)

## Live environments

| Environment | URL | Notes |
| --- | --- | --- |
| Staging / testing (Vercel production alias) | https://hendersondisc.vercel.app | Public. Lead API returns 503 until `RESEND_API_KEY` + `LEAD_RECIPIENT` are set in Vercel. |
| Per-deployment URLs (`hendersondisc-*-red7systems.vercel.app`) | listed in the Vercel dashboard | Protected by Vercel Authentication; share the alias above with the client instead. |
| Production | https://hendersondisc.com | Not yet pointed at Vercel — see *Deploy to Vercel* below. |

Vercel project: team **red7systems**, project **hendersondisc** → https://vercel.com/red7systems/hendersondisc

---

## Local development

```bash
npm install
cp .env.example .env.local   # fill in values (see below)
npm run dev                  # http://localhost:3000
```

Without `RESEND_API_KEY` / `LEAD_RECIPIENT` the lead API runs in **dev mode**: it logs the lead to the terminal
and returns success so you can test the UI. In production those variables are required; if they are missing the API
returns `503` and the form shows the phone-number fallback (no fake success).

```bash
npm run lint     # eslint
npx tsc --noEmit # types
npm run build    # production build
npm start        # serve the build
```

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | prod | Resend API key. Create at resend.com → API Keys. |
| `LEAD_RECIPIENT` | prod | Email address(es) that receive new leads. Comma-separate for several. |
| `LEAD_FROM` | optional | Sender identity. Defaults to `Henderson Disc <leads@hendersondisc.com>`. The domain **must be verified in Resend** (add the DNS records Resend gives you for `hendersondisc.com`). |
| `CRM_WEBHOOK_URL` | optional | If set, every lead is also POSTed as JSON (`firstName, phone, phoneE164, email, concern, source, page, submittedAt, ip, userAgent`). Use for FormDr / CRM. |
| `NEXT_PUBLIC_GA_ID` | optional | GA4 measurement id (`G-XXXXXXXXXX`). When set, the site fires `generate_lead` on a successful submit and `click_to_call` on every `tel:` link (with a `location` param). |
| `NEXT_PUBLIC_SITE_URL` | optional | Canonical origin. Defaults to `https://hendersondisc.com`. Set to the Vercel preview URL if you want correct OG/canonical tags on previews. |

## Lead flow

1. Visitor submits the form (hero or final CTA). Client-side validation, phone auto-formats to `(XXX) XXX-XXXX`, hidden honeypot field.
2. `POST /api/lead` re-validates, drops honeypot hits, rate-limits (6 per 10 min per IP, best effort), then:
   1. emails the lead to `LEAD_RECIPIENT` via Resend (reply-to = the visitor);
   2. emails the visitor a short confirmation that tells them to call to lock in a time;
   3. POSTs to `CRM_WEBHOOK_URL` if configured.
3. On success the browser fires GA4 `generate_lead` and redirects to `/thank-you`.
4. On any failure the form shows an inline message with the click-to-call number.

## Deploy to Vercel

1. Push this repo to GitHub (it lives at `github.com/red7-mikehuck/hendersondisc`).
2. In Vercel: **Add New → Project → Import** the repo. Framework is auto-detected as Next.js; no build settings needed.
3. **Settings → Environment Variables** — add for Production (and Preview if desired):
   - `RESEND_API_KEY`
   - `LEAD_RECIPIENT`
   - `LEAD_FROM` (optional)
   - `CRM_WEBHOOK_URL` (optional)
   - `NEXT_PUBLIC_GA_ID` (optional)
4. Deploy. Check the preview URL, submit a test lead, confirm the emails arrive.
5. **Custom domain:** Settings → Domains → add `hendersondisc.com` and `www.hendersondisc.com` (redirect www → apex).
   Vercel will show the DNS records to set at the registrar:
   - `A` record for `@` → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`
6. In Resend, verify `hendersondisc.com` as a sending domain (SPF/DKIM TXT records) so `leads@hendersondisc.com` delivers.
7. After DNS propagates, retire the old OptimizePress hosting. Legacy paths (`/home`, `/optin`, `/thank-you-page`, `/privacy-policy`, …) already 301 in [`next.config.ts`](next.config.ts) — add any others you find in Search Console.

## Project layout

```
app/
  layout.tsx            fonts, metadata, header/footer, JSON-LD, GA
  page.tsx              landing page (sections below)
  thank-you/page.tsx    post-submit page
  privacy/page.tsx      privacy policy + disclaimers
  api/lead/route.ts     lead handler (Resend + optional webhook)
  sitemap.ts robots.ts manifest.ts not-found.tsx
components/
  Header, MobileBar, Footer, LeadForm, DiscAnimation (signature visual),
  YouTubeFacade, Reveal (scroll fade), TelLink (click-to-call tracking), JsonLd, Analytics
  sections/             Hero, TrustBar, TryFirst, Conditions, HowItWorks,
                        GettingStarted, VideoTestimonial, Results, Doctor, FinalCta
lib/site.ts             NAP, testimonials, conditions, photo manifest
lib/gtag.ts             GA4 helper
scripts/process-images.mjs  one-off sharp pipeline used to derive the committed web images
public/images           committed imagery (see below)
public/icons            favicon / app icons derived from the Red7 icon tile
```

## Imagery provenance (Red7 MCP)

Red7 client **DCOAH** (id 23), project **WEBSITE** (id 71), session 45.

| File | Source |
| --- | --- |
| `dcoa-logo.png`, `dcoa-logo-720.png` | Real logo, ingested as asset `dcoa-logo` from hendersondisc.com, white margin trimmed locally |
| `dcoa-drx9000.jpg` | Real DRX-9000 photo, asset `dcoa-drx9000` |
| `dcoa-doctor.jpg`, `dcoa-dr-shepard.jpg` | Real portraits, assets `dcoa-doctor`, `dcoa-dr-shepard` (drswolensky.com) |
| `dcoa-clinic-exterior.jpg`, `dcoa-treatment-room.jpg` | Real clinic photos, assets `dcoa-clinic-exterior`, `dcoa-treatment-room` |
| `dcoa-patient-01…06.jpg` | Real patient photos, assets `dcoa-patient-01…06` |
| `video-poster.jpg` | YouTube poster for the Duane Clemons video, asset `dcoa-video-poster-clemons` |
| `hero-active-couple.jpg` | AI-generated via `R7_Image` (id 79), lifestyle only — used for the hero below 1024px |
| `hero-desktop.jpg`, `og-image.jpg` | Re-composition of the same scene via `R7_Image` (id 84, referencing 79) with the couple centered; right edge extended 15% (mirrored) locally so they sit between the copy and the form — used for the hero at ≥1024px |
| `hero-grandkids.jpg` | AI-generated via `R7_Image` (id 80) — available, not currently placed |
| `decompression-diagram.jpg` | AI-generated illustration via `R7_Image` (id 81) |
| `brand-texture.jpg` | AI-generated background via `R7_Image` (id 82) |
| `app-icon.png`, `public/icons/*`, `apple-touch-icon.png` | AI-generated icon tile via `R7_Image` (id 83) using the real logo as reference |

No patient, doctor or clinic imagery was generated. All AI images carry Google's SynthID watermark.
