import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPARISONS, getComparison } from "@/content/comparisons";
import { LandingArticle } from "@/components/LandingArticle";
import { extractFaq } from "@/lib/faq";
import { clampDescription, clampTitle } from "@/lib/meta";
import styles from "../../guides/guides.module.css";

const SITE = "https://www.digitalnetworkingagency.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return COMPARISONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getComparison(slug);
  if (!c) return {};
  const url = `${SITE}/compare/${c.slug}`;
  const title = clampTitle(c.title);
  const description = clampDescription(c.description);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: "Digital Networking Agency", type: "article", locale: "en_US" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getComparison(slug);
  if (!c) notFound();

  const url = `${SITE}/compare/${c.slug}`;
  const faqs = extractFaq(c.body);
  const others = COMPARISONS.filter((o) => o.slug !== c.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: c.h1,
      description: clampDescription(c.description),
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image: `${url}/opengraph-image`,
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Digital Networking Agency", url: `${SITE}/` },
      publisher: { "@type": "Organization", name: "Digital Networking Agency", url: `${SITE}/` },
      about: { "@type": "Organization", name: c.competitor.name, url: c.competitor.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Compare", item: `${SITE}/compare` },
        { "@type": "ListItem", position: 3, name: c.h1, item: url },
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
      crumbs={[{ href: "/", label: "Home" }, { href: "/compare", label: "Compare" }]}
      h1={c.h1}
      cover={{ src: `/compare/${c.slug}/opengraph-image`, alt: `${c.h1} — DNA PR` }}
      toc={c.toc}
      takeaways={c.takeaways}
      body={c.body}
      jsonLd={jsonLd}
    >
      {others.length ? (
        <section className={styles.more}>
          <h2>Other comparisons</h2>
          <ul>
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/compare/${o.slug}`}>{o.h1}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </LandingArticle>
  );
}
