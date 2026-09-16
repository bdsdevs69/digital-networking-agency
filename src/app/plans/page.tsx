import type { Metadata } from "next";
import Link from "next/link";
import { ReviewsSection } from "@/components/landing/ReviewsSection";
import { getTrustpilotData } from "@/lib/trustpilot";
import { PressMarquee, clientPlacements } from "@/components/landing/sections";
import { PlacementsCarousel } from "@/components/landing/PlacementsCarousel";

export const metadata: Metadata = {
  title: "Client Plans — DNA PR",
  description: "Exclusive ongoing PR plans for DNA PR clients.",
  robots: { index: false, follow: false }
};

// Refresh the page (and its Trustpilot reviews) on the same cadence as the review fetch.
export const revalidate = 21600; // REVALIDATE_SECONDS

const plans = [
  {
    kind: "Subscription",
    name: "Spotlight",
    tagline: "A high-impact prestige placement",
    price: "$700",
    per: "/month",
    commitment: "3-month minimum",
    featured: false,
    cta: "Choose Spotlight",
    href: "mailto:sam@digitalnetworkingagency.com?subject=Spotlight%20Plan",
    features: [
      "1 Standard feature article every month",
      "1 Premier feature article every month",
      "Premium ghostwriting & media strategy",
      "Editor & journalist pitching",
      "Dedicated PR strategist"
    ]
  },
  {
    kind: "Monthly Subscription",
    name: "Momentum",
    tagline: "Stay consistently visible",
    price: "$300",
    per: "/month",
    commitment: "Billed monthly · cancel anytime",
    featured: true,
    cta: "Start Momentum",
    href: "mailto:sam@digitalnetworkingagency.com?subject=Momentum%20Plan",
    features: [
      "1 Standard feature article every month",
      "From our Standard publication network",
      "Professional story writing & editing",
      "Editor & journalist pitching",
      "Dedicated PR strategist",
      "Month-to-month — cancel anytime"
    ]
  },
  {
    kind: "Subscription",
    name: "Authority",
    tagline: "Build compounding authority",
    price: "$1,300",
    per: "/month",
    commitment: "3-month minimum",
    featured: false,
    cta: "Go Authority",
    href: "mailto:sam@digitalnetworkingagency.com?subject=Authority%20Plan",
    features: [
      "1 Standard feature article every month",
      "1 Premier feature article every month",
      "1 Flagship feature within 3 months — USA Today · Forbes AU · Rolling Stone & more",
      "Full media strategy & ghostwriting",
      "Senior strategist + priority placement"
    ]
  }
];

const assurances = [
  "You approve every article before it goes live",
  "Momentum is month-to-month — cancel anytime",
  "Every published feature stays online permanently"
];

const faqs = [
  {
    q: "When am I charged?",
    a: "Your subscription bills monthly from the day you start. Momentum is month-to-month; Spotlight and Authority run for a 3-month minimum, then continue monthly."
  },
  {
    q: "Do I approve the article before it's published?",
    a: "Always. We write your story and share it for your feedback, revising until you're happy — nothing goes live without your sign-off."
  },
  {
    q: "Can I cancel?",
    a: "Momentum can be cancelled anytime. Spotlight and Authority have a 3-month minimum, then switch to month-to-month you can cancel whenever."
  },
  {
    q: "Which outlets will I be featured in?",
    a: "It depends on your plan — hit “View articles” on any plan above to see the exact live publication list, each with its domain rating."
  },
  {
    q: "How soon does my first feature go live?",
    a: "Usually within your first month. We handle everything end to end — the writing, the pitching to our editor and journalist network, and publication."
  },
  {
    q: "What happens to my article after it's published?",
    a: "It stays online permanently — indexed and searchable — so it keeps building authority for your name long after it runs."
  }
];

