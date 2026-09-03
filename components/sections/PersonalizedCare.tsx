import { ArrowRight, ClipboardCheck, Combine, Target } from "lucide-react";
import Reveal from "@/components/Reveal";

const PILLARS = [
  {
    Icon: ClipboardCheck,
    title: "Evaluation first",
    body: "Every plan starts with a consultation and exam to find where the pain is really coming from: disc, nerve, joint or soft tissue.",
  },
  {
    Icon: Combine,
    title: "Technology matched to you",
    body: "Decompression, laser, electroanalgesia and shockwave are combined in the order and dose your condition calls for.",
  },
  {
    Icon: Target,
    title: "Progress you can measure",
    body: "Pain, mobility and function are tracked visit to visit, and the plan is adjusted as you improve.",
  },
];

type Props = { ctaHref?: string };

export default function PersonalizedCare({ ctaHref = "#contact" }: Props) {
  return (
    <section
      id="personalized-care"
      className="section relative overflow-hidden bg-brand-bluesoft"
      aria-labelledby="care-heading"
      style={{ backgroundImage: "url(/images/brand-texture.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="wrap relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Personalized care</p>
          <h2 id="care-heading" className="h2 mt-3">
            Advanced technology. Individual attention.
          </h2>
          <p className="mt-4 text-lg text-brand-grey">
            The equipment matters, but the plan matters more. Each patient is evaluated individually and treated with
            the combination that fits their condition.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {PILLARS.map(({ Icon, title, body }, i) => (
            <Reveal as="li" key={title} delay={i * 0.08} className="card flex h-full flex-col p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-bluesoft text-brand-bluemid">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-1.5 text-brand-grey">{body}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-10 text-center">
          <a href={ctaHref} className="btn-primary text-base">
            Schedule your free consultation
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
