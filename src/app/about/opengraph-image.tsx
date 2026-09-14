import { renderOgCard } from "@/lib/ogCard";

export const alt = "It's in our DNA. — DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    kicker: "ABOUT DNA",
    lead: "It's in",
    highlight: "our DNA.",
    sub: "A PR and media placement firm for founders and brands.",
  });
}
