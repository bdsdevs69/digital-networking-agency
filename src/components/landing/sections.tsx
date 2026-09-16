import { HeroCtas } from "@/components/landing/HeroCtas";
import { PlacementsCarousel, type Placement } from "@/components/landing/PlacementsCarousel";
import { TestimonialsCarousel } from "@/components/landing/TestimonialsCarousel";
import { getTrustpilotData } from "@/lib/trustpilot";
import Link from "next/link";
import { GuidesCarousel } from "./GuidesCarousel";
import { GUIDES } from "@/content/guides";

export async function HeroSection() {
  const tp = await getTrustpilotData();
  return (
    <section className="hero" id="top">
      <div className="hero-orb1" />
      <div className="hero-orb2" />
      <div className="hero-orb3" />
      <div className="hero-grid" />
      <div className="hero-sweep" />
      <div className="hero-wm">DNA</div>
      <div className="hero-left">
        <div className="hero-eyebrow">Digital Networking Agency · Public Relations</div>
        {/* The homepage had no <h1> at all — the hero was styled divs. This is
            the same visual, promoted to a real heading. Spans (not divs) so the
            markup stays valid inside an h1; .hero-word is display:block. */}
        <h1 className="hero-head-words">
          <span className="hero-word" style={{ animationDelay: ".25s" }}>
            <span className="word-fill">GET FEATURED</span>
          </span>
          <span className="hero-word" style={{ animationDelay: ".45s" }}>
            <span className="word-fill lime-word">IN THE PRESS</span>
          </span>
        </h1>
        <p className="hero-vp">
          We turn founders &amp; brands into household names by{" "}
          <strong>pitching your story</strong> to our network of editors &amp;
          journalists at the world&apos;s most trusted publications.
        </p>
        <HeroCtas />
      </div>
      <div className="hero-right">
        <div className="hero-visual reveal-r">
          <div className="hero-visual-frame">
            <img
              src="/hero-media.jpg"
              alt="DNA PR — press coverage across the world's leading media"
              fetchPriority="high"
              decoding="async"
            />
            <div className="hero-visual-grad" />
          </div>
          <div className="hero-badge hero-badge--a">
            <div className="hero-badge-num">100+</div>
            <div className="hero-badge-lbl">Top-Tier Placements</div>
          </div>
          <div className="hero-badge hero-badge--b">
            <span className="hero-stars">★★★★★</span>
            <div className="hero-badge-lbl">Rated {tp.score.toFixed(1)} on Trustpilot</div>
          </div>
        </div>
      </div>
      <div className="hero-line" />
    </section>
  );
}

export function StatsSection() {
  return (
    <div className="stats-bar">
      <div className="stat-item reveal"><div className="stat-number">45+</div><div className="stat-label">Publicists &amp; Journalists</div></div>
      <div className="stat-item reveal" style={{ transitionDelay: ".1s" }}><div className="stat-number">1100+</div><div className="stat-label">Publication Outlets</div></div>
      <div className="stat-item reveal" style={{ transitionDelay: ".2s" }}><div className="stat-number">7</div><div className="stat-label">Steps to Publication</div></div>
      <div className="stat-item reveal" style={{ transitionDelay: ".3s" }}><div className="stat-number">∞</div><div className="stat-label">Brand Legacy Potential</div></div>
    </div>
  );
}

