import type { Metadata } from "next";
import Link from "next/link";
import styles from "./about.module.css";
import { getTrustpilotData } from "@/lib/trustpilot";

const SITE = "https://www.digitalnetworkingagency.com";

const DESCRIPTION =
  "Digital Networking Agency is a PR and media placement firm. We develop, write and place founder and brand stories in publications people trust.";

export const metadata: Metadata = {
  title: "About Us | Digital Networking Agency",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/about` },
  openGraph: {
    title: "About Us | Digital Networking Agency",
    description: DESCRIPTION,
    url: `${SITE}/about`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

const PRINCIPLES = [
  {
    n: "01",
    t: "You approve every word",
    d: "Nothing is submitted or published without your sign-off. Unlimited revisions until the piece reads the way you would say it. It is your story, and your name on it.",
  },
  {
    n: "02",
    t: "We tell you which route it is",
    d: "Some placements are earned editorial, some are contributor or sponsored routes. They are not the same product and they do not carry the same weight. We tell you which one you are getting before you commit.",
  },
  {
    n: "03",
    t: "We do not guarantee the impossible",
    d: "No agency controls editorial decisions at the biggest titles. Anyone promising you a guaranteed Forbes or Bloomberg feature is selling something they cannot deliver. We will tell you honestly what is realistic for your business.",
  },
  {
    n: "04",
    t: "Placements are permanent",
    d: "Every feature is a real, searchable article that stays live. It keeps working for you every time someone looks up your name, long after the campaign ends.",
  },
];

export default async function AboutPage() {
  const tp = await getTrustpilotData();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE}/about#about`,
    url: `${SITE}/about`,
    name: "About Digital Networking Agency",
    description: DESCRIPTION,
    mainEntity: { "@id": `${SITE}/#organization` },
  };

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── hero ─────────────────────────────────────────────── */}
      <header className={styles.hero}>
        <div className="v-glow" aria-hidden="true" />
        <div className={`v-wrap ${styles.heroInner}`}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>About</span>
          </nav>
          <h1 className={styles.h1}>
            <span className={styles.h1Big}>About</span>
            <span className={styles.h1Sub}>
              Digital Networking Agency &mdash; <em>it&rsquo;s in our DNA.</em>
            </span>
          </h1>
          <div className={styles.heroFoot}>
            <p className={styles.lede}>
              Digital Networking Agency is a public relations and media placement
              firm. We turn founders and brands into recognised names by developing
              their story and placing it with publications their audience already
              trusts.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="v-btn v-btn--lg">
                Get featured <Arrow />
              </Link>
              <Link href="/case-studies" className="v-btn v-btn--ghost v-btn--lg">
                See the work
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── manifesto ────────────────────────────────────────── */}
      <section className="v-sec v-light v-panel">
        <div className="v-wrap">
          <span className="v-label">01 · What we actually do</span>
          <p className={styles.manifesto}>
            Most people come to us with the same problem. They are good at what
            they do, but when someone searches their name, <mark>nothing credible
            comes back</mark> &mdash; just their own website saying how good they are.
          </p>
          <div className={styles.manifestoCols}>
            <p>
              <strong>We fix that.</strong> Our team develops a story angle worth
              publishing, writes it to editorial standard, and places it with outlets
              that carry weight: MSN, USA Today, Yahoo Finance, Entrepreneur, Benzinga,
              AP News and over 1,100 others. The result is a permanent, searchable
              article that does the credibility work for you.
            </p>
            <p>
              We focus on modern media &mdash; digital, TV, podcast and speaking
              opportunities &mdash; because that is where the people you are trying to
              reach actually are.
            </p>
          </div>
        </div>
      </section>

      {/* ── numbers ──────────────────────────────────────────── */}
      <section className="v-sec v-sec--tight">
        <div className={`v-wrap ${styles.stats}`}>
          <div className={styles.stat}>
            <span className={styles.statN}><span data-count="45">45</span><em>+</em></span>
            <span className={styles.statL}>Publicists &amp; journalists</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statN}><span data-count="1100">1,100</span><em>+</em></span>
            <span className={styles.statL}>Publication outlets</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statN}><span data-count={tp.score.toFixed(1)}>{tp.score.toFixed(1)}</span><em>★</em></span>
            <span className={styles.statL}>Trustpilot rating</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statN}><span data-count="24">24</span><em>h</em></span>
            <span className={styles.statL}>Reply time</span>
          </div>
        </div>
      </section>

      {/* ── team ─────────────────────────────────────────────── */}
      <section className="v-sec">
        <div className={`v-wrap ${styles.team}`}>
          <div className={styles.teamHead}>
            <span className="v-label v-label--lime">02 · The team</span>
            <h2 className="v-h2">
              People by name, <span className="v-hl">not a ticket queue.</span>
            </h2>
          </div>
          <div className={styles.teamBody}>
            <p>
              DNA is led by <strong>Sam Harris</strong>, and our growing team of 45+
              experienced publicists, journalists, broadcasters, writers and marketers
              work directly with clients on every campaign. When you work with us you
              deal with people by name &mdash; not a ticket queue.
            </p>
            <p>
              That is the part clients tend to mention in their reviews: that the
              process was clear, that someone answered, and that the piece actually
              sounded like them.
            </p>
            <Link href="/reviews" className="v-btn v-btn--ghost">
              Read what clients say <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ── principles ───────────────────────────────────────── */}
      <section className="v-sec" style={{ paddingTop: 0 }}>
        <div className="v-wrap">
          <div className="v-head">
            <div>
              <span className="v-label v-label--lime">03 · How we work</span>
              <h2 className="v-h2">
                Four rules we <span className="v-hl">don&rsquo;t break.</span>
              </h2>
            </div>
          </div>
          <ol className={styles.rules}>
            {PRINCIPLES.map((p) => (
              <li key={p.n} className={styles.rule}>
                <span className={styles.ruleN}>{p.n}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── where to find us ─────────────────────────────────── */}
      <section className="v-sec" style={{ paddingTop: 0 }}>
        <div className="v-wrap">
          <span className="v-label v-label--lime">04 · Where to find us</span>
          <div className={styles.find}>
            <div className={styles.findCard}>
              <span className={styles.findLabel}>Office</span>
              <p>
                Digital Networking Agency LLC
                <br />
                6545 Market Ave N, Suite 100
                <br />
                Canton, OH 44721, United States
              </p>
            </div>
            <div className={`${styles.findCard} ${styles.findLime}`}>
              <span className={styles.findLabel}>Get in touch</span>
              <p>
                <a href="mailto:sam@digitalnetworkingagency.com">sam@digitalnetworkingagency.com</a>
                <br />
                <a href="tel:+13302276337">+1 (330) 227-6337</a>
                <br />
                Mon&ndash;Fri, 9am&ndash;6pm EST
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
