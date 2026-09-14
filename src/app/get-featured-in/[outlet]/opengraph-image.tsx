import { OUTLETS, getOutlet } from "@/content/outlets";
import { renderOgCard } from "@/lib/ogCard";

export const alt = "Get featured in top publications with DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return OUTLETS.map((o) => ({ outlet: o.slug }));
}

export default async function Image({ params }: { params: Promise<{ outlet: string }> }) {
  const { outlet } = await params;
  const o = getOutlet(outlet);
  return renderOgCard({
    kicker: "GET FEATURED",
    lead: "Get featured in",
    highlight: o ? `${o.name}.` : "top publications.",
    sub: o?.subhead,
  });
}
