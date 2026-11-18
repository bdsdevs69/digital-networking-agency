import Link from "next/link";
import { clientPlacements, getAllReviews, PRESS_LOGOS } from "@/components/landing/sections";
import { CASE_STUDIES } from "@/content/caseStudies";
import { GUIDES } from "@/content/guides";
import { getTrustpilotData } from "@/lib/trustpilot";
import { focal } from "@/lib/focal";
import s from "./home.module.css";
import { Rail } from "./Rail";
import { HeroRotator, type RotItem } from "./HeroRotator";
import { HeroLoop } from "./HeroLoop";
import { FunkyCta } from "@/components/FunkyCta";
import { ClientVideosView, type ClientVideo } from "./ClientVideos";
import { guideHref } from "@/lib/merged";

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
  { outlet: "Forbes", style: "serif" },
  { outlet: "USA Today", style: "sans" },
  { outlet: "Entrepreneur", style: "serif" },
  { outlet: "MSN", style: "sans" },
  { outlet: "Yahoo Finance", style: "sansItalic" },
  { outlet: "Wall Street Times", style: "sansItalic" },
  { outlet: "Times Square Journal", style: "sansItalic" },
];

// short silent loops cut from the client review videos (full videos live in #clients)
const HERO_LOOPS = [
  { name: "Krishan Thakker", src: "/hero-loop-krishan.mp4", poster: "/hero-loop-krishan.jpg" },
  { name: "Lauretta Zucchetti", src: "/hero-loop-lauretta.mp4", poster: "/hero-loop-lauretta.jpg" },
  { name: "Beverly D. Flaxington", src: "/hero-loop-beverly.mp4", poster: "/hero-loop-beverly.jpg" },
];

type WallTile =
  | { kind: "press"; outlet: string; headline: string; href: string; img: string }
  | { kind: "video"; name: string; src: string; poster: string }
  | { kind: "stat"; big: string; small: string };

function Tile({ t, hidden }: { t: WallTile; hidden?: boolean }) {
  const tab = hidden ? -1 : undefined;
  if (t.kind === "stat") {
    return (
      <div className={s.wStat}>
        <b>{t.big}</b>
        <span>{t.small}</span>
      </div>
    );
  }
  if (t.kind === "video") {
    return (
      <a className={`${s.wTile} ${s.wVideo}`} href="#clients" tabIndex={tab} aria-label={hidden ? undefined : `Watch ${t.name}'s video review`}>
        <HeroLoop src={t.src} poster={t.poster} />
        <span className={s.wShade} aria-hidden="true" />
        <span className={s.wBadge}><i aria-hidden="true" /> Client video</span>
        <span className={s.wCap}>
          <strong>{t.name}</strong>
          <em>Watch the review &rarr;</em>
        </span>
      </a>
    );
  }
  return (
    <a className={s.wTile} href={t.href} target="_blank" rel="noopener noreferrer" tabIndex={tab}>
      <img src={t.img} alt="" loading="lazy" style={{ objectPosition: focal(t.img) }} />
      <span className={s.wShade} aria-hidden="true" />
      <span className={s.wCap}>
        <b>{t.outlet}</b>
        <span>{t.headline}</span>
      </span>
    </a>
  );
}

