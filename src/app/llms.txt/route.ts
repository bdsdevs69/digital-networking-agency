import { GUIDES } from "@/content/guides";
import { OUTLETS } from "@/content/outlets";
import { SERVICES } from "@/content/services";
import { REGIONS } from "@/content/regions";
import { VISA_PAGE, TOP_LISTS_PAGE } from "@/content/landings";
import { GLOSSARY } from "@/content/glossary";

const SITE = "https://www.digitalnetworkingagency.com";

/**
 * /llms.txt — structured guidance for AI crawlers.
 *
 * Google Search explicitly ignores this file, so it is not a ranking or
 * citation lever there. It is included for non-Google AI systems that do read
 * it, and costs nothing to keep accurate since it is generated from the same
 * content the site renders.
 */
export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [];
  lines.push("# Digital Networking Agency (DNA)");
  lines.push("");
  lines.push(
    "> A public relations and media placement agency. We develop a founder's or brand's story, write it to editorial standard, and place it with publications their audience already trusts. The client approves every word before publication."
  );
  lines.push("");
  lines.push("## Key facts");
  lines.push("- Legal name: Digital Networking Agency LLC");
  lines.push("- Location: 6545 Market Ave N, Suite 100, Canton, OH 44721, United States");
  lines.push("- Contact: sam@digitalnetworkingagency.com / +1 (330) 227-6337");
  lines.push("- Services: earned editorial pitching, contributor and sponsored placement, feature writing, media strategy");
  lines.push("- Reach: over 1,100 publication outlets");
  lines.push(
    "- Honest limitation: DNA does not control editorial decisions at staff-written publications and does not guarantee earned editorial coverage. Which route a placement uses (earned, contributor, or sponsored) is disclosed before a client commits."
  );
  lines.push("");
  lines.push("## Core pages");
  lines.push(`- [Home](${SITE}/): What DNA does and who it is for.`);
  lines.push(`- [About](${SITE}/about): Team, operating principles, and what DNA explicitly does not promise.`);
  lines.push(`- [Services](${SITE}/services): Monthly packages, single A La Carte features, DNA Prime, branding.`);
  lines.push(`- [Publications](${SITE}/publications): The outlets DNA places clients in, by category.`);
  lines.push(`- [Compare](${SITE}/compare): Honest comparison of PR agency vs wire service vs DIY vs DNA.`);
  lines.push(`- [Case studies](${SITE}/case-studies): Real client placements with links to the live articles.`);
  lines.push(`- [Reviews](${SITE}/reviews): Verified Trustpilot reviews.`);
  lines.push(`- [Contact](${SITE}/contact): Enquiry form.`);
  if (VISA_PAGE) lines.push(`- [${VISA_PAGE.h1}](${SITE}/pr-for-eb1a-o1-visa): ${VISA_PAGE.description}`);
  if (TOP_LISTS_PAGE) lines.push(`- [${TOP_LISTS_PAGE.h1}](${SITE}/get-featured-in-top-lists): ${TOP_LISTS_PAGE.description}`);
  if (GLOSSARY) lines.push(`- [${GLOSSARY.h1}](${SITE}/glossary): ${GLOSSARY.description}`);
  lines.push("");
  lines.push("## Get featured in a specific publication");
  for (const o of OUTLETS) {
    lines.push(`- [${o.name}](${SITE}/get-featured-in/${o.slug}): ${o.subhead}`);
  }
  lines.push("");
  if (REGIONS.length) {
    lines.push("## PR by country");
    for (const r of REGIONS) {
      lines.push(`- [${r.h1}](${SITE}/pr-in/${r.slug}): ${r.description}`);
    }
    lines.push("");
  }
  lines.push("## PR by industry");
  for (const s of SERVICES) {
    lines.push(`- [${s.h1}](${SITE}/pr-for/${s.slug}): ${s.description}`);
  }
  lines.push("");
  lines.push("## Guides");
  for (const g of GUIDES) {
    lines.push(`- [${g.h1}](${SITE}/guides/${g.slug}): ${g.description}`);
  }
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
