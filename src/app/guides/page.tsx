import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/content/guides";
import { OUTLETS } from "@/content/outlets";
import styles from "./guides.module.css";

const SITE = "https://www.digitalnetworkingagency.com";

export const metadata: Metadata = {
  title: "PR & Media Guides — How to Get Featured | DNA",
  description:
    "How media placement actually works — the real routes into Forbes, MSN and more, what makes a story land, and how DNA gets founders featured.",
  alternates: { canonical: `${SITE}/guides` },
  openGraph: {
    title: "PR & Media Guides — How to Get Featured | DNA",
    description:
      "How media placement actually works — the real routes into Forbes, MSN and more, what makes a story land, and how DNA gets founders featured.",
    url: `${SITE}/guides`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

export default function GuidesIndex() {
  // Group the guides so the index stays navigable as the library grows, and so
  // the topical structure is legible to search engines.
  const outletGuideSlugs = new Set(OUTLETS.map((o) => o.guideSlug));
  const isOutlet = (s: string) => outletGuideSlugs.has(s);
  const REGIONAL = new Set([
    "how-to-get-press-in-australia",
    "how-to-get-press-in-canada",
    "pr-for-australian-small-business",
    "pr-for-canadian-small-business",
    "australian-trade-publications-for-b2b",
    "why-canadian-newspapers-share-content",
  ]);
  const VISA = new Set([
    "eb1a-published-material-requirement",
    "o1-vs-eb1a-press-requirements",
    "what-counts-as-major-media-for-uscis",
    "when-to-start-press-for-a-visa-petition",
  ]);
  const isRegional = (s: string) => REGIONAL.has(s);
  const isVisa = (s: string) => VISA.has(s);
  const isIndustry = (s: string) =>
    !isRegional(s) &&
    (s.startsWith("how-to-get-press") ||
      s === "how-to-build-a-personal-brand-with-press" ||
      s === "white-label-pr-for-agencies");

  const SECTIONS = [
    {
      name: "Get featured in a publication",
      blurb:
        "The real routes into each outlet — what they publish, which routes are earned and which are paid, and how to build a story worth running.",
      guides: GUIDES.filter((g) => isOutlet(g.slug)),
    },
    {
      name: "PR for your industry",
      blurb:
        "What coverage does for your specific business, where the stories come from, and what editors in your space actually publish.",
      guides: GUIDES.filter((g) => !isOutlet(g.slug) && isIndustry(g.slug)),
    },
    {
      name: "How PR actually works",
      blurb:
        "Costs, terminology, vetting an agency, and the questions worth asking before you pay anyone.",
      guides: GUIDES.filter(
        (g) => !isOutlet(g.slug) && !isIndustry(g.slug) && !isRegional(g.slug) && !isVisa(g.slug)
      ),
    },
    {
      name: "PR by country",
      blurb:
        "How press works in the UK, Australia, Canada and the Gulf, and what a realistic route in looks like.",
      guides: GUIDES.filter((g) => isRegional(g.slug)),
    },
    {
      name: "Press for visa applicants",
      blurb:
        "What published material can and cannot do for an EB-1A or O-1 petition. Your immigration attorney decides what to file.",
      guides: GUIDES.filter((g) => isVisa(g.slug)),
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/guides#collection`,
    name: "PR & Media Guides",
    url: `${SITE}/guides`,
    description: metadata.description as string,
    hasPart: GUIDES.map((g) => ({
      "@type": "Article",
      headline: g.h1,
      url: `${SITE}/guides/${g.slug}`,
    })),
  };

  return (
    <div className={styles.page}>
      <main className={styles.wrap}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className={styles.crumbs} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
      </nav>

      <header className={styles.header}>
        <h1>PR &amp; Media Guides</h1>
        <p className={styles.lede}>
          How media placement actually works &mdash; the real routes into each
          publication, what makes a story land, and how we get founders and brands
          featured in the publications that matter.
        </p>
      </header>

      {SECTIONS.map((section) =>
        section.guides.length === 0 ? null : (
          <section key={section.name} className={styles.gsection}>
            <h2 className={styles.gsectionTitle}>{section.name}</h2>
            <p className={styles.gsectionBlurb}>{section.blurb}</p>
            <ul className={styles.grid}>
              {section.guides.map((guide) => (
                <li key={guide.slug} className={styles.card}>
                  <h3>
                    <Link href={`/guides/${guide.slug}`}>{guide.h1}</Link>
                  </h3>
                  <p>{guide.description}</p>
                  <Link className={styles.readMore} href={`/guides/${guide.slug}`}>
                    Read the guide &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )
      )}
      </main>
    </div>
  );
}
