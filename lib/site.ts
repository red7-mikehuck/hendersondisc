export const SITE = {
  name: "Disc Centers of America – Henderson",
  shortName: "Henderson Disc",
  doctor: "Dr. Darrell Swolensky, D.C.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hendersondisc.com",
  phoneDisplay: "(702) 565-7474",
  phoneHref: "tel:+17025657474",
  phoneE164: "+1-702-565-7474",
  email: "info@drswolensky.com",
  address: {
    street: "3 E Ocean Ave",
    city: "Henderson",
    region: "NV",
    postal: "89015",
    country: "US",
  },
  // TODO(client): confirm hours — see CLIENT-TODO.md
  hoursDisplay: "Call for current hours",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Disc+Centers+of+America+Henderson+3+E+Ocean+Ave+Henderson+NV+89015",
  socials: {
    facebook: "https://www.facebook.com/disccentersofamericahenderson/",
    instagram: "https://www.instagram.com/disccentersofamerica_henderson/",
    youtube: "https://www.youtube.com/channel/UCwBnddwNOJ3Ol7Rb85K0ogw",
  },
  videoId: "-U-AA92OmU4",
} as const;

export const NAP_LINE = `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postal}`;

export const CONCERNS = [
  "Sciatica / leg pain",
  "Lower back pain",
  "Neck pain",
  "Herniated / bulging disc",
  "Failed back surgery",
  "Numbness or tingling",
  "Something else",
] as const;

export const CONDITIONS = [
  "Sciatica",
  "Lower back pain",
  "Neck pain",
  "Herniated discs",
  "Failed back surgery",
  "Leg numbness",
  "Shooting hip pain",
  "Muscle spasms",
  "Post-surgery pain",
  "Knee pain",
  "Neuropathy",
  "Spinal stenosis",
] as const;

export type Testimonial = { name: string; city?: string; quote: string };

// Real testimonials from the practice's existing site, trimmed. See CLIENT-TODO.md for reuse sign-off.
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Paulette F.",
    quote:
      "After only 10 treatments my pain went from an 8 to a 1. I have hope again and my quality of life improves every day.",
  },
  {
    name: "Howard R.",
    quote:
      "I was bedridden after a herniated disc. After the 4th DRX-9000 treatment I could walk and move without pain. Worth every penny.",
  },
  {
    name: "Donna W.",
    city: "Henderson",
    quote:
      "A failed spinal fusion left me on heavy narcotics. Since seeing Dr. Swolensky, I went shopping for the first time in two years.",
  },
  {
    name: "Chase T.",
    city: "Henderson",
    quote: "Sharp back pain I felt all the time — gone in about two weeks.",
  },
  {
    name: "Albert P.",
    city: "Henderson",
    quote:
      "Weak legs and sore joints; in 3–4 weeks my leg pain dropped dramatically and my legs are stronger.",
  },
  {
    name: "Myles P.",
    quote:
      "Neck and shoulder pain used to dominate my day. It's reduced dramatically — I'm happier, calmer, and off medication.",
  },
];

// Real patient photos from the practice (drswolensky.com). Alt text describes the sign each patient holds.
export const PATIENT_PHOTOS = [
  {
    src: "/images/dcoa-patient-02.jpg",
    alt: "Henderson patient in the clinic lobby holding a letter board that reads: Finally, I am pain free.",
    width: 1000,
    height: 971,
  },
  {
    src: "/images/dcoa-patient-05.jpg",
    alt: "Dr. Swolensky with a smiling patient holding a whiteboard that reads: I am able to sleep again! Oh yeah!",
    width: 1000,
    height: 1000,
  },
  {
    src: "/images/dcoa-patient-01.jpg",
    alt: "Henderson patient holding a letter board that reads: My long-term issue was addressed right from the start. Why live with pain for years if you don't have to?",
    width: 1000,
    height: 1125,
  },
] as const;