export async function HomeHero() {
  const tp = await getTrustpilotData();
  const dated = clientPlacements
    .map((p) => ({ ...p, date: new Date(p.meta) }))
    .filter((p) => !Number.isNaN(p.date.getTime()))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
  // Pieces kept off the hero wall (still in the work rail and the wire).
  const WALL_SKIP = ["nyweekly.com/business/the-shape-of-an-absence"];
  const press: WallTile[] = dated
    .filter((p) => p.img && !WALL_SKIP.some((k) => p.href.includes(k)))
    .map((p) => ({ kind: "press", outlet: p.outlet, headline: p.headline, href: p.href, img: p.img! }));
  const videos: WallTile[] = HERO_LOOPS.map((v) => ({ kind: "video", ...v }));
  const stats: WallTile[] = [
    { kind: "stat", big: "1,100+", small: "publications we pitch to" },
    { kind: "stat", big: `${tp.score.toFixed(1)}★`, small: "on Trustpilot, from verified clients" },
    { kind: "stat", big: "100%", small: "of articles approved by the client first" },
  ];
  // three columns, each led by different work, a video and a stat mixed in
  const cols: WallTile[][] = [[], [], []];
  press.forEach((p, i) => cols[i % 3].push(p));
  videos.forEach((v, i) => cols[i].splice(1 + (i % 2) * 2, 0, v));
  stats.forEach((st, i) => cols[(i + 1) % 3].splice(3 + i, 0, st));
  const faces = CASE_STUDIES.slice(0, 7);

  return (
    <section className={s.hx} aria-labelledby="hx-title">
      <div className={s.hxInner}>
        <div className={s.hxCopy}>
          <span className={s.hxKicker}>
            <i aria-hidden="true" /> <em>Digital Networking Agency &middot;</em> PR that gets printed
          </span>
          {/* the full phrase stays in the h1 for search; the eye sees the rotating outlet */}
          <h1 id="hx-title" className={s.hxH1}>
            <span className={s.hxTop}>Get featured in</span>
            <HeroRotator items={ROTATE} />
            <span className="sr-only">
              the press people trust — {ROTATE.map((r) => r.outlet).join(", ")}
            </span>
          </h1>
          <p className={s.hxLede}>
            We write your story and get it published in the outlets your clients already read.
            You approve every word.
          </p>
          <div className={s.hxActions}>
            <FunkyCta href="/contact" label="Get featured" />
            <a href="#clients" className={s.hxWatch}>
              <span aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </span>
              Watch our clients
            </a>
          </div>

          <div className={s.hxProof}>
            <Link href="/case-studies" className={s.hxFaces} aria-label="See the client case studies">
              {faces.map((c) => (
                <img key={c.slug} src={c.image} alt="" loading="lazy" style={{ objectPosition: focal(c.image) }} />
              ))}
              <span aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Link>
            <span className={s.hxProofTxt}>
              <Link href="/case-studies" className={s.hxProofLink}>Real clients. Real press. See their stories</Link>
              <a href={TRUSTPILOT} target="_blank" rel="noopener noreferrer">
                <span aria-hidden="true">★★★★★</span> Rated {tp.score.toFixed(1)} on Trustpilot
              </a>
            </span>
          </div>
        </div>

        {/* a spinning sticker between the copy and the wall */}
        <a href="#clients" className={s.hxSticker} aria-label="Watch our clients' video reviews">
          <svg viewBox="0 0 200 200" aria-hidden="true">
            <defs>
              <path id="hxRing" d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0" />
            </defs>
            <text>
              <textPath href="#hxRing">REAL CLIENTS ✦ REAL PRESS ✦ REAL CLIENTS ✦ REAL PRESS ✦ </textPath>
            </text>
          </svg>
          <span aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </span>
        </a>

        {/* the press wall: real client features, moving */}
        <div className={s.wall}>
          <div className={s.wallTilt}>
            {cols.map((col, ci) => (
              <div className={s.wallCol} key={ci}>
                <div className={s.wallTrack} style={{ ["--dur" as string]: `${[46, 58, 52][ci]}s` }}>
                  {col.map((tile, i) => <Tile key={`a${i}`} t={tile} />)}
                  {col.map((tile, i) => <Tile key={`b${i}`} t={tile} hidden />)}
                </div>
              </div>
            ))}
          </div>
        </div>
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
    </section>
  );
}

