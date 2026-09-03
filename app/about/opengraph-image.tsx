import { ogImage, OG_CONTENT_TYPE, OG_SIZE } from "@/lib/og";
import { PAGES } from "@/lib/seo";

export const alt = PAGES.about.og.alt;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage({
    eyebrow: "About us",
    title: "Henderson's non-surgical spine and pain clinic",
    subtitle: "Meet Dr. Darrell Swolensky, Dr. Gregory Shepard and the team behind the Swolensky Method.",
    photo: "dcoa-clinic-exterior.jpg",
    photoPosition: "center 40%",
  });
}
