import Image from "next/image";
import Reveal from "@/components/Reveal";

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
              Disc Centers of America, Henderson. Helping the valley avoid surgery and get out of pain.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
