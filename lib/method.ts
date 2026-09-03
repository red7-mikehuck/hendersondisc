import type { LucideIcon } from "lucide-react";
import { Apple, Droplets, Sparkles, ThermometerSnowflake, UnfoldVertical, Zap } from "lucide-react";

/**
 * The Swolensky Method — content model for /swolensky-method and the About page.
 * Copy is patient-facing and deliberately avoids outcome claims; see CLIENT-TODO.md §7 for what to confirm.
 */

export const METHOD = {
  name: "The Swolensky Method",
  href: "/swolensky-method",
  intro:
    "The Swolensky Method is a multi-phase clinical program created by Dr. Darrell Swolensky, designed to treat chronic back pain, sciatica, and damaged spinal discs without surgery.",
  tagline: "Multiple technologies. One integrated method.",
} as const;

export type CoreComponent = {
  name: string;
  blurb: string;
  Icon: LucideIcon;
  /** Anchor on the Method page when a technology delivers this component. */
  techHref?: string;
};

export const CORE_COMPONENTS: CoreComponent[] = [
  {
    name: "True Spinal Decompression",
    blurb: "Computer-controlled traction that gently takes pressure off injured discs and pinched nerves.",
    Icon: UnfoldVertical,
    techHref: "#spinal-decompression",
  },
  {
    name: "Electroanalgesia",
    blurb: "High-frequency electrical therapy that helps quiet overactive pain nerves.",
    Icon: Zap,
    techHref: "#electroanalgesia",
  },
  {
    name: "Cold Laser Therapy",
    blurb: "Low-level laser light that supports tissue repair and helps ease inflammation.",
    Icon: Sparkles,
    techHref: "#cold-laser",
  },
  {
    name: "Nutritional Support",
    blurb: "Targeted nutrition that gives healing tissue the building blocks it needs.",
    Icon: Apple,
  },
  {
    name: "Inflammation Control",
    blurb: "A plan to reduce the inflammation that keeps discs and nerves irritated.",
    Icon: ThermometerSnowflake,
  },
  {
    name: "Hydration Protocols",
    blurb: "Simple daily hydration habits that help discs rehydrate and recover.",
    Icon: Droplets,
  },
];

export type TechImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Photo background: the image frame is painted to match so product shots sit cleanly. */
  frame?: "light" | "dark";
};

export type Technology = {
  slug: string;
  /** Short category label shown in the eyebrow, e.g. "Traction therapy". */
  category: string;
  /** Treatment name — the feature headline. */
  treatment: string;
  device: string;
  manufacturer: string;
  image: TechImage;
  whatItDoes: string;
  howItWorks: string;
  benefits: string[];
};

