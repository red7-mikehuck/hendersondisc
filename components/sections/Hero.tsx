import { getImageProps } from "next/image";
import { Check } from "lucide-react";
import LeadForm from "@/components/LeadForm";

const CHIPS = ["No surgery", "No drugs", "No downtime"];

/**
 * Art-directed hero background:
 *  - phones/tablets (< 1024px): close-up of the couple on the right, text stacks above the form
 *  - desktop (>= 1024px): re-composed shot with the couple centered, between the copy and the form card
 * Built with getImageProps so only the matching source is downloaded.
 */
function HeroBackground() {
  const common = { alt: "", quality: 78, priority: true, fetchPriority: "high" as const };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: "/images/hero-desktop.jpg", width: 2400, height: 1165, sizes: "100vw" });
  const {
    props: { srcSet: mobileSrcSet, ...rest },
  } = getImageProps({ ...common, src: "/images/hero-active-couple.jpg", width: 2400, height: 1340, sizes: "100vw" });

  return (
    <picture className="absolute inset-0 -z-10">
      <source media="(min-width: 1024px)" srcSet={desktopSrcSet} />
      <source srcSet={mobileSrcSet} />
      {/* eslint-disable-next-line jsx-a11y/alt-text -- decorative, alt="" is spread from rest */}
      <img
        {...rest}
        className="absolute inset-0 h-full w-full object-cover object-[72%_center] lg:object-[53%_center]"
      />
    </picture>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-blue" aria-labelledby="hero-heading">
      <HeroBackground />
      {/* Left-side wash for the copy; keeps the middle clear so the couple stay visible on desktop */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-r from-brand-blue/95 via-brand-blue/60 via-35% to-brand-blue/20 lg:from-brand-blue/92 lg:via-brand-blue/40 lg:via-42% lg:to-brand-blue/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-t from-brand-blue/70 via-transparent to-transparent lg:hidden"
        aria-hidden="true"
      />

      <div className="wrap relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:items-center lg:gap-12 lg:py-24 xl:py-28">
        <div className="max-w-xl text-white">
          <p className="eyebrow !items-start !text-white/85">
            <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" aria-hidden="true" />
            <span>Non-Surgical · Drug-Free · Henderson, NV</span>
          </p>
          <h1
            id="hero-heading"
            className="mt-4 max-w-[9.5ch] text-[2.35rem] font-extrabold leading-[1.05] !text-white sm:max-w-none sm:text-5xl lg:max-w-[11ch] lg:text-[3.25rem]"
          >
            Relief from back, neck &amp; sciatic pain — without surgery or drugs.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-white/85">
            The breakthrough spinal decompression that&apos;s helped thousands avoid surgery and get back to life.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Key benefits">
            {CHIPS.map((c) => (
              <li
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm font-semibold backdrop-blur"
              >
                <Check className="h-4 w-4 text-brand-red" strokeWidth={3} aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div id="consult" className="scroll-mt-24 lg:w-full lg:justify-self-end">
          <LeadForm location="hero" />
        </div>
      </div>
    </section>
  );
}
