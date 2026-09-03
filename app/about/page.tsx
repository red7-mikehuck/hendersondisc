import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import CoreComponents from "@/components/sections/method/CoreComponents";
import PersonalizedCare from "@/components/sections/PersonalizedCare";
import FinalCta from "@/components/sections/FinalCta";
import { DOCTORS, METHOD } from "@/lib/method";
import { NAP_LINE, SITE } from "@/lib/site";

const TITLE = "About Us";
const DESCRIPTION =
  "Meet Dr. Darrell Swolensky and Dr. Gregory Shepard of Disc Centers of America – Henderson, and learn about the Swolensky Method for non-surgical back, disc and nerve pain relief.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/about" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

function AboutHero() {
  return (
    <section className="section bg-white" aria-labelledby="about-heading">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">About us</p>
          <h1 id="about-heading" className="mt-3 text-[2.35rem] font-extrabold leading-[1.05] sm:text-5xl">
            Henderson&apos;s non-surgical spine and pain clinic.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-brand-grey">
            Disc Centers of America – Henderson was founded by Dr. Darrell Swolensky with one mission: give people in
            Henderson and the Las Vegas valley the most advanced non-surgical options for chronic back pain, disc
            conditions and nerve symptoms, so they can get their mobility and their lives back.
          </p>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-blue hover:text-brand-bluemid"
          >
            <MapPin className="h-4 w-4 text-brand-bluemid" aria-hidden="true" />
            {NAP_LINE}
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card overflow-hidden p-3">
            <Image
              src="/images/dcoa-clinic-exterior.jpg"
              alt="Exterior of the Disc Centers of America clinic at 3 E Ocean Ave in Henderson, with the red DISC sign."
              width={827}
              height={800}
              sizes="(max-width: 1024px) 100vw, 520px"
              priority
              className="aspect-[5/4] h-auto w-full rounded-xl object-cover object-[center_40%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Doctors() {
  return (
    <section id="doctors" className="section scroll-mt-20 bg-brand-surface" aria-labelledby="doctors-heading">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Your doctors</p>
          <h2 id="doctors-heading" className="h2 mt-3">
            Meet the team behind your care
          </h2>
        </Reveal>

        <div className="mt-12 space-y-10 lg:space-y-14">
          {DOCTORS.map((d, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={d.name} className="card overflow-hidden">
                <article
                  className={`grid items-center gap-8 p-6 sm:p-8 lg:gap-12 ${
                    flip ? "lg:grid-cols-[1fr_minmax(0,320px)]" : "lg:grid-cols-[minmax(0,320px)_1fr]"
                  }`}
                  aria-labelledby={`doctor-${i}`}
                >
                  <div className={flip ? "lg:order-2" : undefined}>
                    <Image
                      src={d.image.src}
                      alt={d.image.alt}
                      width={d.image.width}
                      height={d.image.height}
                      sizes="(max-width: 640px) 100vw, 320px"
                      className="mx-auto aspect-square w-full max-w-xs rounded-2xl border-4 border-brand-bluesoft object-cover object-top shadow-card"
                    />
                  </div>
                  <div className={flip ? "lg:order-1" : undefined}>
                    <p className="eyebrow">{d.role}</p>
                    <h3 id={`doctor-${i}`} className="mt-2 text-2xl font-extrabold sm:text-3xl">
                      {d.name}, <span className="font-bold text-brand-bluemid">{d.credentials}</span>
                    </h3>
                    <div className="mt-4 space-y-4 text-[17px] leading-7 text-brand-ink">
                      {d.paragraphs.map((p) => (
                        <p key={p.slice(0, 24)}>{p}</p>
                      ))}
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${d.name} highlights`}>
                      {d.facts.map((f) => (
                        <li
                          key={f}
                          className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-brand-surface px-3 py-1.5 text-sm font-semibold text-brand-blue"
                        >
                          <BadgeCheck className="h-4 w-4 text-brand-bluemid" aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Practice() {
  return (
    <section id="practice" className="section scroll-mt-20 bg-white" aria-labelledby="practice-heading">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="lg:order-2">
          <p className="eyebrow">The Henderson practice</p>
          <h2 id="practice-heading" className="h2 mt-3">
            Built in Henderson, for Henderson
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-8 text-brand-grey">
            <p>
              Our clinic on East Ocean Avenue was designed around one goal: helping neighbors from across the valley
              get out of pain and back to the things they love, without surgery, injections or long-term medication.
            </p>
            <p>
              Every treatment room is equipped for the Swolensky Method, from spinal decompression tables to cold laser,
              electroanalgesia and shockwave systems, so your whole plan happens under one roof with a team that knows
              you by name.
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Non-surgical, drug-free care",
              "Decompression, laser, electroanalgesia and shockwave on site",
              "Free consultation to see if you qualify",
              "Serving Henderson and the Las Vegas valley",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[15px] leading-6 text-brand-ink">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-bluemid" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="lg:order-1">
          <div className="card overflow-hidden p-3">
            <Image
              src="/images/dcoa-treatment-room.jpg"
              alt="Inside the Henderson clinic: a row of spinal decompression tables with patients mid-treatment."
              width={600}
              height={800}
              sizes="(max-width: 1024px) 100vw, 520px"
              className="aspect-[4/3] h-auto w-full rounded-xl object-cover"
            />
            <p className="px-2 pb-1 pt-3 text-sm text-brand-grey">The decompression suite at our Henderson clinic.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MethodIntro() {
  return (
    <section className="bg-brand-blue text-white" aria-labelledby="about-method-heading">
      <Reveal className="wrap py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center !text-white/80">Our approach</p>
          <h2 id="about-method-heading" className="h2 mt-3 !text-white">
            {METHOD.name}
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/85">{METHOD.intro}</p>
          <p className="mt-3 text-white/75">
            Six core components, delivered with four advanced technologies and tailored to each patient.{" "}
            <span className="font-semibold text-white">{METHOD.tagline}</span>
          </p>
          <Link href={METHOD.href} className="btn-primary mt-8 text-base">
            Explore the Swolensky Method
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Doctors />
      <Practice />
      <MethodIntro />
      <CoreComponents compact />
      <PersonalizedCare />
      <FinalCta location="about_final_cta" />
    </>
  );
}
