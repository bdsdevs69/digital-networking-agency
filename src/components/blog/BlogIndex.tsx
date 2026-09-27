"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import s from "./blog.module.css";

export type BlogItem = {
  href: string;
  title: string;
  desc: string;
  cat: string;
  mins: number;
  pre: string;   // small line on the cover, e.g. "How to get featured in"
  main: string;  // big line on the cover, e.g. "USA Today"
};

const VARIANTS = ["dark", "lime", "dark", "pale", "dark", "dark"] as const;

/**
 * Every article is rendered in the HTML (good for search); the filters and
 * search just toggle `hidden`, so nothing is fetched or lost.
 */
export function BlogIndex({ items, cats }: { items: BlogItem[]; cats: string[] }) {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: items.length };
    items.forEach((i) => (c[i.cat] = (c[i.cat] || 0) + 1));
    return c;
  }, [items]);

  const needle = q.trim().toLowerCase();
  const visible = (i: BlogItem) =>
    (cat === "All" || i.cat === cat) &&
    (!needle || `${i.title} ${i.desc} ${i.cat}`.toLowerCase().includes(needle));
  const shown = items.filter(visible).length;

  return (
    <>
      <div className={s.tools}>
        <div className={s.pills} role="group" aria-label="Filter by topic">
          {["All", ...cats].map((c) => (
            <button key={c} type="button" className={s.pill} aria-pressed={cat === c} onClick={() => setCat(c)}>
              {c} <span>{counts[c] || 0}</span>
            </button>
          ))}
        </div>
        <label className={s.search}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" /><path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          <input type="search" placeholder="Search articles…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search articles" />
        </label>
        <p className={s.count} aria-live="polite">
          Showing {shown} of {items.length} articles
        </p>
      </div>

      <div className={s.grid}>
        {items.map((i, n) => (
          <Link key={i.href} href={i.href} className={s.card} hidden={!visible(i)}>
            <span className={`${s.cover} ${s[`cover--${VARIANTS[n % VARIANTS.length]}`]}`} aria-hidden="true">
              <span className={s.coverTop}>
                <img src={VARIANTS[n % VARIANTS.length] === "dark" ? "/dna-mark-lime.png" : "/dna-mark.png"} alt="" width={30} height={14} />
                <span className={s.coverTag}>{i.cat}</span>
              </span>
              <span className={s.coverMid}>
                {i.pre ? <span className={s.coverPre}>{i.pre}</span> : null}
                <span className={s.coverMain}>{i.main}</span>
              </span>
              <span className={s.coverFoot}>
                <span className={s.coverBar} />
                <span className={s.coverUrl}>digitalnetworkingagency.com</span>
              </span>
            </span>
            <span className={s.body}>
              <span className={s.meta}>
                <b>{i.cat}</b> · {i.mins} min read
              </span>
              <span className={s.title}>{i.title}</span>
              <span className={s.desc}>{i.desc}</span>
              <span className={s.read}>Read article →</span>
            </span>
          </Link>
        ))}
        {shown === 0 ? <p className={s.empty}>No articles match that. Try a different word.</p> : null}
      </div>
    </>
  );
}
