import Link from "next/link";
import styles from "./SiteFooter.module.css";
import { GLOSSARY } from "@/content/glossary";
import { FooterWord } from "./FooterWord";

const EMAIL = "sam@digitalnetworkingagency.com";
const WHATSAPP = "https://wa.me/13302276337";
const INSTAGRAM = "https://instagram.com/dnateams";
const TRUSTPILOT = "https://www.trustpilot.com/review/digitalnetworkingagency.com";

// Each links to its dedicated /get-featured-in/<slug> landing page — these
// internal links are how search engines reach the outlet pages, so keep them.
const PUBLICATIONS = [
  { name: "Forbes", slug: "forbes" },
  { name: "USA Today", slug: "usa-today" },
  { name: "MSN", slug: "msn" },
  { name: "Entrepreneur", slug: "entrepreneur" },
  { name: "Business Insider", slug: "business-insider" },
  { name: "Bloomberg", slug: "bloomberg" },
  { name: "Fast Company", slug: "fast-company" },
  { name: "Inc.", slug: "inc" },
  { name: "Apple News", slug: "apple-news" },
  { name: "Google News", slug: "google-news" },
  { name: "MarketWatch", slug: "marketwatch" },
  { name: "Yahoo Finance", slug: "yahoo-finance" },
  { name: "Benzinga", slug: "benzinga" },
  { name: "AP News", slug: "ap-news" },
  { name: "Fox Interviewer", slug: "fox-interviewer" },
  { name: "CEO Weekly", slug: "ceo-weekly" },
  { name: "NY Weekly", slug: "ny-weekly" },
  { name: "Int'l Business Times", slug: "international-business-times" }
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Ico = {
  mail: <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>,
  phone: <svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" /></svg>,
  pin: <svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" /></svg>,
  clock: <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 10.4l3.5 2.1-.8 1.3L11 13V7h2v5.4z" /></svg>
};

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`v-wrap ${styles.stack}`}>
        {/* closing card — every page ends on the same ask */}
        <section className={styles.close}>
          <div className={styles.closeCopy}>
            <span className="v-label">Next step</span>
            <p className={styles.closeTitle}>
              Let&rsquo;s get you <span>written about.</span>
            </p>
          </div>
          <div className={styles.closeSide}>
            <p className={styles.closeText}>
              One call. We&rsquo;ll tell you honestly which publications fit your
              story, what it costs, and how long it takes.
            </p>
            <div className={styles.closeActions}>
              <Link href="/contact" className="v-btn v-btn--dark v-btn--lg">
                Get featured <Arrow />
              </Link>
              <a href={`mailto:${EMAIL}`} className={styles.closeMail}>
                {EMAIL}
              </a>
            </div>
          </div>
        </section>

        {/* the footer card (ScaleLab) */}
        <div className={styles.card}>
          <div className={styles.top}>
            <p className={styles.motto}>
              It&rsquo;s in our <b>DNA.</b>
            </p>
            <div className={styles.topSide}>
              <span className={styles.status}>
                <i aria-hidden="true" /> Taking new clients · we reply within 24 hours
              </span>
              <a href={`mailto:${EMAIL}`} className={styles.bigMail}>
                {EMAIL}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className={styles.grid}>
            <div className={styles.brand}>
              <img src="/dna-mark-lime.png" alt="DNA PR" className={styles.logo} width={78} height={36} />
              <p className={styles.blurb}>
                Real placements in the world&rsquo;s most trusted publications —
                MSN, USA Today, Forbes and more. Every word approved by you.
              </p>
              <div className={styles.brandActions}>
                <a className={styles.pill} href={TRUSTPILOT} target="_blank" rel="noopener noreferrer">
                  <span className={styles.stars} aria-hidden="true">★★★★★</span> Trustpilot
                </a>
                <div className={styles.socials}>
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" /><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  </a>
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.599 5.35l-.999 3.648 3.889-.999zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                  </a>
                </div>
              </div>
            </div>

            <nav className={styles.col} aria-label="Footer">
              <h3>Explore</h3>
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/get-featured-in">Get Featured</Link>
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/reviews">Reviews</Link>
            </nav>

            <nav className={styles.col} aria-label="Resources">
              <h3>Resources</h3>
              <Link href="/guides">Blog &amp; Guides</Link>
              <Link href="/publications">Publications</Link>
              <Link href="/compare">Compare Options</Link>
              <Link href="/pr-for">Industries</Link>
              <Link href="/pr-in">PR by Country</Link>
              {GLOSSARY ? <Link href="/glossary">Glossary</Link> : null}
            </nav>

            <div className={styles.col}>
              <h3>Contact</h3>
              <a className={styles.info} href="tel:+13302276337"><i>{Ico.phone}</i>+1 (330) 227-6337</a>
              <span className={styles.info}><i>{Ico.pin}</i>6545 Market Ave N, Suite 100, Canton, OH 44721</span>
            </div>
          </div>

          <div className={styles.pubs}>
            <h3>Get featured in</h3>
            <div className={styles.pubsList}>
              {PUBLICATIONS.map((p) => (
                <Link key={p.slug} href={`/get-featured-in/${p.slug}`}>
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          <FooterWord />
        </div>

        <div className={styles.bottom}>
          <span>© 2026 Digital Networking Agency LLC — It&rsquo;s in our DNA</span>
          <span className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/refunds">Refund Policy</Link>
          </span>
          <span className={styles.pay} aria-label="Secure checkout: Stripe, Visa, Mastercard, Amex, Apple Pay">
            <span aria-hidden="true">🔒</span> Secure checkout · Stripe · Visa · Mastercard · Amex · Apple Pay
          </span>
        </div>
      </div>
    </footer>
  );
}
