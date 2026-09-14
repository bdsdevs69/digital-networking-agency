import { GUIDES, getGuide } from "@/content/guides";
import { renderOgCard } from "@/lib/ogCard";

export const alt = "PR and media placement guide from DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  const h1 = g?.h1 ?? "PR & Media Guides";
  // "How to Get Featured in Forbes" -> white lead + lime outlet name.
  const m = h1.match(/^((?:how to )?get featured in)\s+(.+)$/i);
  return renderOgCard({
    kicker: "PR GUIDE",
    lead: m ? m[1] : h1,
    highlight: m ? m[2] : "",
    sub: g?.description,
  });
}
