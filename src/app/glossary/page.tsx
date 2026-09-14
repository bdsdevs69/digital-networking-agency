import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GLOSSARY } from "@/content/glossary";
import { clampDescription, clampTitle } from "@/lib/meta";
import styles from "../guides/guides.module.css";

const SITE = "https://www.digitalnetworkingagency.com";
const URL = `${SITE}/glossary`;

export async function generateMetadata(): Promise<Metadata> {
  if (!GLOSSARY) return {};
  const title = clampTitle(GLOSSARY.title);
  const description = clampDescription(GLOSSARY.description);
  return {
    title,
    description,
    alternates: { canonical: URL },
    openGraph: { title, description, url: URL, siteName: "Digital Networking Agency", type: "website", locale: "en_US" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function GlossaryPage() {
  const g = GLOSSARY;
  if (!g) notFound();
  const letters = Array.from(new Set(g.terms.map((t) => t.term[0].toUpperCase())));
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      "@id": `${URL}#terms`,
      name: g.h1,
      description: clampDescription(g.description),
      url: URL,
      hasDefinedTerm: g.terms.map((t) => ({
        "@type": "DefinedTerm",
        "@id": `${URL}#${t.id}`,
        name: t.term,
        description: t.definition,
        url: `${URL}#${t.id}`,
        inDefinedTermSet: `${URL}#terms`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE}/guides` },
        { "@type": "ListItem", position: 3, name: "Glossary", item: URL },
      ],
    },
  ];
  return (
    <div className={styles.page}>
      <main className={styles.wrap}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true"> / </span>
          <Link href="/guides">Guides</Link>
        </nav>
        <article className={styles.article}>
          <header className={styles.header}>
            <h1>{g.h1}</h1>
            <p className={styles.lede}>{g.intro}</p>
          </header>
          <figure className={styles.cover}>
            <img src="/glossary/opengraph-image" alt="PR glossary: media and PR terms defined — DNA PR" width={1200} height={630} fetchPriority="high" decoding="async" />
          </figure>
          <nav className={styles.toc} aria-label="Jump to letter">
            <span className={styles.tocTitle}>Jump to</span>
            <ul>
              {letters.map((l) => (
                <li key={l}>
                  <a href={`#${g.terms.find((t) => t.term[0].toUpperCase() === l)!.id}`}>{l}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.body}>
            {g.terms.map((t) => (
              <section key={t.id}>
                <h2 id={t.id}>{t.term}</h2>
                <p>{t.definition}</p>
                {t.link ? (
                  <p>
                    <Link href={t.link}>Read more &rarr;</Link>
                  </p>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </main>
    </div>
  );
}