export default async function PlansPage() {
  const trustpilot = await getTrustpilotData();
  return (
    <main className="plans-page">
      <header className="plans-top">
        <Link href="/" className="nav-logo" aria-label="DNA PR — Home">
          <img src="/black_logo.webp" alt="DNA PR" className="nav-logo-img" />
        </Link>
        <span className="plans-top-tag">Client Plans</span>
      </header>

      <section className="plans-hero">
        <div className="stag plans-stag">Exclusive · For Our Clients</div>
        <h1 className="stitle plans-title">Keep The Momentum Going</h1>
        <p className="plans-sub">
          You&apos;re in — now let&apos;s keep your name in front of the right
          audiences. Pick the plan that fits your next phase of growth.
        </p>
      </section>

      <PressMarquee />

      <section className="plans-section">
        <div className="pkg-grid plans-grid">
          {plans.map((p) => (
            <div
              className={p.featured ? "pkg-card feat" : "pkg-card"}
              key={p.name}
            >
              <div className="pt">{p.kind}</div>
              <div className="pn">{p.name}</div>
              <div className="ptag">{p.tagline}</div>
              <div className="pp">
                <div className="ppn">{p.price}</div>
                <div className="ppm">{p.per}</div>
              </div>
              <div className="pcom">{p.commitment}</div>
              <ul className="pf">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link
                href={`/plans/${p.name.toLowerCase()}`}
                className="pkg-articles-link"
              >
                View articles →
              </Link>
            </div>
          ))}
        </div>

        <div className="plans-assurance">
          {assurances.map((a) => (
            <div className="plans-assurance-item" key={a}>
              <span className="tick" aria-hidden="true">✓</span>
              <span>{a}</span>
            </div>
          ))}
        </div>

        <div className="plans-compare">
          <div className="plans-tiers-title">Plans at a glance</div>
          <div className="plans-compare-scroll">
            <table className="plans-compare-table">
              <thead>
                <tr>
                  <th />
                  <th>Spotlight</th>
                  <th className="cmp-feat">Momentum</th>
                  <th>Authority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Standard feature / month</td>
                  <td><span className="cmp-yes">✓</span></td>
                  <td className="cmp-feat"><span className="cmp-yes">✓</span></td>
                  <td><span className="cmp-yes">✓</span></td>
                </tr>
                <tr>
                  <td>Premier feature / month</td>
                  <td><span className="cmp-yes">✓</span></td>
                  <td className="cmp-feat"><span className="cmp-no">—</span></td>
                  <td><span className="cmp-yes">✓</span></td>
                </tr>
                <tr>
                  <td>Flagship feature · within 3 months</td>
                  <td><span className="cmp-no">—</span></td>
                  <td className="cmp-feat"><span className="cmp-no">—</span></td>
                  <td><span className="cmp-yes">✓</span></td>
                </tr>
                <tr>
                  <td>Commitment</td>
                  <td>3-mo min</td>
                  <td className="cmp-feat">Cancel anytime</td>
                  <td>3-mo min</td>
                </tr>
                <tr className="cmp-price-row">
                  <td>Price</td>
                  <td>$700<span className="cmp-mo">/mo</span></td>
                  <td className="cmp-feat">$300<span className="cmp-mo">/mo</span></td>
                  <td>$1,300<span className="cmp-mo">/mo</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="plans-placements">
          <div className="plans-tiers-title">Proof of Authority</div>
          <h2 className="plans-placements-h">Client Placements</h2>
          <PlacementsCarousel placements={clientPlacements} />
        </div>

        <ReviewsSection data={trustpilot} />

        <div className="plans-faq">
          <div className="plans-tiers-title">Questions, answered</div>
          {faqs.map((f) => (
            <details className="plans-faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <div className="plans-faq-a">{f.a}</div>
            </details>
          ))}
        </div>

        <div className="plans-note">
          Not sure which fits? <a href="mailto:sam@digitalnetworkingagency.com?subject=Which%20plan%20is%20right%20for%20me">Reply to your strategist</a> and we&apos;ll map it to your goals.
        </div>
      </section>

      <footer className="plans-foot">
        © 2026 Digital Networking Agency LLC · It&apos;s in our DNA
      </footer>
    </main>
  );
}
