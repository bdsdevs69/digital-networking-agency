import { renderOgCard } from "@/lib/ogCard";

export const alt = "Trusted by our clients. — DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    kicker: "REVIEWS",
    lead: "Trusted by",
    highlight: "our clients.",
    sub: "Verified client reviews on Trustpilot.",
  });
}
