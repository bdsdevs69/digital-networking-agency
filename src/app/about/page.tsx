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
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.hero}>
        <div className={styles.crumbs}>
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>About</span>
        </div>
        <span className={styles.kicker}>Who we are</span>
        <h1 className={styles.h1}>It&rsquo;s in our DNA.</h1>
        <p className={styles.lede}>
          Digital Networking Agency is a public relations and media placement
          firm. We turn founders and brands into recognised names by developing
          their story and placing it with publications their audience already
          trusts.
        </p>
      </section>

      <div className={styles.wrap}>
        <section className={`${styles.block} sr`}>
          <h2>What we actually do</h2>
          <p>
            Most people come to us with the same problem. They are good at what
            they do, but when someone searches their name, nothing credible
            comes back &mdash; just their own website saying how good they are.
          </p>
          <p>
            We fix that. Our team develops a story angle worth publishing,
            writes it to editorial standard, and places it with outlets that
            carry weight: MSN, USA Today, Yahoo Finance, Entrepreneur, Benzinga,
            AP News and over 1,100 others. The result is a permanent,
            searchable article that does the credibility work for you.
          </p>
          <p>
            We focus on modern media &mdash; digital, TV, podcast and speaking
            opportunities &mdash; because that is where the people you are
            trying to reach actually are.
          </p>
        </section>

        <section className={`${styles.stats} sr`}>
          <div className={styles.stat}>
            <span className={styles.statN}>45+</span>
            <span className={styles.statL}>Publicists &amp; journalists</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statN}>1100+</span>
            <span className={styles.statL}>Publication outlets</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statN}>{tp.score.toFixed(1)}</span>
            <span className={styles.statL}>Trustpilot rating</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statN}>24hr</span>
            <span className={styles.statL}>Reply time</span>
          </div>
        </section>

        <section className={`${styles.block} sr`}>
          <h2>The team</h2>
          <p>
            DNA is led by <strong>Sam Harris</strong>, and our growing team of
            45+ experienced publicists, journalists, broadcasters, writers and
            marketers work directly with clients on every campaign. When you
            work with us you deal with people by name &mdash; not a ticket
            queue.
          </p>
          <p>
            That is the part clients tend to mention in their reviews: that the
            process was clear, that someone answered, and that the piece
            actually sounded like them.
          </p>
          <Link href="/reviews" className={styles.inlineLink}>
            Read what clients say on Trustpilot &rarr;
          </Link>
        </section>

        <section className={`${styles.block} sr`}>
          <h2>How we work</h2>
          <div className={styles.principles}>
            {PRINCIPLES.map((p) => (
              <div key={p.n} className={styles.principle}>
                <span className={styles.pn}>{p.n}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.block} sr`}>
          <h2>Where to find us</h2>
          <div className={styles.contactGrid}>
            <div>
              <span className={styles.cLabel}>Office</span>
              <p className={styles.cVal}>
                Digital Networking Agency LLC
                <br />
                6545 Market Ave N, Suite 100
                <br />
                Canton, OH 44721, United States
              </p>
            </div>
            <div>
              <span className={styles.cLabel}>Get in touch</span>
              <p className={styles.cVal}>
                <a href="mailto:sam@digitalnetworkingagency.com">
                  sam@digitalnetworkingagency.com
                </a>
                <br />
                <a href="tel:+13302276337">+1 (330) 227-6337</a>
                <br />
                Mon&ndash;Fri, 9am&ndash;6pm EST
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className={styles.endCta}>
        <div className={styles.endCtaInner}>
          <h2>
            Trust us with <em>your story.</em>
          </h2>
          <p>
            Tell us who you want to reach. We&rsquo;ll recommend the outlets
            that fit and handle the writing and placement, start to finish.
          </p>
          <Link href="/contact" className={styles.btn}>
            Get featured <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
