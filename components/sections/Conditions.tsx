import { Check, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { CONDITIONS } from "@/lib/site";

export default function Conditions() {
  return (
    <section id="conditions" className="section scroll-mt-20 bg-brand-surface" aria-labelledby="conditions-heading">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Conditions we help</p>
          <h2 id="conditions-heading" className="h2 mt-3">
            Sound familiar?
          </h2>
          <p className="mt-4 text-lg text-brand-grey">If you live with any of these, you may be a candidate.</p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CONDITIONS.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 rounded-card border border-brand-line bg-white px-4 py-3.5 font-semibold text-brand-blue shadow-card"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-bluesoft text-brand-bluemid">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 text-center">
          <a href="#consult" className="btn-primary text-base">
            See if you&apos;re a candidate
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
