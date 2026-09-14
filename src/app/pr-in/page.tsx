import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { REGIONS } from "@/content/regions";
import styles from "../guides/guides.module.css";

const SITE = "https://www.digitalnetworkingagency.com";
const TITLE = "PR by Country | Digital Networking Agency";
const DESCRIPTION =
  "Press coverage in the UK, the UAE and Middle East, Australia and Canada: how each media market works and the publications we place clients in.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/pr-in` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE}/pr-in`, siteName: "Digital Networking Agency", type: "website", locale: "en_US" },
};

export default function RegionsIndex() {
  if (!REGIONS.length) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "PR by Country",
    url: `${SITE}/pr-in`,
    description: DESCRIPTION,
    hasPart: REGIONS.map((r) => ({ "@type": "WebPage", name: r.h1, url: `${SITE}/pr-in/${r.slug}` })),
  };
  return (
    <div className={styles.page}>
      <main className={styles.wrap}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
        </nav>
        <header className={styles.header}>
          <h1>PR by Country</h1>
          <p className={styles.lede}>
            Every media market works differently. Pick where your customers are and we&rsquo;ll show you the
            publications that reach them, and which routes in are realistic.
          </p>
        </header>
        <ul className={styles.grid}>
          {REGIONS.map((r) => (
            <li key={r.slug} className={styles.card}>
              <h3>
                <Link href={`/pr-in/${r.slug}`}>{r.h1}</Link>
              </h3>
              <p>{r.intro}</p>
              <Link className={styles.readMore} href={`/pr-in/${r.slug}`}>
                {r.outlets.length} publications &rarr;
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
