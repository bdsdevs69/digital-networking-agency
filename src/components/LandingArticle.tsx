import Link from "next/link";
import type { ReactNode } from "react";
import styles from "@/app/guides/guides.module.css";

type Props = {
  crumbs: { href: string; label: string }[];
  h1: string;
  lede?: string;
  cover: { src: string; alt: string };
  toc: { id: string; text: string }[];
  takeaways: string[];
  body: string;
  jsonLd: unknown;
  children?: ReactNode;
};

// Article-style layout for service landings (country hubs, visa, top lists):
// the same reading experience and in-content cover image as the guides.
export function LandingArticle({ crumbs, h1, lede, cover, toc, takeaways, body, jsonLd, children }: Props) {
  return (
    <div className={styles.page}>
      <main className={styles.wrap}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <nav className={styles.crumbs} aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <span key={c.href}>
              {i > 0 ? <span aria-hidden="true"> / </span> : null}
              <Link href={c.href}>{c.label}</Link>
            </span>
          ))}
        </nav>

        <article className={styles.article}>
          <header className={styles.header}>
            <h1>{h1}</h1>
            {lede ? <p className={styles.lede}>{lede}</p> : null}
          </header>

          <figure className={styles.cover}>
            <img src={cover.src} alt={cover.alt} width={1200} height={630} fetchPriority="high" decoding="async" />
          </figure>

          {toc.length > 1 ? (
            <nav className={styles.toc} aria-label="On this page">
              <span className={styles.tocTitle}>On this page</span>
              <ul>
                {toc.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`}>{h.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          {takeaways.length ? (
            <aside className={styles.takeaways}>
              <span className={styles.takeawaysTitle}>Key takeaways</span>
              <ul>
                {takeaways.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
            </aside>
          ) : null}

          <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
        </article>

        {children}

        <aside className={styles.cta}>
          <span className={styles.ctaTag}>Your story, in print</span>
          <h2>
            Ready to get <em>featured?</em>
          </h2>
          <p>
            Tell us what you want to achieve. We&rsquo;ll tell you honestly which publications fit and what the
            process looks like.
          </p>
          <Link className={styles.ctaBtn} href="/contact">
            Get featured <span aria-hidden="true">&rarr;</span>
          </Link>
        </aside>
      </main>
    </div>
  );
}
