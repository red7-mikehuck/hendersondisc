import Image from "next/image";
import { Check } from "lucide-react";
import LeadForm from "@/components/LeadForm";

const CHIPS = ["No surgery", "No drugs", "No downtime"];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-blue" aria-labelledby="hero-heading">
      <Image
        src="/images/hero-active-couple.jpg"
        alt=""
        fill
        priority
        fetchPriority="high"
        quality={78}
        sizes="100vw"
        className="object-cover object-[72%_center]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/75 to-brand-blue/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-blue/70 via-transparent to-transparent lg:hidden"
        aria-hidden="true"
      />

      <div className="wrap relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-center lg:gap-16 lg:py-24 xl:py-28">
        <div className="max-w-2xl text-white">
          <p className="eyebrow !items-start !text-white/85">
            <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" aria-hidden="true" />
            <span>Non-Surgical · Drug-Free · Henderson, NV</span>
          </p>
          <h1
            id="hero-heading"
            className="mt-4 text-[2.35rem] font-extrabold leading-[1.05] !text-white sm:text-5xl lg:text-[3.5rem]"
          >
            Relief from back, neck &amp; sciatic pain — without surgery or drugs.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/85">
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

        <div id="consult" className="scroll-mt-24 lg:justify-self-end lg:w-full">
          <LeadForm location="hero" />
        </div>
      </div>
    </section>
  );
}
