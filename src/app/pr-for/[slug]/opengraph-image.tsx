import { SERVICES, getService } from "@/content/services";
import { renderOgCard } from "@/lib/ogCard";

export const alt = "Industry PR services from DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  const h1 = s?.h1 ?? "PR by Industry";
  const m = h1.match(/^(PR for)\s+(.+)$/i);
  return renderOgCard({
    kicker: "PR BY INDUSTRY",
    lead: m ? m[1] : h1,
    highlight: m ? `${m[2]}.` : "",
    sub: s?.description,
  });
}
