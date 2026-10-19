import { OUTLETS } from "@/content/outlets";

// Each outlet used to have two pages: /get-featured-in/<slug> (with the
// enquiry form) and a long guide at /guides/<guideSlug>. They competed for
// the same searches — Search Console showed Google picking the guide, so the
// page with the form ranked lower or not at all (Forbes: guide 377
// impressions, outlet page 0). The guide content now lives on the outlet page
// and the guide URL permanently redirects there (see next.config.ts).
export const MERGED_GUIDE_TO_OUTLET: Record<string, string> = Object.fromEntries(
  OUTLETS.filter((o) => o.guideSlug).map((o) => [o.guideSlug as string, o.slug])
);

export const isMergedGuide = (slug: string) => slug in MERGED_GUIDE_TO_OUTLET;

// The guide's FAQ moves into the outlet page's own FAQ, so drop it from the body.
export function stripFaqSection(html: string): string {
  const i = html.indexOf('<h2 id="frequently-asked-questions"');
  return i === -1 ? html : html.slice(0, i);
}

// Links that would now point at the page they sit on are unwrapped to text.
export function unwrapSelfLinks(html: string, selfPath: string): string {
  const re = new RegExp(`<a href="${selfPath.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&")}">([\\s\\S]*?)</a>`, "g");
  return html.replace(re, "$1");
}

// Where a guide link should point: merged outlet guides go to the outlet page.
export const guideHref = (slug: string) =>
  isMergedGuide(slug) ? `/get-featured-in/${MERGED_GUIDE_TO_OUTLET[slug]}` : `/guides/${slug}`;
