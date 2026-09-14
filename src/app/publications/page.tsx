import type { Metadata } from "next";
import Link from "next/link";
import { OUTLETS } from "@/content/outlets";
import styles from "./publications.module.css";

const SITE = "https://www.digitalnetworkingagency.com";

const DESCRIPTION =
  "The publications DNA places clients in — MSN, USA Today, Yahoo Finance, Entrepreneur, AP News and over 1,100 more. Browse by category.";

export const metadata: Metadata = {
  title: "Publications We Place Clients In | Digital Networking Agency",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/publications` },
  openGraph: {
    title: "Publications We Place Clients In | Digital Networking Agency",
    description: DESCRIPTION,
    url: `${SITE}/publications`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

// Publications named across the site (package tiers, press wall, client
// placements). Outlets with their own landing page are linked automatically.
const CATEGORIES: { name: string; blurb: string; items: string[]; hub?: string }[] = [
  {
    name: "National & mainstream",
    blurb: "Names your customers recognise without explanation.",
    items: [
      "MSN",
      "USA Today",
      "AP News",
      "Yahoo Finance",
      "Business Insider",
      "Forbes",
      "Bloomberg",
      "Fox Interviewer",
      "International Business Times",
    ],
  },
  {
    name: "News platforms & aggregators",
    blurb:
      "Not publications you pitch — they surface articles from publishers who feed them, so the route in is a feature that syndicates.",
    items: ["Apple News", "Google News"],
  },
  {
    name: "Business & finance",
    blurb: "Read by founders, investors and operators.",
    items: [
      "Entrepreneur",
      "Inc.",
      "Fast Company",
      "MarketWatch",
      "Benzinga",
      "CEO Weekly",
      "CEO World Biz",
      "Entrepreneur Tribune",
      "The Business Journals",
      "Investing.com",
      "US Insider",
      "US Reporter",
      "Digital Journal",
      "Success Magazine",
      "Market Daily",
    ],
  },
  {
    name: "Regional & city titles",
    blurb: "Useful when your market is a place, not a category.",
    items: [
      "NY Weekly",
      "New York Wire",
      "New York Reporter",
      "Voyage New York",
      "LA Wire",
      "Los Angeles Times",
      "Miami Wire",
      "Texas Today",
      "The Chicago Journal",
      "Hudson Weekly",
      "Wall Street Times",
    ],
  },
  {
    name: "Industry & specialist",
    blurb: "Where a niche audience actually pays attention.",
    items: [
      "Healthcare Business Today",
      "Real Estate Today",
      "Haute Residence",
      "Law & Crime",
      "Law News Day",
      "Lawyers Weekly",
      "Women's Journal",
      "Music Observer",
      "Muscle & Fitness",
      "BLK News",
      "Reality Times",
    ],
  },
  {
    name: "Lifestyle & consumer",
    blurb: "For consumer brands, authors, speakers and personal brands.",
    items: [
      "Rolling Stone",
      "Esquire",
      "Maxim",
      "Allure",
      "Glamour",
      "Architectural Digest",
      "Sports Illustrated",
      "Us Weekly",
      "OK! Magazine",
      "Hollywood Life",
      "Woman's World",
      "Flaunt",
      "Celebrity News",
      "The Hollywood Reporter",
      "Artist Weekly",
      "Famous Times",
    ],
  },
  {
    name: "United Kingdom",
    hub: "/pr-in/uk",
    blurb: "UK national media, plus the licensed British editions of international titles.",
    items: [
      "The Independent",
      "Rolling Stone UK",
      "Elle UK",
    ],
  },
  {
    name: "Middle East",
    hub: "/pr-in/uae",
    blurb:
      "Gulf business and lifestyle media \u2014 useful if your market is the UAE, Saudi Arabia or the wider region.",
    items: [
      "Arabian Business",
      "Gulf News",
      "Khaleej Times",
      "Esquire Middle East",
      "Harper's Bazaar Arabia",
      "Grazia Middle East",
      "Dubai Weekly",
    ],
  },
  {
    name: "Australia",
    hub: "/pr-in/australia",
    blurb: "Australian mastheads and the licensed Australian editions of global brands.",
    items: [
      "Forbes Australia",
      "Rolling Stone Australia",
      "Variety Australia",
      "Men's Health Australia",
      "Harper's Bazaar Australia",
      "SmartCompany",
      "The Canberra Times",
      "Australian Times",
    ],
  },
  {
    name: "Canada",
    hub: "/pr-in/canada",
    blurb: "National business titles and the city papers that carry weight locally.",
    items: [
      "Financial Post",
      "National Post",
      "Toronto Sun",
      "Montreal Gazette",
      "Vancouver Sun",
      "Elle Canada",
    ],
  },
];

export default function PublicationsPage() {
  const bySlug = new Map(OUTLETS.map((o) => [o.name.toLowerCase(), o.slug]));
  const total = CATEGORIES.reduce((n, c) => n + c.items.length, 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/publications#collection`,
    name: "Publications We Place Clients In",
    url: `${SITE}/publications`,
    description: DESCRIPTION,
    hasPart: OUTLETS.map((o) => ({
      "@type": "WebPage",
      name: `Get featured in ${o.name}`,
      url: `${SITE}/get-featured-in/${o.slug}`,
    })),
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.hero}>
        <div className={styles.crumbs}>
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Publications</span>
        </div>
        <span className={styles.kicker}>Where we place clients</span>
        <h1 className={styles.h1}>
          Get featured in 1,100+ publications
        </h1>
        <p className={styles.lede}>
          These are the titles named across our packages, placements and client
          work &mdash; a sample of the {" "}
          <strong>1,100+ outlets</strong> we can pitch and place into. The right
          one for you depends on who you are trying to reach, and we&rsquo;ll
          tell you honestly which fit.
        </p>
        <div className={styles.heroCtas}>
          <Link href="/contact" className={styles.btn}>
            Ask which fit you <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link href="/get-featured-in" className={styles.btnGhost}>
            Browse outlet guides
          </Link>
        </div>
      </section>

      <div className={styles.wrap}>
        {CATEGORIES.map((cat) => (
          <section key={cat.name} className={`${styles.cat} sr`}>
            <div className={styles.catHead}>
              <h2>{cat.name}</h2>
              <p>{cat.blurb}</p>
              {cat.hub ? (
                <Link href={cat.hub} className={styles.hubLink}>
                  How PR works in {cat.name} <span aria-hidden="true">&rarr;</span>
                </Link>
              ) : null}
            </div>
            <ul className={styles.pubs}>
              {cat.items.map((name) => {
                const slug = bySlug.get(name.toLowerCase());
                return (
                  <li key={name}>
                    {slug ? (
                      <Link href={`/get-featured-in/${slug}`} className={styles.linked}>
                        {name}
                        <span className={styles.tag}>Guide</span>
                      </Link>
                    ) : (
                      <span className={styles.plain}>{name}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}

        <p className={styles.note}>
          Showing {total} named titles. We place into over 1,100 outlets in
          total, and the full list depends on your industry and the story
          we&rsquo;re telling. Some placements are earned editorial and some are
          contributor or sponsored routes &mdash; we tell you which is which
          before you commit.
        </p>
      </div>

      <section className={styles.endCta}>
        <div className={styles.endCtaInner}>
          <h2>
            Not sure which one fits <em>you?</em>
          </h2>
          <p>
            Tell us who you want to reach. We&rsquo;ll shortlist the outlets
            that actually match your audience and handle the rest.
          </p>
          <Link href="/contact" className={styles.btn}>
            Get featured <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
