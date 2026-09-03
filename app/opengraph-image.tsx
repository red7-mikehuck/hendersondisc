import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { PAGES } from "@/lib/seo";

export const alt = PAGES.home.og.alt;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage({
    eyebrow: "Disc Centers of America · Henderson, NV",
    title: "Back, neck & sciatic pain relief. No surgery. No drugs.",
    subtitle: "The Swolensky Method: spinal decompression, cold laser, electroanalgesia and shockwave, in one plan.",
    photo: "hero-active-couple.jpg",
    photoPosition: "72% center",
  });
}
