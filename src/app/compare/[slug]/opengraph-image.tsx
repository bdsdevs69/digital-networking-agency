import { COMPARISONS, getComparison } from "@/content/comparisons";
import { renderOgCard } from "@/lib/ogCard";

export const alt = "An honest PR agency comparison from DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return COMPARISONS.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getComparison(slug);
  return renderOgCard({
    kicker: "COMPARISON",
    lead: c ? `${c.competitor.name} alternatives:` : "Compare your",
    highlight: c ? "an honest comparison." : "PR options.",
    sub: c?.description,
  });
}
