import type { Metadata } from "next";
import Link from "next/link";
import styles from "./compare.module.css";
import { COMPARISONS } from "@/content/comparisons";

const SITE = "https://www.digitalnetworkingagency.com";

const DESCRIPTION =
  "PR agency, wire service, DIY pitching or a media placement firm? An honest comparison of what each buys you and when to use which.";

export const metadata: Metadata = {
  title: "Compare Your PR Options | Digital Networking Agency",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/compare` },
  openGraph: {
    title: "Compare Your PR Options | Digital Networking Agency",
    description: DESCRIPTION,
    url: `${SITE}/compare`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

const COLS = ["Traditional PR agency", "Wire service", "DIY pitching", "DNA"];

const ROWS: { label: string; cells: string[] }[] = [
  {
    label: "What you actually buy",
    cells: [
      "Ongoing retainer for strategy, relationships and pitching",
      "Distribution of a press release to a network",
      "Your own time spent researching and emailing",
      "A written feature developed and placed for you",
    ],
  },
  {
    label: "Who writes it",
    cells: [
      "Usually you, with agency editing",
      "You, to a release template",
      "You",
      "Our editorial team, to publication standard",
    ],
  },
  {
    label: "Do you approve it",
    cells: ["Typically yes", "Yes, it is your release", "Yes", "Always, with unlimited revisions"],
  },
  {
    label: "Typical time to result",
    cells: [
      "Months, and often a minimum commitment",
      "Days for distribution, but pickup is not guaranteed",
      "Weeks to months, mostly unanswered",
      "Usually weeks",
    ],
  },
  {
    label: "Does it get read",
    cells: [
      "When placement lands, yes",
      "Distribution is not the same as coverage",
      "Rarely, without existing relationships",
      "Yes, a real article on a real publication",
    ],
  },
  {
    label: "Effort from you",
    cells: ["Moderate to high", "High, you produce everything", "Very high", "Low, a short questionnaire"],
  },
  {
    label: "Best when",
    cells: [
      "You need ongoing strategy, crisis and comms at scale",
      "You have a genuine announcement to distribute",
      "You have time, patience and a great story",
      "You want a permanent, credible feature without running the process",
    ],
  },
];

const FAQ = [
  {
    q: "Is a wire service the same as being featured?",
    a: "No, and this is the most common misunderstanding in PR. A wire service distributes your press release to a network of sites. That distribution is real, but it is not the same as a journalist choosing to write about you, and readers can usually tell the difference. Both have their place — just be clear which one you are buying.",
  },
  {
    q: "Why not just pitch journalists myself?",
    a: "You absolutely can, and it is the purest route. It is also slow: reporters get far more pitches than they can answer, and most go nowhere without an existing relationship or a genuinely strong hook. If you have the time and the story, do it. If you do not, that is what an agency is for.",
  },
  {
    q: "How is DNA different from a traditional PR agency?",
    a: "Traditional agencies usually sell an ongoing retainer covering strategy, media relations and comms broadly. We are narrower: we develop and place features. That means faster results and a clearer deliverable, but it also means we are not the right fit if you need full-service comms or crisis management.",
  },
  {
    q: "Can anyone guarantee a Forbes or Bloomberg placement?",
    a: "No. Editorial coverage at the biggest titles is a newsroom decision that no agency controls. Anyone guaranteeing it is either describing a paid product like a membership or sponsored post, or overselling. We tell you which route each placement uses before you commit.",
  },
];

export default function ComparePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE}/compare#page`,
      url: `${SITE}/compare`,
      name: "Compare Your PR Options",
      description: DESCRIPTION,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE}/compare#faq`,
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

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
          <span>Compare</span>
        </div>
        <span className={styles.kicker}>Compare your options</span>
        <h1 className={styles.h1}>PR agency, wire, DIY or DNA?</h1>
        <p className={styles.lede}>
          These are not the same product, even though they get sold with the
          same language. Here is an honest breakdown of what each one actually
          buys you &mdash; including where we are the wrong choice.
        </p>
      </section>

      <div className={styles.wrap}>
        <div className={styles.tableScroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">&nbsp;</th>
                {COLS.map((c) => (
                  <th
                    key={c}
                    scope="col"
                    className={c === "DNA" ? styles.us : undefined}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.label}>
                  <th scope="row">{r.label}</th>
                  {r.cells.map((cell, i) => (
                    <td
                      key={i}
                      className={COLS[i] === "DNA" ? styles.us : undefined}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className={`${styles.honest} sr`}>
          <h2>When we are not the right choice</h2>
          <p>
            If you need full-service communications &mdash; crisis management,
            internal comms, analyst relations, an always-on press office &mdash;
            a traditional agency retainer will serve you better than we will.
          </p>
          <p>
            If nobody ever searches your name before buying from you, press is
            probably not where your next pound or dollar should go. And if you
            have the time and appetite to build journalist relationships
            yourself, that route costs nothing but effort and it works.
          </p>
          <p>
            We are the right fit when you want a permanent, credible feature,
            written properly, without running the process yourself.
          </p>
        </section>

        {COMPARISONS.length ? (
          <section className={`${styles.honest} sr`}>
            <h2>Compared with other agencies</h2>
            <p>
              Honest comparisons with the agencies you are most likely to be weighing
              against us, based on what their own websites say.
            </p>
            <ul>
              {COMPARISONS.map((c) => (
                <li key={c.slug}>
                  <Link href={`/compare/${c.slug}`}>{c.h1}</Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className={`${styles.faq} sr`}>
          <h2>Common questions</h2>
          {FAQ.map((f, i) => (
            <details key={f.q} className={styles.item} open={i === 0}>
              <summary>
                <span>{f.q}</span>
                <span className={styles.chev} aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>
      </div>

      <section className={styles.endCta}>
        <div className={styles.endCtaInner}>
          <h2>
            Want a straight answer for <em>your</em> business?
          </h2>
          <p>
            Tell us your goal and we&rsquo;ll tell you honestly which route fits
            &mdash; even when the answer is not us.
          </p>
          <Link href="/contact" className={styles.btn}>
            Ask us <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
