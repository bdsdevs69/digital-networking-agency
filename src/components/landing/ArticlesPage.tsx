import Link from "next/link";
import a from "./articles.module.css";
import { FunkyCta } from "@/components/FunkyCta";

export type Pub = { name: string; dr: number; url?: string; note?: string };
export type Group = { category: string; pubs: Pub[] };

// A publication's brand icon, resolved from its domain via Google's favicon
// service (reliable for every domain; returns a fallback if none exists).
function logoFor(url?: string): string | null {
  if (!url) return null;
  try {
    return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=128`;
  } catch {
    return null;
  }
}

export function ArticlesPage({
  plan,
  tagline,
  groups,
  note
}: {
  plan: string;
  tagline: string;
  groups: Group[];
  note?: string;
}) {
  const allPubs = groups.flatMap((g) => g.pubs);
  const total = allPubs.length;
  const topDr = allPubs.reduce((m, p) => Math.max(m, p.dr), 0);

  return (
    <main className={a.page}>
      <header className={a.hero}>
        <div className="v-glow" aria-hidden="true" />
        <div className={`v-wrap ${a.heroInner}`}>
          <Link href="/plans" className={a.back}>
            <span aria-hidden="true">←</span> Back to plans
          </Link>
          <span className="v-label v-label--lime">{plan} · Publications</span>
          <h1 className={a.h1}>
            {plan} <span className="v-hl">publications.</span>
          </h1>
          <p className={a.sub}>{tagline}</p>

          {total > 0 ? (
            <div className={a.stats}>
              <div className={a.stat}>
                <span className={a.statN}>{total}</span>
                <span className={a.statL}>Publications</span>
              </div>
              <div className={a.stat}>
                <span className={a.statN}>{topDr}</span>
                <span className={a.statL}>Top domain rating</span>
              </div>
              <div className={a.stat}>
                <span className={a.statN}>1/mo</span>
                <span className={a.statL}>Published feature</span>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <section className="v-sec v-light v-panel" style={{ paddingTop: "clamp(2.5rem, 5vw, 4rem)" }}>
        <div className="v-wrap">
          {note ? <p className={a.note}>{note}</p> : null}
          {groups.map((g) => (
            <div className={a.group} key={g.category}>
              <h2 className={a.groupTitle}>
                {g.category}
                <span>{g.pubs.length}</span>
              </h2>
              <div className={a.grid}>
                {g.pubs.map((p) => {
                  const logo = logoFor(p.url);
                  const inner = (
                    <>
                      <span className={a.pubLeft}>
                        {logo ? <img className={a.logo} src={logo} alt="" loading="lazy" /> : null}
                        <span className={a.pubName}>{p.name}</span>
                      </span>
                      <span className={a.pubMeta}>
                        {p.note ? <span className={a.pubNote}>{p.note}</span> : null}
                        <span className={a.dr}>DR {p.dr}</span>
                        {p.url ? <span className={a.go} aria-hidden="true">↗</span> : null}
                      </span>
                    </>
                  );
                  return p.url ? (
                    <a className={a.pub} key={p.name} href={p.url} target="_blank" rel="noopener noreferrer">
                      {inner}
                    </a>
                  ) : (
                    <div className={a.pub} key={p.name}>{inner}</div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className={a.cta}>
            <p>These are live, indexed publications — every feature stays online permanently.</p>
            <FunkyCta href="/plans#plans" label="Choose your plan" />
          </div>
        </div>
      </section>
    </main>
  );
}
