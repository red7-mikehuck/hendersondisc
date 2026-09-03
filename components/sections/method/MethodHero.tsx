import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import TelLink from "@/components/TelLink";
import { METHOD } from "@/lib/method";
import { SITE } from "@/lib/site";

export default function MethodHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-blue text-white" aria-labelledby="method-heading">
      <div
        className="absolute inset-0 -z-10 opacity-[0.18] mix-blend-luminosity"
        style={{ backgroundImage: "url(/images/brand-texture.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-brand-blue via-brand-blue/95 to-[#0a2a45]" aria-hidden="true" />

      <div className="wrap grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:gap-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow !items-start !text-white/85">
            <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" aria-hidden="true" />
            <span>A proprietary, non-surgical program</span>
          </p>
          <h1
            id="method-heading"
            className="mt-4 text-[2.35rem] font-extrabold leading-[1.05] !text-white sm:text-5xl lg:text-[3.25rem]"
          >
            {METHOD.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/85 sm:text-xl sm:leading-9">{METHOD.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="btn-primary text-base">
              See if you&apos;re a candidate
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <TelLink
              location="method_hero"
              className="btn-secondary !border-white/30 !bg-white/10 !text-white hover:!bg-white/20"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {SITE.phoneDisplay}
            </TelLink>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-xs lg:max-w-none">
          <div className="overflow-hidden rounded-card border border-white/15 bg-white/5 p-2 shadow-card">
            <Image
              src="/images/dcoa-doctor.jpg"
              alt="Portrait of Dr. Darrell Swolensky, D.C., smiling in a navy blazer."
              width={1200}
              height={1208}
              sizes="(max-width: 1024px) 320px, 380px"
              priority
              className="aspect-square h-auto w-full rounded-xl object-cover"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-white/75">
            Created by <span className="font-semibold text-white">Dr. Darrell Swolensky, D.C.</span> · Disc Centers of
            America, Henderson
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
