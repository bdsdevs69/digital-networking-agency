import type { Metadata } from "next";
import contact from "./contact.module.css";
import { ContactForm } from "./ContactForm";
import { ContactFAQ } from "./ContactFAQ";

const SITE = "https://www.digitalnetworkingagency.com";
const WHATSAPP = "https://wa.me/13302276337";

export const metadata: Metadata = {
  title: "Contact Us | Digital Networking Agency",
  description:
    "Tell us who you want to reach and where you want to appear. We recommend the right publications and handle the writing and placement, start to finish.",
  alternates: { canonical: `${SITE}/contact` },
  openGraph: {
    title: "Contact Us | Digital Networking Agency",
    description:
      "Tell us who you want to reach and where you want to appear. We handle the writing and placement, start to finish.",
    url: `${SITE}/contact`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE}/contact#contact`,
    url: `${SITE}/contact`,
    name: "Contact Digital Networking Agency",
    mainEntity: {
      "@type": "Organization",
      name: "Digital Networking Agency",
      email: "sam@digitalnetworkingagency.com",
      telephone: "+1-330-227-6337",
      url: SITE,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={contact.chero}>
        <div className="v-glow" aria-hidden="true" />
        <div className={`v-wrap ${contact.cheroInner}`}>
          <span className="v-label v-label--lime">Contact us</span>
          <h1 className={contact.ch1}>
            Let&rsquo;s make <span className="v-hl">headlines.</span>
          </h1>
          <p className={contact.csub}>
            Tell us who you want to reach and where you want to appear — we
            recommend the outlets and handle the writing and placement, end to
            end.
          </p>
          <ul className={contact.cbadges}>
            <li>You approve every word</li>
            <li>Unlimited revisions</li>
            <li>Reply within 24 hours</li>
          </ul>
        </div>
      </section>

      <section className="v-sec v-light v-panel" style={{ paddingBlock: "clamp(1.25rem, 3vw, 2.5rem)" }}>
        <div className={`v-wrap ${contact.layout}`}>
          {/* Form */}
          <div className={contact.formCard} id="request">
            <div className={contact.formHead}>
              <span className={contact.formHeadIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M4 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <span className={contact.formHeadText}>
                <strong>Request your feature</strong>
                <span>Takes under a minute. No obligation.</span>
              </span>
            </div>
            <ContactForm />
          </div>

          {/* Direct contact + what happens next */}
          <aside className={contact.side}>
            <div className={contact.next}>
              <span className={contact.nextLabel}>What happens next</span>
              <ol className={contact.nextList}>
                <li>
                  <span className={contact.nextNum}>1</span>
                  <span>
                    <strong>Tell us your goals</strong>
                    Who you want to reach, and where you want to appear.
                  </span>
                </li>
                <li>
                  <span className={contact.nextNum}>2</span>
                  <span>
                    <strong>We map your placements</strong>
                    We shortlist the outlets that fit your audience.
                  </span>
                </li>
                <li>
                  <span className={contact.nextNum}>3</span>
                  <span>
                    <strong>We write and publish</strong>
                    Our team drafts your feature, you approve every word, then it goes live.
                  </span>
                </li>
              </ol>
              <p className={contact.nextReply}>
                <span aria-hidden="true" /> We reply within 24 hours, every time.
              </p>
            </div>

            <div className={contact.direct}>
              <span className={contact.sideHead}>Prefer to reach us directly?</span>
              <a className={contact.card} href="tel:+13302276337">
                <span className={contact.cardIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" /></svg>
                </span>
                <span className={contact.cardText}>
                  <span className={contact.cardLabel}>Call us</span>
                  <span className={contact.cardValue}>+1 (330) 227-6337</span>
                </span>
              </a>
              <a className={contact.card} href="mailto:sam@digitalnetworkingagency.com">
                <span className={contact.cardIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                </span>
                <span className={contact.cardText}>
                  <span className={contact.cardLabel}>Email us</span>
                  <span className={contact.cardValueSm}>sam@digitalnetworkingagency.com</span>
                </span>
              </a>
              <a className={contact.card} href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <span className={contact.cardIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M12.05 0A11.9 11.9 0 001.74 17.84L.06 24l6.3-1.65A11.9 11.9 0 1012.05 0zm0 21.8a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.88 9.88 0 1118.27-5.25 9.9 9.9 0 01-9.89 9.88zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35z" /></svg>
                </span>
                <span className={contact.cardText}>
                  <span className={contact.cardLabel}>WhatsApp</span>
                  <span className={contact.cardValue}>Message us directly</span>
                </span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <ContactFAQ />
    </main>
  );
}
