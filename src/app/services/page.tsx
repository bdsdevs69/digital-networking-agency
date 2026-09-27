import type { Metadata } from "next";
import Link from "next/link";
import s from "./services.module.css";

const SITE = "https://www.digitalnetworkingagency.com";

const DESCRIPTION =
  "DNA PR services in full — monthly packages, single A La Carte features, the premium DNA Prime strategy, and elite branding.";

export const metadata: Metadata = {
  title: "Services & Packages | Digital Networking Agency",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/services` },
  openGraph: {
    title: "Services & Packages | Digital Networking Agency",
    description: DESCRIPTION,
    url: `${SITE}/services`,
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE}/services#collection`,
    name: "Services & Packages",
    url: `${SITE}/services`,
    description: DESCRIPTION,
  };

  return (
    <main className={s.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── hero ─────────────────────────────────────────────── */}
      <header className={s.hero}>
        <div className="v-glow" aria-hidden="true" />
        <div className={`v-wrap ${s.heroInner}`}>
          <nav className={s.crumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Services</span>
          </nav>
          <span className="v-label v-label--lime">What we do</span>
          <h1 className={s.h1}>
            Services &amp; <span className="v-hl">packages.</span>
          </h1>
          <p className={s.lede}>
            Everything DNA offers, in one place — from a single flagship feature to
            a long-term strategy that keeps your name on top. Pick what fits, or
            book a call and we&rsquo;ll map it out for you.
          </p>
          <div className={s.actions}>
            <Link href="/contact" className="v-btn v-btn--lg">
              Book a free consultation <Arrow />
            </Link>
            <a href="#packages" className="v-btn v-btn--ghost v-btn--lg">
              See packages
            </a>
          </div>
          <nav className={s.jump} aria-label="On this page">
            {JUMP.map((j, i) => (
              <a key={j.href} href={j.href}>
                <b>0{i + 1}</b> {j.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ── 01 A La Carte ────────────────────────────────────── */}
      <section className="v-sec" id="alacarte">
        <div className={`v-wrap ${s.split}`}>
          <div className={s.splitCopy}>
            <span className="v-label v-label--lime">01 · Flexible option</span>
            <h2 className="v-h2">
              A La <span className="v-hl">Carte.</span>
            </h2>
            <p>Experience the ultimate flexibility with our A La Carte service — bespoke single articles tailored specifically to your niche and target audience. Designed for maximum impact in the short term, this approach provides an immediate boost to your visibility.</p>
            <p>Our reactive strategy takes a deep dive into your target market, ensuring the messaging resonates with the right people. Every article is meticulously crafted to elevate your personal brand and position you as a leading figure in your industry.</p>
            <p>You&rsquo;ll be assigned a dedicated PR strategist who works closely with you to select the perfect publications that amplify your voice to the right audience.</p>
            <Link href="/contact" className="v-btn">Start with one feature <Arrow /></Link>
          </div>
          <ol className={s.steps}>
            {ALC_STEPS.map((st, i) => (
              <li key={st.t}>
                <span className={s.stepN}>0{i + 1}</span>
                <span>
                  <strong>{st.t}</strong>
                  <span>{st.d}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 02 Packages ──────────────────────────────────────── */}
      <section className="v-sec v-light v-panel" id="packages">
        <div className="v-wrap">
          <div className="v-head">
            <div>
              <span className="v-label">02 · DNA Prime — tiered plans</span>
              <h2 className="v-h2">
                Choose your <span className="v-hl">package.</span>
              </h2>
            </div>
            <p className={`v-lede ${s.darkLede}`}>
              Every plan is quoted to your goals — which outlets you want, how many
              placements, and how much writing is involved.
            </p>
          </div>
          <div className={s.pkgs}>
            {PACKAGES.map((pk) => (
              <article key={pk.name} className={`${s.pkg} ${pk.feat ? s.pkgFeat : ""}`}>
                {pk.feat ? <span className={s.pkgFlag}>Most chosen</span> : null}
                <span className={s.pkgTier}>{pk.tier}</span>
                <h3 className={s.pkgName}>{pk.name}</h3>
                <span className={s.pkgTag}>{pk.tag}</span>
                <div className={s.pkgPrice}>
                  Custom <small>quote</small>
                </div>
                <span className={s.pkgCommit}>{pk.commit}</span>
                <ul className={s.pkgList}>
                  {pk.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
                <div className={s.pkgPubs}>
                  <span>Target publications</span>
                  {pk.pubs}
                </div>
                <Link href="/contact" className={`v-btn ${pk.feat ? "" : "v-btn--dark"} ${s.pkgBtn}`}>
                  Get started <Arrow />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 DNA Prime ─────────────────────────────────────── */}
      <section className="v-sec" id="prime">
        <div className="v-wrap">
          <div className={s.split}>
            <div className={s.splitCopy}>
              <span className="v-label v-label--lime">03 · Premium strategy</span>
              <h2 className="v-h2">
                The Networking <span className="v-hl">DNA Prime.</span>
              </h2>
              <p>Networking DNA Prime is the ultimate premium PR strategy, designed to position your brand as an irreplaceable leader in your industry. With expert guidance, cutting-edge AI technology, and strategic media relationships, this service ensures everlasting visibility and long-term impact.</p>
              <p>This is more than short-term recognition — it&rsquo;s a long-term legacy. The strategy we implement positions your brand as undefeatable, irreplaceable, and the most coveted name in the market.</p>
              <p>The return on investment compounds year after year, creating a network of influence and recognition that secures your place as a true industry leader.</p>
            </div>
            <aside className={s.primeBox}>
              <h3>Who is DNA Prime for?</h3>
              <p>Clients who choose DNA Prime are those who seek to create an indelible impact — an influence that resonates today and compounds over time. These are clients who understand that true PR value isn&rsquo;t just a fleeting moment, but an ongoing investment into a brand that will remain relevant and revered for generations.</p>
              <Link href="/contact" className="v-btn v-btn--dark">Talk about Prime <Arrow /></Link>
            </aside>
          </div>
          <ol className={s.primeGrid}>
            {PRIME_STEPS.map((st, i) => (
              <li key={st.t}>
                <span className={s.stepN}>0{i + 1}</span>
                <strong>{st.t}</strong>
                <span>{st.d}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 04 Branding ──────────────────────────────────────── */}
      <section className="v-sec" id="branding">
        <div className="v-wrap">
          <div className="v-head">
            <div>
              <span className="v-label v-label--lime">04 · Beyond PR</span>
              <h2 className="v-h2">
                Elite branding <span className="v-hl">services.</span>
              </h2>
            </div>
            <p className="v-lede">
              Websites, ads, design, social and SEO — everything around the coverage
              so the attention actually converts.
            </p>
          </div>
          <div className={s.brandGrid}>
            {BRANDING.map((b, i) => (
              <div key={b.t} className={s.brandCard}>
                <span className={s.brandN}>0{i + 1}</span>
                <h3>{b.t}</h3>
                <p>{b.d}</p>
              </div>
            ))}
          </div>

          <div className={s.worked}>
            <span className="v-label">Brands we&rsquo;ve worked with</span>
            <div className={s.workedRow}>
              {WORKED.map((b) => (
                <span key={b.alt} className={s.workedTile}>
                  <img src={b.src} alt={b.alt} loading="lazy" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const JUMP = [
  { href: "#alacarte", label: "A La Carte" },
  { href: "#packages", label: "Packages" },
  { href: "#prime", label: "DNA Prime" },
  { href: "#branding", label: "Branding" },
];

const ALC_STEPS = [
  { t: "Initial Consultation", d: "We schedule a consultation to understand your vision, goals, and the publication you want to be featured in." },
  { t: "Contract & Payment", d: "Once aligned, we send the contract. Upon signing and payment, we move forward officially." },
  { t: "Writing Team Collaboration", d: "Meet our writing team one-on-one to dive deep into your story and goals for the feature." },
  { t: "Draft, Review & Revisions", d: "We craft the article, share for feedback, and revise until it meets your expectations perfectly." },
  { t: "Pitch & Publish", d: "After approval, we pitch to high-end outlets. Once accepted, your article lives permanently online." },
];

const PACKAGES = [
  {
    tier: "Tier 1", name: "Foundation", tag: "Establishing trust", commit: "No minimum commitment", feat: false,
    items: ["Targeted Publication Pitches", "Pitching and Story Creation", "Media Relations Team", "Media Relations Strategy", "Market Research", "Writing Team", "Digital Publication Pitching"],
    pubs: "NY Weekly, Miami Wire, Music Observer, WallStreet Times, Celebrity News, The Chicago Journal, Women's Journal, Voyage New York, CEO Weekly",
  },
  {
    tier: "Tier 2", name: "Signature", tag: "Market dominance", commit: "Minimum 3 months", feat: true,
    items: ["3× Targeted Publication Pitches", "1× Top Tier Publication", "3× Pitching and Story Creation", "Media Relations Team", "Media Relations Strategy", "Market Research", "Writing Team", "Digital Publication Pitching", "Contributor Opportunity Pitching"],
    pubs: "Entrepreneur Tribune, Business Insider, Fox Interviewer, Kivo Daily, Los Angeles Wire, Texas Today, New York Wire, US Insider, US Reporter, BLK News, Benzinga, Digital Journal",
  },
  {
    tier: "Tier 3", name: "Platinum", tag: "Category leadership", commit: "Minimum 3 months", feat: false,
    items: ["5× Targeted Publication Pitches", "5× Pitching and Story Creation", "1× Top-Tier Publication Pitch", "Contributor Opportunity Pitching", "Podcast and Radio Pitching", "Print Publication Pitching", "Ghostwriting", "Television Pitching", "Media Training"],
    pubs: "Hudson Weekly, Yahoo Finance, Australian Times, New York Reporter, CEO World Biz, Reality Times, OK! Magazine, Elle, Billboard, Podcast (1M+ subscriber channel)",
  },
];

const PRIME_STEPS = [
  { t: "Initial Consultation", d: "Discuss your vision, goals, and the type of long-term impact you want to achieve." },
  { t: "Contract & Onboarding", d: "Upon signing and payment, we begin building your long-term PR strategy immediately." },
  { t: "Dedicated PR Strategist", d: "Your personal strategist crafts a fully personalized PR plan aligned with your objectives." },
  { t: "Expert SEO Team", d: "AI-powered tools ensure your name ranks highly on all major search engines long-term." },
  { t: "AI Reputation Management", d: "AI models actively track and enhance your online reputation across all digital platforms." },
  { t: "Top-Tier Placement", d: "Your story pitched to premium, high-authority outlets with editors who maximize exposure." },
  { t: "Contributor Pitching", d: "We position you as a thought leader in leading publications for consistent visibility." },
  { t: "Podcast & TV Presence", d: "We secure interviews on high-impact podcasts and TV shows relevant to your niche." },
  { t: "Media Training & AI Insights", d: "AI-backed training refines your messaging and delivery before every interview." },
];

const BRANDING = [
  { t: "Website Development", d: "Beautiful, functional websites designed to convert visitors into clients — portfolio, e-commerce, or landing pages." },
  { t: "META Ads", d: "Targeted campaigns across Facebook and Instagram designed for real conversions, not just clicks." },
  { t: "Software Development", d: "Custom software solutions from mobile apps to enterprise tools that keep you ahead of the competition." },
  { t: "Graphic Design", d: "Award-winning designers creating logos, graphics, creatives, and assets that make your brand unforgettable." },
  { t: "Social Media", d: "Content creation, posting schedules, community management, and growth strategies for loyal audiences." },
  { t: "Email Marketing", d: "Automated sequences, newsletters, and promotional campaigns optimized for maximum ROI." },
  { t: "SEO & Content", d: "Comprehensive audits, on-page optimization, and backlink profiles for sustained organic growth." },
  { t: "Strategy Consulting", d: "A clear roadmap for success focused on both immediate wins and long-term brand dominance." },
];

const WORKED = [
  { src: "/techcon-removebg-preview.webp", alt: "TechCon SoCal" },
  { src: "/grit-brokerage-logo-Picsart-BackgroundRemover.webp", alt: "Grit Brokerage" },
  { src: "/brede_ciapciak-removebg-preview.webp", alt: "Brede Ciapciak Dental" },
  { src: "/Sj-removebg-preview.webp", alt: "Interior Design & Real Estate Service" },
  { src: "/beverly-removebg-preview.webp", alt: "Beverly" },
];
