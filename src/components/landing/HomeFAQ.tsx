import styles from "./HomeFAQ.module.css";

// Visible FAQ + matching FAQPage schema. Google only honours FAQ rich results
// when the same Q&A is actually rendered on the page, so these share one source.
const FAQS: { q: string; a: string }[] = [
  {
    q: "What does Digital Networking Agency actually do?",
    a: "We are a PR and media placement agency. We develop your story, write it to editorial standard, and place it with publications your audience already trusts — MSN, USA Today, Yahoo Finance, Entrepreneur, CEO Weekly and over 1,100 other outlets. You approve every word before anything is published.",
  },
  {
    q: "Do I have to write the article myself?",
    a: "No. Our editorial team writes the entire piece. You share your story in a short questionnaire, we shape the angle and draft it, and you review it until it reads exactly the way you want.",
  },
  {
    q: "How long does it take to get published?",
    a: "Most placements go live within a few weeks, depending on the outlet and how many revisions you want. We give you a realistic timeline before we start and keep you updated at every step.",
  },
  {
    q: "How much does PR cost with DNA?",
    a: "Every engagement is quoted to your goals — which outlets you want, how many placements, and how much writing is involved. We offer ongoing monthly packages as well as single A La Carte features. Tell us what you're after and we'll price it.",
  },
  {
    q: "Are these real publications?",
    a: "Yes. Every placement is a real, permanent, searchable article on a genuine publication — not a directory listing or a paid link farm. Our case studies link directly to the live articles so you can check them yourself.",
  },
  {
    q: "Can you guarantee I'll be featured in Forbes?",
    a: "No, and you should be careful with anyone who does. Editorial coverage at the biggest titles is an editorial decision no agency controls. We tell you honestly which outlets we can place you in and which we can only pitch toward.",
  },
  {
    q: "Will the article stay online permanently?",
    a: "Yes. Placements are permanent and searchable, so they keep working for you every time someone looks up your name — in search results, in due diligence, and in sales conversations.",
  },
  {
    q: "Who is PR actually worth it for?",
    a: "It works best when your buyers research you before they commit — founders, consultants, medical practices, attorneys, realtors, coaches and B2B companies. If nobody ever searches your name before buying, your budget is usually better spent elsewhere.",
  },
  {
    q: "Do I get to approve the article before it publishes?",
    a: "Always. You get unlimited revisions and nothing goes live without your sign-off. Your voice and the facts stay accurate, because it's your story.",
  },
  {
    q: "How do I get started?",
    a: "Send us the contact form or book a consultation. We'll ask who you want to reach, recommend the outlets that fit your audience, and map out the fastest realistic path to your feature. We reply within 24 hours.",
  },
];

export function HomeFAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.digitalnetworkingagency.com/#faq",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className={`v-sec ${styles.faq}`} id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={`v-wrap ${styles.wrap}`}>
        <div className={styles.side}>
          <span className="v-label v-label--lime">06 · FAQ</span>
          <h2 className="v-h2">
            Questions, <span className="v-hl">answered.</span>
          </h2>
          <p className="v-lede">
            The things founders ask us most before their first feature.
          </p>
          <div className={styles.ask}>
            <p className={styles.askTitle}>Still have a question?</p>
            <p className={styles.askText}>Ask us directly — we reply within 24 hours.</p>
            <a className="v-btn v-btn--dark" href="mailto:sam@digitalnetworkingagency.com">
              Email the team
            </a>
          </div>
        </div>

        <div className={styles.list}>
          {FAQS.map((f, i) => (
            <details key={f.q} className={styles.item} open={i === 0}>
              <summary className={styles.q}>
                <span className={styles.n}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.qText}>{f.q}</span>
                <span className={styles.plus} aria-hidden="true" />
              </summary>
              <p className={styles.a}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
