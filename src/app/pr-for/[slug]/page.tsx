import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/content/services";
import { GUIDES } from "@/content/guides";
import styles from "../../guides/guides.module.css";

const SITE = "https://www.digitalnetworkingagency.com";
const AUTHOR = "Sam Harris";
const BOOKING = "/contact";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const url = `${SITE}/pr-for/${service.slug}`;

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: url },
    openGraph: {
      title: service.title,
      description: service.description,
      url,
      siteName: "Digital Networking Agency",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = `${SITE}/pr-for/${service.slug}`;
  const updated = "2026-08-10";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.h1,
      description: service.description,
      serviceType: "Public relations and media placement",
      provider: { "@id": `${SITE}/#organization` },
      areaServed: "US",
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": url,
      name: service.h1,
      description: service.description,
      inLanguage: "en-US",
      isPartOf: { "@id": `${SITE}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "PR Services", item: `${SITE}/pr-for` },
        { "@type": "ListItem", position: 3, name: service.h1, item: url },
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
        "Public relations and media relations agency that develops and places founder and brand stories with digital publications.",
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
  ];

  // Each industry has a matching how-to guide. Lead with it so the commercial
  // page and its informational counterpart link to each other, then fill with
  // other guides. (Previously this was GUIDES.slice(0,3) — the same three
  // guides on every page, which is a weak internal-link signal.)
  const GUIDE_FOR_SERVICE: Record<string, string> = {
    startups: "how-to-get-press-for-your-startup",
    "saas-companies": "how-to-get-press-for-your-saas-company",
    coaches: "how-to-get-press-as-a-coach",
    consultants: "how-to-get-press-as-a-consultant",
    "real-estate-agents": "how-to-get-press-as-a-real-estate-agent",
    attorneys: "how-to-get-press-as-an-attorney",
    "financial-advisors": "how-to-get-press-as-a-financial-advisor",
    "medical-practices": "how-to-get-press-for-your-medical-practice",
    "ecommerce-brands": "how-to-get-press-for-your-ecommerce-brand",
    authors: "how-to-get-press-as-an-author",
    speakers: "how-to-get-press-as-a-speaker",
    "personal-brands": "how-to-build-a-personal-brand-with-press",
    agencies: "white-label-pr-for-agencies",
    artists: "how-to-get-press-as-an-artist",
    "actors-and-filmmakers": "how-to-get-press-as-an-actor-or-filmmaker",
    nonprofits: "how-to-get-press-for-your-nonprofit",
  };
  const primary = GUIDES.find((g) => g.slug === GUIDE_FOR_SERVICE[service.slug]);
  const related = [
    ...(primary ? [primary] : []),
    ...GUIDES.filter((g) => g.slug !== primary?.slug).slice(0, primary ? 3 : 4),
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
          <Link href="/pr-for">PR Services</Link>
        </nav>

        <article className={styles.article}>
          <header className={styles.header}>
            <h1>{service.h1}</h1>
            <p className={styles.byline}>
              By {AUTHOR}, Digital Networking Agency
            </p>
          </header>

          {service.takeaways.length ? (
            <aside className={styles.takeaways}>
              <span className={styles.takeawaysTitle}>Key takeaways</span>
              <ul>
                {service.takeaways.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
            </aside>
          ) : null}

          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: service.body }}
          />
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

        <nav className={styles.more} aria-label="Other services">
          <h2>PR by industry</h2>
          <ul>
            {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
              <li key={s.slug}>
                <Link href={`/pr-for/${s.slug}`}>{s.h1}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.more} aria-label="Related guides">
          <h2>Related guides</h2>
          <ul>
            {related.map((g) => (
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
