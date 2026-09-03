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

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
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