export function AboutSection() {
  return (
    <div className="about-suite">
      <section className="section section-about" id="about">
        <div className="stag reveal">Who We Are</div>
        <div className="stitle reveal">About DNA PR</div>
        <div className="sdiv reveal" />
        <div className="about-grid">
          <div className="reveal-l">
            <div className="about-body">
              <p>DNA is a public relations agency specializing in results-driven PR &amp; media relations. Our growing team of 45+ experienced publicists, journalists, broadcasters, and marketers work with brands to secure meaningful media coverage.</p>
              <p>We focus on modern media, including digital, TV, podcast, and speaking opportunities.</p>
            </div>
            <div className="about-hl">&quot;Trust us with YOUR story — because it&apos;s In our DNA.&quot;</div>
            <div className="about-body"><p>DNA PR has secured coverage for clients in Forbes, NY Times, Rolling Stone, FOX, NY Weekly, Entrepreneur, and over 100 top-tier media outlets and networks.</p></div>
          </div>
          <div className="reveal-r">
            <div className="about-visual">
              <img
                src="/about-media.jpg"
                alt="DNA PR — modern media across digital, TV, podcast and print"
                loading="lazy"
              />
              <div className="about-visual-cap">
                <span className="about-visual-eyebrow">How we tell your story</span>
                <span className="about-visual-modes">Digital · TV · Podcast · Print · Speaking</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-why">
        <div className="stag reveal">Why Choose Us</div>
        <div className="stitle reveal">The DNA Difference</div>
        <div className="sdiv reveal" />
        <div className="why-grid">
          <div className="why-card reveal"><div className="why-glow" /><div className="why-num">01</div><div className="why-ico">◈</div><h3>Proprietary Outreach</h3><p>Gone is the day of sending a press release and waiting. We monitor trends with a proprietary alert method — seeing relevant news before anyone and submitting experts for comments first.</p></div>
          <div className="why-card reveal" style={{ transitionDelay: ".15s" }}><div className="why-glow" /><div className="why-num">02</div><div className="why-ico">◉</div><h3>Private Reporter Network</h3><p>Our team has developed a private network of reporters who reach out to DNA directly for responses on breaking news. Our relationships make the difference.</p></div>
          <div className="why-card reveal" style={{ transitionDelay: ".3s" }}><div className="why-glow" /><div className="why-num">03</div><div className="why-ico">◎</div><h3>Storytelling-First</h3><p>We&apos;ve built a proprietary process that relies on communication and storytelling. We optimize our outreach to make your story visible — not just placed, but permanently remembered.</p></div>
        </div>
      </section>
    </div>
  );
}

export function PackagesSection() {
  return (
    <section className="pkg-section" id="packages">
      <div className="stag reveal">DNA Prime — Tiered Plans</div>
      <div className="stitle reveal">Choose Your Package</div>
      <div className="sdiv reveal" />
      <div className="pkg-grid">
        <div className="pkg-card reveal">
          <div className="pt">Tier 1</div><div className="pn">Foundation</div><div className="ptag">Establishing trust</div>
          <div className="pp"><div className="ppn">Custom</div><div className="ppm">quote</div></div>
          <div className="pcom">No minimum commitment</div>
          <ul className="pf"><li>Targeted Publication Pitches</li><li>Pitching and Story Creation</li><li>Media Relations Team</li><li>Media Relations Strategy</li><li>Market Research</li><li>Writing Team</li><li>Digital Publication Pitching</li></ul>
          <div className="ppub"><div className="pplbl">Target Publications</div><div className="pplist">NY Weekly, Miami Wire, Music Observer, WallStreet Times, Celebrity News, The Chicago Journal, Women&apos;s Journal, Voyage New York, CEO Weekly</div></div>
          <Link href="/contact" className="btn-g" style={{ display: "block", textAlign: "center" }}>Get Started</Link>
        </div>
        <div className="pkg-card feat reveal" style={{ transitionDelay: ".15s" }}>
          <div className="pt">Tier 2</div><div className="pn">Signature</div><div className="ptag">Market dominance</div>
          <div className="pp"><div className="ppn">Custom</div><div className="ppm">quote</div></div>
          <div className="pcom">Minimum 3 months</div>
          <ul className="pf"><li>3× Targeted Publication Pitches</li><li>1× Top Tier Publication</li><li>3× Pitching and Story Creation</li><li>Media Relations Team</li><li>Media Relations Strategy</li><li>Market Research</li><li>Writing Team</li><li>Digital Publication Pitching</li><li>Contributor Opportunity Pitching</li></ul>
          <div className="ppub"><div className="pplbl">Target Publications</div><div className="pplist">Entrepreneur Tribune, Business Insider, Fox Interviewer, Kivo Daily, Los Angeles Wire, Texas Today, New York Wire, US Insider, US Reporter, BLK News, Benzinga, Digital Journal</div></div>
          <Link href="/contact" className="btn-p" style={{ display: "block", textAlign: "center" }}><span>Get Started</span></Link>
        </div>
        <div className="pkg-card reveal" style={{ transitionDelay: ".3s" }}>
          <div className="pt">Tier 3</div><div className="pn">Platinum</div><div className="ptag">Category leadership</div>
          <div className="pp"><div className="ppn">Custom</div><div className="ppm">quote</div></div>
          <div className="pcom">Minimum 3 months</div>
          <ul className="pf"><li>5× Targeted Publication Pitches</li><li>5× Pitching and Story Creation</li><li>1× Top-Tier Publication Pitch</li><li>Contributor Opportunity Pitching</li><li>Podcast and Radio Pitching</li><li>Print Publication Pitching</li><li>Ghostwriting</li><li>Television Pitching</li><li>Media Training</li></ul>
          <div className="ppub"><div className="pplbl">Target Publications</div><div className="pplist">Hudson Weekly, Yahoo Finance, Australian Times, New York Reporter, CEO World Biz, Reality Times, OK! Magazine, Elle, Billboard, Podcast (1M+ subscriber channel)</div></div>
          <Link href="/contact" className="btn-g" style={{ display: "block", textAlign: "center" }}>Get Started</Link>
        </div>
      </div>
    </section>
  );
}

