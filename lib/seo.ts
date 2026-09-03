import type { Metadata } from "next";
import { SITE } from "./site";

/**
 * Site-wide SEO constants and a helper that builds a complete, self-contained Metadata object for a page.
 *
 * Next.js replaces nested `openGraph` / `twitter` objects wholesale when a page defines them (no deep merge),
 * so every page must restate type, locale, siteName and url or it silently loses them. Social images come from
 * the `opengraph-image.tsx` file convention in each route segment (file-based metadata outranks this object).
 */

export const DEFAULT_TITLE = "Non-Surgical Back, Neck & Sciatica Relief in Henderson, NV | Disc Centers of America";
export const DEFAULT_DESCRIPTION =
  "Relief from back, neck and sciatic pain without surgery or drugs. The Swolensky Method: spinal decompression (DRX9000), cold laser, electroanalgesia and shockwave therapy in Henderson, NV. Free consultation: (702) 565-7474.";

export const SITE_KEYWORDS = [
  "spinal decompression Henderson",
  "non-surgical back pain relief Henderson NV",
  "sciatica treatment Henderson",
  "herniated disc treatment Henderson",
  "DRX-9000 Henderson",
  "Swolensky Method",
  "Disc Centers of America Henderson",
  "Dr. Darrell Swolensky",
];

type PageMeta = {
  title: string;
  description: string;
  /** Route path, e.g. "/about". Resolved against metadataBase for canonical and og:url. */
  path: string;
  keywords?: readonly string[];
  /** Defaults to indexable. */
  noindex?: boolean;
  /** Social card for this page: path to its opengraph-image route + alt text. */
  og: { path: string; alt: string };
};

export function pageMetadata({ title, description, path, keywords, noindex, og }: PageMeta): Metadata {
  // Explicit images are required: a page-level openGraph object would otherwise drop the file-based image.
  const image = { url: og.path, width: 1200, height: 630, alt: og.alt };
  return {
    title,
    description,
    keywords: keywords ? [...keywords] : undefined,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE.name,
      url: path,
      title: `${title} | ${SITE.name}`,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: [image],
    },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

export const PAGES = {
  home: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    path: "/",
    og: {
      path: "/opengraph-image",
      alt: "Disc Centers of America – Henderson: relief from back, neck and sciatic pain without surgery or drugs.",
    },
  },
  method: {
    title: "The Swolensky Method",
    description:
      "A multi-phase, non-surgical program for chronic back pain, sciatica and damaged discs. Six core components, four advanced technologies (DRX9000, Erchonia EVRL, NeuroMed Matrix, HyperWave), one integrated method. Henderson, NV.",
    path: "/swolensky-method",
    keywords: [
      "Swolensky Method",
      "non-surgical disc treatment Henderson",
      "DRX9000 spinal decompression",
      "cold laser therapy Henderson",
      "electroanalgesia Henderson",
      "shockwave therapy Henderson",
      "sciatica treatment without surgery",
    ],
    og: {
      path: "/swolensky-method/opengraph-image",
      alt: "The Swolensky Method: a multi-phase, non-surgical program for chronic back pain, sciatica and damaged discs, created by Dr. Darrell Swolensky.",
    },
  },
  about: {
    title: "About Us",
    description:
      "Meet Dr. Darrell Swolensky and Dr. Gregory Shepard of Disc Centers of America – Henderson, and learn how the Swolensky Method helps patients avoid surgery for back, disc and nerve pain.",
    path: "/about",
    keywords: [
      "Dr. Darrell Swolensky",
      "Dr. Gregory Shepard",
      "Disc Centers of America Henderson",
      "chiropractor Henderson NV",
      "spinal decompression clinic Henderson",
    ],
    og: {
      path: "/about/opengraph-image",
      alt: "About Disc Centers of America – Henderson: Dr. Darrell Swolensky, Dr. Gregory Shepard and the Henderson clinic.",
    },
  },
  privacy: {
    title: "Privacy Policy",
    description: `How ${SITE.name} collects, uses and protects the information you share on this site.`,
    path: "/privacy",
    og: {
      path: "/opengraph-image",
      alt: "Disc Centers of America – Henderson: relief from back, neck and sciatic pain without surgery or drugs.",
    },
  },
  thankYou: {
    title: "You're all set",
    description: "Thanks for requesting a free consultation. Call (702) 565-7474 to lock in your time.",
    path: "/thank-you",
    noindex: true,
    og: {
      path: "/opengraph-image",
      alt: "Disc Centers of America – Henderson: relief from back, neck and sciatic pain without surgery or drugs.",
    },
  },
} as const;
