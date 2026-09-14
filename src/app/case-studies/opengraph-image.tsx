import { renderOgCard } from "@/lib/ogCard";

export const alt = "Real clients. Real features. — DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    kicker: "CASE STUDIES",
    lead: "Real clients.",
    highlight: "Real features.",
    sub: "Founders and experts placed in MSN, USA Today, Wall Street Times and more.",
  });
}
