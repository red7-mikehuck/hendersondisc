import { CORE_COMPONENTS, DOCTORS, METHOD, TECHNOLOGIES } from "@/lib/method";
import { PAGES } from "@/lib/seo";
import { CONDITIONS, NAP_LINE, SITE } from "@/lib/site";

/**
 * /llms.txt — a plain-Markdown summary of the site for AI assistants and crawlers (https://llmstxt.org).
 * Built from the same data the pages render, so it never drifts from what visitors see.
 */

const abs = (p: string) => `${SITE.url}${p === "/" ? "/" : p}`;

function build() {
  const lines: string[] = [];
  const p = (...l: string[]) => lines.push(...l, "");

  p(`# ${SITE.name}`);
  p(
    `> Non-surgical treatment for chronic back pain, neck pain, sciatica and damaged spinal discs in Henderson, Nevada, using the Swolensky Method: spinal decompression (DRX9000), cold laser, electroanalgesia and focused shockwave therapy, combined with nutrition, inflammation control and hydration protocols. Free consultations. Individual results vary; a consultation and exam are required to determine whether treatment is appropriate.`,
  );
  p(
    `- Website: ${SITE.url}`,
    `- Phone: ${SITE.phoneDisplay}`,
    `- Email: ${SITE.email}`,
    `- Address: ${NAP_LINE}`,
    `- Hours: ${SITE.hoursDisplay}`,
    `- Doctors: ${DOCTORS.map((d) => `${d.name}, ${d.credentials}`).join("; ")}`,
    `- Specialty: Chiropractic, non-surgical spinal disc care`,
    `- Service area: Henderson and the Las Vegas valley, Nevada`,
  );

  p("## Pages");
  p(
    `- [Home](${abs(PAGES.home.path)}): ${PAGES.home.description}`,
    `- [${PAGES.method.title}](${abs(PAGES.method.path)}): ${PAGES.method.description}`,
    `- [${PAGES.about.title}](${abs(PAGES.about.path)}): ${PAGES.about.description}`,
    `- [${PAGES.privacy.title}](${abs(PAGES.privacy.path)}): ${PAGES.privacy.description}`,
  );

  p("## The Swolensky Method");
  p(METHOD.intro, METHOD.tagline);
  p("### The 6 core components");
  p(...CORE_COMPONENTS.map((c, i) => `${i + 1}. **${c.name}** — ${c.blurb}`));
  p("### Technologies");
  for (const t of TECHNOLOGIES) {
    p(
      `#### ${t.treatment} (${t.device}, ${t.manufacturer})`,
      `- Page: ${abs(METHOD.href)}#${t.slug}`,
      `- What it does: ${t.whatItDoes}`,
      `- How it works: ${t.howItWorks}`,
      `- Potential benefits: ${t.benefits.join("; ")}`,
    );
  }

  p("## Conditions we help");
  p(...CONDITIONS.map((c) => `- ${c}`));

  p("## Doctors");
  for (const d of DOCTORS) {
    p(`### ${d.name}, ${d.credentials} — ${d.role}`, ...d.paragraphs);
  }

  p("## Getting started");
  p(
    `1. Request a free consultation at ${abs("/#consult")} or call ${SITE.phoneDisplay}.`,
    "2. The clinic calls to confirm you are a candidate.",
    "3. Consultation and exam with the doctor; a personalized plan follows if treatment is appropriate.",
  );

  p("## Optional");
  p(
    `- [Sitemap](${abs("/sitemap.xml")})`,
    `- [Facebook](${SITE.socials.facebook})`,
    `- [Instagram](${SITE.socials.instagram})`,
    `- [YouTube](${SITE.socials.youtube})`,
  );

  return lines.join("\n");
}

export const dynamic = "force-static";

export function GET() {
  return new Response(build(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
