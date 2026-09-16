import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OUTLETS, getOutlet } from "@/content/outlets";
import { CASE_STUDIES } from "@/content/caseStudies";
import { OutletForm } from "@/components/OutletForm";
import styles from "../getfeatured.module.css";
import { clampDescription, clampTitle } from "@/lib/meta";

const SITE = "https://www.digitalnetworkingagency.com";
const BOOKING = "/contact";

export const dynamicParams = false;

export function generateStaticParams() {
  return OUTLETS.map((o) => ({ outlet: o.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ outlet: string }>;
}): Promise<Metadata> {
  const { outlet } = await params;
  const o = getOutlet(outlet);
  if (!o) return {};
  const url = `${SITE}/get-featured-in/${o.slug}`;
  const description = clampDescription(`Get featured in ${o.name}. ${o.value}`);
  return {
    title: clampTitle(o.title),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: clampTitle(o.title),
      description,
      url,
      siteName: "Digital Networking Agency",
      type: "website",
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title: clampTitle(o.title), description },
  };
}

// A real client placement in this outlet, when we have one. Only genuine
// published work appears here — outlets with no placement show nothing.
const PROOF_ALIAS: Record<string, string> = {
  "ny weekly": "new york weekly",
  "new york weekly": "ny weekly",
};

function proofFor(outletName: string) {
  const want = outletName.toLowerCase();
  const alias = PROOF_ALIAS[want];
  return CASE_STUDIES.filter((c) => {
    const o = c.outlet.toLowerCase();
    return o === want || o === alias;
  });
}

