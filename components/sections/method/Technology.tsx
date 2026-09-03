import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { METHOD, TECHNOLOGIES, type Technology as Tech } from "@/lib/method";

function Feature({ tech, index }: { tech: Tech; index: number }) {
  const flip = index % 2 === 1;
  const dark = tech.image.frame === "dark";
  return (
    <article
      id={tech.slug}
      className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-14"
      aria-labelledby={`${tech.slug}-heading`}
    >
      <Reveal className={flip ? "lg:order-2" : undefined}>
        <figure className="card overflow-hidden p-3">
          <div className={`relative aspect-[4/3] overflow-hidden rounded-xl ${dark ? "bg-[#050505]" : "bg-white"}`}>
            <Image
              src={tech.image.src}
              alt={tech.image.alt}
              width={tech.image.width}
              height={tech.image.height}
              sizes="(max-width: 1024px) 100vw, 560px"
              className={`absolute inset-0 h-full w-full object-contain ${dark ? "" : "p-3 sm:p-5"}`}
            />
          </div>
          <figcaption className="flex items-center justify-between gap-3 px-2 pb-1 pt-3 text-sm text-brand-grey">
            <span>{tech.device}</span>
            <span className="shrink-0 font-semibold text-brand-blue">{tech.manufacturer}</span>
          </figcaption>
        </figure>
      </Reveal>

      <Reveal delay={0.08} className={flip ? "lg:order-1" : undefined}>
        <p className="eyebrow">
          <span className="tabular">
            Technology {index + 1} of {TECHNOLOGIES.length}
          </span>
          <span aria-hidden="true">·</span>
          <span>{tech.category}</span>
        </p>
        <h3 id={`${tech.slug}-heading`} className="mt-3 text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">
          {tech.treatment}
        </h3>
        <p className="mt-1 text-lg font-medium text-brand-bluemid">Powered by the {tech.device}</p>

        <dl className="mt-6 space-y-5">
          <div>
            <dt className="text-sm font-bold uppercase tracking-[0.1em] text-brand-blue">What it does</dt>
            <dd className="mt-1.5 text-[17px] leading-7 text-brand-ink">{tech.whatItDoes}</dd>
          </div>
          <div>
            <dt className="text-sm font-bold uppercase tracking-[0.1em] text-brand-blue">How it works</dt>
            <dd className="mt-1.5 text-[17px] leading-7 text-brand-ink">{tech.howItWorks}</dd>
          </div>
          <div>
            <dt className="text-sm font-bold uppercase tracking-[0.1em] text-brand-blue">Potential benefits</dt>
            <dd className="mt-2">
              <ul className="grid gap-2 sm:grid-cols-2">
                {tech.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[15px] leading-6 text-brand-ink">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-bluesoft text-brand-bluemid">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <a href="#contact" className="btn-secondary mt-7 text-[15px]">
          See if you&apos;re a candidate
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </Reveal>
    </article>
  );
}

export default function Technology() {
  return (
    <section id="technology" className="section scroll-mt-20 bg-white" aria-labelledby="technology-heading">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Our technology</p>
          <h2 id="technology-heading" className="h2 mt-3">
            Advanced technologies, chosen for the job each one does best
          </h2>
          <p className="mt-4 text-lg text-brand-grey">
            The Method is more than one treatment or one device. It combines several advanced technologies, each
            selected to address a different part of the problem: pain, nerve function, healing and recovery.
          </p>
        </Reveal>

        <div className="mt-14 space-y-20 sm:mt-16 lg:space-y-28">
          {TECHNOLOGIES.map((t, i) => (
            <Feature key={t.slug} tech={t} index={i} />
          ))}
        </div>

        <Reveal className="mt-16 rounded-card border border-brand-line bg-brand-surface p-6 text-center sm:p-8">
          <p className="font-display text-xl font-extrabold text-brand-blue sm:text-2xl">{METHOD.tagline}</p>
          <p className="mx-auto mt-2 max-w-2xl text-brand-grey">
            Which technologies you receive, and in what order, is decided after your evaluation. No two plans are the
            same.
          </p>
          <p className="mt-4 text-xs text-brand-grey">Individual results vary.</p>
        </Reveal>
      </div>
    </section>
  );
}
