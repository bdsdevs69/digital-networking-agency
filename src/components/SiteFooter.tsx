import Link from "next/link";
import styles from "./SiteFooter.module.css";
import { GLOSSARY } from "@/content/glossary";

const WHATSAPP = "https://wa.me/13302276337";
const INSTAGRAM = "https://instagram.com/dnateams";
const TRUSTPILOT = "https://www.trustpilot.com/review/digitalnetworkingagency.com";

// Each links to its dedicated /get-featured-in/<slug> landing page.
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
  { name: "Int'l Business Times", slug: "international-business-times" },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* brand */}
        <div className={styles.brand}>
          <div className={styles.lockup}>
            <img src="/black_logo.webp" alt="DNA PR" className={styles.logo} />
            <span className={styles.lockDiv} aria-hidden="true" />
            <span className={styles.wordmark}>
              Digital Networking <em>Agency</em>
            </span>
          </div>
          <p className={styles.blurb}>
            Digital Networking Agency helps founders &amp; brands get featured in
            the world&rsquo;s most trusted publications — MSN, USA Today, Forbes
            and 100+ outlets. Real placements, permanent features, every word
            approved by you.
          </p>
          <div className={styles.stats}>
            <span>100+ Outlets</span>
            <i aria-hidden="true">•</i>
            <span>Worldwide</span>
            <i aria-hidden="true">•</i>
            <span>Permanent Features</span>
          </div>
          <a
            className={styles.rating}
            href={TRUSTPILOT}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.stars} aria-hidden="true">
              ★★★★★
            </span>
            Trusted by our clients
          </a>
          <div className={styles.socials}>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" /><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.599 5.35l-.999 3.648 3.889-.999zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
            </a>
            <a href="mailto:sam@digitalnetworkingagency.com" aria-label="Email">
              <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
            </a>
          </div>
        </div>

        {/* explore */}
        <div className={styles.col} role="navigation" aria-label="Footer">
          <h3>Explore</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/compare">Compare Options</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/get-featured-in">Get Featured</Link>
          <Link href="/pr-for">Industries</Link>
          <Link href="/pr-in">PR by Country</Link>
          <Link href="/guides">Guides</Link>
          {GLOSSARY ? <Link href="/glossary">Glossary</Link> : null}
          <Link href="/contact" className={styles.cta}>
            Get Featured Now <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* contact */}
        <div className={styles.col}>
          <h3>Contact</h3>
          <a href="mailto:sam@digitalnetworkingagency.com">
            sam@digitalnetworkingagency.com
          </a>
          <a href="tel:+13302276337">+1 (330) 227-6337</a>
          <span className={styles.subhead}>Headquarters</span>
          <p className={styles.addr}>
            6545 Market Ave N, Suite 100
            <br />
            Canton, OH 44721, USA
          </p>
          <span className={styles.subhead}>Business Hours</span>
          <p className={styles.addr}>
            Mon&ndash;Fri, 9am&ndash;6pm EST
            <br />
            <em>We reply within 24 hours.</em>
          </p>
        </div>
      </div>

      <div className={styles.pubs}>
        <span className={styles.pubsLabel}>Top Publications</span>
        <div className={styles.pubsList}>
          {PUBLICATIONS.map((p) => (
            <Link key={p.slug} href={`/get-featured-in/${p.slug}`}>
              {p.name}
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>
          © 2026 Digital Networking Agency LLC — It&rsquo;s in our DNA
          <span className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <i aria-hidden="true">•</i>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <i aria-hidden="true">•</i>
            <Link href="/refunds">Refund Policy</Link>
          </span>
        </span>
        <div className={styles.trust}>
          <span className={styles.secure}>
            <span aria-hidden="true">🔒</span> SSL Secure Checkout
          </span>
          <div className={styles.pay}>
            <span className={`${styles.payBadge} ${styles.pbStripe}`}>stripe</span>
            <span className={`${styles.payBadge} ${styles.pbVisa}`}>VISA</span>
            <span className={styles.payBadge} aria-label="Mastercard">
              <svg viewBox="0 0 34 22" width="30" height="20" aria-hidden="true">
                <circle cx="13" cy="11" r="8" fill="#EB001B" />
                <circle cx="21" cy="11" r="8" fill="#F79E1B" />
                <path
                  d="M17 5.2a8 8 0 000 11.6 8 8 0 000-11.6z"
                  fill="#FF5F00"
                />
              </svg>
            </span>
            <span className={`${styles.payBadge} ${styles.pbAmex}`}>AMEX</span>
            <span className={`${styles.payBadge} ${styles.pbApple}`}>
              <svg viewBox="0 0 24 24" width="12" height="14" aria-hidden="true">
                <path
                  fill="#000"
                  d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.9-1.21-1.77-3.1-2.02-3.77-2.04-1.6-.16-3.13.94-3.94.94-.81 0-2.07-.92-3.4-.9-1.75.03-3.36 1.02-4.26 2.58-1.82 3.16-.47 7.84 1.3 10.41.86 1.26 1.89 2.67 3.24 2.62 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.02 2.29-1.28 3.15-2.55.99-1.46 1.4-2.87 1.42-2.94-.03-.01-2.73-1.05-2.76-4.15zM14.53 4.6c.72-.87 1.2-2.08 1.07-3.28-1.03.04-2.28.69-3.02 1.56-.66.77-1.24 2-1.08 3.18 1.15.09 2.31-.58 3.03-1.46z"
                />
              </svg>
              Pay
            </span>
            <span className={`${styles.payBadge} ${styles.pbLink}`}>
              <span className={styles.pbLinkDot} aria-hidden="true" />
              link
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
