import { ClipboardList, PhoneCall, Stethoscope } from "lucide-react";
import Reveal from "@/components/Reveal";
import TelLink from "@/components/TelLink";
import { SITE } from "@/lib/site";

export default function GettingStarted() {
  const steps = [
    {
      Icon: ClipboardList,
      title: "Request your free consultation",
      body: (
        <>
          Use the{" "}
          <a href="#consult" className="font-semibold text-brand-bluemid underline-offset-2 hover:underline">
            form above
          </a>
          .
        </>
      ),
    },
    {
      Icon: PhoneCall,
      title: "We'll call to confirm you're a candidate",
      body: (
        <>
          — or call us now at{" "}
          <TelLink location="getting_started" className="tabular font-semibold text-brand-blue hover:text-brand-bluemid">
            {SITE.phoneDisplay}
          </TelLink>
          .
        </>
      ),
    },
    {
      Icon: Stethoscope,
      title: "Meet Dr. Swolensky",
      body: <>for your consultation &amp; exam.</>,
    },
  ];

  return (
    <section
      className="section relative overflow-hidden bg-brand-bluesoft"
      aria-labelledby="start-heading"
      style={{
        backgroundImage: "url(/images/brand-texture.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="wrap relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Getting started</p>
          <h2 id="start-heading" className="h2 mt-3">
            Getting started is easy
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className="card flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-bluesoft text-brand-bluemid">
                  <s.Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="tabular font-display text-4xl font-extrabold text-brand-line">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-1.5 text-brand-grey">{s.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm text-brand-grey">
            Consultations are limited — if you book, please keep your spot open for someone who needs it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