export function AlaCarteSection() {
  return (
    <section className="alc-section" id="alacarte">
      <div className="stag reveal">Flexible Option</div>
      <div className="stitle reveal">A La Carte</div>
      <div className="sdiv reveal" />
      <div className="alc-inner">
        <div className="reveal-l">
          <div className="alc-body">
            <p>Experience the ultimate flexibility with our A La Carte service — bespoke single articles tailored specifically to your niche and target audience. Designed for maximum impact in the short term, this approach provides an immediate boost to your visibility.</p>
            <p>Our reactive strategy takes a deep dive into your target market, ensuring the messaging resonates with the right people. Every article is meticulously crafted to elevate your personal brand and position you as a leading figure in your industry.</p>
            <p>You&apos;ll be assigned a dedicated PR strategist who works closely with you to select the perfect publications that amplify your voice to the right audience.</p>
          </div>
        </div>
        <div className="reveal-r">
          <div className="step"><div className="snum">01</div><div className="scont"><h4>Initial Consultation</h4><p>We schedule a consultation to understand your vision, goals, and the publication you want to be featured in.</p></div></div>
          <div className="step"><div className="snum">02</div><div className="scont"><h4>Contract &amp; Payment</h4><p>Once aligned, we send the contract. Upon signing and payment, we move forward officially.</p></div></div>
          <div className="step"><div className="snum">03</div><div className="scont"><h4>Writing Team Collaboration</h4><p>Meet our writing team one-on-one to dive deep into your story and goals for the feature.</p></div></div>
          <div className="step"><div className="snum">04</div><div className="scont"><h4>Draft, Review &amp; Revisions</h4><p>We craft the article, share for feedback, and revise until it meets your expectations perfectly.</p></div></div>
          <div className="step"><div className="snum">05</div><div className="scont"><h4>Pitch &amp; Publish</h4><p>After approval, we pitch to high-end outlets. Once accepted, your article lives permanently online.</p></div></div>
        </div>
      </div>
    </section>
  );
}

