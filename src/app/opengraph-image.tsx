import { renderOgCard } from "@/lib/ogCard";

export const alt = "DNA PR — Get featured in the world's most trusted publications";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    kicker: "PUBLIC RELATIONS",
    lead: "Get featured in the world's",
    highlight: "most trusted publications.",
    sub: "Your story, written to editorial standard and placed where your audience reads.",
  });
}
