# CLIENT-TODO — things Mike must fill in or confirm before/after launch

Everything here is a placeholder or an open question. The site builds and runs without these, but the lead form
will not deliver email in production until the first block is done.

## 1. Required for the lead form to work in production

- [ ] **`RESEND_API_KEY`** — create at resend.com. Add in Vercel → Settings → Environment Variables.
- [ ] **Verified sending domain in Resend** — add Resend's SPF/DKIM DNS records for `hendersondisc.com` so
      `leads@hendersondisc.com` (the default `LEAD_FROM`) is allowed to send. Until then set `LEAD_FROM` to a
      Resend-verified address (e.g. `onboarding@resend.dev` for testing only).
- [ ] **`LEAD_RECIPIENT`** — who receives new consultation requests (front desk email; comma-separate several).
- [ ] Submit a test lead on the Vercel preview and confirm (a) the lead email arrives, (b) the visitor confirmation arrives.

## 2. Optional integrations

- [ ] **`CRM_WEBHOOK_URL`** — FormDr / CRM endpoint if leads should flow there automatically. Payload is JSON
      (`firstName, phone, phoneE164, email, concern, source, page, submittedAt, ip, userAgent`).
- [ ] **`NEXT_PUBLIC_GA_ID`** — GA4 measurement id. Events fired: `generate_lead`, `click_to_call` (with `location`).
      Mark `generate_lead` as a key event in GA4.
- [ ] Google Ads / Meta pixel conversions if the practice runs paid traffic (not wired; easy to add next to GA in
      `components/Analytics.tsx`).

## 3. Business facts to confirm

- [ ] **Hours** — currently shown as "Call for current hours" (`lib/site.ts` → `hoursDisplay`). Provide the real
      schedule; I will also add `openingHoursSpecification` to the JSON-LD.
- [ ] **Geo coordinates** for the JSON-LD `MedicalClinic` (omitted rather than guessed).
- [ ] **NAP** is `3 E Ocean Ave, Henderson, NV 89015 · (702) 565-7474 · info@drswolensky.com` everywhere. Confirm the
      email is the right public contact.
- [ ] Confirm the practice is happy with the doctor line: "Care from Dr. Darrell Swolensky, D.C. — Disc Centers of
      America, Henderson. Helping the valley avoid surgery and get out of pain." Dr. Shepard's photo was ingested
      (`public/images/dcoa-dr-shepard.jpg`) but is not shown; say the word if both doctors should appear.

## 4. Testimonials and claims (compliance)

- [ ] **Sign-off to reuse the six testimonials** (Paulette F., Howard R., Donna W., Chase T., Albert P., Myles P.).
      They come from the current hendersondisc.com and were trimmed, not reworded. Confirm the practice holds
      permission to publish them (Nevada Chiropractic Physicians' Board rules on testimonials apply).
- [ ] **Patient photos** — three real "results board" photos from drswolensky.com are shown in the Results section
      (`dcoa-patient-01`, `-02`, `-05`). Confirm signed photo releases exist for each person pictured. Swap or remove
      in `lib/site.ts` → `PATIENT_PHOTOS`.
- [ ] Optional: replace static testimonials with live Google reviews. Provide the **Google Place ID** and I will wire it.
- [ ] **Unverified statements kept from the existing site** — confirm each or I will soften/remove:
  - "helped **thousands** avoid surgery" (hero sub-line) and "**Thousands treated** in Henderson" (trust bar).
  - "the **breakthrough** spinal decompression" (hero sub-line).
  - "Featured with NFL veteran Duane Clemons" — the video exists; confirm the phrasing is acceptable.
  - How-it-works mechanism copy (negative pressure / rehydration) is standard DRX-9000 marketing language, not a
    clinical claim of outcome. "Individual results vary" appears under it and in the footer.

## 5. Imagery

- [ ] The **hero photo is AI-generated** (an active couple hiking; no real patients). Desktop uses a centered
      composition (`hero-desktop.jpg`), phones use the close-up (`hero-active-couple.jpg`). If the practice has real
      lifestyle or clinic photography it prefers, send it and I will swap it in (plus `og-image.jpg`). A second
      generated option, `hero-grandkids.jpg`, is committed and unused.
- [ ] The logo is the real file from the current site (JPG → PNG, white margin trimmed). If a vector/transparent
      version exists, send it for crisper rendering.
- [ ] Favicons/app icons were derived from an AI tile that reproduces the logo's spine mark on navy. Approve or
      supply official icon artwork.

## 6. Red7 bookkeeping

- Red7 client **"Disc Centers of America – Henderson"** did not exist and was created: code `DCOAH`, **clientId 23**,
  lifecycle `prelaunch`. Project **WEBSITE** (id 71). Work session **45** (chat `DCOAH.WEBSITE.1`).
- Assets uploaded: ids 22–34 (`dcoa-logo`, `dcoa-drx9000`, `dcoa-doctor`, `dcoa-dr-shepard`, `dcoa-clinic-exterior`,
  `dcoa-treatment-room`, `dcoa-patient-01…06`, `dcoa-video-poster-clemons`). Generated images: 79–83 (all persisted).
- **Bug to report on R7 MCP:** `R7_Asset → get` rejects every call with "assetName is required" whether the key is
  sent as `asset_name`, `assetName` or `name`. The asset bytes for this build were therefore fetched from the
  original public URLs (identical files) after the Red7 ingest succeeded. Generated images were downloaded via
  `R7_Image → get` signed URLs as intended.
- Image-generation spend this build: 5 generations ≈ $0.69.

## 7. Launch checklist

- [x] Vercel project `red7systems/hendersondisc` created; first deploy green at https://hendersondisc.vercel.app.
- [ ] Connect the GitHub repo for automatic builds: Vercel → Project → Settings → Git → Connect
      (`https://vercel.com/red7systems/hendersondisc/settings/git`). The CLI could not connect it because the Vercel
      GitHub App is not installed on the `red7-mikehuck` account yet.
- [ ] Env vars set in Vercel (see section 1).
- [ ] Custom domain `hendersondisc.com` + `www` added in Vercel; DNS updated; SSL issued.
- [ ] Resend domain verified; test lead delivered end to end.
- [ ] Run Lighthouse on the production URL (mobile) and confirm ≥ 90 across the board.
- [ ] Submit `https://hendersondisc.com/sitemap.xml` in Google Search Console; watch for 404s from old funnel URLs
      and add redirects in `next.config.ts`.
- [ ] Update the Google Business Profile website link if it points at an old funnel path.
