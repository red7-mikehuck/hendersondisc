import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import TryFirst from "@/components/sections/TryFirst";
import Conditions from "@/components/sections/Conditions";
import HowItWorks from "@/components/sections/HowItWorks";
import GettingStarted from "@/components/sections/GettingStarted";
import VideoTestimonial from "@/components/sections/VideoTestimonial";
import Results from "@/components/sections/Results";
import Doctor from "@/components/sections/Doctor";
import FinalCta from "@/components/sections/FinalCta";
import PageJsonLd from "@/components/PageJsonLd";
import { PAGES } from "@/lib/seo";
import { CONDITIONS } from "@/lib/site";

// Title/description/OG inherit from the root layout; only the canonical is page-specific.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <PageJsonLd
        path="/"
        type="MedicalWebPage"
        name={PAGES.home.title}
        description={PAGES.home.description}
        extra={[
          {
            "@type": "ItemList",
            name: "Conditions we help",
            itemListElement: CONDITIONS.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c })),
          },
        ]}
      />
      <Hero />
      <TrustBar />
      <TryFirst />
      <Conditions />
      <HowItWorks />
      <GettingStarted />
      <VideoTestimonial />
      <Results />
      <Doctor />
      <FinalCta />
    </>
  );
}
