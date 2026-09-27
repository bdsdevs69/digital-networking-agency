"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import s from "./rail.module.css";

const Chevron = ({ flip = false }: { flip?: boolean }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" style={flip ? { transform: "scaleX(-1)" } : undefined}>
    <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * A single swipeable row: the heading sits on the left, arrows on the right,
 * three cards show at a time on desktop, and a lime bar shows how far along
 * you are. The row sits inside the content column so both edges line up.
 * Works with touch, trackpad, arrows, or keyboard scrolling.
 */
export function Rail({ head, foot, label, children }: { head: ReactNode; foot?: ReactNode; label: string; children: ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setP(max > 0 ? el.scrollLeft / max : 0);
      setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft > max - 8 });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    // move by however many cards are fully in view (3 on desktop, 1 on phones)
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth;
    const perView = Math.max(1, Math.floor((el.clientWidth + 16) / step));
    el.scrollBy({ left: dir * step * perView, behavior: "smooth" });
  };

  return (
    <div className={s.rail}>
      <div className={`v-wrap ${s.head}`}>
        <div className={s.headCopy}>{head}</div>
        <div className={s.nav}>
          <button type="button" className={s.btn} onClick={() => go(-1)} disabled={edge.start} aria-label="Previous">
            <Chevron flip />
          </button>
          <button type="button" className={s.btn} onClick={() => go(1)} disabled={edge.end} aria-label="Next">
            <Chevron />
          </button>
        </div>
      </div>

      <div className={`v-wrap ${s.frame}`}>
        <div className={s.track} ref={track} role="region" aria-label={label} tabIndex={0}>
          {children}
        </div>
      </div>

      <div className={`v-wrap ${s.foot}`}>
        <span className={s.bar} aria-hidden="true">
          <i style={{ transform: `scaleX(${0.12 + p * 0.88})` }} />
        </span>
        {foot}
      </div>
    </div>
  );
}
