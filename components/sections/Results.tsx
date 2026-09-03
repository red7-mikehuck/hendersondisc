import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import { PATIENT_PHOTOS, TESTIMONIALS } from "@/lib/site";

function Stars() {
  return (
    <div className="flex gap-0.5 text-brand-red" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Results() {
  return (
    <section id="results" className="section scroll-mt-20 bg-brand-surface" aria-labelledby="results-heading">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Patient results</p>
          <h2 id="results-heading" className="h2 mt-3">
            Real patients. Real relief.
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal as="li" key={t.name} delay={(i % 3) * 0.08} className="card flex h-full flex-col p-6">
              <figure className="flex h-full flex-col">
                <Stars />
                <blockquote className="mt-4 flex-1 text-[17px] leading-7 text-brand-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-brand-blue">
                  {t.name}
                  {t.city && <span className="font-normal text-brand-grey"> · {t.city}</span>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12">
          <ul className="grid grid-cols-3 gap-3 sm:gap-5">
            {PATIENT_PHOTOS.map((p) => (
              <li key={p.src} className="overflow-hidden rounded-card border border-brand-line bg-white shadow-card">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  sizes="(max-width: 640px) 33vw, 380px"
                  className="aspect-[4/5] h-auto w-full object-cover"
                />
              </li>
            ))}
          </ul>
          <p className="mt-3 text-center text-xs text-brand-grey">
            Henderson patients sharing their results at the clinic. Individual results vary.
          </p>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <a href="#contact" className="btn-primary text-base">
            Start your free consultation
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
