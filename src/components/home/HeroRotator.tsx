"use client";

import { useEffect, useState } from "react";
import s from "./home.module.css";

export type RotItem = { outlet: string; style: "sans" | "serif" | "italic" | "sansItalic" };

/**
 * "Get featured in ___": cycles through outlets we've actually placed clients
 * in, each set in a type style that echoes its masthead. The matching card in
 * the hero fan (data-fan-outlet) lifts in step.
 */
export function HeroRotator({ items }: { items: RotItem[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % items.length), 2600);
    return () => window.clearInterval(t);
  }, [items.length]);

  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-fan-outlet]").forEach((el) => {
      el.toggleAttribute("data-on", el.dataset.fanOutlet === items[i].outlet);
    });
  }, [i, items]);

  return (
    <span className={s.rot} aria-hidden="true">
      {items.map((it, n) => (
        <span
          key={it.outlet}
          className={`${s.rotItem} ${s[`rot--${it.style}`]}`}
          data-state={n === i ? "in" : n === (i - 1 + items.length) % items.length ? "out" : "wait"}
          // long names shrink so every outlet fits the column
          style={{ fontSize: `${Math.min(1, 12 / (it.outlet.length + 1))}em` }}
        >
          {it.outlet}.
        </span>
      ))}
    </span>
  );
}
