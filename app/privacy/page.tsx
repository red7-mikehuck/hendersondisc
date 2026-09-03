import type { Metadata } from "next";
import Link from "next/link";
import { NAP_LINE, SITE } from "@/lib/site";
import { PAGES, pageMetadata } from "@/lib/seo";
import PageJsonLd from "@/components/PageJsonLd";

export const metadata: Metadata = pageMetadata(PAGES.privacy);

const UPDATED = "September 2, 2026";

export default function PrivacyPage() {
  return (
    <section className="section bg-white">
      <PageJsonLd path="/privacy" name={PAGES.privacy.title} description={PAGES.privacy.description} crumbs={[{ name: "Privacy Policy", path: "/privacy" }]} />
      <div className="wrap">
        <article className="prose-custom mx-auto max-w-3xl">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-3 text-4xl font-extrabold">Privacy Policy</h1>
          <p className="mt-2 text-sm text-brand-grey">Last updated: {UPDATED}</p>

          <div className="mt-8 space-y-8 text-[17px] leading-8 text-brand-ink">
            <section>
              <h2 className="text-xl font-bold">Who we are</h2>
              <p className="mt-2">
                {SITE.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates this website at {SITE.url}. Our office is
                located at {NAP_LINE}. You can reach us at {SITE.phoneDisplay} or {SITE.email}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Information we collect</h2>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  <strong>Consultation requests:</strong> your first name, phone number, email address and, if you
                  choose to share it, your main concern.
                </li>
                <li>
                  <strong>Technical data:</strong> IP address, browser type, pages viewed and referring site, collected
                  automatically through server logs and, if enabled, Google Analytics.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold">How we use it</h2>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>To contact you by phone, text or email about the consultation you requested.</li>
                <li>To send a confirmation of your request.</li>
                <li>To understand how the site is used and improve it.</li>
              </ul>
              <p className="mt-2">
                By submitting the form you consent to being contacted at the number and email you provide. Message and
                data rates may apply. You can ask us to stop at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Sharing</h2>
              <p className="mt-2">
                We do not sell your information. We share it only with service providers who help us run this site and
                respond to you (for example, our email delivery provider and, if used, our practice management or CRM
                system), and when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Cookies and analytics</h2>
              <p className="mt-2">
                This site may use Google Analytics to measure traffic. It uses cookies and collects anonymized usage
                data. You can opt out with the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  className="text-brand-bluemid underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics opt-out browser add-on
                </a>
                . Embedded YouTube videos load only after you press play and are served in privacy-enhanced mode.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Your choices</h2>
              <p className="mt-2">
                To access, correct or delete the information you sent us, or to opt out of further contact, call{" "}
                {SITE.phoneDisplay} or email {SITE.email}.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Medical disclaimer</h2>
              <p className="mt-2">
                Content on this site is for education only and is not medical advice. Individual results vary. A
                consultation and examination are required to determine whether spinal decompression or any other
                treatment is appropriate for you. Submitting a form does not create a doctor–patient relationship.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold">Changes</h2>
              <p className="mt-2">
                We may update this policy from time to time. The date at the top shows the latest revision.
              </p>
            </section>
          </div>

          <p className="mt-10">
            <Link href="/" className="font-semibold text-brand-bluemid hover:underline">
              ← Back to home
            </Link>
          </p>
        </article>
      </div>
    </section>
  );
}
