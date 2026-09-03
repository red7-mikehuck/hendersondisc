import { ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { METHOD } from "@/lib/method";

const CHAIN = ["Dr. Swolensky", "The Swolensky Method", "Six Core Components", "Advanced Technologies", "Personalized Treatment"];

/** Reinforces the hierarchy: the doctor's method comes first; the machines deliver it. */
export default function IntegratedBand() {
  return (
    <section className="border-y border-brand-line bg-white" aria-label={METHOD.tagline}>
      <Reveal className="wrap py-10 text-center sm:py-12">
        <p className="font-display text-2xl font-extrabold text-brand-blue sm:text-3xl">{METHOD.tagline}</p>
        <p className="mx-auto mt-3 max-w-2xl text-brand-grey">
          No single machine is the treatment. Each technology is chosen for the job it does best, then combined into
          one plan built around you.
        </p>
        <ol className="mt-7 flex flex-wrap items-center justify-center gap-y-3">
          {CHAIN.map((step, i) => (
            <li key={step} className="flex items-center">
              <span
                className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                  i === 1
                    ? "border-brand-red bg-brand-red text-white"
                    : "border-brand-line bg-brand-surface text-brand-blue"
                }`}
              >
                {step}
              </span>
              {i < CHAIN.length - 1 && (
                <ChevronRight className="mx-1 h-4 w-4 text-brand-grey sm:mx-2" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
