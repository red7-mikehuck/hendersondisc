import { SITE } from "@/lib/site";

type Crumb = { name: string; path: string };

type Props = {
  /** Path of the page, e.g. "/about". */
  path: string;
  name: string;
  description: string;
  /** schema.org WebPage subtype. */
  type?: "WebPage" | "AboutPage" | "MedicalWebPage" | "ContactPage";
  /** Breadcrumb trail below Home. */
  crumbs?: Crumb[];
  /** Extra nodes to append to the @graph (already-shaped schema.org objects). */
  extra?: Record<string, unknown>[];
};

/** Page-level JSON-LD: WebPage (+ subtype) and BreadcrumbList, linked to the site-wide clinic + website nodes. */
export default function PageJsonLd({ path, name, description, type = "WebPage", crumbs = [], extra = [] }: Props) {
  const url = `${SITE.url}${path === "/" ? "/" : path}`;
  const trail = [{ name: "Home", path: "/" }, ...crumbs];
  const graph: Record<string, unknown>[] = [
    {
      "@type": type,
      "@id": `${url}#webpage`,
      url,
      name,
      description,
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE.url}/#website` },
      about: { "@id": `${SITE.url}/#clinic` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${url === `${SITE.url}/` ? SITE.url : url}/opengraph-image` },
    },
    ...(crumbs.length
      ? [
          {
            "@type": "BreadcrumbList",
            "@id": `${url}#breadcrumb`,
            itemListElement: trail.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.name,
              item: `${SITE.url}${c.path === "/" ? "/" : c.path}`,
            })),
          },
        ]
      : []),
    ...extra,
  ];
  const data = { "@context": "https://schema.org", "@graph": graph };
  return (
    <script
      type="application/ld+json"
      // Generated from constants only; no user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
