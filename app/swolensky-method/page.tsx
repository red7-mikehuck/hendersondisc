import type { Metadata } from "next";
import MethodHero from "@/components/sections/method/MethodHero";
import CoreComponents from "@/components/sections/method/CoreComponents";
import IntegratedBand from "@/components/sections/method/IntegratedBand";
import Technology from "@/components/sections/method/Technology";
import PersonalizedCare from "@/components/sections/PersonalizedCare";
import FinalCta from "@/components/sections/FinalCta";
import { METHOD } from "@/lib/method";

const TITLE = "The Swolensky Method";
const DESCRIPTION =
  "A multi-phase, non-surgical program for chronic back pain, sciatica and damaged discs. Six core components, four advanced technologies, one integrated method. Henderson, NV.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: METHOD.href },
  openGraph: { title: TITLE, description: DESCRIPTION, url: METHOD.href },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function SwolenskyMethodPage() {
  return (
    <>
      <MethodHero />
      <CoreComponents />
      <IntegratedBand />
      <Technology />
      <PersonalizedCare />
      <FinalCta location="method_final_cta" />
    </>
  );
}
