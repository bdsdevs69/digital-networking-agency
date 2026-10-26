import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { REGIONS } from "@/content/regions";
import styles from "../guides/guides.module.css";

const SITE = "https://www.digitalnetworkingagency.com";
const TITLE = "PR by Location: Countries, States and Cities | DNA";
const DESCRIPTION =
  "PR by country, US state and city: how each media market works and the local publications we place clients in, from Chicago and Miami to London and Dubai.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/pr-in` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE}/pr-in`, siteName: "Digital Networking Agency", type: "website", locale: "en_US" },
};

const GROUPS: { kind: "country" | "state" | "city"; title: string }[] = [
  { kind: "country", title: "Countries" },
  { kind: "state", title: "US states" },
  { kind: "city", title: "Cities" },
];

export default function RegionsIndex() {
  if (!REGIONS.length) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "PR by Location",
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
          <h1>PR by Location</h1>
          <p className={styles.lede}>
            Every media market works differently. Pick where your customers are and we&rsquo;ll show you the
            publications that reach them, and which routes in are realistic.
          </p>
        </header>
        {GROUPS.map((g) => {
          const list = REGIONS.filter((r) => (r.kind ?? "country") === g.kind);
          if (!list.length) return null;
          return (
            <section key={g.kind}>
              <h2>{g.title}</h2>
              <ul className={styles.grid}>
                {list.map((r) => (
                  <li key={r.slug} className={styles.card}>
                    <h3>
                      <Link href={`/pr-in/${r.slug}`}>{r.h1}</Link>
                    </h3>
                    <p>{r.intro}</p>
                    <Link className={styles.readMore} href={`/pr-in/${r.slug}`}>
                      {r.pubCount ?? r.outlets.length} publications &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </main>
    </div>
  );
}
