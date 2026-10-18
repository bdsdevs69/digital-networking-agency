import type { Metadata } from "next";
import { ArticlesPage } from "@/components/landing/ArticlesPage";
import { FLAGSHIP, PREMIER, STANDARD } from "@/content/planPubs";

export const metadata: Metadata = {
  title: "Authority Publications — DNA PR",
  robots: { index: false, follow: false }
};

export default function AuthorityArticlesPage() {
  return (
    <ArticlesPage
      plan="Authority"
      tagline="1 Standard + 1 Premier feature every month, plus 1 Flagship feature within 3 months — across all three networks below."
      tiers={[
        { name: "Flagship", detail: "1 feature within 3 months", groups: FLAGSHIP },
        { name: "Premier", detail: "1 feature every month", groups: PREMIER },
        { name: "Standard", detail: "1 feature every month", groups: STANDARD },
      ]}
      perMonth={{ value: "2/mo", label: "+ 1 Flagship within 3 months" }}
    />
  );
}
