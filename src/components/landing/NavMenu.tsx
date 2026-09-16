"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/get-featured-in", label: "Get Featured" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pr-for", label: "Industries" },
  { href: "/guides", label: "Guides" },
  { href: "/reviews", label: "Reviews" }
];

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${isOpen ? "menu-open " : ""}${scrolled ? "scrolled" : ""}`}>
      <Link href="/" className="nav-logo" onClick={closeMenu} aria-label="DNA PR — Home">
        <img src="/black_logo.webp" alt="DNA PR" className="nav-logo-img" />
      </Link>

      <button
        className={`menu-toggle ${isOpen ? "is-open" : ""}`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <div className="nav-links">
        {links.map((link) =>
          link.href.startsWith("/") ? (
            <Link href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ) : (
            <a href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          )
        )}
        <Link href="/contact" className="nav-cta" onClick={closeMenu}>
          <span>Contact</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
}
