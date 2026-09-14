import { renderOgCard } from "@/lib/ogCard";

export const alt = "PR agency, wire, DIY or DNA? — DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    kicker: "COMPARE",
    lead: "PR agency, wire,",
    highlight: "DIY or DNA?",
    sub: "An honest breakdown of what each route actually buys you.",
  });
}
