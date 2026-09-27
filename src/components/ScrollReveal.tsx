"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Progressive-enhancement scroll animation.
 *
 * Content is ALWAYS visible by default. Only when this component mounts and the
 * browser supports IntersectionObserver do we add `sr-on` to <html>, which
 * activates the hidden→reveal CSS. With JS off, or reduced motion, nothing is
 * hidden. Cards in the same row reveal in a short stagger, and numbers marked
 * with data-count tick up from zero the first time they are seen.
 */
const SELECTORS = [
  "main .v-sec > .v-wrap > *",          // section heads, grids, copy blocks
  "main .v-sec .v-head",
  "main [class*='card']",
  "main [class*='_work__']",
  "main [class*='_review__']",
  "main [class*='_phase__']",
  "main [class*='_num__']",
  "main [class*='_guide__']",
  "main [class*='_case__']",
  "main [class*='_rule__']",
  "main [class*='_stat__']",
  "main [class*='_step__']",
  "main [class*='_pkg__']",
  "main [class*='_brandCard__']",
  "main [class*='_detailSection__']",
  "main [class*='_block__']",
  "main [class*='takeaways']",
  "main [class*='faq']",
].join(", ");

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target)) return;
  const decimals = (el.dataset.count!.split(".")[1] || "").length;
  const start = performance.now();
  const dur = 1400;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = (target * eased).toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/** Wrap each word of a heading in a mask so the words can slide up in turn. */
function splitWords(el: HTMLElement) {
  if (el.dataset.split) return;
  el.dataset.split = "1";
  let n = 0;
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const parts = (child.textContent ?? "").split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((p) => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
          const mask = document.createElement("span");
          mask.className = "w-mask";
          const inner = document.createElement("span");
          inner.className = "w-word";
          inner.style.setProperty("--wi", String(n++));
          inner.textContent = p;
          mask.appendChild(inner);
          frag.appendChild(mask);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE && !(child as HTMLElement).classList.contains("sr-only")) {
        walk(child);
      }
    });
  };
  walk(el);
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return; // leave content visible

    // don't hide anything inside something that is already hidden
    const targets = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS)).filter(
      (el) => !el.dataset.sr && !el.closest("[hidden]") && !el.parentElement?.closest(".sr")
    );
    targets.forEach((el) => {
      el.dataset.sr = "1";
      el.classList.add("sr");
      // stagger siblings: each card waits a beat after the one before it
      const sibs = Array.from(el.parentElement?.children ?? []).filter((c) => (c as HTMLElement).dataset.sr);
      el.style.transitionDelay = `${Math.min(sibs.indexOf(el), 5) * 0.07}s`;
    });

    document.documentElement.classList.add("sr-on");

    // section headings: words rise from behind a mask, one after another
    const heads = Array.from(
      document.querySelectorAll<HTMLElement>("main .v-h2, main [class*='_kjTitle'], main [class*='_ksTitle'], main [class*='_logosTitle']")
    );
    heads.forEach(splitWords);
    const hio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("w-in");
        hio.unobserve(e.target);
      });
    }, { threshold: 0.25 });
    heads.forEach((h) => hio.observe(h));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.classList.add("sr-in");
          el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
          io.unobserve(el);
          // once it has landed, hand transforms back to the element's own
          // styles (hover lifts, the scaled feature card, etc.)
          const delay = parseFloat(el.style.transitionDelay) || 0;
          setTimeout(() => {
            el.classList.remove("sr", "sr-in");
            el.style.transitionDelay = "";
          }, 800 + delay * 1000);
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -6% 0px" }
    );
    // observe everything still waiting — including elements marked by an
    // earlier run of this effect (dev Strict Mode runs it twice)
    document.querySelectorAll<HTMLElement>(".sr:not(.sr-in)").forEach((el) => io.observe(el));

    // numbers that are not inside a revealed block
    const counters = Array.from(document.querySelectorAll<HTMLElement>("main [data-count]")).filter((c) => !c.closest(".sr"));
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        countUp(e.target as HTMLElement);
        cio.unobserve(e.target);
      });
    }, { threshold: 0.4 });
    counters.forEach((c) => cio.observe(c));

    // backstop for fast jumps (End key, anchor links): anything already above
    // the bottom of the screen is shown even if the observer never fired
    let raf = 0;
    const sweep = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = window.innerHeight;
        document.querySelectorAll<HTMLElement>(".sr:not(.sr-in)").forEach((el) => {
          if (el.getBoundingClientRect().top < h) {
            el.classList.add("sr-in");
            el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
            setTimeout(() => el.classList.remove("sr", "sr-in"), 900);
          }
        });
      });
    };
    window.addEventListener("scroll", sweep, { passive: true });

    // printing should never show a half-revealed page
    const showAll = () => document.querySelectorAll(".sr").forEach((el) => el.classList.add("sr-in"));
    window.addEventListener("beforeprint", showAll);

    return () => {
      io.disconnect();
      cio.disconnect();
      hio.disconnect();
      window.removeEventListener("beforeprint", showAll);
      window.removeEventListener("scroll", sweep);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
