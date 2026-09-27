"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./SiteFooter.module.css";

const WORD = "Digital Networking Agency";

/**
 * The giant footer wordmark: lime-outlined letters that rise into place when
 * the footer comes into view, and fill solid lime and bounce as the cursor
 * runs across them.
 */
export function FooterWord() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return setInView(true);
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <p ref={ref} className={`${styles.word} ${inView ? styles.wordIn : ""}`} aria-label={WORD}>
      {WORD.split(" ").map((w, wi, all) => {
        const start = all.slice(0, wi).join("").length + wi;
        return (
          <span key={w} className={styles.wordW} aria-hidden="true">
            {Array.from(w).map((ch, i) => (
              // the outer span is a still hover target; only the inner glyph moves,
              // so a letter can't jump out from under the cursor and flicker
              <span key={i} className={styles.wordHit}>
                <span className={styles.wordL} style={{ ["--i" as string]: start + i }}>{ch}</span>
              </span>
            ))}
          </span>
        );
      })}
    </p>
  );
}