export const TECHNOLOGIES: Technology[] = [
  {
    slug: "spinal-decompression",
    category: "Traction therapy",
    treatment: "True Spinal Decompression",
    device: "DRX9000",
    manufacturer: "Excite Medical",
    image: {
      src: "/images/tech-drx9000.jpg",
      alt: "The DRX9000 lumbar spinal decompression system: a padded treatment table with a tall computer console and monitor at its head.",
      width: 1400,
      height: 1050,
    },
    whatItDoes:
      "Gently relieves pressure on herniated, bulging and degenerated discs so pinched nerves can calm down and the disc can begin to heal.",
    howItWorks:
      "You lie comfortably on the table while the DRX9000's computer applies precise, gradual traction to the lower spine, adjusting in real time to how your body responds. This creates negative pressure inside the disc, which can draw the bulge back and pull in water and nutrients. Sessions take under 30 minutes; many patients read or rest.",
    benefits: [
      "No surgery, injections or downtime",
      "Treats the disc itself, not just the symptoms",
      "Computer-controlled precision, adjusted to you",
      "FDA-cleared for true non-surgical spinal decompression",
    ],
  },
  {
    slug: "cold-laser",
    category: "Cold laser therapy",
    treatment: "Cold Laser Therapy",
    device: "Erchonia EVRL",
    manufacturer: "Erchonia",
    image: {
      src: "/images/tech-erchonia-evrl.jpg",
      alt: "The Erchonia EVRL handheld laser, a grey device with a touchscreen that emits red and violet light.",
      width: 505,
      height: 1249,
    },
    whatItDoes:
      "Uses low-level red and violet laser light to help calm inflammation and support tissue repair around irritated discs, nerves and joints.",
    howItWorks:
      "The EVRL is a handheld, non-heating laser. Its light is absorbed by cells, which stimulates their energy production and supports the body's natural repair process. Within the Swolensky Method it is used alongside decompression to help the treated area recover between sessions.",
    benefits: [
      "Painless, with no heat or sensation",
      "Drug-free support for inflammation",
      "Short in-office sessions",
      "Complements decompression and electroanalgesia",
    ],
  },
  {
    slug: "electroanalgesia",
    category: "Electroanalgesia therapy",
    treatment: "Electroanalgesia Therapy",
    device: "Matrix",
    manufacturer: "NeuroMed",
    image: {
      src: "/images/tech-neuromed-matrix.jpg",
      alt: "The NeuroMed Matrix electroanalgesia system on its white cart, with four treatment pads and red and blue leads.",
      width: 1200,
      height: 1610,
      frame: "dark",
    },
    whatItDoes:
      "Delivers precise, high-frequency electrical stimulation that helps block pain signals to the brain and quiet overactive nerves. Used for back, leg and neuropathy pain.",
    howItWorks:
      "A TENS unit delivers up to a few hundred pulses per second. The Matrix delivers thousands, reaching deeper tissue for a longer-lasting effect. Pads are placed around the painful area and the system runs a program selected for your condition; sessions typically last 20 to 40 minutes.",
    benefits: [
      "Non-invasive and drug-free",
      "Deeper, longer-lasting effect than TENS",
      "Helpful for nerve pain and neuropathy",
      "Adjustable to each patient's needs",
    ],
  },
  {
    slug: "sound-therapy",
    category: "Sound therapy",
    treatment: "Hyperwave Shockwave Therapy",
    device: "HyperWave",
    manufacturer: "HyperWave Medical",
    image: {
      src: "/images/tech-hyperwave.jpg",
      alt: "The HyperWave focused shockwave system: a white tabletop unit with a touchscreen and a handheld applicator.",
      width: 1223,
      height: 874,
    },
    whatItDoes:
      "Uses focused acoustic waves to stimulate healing in stubborn joints, tendons and soft tissue: knees, hips, shoulders and chronic muscle pain.",
    howItWorks:
      "A handheld applicator delivers controlled acoustic pulses into the irritated tissue, focused at the depth of the problem. The pulses stimulate local blood flow, help break up adhesions and tight tissue, and trigger the body's own repair response. Most sessions are short and performed in-office.",
    benefits: [
      "Non-surgical, no anesthesia, no downtime",
      "Applied directly to the problem area",
      "Supports the body's natural healing",
      "Pairs with decompression and laser for knee and joint pain",
    ],
  },
];

export type Doctor = {
  name: string;
  credentials: string;
  role: string;
  image: { src: string; alt: string; width: number; height: number };
  paragraphs: string[];
  facts: string[];
};

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Darrell C. Swolensky",
    credentials: "D.C.",
    role: "Founder · Creator of the Swolensky Method",
    image: {
      src: "/images/dcoa-doctor.jpg",
      alt: "Portrait of Dr. Darrell Swolensky, D.C., smiling in a navy blazer.",
      width: 1200,
      height: 1208,
    },
    paragraphs: [
      "Dr. Swolensky founded Disc Centers of America – Henderson and created the Swolensky Method, a multi-phase, non-surgical program for chronic back pain, sciatica and damaged spinal discs. He is an authority on non-surgical solutions to disc problems, and over his career he has trained thousands of doctors on applying advanced treatment technologies to improve patient care.",
      "His approach is simple: find the real source of the pain, treat the disc and the nerve directly, and give the body what it needs to heal, without surgery or drugs. Outside the clinic he is passionate about sports performance and physical training, and he enjoys dirt-bike racing.",
    ],
    facts: ["Founder, Disc Centers of America – Henderson", "Creator of the Swolensky Method", "Has trained thousands of doctors"],
  },
  {
    name: "Dr. Gregory Shepard",
    credentials: "D.C.",
    role: "Chiropractic Physician",
    image: {
      src: "/images/dcoa-dr-shepard.jpg",
      alt: "Portrait of Dr. Gregory Shepard, D.C.",
      width: 1000,
      height: 1043,
    },
    paragraphs: [
      "Dr. Shepard is a graduate of Palmer College of Chiropractic West. He studied kinesiology and biomechanics at California State University, Northridge while playing college baseball, then played professionally in the Chicago White Sox organization. He is a member of the Professional Baseball Chiropractic Society.",
      "He has practiced in Henderson and Las Vegas since 2017 and joined Disc Centers of America in December 2022. Dr. Shepard brings an athlete's understanding of movement and mechanics to every evaluation, with a focus on restoring function so patients can get back to the activities they love.",
    ],
    facts: ["Palmer College of Chiropractic West", "Former professional baseball player", "Practicing in Henderson since 2017"],
  },
];
