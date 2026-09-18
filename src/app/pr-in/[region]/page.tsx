import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { REGIONS, getRegion } from "@/content/regions";
import { getOutlet } from "@/content/outlets";
import { GUIDES } from "@/content/guides";
import { LandingArticle } from "@/components/LandingArticle";
import { extractFaq } from "@/lib/faq";
import { clampDescription, clampTitle } from "@/lib/meta";
import styles from "../../guides/guides.module.css";

const SITE = "https://www.digitalnetworkingagency.com";

// People search "get featured in <region>", not "PR in <region>". The title
// targets the phrase; the H1 and body keep the broader framing.
const SEARCH_TITLE: Record<string, string> = {
  uae: "Get Featured in Middle East Media | DNA PR",
  uk: "Get Featured in UK Media | Digital Networking Agency",
  australia: "Get Featured in Australian Media | DNA PR",
  canada: "Get Featured in Canadian Media | DNA PR",
};

const COUNTRY: Record<string, string> = {
  uae: "United Arab Emirates",
  uk: "United Kingdom",
  australia: "Australia",
  canada: "Canada",
};

// Regional guides that belong to each hub, beyond its outlet guides.
const REGION_GUIDES: Record<string, string[]> = {
  australia: ["how-to-get-press-in-australia", "pr-for-australian-small-business", "australian-trade-publications-for-b2b"],
  canada: ["how-to-get-press-in-canada", "pr-for-canadian-small-business", "why-canadian-newspapers-share-content"],
};

export const dynamicParams = false;

export function generateStaticParams() {
  return REGIONS.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region } = await params;
  const r = getRegion(region);
  if (!r) return {};
  const url = `${SITE}/pr-in/${r.slug}`;
  const title = clampTitle(SEARCH_TITLE[r.slug] ?? r.title);
  const description = clampDescription(r.description);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Digital Networking Agency", type: "website", locale: "en_US" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function RegionPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const r = getRegion(region);
  if (!r) notFound();

  const url = `${SITE}/pr-in/${r.slug}`;
  const outlets = r.outlets.map(getOutlet).filter((o): o is NonNullable<typeof o> => Boolean(o));
  const guideSlugs = [...outlets.map((o) => o.guideSlug), ...(REGION_GUIDES[r.slug] ?? [])];
  const guides = guideSlugs.map((s) => GUIDES.find((g) => g.slug === s)).filter((g): g is NonNullable<typeof g> => Boolean(g));
  const faqs = extractFaq(r.body);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: r.h1,
      serviceType: "Public relations and media placement",
      description: clampDescription(r.description),
      url,
      image: `${url}/opengraph-image`,
      areaServed: { "@type": "Country", name: COUNTRY[r.slug] ?? r.region },
      provider: {
  "@type": "ProfessionalService",
  "@id": `${SITE}/#organization`,
  name: "Digital Networking Agency",
  url: `${SITE}/`,
},
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Publications in ${r.region}`,
      itemListElement: outlets.map((o, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `Get featured in ${o.name}`,
        url: `${SITE}/get-featured-in/${o.slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "PR by Country", item: `${SITE}/pr-in` },
        { "@type": "ListItem", position: 3, name: r.h1, item: url },
      ],
    },
    ...(faqs.length
      ? [{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }]
      : []),
  ];

  return (
    <LandingArticle
      crumbs={[{ href: "/", label: "Home" }, { href: "/pr-in", label: "PR by Country" }]}
      h1={r.h1}
      lede={r.intro}
      cover={{ src: `/pr-in/${r.slug}/opengraph-image`, alt: `${r.h1} — publications and PR from DNA` }}
      toc={r.toc}
      takeaways={r.takeaways}
      body={r.body}
      jsonLd={jsonLd}
    >
      <section className={styles.gsection}>
        <h2 className={styles.gsectionTitle}>Publications we place in across {r.region}</h2>
        <p className={styles.gsectionBlurb}>Each has its own page explaining what it publishes and which routes in are realistic.</p>
        <ul className={styles.grid}>
          {outlets.map((o) => (
            <li key={o.slug} className={styles.card}>
              <h3>
                <Link href={`/get-featured-in/${o.slug}`}>{o.name}</Link>
              </h3>
              <p>{o.subhead}</p>
              <Link className={styles.readMore} href={`/get-featured-in/${o.slug}`}>
                Get featured &rarr;
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {faqs.length ? (
        <section className={styles.gsection}>
          <h2 className={styles.gsectionTitle}>How do I get featured in {r.region}?</h2>
          <p className={styles.gsectionBlurb}>{faqs[0].a}</p>
        </section>
      ) : null}

      {guides.length ? (
        <section className={styles.more}>
          <h2>Guides for this market</h2>
          <ul>
            {guides.map((g) => (
              <li key={g.slug}>
                <Link href={`/guides/${g.slug}`}>{g.h1}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </LandingArticle>
  );
}
