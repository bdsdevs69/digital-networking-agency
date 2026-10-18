import type { Metadata } from "next";
import { ArticlesPage } from "@/components/landing/ArticlesPage";
import { PREMIER, STANDARD } from "@/content/planPubs";

export const metadata: Metadata = {
  title: "Spotlight Publications — DNA PR",
  robots: { index: false, follow: false }
};

export default function SpotlightArticlesPage() {
  return (
    <ArticlesPage
      plan="Spotlight"
      tagline="1 Standard + 1 Premier feature article every month — your Premier feature runs on a Premier outlet, your Standard feature on a Standard outlet."
      tiers={[
        { name: "Premier", detail: "1 feature every month", groups: PREMIER },
        { name: "Standard", detail: "1 feature every month", groups: STANDARD },
      ]}
      perMonth={{ value: "2/mo", label: "Standard + Premier features" }}
    />
  );
}
