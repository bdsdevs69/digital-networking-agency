import { OUTLETS } from "@/content/outlets";
import MERGED from "@/content/merged-guides.json";

// Each outlet used to have two pages: /get-featured-in/<slug> (with the
// enquiry form) and a long guide at /guides/<guideSlug>. They competed for
// the same searches — Search Console showed Google picking the guide, so the
// page with the form ranked lower or not at all (Forbes: guide 377
// impressions, outlet page 0). The guide content now lives on the outlet page
// and the guide URL permanently redirects there (see next.config.ts).
export const MERGED_GUIDE_TO_OUTLET: Record<string, string> = Object.fromEntries(
  OUTLETS.filter((o) => o.guideSlug).map((o) => [o.guideSlug as string, o.slug])
);

// Search Console showed the same split between each /pr-for/ industry page and
// its "how to get press as a ..." guide: only one of the pair ever ranked. The
// guide now renders on the industry page and its URL redirects there. A few
// overlapping guides were retired outright into the page that already covers
// them (merged-guides.json; next.config.ts reads the same file).
export const SERVICE_GUIDE: Record<string, string> = MERGED.service;
export const MERGED_GUIDE_TO_SERVICE: Record<string, string> = Object.fromEntries(
  Object.entries(SERVICE_GUIDE).map(([service, guide]) => [guide, service])
);
const RETIRED_GUIDE: Record<string, string> = MERGED.retired;

export const isMergedGuide = (slug: string) =>
  slug in MERGED_GUIDE_TO_OUTLET || slug in MERGED_GUIDE_TO_SERVICE || slug in RETIRED_GUIDE;

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

// Guides with no page of their own and no outlet page standing in for them in
// guide listings: their industry page or target page is listed in its own right.
export const isFoldedGuide = (slug: string) => slug in MERGED_GUIDE_TO_SERVICE || slug in RETIRED_GUIDE;

// Where a guide link should point once merges and retirements are applied.
export const guideHref = (slug: string) =>
  slug in MERGED_GUIDE_TO_OUTLET
    ? `/get-featured-in/${MERGED_GUIDE_TO_OUTLET[slug]}`
    : slug in MERGED_GUIDE_TO_SERVICE
      ? `/pr-for/${MERGED_GUIDE_TO_SERVICE[slug]}`
      : RETIRED_GUIDE[slug] ?? `/guides/${slug}`;
