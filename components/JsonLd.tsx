import { SITE } from "@/lib/site";

export default function JsonLd() {
  const clinicId = `${SITE.url}/#clinic`;
  const physicianId = `${SITE.url}/#dr-swolensky`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
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
        availableService: {
          "@type": "MedicalTherapy",
          name: "Non-surgical spinal decompression (DRX-9000)",
        },
        sameAs: [SITE.socials.facebook, SITE.socials.instagram, SITE.socials.youtube],
        employee: { "@id": physicianId },
      },
      {
        "@type": "Physician",
        "@id": physicianId,
        name: "Dr. Darrell Swolensky",
        honorificSuffix: "D.C.",
        jobTitle: "Chiropractor",
        image: `${SITE.url}/images/dcoa-doctor.jpg`,
        worksFor: { "@id": clinicId },
        medicalSpecialty: "Chiropractic",
        telephone: SITE.phoneE164,
        url: SITE.url,
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
