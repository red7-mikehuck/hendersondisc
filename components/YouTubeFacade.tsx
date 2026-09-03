"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

type Props = { videoId: string; title: string; poster: string };

/** Lightweight YouTube embed: poster + play button until clicked, then the iframe. */
export default function YouTubeFacade({ videoId, title, poster }: Props) {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-card border border-brand-line bg-brand-blue shadow-card">
      {play ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          <Image src={poster} alt="" fill sizes="(max-width: 1024px) 100vw, 900px" className="object-cover" />
          <span
            className="absolute inset-0 bg-brand-blue/25 transition group-hover:bg-brand-blue/15"
            aria-hidden="true"
          />
          <span
            className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-red text-white shadow-lift transition group-hover:scale-105"
            aria-hidden="true"
          >
            <Play className="ml-1 h-8 w-8 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}
