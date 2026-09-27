import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES, CASE_META } from "@/content/caseStudies";
import styles from "./case.module.css";
import { focal } from "@/lib/focal";

const SITE = "https://www.digitalnetworkingagency.com";

export const metadata: Metadata = {
  title: CASE_META.title,
  description: CASE_META.description,
  alternates: { canonical: `${SITE}/case-studies` },
  openGraph: {
    title: CASE_META.title,
    description: CASE_META.description,
    url: `${SITE}/case-studies`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

export default function CaseStudiesIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/case-studies#collection`,
    name: "Client Case Studies",
    url: `${SITE}/case-studies`,
    description: CASE_META.description,
    hasPart: CASE_STUDIES.map((c) => ({
      "@type": "Article",
      headline: `${c.name} — ${c.outlet}`,
      url: `${SITE}/case-studies/${c.slug}`,
    })),
  };

  const [featured, ...rest] = CASE_STUDIES;
  const outlets = Array.from(new Set(CASE_STUDIES.flatMap((c) => (c.features?.length ? c.features.map((f) => f.outlet) : [c.outlet]))));

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className={styles.chero}>
        <div className="v-glow" aria-hidden="true" />
        <div className={`v-wrap ${styles.cheroInner}`}>
          <span className="v-label v-label--lime">Case studies</span>
          <h1 className={styles.ch1}>
            Real clients. <span className="v-hl">Real features.</span>
          </h1>
          <p className={styles.clede}>
            Founders and experts we developed, wrote and placed in publications
            that matter — every story permanent, searchable, and approved by the
            client before it went live.
          </p>
          <div className={styles.outStrip}>
            <span>Featured in</span>
            {outlets.map((o) => (
              <em key={o}>{o}</em>
            ))}
          </div>
        </div>
      </header>

      <div className={`v-wrap ${styles.list}`}>
        {/* featured story — large split card */}
        <Link href={`/case-studies/${featured.slug}`} className={styles.feature}>
          <span className={styles.featShot}>
            <img
              src={featured.image}
              alt={`${featured.name} featured in ${featured.outlet}`}
              style={{ objectPosition: focal(featured.image) }}
            />
            <span className={styles.outletTag}>{featured.outlet}{featured.features && featured.features.length > 1 ? ` +${featured.features.length - 1}` : ""}</span>
          </span>
          <span className={styles.featBody}>
            <span className={styles.featEy}>Featured story</span>
            <span className={styles.featName}>{featured.name}</span>
            <span className={styles.featRole}>{featured.role}</span>
            <span className={styles.featQuote}>{featured.quote}</span>
            <span className={styles.cardCta}>
              Read the case study <i aria-hidden="true">&rarr;</i>
            </span>
          </span>
        </Link>

        <div className={styles.grid}>
          {rest.map((c) => (
            <Link key={c.slug} className={styles.card} href={`/case-studies/${c.slug}`}>
              <span className={styles.shot}>
                <img
                  src={c.image}
                  alt={`${c.name} featured in ${c.outlet}`}
                  loading="lazy"
                  style={{ objectPosition: focal(c.image) }}
                />
                <span className={styles.outletTag}>{c.outlet}{c.features && c.features.length > 1 ? ` +${c.features.length - 1}` : ""}</span>
              </span>
              <span className={styles.cardBody}>
                <span className={styles.cardName}>{c.name}</span>
                <span className={styles.cardRole}>{c.role}</span>
                <span className={styles.cardQuote}>{c.quote}</span>
                <span className={styles.cardCta}>
                  Read the story <i aria-hidden="true">&rarr;</i>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
