import { renderOgCard } from "@/lib/ogCard";

export const alt = "Get featured in 1,100+ publications. — DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    kicker: "PUBLICATIONS",
    lead: "Get featured in",
    highlight: "1,100+ publications.",
    sub: "MSN, USA Today, Yahoo Finance, Entrepreneur, AP News and more.",
  });
}
