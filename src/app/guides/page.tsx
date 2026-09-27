import type { Metadata } from "next";
import { BlogIndex, type BlogItem } from "@/components/blog/BlogIndex";
import s from "@/components/blog/blog.module.css";
import { COMPARISONS } from "@/content/comparisons";
import { GUIDES } from "@/content/guides";
import { TOP_LISTS_PAGE, VISA_PAGE } from "@/content/landings";
import { OUTLETS } from "@/content/outlets";
import { REGIONS } from "@/content/regions";
import { SERVICES } from "@/content/services";

const SITE = "https://www.digitalnetworkingagency.com";

export const metadata: Metadata = {
  title: "PR & Media Guides — How to Get Featured | DNA",
  description:
    "How media placement actually works — the real routes into Forbes, MSN and more, what makes a story land, and how DNA gets founders featured.",
  alternates: { canonical: `${SITE}/guides` },
  openGraph: {
    title: "PR & Media Guides — How to Get Featured | DNA",
    description:
      "How media placement actually works — the real routes into Forbes, MSN and more, what makes a story land, and how DNA gets founders featured.",
    url: `${SITE}/guides`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

/* ── helpers ─────────────────────────────────────────────────── */
const words = (html: string) => html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
const mins = (html: string) => Math.max(2, Math.round(words(html) / 230));

/** Split a title into the small cover line and the big cover line. */
function cover(h1: string): { pre: string; main: string } {
  const pats: [RegExp, (m: RegExpMatchArray) => string][] = [
    [/^How to Get Featured (in|on) (.+)$/i, (m) => `How to get featured ${m[1].toLowerCase()}`],
    [/^How to Get Press (in|for) (.+)$/i, (m) => `How to get press ${m[1].toLowerCase()}`],
    [/^How to Get (?:a |an )?(.+?) (in|on) (.+)$/i, () => ""],
    [/^PR for (.+)$/i, () => "PR for"],
    [/^Press for (.+)$/i, () => "Press for"],
    [/^PR in (.+)$/i, () => "PR in"],
    [/^Get Featured in (.+)$/i, () => "Get featured in"]
  ];
  for (const [re, pre] of pats) {
    const m = h1.match(re);
    if (m && pre(m)) return { pre: pre(m), main: m[m.length - 1] };
  }
  const colon = h1.split(/:\s+/);
  if (colon.length > 1 && colon[0].length >= 6) return { pre: "", main: colon[0] };
  return { pre: "", main: h1 };
}

export default function GuidesIndex() {
  // Same grouping the old index used, so topics stay where readers expect.
  const outletGuideSlugs = new Set(OUTLETS.map((o) => o.guideSlug));
  const REGIONAL = new Set([
    "how-to-get-press-in-australia",
    "how-to-get-press-in-canada",
    "pr-for-australian-small-business",
    "pr-for-canadian-small-business",
    "australian-trade-publications-for-b2b",
    "why-canadian-newspapers-share-content",
  ]);
  const VISA = new Set([
    "eb1a-published-material-requirement",
    "o1-vs-eb1a-press-requirements",
    "what-counts-as-major-media-for-uscis",
    "when-to-start-press-for-a-visa-petition",
  ]);
  const isIndustry = (sl: string) =>
    !REGIONAL.has(sl) &&
    (sl.startsWith("how-to-get-press") ||
      sl === "how-to-build-a-personal-brand-with-press" ||
      sl === "white-label-pr-for-agencies");
  const catFor = (sl: string) =>
    outletGuideSlugs.has(sl) ? "Publications"
      : REGIONAL.has(sl) ? "Countries"
      : VISA.has(sl) ? "Visa"
      : isIndustry(sl) ? "Industries"
      : "How PR works";

  const guideItems: BlogItem[] = GUIDES.map((g) => ({
    href: `/guides/${g.slug}`,
    title: g.h1,
    desc: g.description,
    cat: catFor(g.slug),
    mins: mins(g.body),
    ...cover(g.h1),
  }));

  // Industry, country and comparison pages live at their own URLs; they're
  // listed here so the blog is the one place to browse everything.
  const industryItems: BlogItem[] = SERVICES.map((v) => ({
    href: `/pr-for/${v.slug}`, title: v.h1, desc: v.description, cat: "Industries", mins: mins(v.body), ...cover(v.h1),
  }));
  const regionItems: BlogItem[] = REGIONS.map((r) => ({
    href: `/pr-in/${r.slug}`, title: r.h1, desc: r.description, cat: "Countries", mins: mins(r.body), ...cover(r.h1),
  }));
  const compareItems: BlogItem[] = COMPARISONS.map((c) => ({
    href: `/compare/${c.slug}`, title: c.h1, desc: c.description, cat: "Comparisons", mins: mins(c.body), ...cover(c.h1),
  }));
  const landingItems: BlogItem[] = [
    VISA_PAGE && { href: `/${VISA_PAGE.slug}`, title: VISA_PAGE.h1, desc: VISA_PAGE.description, cat: "Visa", mins: mins(VISA_PAGE.body), ...cover(VISA_PAGE.h1) },
    TOP_LISTS_PAGE && { href: `/${TOP_LISTS_PAGE.slug}`, title: TOP_LISTS_PAGE.h1, desc: TOP_LISTS_PAGE.description, cat: "How PR works", mins: mins(TOP_LISTS_PAGE.body), ...cover(TOP_LISTS_PAGE.h1) },
  ].filter(Boolean) as BlogItem[];

  const ORDER = ["How PR works", "Industries", "Publications", "Countries", "Visa", "Comparisons"];
  const items = [...guideItems, ...industryItems, ...regionItems, ...compareItems, ...landingItems].sort(
    (a, b) => ORDER.indexOf(a.cat) - ORDER.indexOf(b.cat)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/guides#collection`,
    name: "PR & Media Guides",
    url: `${SITE}/guides`,
    description: metadata.description as string,
    hasPart: GUIDES.map((g) => ({
      "@type": "Article",
      headline: g.h1,
      url: `${SITE}/guides/${g.slug}`,
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className={s.head}>
        <div className="v-glow" aria-hidden="true" />
        <div className={`v-wrap ${s.headInner}`}>
          <span className="v-label v-label--lime">The DNA blog</span>
          <h1 className={s.h1}>
            PR &amp; media <span className="v-hl">guides.</span>
          </h1>
          <p className={s.sub}>
            How media placement actually works &mdash; the real routes into each
            publication, what makes a story land, and how we get founders and
            brands featured in the publications that matter.
          </p>
        </div>
      </header>

      <div className="v-wrap">
        <BlogIndex items={items} cats={ORDER.filter((c) => items.some((i) => i.cat === c))} />
      </div>
    </main>
  );
}
