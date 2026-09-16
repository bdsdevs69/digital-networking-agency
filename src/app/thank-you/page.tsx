import type { Metadata } from "next";
import Link from "next/link";
import styles from "../guides/guides.module.css";

// Where both enquiry forms land after a successful submit. It exists so ad
// platforms can count a lead by URL ("page contains /thank-you"). Kept out of
// search and the sitemap: it is only meaningful after a real submission.
export const metadata: Metadata = {
  title: "Thank you | Digital Networking Agency",
  description: "Your enquiry has reached us. We reply within 24 hours.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className={styles.page}>
      <main className={styles.wrap}>
        <header className={styles.header}>
          <h1>Thanks — that is with us.</h1>
          <p className={styles.lede}>
            We reply within 24 hours, usually sooner. We will tell you honestly which
            publications fit your story and what the process looks like.
          </p>
        </header>

        <section className={styles.more}>
          <h2>While you wait</h2>
          <ul>
            <li>
              <Link href="/case-studies">See client features we have placed</Link>
            </li>
            <li>
              <Link href="/reviews">Read what clients say on Trustpilot</Link>
            </li>
            <li>
              <Link href="/guides/how-to-write-a-founder-story">How to write a founder story worth publishing</Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
