import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import TelLink from "@/components/TelLink";
import { NAP_LINE, SITE } from "@/lib/site";

export default function FinalCta() {
  return (
    <section id="contact" className="section scroll-mt-20 bg-brand-blue text-white" aria-labelledby="final-heading">
      <div className="wrap grid items-start gap-12 lg:grid-cols-[1fr_minmax(0,480px)] lg:gap-16">
        <Reveal>
          <p className="eyebrow !text-white/80">Free consultation</p>
          <h2 id="final-heading" className="h2 mt-3 !text-white">
            Your consultation is free. Relief could be closer than you think.
          </h2>

          <div className="mt-8 space-y-5 text-white/90">
            <TelLink
              location="final_cta"
              className="flex items-center gap-4 rounded-card border border-white/15 bg-white/5 p-4 transition hover:bg-white/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-red text-white">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-white/70">Call now</span>
                <span className="tabular block font-display text-2xl font-bold text-white">{SITE.phoneDisplay}</span>
              </span>
            </TelLink>

            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-card border border-white/15 bg-white/5 p-4 transition hover:bg-white/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-white/70">{SITE.name}</span>
                <span className="block font-semibold text-white">{NAP_LINE}</span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-card border border-white/15 bg-white/5 p-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-white/70">Hours</span>
                <span className="block font-semibold text-white">{SITE.hoursDisplay}</span>
              </span>
            </div>
          </div>

          <div className="mt-8 hidden overflow-hidden rounded-card border border-white/15 lg:block">
            <Image
              src="/images/dcoa-clinic-exterior.jpg"
              alt="Exterior of the Disc Centers of America clinic at 3 E Ocean Ave in Henderson, with the red DISC sign."
              width={1200}
              height={1161}
              sizes="(max-width: 1024px) 0px, 560px"
              className="aspect-[16/8] h-auto w-full object-cover object-[center_35%]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <LeadForm location="final_cta" heading="Claim your FREE consultation" />
        </Reveal>
      </div>
    </section>
  );
}
