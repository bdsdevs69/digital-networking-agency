import { renderOgCard } from "@/lib/ogCard";

export const alt = "Real placements. Permanent features. — DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    kicker: "CLIENT RESULTS",
    lead: "Real placements.",
    highlight: "Permanent features.",
    sub: "Client features live on publications your audience already trusts.",
  });
}
