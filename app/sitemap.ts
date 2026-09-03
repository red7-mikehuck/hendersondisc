import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE.url}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${SITE.url}/images/hero-desktop.jpg`, `${SITE.url}/images/dcoa-drx9000.jpg`, `${SITE.url}/images/dcoa-doctor.jpg`],
    },
    {
      url: `${SITE.url}/swolensky-method`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${SITE.url}/images/tech-drx9000.jpg`,
        `${SITE.url}/images/tech-erchonia-evrl.jpg`,
        `${SITE.url}/images/tech-neuromed-matrix.jpg`,
        `${SITE.url}/images/tech-hyperwave.jpg`,
      ],
    },
    {
      url: `${SITE.url}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [`${SITE.url}/images/dcoa-doctor.jpg`, `${SITE.url}/images/dcoa-dr-shepard.jpg`, `${SITE.url}/images/dcoa-clinic-exterior.jpg`],
    },
    { url: `${SITE.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
