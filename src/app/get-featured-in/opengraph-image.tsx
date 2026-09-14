import { renderOgCard } from "@/lib/ogCard";

export const alt = "Get featured in top publications. — DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    kicker: "GET FEATURED",
    lead: "Get featured in",
    highlight: "top publications.",
    sub: "Outlet guides for Forbes, USA Today, MSN, Gulf News, Financial Post and more.",
  });
}