/* ═══ PUBLICATION LOGOS — the marks from the original site, on white tiles ═══ */
export function LogoMarquee() {
  const half = Math.ceil(PRESS_LOGOS.length / 2);
  const rows = [PRESS_LOGOS.slice(0, half), PRESS_LOGOS.slice(half)];
  return (
    <section className={`${s.logos} v-paper v-panel`} aria-labelledby="logos-title">
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
  "/wayne-allyn-root.jpg",              // Forbes
  "/lauretta-zucchetti-tsj.jpg",        // Times Square Journal
  "/placement-shams.webp",              // Yahoo Finance
  "/kirk-sanford-v3.jpg",                  // Entrepreneur
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

/* ═══ CLIENT VIDEOS — every review video in one section ═══════
   One stage and a tab per client, so a new video is a new entry here,
   not a new homepage section. Order = tab order; the first one loads. */
const CLIENT_VIDEOS: (Omit<ClientVideo, "name" | "image" | "outlet" | "url">)[] = [
  {
    slug: "krishan-thakker", first: "Krishan",
    roleLine: "President, South Asian Bar Association of Florida",
    clip: { headline: "Beyond the Brief: Krishan Thakker on Law, Leadership, and Social Impact", date: "Nov 6, 2025" },
    facts: [
      ["16+", "years advising global companies"],
      ["4", "regions of clients — India, the US, the Middle East, Africa"],
      ["1", "profile of the person, not just the practice"],
    ],
    video: { src: "/client-testimonial.mp4", poster: "/testimonial-poster.webp", captions: "/client-testimonial.vtt", length: "0:27", focus: "50% 45%" },
  },
  {
    slug: "lauretta-zucchetti", first: "Lauretta",
    roleLine: "Author, speaker & transpersonal coach · ex-Apple sales executive",
    clip: { headline: "From Italy to Apple and Back to Herself: Lauretta Zucchetti on Unlearning Who She Was Taught to Be", date: "Nov 13, 2026" },
    facts: [
      ["4", "years running in Apple\u2019s President\u2019s Club"],
      ["2", "features — MSN first, then Times Square Journal"],
      ["1", "story told whole, from Italy to Apple to the work she does now"],
    ],
    video: { src: "/lauretta-zucchetti-review.mp4", poster: "/lauretta-zucchetti-poster.jpg", captions: null, length: "0:54", portrait: true, focus: "50% 35%" },
  },
  {
    slug: "beverly-d-flaxington", first: "Beverly",
    roleLine: "Business owner · Bestselling author · Professor, Suffolk University",
    clip: { headline: "Beverly D Flaxington | Business owner, bestselling author, international public speaker & college professor", date: "Sep 22, 2026" },
    facts: [
      ["8", "books — and a three-time Amazon bestselling author"],
      ["1,000+", "animals rescued"],
      ["1", "feature tying the business, the teaching and the books together"],
    ],
    video: { src: "/beverly-flaxington-review.mp4", poster: "/beverly-flaxington-poster.jpg", captions: null, length: "0:39", focus: "55% 40%" },
  },
];

export function ClientVideos() {
  const clients: ClientVideo[] = CLIENT_VIDEOS.flatMap((v) => {
    const k = CASE_STUDIES.find((c) => c.slug === v.slug);
    return k ? [{ ...v, name: k.name, image: k.image, outlet: k.outlet, url: k.url }] : [];
  });
  return <ClientVideosView clients={clients} />;
}

/* ═══ KIRK — one story, four mastheads ═══════════════════════
   The grabber after the video: a single client's campaign told as a
   timeline, every step a live article. */
const fmtDate = (d: string) =>
  new Date(d + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const WORDS: Record<number, string> = { 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six", 8: "Eight", 9: "Nine", 10: "Ten", 12: "Twelve" };
const word = (n: number) => WORDS[n] ?? String(n);

/** One client's multi-outlet campaign as a timeline. Kirk and Wayne each get one. */
function Journey({ slug, id, first, lede }: { slug: string; id: string; first: string; lede: React.ReactNode }) {
  const kirk = CASE_STUDIES.find((c) => c.slug === slug);
  const steps = kirk?.features ?? [];
  if (!kirk || steps.length < 2) return null;
  const t0 = new Date(steps[0].date).getTime();
  // whole weeks since the first article ran
  const weeksIn = (d: string) => Math.round((new Date(d).getTime() - t0) / (7 * 864e5));
  const weeks = weeksIn(steps[steps.length - 1].date);
  const strip = [...steps, ...steps, ...steps];

  return (
    <section className={`v-sec ${s.kj}`} id={id} aria-labelledby={`${id}-title`}>
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
            <h2 id={`${id}-title`} className={s.kjTitle}>
              One story. {word(steps.length)} mastheads.{" "}
              <span className="v-hl">{word(weeks)} weeks.</span>
            </h2>
          </div>
          <p className={s.kjLede}>{lede}</p>
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
                <li key={f.outlet + f.date} className={i === steps.length - 1 ? s.kjLast : undefined}>
                  {(() => {
                    const inner = (
                      <>
                        <span className={s.kjMeta}>
                          <span>{String(i + 1).padStart(2, "0")} · {i === 0 ? "Start" : weeksIn(f.date) === 0 ? "Same day" : `+${weeksIn(f.date)} weeks`}</span>
                          <span>{fmtDate(f.date)}</span>
                        </span>
                        <span className={s.kjOutlet}>{f.outlet}</span>
                        <span className={s.kjHead}>{f.headline}</span>
                        <span className={s.kjFoot}>
                          <span />
                          {f.url ? <span className={s.kjGo}>Read it live <i aria-hidden="true">↗</i></span> : <span className={s.kjGo}>Published on {f.outlet}</span>}
                        </span>
                      </>
                    );
                    // a piece that is no longer online is shown but not linked
                    return f.url ? (
                      <a href={f.url} target="_blank" rel="noopener noreferrer" className={s.kjStep}>{inner}</a>
                    ) : (
                      <div className={`${s.kjStep} ${s.kjStatic}`}>{inner}</div>
                    );
                  })()}
                </li>
              ))}
            </ol>

            <div className={s.kjCtas}>
              <Link href={`/case-studies/${kirk.slug}`} className={s.railMore}>
                Read {first}&rsquo;s case study <Arrow />
              </Link>
              <FunkyCta href="/contact" label="Get featured now" className="v-cta--sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function KirkJourney() {
  return (
    <Journey
      slug="dr-kirk-sanford"
      id="kirk"
      first="Kirk"
      lede={
        <>
          A regenerative-medicine founder with one argument worth hearing &mdash; that
          the body isn&rsquo;t a machine. We turned it into a campaign, not a one-off:
          each piece a new angle, every word approved by him.
        </>
      }
    />
  );
}

export function RootJourney() {
  return (
    <Journey
      slug="wayne-allyn-root"
      id="root"
      first="Wayne"
      lede={
        <>
          A television host of forty years starting a third career at 65. We put the
          announcement on the wire &mdash; Yahoo Finance, AP News, Business Insider &mdash;
          then took the reinvention story to Forbes, where it ran as a feature on why
          experience compounds.
        </>
      }
    />
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
    <section className="v-sec v-paper v-panel">
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
    <section className="v-sec v-paper v-panel">
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
            <Link key={g.slug} href={guideHref(g.slug)} className={s.guide}>
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
