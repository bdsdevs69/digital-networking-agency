import type { Metadata } from "next";
import { OUTLETS } from "@/content/outlets";
import styles from "./getfeatured.module.css";
import { OutletIndex } from "./OutletIndex";
import { clientPlacements } from "@/components/landing/sections";
import { CASE_STUDIES } from "@/content/caseStudies";

const SITE = "https://www.digitalnetworkingagency.com";
const DESCRIPTION =
  "Get featured in the publications that matter — Forbes, USA Today, Yahoo Finance, MSN and more. We write your feature and manage the placement.";

export const metadata: Metadata = {
  title: "Get Featured in Top Publications | Digital Networking Agency",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/get-featured-in` },
  openGraph: {
    title: "Get Featured in Top Publications | Digital Networking Agency",
    description: DESCRIPTION,
    url: `${SITE}/get-featured-in`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

// Same grouping as /publications, extended with the plan publications.
const CATEGORIES: { name: string; blurb: string; slugs: string[] }[] = [
  { name: "National & mainstream", blurb: "Names your customers recognise without explanation.",
    slugs: ["forbes", "msn", "usa-today", "yahoo-finance", "ap-news", "business-insider", "bloomberg", "fox-interviewer", "international-business-times"] },
  { name: "Business & finance", blurb: "Read by founders, investors and operators.",
    slugs: ["entrepreneur", "inc", "fast-company", "marketwatch", "benzinga", "ceo-weekly", "ceo-world-biz", "business-journals", "investing-com", "us-insider", "us-reporter", "digital-journal", "success-magazine", "market-daily", "grit-daily", "ceo-official-magazine", "financial-tech-times", "techbullion", "economic-insider", "us-business-news", "world-reporter", "the-american-news", "kivo-daily", "high-net-worth-magazine", "net-worth", "networth-us", "entrepreneur-today", "times-square-journal", "the-icon"] },
  { name: "Regional & city", blurb: "Useful when your market is a place, not a category.",
    slugs: ["ny-weekly", "new-york-wire", "new-york-reporter", "voyage-new-york", "ny-magazine", "la-wire", "los-angeles-times", "miami-wire", "texas-today", "chicago-journal", "hudson-weekly", "wall-street-times", "san-francisco-post", "atlanta-wire", "portland-news", "california-gazette", "california-observer"] },
  { name: "Lifestyle & entertainment", blurb: "For consumer brands, creators, authors and personal brands.",
    slugs: ["maxim", "allure", "glamour", "architectural-digest", "sports-illustrated", "us-weekly", "ok-magazine", "hollywood-life", "womans-world", "flaunt", "celebrity-news", "hollywood-reporter", "artist-weekly", "famous-times", "galore-magazine", "radar-online", "distractify", "entertainment-post", "entertainment-monthly-news", "influencer-daily", "luxury-la-mag", "fluenciaga"] },
  { name: "Industry & specialist", blurb: "Where a niche audience actually pays attention.",
    slugs: ["healthcare-business-today", "real-estate-today", "haute-residence", "law-and-crime", "law-news-day", "lawyers-weekly", "womens-journal", "music-observer", "muscle-and-fitness", "blk-news", "reality-times"] },
  { name: "News platforms", blurb: "Not publications you pitch — they surface articles from publishers who feed them.",
    slugs: ["apple-news", "google-news"] },
  { name: "Forbes international", blurb: "Licensed local editions of Forbes, in the language your market reads.",
    slugs: ["forbes-mexico", "forbes-colombia", "forbes-turkiye", "forbes-ukraine"] },
  { name: "United Kingdom", blurb: "UK national media and British editions of international titles.",
    slugs: ["independent", "rolling-stone-uk", "elle-uk"] },
  { name: "Middle East", blurb: "Gulf business and lifestyle media for the UAE, Saudi Arabia and the region.",
    slugs: ["arabian-business", "gulf-news", "khaleej-times", "esquire-middle-east", "harpers-bazaar-arabia", "grazia-middle-east", "dubai-weekly"] },
  { name: "Australia", blurb: "Australian mastheads and Australian editions of global brands.",
    slugs: ["forbes-australia", "rolling-stone-australia", "variety-australia", "mens-health-australia", "harpers-bazaar-australia", "smartcompany", "canberra-times", "australian-times"] },
  { name: "Canada", blurb: "National business titles and the city papers that carry weight locally.",
    slugs: ["financial-post", "national-post", "toronto-sun", "montreal-gazette", "vancouver-sun", "elle-canada"] },
];

export default function GetFeaturedIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/get-featured-in#collection`,
    name: "Get Featured in Top Publications",
    url: `${SITE}/get-featured-in`,
    description: DESCRIPTION,
    hasPart: OUTLETS.map((o) => ({
      "@type": "Service",
      name: `Get featured in ${o.name}`,
      url: `${SITE}/get-featured-in/${o.slug}`,
    })),
  };

  // Outlets where we have actually placed a client lead each category.
  const ALIAS: Record<string, string> = { "new york weekly": "ny weekly" };
  const norm = (n: string) => ALIAS[n.toLowerCase()] ?? n.toLowerCase();
  const placed = new Set([
    ...clientPlacements.map((p) => norm(p.outlet)),
    ...CASE_STUDIES.map((c) => norm(c.outlet)),
  ]);
  const catOf = (slug: string) => CATEGORIES.find((c) => c.slugs.includes(slug))?.name ?? "More publications";
  const items = OUTLETS.map((o) => ({
    slug: o.slug,
    name: o.name,
    sub: o.subhead,
    cat: catOf(o.slug),
    placed: placed.has(norm(o.name)),
  })).sort((a, b) => Number(b.placed) - Number(a.placed));
  const cats = [...CATEGORIES, { name: "More publications", blurb: "", slugs: [] as string[] }]
    .filter((c) => items.some((i) => i.cat === c.name))
    .map(({ name, blurb }) => ({ name, blurb }));

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={styles.hero}>
        <div className="v-glow" aria-hidden="true" />
        <div className={styles.heroInner}>
          <span className={styles.kicker}>Get featured in</span>
          <h1 className={styles.indexTitle}>
            Top <span className="v-hl">publications.</span>
          </h1>
          <p className={styles.subhead}>
            Pick a publication. We write your feature and manage the placement —
            you approve every word.
          </p>
        </div>
      </section>

      <section className="v-sec v-light v-panel" style={{ paddingTop: "clamp(2.5rem, 5vw, 4rem)" }}>
        <div className="v-wrap">
          <OutletIndex items={items} cats={cats} />
        </div>
      </section>
    </div>
  );
}
