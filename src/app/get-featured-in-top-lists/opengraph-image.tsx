import { renderOgCard } from "@/lib/ogCard";

export const alt = "Get featured in top 5 and top 10 lists. — DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({ kicker: "TOP LISTS", lead: "Get featured in", highlight: "top 5 and top 10 lists.", sub: "Comparative list features, clearly labelled for what they are." });
}
