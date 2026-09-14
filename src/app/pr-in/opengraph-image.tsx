import { renderOgCard } from "@/lib/ogCard";

export const alt = "PR where your customers are. — DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({ kicker: "PR BY COUNTRY", lead: "PR where your", highlight: "customers are.", sub: "The UK, the UAE and Middle East, Australia and Canada." });
}
