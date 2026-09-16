import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { NavMenu } from "@/components/landing/NavMenu";
import { FloatingContact } from "@/components/FloatingContact";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";

const GA_ID = "G-GPMPT68ZE6";

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Mono:wght@300;400;500&family=Bebas+Neue&display=swap";

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
    <html lang="en">
      <head>
        {/* Fonts were render-blocking (~990ms per Lighthouse). Preconnect, then
            load the stylesheet asynchronously via the media="print" swap so it
            never blocks first paint. display=swap is already in the URL, and the
            <noscript> keeps it working without JS. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var l=document.createElement('link');l.rel='stylesheet';" +
              "l.href=" + JSON.stringify(FONT_HREF) + ";l.media='print';" +
              "l.onload=function(){this.media='all';this.onload=null;};" +
              "document.head.appendChild(l);})();",
          }}
        />
        <noscript>
          <link rel="stylesheet" href={FONT_HREF} />
        </noscript>
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
