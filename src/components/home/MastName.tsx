"use client";

import s from "./home.module.css";

const WORDS: { w: string; lime?: boolean }[] = [{ w: "DIGITAL" }, { w: "NETWORKING", lime: true }, { w: "AGENCY" }];

/**
 * The homepage masthead. Each letter is its own span so it can drop in and
 * "inflate" (Fraunces' weight + softness axes animate from thin to fat), then
 * NETWORKING is lime with a lime underline that draws itself in, led by a
 * small bright head; a soft light ripples through the word every few seconds.
 * The outer span is a still hover target; only the inner glyph moves, so a
 * letter can't slide out from under the cursor and flicker.
 */
export function MastName() {
  let n = 0;
  return (
    <p className={s.mast} aria-label="Digital Networking Agency">
      <span className={s.mastRow}>
        {WORDS.map(({ w, lime }) => (
          <span key={w} className={`${s.mastWord} ${lime ? s.mastLime : ""}`} aria-hidden="true">
            {Array.from(w).map((ch, i) => {
              const k = n++;
              return (
                <span key={i} className={s.mastHit}>
                  <span className={s.mastL} style={{ ["--k" as string]: k, ["--j" as string]: i }}>{ch}</span>
                </span>
              );
            })}
            {lime ? <span className={s.ul} aria-hidden="true"><i /></span> : null}
          </span>
        ))}
      </span>
    </p>
  );
}
