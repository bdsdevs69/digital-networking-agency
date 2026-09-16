import styles from "./guides.module.css";

export type Proof = {
  outlet: string;
  kind: string;
  headline: string;
  href: string;
  img: string;
};

// Verified live placements, shown as proof inside a guide.
// Keyed by guide slug — add an entry to surface cards on another guide.
export const PROOF: Record<string, { title: string; items: Proof[] }> = {
  "how-to-get-featured-on-msn": {
    title: "Our client features on MSN",
    items: [
      {
        outlet: "MSN",
        kind: "Full feature",
        headline:
          "The body isn't a machine: Inside Dr. Kirk Sanford's case for honest regenerative medicine",
        href: "https://www.msn.com/en-us/news/other/the-body-isn%E2%80%99t-a-machine-inside-dr-kirk-sanford%E2%80%99s-case-for-honest-regenerative-medicine/ar-AA2705OB",
        img: "/placement-kirk-msn.webp"
      },
      {
        outlet: "MSN",
        kind: "Feature listicle",
        headline: "The entrepreneurs everyone is talking about in 2026",
        href: "https://www.msn.com/en-us/news/other/the-entrepreneurs-everyone-is-talking-about-in-2026/ar-AA25j5ca",
        img: "/placement-entrepreneurs-msn.webp"
      }
    ]
  }
};

export function ProofCards({ slug }: { slug: string }) {
  const block = PROOF[slug];
  if (!block) return null;

  return (
    <section className={styles.proof} aria-label={block.title}>
      <span className={styles.proofTag}>Proof</span>
      <h2 className={styles.proofTitle}>{block.title}</h2>
      <p className={styles.proofLede}>
        Live articles, not a logo wall. Click either one to read it on MSN.
      </p>

      <div className={styles.proofGrid}>
        {block.items.map((p) => (
          <a
            key={p.href}
            className={styles.proofCard}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.proofShot}>
              <img src={p.img} alt={p.headline} loading="lazy" />
            </span>
            <span className={styles.proofBody}>
              <span className={styles.proofMeta}>
                {p.outlet} <span aria-hidden="true">·</span> {p.kind}
              </span>
              <span className={styles.proofHeadline}>{p.headline}</span>
              <span className={styles.proofRead}>
                Read on MSN <span aria-hidden="true">&rarr;</span>
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
