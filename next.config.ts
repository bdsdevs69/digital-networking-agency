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

const nextConfig: NextConfig = {
  async redirects() {
    return mergedGuideRedirects();
  },
};

export default nextConfig;
