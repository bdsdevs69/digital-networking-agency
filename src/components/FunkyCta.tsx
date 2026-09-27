"use client";

import Link from "next/link";

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * The "Get featured" button: a lime pill with a light racing round its edge,
 * letters that roll on hover, and an arrow that shoots out and back in.
 * (No magnetic pull: moving the button made hover flicker at its edges.)
 */
export function FunkyCta({ href, label, className = "" }: { href: string; label: string; className?: string }) {
  return (
    <Link href={href} className={`v-cta ${className}`} aria-label={label}>
      <span className="v-cta-ring" aria-hidden="true" />
      <svg className="v-cta-star" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0c.6 6.3 5.7 11.4 12 12-6.3.6-11.4 5.7-12 12-.6-6.3-5.7-11.4-12-12C6.3 11.4 11.4 6.3 12 0z" />
      </svg>
      <span className="v-cta-txt" aria-hidden="true">
        {Array.from(label).map((ch, i) => (
          <span key={i} style={{ ["--i" as string]: i }}>{ch === " " ? " " : ch}</span>
        ))}
      </span>
      <span className="v-cta-ic" aria-hidden="true">
        <span className="v-cta-arrows">
          <Arrow />
          <Arrow />
        </span>
      </span>
    </Link>
  );
}
