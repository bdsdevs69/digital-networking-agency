import { GUIDES, getGuide } from "@/content/guides";
import { OUTLETS } from "@/content/outlets";
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
  const [lead, highlight] = splitHeadline(h1);
  const isOutlet = OUTLETS.some((o) => o.guideSlug === slug);
  return renderOgCard({
    kicker: isOutlet ? "OUTLET GUIDE" : "EXPLAINER",
    lead,
    highlight,
    sub: g?.description,
  });
}

// Split a headline into a white lead and a lime highlight.
function splitHeadline(h1: string): [string, string] {
  let m = h1.match(/^((?:how to )?get (?:featured|published) (?:in|on))\s+(.+)$/i);
  if (m) return [m[1], m[2]];
  const colon = h1.indexOf(":");
  if (colon > 0) return [h1.slice(0, colon + 1), h1.slice(colon + 1).trim()];
  m = h1.match(/^(.+?\s+vs\.?)\s+(.+)$/i);
  if (m) return [m[1], m[2]];
  m = h1.match(/^(.+?)\s+(\S+\s+\S+)$/);
  if (m) return [m[1], m[2]];
  return [h1, ""];
}
