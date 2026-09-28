"use client";

import { useState, type ReactNode } from "react";
import styles from "./case.module.css";

/**
 * Shows the first `first` cards and reveals `step` more per click. Every card
 * is in the HTML from the start (search engines see them all); the rest are
 * just hidden until "Load more".
 */
// `extra` counts cards shown above the grid (the featured story) in "Showing X of Y"
export function CaseGrid({ cards, first = 3, step = 6, extra = 0 }: { cards: ReactNode[]; first?: number; step?: number; extra?: number }) {
  const [shown, setShown] = useState(first);
  const left = cards.length - shown;
  return (
    <>
      <div className={styles.grid}>
        {cards.map((c, i) => (
          <div key={i} className={styles.cell} hidden={i >= shown} style={{ ["--d" as string]: `${(Math.max(0, i - first) % step) * 60}ms` }}>
            {c}
          </div>
        ))}
      </div>
      {left > 0 ? (
        <div className={styles.more2}>
          <button type="button" className={styles.loadMore} onClick={() => setShown((n) => n + step)}>
            Load more case studies
            <span aria-hidden="true">&darr;</span>
          </button>
        </div>
      ) : null}
    </>
  );
}
