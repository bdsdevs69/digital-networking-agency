import type { Metadata } from "next";
import { ArticlesPage } from "@/components/landing/ArticlesPage";
import { STANDARD } from "@/content/planPubs";

export const metadata: Metadata = {
  title: "Momentum Publications — DNA PR",
  robots: { index: false, follow: false }
};

export default function MomentumArticlesPage() {
  return (
    <ArticlesPage
      plan="Momentum"
      tagline="1 full Standard feature article every month — published across the Standard network below."
      tiers={[{ name: "Standard", detail: "1 feature every month", groups: STANDARD }]}
      perMonth={{ value: "1/mo", label: "Standard feature" }}
    />
  );
}