export function PrimeSection() {
  return (
    <section className="prime-section" id="prime">
      <div className="stag reveal">Premium Strategy</div>
      <div className="stitle reveal">The Networking<br />DNA Prime</div>
      <div className="sdiv reveal" />
      <div className="prime-intro">
        <div className="prime-body reveal-l">
          <p>Networking DNA Prime is the ultimate premium PR strategy, designed to position your brand as an irreplaceable leader in your industry. With expert guidance, cutting-edge AI technology, and strategic media relationships, this service ensures everlasting visibility and long-term impact.</p>
          <p>This is more than short-term recognition — it&apos;s a long-term legacy. The strategy we implement positions your brand as undefeatable, irreplaceable, and the most coveted name in the market.</p>
          <p>The return on investment compounds year after year, creating a network of influence and recognition that secures your place as a true industry leader.</p>
        </div>
        <div className="prime-box reveal-r">
          <h3>Who Is DNA Prime For?</h3>
          <p>Clients who choose DNA Prime are those who seek to create an indelible impact — an influence that resonates today and compounds over time. These are clients who understand that true PR value isn&apos;t just a fleeting moment, but an ongoing investment into a brand that will remain relevant and revered for generations.</p>
        </div>
      </div>
      <div className="prime-steps">
        <div className="ps reveal"><div className="psn">01</div><h4>Initial Consultation</h4><p>Discuss your vision, goals, and the type of long-term impact you want to achieve.</p></div>
        <div className="ps reveal" style={{ transitionDelay: ".08s" }}><div className="psn">02</div><h4>Contract &amp; Onboarding</h4><p>Upon signing and payment, we begin building your long-term PR strategy immediately.</p></div>
        <div className="ps reveal" style={{ transitionDelay: ".16s" }}><div className="psn">03</div><h4>Dedicated PR Strategist</h4><p>Your personal strategist crafts a fully personalized PR plan aligned with your objectives.</p></div>
        <div className="ps reveal" style={{ transitionDelay: ".04s" }}><div className="psn">04</div><h4>Expert SEO Team</h4><p>AI-powered tools ensure your name ranks highly on all major search engines long-term.</p></div>
        <div className="ps reveal" style={{ transitionDelay: ".12s" }}><div className="psn">05</div><h4>AI Reputation Management</h4><p>AI models actively track and enhance your online reputation across all digital platforms.</p></div>
        <div className="ps reveal" style={{ transitionDelay: ".2s" }}><div className="psn">06</div><h4>Top-Tier Placement</h4><p>Your story pitched to premium, high-authority outlets with editors who maximize exposure.</p></div>
        <div className="ps reveal" style={{ transitionDelay: ".08s" }}><div className="psn">07</div><h4>Contributor Pitching</h4><p>We position you as a thought leader in leading publications for consistent visibility.</p></div>
        <div className="ps reveal" style={{ transitionDelay: ".16s" }}><div className="psn">08</div><h4>Podcast &amp; TV Presence</h4><p>We secure interviews on high-impact podcasts and TV shows relevant to your niche.</p></div>
        <div className="ps reveal" style={{ transitionDelay: ".24s" }}><div className="psn">09</div><h4>Media Training &amp; AI Insights</h4><p>AI-backed training refines your messaging and delivery before every interview.</p></div>
      </div>
    </section>
  );
}

export function BrandingSection() {
  return (
    <>
      <section className="brand-section" id="branding">
        <div className="stag reveal">Beyond PR</div>
        <div className="stitle reveal">Elite Branding Services</div>
        <div className="sdiv reveal" />
        <div className="brand-grid">
          <div className="bc reveal"><span className="bc-ico">🌐</span><h3>Website Development</h3><p>Beautiful, functional websites designed to convert visitors into clients — portfolio, e-commerce, or landing pages.</p><div className="bc-line" /></div>
          <div className="bc reveal" style={{ transitionDelay: ".08s" }}><span className="bc-ico">📣</span><h3>META Ads</h3><p>Targeted campaigns across Facebook and Instagram designed for real conversions, not just clicks.</p><div className="bc-line" /></div>
          <div className="bc reveal" style={{ transitionDelay: ".16s" }}><span className="bc-ico">⚙️</span><h3>Software Development</h3><p>Custom software solutions from mobile apps to enterprise tools that keep you ahead of the competition.</p><div className="bc-line" /></div>
          <div className="bc reveal" style={{ transitionDelay: ".24s" }}><span className="bc-ico">🎨</span><h3>Graphic Design</h3><p>Award-winning designers creating logos, graphics, creatives, and assets that make your brand unforgettable.</p><div className="bc-line" /></div>
          <div className="bc reveal" style={{ transitionDelay: ".04s" }}><span className="bc-ico">📱</span><h3>Social Media</h3><p>Content creation, posting schedules, community management, and growth strategies for loyal audiences.</p><div className="bc-line" /></div>
          <div className="bc reveal" style={{ transitionDelay: ".12s" }}><span className="bc-ico">📧</span><h3>Email Marketing</h3><p>Automated sequences, newsletters, and promotional campaigns optimized for maximum ROI.</p><div className="bc-line" /></div>
          <div className="bc reveal" style={{ transitionDelay: ".2s" }}><span className="bc-ico">🔍</span><h3>SEO &amp; Content</h3><p>Comprehensive audits, on-page optimization, and backlink profiles for sustained organic growth.</p><div className="bc-line" /></div>
          <div className="bc reveal" style={{ transitionDelay: ".28s" }}><span className="bc-ico">🧭</span><h3>Strategy Consulting</h3><p>A clear roadmap for success focused on both immediate wins and long-term brand dominance.</p><div className="bc-line" /></div>
        </div>
      </section>

      <section className="part-section">
        <div className="part-title reveal">Brands We&rsquo;ve Worked With</div>
        <div className="brand-marquee-wrap reveal">
          <div className="brand-marquee">
            {(() => {
              const brands = [
                { src: "/techcon-removebg-preview.png", alt: "TechCon SoCal" },
                { src: "/grit-brokerage-logo-Picsart-BackgroundRemover.jpg", alt: "Grit Brokerage", large: true },
                { src: "/brede_ciapciak-removebg-preview.png", alt: "Brede Ciapciak Dental" },
                { src: "/Sj-removebg-preview.png", alt: "Interior Design & Real Estate Service" },
                { src: "/beverly-removebg-preview.png", alt: "Beverly" }
              ];
              // triple the list so the loop stays seamless across widths
              return [...brands, ...brands, ...brands].map((b, i) => (
                <div className="bm-item" key={`${b.alt}-${i}`}>
                  <img
                    src={b.src}
                    alt={b.alt}
                    className={"large" in b && b.large ? "bm-img bm-img--lg" : "bm-img"}
                    loading="lazy"
                  />
                </div>
              ));
            })()}
          </div>
        </div>
      </section>
    </>
  );
}

