import { SITE } from "@/lib/site";
import { METHOD, TECHNOLOGIES } from "@/lib/method";

export default function JsonLd() {
  const clinicId = `${SITE.url}/#clinic`;
  const swolenskyId = `${SITE.url}/#dr-swolensky`;
  const shepardId = `${SITE.url}/#dr-shepard`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        alternateName: SITE.shortName,
        inLanguage: "en-US",
        publisher: { "@id": clinicId },
      },
      {
        "@type": "MedicalClinic",
        "@id": clinicId,
        name: SITE.name,
        alternateName: "Henderson Disc",
        url: SITE.url,
        telephone: SITE.phoneE164,
        email: SITE.email,
        image: `${SITE.url}/images/dcoa-clinic-exterior.jpg`,
        logo: `${SITE.url}/images/dcoa-logo.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.region,
          postalCode: SITE.address.postal,
          addressCountry: SITE.address.country,
        },
        // TODO(client): add openingHoursSpecification + geo once confirmed (CLIENT-TODO.md)
        medicalSpecialty: "Chiropractic",
        availableService: [
          {
            "@type": "MedicalTherapy",
            name: METHOD.name,
            url: `${SITE.url}${METHOD.href}`,
            description: METHOD.intro,
          },
          ...TECHNOLOGIES.map((t) => ({
            "@type": "MedicalTherapy",
            name: `${t.treatment} (${t.device})`,
            url: `${SITE.url}${METHOD.href}#${t.slug}`,
          })),
        ],
        sameAs: [SITE.socials.facebook, SITE.socials.instagram, SITE.socials.youtube],
        founder: { "@id": swolenskyId },
        employee: [{ "@id": swolenskyId }, { "@id": shepardId }],
      },
      {
        "@type": "Physician",
        "@id": swolenskyId,
        name: "Dr. Darrell Swolensky",
        honorificSuffix: "D.C.",
        jobTitle: "Chiropractor",
        description: "Founder of Disc Centers of America – Henderson and creator of the Swolensky Method.",
        image: `${SITE.url}/images/dcoa-doctor.jpg`,
        worksFor: { "@id": clinicId },
        medicalSpecialty: "Chiropractic",
        telephone: SITE.phoneE164,
        url: `${SITE.url}/about`,
      },
      {
        "@type": "Physician",
        "@id": shepardId,
        name: "Dr. Gregory Shepard",
        honorificSuffix: "D.C.",
        jobTitle: "Chiropractor",
        alumniOf: "Palmer College of Chiropractic West",
        image: `${SITE.url}/images/dcoa-dr-shepard.jpg`,
        worksFor: { "@id": clinicId },
        medicalSpecialty: "Chiropractic",
        telephone: SITE.phoneE164,
        url: `${SITE.url}/about`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      // Generated from constants only; no user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
