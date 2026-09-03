import type { Metadata } from "next";
import MethodHero from "@/components/sections/method/MethodHero";
import CoreComponents from "@/components/sections/method/CoreComponents";
import IntegratedBand from "@/components/sections/method/IntegratedBand";
import Technology from "@/components/sections/method/Technology";
import PersonalizedCare from "@/components/sections/PersonalizedCare";
import FinalCta from "@/components/sections/FinalCta";
import PageJsonLd from "@/components/PageJsonLd";
import { CORE_COMPONENTS, METHOD, TECHNOLOGIES } from "@/lib/method";
import { PAGES, pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata: Metadata = pageMetadata(PAGES.method);

export default function SwolenskyMethodPage() {
  const pageUrl = `${SITE.url}${METHOD.href}`;
  return (
    <>
      <PageJsonLd
        path={METHOD.href}
        type="MedicalWebPage"
        name={PAGES.method.title}
        description={PAGES.method.description}
        crumbs={[{ name: METHOD.name, path: METHOD.href }]}
        extra={[
          {
            "@type": "MedicalTherapy",
            "@id": `${pageUrl}#therapy`,
            name: METHOD.name,
            alternateName: "Swolensky Method of Disc Rejuvenation",
            description: METHOD.intro,
            url: pageUrl,
            provider: { "@id": `${SITE.url}/#clinic` },
            relevantSpecialty: "Chiropractic",
            howPerformed: CORE_COMPONENTS.map((c) => c.name).join(", "),
            subTherapy: TECHNOLOGIES.map((t) => ({
              "@type": "MedicalTherapy",
              "@id": `${pageUrl}#${t.slug}`,
              name: t.treatment,
              description: t.whatItDoes,
              url: `${pageUrl}#${t.slug}`,
              image: `${SITE.url}${t.image.src}`,
              relevantSpecialty: "Chiropractic",
              device: { "@type": "MedicalDevice", name: t.device, manufacturer: { "@type": "Organization", name: t.manufacturer } },
            })),
          },
        ]}
      />
      <MethodHero />
      <CoreComponents />
      <IntegratedBand />
      <Technology />
      <PersonalizedCare />
      <FinalCta location="method_final_cta" />
    </>
  );
}
