"use client";

import { useEffect } from "react";

const PANELS = 6;

/**
 * Opening screen (after Wynn): a lime wall with the DNA mark that lifts away
 * as six panels, left to right. Transforms only, so it stays smooth. Hidden unless
 * the inline script in <head> added `intro-play` to <html> for this visit.
 */
export function Intro() {
  useEffect(() => {
    // after it has played once, a client-side return to "/" shouldn't replay it
    const t = setTimeout(() => document.documentElement.classList.remove("intro-play"), 2000);
    return () => clearTimeout(t);
  }, []);

  const panels = Array.from({ length: PANELS }, (_, i) => <i key={i} style={{ ["--d" as string]: i }} />);
  return (
    <div className="v-intro" aria-hidden="true">
      <div className="v-intro-tiles">{panels}</div>
      <div className="v-intro-mark">
        <img src="/dna-mark.png" alt="" width={250} height={116} />
        <span>Digital Networking Agency</span>
      </div>
    </div>
  );
}
