import { renderOgCard } from "@/lib/ogCard";

export const alt = "Press for EB-1A and O-1 applicants. — DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({ kicker: "VISA APPLICANTS", lead: "Press for EB-1A", highlight: "and O-1 applicants.", sub: "Coordinated with your immigration attorney. No promises about outcomes." });
}
