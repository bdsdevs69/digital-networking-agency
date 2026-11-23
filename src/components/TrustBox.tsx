"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

/**
 * Trustpilot's official "Review Collector" TrustBox — the only widget the free
 * plan allows (code from Trustpilot Business → Share & promote → Website
 * widgets). Never show a TrustScore, star rating, review count or home-made
 * Trustpilot widget anywhere else on the site: Trustpilot warned us on
 * 23 Nov 2026 and can add a consumer alert to the profile.
 */
const BUSINESS_UNIT_ID = "6a01f342478772c1ee6df953";
const TEMPLATE_ID = "56278e9abfbbba0bdcd568bc";
const PROFILE_URL = "https://www.trustpilot.com/review/digitalnetworkingagency.com";

type TrustpilotGlobal = { loadFromElement: (el: HTMLElement, force?: boolean) => void };

export function TrustBox({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  // the bootstrap script renders every widget on the page when it first loads;
  // after a client-side navigation it is already there, so render this one now
  useEffect(() => {
    const tp = (window as unknown as { Trustpilot?: TrustpilotGlobal }).Trustpilot;
    if (tp && ref.current) tp.loadFromElement(ref.current, true);
  }, []);

  return (
    <>
      <Script src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" strategy="lazyOnload" />
      <div
        ref={ref}
        className={`trustpilot-widget ${className}`}
        data-locale="en-US"
        data-template-id={TEMPLATE_ID}
        data-businessunit-id={BUSINESS_UNIT_ID}
        data-style-height="52px"
        data-style-width="100%"
      >
        <a href={PROFILE_URL} target="_blank" rel="noopener">
          Trustpilot
        </a>
      </div>
    </>
  );
}
