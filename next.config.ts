import type { NextConfig } from "next";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Guides for individual outlets were merged into their /get-featured-in/ page.
// Read the outlet ↔ guide pairs straight from the content file so the
// redirects can never drift from the data. Permanent (308) so ranking signals
// consolidate onto the outlet page.
function mergedGuideRedirects() {
  const src = readFileSync(join(process.cwd(), "src/content/outlets.ts"), "utf8");
  const pairs = [...src.matchAll(/\n\s+slug: "([^"]+)",\s*\n\s+guideSlug: "([^"]+)"/g)];
  return pairs.map(([, slug, guide]) => ({
    source: `/guides/${guide}`,
    destination: `/get-featured-in/${slug}`,
    permanent: true,
  }));
}

// Industry guides merged into their /pr-for/ page, and overlapping guides
// retired into the page that already covers them.
function serviceAndRetiredRedirects() {
  const merged = JSON.parse(readFileSync(join(process.cwd(), "src/content/merged-guides.json"), "utf8")) as {
    service: Record<string, string>;
    retired: Record<string, string>;
  };
  return [
    ...Object.entries(merged.service).map(([service, guide]) => ({
      source: `/guides/${guide}`,
      destination: `/pr-for/${service}`,
      permanent: true,
    })),
    ...Object.entries(merged.retired).map(([guide, destination]) => ({
      source: `/guides/${guide}`,
      destination,
      permanent: true,
    })),
  ];
}

const nextConfig: NextConfig = {
  async redirects() {
    return [...mergedGuideRedirects(), ...serviceAndRetiredRedirects()];
  },
};

export default nextConfig;
