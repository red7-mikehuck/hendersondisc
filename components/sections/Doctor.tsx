import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { METHOD } from "@/lib/method";

export default function Doctor() {
  return (
    <section className="section bg-white" aria-labelledby="doctor-heading">
      <Reveal className="wrap">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
          <Image
            src="/images/dcoa-doctor.jpg"
            alt="Portrait of Dr. Darrell Swolensky, D.C., smiling in a navy blazer."
            width={1200}
            height={1208}
            sizes="(max-width: 640px) 160px, 200px"
            className="h-40 w-40 shrink-0 rounded-full border-4 border-brand-bluesoft object-cover shadow-card sm:h-48 sm:w-48"
          />
          <div>
            <p className="eyebrow">Your doctor</p>
            <h2 id="doctor-heading" className="mt-2 text-2xl font-bold sm:text-3xl">
              Care from Dr. Darrell Swolensky, D.C.
            </h2>
            <p className="mt-3 text-lg leading-8 text-brand-grey">
              Founder of Disc Centers of America, Henderson and creator of{" "}
              <Link href={METHOD.href} className="font-semibold text-brand-bluemid underline-offset-2 hover:underline">
                the Swolensky Method
              </Link>
              . Helping the valley avoid surgery and get out of pain.
            </p>
            <Link
              href="/about"
              className="mt-4 inline-flex items-center gap-1.5 font-semibold text-brand-blue hover:text-brand-bluemid"
            >
              Meet Dr. Swolensky and Dr. Shepard
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
