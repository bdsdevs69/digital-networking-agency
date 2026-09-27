import type { Metadata } from "next";
import { getTrustpilotData } from "@/lib/trustpilot";
import { KrishanStory } from "@/components/home/HomeSections";
import styles from "./reviews.module.css";

// Refresh cached Trustpilot reviews every 6 hours.
export const revalidate = 21600;

const SITE = "https://www.digitalnetworkingagency.com";

export const metadata: Metadata = {
  title: "Client Reviews | Digital Networking Agency on Trustpilot",
  description:
    "Real, verified client reviews of Digital Networking Agency on Trustpilot — why founders and brands trust DNA to get them featured.",
  alternates: { canonical: `${SITE}/reviews` },
  openGraph: {
    title: "Client Reviews | Digital Networking Agency on Trustpilot",
    description:
      "Real, verified client reviews of Digital Networking Agency on Trustpilot.",
    url: `${SITE}/reviews`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

function Stars({ rating, tp = false }: { rating: number; tp?: boolean }) {
  return (
    <span
      className={`${styles.stars} ${tp ? styles.starsTp : ""}`}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`${styles.star} ${i < Math.round(rating) ? styles.starOn : ""}`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7L12 17.8 5.7 21.2l1.7-7L2 9.5l7.1-.6z" />
          </svg>
        </span>
      ))}
    </span>
  );
}

export default async function ReviewsPage() {
  const tp = await getTrustpilotData();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Digital Networking Agency",
    url: SITE,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tp.score,
      reviewCount: tp.count,
      bestRating: 5,
    },
    review: tp.reviews.slice(0, 12).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      datePublished: r.date,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      name: r.title,
      reviewBody: r.body,
    })),
  };

  const fmt = (d: string) =>
    new Date(d + "T00:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className={styles.hero}>
        <div className="v-glow" aria-hidden="true" />
        <div className={`v-wrap ${styles.heroInner}`}>
          <span className="v-label v-label--lime">Reviews</span>
          <h1 className={styles.h1}>
            Trusted by <span className="v-hl">our clients.</span>
          </h1>
          <p className={styles.lede}>
            We don&rsquo;t ask you to take our word for it. Here&rsquo;s what
            founders and brands say after we&rsquo;ve told their story &mdash;
            straight from our verified Trustpilot profile.
          </p>
          <a className={styles.tpBadge} href={tp.profileUrl} target="_blank" rel="noopener noreferrer">
            <span className={styles.tpMark}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7L12 17.8 5.7 21.2l1.7-7L2 9.5l7.1-.6z" />
              </svg>
              Trustpilot
            </span>
            <Stars rating={tp.score} tp />
            <strong>{tp.score.toFixed(1)}</strong>
            <span className={styles.tpGo} aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </header>

      <KrishanStory />

      <section className="v-sec v-light v-panel">
        <div className="v-wrap">
          <div className="v-head">
            <div>
              <span className="v-label">Verified on Trustpilot</span>
              <h2 className="v-h2">
                In their <span className="v-hl">own words.</span>
              </h2>
            </div>
            <a className="v-btn v-btn--dark" href={tp.profileUrl} target="_blank" rel="noopener noreferrer">
              Read every review <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <div className={styles.grid}>
            {tp.reviews.slice(0, 9).map((r, i) => (
              <article key={`${r.author}-${i}`} className={styles.card}>
                <div className={styles.cardTop}>
                  <Stars rating={r.rating} tp />
                  <span className={styles.verified}>
                    <span aria-hidden="true">✓</span> Verified
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardBody}>{r.body}</p>
                <div className={styles.cardFoot}>
                  <span className={styles.avatar} aria-hidden="true">
                    {r.author.charAt(0).toUpperCase()}
                  </span>
                  <span className={styles.cardMeta}>
                    <span className={styles.author}>{r.author}</span>
                    <span className={styles.date}>{fmt(r.date)}</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
