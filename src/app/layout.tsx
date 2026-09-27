import type { Metadata } from "next";
import Script from "next/script";
import { Archivo, Instrument_Sans, Playfair_Display, Syne, Bodoni_Moda, Unbounded } from "next/font/google";
import "./globals.css";
import "./v3.css";
import { NavMenu } from "@/components/landing/NavMenu";
import { FloatingContact } from "@/components/FloatingContact";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";

const GA_ID = "G-GPMPT68ZE6";

// Self-hosted by next/font: no third-party request, no render-blocking, and
// size-adjusted fallbacks so text doesn't jump when the font lands.
//   Archivo          — display. Heavy, with a width axis for the big type.
//   Instrument Sans  — body and the [ bracket ] labels.
//   Playfair Display — used only for headlines of articles we placed.
const fDisplay = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
  variable: "--font-archivo"
});
const fBody = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument"
});
const fPress = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair"
});
// chunky, rounded display face for the "Get featured" buttons only
// newspaper masthead + headline on the homepage hero
const fMast = Bodoni_Moda({ subsets: ["latin"], weight: ["700", "900"], style: ["normal", "italic"], display: "swap", variable: "--font-bodoni" });
// wide, sharp face for the footer wordmark
const fSyne = Syne({ subsets: ["latin"], weight: ["800"], display: "swap", variable: "--font-syne" });
const fFunk = Unbounded({ subsets: ["latin"], weight: ["700", "900"], display: "swap", variable: "--font-unbounded" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digitalnetworkingagency.com"),
  title: "DNA PR — Get Featured in Forbes, MSN & 1,100+ Outlets",
  description:
    "We pitch founders' and brands' stories to editors at MSN, USA Today, Forbes and 1,100+ trusted publications. You approve every word before it publishes.",
  openGraph: {
    title: "DNA PR — Get Featured in the World's Most Trusted Publications",
    description:
      "Results-driven PR & media relations. We pitch your story to editors at Forbes, MSN, USA Today and 1,100+ top outlets — because it's in your DNA.",
    url: "https://www.digitalnetworkingagency.com",
    siteName: "Digital Networking Agency",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DNA PR — Get Featured in the World's Most Trusted Publications",
    description:
      "Results-driven PR & media relations. We pitch your story to editors at Forbes, MSN, USA Today and 1,100+ top outlets.",
  },
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": "https://www.digitalnetworkingagency.com/#organization",
        name: "Digital Networking Agency",
        alternateName: ["DNA", "DNA PR"],
        description:
          "Digital Networking Agency (DNA) is a results-driven public relations and media placement firm. We pitch founders' and brands' stories to editors and journalists at MSN, USA Today, Yahoo Finance, Entrepreneur and over 1,100 other publications to build lasting authority.",
        disambiguatingDescription:
          "A public relations and media placement agency for founders and brands — not a directory, listing site, or B2B agency marketplace.",
        url: "https://www.digitalnetworkingagency.com",
        logo: "https://www.digitalnetworkingagency.com/icon.png",
        image: "https://www.digitalnetworkingagency.com/icon.png",
        email: "sam@digitalnetworkingagency.com",
        telephone: "+1-330-227-6337",
        address: {
          "@type": "PostalAddress",
          streetAddress: "6545 Market Ave N, Suite 100",
          addressLocality: "Canton",
          addressRegion: "OH",
          postalCode: "44721",
          addressCountry: "US"
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          opens: "09:00",
          closes: "18:00"
        },
        priceRange: "$$",
        areaServed: "Worldwide",
        knowsAbout: [
          "Public Relations",
          "Media Relations",
          "Press Coverage",
          "Personal Branding",
          "Media Placements"
        ],
        sameAs: [
          "https://www.instagram.com/dnateams/",
          "https://www.linkedin.com/company/digital-networking-agency-dna",
          "https://clutch.co/profile/digital-networking-agency",
          "https://www.trustpilot.com/review/digitalnetworkingagency.com"
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "sam@digitalnetworkingagency.com",
          telephone: "+1-330-227-6337"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.digitalnetworkingagency.com/#website",
        name: "Digital Networking Agency",
        alternateName: "DNA PR",
        url: "https://www.digitalnetworkingagency.com",
        description:
          "Results-driven PR & media relations agency — we pitch your story to editors and journalists at the world's most trusted publications.",
        publisher: {
          "@id": "https://www.digitalnetworkingagency.com/#organization"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${fDisplay.variable} ${fBody.variable} ${fPress.variable} ${fFunk.variable} ${fSyne.variable} ${fMast.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Homepage intro (Wynn-style tile wipe): decide before first paint so
            it plays once per visit and never flashes on repeat views. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(location.pathname==='/'&&!sessionStorage.getItem('dna-intro')&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('intro-play');sessionStorage.setItem('dna-intro','1')}}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Speculation Rules: prefetch likely next-navigations and prerender the
            two highest-intent paths. preload_check.py scored the site 50/100
            with "blocks=0" before this. */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prefetch: [
                {
                  where: {
                    and: [
                      { href_matches: "/*" },
                      { not: { href_matches: "/api/*" } },
                    ],
                  },
                  eagerness: "moderate",
                },
              ],
              prerender: [
                {
                  where: {
                    href_matches: ["/contact", "/services"],
                  },
                  eagerness: "moderate",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <NavMenu />
        {children}
        <SiteFooter />
        <FloatingContact />
        <ScrollReveal />
        {/* GA4. afterInteractive keeps it off the critical path; the config
            call is what GA's "Test installation" checks for. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1487682899685317');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" alt="" style={{display: "none"}}
            src="https://www.facebook.com/tr?id=1487682899685317&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
