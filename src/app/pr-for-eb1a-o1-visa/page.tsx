import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VISA_PAGE } from "@/content/landings";
import { GUIDES } from "@/content/guides";
import { LandingArticle } from "@/components/LandingArticle";
import { extractFaq } from "@/lib/faq";
import { clampDescription, clampTitle } from "@/lib/meta";
import styles from "../guides/guides.module.css";

const SITE = "https://www.digitalnetworkingagency.com";
const URL = `${SITE}/pr-for-eb1a-o1-visa`;

export async function generateMetadata(): Promise<Metadata> {
  if (!VISA_PAGE) return {};
  const title = clampTitle(VISA_PAGE.title);
  const description = clampDescription(VISA_PAGE.description);
  return {
    title,
    description,
    alternates: { canonical: URL },
    openGraph: { title, description, url: URL, siteName: "Digital Networking Agency", type: "website", locale: "en_US" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function Page() {
  const p = VISA_PAGE;
  if (!p) notFound();
  const faqs = extractFaq(p.body);
  const related = ["eb1a-published-material-requirement", "o1-vs-eb1a-press-requirements", "what-counts-as-major-media-for-uscis", "when-to-start-press-for-a-visa-petition"].map((s) => GUIDES.find((g) => g.slug === s)).filter((g): g is NonNullable<typeof g> => Boolean(g));
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
      audience: { "@type": "Audience", audienceType: "EB-1A and O-1 visa applicants" },
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
        { "@type": "ListItem", position: 2, name: "PR by Industry", item: `${SITE}/pr-for` },
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
      crumbs={[{ href: "/", label: "Home" }, { href: "/pr-for", label: "PR by Industry" }]}
      h1={p.h1}
      cover={{ src: "/pr-for-eb1a-o1-visa/opengraph-image", alt: "Press for EB-1A and O-1 visa applicants — DNA PR" }}
      toc={p.toc}
      takeaways={p.takeaways}
      body={p.body}
      jsonLd={jsonLd}
    >
      {related.length ? (
        <section className={styles.more}>
          <h2>Read before you file</h2>
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
