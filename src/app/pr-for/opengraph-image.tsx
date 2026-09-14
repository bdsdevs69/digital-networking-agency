import { renderOgCard } from "@/lib/ogCard";

export const alt = "PR built for your industry. — DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    kicker: "PR BY INDUSTRY",
    lead: "PR built for",
    highlight: "your industry.",
    sub: "Founders, coaches, realtors, attorneys, medical practices and more.",
  });
}