// NOTE: clients that have their own Case Study (Kirk, Indrakrishnan, Brick,
// Albright, Kelly) are placed LAST here so they aren't the front slides of the
// carousel — they're already featured in the "Clients We've Featured" section,
// so in the placements carousel you reach them via the arrow.
export const clientPlacements: Placement[] = [
    {
      outlet: "Yahoo Finance",
      headline:
        "PointOne Partners Launches Texas Real Estate Investment Platform With Four Active Development Projects",
      meta: "June 2, 2026",
      href: "https://finance.yahoo.com/markets/stocks/articles/pointone-partners-launches-texas-real-201500951.html",
      img: "/placement-shams.jpg",
      logo: null,
      logoWhite: true
    },
    {
      outlet: "Women's Journal",
      headline:
        "Shermel A. Jeffers Chandwani: Influencing Real Estate in St. Kitts & Nevis",
      meta: "October 15, 2025",
      href: "https://womensjournal.com/shermel-a-jeffers-chandwani-influencing-real-estate-in-st-kitts-nevis/",
      img: "/placement-shermel.jpg",
      logo: null,
      logoWhite: true
    },
    {
      outlet: "MSN",
      headline: "The entrepreneurs everyone is talking about in 2026",
      meta: "Feature listicle · MSN",
      href: "https://www.msn.com/en-us/news/other/the-entrepreneurs-everyone-is-talking-about-in-2026/ar-AA25j5ca",
      img: "/placement-entrepreneurs-msn.jpg",
      logo: null,
      logoWhite: true
    },
    {
      outlet: "Healthcare Business Today",
      headline:
        "The 25-Year Mission Behind a New Standard in Addiction Recovery",
      meta: "May 23, 2025",
      href: "https://www.healthcarebusinesstoday.com/the-25-year-mission-behind-a-new-standard-in-addiction-recovery/",
      img: "/placement-mark.jpg",
      logo: null,
      logoWhite: true
    },
    {
      outlet: "Fox Interviewer",
      headline: "The VRDO Rate-Rigging Scandal: How Wall Street Bilked Taxpayers",
      meta: "June 3, 2025",
      href: "https://foxinterviewer.com/business/the-vrdo-rate-rigging-scandal-how-wall-street-bilked-taxpayers/",
      img: "/placement-vrdo.jpg",
      logo: "/fox-scg-logo.svg",
      logoWhite: true
    },
    {
      outlet: "Real Estate Today",
      headline: "From Groundbreaking to Code-Breaking: How Daniel Sharpe Is Redefining Real Estate with AI",
      meta: "October 29, 2025",
      href: "https://realestatetoday.com/from-groundbreaking-to-code-breaking-how-daniel-sharpe-is-redefining-real-estate-with-ai/",
      img: "/placement-sharpe.jpg",
      logo: null,
      logoWhite: true
    },
    {
      outlet: "Benzinga",
      headline:
        "Mark Manderson: Elevating Standards of Mental Health and Addiction Care with Pacific Shores Recovery",
      meta: "July 2025",
      href: "https://www.benzinga.com/pressreleases/25/07/ab46479680/mark-manderson-elevating-standards-of-mental-health-and-addiction-care-with-pacific-shores-recove",
      img: "/placement-mark.jpg",
      logo: "/Benzinga-Logo-removebg-preview.png",
      logoWhite: true
    },
    {
      outlet: "MSN",
      headline:
        "The body isn't a machine: Inside Dr. Kirk Sanford's case for honest regenerative medicine",
      meta: "Full feature · MSN",
      href: "https://www.msn.com/en-us/news/other/the-body-isn%E2%80%99t-a-machine-inside-dr-kirk-sanford%E2%80%99s-case-for-honest-regenerative-medicine/ar-AA2705OB",
      img: "/placement-kirk-msn.jpg",
      logo: null,
      logoWhite: true
    },
    {
      outlet: "USA Today",
      headline:
        "Dr. Bhuvanendram Indrakrishnan: Leadership in Medicine and Community Health",
      meta: "May 22, 2026",
      href: "https://www.usatoday.com/story/special/contributor-content/2026/05/22/dr-bhuvanendram-indrakrishnan-leadership-in-medicine-and-community-health/90214273007/",
      img: "/placement-indran.jpg",
      logo: "/USA-Today-removebg-preview.png",
      logoWhite: true
    },
    {
      outlet: "Wall Street Times",
      headline:
        "From Mario Kart to the Supreme Court: How Matthew Brick Built a Law Firm That Puts Clients First",
      meta: "April 23, 2026",
      href: "https://wallstreettimes.com/from-mario-kart-to-the-supreme-court-how-matthew-brick-built-a-law-firm-that-puts-clients-first/",
      img: "/placement-brick.jpg",
      logo: "/WST%20.jpeg",
      logoWhite: false
    },
    {
      outlet: "New York Weekly",
      headline: "Leaving a Mark: Andréa Albright and the Future of Legacy Publishing",
      meta: "Entrepreneur Feature",
      href: "https://nyweekly.com/entrepreneur/leaving-a-mark-andrea-albright-and-the-future-of-legacy-publishing/",
      img: "/placement-albright.jpg",
      logo: "/NY-Weekly-removebg-preview.png",
      logoWhite: true
    },
    {
      outlet: "CEO Weekly",
      headline: "Patrick Kelly: Giving Fresh Produce a Global Voice Through Storytelling and Innovation",
      meta: "September 18, 2025",
      href: "https://ceoweekly.com/patrick-kelly-giving-fresh-produce-a-global-voice-through-storytelling-and-innovation/",
      img: "/placement-kelly.jpg",
      logo: "/CEO_Weekly-removebg-preview.png",
      logoWhite: true
    }
];

