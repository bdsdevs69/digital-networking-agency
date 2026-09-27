"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./getfeatured.module.css";

type Item = { slug: string; name: string; sub: string; cat: string; placed: boolean };
type Cat = { name: string; blurb: string };

/** Every outlet stays in the HTML; the category pills and search only toggle `hidden`. */
export function OutletIndex({ items, cats }: { items: Item[]; cats: Cat[] }) {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const needle = q.trim().toLowerCase();
  const show = (i: Item) =>
    (cat === "All" || i.cat === cat) && (!needle || `${i.name} ${i.sub} ${i.cat}`.toLowerCase().includes(needle));
  const shown = items.filter(show).length;
  const count = (c: string) => items.filter((i) => i.cat === c).length;

  return (
    <>
      <div className={styles.idxTools}>
        <p className={styles.idxNote}>
          <span className={styles.idxDot} aria-hidden="true" />
          Black cards are outlets where we&rsquo;ve already placed a client.
        </p>
        <label className={styles.idxSearch}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" /><path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          <input type="search" placeholder="Search publications…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search publications" />
        </label>
      </div>

      <div className={styles.idxPills} role="group" aria-label="Filter by category">
        {[{ name: "All", n: items.length }, ...cats.map((c) => ({ name: c.name, n: count(c.name) }))].map((c) => (
          <button key={c.name} type="button" className={styles.idxPill} aria-pressed={cat === c.name} onClick={() => setCat(c.name)}>
            {c.name} <span>{c.n}</span>
          </button>
        ))}
      </div>

      {cats.map((c) => {
        const list = items.filter((i) => i.cat === c.name);
        const visible = list.filter(show).length;
        return (
          <section key={c.name} className={styles.idxGroup} hidden={visible === 0}>
            <div className={styles.idxGroupHead}>
              <h2>
                {c.name} <span>{visible}</span>
              </h2>
              {c.blurb ? <p>{c.blurb}</p> : null}
            </div>
            <div className={styles.cardGrid}>
              {list.map((o) => (
                <Link
                  key={o.slug}
                  className={`${styles.card} ${o.placed ? styles.cardPlaced : ""}`}
                  href={`/get-featured-in/${o.slug}`}
                  hidden={!show(o)}
                >
                  {o.placed ? <span className={styles.placedTag}>Client placed</span> : null}
                  <span className={styles.cardName}>{o.name}</span>
                  <span className={styles.cardSub}>{o.sub}</span>
                  <span className={styles.cardCta}>
                    Get featured <i aria-hidden="true">&rarr;</i>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
      {shown === 0 ? <p className={styles.idxEmpty}>No publication matches that. Ask us — the network is 1,100+ outlets.</p> : null}
    </>
  );
}
