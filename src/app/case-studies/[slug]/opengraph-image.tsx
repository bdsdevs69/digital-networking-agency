import { CASE_STUDIES, getCaseStudy } from "@/content/caseStudies";
import { renderOgCard } from "@/lib/ogCard";

export const alt = "Client case study from DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  return renderOgCard({
    kicker: "CASE STUDY",
    lead: c?.name ?? "Real clients.",
    highlight: c ? `Featured in ${c.outlet}.` : "Real features.",
    sub: c?.role,
  });
}
