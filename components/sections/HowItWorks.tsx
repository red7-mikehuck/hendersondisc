import Image from "next/image";
import Reveal from "@/components/Reveal";

const STEPS = [
  { title: "Gentle traction", body: "relieves pressure inside the disc." },
  { title: "Negative pressure", body: "pulls the bulge back and draws in water + nutrients." },
  { title: "The nerve is freed", body: "— pain, numbness and tingling ease as the disc rehydrates." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section scroll-mt-20 bg-white" aria-labelledby="how-heading">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <Reveal className="relative sm:mt-8">
          <div className="card overflow-hidden p-3">
            <Image
              src="/images/dcoa-drx9000.jpg"
              alt="The DRX-9000 spinal decompression table with a patient lying comfortably during treatment."
              width={670}
              height={300}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full rounded-xl"
            />
            <p className="px-2 pb-1 pt-3 text-sm text-brand-grey">
              The DRX-9000 — the decompression system used at our Henderson clinic.
            </p>
          </div>
          {/* Illustration inset sits over the image's empty top-right corner, clear of the caption. */}
          <div className="pointer-events-none absolute -right-2 -top-7 hidden w-32 rotate-3 overflow-hidden rounded-card border border-brand-line bg-white shadow-card sm:block lg:w-36 xl:-right-6 xl:w-44">
            <Image
              src="/images/decompression-diagram.jpg"
              alt="Illustration of a lumbar spine in profile with a healthy, rehydrated disc between the vertebrae."
              width={1400}
              height={1045}
              sizes="192px"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">How it works</p>
          <h2 id="how-heading" className="h2 mt-3">
            How spinal decompression works
          </h2>
          <ol className="mt-8 space-y-5">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="tabular flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue font-display text-base font-bold text-white">
                  {i + 1}
                </span>
                <p className="pt-1.5 text-lg leading-7 text-brand-ink">
                  <strong className="font-semibold text-brand-blue">{s.title}</strong> {s.body}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-brand-grey">Individual results vary.</p>
        </Reveal>
      </div>
    </section>
  );
}
