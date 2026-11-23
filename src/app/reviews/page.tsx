import type { Metadata } from "next";
import { getAllReviews } from "@/components/landing/sections";
import { ClientVideos, REVIEW_PHOTOS } from "@/components/home/HomeSections";
import styles from "./reviews.module.css";

// Trustpilot's brand guidelines (warning received 23 Nov 2026): no TrustScore,
// star ratings, review counts or home-made widgets showing their reviews. This
// page shows reviews clients gave us directly and links to the profile in
// text. The official Review Collector TrustBox lives in the footer.
const TRUSTPILOT = "https://www.trustpilot.com/review/digitalnetworkingagency.com";
const SITE = "https://www.digitalnetworkingagency.com";

export const metadata: Metadata = {
  title: "Client Reviews | Digital Networking Agency",
  description:
    "What founders and brands say about working with Digital Networking Agency — client reviews and video testimonials.",
  alternates: { canonical: `${SITE}/reviews` },
  openGraph: {
    title: "Client Reviews | Digital Networking Agency",
    description: "What founders and brands say about working with Digital Networking Agency.",
    url: `${SITE}/reviews`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

export default async function ReviewsPage() {
  const reviews = await getAllReviews();

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className="v-glow" aria-hidden="true" />
        <div className={`v-wrap ${styles.heroInner}`}>
          <span className="v-label v-label--lime">Reviews</span>
          <h1 className={styles.h1}>
            Trusted by <span className="v-hl">our clients.</span>
          </h1>
          <p className={styles.lede}>
            We don&rsquo;t ask you to take our word for it. Here&rsquo;s what
            founders and brands say after we&rsquo;ve told their story.
          </p>
        </div>
      </header>

      <ClientVideos />

      <section className="v-sec v-light v-panel">
        <div className="v-wrap">
          <div className="v-head">
            <div>
              <span className="v-label">Client reviews</span>
              <h2 className="v-h2">
                In their <span className="v-hl">own words.</span>
              </h2>
            </div>
            {/* a plain text link back to the profile is allowed — no score, stars or count beside it */}
            <a className="v-btn v-btn--dark" href={TRUSTPILOT} target="_blank" rel="noopener noreferrer">
              Read every review on Trustpilot <span aria-hidden="true">&#8599;</span>
            </a>
          </div>

          <div className={styles.grid}>
            {reviews.map((r, i) => (
              <figure key={`${r.name}-${i}`} className={styles.card}>
                <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
                <blockquote className={styles.cardBody}>{r.text}</blockquote>
                <figcaption className={styles.cardFoot}>
                  {REVIEW_PHOTOS[r.name] ? (
                    <img className={styles.avatarImg} src={REVIEW_PHOTOS[r.name]} alt={r.name} loading="lazy" />
                  ) : (
                    <span className={styles.avatar} aria-hidden="true">
                      {r.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                  <span className={styles.cardMeta}>
                    <span className={styles.author}>{r.name}</span>
                    <span className={styles.date}>{r.meta}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
