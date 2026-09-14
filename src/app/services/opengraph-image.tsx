import { renderOgCard } from "@/lib/ogCard";

export const alt = "Services & packages. — DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    kicker: "SERVICES",
    lead: "Services &",
    highlight: "packages.",
    sub: "Single features, monthly packages and DNA Prime strategy.",
  });
}
