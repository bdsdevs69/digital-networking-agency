import Link from "next/link";
import { clientPlacements, getAllReviews, PRESS_LOGOS } from "@/components/landing/sections";
import { CASE_STUDIES } from "@/content/caseStudies";
import { GUIDES } from "@/content/guides";
import { getTrustpilotData } from "@/lib/trustpilot";
import { focal } from "@/lib/focal";
import s from "./home.module.css";
import { Rail } from "./Rail";
import { HeroRotator, type RotItem } from "./HeroRotator";
import { MastName } from "./MastName";
import { FunkyCta } from "@/components/FunkyCta";
import { VideoPlayer } from "@/components/VideoTestimonial";

const TRUSTPILOT = "https://www.trustpilot.com/review/digitalnetworkingagency.com";

export const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ═══ HERO ════════════════════════════════════════════════════
   Under the headline, a fan of press clippings — real client features,
   the outlet that ran them, the real headline, the live link. */
// the headline cycles through the same five outlets, in this order
const ROTATE: RotItem[] = [
  // each set in a style that echoes the real masthead
  { outlet: "USA Today", style: "sans" },
  { outlet: "Entrepreneur", style: "serif" },
  { outlet: "MSN", style: "sans" },
  { outlet: "Yahoo Finance", style: "sansItalic" },
  { outlet: "Wall Street Times", style: "sansItalic" },
  { outlet: "Times Square Journal", style: "sansItalic" },
];