export function GuidesSection() {
  // Accent word for the card panel, derived from the slug so new guides
  // need no manual entry here.
  const accentFor = (slug: string) => {
    const m = slug.match(/get-featured-(in|on)-(.+)$/);
    if (!m) return "";
    const words = m[2]
      .split("-")
      .map((w) => (w === "and" ? "&" : w.charAt(0).toUpperCase() + w.slice(1)))
      .join(" ")
      .replace("Womens", "Women's")
      .replace("Msn", "MSN")
      .replace("Ny ", "NY ")
      .replace("Ceo ", "CEO ")
      .replace("Usa ", "USA ")
      .replace("Ap ", "AP ")
      .replace("La ", "LA ")
      .replace("Us ", "US ");
    return `${m[1]} ${words}`;
  };

  const cards = GUIDES.map((g) => ({
    slug: g.slug,
    title: g.h1,
    accent: accentFor(g.slug)
  }));

  return (
    <section className="guides-section" id="guides">
      <div className="stag reveal">From the Blog</div>
      <div className="guides-head">
        <h2 className="guides-title reveal">
          Guides on getting <em>featured</em>
        </h2>
        <Link className="guides-all reveal" href="/guides">
          View all articles &rarr;
        </Link>
      </div>
      <div className="reveal">
        <GuidesCarousel guides={cards} />
      </div>
      <div className="guides-cta reveal">
        <p className="guides-cta-text">
          Reading about it is one thing. <em>Being in it</em> is another.
        </p>
        <a
          className="guides-cta-btn"
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Free Call <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  );
}

