import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudy } from "@/content/caseStudies";
import styles from "../case.module.css";
import { focal } from "@/lib/focal";
import { clampDescription } from "@/lib/meta";

const SITE = "https://www.digitalnetworkingagency.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  const url = `${SITE}/case-studies/${c.slug}`;
  const description = clampDescription(
    `How Digital Networking Agency featured ${c.name} in ${c.outlet}. ${c.quote}`
  );
  return {
    title: `${c.name} in ${c.outlet} | DNA Case Study`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${c.name} in ${c.outlet} | DNA Case Study`,
      description,
      url,
      siteName: "Digital Networking Agency",
      type: "article",
      locale: "en_US",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();

  const url = `${SITE}/case-studies/${c.slug}`;
  const others = CASE_STUDIES.filter((x) => x.slug !== c.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: `${c.name} in ${c.outlet}`,
      description: c.quote,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "Digital Networking Agency" },
      publisher: { "@id": `${SITE}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE}/case-studies` },
        { "@type": "ListItem", position: 3, name: c.name, item: url },
      ],
    },
  ];

  const sections = [
    { h: "The client", b: c.client },
    { h: "The goal", b: c.goal },
    { h: "What we did", b: c.did },
    { h: "The result", b: c.result },
  ];

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={`v-wrap ${styles.detail}`}>
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/case-studies">Case Studies</Link>
          <span aria-hidden="true">/</span>
          <span>{c.name}</span>
        </nav>

        <div className={styles.detailHead}>
          <div className={styles.detailText}>
            <span className={styles.detailOutlet}>Featured in {c.features && c.features.length > 1 ? c.features.map((f) => f.outlet).join(" · ") : c.outlet}</span>
            <h1>{c.name}</h1>
            <p className={styles.detailRole}>{c.role}</p>
            <p className={styles.detailQuote}>{c.quote}</p>
            <a className="v-btn v-btn--lg" href={c.url} target="_blank" rel="noopener noreferrer">
              Read it live on {c.outlet} <span aria-hidden="true">&#8599;</span>
            </a>
          </div>
          <a className={styles.detailShot} href={c.url} target="_blank" rel="noopener noreferrer">
            <img src={c.image} alt={`${c.name} featured in ${c.outlet}`} style={{ objectPosition: focal(c.image) }} />
            <span className={styles.live}>Live on {c.features && c.features.length > 1 ? `${c.features.length} publications` : c.outlet}</span>
          </a>
        </div>

        {c.features && c.features.length > 1 ? (
          <section className={styles.coverage} aria-label="The coverage">
            <div className={styles.coverageHead}>
              <span className="v-label v-label--lime">The coverage</span>
              <h2>
                {c.features.length} publications. <span className="v-hl">All live.</span>
              </h2>
            </div>
            <ol className={styles.coverageList}>
              {c.features.map((f, i) => (
                <li key={f.url}>
                  <a href={f.url} target="_blank" rel="noopener noreferrer">
                    <span className={styles.covN}>0{i + 1}</span>
                    <span className={styles.covOutlet}>{f.outlet}</span>
                    <span className={styles.covHead}>{f.headline}</span>
                    <span className={styles.covMeta}>
                      {new Date(f.date + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      {" · "}
                      {f.kind}
                    </span>
                    <span className={styles.covGo} aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        <div className={styles.detailBody}>
          {sections.map((s, i) => (
            <section key={s.h} className={styles.detailSection}>
              <span className={styles.secN}>0{i + 1}</span>
              <h2>{s.h}</h2>
              <p>{s.b}</p>
            </section>
          ))}
        </div>

        <section className={styles.more} aria-label="More case studies">
          <h2>More case studies</h2>
          <div className={styles.moreGrid}>
            {others.map((x) => (
              <Link key={x.slug} href={`/case-studies/${x.slug}`}>
                <img src={x.image} alt={x.name} loading="lazy" style={{ objectPosition: focal(x.image) }} />
                <span>{x.name}</span>
                <small>{x.outlet}</small>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