export default async function OutletLanding({
  params,
}: {
  params: Promise<{ outlet: string }>;
}) {
  const { outlet } = await params;
  const o = getOutlet(outlet);
  if (!o) notFound();

  const url = `${SITE}/get-featured-in/${o.slug}`;
  const proof = proofFor(o.name);
  const others = OUTLETS.filter((x) => x.slug !== o.slug);

  const faqs = [
    {
      q: `How do I get featured in ${o.name}?`,
      a: `We develop your story, write the feature to editorial standard, and manage the placement. You approve every word before anything goes live.`,
    },
    {
      q: `Is the ${o.name} coverage a real, published feature?`,
      a: `Yes. It is a genuine article published on the outlet, written about you and your work — not an ad you design yourself.`,
    },
    {
      q: `How long does it take?`,
      a: `Most placements take weeks rather than days. We give you a realistic timeline for ${o.name} before we start, and never promise a date we cannot control.`,
    },
    {
      q: `What if I am not happy with the draft?`,
      a: `You review and revise until it is right. Nothing publishes without your approval.`,
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: `Get featured in ${o.name}`,
      description: o.value,
      serviceType: "Public relations and media placement",
      provider: { "@id": `${SITE}/#organization` },
      areaServed: "US",
      url,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Get Featured", item: `${SITE}/get-featured-in` },
        { "@type": "ListItem", position: 3, name: o.name, item: url },
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
      telephone: "+1-330-227-6337",
      email: "sam@digitalnetworkingagency.com",
      sameAs: ["https://www.instagram.com/dnateams/"],
    },
  ];

  const steps = [
    { n: "01", t: "Choose your outlet", d: `You want ${o.name}. We confirm it fits your goals.` },
    { n: "02", t: "Share your story", d: "A short call or brief — we do the heavy lifting from there." },
    { n: "03", t: "We write your feature", d: "Written to editorial standard, built around your positioning." },
    { n: "04", t: "Approve and go live", d: "You approve every word, then we place it and send the link." },
  ];

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          {/* The full "Get featured in <Outlet>" phrase lives inside the H1 so
              the target query is in the heading; the kicker is styled, not split out. */}
          <h1>
            <span className={styles.kicker}>Get featured in</span>{" "}
            {o.name}
          </h1>
          <p className={styles.subhead}>{o.subhead}</p>
          <p className={styles.value}>{o.value}</p>
          <div className={styles.heroCtas}>
            {/* Scrolls to the form on this page. It used to open /contact in a
                new tab, which took ad traffic away from the form it had landed on. */}
            <a className={styles.btnPrimary} href="#enquire">
              Get featured in {o.name} <span aria-hidden="true">&darr;</span>
            </a>
            <Link className={styles.btnGhost} href={`/guides/${o.guideSlug}`}>
              Read the full guide
            </Link>
          </div>
          <ul className={styles.badges}>
            <li>You approve every word</li>
            <li>Unlimited revisions</li>
          </ul>
        </div>
      </section>

      <div className={styles.body}>
        {/* About */}
        <section className={styles.block}>
          <h2>About {o.name}</h2>
          <p>{o.about}</p>
        </section>

        {/* Why */}
        <section className={styles.block}>
          <h2>Why a feature here matters</h2>
          <p>{o.why}</p>
          <p className={styles.audience}>
            <strong>Best for:</strong> {o.audience}
          </p>
        </section>

        {/* How coverage actually happens here */}
        {o.routes ? (
          <section className={styles.block}>
            <h2>How coverage happens at {o.name}</h2>
            <p>{o.routes}</p>
          </section>
        ) : null}

        {/* What kind of story lands */}
        {o.story ? (
          <section className={styles.block}>
            <h2>The kind of story that lands</h2>
            <p>{o.story}</p>
          </section>
        ) : null}

        {/* Proof: a real placement in this outlet */}
        {proof.length ? (
          <section className={styles.block}>
            <h2>A client we placed in {o.name}</h2>
            {proof.slice(0, 2).map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`} className={styles.proofCard}>
                <img
                  src={c.image}
                  alt={`${c.name} featured in ${c.outlet}`}
                  width={900}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
                <span>
                  <span className={styles.proofKind}>Published in {c.outlet}</span>
                  <span className={styles.proofHead}>{c.quote}</span>
                  <span className={styles.proofWho}>
                    {c.name} &mdash; {c.role}
                  </span>
                </span>
              </Link>
            ))}
          </section>
        ) : null}

        {/* How it works */}
        <section className={styles.block}>
          <h2>How we get you in {o.name}</h2>
          <div className={styles.steps}>
            {steps.map((s) => (
              <div key={s.n} className={styles.step}>
                <span className={styles.stepNum}>{s.n}</span>
                <span className={styles.stepTitle}>{s.t}</span>
                <span className={styles.stepDesc}>{s.d}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Enquiry form, on the page itself */}
        <section className={styles.formSection} id="enquire">
          <h2>Ask about {o.name}</h2>
          <p className={styles.formLede}>
            Tell us the story in a sentence. We reply within 24 hours and we will say plainly
            whether {o.name} is realistic for you, and which route it would take.
          </p>
          <OutletForm outlet={o.name} />
        </section>

        {/* FAQ */}
        <section className={styles.block}>
          <h2>Questions about {o.name}</h2>
          <div className={styles.faqs}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.faq}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className={styles.footerCta}>
          <h2>
            Ready to appear in <em>{o.name}?</em>
          </h2>
          <p>
            Book a 30-minute call. We&rsquo;ll confirm {o.name} is the right fit
            and walk you through exactly how it works.
          </p>
          <a
            className={styles.btnPrimary}
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get featured now <span aria-hidden="true">&rarr;</span>
          </a>
          <p className={styles.contactline}>
            <a href="mailto:sam@digitalnetworkingagency.com">sam@digitalnetworkingagency.com</a>
            <span aria-hidden="true">·</span>
            <a href="tel:+13302276337">+1 (330) 227-6337</a>
          </p>
        </section>

        {/* Other outlets */}
        <section className={styles.block}>
          <h2>Get featured in other publications</h2>
          <div className={styles.outletGrid}>
            {others.map((x) => (
              <Link key={x.slug} href={`/get-featured-in/${x.slug}`}>
                {x.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
