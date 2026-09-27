"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FunkyCta } from "@/components/FunkyCta";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/get-featured-in", label: "Get Featured" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/guides", label: "Blog" },  // guides, industries and countries in one place
  { href: "/reviews", label: "Reviews" }
];

/**
 * A floating dark bar inset from the edges. On narrow screens the links
 * collapse into a full-screen numbered menu.
 */
export function NavMenu() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  const navRef = useRef<HTMLElement>(null);

  // past the top the bar tightens into a slim pill, the name slides in and a
  // lime line tracks how far down the page you are
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(y > 80);
        navRef.current?.style.setProperty("--p", String(max > 0 ? Math.min(1, y / max) : 0));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [path]);

  // close the menu on navigation, and lock page scroll while it's open
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => path === href || path?.startsWith(href + "/");

  return (
    <>
      <nav ref={navRef} className={`v-nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`} aria-label="Main">
        <div className="v-nav-bar">
          <Link href="/" className="v-nav-logo" aria-label="Digital Networking Agency — home">
            <img src="/dna-mark-lime.png" alt="DNA" width={65} height={30} />
            <span className="v-nav-word" aria-hidden="true">
              It&rsquo;s in our <b>DNA</b>
            </span>
          </Link>

          <div className="v-nav-links">
            {links.map((l) => (
              <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}>
                <span className="v-roll"><span>{l.label}</span></span>
              </Link>
            ))}
          </div>

          <FunkyCta href="/contact" label="Get featured" className="v-nav-cta" />

          <button
            type="button"
            className="v-nav-menu"
            aria-expanded={open}
            aria-controls="v-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"} <i aria-hidden="true" />
          </button>
        </div>
      </nav>

      <div id="v-menu" className={`v-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <ol>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="v-menu-link" tabIndex={open ? 0 : -1}>
                {l.label}
              </Link>
            </li>
          ))}
        </ol>
        <div className="v-menu-foot">
          <div style={{ justifySelf: "start", marginBottom: 8 }}>
            <FunkyCta href="/contact" label="Get featured" />
          </div>
          <a href="mailto:sam@digitalnetworkingagency.com" tabIndex={open ? 0 : -1}>sam@digitalnetworkingagency.com</a>
          <a href="tel:+13302276337" tabIndex={open ? 0 : -1}>+1 (330) 227-6337</a>
        </div>
      </div>
    </>
  );
}
