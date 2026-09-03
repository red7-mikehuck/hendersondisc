import { Ban, HeartPulse, Footprints } from "lucide-react";
import Reveal from "@/components/Reveal";
import DiscAnimation from "@/components/DiscAnimation";

const TILES = [
  { Icon: Ban, label: "Avoid surgery" },
  { Icon: HeartPulse, label: "No pain meds" },
  { Icon: Footprints, label: "Get back to life" },
];

export default function TryFirst() {
  return (
    <section id="try-this-first" className="section bg-white" aria-labelledby="try-heading">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow">Try this first</p>
          <h2 id="try-heading" className="h2 mt-3">
            Before surgery or medications — try this first.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-brand-grey">
            We don&apos;t just mask symptoms. Non-surgical spinal decompression restores your spine&apos;s natural
            balance so your body can heal — gently, with no incisions, injections, or downtime.
          </p>
          <ul className="mt-8 grid grid-cols-3 gap-3">
            {TILES.map(({ Icon, label }) => (
              <li
                key={label}
                className="flex flex-col items-center gap-2 rounded-card border border-brand-line bg-brand-surface px-2 py-4 text-center"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-bluemid shadow-card">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-brand-blue">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <DiscAnimation />
        </Reveal>
      </div>
    </section>
  );
}
