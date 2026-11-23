"use client";

import { useEffect, useState } from "react";

export type Review = { name: string; meta: string; text: string };

function perViewFor(width: number) {
  if (width <= 640) return 1;
  if (width <= 1024) return 2;
  if (width <= 1366) return 3;
  return 4;
}

export function TestimonialsCarousel({ reviews }: { reviews: Review[] }) {
  const n = reviews.length;
  const [perView, setPerView] = useState(4);
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState(true);

  // Responsive: how many cards fit on one line.
  useEffect(() => {
    const calc = () => {
      const pv = perViewFor(window.innerWidth);
      setPerView(pv);
      setIndex(0);
      setAnim(true);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // Re-enable the slide transition on the frame after we snap without it.
  useEffect(() => {
    if (anim) return;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnim(true))
    );
    return () => cancelAnimationFrame(id);
  }, [anim]);

  // Clone the first `perView` cards onto the end so the loop is seamless.
  const items = [...reviews, ...reviews.slice(0, perView)];
  const cardPct = 100 / perView;

  const next = () => setIndex((i) => i + 1);

  const prev = () => {
    if (index > 0) {
      setIndex((i) => i - 1);
      return;
    }
    // Jump (no animation) to the cloned end, then animate one step back.
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
    // Ignore transitions bubbling up from card hover effects.
    if (e.target !== e.currentTarget) return;
    if (index >= n) {
      setAnim(false);
      setIndex(0);
    }
  };

  return (
    <div className="tcar">
      <button
        type="button"
        className="tcar-arrow"
        onClick={prev}
        aria-label="Previous reviews"
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
          {items.map((r, i) => (
            <div
              className="tcar-slide"
              key={`${r.name}-${i}`}
              style={{ flex: `0 0 ${cardPct}%` }}
            >
              <figure className="tst-card">
                <div className="tst-mark">&ldquo;</div>
                <blockquote className="tst-quote">{r.text}</blockquote>
                <figcaption className="tst-by">
                  <span className="tst-name">{r.name}</span>
                  <span className="tst-role">{r.meta}</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="tcar-arrow"
        onClick={next}
        aria-label="Next reviews"
      >
        ›
      </button>
    </div>
  );
}
