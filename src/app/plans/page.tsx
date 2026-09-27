import type { Metadata } from "next";
import Link from "next/link";
import { getTrustpilotData } from "@/lib/trustpilot";
import { clientPlacements } from "@/components/landing/sections";
import { LogoMarquee } from "@/components/home/HomeSections";
import { Rail } from "@/components/home/Rail";
import hs from "@/components/home/home.module.css";
import { focal } from "@/lib/focal";
import s from "./plans.module.css";

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

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const COMPARE: { row: string; v: [string, string, string] }[] = [
  { row: "Standard feature / month", v: ["yes", "yes", "yes"] },
  { row: "Premier feature / month", v: ["yes", "no", "yes"] },
  { row: "Flagship feature within 3 months", v: ["no", "no", "yes"] },
  { row: "Commitment", v: ["3-mo min", "Cancel anytime", "3-mo min"] },
];

export default async function PlansPage() {
  const trustpilot = await getTrustpilotData();
  const reviews = trustpilot.reviews.slice(0, 3);
  const cell = (v: string) =>
    v === "yes" ? <span className={s.yes} aria-label="Included">✓</span>
    : v === "no" ? <span className={s.no} aria-label="Not included">—</span>
    : v;

  return (
    <main className={s.page}>
      {/* hero */}
      <header className={s.hero}>
        <div className="v-glow" aria-hidden="true" />
        <div className={`v-wrap ${s.heroInner}`}>
          <span className="v-label v-label--lime">Exclusive · For our clients</span>
          <h1 className={s.h1}>
            Keep the <span className="v-hl">momentum going.</span>
          </h1>
          <p className={s.sub}>
            You&apos;re in — now let&apos;s keep your name in front of the right
            audiences. Pick the plan that fits your next phase of growth.
          </p>
          <ul className={s.assure}>
            {assurances.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </header>

      <LogoMarquee />

      {/* the plans */}
      <section className="v-sec v-light v-panel" id="plans">
        <div className="v-wrap">
          <div className="v-head">
            <div>
              <span className="v-label">Client plans</span>
              <h2 className="v-h2">
                Pick your <span className="v-hl">plan.</span>
              </h2>
            </div>
          </div>
          <div className={s.plans}>
            {plans.map((p) => (
              <article key={p.name} className={`${s.plan} ${p.featured ? s.planFeat : ""}`}>
                {p.featured ? <span className={s.flag}>Cancel anytime</span> : null}
                <span className={s.kind}>{p.kind}</span>
                <h3 className={s.name}>{p.name}</h3>
                <span className={s.tag}>{p.tagline}</span>
                <div className={s.price}>
                  {p.price}
                  <small>{p.per}</small>
                </div>
                <span className={s.commit}>{p.commitment}</span>
                <ul className={s.list}>
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className={s.actions}>
                  <a href={p.href} className={`v-btn ${p.featured ? "" : "v-btn--dark"} ${s.choose}`}>
                    {p.cta} <Arrow />
                  </a>
                  <Link href={`/plans/${p.name.toLowerCase()}`} className={s.articles}>
                    View articles <Arrow />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* at a glance */}
          <div className={s.compare}>
            <h3 className={s.compareTitle}>Plans at a glance</h3>
            <div className={s.tableScroll}>
              <table className={s.table}>
                <thead>
                  <tr>
                    <th />
                    <th>Spotlight</th>
                    <th className={s.colFeat}>Momentum</th>
                    <th>Authority</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((r) => (
                    <tr key={r.row}>
                      <th scope="row">{r.row}</th>
                      <td>{cell(r.v[0])}</td>
                      <td className={s.colFeat}>{cell(r.v[1])}</td>
                      <td>{cell(r.v[2])}</td>
                    </tr>
                  ))}
                  <tr className={s.priceRow}>
                    <th scope="row">Price</th>
                    <td>$700<small>/mo</small></td>
                    <td className={s.colFeat}>$300<small>/mo</small></td>
                    <td>$1,300<small>/mo</small></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* proof */}
      <section className="v-sec">
        <Rail
          label="Client placements"
          head={
            <>
              <span className="v-label v-label--lime">Proof of authority</span>
              <h2 className="v-h2">
                Client <span className="v-hl">placements.</span>
              </h2>
            </>
          }
        >
          {clientPlacements.map((p) => (
            <a key={p.href} className={hs.work} href={p.href} target="_blank" rel="noopener noreferrer">
              <span className={hs.workImg}>
                {p.img ? <img src={p.img} alt="" loading="lazy" style={{ objectPosition: focal(p.img) }} /> : null}
              </span>
              <span className={hs.workBody}>
                <span className={hs.workMeta}>
                  <span className={hs.workOutlet}>{p.outlet}</span>
                  <span>{p.meta.replace(/\s*·\s*MSN$/, "")}</span>
                </span>
                <span className={hs.workHead}>{p.headline}</span>
                <span className={hs.workRead}>Read on {p.outlet} ↗</span>
              </span>
            </a>
          ))}
        </Rail>
      </section>

      {/* reviews */}
      <section className="v-sec" style={{ paddingTop: 0 }}>
        <div className="v-wrap">
          <div className="v-head">
            <div>
              <span className="v-label v-label--lime">Verified on Trustpilot</span>
              <h2 className="v-h2">
                Rated {trustpilot.score.toFixed(1)} <span className="v-hl">by clients.</span>
              </h2>
            </div>
            <a className="v-btn v-btn--ghost" href={trustpilot.profileUrl} target="_blank" rel="noopener noreferrer">
              Read every review <Arrow />
            </a>
          </div>
          <div className={s.reviews}>
            {reviews.map((r, i) => (
              <figure key={`${r.author}-${i}`} className={s.review}>
                <span className={s.stars} aria-label={`${r.rating} out of 5 stars`}>{"★".repeat(Math.round(r.rating))}</span>
                <strong className={s.rTitle}>{r.title}</strong>
                <blockquote className={s.rBody}>{r.body}</blockquote>
                <figcaption className={s.rWho}>
                  <span className={s.rAv} aria-hidden="true">{r.author.charAt(0).toUpperCase()}</span>
                  {r.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="v-sec" style={{ paddingTop: 0 }}>
        <div className={`v-wrap ${s.faqWrap}`}>
          <div className={s.faqSide}>
            <span className="v-label v-label--lime">Questions, answered</span>
            <h2 className="v-h2">
              Before you <span className="v-hl">pick.</span>
            </h2>
            <p className={s.note}>
              Not sure which fits?{" "}
              <a href="mailto:sam@digitalnetworkingagency.com?subject=Which%20plan%20is%20right%20for%20me">
                Reply to your strategist
              </a>{" "}
              and we&apos;ll map it to your goals.
            </p>
          </div>
          <div className={s.faqs}>
            {faqs.map((f, i) => (
              <details className={s.faq} key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
