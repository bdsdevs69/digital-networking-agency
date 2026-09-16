"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type GuideCard = {
  slug: string;
  title: string;
  accent: string;
};

function perViewFor(width: number) {
  if (width <= 640) return 1;
  if (width <= 1024) return 2;
  return 3;
}

export function GuidesCarousel({ guides }: { guides: GuideCard[] }) {
  const n = guides.length;
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState(true);

  useEffect(() => {
    const calc = () => {
      setPerView(perViewFor(window.innerWidth));
      setIndex(0);
      setAnim(true);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    if (anim) return;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnim(true))
    );
    return () => cancelAnimationFrame(id);
  }, [anim]);

  // Only loop when there are more guides than fit on screen
  const loops = n > perView;
  const items = loops ? [...guides, ...guides.slice(0, perView)] : guides;
  const cardPct = 100 / perView;
  const maxIndex = Math.max(0, n - perView);

  const next = () => {
    if (loops) setIndex((i) => i + 1);
    else setIndex((i) => Math.min(i + 1, maxIndex));
  };

  const prev = () => {
    if (index > 0) {
      setIndex((i) => i - 1);
      return;
    }
    if (!loops) return;
    setAnim(false);
    setIndex(n);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setAnim(true);
        setIndex(n - 1);
      })
    );
  };

  const handleEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (loops && index >= n) {
      setAnim(false);
      setIndex(0);
    }
  };

  return (
    <div className="tcar gcar">
      <button
        type="button"
        className="tcar-arrow"
        onClick={prev}
        aria-label="Previous guides"
      >
        ‹
      </button>

      <div className="tcar-viewport">
        <div
          className="tcar-track"
          onTransitionEnd={handleEnd}
          style={{
            transform: `translateX(-${index * cardPct}%)`,
            transition: anim
              ? "transform .55s cubic-bezier(.16,1,.3,1)"
              : "none"
          }}
        >
          {items.map((g, i) => (
            <div
              className="tcar-slide"
              key={`${g.slug}-${i}`}
              style={{ flex: `0 0 ${cardPct}%` }}
            >
              <Link className="gc" href={`/guides/${g.slug}`}>
                <div className="gc-panel">
                  <img
                    src="/black_logo.webp"
                    alt="DNA PR"
                    className="gc-panel-logo"
                    loading="lazy"
                  />
                  <span className="gc-kicker">Guide</span>
                  <span className="gc-panel-title">
                    How to Get Featured{" "}
                    <em>{g.accent}</em>
                  </span>
                  <span className="gc-panel-url">
                    digitalnetworkingagency.com/guides
                  </span>
                </div>
                <div className="gc-body">
                  <span className="gc-title">{g.title}</span>
                  <span className="gc-read">
                    Read article <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="tcar-arrow tcar-arrow--next"
        onClick={next}
        aria-label="Next guides"
      >
        ›
      </button>
    </div>
  );
}
