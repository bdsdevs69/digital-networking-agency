import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOP_LISTS_PAGE } from "@/content/landings";
import { GUIDES } from "@/content/guides";
import { LandingArticle } from "@/components/LandingArticle";
import { extractFaq } from "@/lib/faq";
import { clampDescription, clampTitle } from "@/lib/meta";
import styles from "../guides/guides.module.css";

const SITE = "https://www.digitalnetworkingagency.com";
const URL = `${SITE}/get-featured-in-top-lists`;

export async function generateMetadata(): Promise<Metadata> {
  if (!TOP_LISTS_PAGE) return {};
  const title = clampTitle(TOP_LISTS_PAGE.title);
  const description = clampDescription(TOP_LISTS_PAGE.description);
  return {
    title,
    description,
    alternates: { canonical: URL },
    openGraph: { title, description, url: URL, siteName: "Digital Networking Agency", type: "website", locale: "en_US" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function Page() {
  const p = TOP_LISTS_PAGE;
  if (!p) notFound();
  const faqs = extractFaq(p.body);
  const related = ["why-ai-engines-cite-listicles", "how-ai-engines-choose-sources", "sponsored-vs-branded-vs-advertorial", "is-guaranteed-pr-legit"].map((s) => GUIDES.find((g) => g.slug === s)).filter((g): g is NonNullable<typeof g> => Boolean(g));
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${URL}#service`,
      name: p.h1,
      serviceType: "Public relations and media placement",
      description: clampDescription(p.description),
      url: URL,
      image: `${URL}/opengraph-image`,
      provider: {
  "@type": "ProfessionalService",
  "@id": `${SITE}/#organization`,
  name: "Digital Networking Agency",
  url: `${SITE}/`,
},
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Get Featured", item: `${SITE}/get-featured-in` },
        { "@type": "ListItem", position: 3, name: p.h1, item: URL },
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
      crumbs={[{ href: "/", label: "Home" }, { href: "/get-featured-in", label: "Get Featured" }]}
      h1={p.h1}
      cover={{ src: "/get-featured-in-top-lists/opengraph-image", alt: "Get featured in top 5 and top 10 lists — DNA PR" }}
      toc={p.toc}
      takeaways={p.takeaways}
      body={p.body}
      jsonLd={jsonLd}
    >
      {related.length ? (
        <section className={styles.more}>
          <h2>Worth reading first</h2>
          <ul>
            {related.map((g) => (
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
