import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { CORE_COMPONENTS, METHOD } from "@/lib/method";

type Props = {
  /** Compact variant used on the About page: no intro paragraph, links to the Method page. */
  compact?: boolean;
};

export default function CoreComponents({ compact = false }: Props) {
  return (
    <section
      id="core-components"
      className={`section scroll-mt-20 ${compact ? "bg-white" : "bg-brand-surface"}`}
      aria-labelledby="components-heading"
    >
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Six core components</p>
          <h2 id="components-heading" className="h2 mt-3">
            The 6 Core Components of the Swolensky Method
          </h2>
          <p className="mt-4 text-lg text-brand-grey">
            The Swolensky Method combines six key components into a comprehensive approach to treatment:
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {CORE_COMPONENTS.map(({ name, blurb, Icon, techHref }, i) => {
            const inner = (
              <>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-bluesoft text-brand-bluemid transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="tabular mt-5 text-xs font-bold uppercase tracking-[0.12em] text-brand-grey">
                  Component {i + 1}
                </span>
                <h3 className="mt-1 text-lg font-bold">{name}</h3>
                <p className="mt-2 text-[15px] leading-6 text-brand-grey">{blurb}</p>
              </>
            );
            const href = compact ? METHOD.href : techHref;
            return (
              <Reveal as="li" key={name} delay={(i % 3) * 0.07} className="h-full">
                {href ? (
                  <a
                    href={href}
                    className="card group flex h-full flex-col p-6 transition hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    {inner}
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-bluemid">
                      {compact ? "Learn more" : "See the technology"}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </a>
                ) : (
                  <div className="card group flex h-full flex-col p-6">{inner}</div>
                )}
              </Reveal>
            );
          })}
        </ul>

        {compact && (
          <Reveal className="mt-10 text-center">
            <a href={METHOD.href} className="btn-primary text-base">
              Explore the Swolensky Method
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
