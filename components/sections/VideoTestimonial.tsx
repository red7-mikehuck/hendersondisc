import Reveal from "@/components/Reveal";
import YouTubeFacade from "@/components/YouTubeFacade";
import { SITE } from "@/lib/site";

const TITLE = "NFL veteran Duane Clemons on getting relief with Dr. Swolensky";

export default function VideoTestimonial() {
  return (
    <section className="section bg-white" aria-labelledby="video-heading">
      <div className="wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">Video</p>
          <h2 id="video-heading" className="h2 mt-3">
            Hear it from the pros
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-10 max-w-4xl">
          <YouTubeFacade videoId={SITE.videoId} title={TITLE} poster="/images/video-poster.jpg" />
          <p className="mt-4 text-center text-sm text-brand-grey">{TITLE}.</p>
        </Reveal>
      </div>
    </section>
  );
}
