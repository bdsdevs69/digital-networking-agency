import { REGIONS, getRegion } from "@/content/regions";
import { renderOgCard } from "@/lib/ogCard";

export const alt = "PR by country from DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return REGIONS.map((r) => ({ region: r.slug }));
}

export default async function Image({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const r = getRegion(region);
  return renderOgCard({
    kicker: "PR BY COUNTRY",
    lead: "PR in",
    highlight: r ? `${r.region}.` : "your market.",
    sub: r?.intro,
  });
}
