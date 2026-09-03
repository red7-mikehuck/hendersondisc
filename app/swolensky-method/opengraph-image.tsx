import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { PAGES } from "@/lib/seo";

export const alt = PAGES.method.og.alt;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage({
    eyebrow: "A proprietary, non-surgical program",
    title: "The Swolensky Method",
    subtitle: "Six core components. Four advanced technologies. One integrated method for back pain, sciatica and damaged discs.",
    photo: "dcoa-doctor.jpg",
    photoPosition: "center top",
  });
}
