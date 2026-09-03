import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: "The Swolensky Method: non-surgical care for back, neck, disc and sciatic pain in Henderson, NV.",
    start_url: "/",
    display: "browser",
    background_color: "#FFFFFF",
    theme_color: "#0E3A5E",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
