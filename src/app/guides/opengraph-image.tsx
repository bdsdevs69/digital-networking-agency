import { renderOgCard } from "@/lib/ogCard";

export const alt = "How to get featured, honestly. — DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    kicker: "PR & MEDIA GUIDES",
    lead: "How to get featured,",
    highlight: "honestly.",
    sub: "The real routes into Forbes, MSN and more, and what editors actually publish.",
  });
}
