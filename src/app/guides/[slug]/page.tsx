import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES, getGuide } from "@/content/guides";
import { OUTLETS } from "@/content/outlets";
import styles from "../guides.module.css";
import { ProofCards } from "../ProofCards";
import { clampDescription, clampTitle } from "@/lib/meta";
import { extractFaq } from "@/lib/faq";

const SITE = "https://www.digitalnetworkingagency.com";
const AUTHOR = "Sam Harris";
const BOOKING = "/contact";
const AUTHOR_ROLE = "Founder";

// Split the article so a CTA band can sit mid-read, before the Nth heading.
function splitBody(html: string, beforeHeading = 3) {
  const positions: number[] = [];
  const re = /<h2[\s>]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) positions.push(m.index);
  if (positions.length <= beforeHeading) return [html, ""];
  const at = positions[beforeHeading];
  return [html.slice(0, at), html.slice(at)];
}

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  const url = `${SITE}/guides/${guide.slug}`;

  return {
    title: clampTitle(guide.title),
    description: clampDescription(guide.description),
    alternates: { canonical: url },
    openGraph: {
      title: clampTitle(guide.title),
      description: clampDescription(guide.description),
      url,
      siteName: "Digital Networking Agency",
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: clampTitle(guide.title),
      description: clampDescription(guide.description),
    },
  };
}


// Every guide ends with a "Frequently asked questions" H2 followed by
// <h3>Question</h3><p>Answer</p> pairs, but none of that was exposed as
// FAQPage schema — so ~130 Q&A pairs across the guide library were invisible
// to rich results and AI answer engines. This lifts them out of the body HTML.
export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const url = `${SITE}/guides/${guide.slug}`;
  const [bodyTop, bodyRest] = splitBody(guide.body);

  const faqs = extractFaq(guide.body);
  // The commercial page for this outlet, if this guide has one. Linking to it
  // from high on the guide points the query at the page meant to rank for it.
  const outlet = OUTLETS.find((o) => o.guideSlug === guide.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: guide.h1,
      description: clampDescription(guide.description),
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image: {
        "@type": "ImageObject",
        url: `${url}/opengraph-image`,
        width: 1200,
        height: 630,
      },
      inLanguage: "en-US",
      author: {
        "@type": "Person",
        name: AUTHOR,
        jobTitle: AUTHOR_ROLE,
        worksFor: { "@id": `${SITE}/#organization` },
      },
      publisher: { "@id": `${SITE}/#organization` },
      isAccessibleForFree: true,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE}/guides` },
        { "@type": "ListItem", position: 3, name: guide.h1, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${SITE}/#organization`,
      name: "Digital Networking Agency",
      alternateName: "DNA PR",
      url: `${SITE}/`,
      logo: `${SITE}/black_logo.png`,
      description:
        "Results-driven public relations and media relations agency that pitches founders' and brands' stories to editors and journalists at trusted publications.",
      telephone: "+1-330-227-6337",
      email: "sam@digitalnetworkingagency.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6545 Market Ave N, Suite 100",
        addressLocality: "Canton",
        addressRegion: "OH",
        postalCode: "44721",
        addressCountry: "US",
      },
      sameAs: ["https://www.instagram.com/dnateams/"],
    },
    ...(faqs.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${url}#faq`,
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]
      : []),
  ];

  return (
    <div className={styles.page}>
      <main className={styles.wrap}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className={styles.crumbs} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/guides">Guides</Link>
      </nav>

      <article className={styles.article}>
        <header className={styles.header}>
          <h1>{guide.h1}</h1>
          <p className={styles.byline}>
            By {AUTHOR}, Digital Networking Agency
          </p>
        </header>

        {outlet ? (
          <p className={styles.serviceLine}>
            Want us to do it for you?{" "}
            <Link href={`/get-featured-in/${outlet.slug}`}>
              Get featured in {outlet.name}
            </Link>
          </p>
        ) : null}

        <figure className={styles.cover}>
          <img
            src={`/guides/${guide.slug}/opengraph-image`}
            alt={`${guide.h1} — DNA PR guide`}
            width={1200}
            height={630}
            fetchPriority="high"
            decoding="async"
          />
        </figure>

        {guide.toc.length > 1 ? (
          <nav className={styles.toc} aria-label="On this page">
            <span className={styles.tocTitle}>On this page</span>
            <ul>
              {guide.toc.map((h) => (
                <li key={h.id}>
                  <a href={`#${h.id}`}>{h.text}</a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        {guide.takeaways.length ? (
          <aside className={styles.takeaways}>
            <span className={styles.takeawaysTitle}>Key takeaways</span>
            <ul>
              {guide.takeaways.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </aside>
        ) : null}

        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: bodyTop }}
        />

        {bodyRest ? (
          <>
            <aside className={styles.midCta}>
              <div>
                <p className={styles.midCtaText}>Want us to get you featured?</p>
                <p className={styles.midCtaSub}>
                  We write and place your feature. You approve every word.
                </p>
              </div>
              <a
                className={styles.midCtaBtn}
                href={BOOKING}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get featured <span aria-hidden="true">&rarr;</span>
              </a>
            </aside>
            <ProofCards slug={guide.slug} />
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{ __html: bodyRest }}
            />
          </>
        ) : null}
      </article>

      <aside className={styles.cta}>
        <span className={styles.ctaTag}>Your story, in print</span>
        <h2>
          Ready to get <em>featured?</em>
        </h2>
        <p>
          Book a 30-minute call. We&rsquo;ll tell you honestly which publications
          fit your business and what the process looks like.
        </p>
        <a
          className={styles.ctaBtn}
          href={BOOKING}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Free Call <span aria-hidden="true">&rarr;</span>
        </a>
        <p className={styles.ctaLinks}>
          <a href="mailto:sam@digitalnetworkingagency.com">
            sam@digitalnetworkingagency.com
          </a>
          <span aria-hidden="true">·</span>
          <a href="tel:+13302276337">+1 (330) 227-6337</a>
        </p>
      </aside>

      <nav className={styles.more} aria-label="More guides">
        <h2>More guides</h2>
        <ul>
          {GUIDES.filter((g) => g.slug !== guide.slug).map((g) => (
            <li key={g.slug}>
              <Link href={`/guides/${g.slug}`}>{g.h1}</Link>
            </li>
          ))}
        </ul>
      </nav>
      </main>
    </div>
  );
}
