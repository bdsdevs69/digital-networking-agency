"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./ContactFAQ.module.css";

type QA = { q: string; a: string };
type Cat = { key: string; label: string; items: QA[] };

const CATEGORIES: Cat[] = [
  {
    key: "start",
    label: "Getting started",
    items: [
      {
        q: "Do I have to write the article myself?",
        a: "No. Our editorial team writes the entire piece for you. You share your story in a short questionnaire, we shape the angle and draft it, and you approve every word before it goes live.",
      },
      {
        q: "What do you need from me to get started?",
        a: "Very little. After onboarding we send a short questionnaire where you share your story, background and achievements, along with a photo and any links you'd like included. Our team takes it from there.",
      },
      {
        q: "How do we begin?",
        a: "Send the form on this page or book a quick consultation. We'll scope your goals, recommend the outlets that fit your audience, and map out the fastest path to your feature.",
      },
    ],
  },
  {
    key: "trust",
    label: "Trust & results",
    items: [
      {
        q: "Are these real publications?",
        a: "Yes — real, permanent features on outlets people actually trust: MSN, USA Today, Wall Street Times, Yahoo Finance and more. See our Case Studies for live examples.",
      },
      {
        q: "Will the article stay online?",
        a: "Permanently. Every placement is a lasting, searchable asset you can point clients, partners and investors toward for years — not a temporary post.",
      },
      {
        q: "Can I see real examples first?",
        a: "Absolutely. Our Case Studies and Client Placements are all real clients with live links — nothing staged. Take a look before you decide.",
      },
    ],
  },
  {
    key: "pricing",
    label: "Pricing & terms",
    items: [
      {
        q: "How much does it cost?",
        a: "Every engagement is quoted to your goals — the outlets you want, how many placements, and how much writing is involved. Tell us what you're after and we'll price it. Ongoing packages and single A La Carte features are both available.",
      },
      {
        q: "Is there a long contract?",
        a: "Our Foundation tier has no minimum commitment. Higher tiers have a short minimum so we can build momentum — but no long lock-ins.",
      },
      {
        q: "What's included in a package?",
        a: "Story creation, targeted pitching, a dedicated media-relations team, market research and revisions until the piece is exactly right. You approve everything.",
      },
    ],
  },
  {
    key: "process",
    label: "The process",
    items: [
      {
        q: "How long does it take to get published?",
        a: "Most placements go live within a few weeks, depending on the outlet and how many revisions you want. We keep you updated at every step.",
      },
      {
        q: "Can I make changes before it goes live?",
        a: "Yes — you approve every word, with unlimited revisions until it reads exactly the way you want. Nothing publishes without your sign-off.",
      },
      {
        q: "What happens after it's published?",
        a: "You get the live link plus a permanent, searchable \"as seen in\" credibility asset — something that keeps working for you every time someone looks you up.",
      },
    ],
  },
];

export function ContactFAQ() {
  const [cat, setCat] = useState(0);
  const [open, setOpen] = useState(0);
  const items = CATEGORIES[cat].items;

  return (
    <section className={styles.faq} aria-label="Frequently asked questions">
      <div className={styles.head}>
        <span className={styles.bar} />
        <h2 className={styles.title}>Questions, <span className="v-hl">answered.</span></h2>
        <div className={styles.tabs} role="tablist">
          {CATEGORIES.map((c, i) => (
            <button
              key={c.key}
              type="button"
              role="tab"
              aria-selected={i === cat}
              className={`${styles.tab} ${i === cat ? styles.tabOn : ""}`}
              onClick={() => {
                setCat(i);
                setOpen(0);
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.list}>
          {items.map((it, i) => (
            <button
              key={it.q}
              type="button"
              className={`${styles.qitem} ${i === open ? styles.qOn : ""}`}
              onClick={() => setOpen(i)}
              aria-expanded={i === open}
            >
              <span className={styles.qnum}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={styles.qtext}>{it.q}</span>
              <span className={styles.qchev} aria-hidden="true">
                →
              </span>
            </button>
          ))}
        </div>

        <div className={styles.answer} key={`${cat}-${open}`}>
          <div className={styles.aMeta}>
            <span className={styles.aNum}>
              {String(open + 1).padStart(2, "0")}
            </span>
            <span className={styles.aCat}>{CATEGORIES[cat].label}</span>
          </div>
          <h3 className={styles.aQ}>{items[open].q}</h3>
          <p className={styles.aA}>{items[open].a}</p>
          <Link href="/services" className={styles.aLink}>
            Still curious? See how it works &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