export function ProofSection() {
  return (
    <section className="proof-section">
      <div className="stag reveal">Proof of Authority</div>
      <div className="stitle reveal">Client Placements</div>
      <div className="sdiv reveal" />
      <PlacementsCarousel placements={clientPlacements} />
    </section>
  );
}

export function CtaFooterSection() {
  return (
    <>
      <section className="cta-section" id="contact">
        <div className="cta-ey reveal">Ready to get started?</div>
        <div className="cta-title reveal">
          It&apos;s In
          <br />
          <span>Our DNA.</span>
        </div>
        <div className="cta-sub reveal">Trust us with your story. Let&apos;s build your legacy together.</div>
        <div className="cta-btns reveal">
          <a href="mailto:sam@digitalnetworkingagency.com" className="btn-p">
            <span>Book a Consultation</span>
          </a>
          <Link href="/services" className="btn-g">View Packages</Link>
        </div>
      </section>
    </>
  );
}

export function PressMarquee() {
  // Real publication logos, shown on white chips so every mark stays legible.
  const outlets: { name: string; src?: string }[] = [
    { name: "Forbes", src: "/logo-forbes.png" },
    { name: "Business Insider", src: "/logo-bi.png" },
    { name: "Rolling Stone", src: "/logo-rollingstone.png" },
    { name: "Esquire", src: "/logo-esquire.png" },
    { name: "Maxim", src: "/logo-maxim.png" },
    { name: "Allure", src: "/logo-allure.png" },
    { name: "Glamour", src: "/logo-glamour.png" },
    { name: "Architectural Digest", src: "/logo-ad.png" },
    { name: "Haute Beauty", src: "/logo-harpersbazaar.png" },
    { name: "Sports Illustrated", src: "/logo-si.png" },
    { name: "Us Weekly", src: "/logo-usweekly.png" },
    { name: "Los Angeles Times", src: "/logo-latimes.png" },
    { name: "Entrepreneur", src: "/logo-entrepreneur.jpg" },
    { name: "Hollywood Life", src: "/logo-hollywoodlife.png" },
    { name: "OK! Magazine", src: "/logo-ok.png" },
    { name: "Success Magazine", src: "/logo-success.png" },
    { name: "Muscle & Fitness", src: "/logo-musclefitness.png" },
    { name: "Woman's World", src: "/logo-womansworld.png" },
    { name: "IBTimes", src: "/logo-ibtimes.png" },
    { name: "Investing.com", src: "/logo-investing.png" },
    { name: "Flaunt", src: "/logo-flaunt.png" },
    { name: "Haute Residence", src: "/logo-haute.png" },
    { name: "The Business Journals", src: "/logo-bizjournals.png" },
    { name: "Law & Crime", src: "/logo-lawcrime.png" },
    { name: "Law News Day", src: "/logo-lawnewsday.png" },
    { name: "USA Today", src: "/USA-Today-removebg-preview.png" },
    { name: "Benzinga", src: "/Benzinga-Logo-removebg-preview.png" },
    { name: "FOX", src: "/fox-scg-logo.svg" },
    { name: "CEO Weekly", src: "/CEO_Weekly-removebg-preview.png" },
    { name: "New York Weekly", src: "/NY-Weekly-removebg-preview.png" }
  ];
  const row = [...outlets, ...outlets];
  return (
    <section className="press-marquee">
      <h2 className="press-heading reveal">Our Clients Get Media Mentions That Matter</h2>
      <div className="press-track-wrap">
        <div className="press-track">
          {row.map((o, i) => (
            <div className="press-item" key={`${o.name}-${i}`}>
              {o.src ? (
                <img src={o.src} alt={o.name} className="press-logo" />
              ) : (
                <span className="press-wordmark">{o.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function TestimonialsSection() {
  const reviews = [
    {
      name: "David",
      meta: "Featured in MSN",
      text:
        "I have had a great experience working with Digital Networking Agency. Sam Harris and his team consistently do an excellent job of promoting brands and helping businesses stand out in a competitive market. Their professionalism, expertise, and dedication to delivering results are evident in everything they do. I truly enjoy working with them and highly recommend their services to anyone looking to enhance their brand visibility and online presence."
    },
    {
      name: "Julie Krivanek",
      meta: "Featured in CEO Weekly",
      text:
        "I have worked with many PR and marketing firms — and this stands head and shoulders above in the #1 spot. Responsive, timely, clear in expectations… and extremely creative, with superb results and a complete pleasure to work with. Honestly? If you have the chance to work with Sam Harris and his team, grab it — you won't be sorry."
    },
    {
      name: "Sahar Maknouni",
      meta: "Featured in CEO Weekly",
      text:
        "Honestly didn't expect it to move this fast. Sam pitched my story, kept me looped in the whole way, and the CEO Weekly piece read exactly how I'd describe my own work. Already lining up the next one."
    },
    {
      name: "Ben Labra",
      meta: "Featured in CEO Weekly",
      text:
        "What stood out to me was the writing — it actually sounded like me, not a recycled press release. We went through a couple rounds of edits and they were patient with every note."
    },
    {
      name: "Brian Haarbin",
      meta: "Featured in CEO Weekly",
      text:
        "Communication was the best part. I always knew where things stood, and what they said would happen, happened. The feature came out better than I'd pictured."
    },
    {
      name: "Alan Araujo",
      meta: "Featured in CEO Weekly",
      text:
        "Way less stressful than I expected, and the quality caught me off guard in the best way. If you're on the fence about it, just go for it."
    },
    {
      name: "Matthew Brick",
      meta: "Featured in CEO Weekly",
      text:
        "I'm particular about how I'm represented, so I appreciated how carefully they handled my story. Responsive, detail-oriented, and the final piece held up to scrutiny."
    },
    {
      name: "Uch Mobayode",
      meta: "Featured in CEO Weekly",
      text:
        "They took the time to actually understand what I do before writing a word — that's why the article didn't feel templated. Would work with them again."
    },
    {
      name: "Atulh Jindal",
      meta: "Featured in CEO Weekly",
      text:
        "Straightforward and no nonsense. Delivered what was promised without the endless back-and-forth I've had with other firms."
    },
    {
      name: "Jennifer O'Connor",
      meta: "Featured in MSN",
      text:
        "The MSN placement came through exactly as described. Clear timelines, easy to reach, no surprises — rarer than it should be these days."
    },
    {
      name: "Lem Garcia",
      meta: "Featured in USA Today",
      text:
        "Seeing my name in USA Today still feels a little surreal. The team made it happen and made it painless. Can't recommend them enough."
    },
    {
      name: "Lynette Laguna",
      meta: "Featured in Yahoo Finance",
      text:
        "Quick, professional, and the Yahoo Finance feature looked sharp. I'll be back for the next round."
    }
  ];

  // Pull in live 5-star Trustpilot reviews and append them — deduped against the
  // existing list by name and by opening text so nothing shows up twice. Refreshes
  // automatically via the page's ISR revalidation.
  const normName = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const textKey = (s: string) =>
    s.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 50);
  const seenNames = new Set(reviews.map((r) => normName(r.name)));
  const seenText = new Set(reviews.map((r) => textKey(r.text)));

  const tp = await getTrustpilotData();
  const tpReviews = tp.reviews
    .filter((r) => r.rating === 5)
    .filter((r) => {
      const nk = normName(r.author);
      const tk = textKey(r.body);
      if (seenNames.has(nk) || seenText.has(tk)) return false;
      seenNames.add(nk);
      seenText.add(tk);
      return true;
    })
    .map((r) => ({
      name: r.author,
      meta: "Verified Trustpilot review",
      text: r.body
    }));

  const allReviews = [...reviews, ...tpReviews];

  return (
    <section className="tst-section" id="testimonials">
      <div className="tst-glow" />
      <div className="stag reveal">Client Voices</div>
      <div className="stitle reveal">Digital Networking Agency Reviews</div>
      <div className="sdiv reveal" />
      <TestimonialsCarousel reviews={allReviews} />
    </section>
  );
}