export async function HomeHero() {
  const tp = await getTrustpilotData();
  const dated = clientPlacements
    .map((p) => ({ ...p, date: new Date(p.meta) }))
    .filter((p) => !Number.isNaN(p.date.getTime()))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
  const edition = dated.filter((p) => p.img).slice(0, 5);

  return (
    <section className={s.news}>
      <div>
        {/* the front page, edge to edge */}
        <div className={s.sheet}>
          <header className={s.mastHead}>
            <MastName />
          </header>

          <div className={s.front}>
            <div className={s.lead}>
              {/* the full phrase stays in the h1 for search; the eye sees the rotating outlet */}
              <h1 className={s.newsH1}>
                <span className={s.h1Top}>Get featured in</span>
                <HeroRotator items={ROTATE} />
                <span className="sr-only">
                  the press people trust — {ROTATE.map((r) => r.outlet).join(", ")}
                </span>
              </h1>
              <p className={s.newsLede}>
                We write your story and get it published in the outlets your clients already read.
                You approve every word.
              </p>
              <div className={s.newsActions}>
                <FunkyCta href="/contact" label="Get featured" />
                <a href="#work" className={s.newsLink}>
                  See the work <Arrow />
                </a>
              </div>

              <a className={s.newsTrust} href={TRUSTPILOT} target="_blank" rel="noopener noreferrer">
                <span aria-hidden="true">★★★★★</span> Rated {tp.score.toFixed(1)} on Trustpilot
              </a>
            </div>

            <aside className={s.edition} aria-label="In this edition">
              <p className={s.editionHead}>In this edition</p>
              {edition.map((p) => (
                <a key={p.href} className={s.story} href={p.href} target="_blank" rel="noopener noreferrer">
                  <span className={s.storyPic}>
                    <img src={p.img!} alt="" loading="lazy" style={{ objectPosition: focal(p.img) }} />
                  </span>
                  <span className={s.storyTxt}>
                    <span className={s.storyOutlet}>{p.outlet} &middot; {p.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                    <span className={s.storyHead}>{p.headline}</span>
                  </span>
                </a>
              ))}
            </aside>
          </div>

          {/* the wire: real placements, newest first */}
          <div className={s.breaking}>
            <span className={s.breakingTag}>
              <i aria-hidden="true" /> Just published
            </span>
            <div className={s.breakingRow}>
              <div className={s.breakingTrack}>
                {[...dated, ...dated].map((p, i) => (
                  <a key={i} href={p.href} target="_blank" rel="noopener noreferrer" tabIndex={i >= dated.length ? -1 : undefined} aria-hidden={i >= dated.length || undefined}>
                    <span className={s.wireOutlet}>{p.outlet}</span>
                    <span className={s.wireHead}>{p.headline}</span>
                    <span className={s.wireDate}>{p.date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                    <span className={s.wireGo} aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ PUBLICATION LOGOS — the marks from the original site, on white tiles ═══ */
export function LogoMarquee() {
  const half = Math.ceil(PRESS_LOGOS.length / 2);
  const rows = [PRESS_LOGOS.slice(0, half), PRESS_LOGOS.slice(half)];
  return (
    <section className={s.logos} aria-labelledby="logos-title">
      <div className="v-wrap">
        <h2 id="logos-title" className={s.logosTitle}>
          Our clients get media mentions <span className="v-hl">that matter.</span>
        </h2>
      </div>
      {rows.map((row, r) => (
        <div className={`${s.logoRow} ${r ? s.logoRowRev : ""}`} key={r}>
          <div className={s.logoTrack}>
            {[...row, ...row].map((o, i) => (
              <span className={s.logoTile} key={`${o.name}-${i}`} aria-hidden={i >= row.length || undefined}>
                {o.src ? (
                  <img
                    src={o.src}
                    alt={i >= row.length ? "" : o.name}
                    loading="lazy"
                    // this file carries a lot of empty padding around the mark
                    style={o.name === "CEO Weekly" ? { transform: "scale(1.9)" } : undefined}
                  />
                ) : o.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

/* ═══ [01] THE WORK — one swipeable row ══════════════════════ */
// Order on the homepage row (anything not listed follows in its usual order).
const WORK_ORDER = [
  "/placement-shams.webp",              // Yahoo Finance
  "/kirk-sanford-v3.jpg",                  // Entrepreneur
  "/placement-flaxington.jpg",          // MSN
  "/placement-indran.webp",             // USA Today
  "/krishan-thakker.jpg",               // Wall Street Times
  "/placement-brick.webp",              // Wall Street Times
  "/placement-entrepreneurs-msn.webp",  // MSN listicle
  "/placement-albright.webp",           // New York Weekly
  "/placement-mark.webp",               // Benzinga
  "/placement-shermel.webp",            // Women's Journal
  "/placement-kelly.webp",              // CEO Weekly
];

export function WorkGrid() {
  const rank = (img?: string | null) => {
    const i = WORK_ORDER.indexOf(img ?? "");
    return i === -1 ? WORK_ORDER.length : i;
  };
  const work = [...clientPlacements].sort((a, b) => rank(a.img) - rank(b.img));
  return (
    <section className="v-sec" id="work">
      <Rail
        label="Client features"
        head={
          <>
            <span className="v-label v-label--lime">01 · The work</span>
            <h2 className="v-h2">
              Real features. <span className="v-hl">Real links.</span>
            </h2>
            <p className="v-lede">
              Not a logo wall. Every card is a live article about a real client —
              click any of them and read it on the publication that ran it.
            </p>
          </>
        }
        foot={
          <>
            <Link href="/case-studies" className={s.railMore}>
              See the case studies <Arrow />
            </Link>
          </>
        }
      >
        {work.map((p) => (
          <a key={p.href} className={s.work} href={p.href} target="_blank" rel="noopener noreferrer">
            <span className={s.workImg}>
              {p.img ? <img src={p.img} alt="" loading="lazy" style={{ objectPosition: focal(p.img) }} /> : null}
            </span>
            <span className={s.workBody}>
              <span className={s.workMeta}>
                <span className={s.workOutlet}>{p.outlet}</span>
                <span>{p.meta.replace(/\s*·\s*MSN$/, "")}</span>
              </span>
              <span className={s.workHead}>{p.headline}</span>
              <span className={s.workRead}>Read on {p.outlet} ↗</span>
            </span>
          </a>
        ))}
        <Link href="/case-studies" className={s.workEnd}>
          <span className={s.workEndN}>More.</span>
          <span className={s.workEndT}>These are a handful of recent features. Read the story behind how we placed them.</span>
          <span className={s.workEndGo}>
            See the case studies <Arrow />
          </span>
        </Link>
      </Rail>
    </section>
  );
}

/* ═══ NUMBERS — only figures already stated elsewhere on the site ═══ */
export async function Numbers() {
  const tp = await getTrustpilotData();
  return (
    <section className="v-sec v-sec--tight">
      <div className="v-wrap">
        <div className={s.nums}>
          <div className={s.num}>
            <span className={s.numVal}><span data-count="1100">1,100</span><em>+</em></span>
            <span className={s.numLbl}>Publications in the network we pitch to</span>
          </div>
          <div className={s.num}>
            <span className={s.numVal}><span data-count="100">100</span><em>%</em></span>
            <span className={s.numLbl}>Of articles approved by the client before they go live</span>
          </div>
          <div className={s.num}>
            <span className={s.numVal}><span data-count={tp.score.toFixed(1)}>{tp.score.toFixed(1)}</span><em>★</em></span>
            <span className={s.numLbl}>Rating on Trustpilot, from verified clients</span>
          </div>
          <div className={s.num}>
            <span className={s.numVal}><span data-count="24">24</span><em>h</em></span>
            <span className={s.numLbl}>Reply time on every enquiry, Mon–Fri</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ KRISHAN — the video, and the feature behind it ═══════════ */
export function KrishanStory() {
  const k = CASE_STUDIES.find((c) => c.slug === "krishan-thakker");
  if (!k) return null;
  return (
    <section className={`v-sec ${s.ks}`} id="krishan" aria-labelledby="krishan-title">
      <div className="v-wrap">
        <div className={s.ksHead}>
          <span className="v-label v-label--lime">In their words · Case study</span>
          <h2 id="krishan-title" className={s.ksTitle}>
            Hear it from <span className="v-hl">the client.</span>
          </h2>
        </div>

        <div className={s.ksGrid}>
          <div className={s.ksVideo}>
            <VideoPlayer className={s.ksPlayer} />
            <p className={s.ksCaption}>
              <span className={s.ksLiveDot} aria-hidden="true" />
              Krishan Thakker on working with DNA
            </p>
          </div>

          <article className={s.ksCard}>
            <div className={s.ksWho}>
              <img src={k.image} alt={k.name} loading="lazy" style={{ objectPosition: focal(k.image) }} />
              <span>
                <strong>{k.name}</strong>
                President, South Asian Bar Association of Florida
              </span>
            </div>

            <a className={s.ksClip} href={k.url} target="_blank" rel="noopener noreferrer">
              <span className={s.ksClipTop}>
                <span className={s.ksMast}>{k.outlet}</span>
                <span>Nov 6, 2025</span>
              </span>
              <span className={s.ksClipHead}>
                Beyond the Brief: Krishan Thakker on Law, Leadership, and Social Impact
              </span>
              <span className={s.ksClipGo}>
                Read it live <i aria-hidden="true">↗</i>
              </span>
            </a>

            <ul className={s.ksFacts}>
              <li><b>16+</b> years advising global companies</li>
              <li><b>4</b> regions of clients — India, the US, the Middle East, Africa</li>
              <li><b>1</b> profile of the person, not just the practice</li>
            </ul>

            <Link href={`/case-studies/${k.slug}`} className={s.ksMore}>
              Read Krishan&rsquo;s case study <Arrow />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ═══ KIRK — one story, four mastheads ═══════════════════════
   The grabber after the video: a single client's campaign told as a
   timeline, every step a live article. */
const fmtDate = (d: string) =>
  new Date(d + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export function KirkJourney() {
  const kirk = CASE_STUDIES.find((c) => c.slug === "dr-kirk-sanford");
  const steps = kirk?.features ?? [];
  if (!kirk || steps.length < 2) return null;
  const t0 = new Date(steps[0].date).getTime();
  // whole weeks since the first article ran
  const weeksIn = (d: string) => Math.round((new Date(d).getTime() - t0) / (7 * 864e5));
  const weeks = weeksIn(steps[steps.length - 1].date);
  const strip = [...steps, ...steps, ...steps];

  return (
    <section className={`v-sec ${s.kj}`} id="kirk" aria-labelledby="kirk-title">
      <div className="v-glow" aria-hidden="true" />

      {/* the mastheads, rolling */}
      <div className={s.kjStrip} aria-hidden="true">
        <div className={s.kjStripTrack}>
          {strip.map((f, i) => (
            <span key={i} className={i % 2 ? s.kjStripAlt : undefined}>
              {f.outlet}
              <i>→</i>
            </span>
          ))}
        </div>
      </div>

      <div className={`v-wrap ${s.kjWrap}`}>
        {/* heading with the intro beside it, so the whole case fits one screen */}
        <div className={s.kjTop}>
          <div className={s.kjTopL}>
            <span className="v-label v-label--lime">Case study · {kirk.name}</span>
            <h2 id="kirk-title" className={s.kjTitle}>
              One story. {steps.length === 4 ? "Four" : steps.length} mastheads.{" "}
              <span className="v-hl">{weeks === 12 ? "Twelve" : weeks} weeks.</span>
            </h2>
          </div>
          <p className={s.kjLede}>
            A regenerative-medicine founder with one argument worth hearing &mdash; that
            the body isn&rsquo;t a machine. We turned it into a campaign, not a one-off:
            each piece a new angle, every word approved by him.
          </p>
        </div>

        <div className={s.kjBody}>
          <aside className={s.kjSide}>
            <div className={s.kjPortrait}>
              <img src={kirk.image} alt={`${kirk.name}`} loading="lazy" style={{ objectPosition: focal(kirk.image) }} />
              <span className={s.kjWho}>
                <strong>{kirk.name}</strong>
                {kirk.role}
              </span>
            </div>
            <div className={s.kjStats}>
              <span><b data-count={steps.length}>{steps.length}</b>publications</span>
              <span><b data-count={weeks}>{weeks}</b>weeks</span>
              <span><b>1</b>story</span>
            </div>
          </aside>

          <div className={s.kjMain}>
            <ol className={s.kjCards}>
              {steps.map((f, i) => (
                <li key={f.url} className={i === steps.length - 1 ? s.kjLast : undefined}>
                  <a href={f.url} target="_blank" rel="noopener noreferrer" className={s.kjStep}>
                    <span className={s.kjMeta}>
                      <span>{String(i + 1).padStart(2, "0")} · {i === 0 ? "Start" : `+${weeksIn(f.date)} weeks`}</span>
                      <span>{fmtDate(f.date)}</span>
                    </span>
                    <span className={s.kjOutlet}>{f.outlet}</span>
                    <span className={s.kjHead}>{f.headline}</span>
                    <span className={s.kjFoot}>
                      <span />
                      <span className={s.kjGo}>Read it live <i aria-hidden="true">↗</i></span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>

            <div className={s.kjCtas}>
              <Link href={`/case-studies/${kirk.slug}`} className={s.railMore}>
                Read Kirk&rsquo;s case study <Arrow />
              </Link>
              <FunkyCta href="/contact" label="Get featured now" className="v-cta--sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ [02] HOW IT WORKS ═══════════════════════════════════════ */
const PHASES = [
  { t: "Initial consultation", d: "We schedule a consultation to understand your vision, goals, and the publication you want to be featured in." },
  { t: "Contract & payment", d: "Once aligned, we send the contract. Upon signing and payment, we move forward officially." },
  { t: "Writing team collaboration", d: "Meet our writing team one-on-one to dive deep into your story and goals for the feature." },
  { t: "Draft, review & revisions", d: "We craft the article, share for feedback, and revise until it meets your expectations perfectly." },
  { t: "Pitch & publish", d: "After approval, we pitch to high-end outlets. Once accepted, your article lives permanently online." }
];

export function Process() {
  return (
    <section className="v-sec">
      <div className="v-wrap">
        <div className="v-head">
          <div>
            <span className="v-label v-label--lime">02 · How it works</span>
            <h2 className="v-h2">
              Five steps. <span className="v-hl">You approve every word.</span>
            </h2>
          </div>
          <p className="v-lede">
            From the first call to a live link. Nothing is pitched or published
            until you&rsquo;ve signed off on it.
          </p>
        </div>
        <ol className={s.phases} style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {PHASES.map((p, i) => (
            <li className={s.phase} key={p.t} style={{ ["--n" as string]: i }}>
              <span className={s.phaseN}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={s.phaseT}>{p.t}</h3>
              <p className={s.phaseD}>{p.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ═══ [03] SERVICES — pale lime, heavy ruled list ═════════════ */
const SERVICES = [
  { title: "Monthly Packages", tag: "Foundation → Platinum", body: "Ongoing PR with consistent placements, a dedicated team, and a strategy that compounds month over month.", href: "/services#packages" },
  { title: "A La Carte", tag: "Single features", body: "One bespoke, high-impact article written to your niche and placed in the outlet you want. Maximum visibility, short term.", href: "/services#alacarte" },
  { title: "DNA Prime", tag: "Premium strategy", body: "Our flagship long-game — top-tier placements, SEO, AI reputation management and media training that makes you the name.", href: "/services#prime" },
  { title: "Elite Branding", tag: "Beyond PR", body: "Websites, ads, design, social and SEO — everything around the coverage so the attention actually converts.", href: "/services#branding" }
];

export function Services() {
  return (
    <section className="v-sec v-light v-panel" id="services">
      <div className="v-wrap">
        <span className="v-label">03 · What we do</span>
        <h2 className={s.svcTitle} style={{ marginTop: 18 }}>
          Four ways to work <span className="v-hl">with us.</span>
        </h2>
        <ul className={s.svcList}>
          {SERVICES.map((v, i) => (
            <li className={s.svcItem} key={v.title}>
              <Link href={v.href} className={s.svcLink}>
                <span className={s.svcN}>0{i + 1}</span>
                <span className={s.svcName}>
                  {v.title}
                  <small>{v.tag}</small>
                </span>
                <p className={s.svcBody}>{v.body}</p>
                <span className={s.svcArrow}><Arrow /></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ═══ [04] CASE STUDIES ═══════════════════════════════════════ */
export function CaseStudies() {
  return (
    <section className="v-sec">
      <div className="v-wrap">
        <div className="v-head">
          <div>
            <span className="v-label v-label--lime">04 · Case studies</span>
            <h2 className="v-h2">
              The story <span className="v-hl">behind the story.</span>
            </h2>
          </div>
          <Link href="/case-studies" className="v-btn v-btn--ghost">
            All case studies <Arrow />
          </Link>
        </div>
        <div className={s.cases}>
          {CASE_STUDIES.map((c) => (
            <Link key={c.slug} href={`/case-studies/${c.slug}`} className={s.case}>
              <img src={c.image} alt="" loading="lazy" style={{ objectPosition: focal(c.image) }} />
              <span className={s.caseBody}>
                <span className={s.caseOutlet}>{c.outlet}</span>
                <span className={s.caseName}>{c.name}</span>
                <span className={s.caseRole}>{c.role}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ [05] REVIEWS ════════════════════════════════════════════ */
// Reviewer photos, keyed by the name on the review. Drop the file in
// public/reviews/ and add a line here; anyone without one shows their initial.
export const REVIEW_PHOTOS: Record<string, string> = {
  David: "/reviews/david.jpg",
  "Julie Krivanek": "/reviews/julie.jpg",
  "Sahar Maknouni": "/reviews/sahar.jpg",
  "Uche Mobayode": "/reviews/uche.jpg",
  "Matthew Brick": "/reviews/matthew.jpg",
  "Brian Harbin": "/reviews/brian-2.jpg",
  "Alan Araujo": "/reviews/alan.jpg",
  "Ben Labra": "/reviews/ben.jpg",
};

export async function Reviews() {
  // the homepage row only shows reviews we have a photo for, so every card has a face
  const reviews = (await getAllReviews()).filter((r) => REVIEW_PHOTOS[r.name]).slice(0, 9);
  return (
    <section className="v-sec" id="testimonials">
      <Rail
        label="Client reviews"
        head={
          <>
            <span className="v-label v-label--lime">04 · Client voices</span>
            <h2 className="v-h2">
              In their <span className="v-hl">own words.</span>
            </h2>
          </>
        }
        foot={
          <Link href="/reviews" className={s.railMore}>
            All reviews <Arrow />
          </Link>
        }
      >
        {reviews.map((r) => {
          const photo = REVIEW_PHOTOS[r.name];
          return (
            <figure className={s.review} key={`${r.name}-${r.text.slice(0, 20)}`}>
              <span className={s.reviewMark} aria-hidden="true">&ldquo;</span>
              <blockquote className={s.reviewText}>{r.text}</blockquote>
              <figcaption className={s.reviewWho}>
                {photo ? (
                  <img className={s.reviewPhoto} src={photo} alt={r.name} loading="lazy" />
                ) : (
                  <span className={s.reviewAv} aria-hidden="true">{r.name.charAt(0)}</span>
                )}
                <span>
                  <span className={s.reviewName}>{r.name}</span>
                  <br />
                  <span className={s.reviewMeta}>{r.meta}</span>
                </span>
              </figcaption>
            </figure>
          );
        })}
      </Rail>
    </section>
  );
}

/* ═══ [06] GUIDES ═════════════════════════════════════════════ */
const GUIDE_PICKS = [
  "how-to-choose-the-right-publication",
  "how-to-get-featured-in-usa-today",
  "how-to-get-featured-on-msn"
];

export function Guides() {
  const picks = GUIDE_PICKS.map((slug) => GUIDES.find((g) => g.slug === slug)).filter(
    (g): g is NonNullable<typeof g> => Boolean(g)
  );
  return (
    <section className="v-sec">
      <div className="v-wrap">
        <div className="v-head">
          <div>
            <span className="v-label v-label--lime">05 · Guides</span>
            <h2 className="v-h2">
              How getting featured <span className="v-hl">actually works.</span>
            </h2>
          </div>
          <Link href="/guides" className="v-btn v-btn--ghost">
            All {GUIDES.length} guides <Arrow />
          </Link>
        </div>
        <div className={s.guides}>
          {picks.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className={s.guide}>
              <span className={s.guideTag}>Guide</span>
              <span className={s.guideTitle}>{g.h1}</span>
              <span className={s.guideDesc}>{g.description}</span>
              <span className={s.guideRead}>Read the guide →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
