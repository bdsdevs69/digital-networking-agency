import { renderOgCard } from "@/lib/ogCard";

export const alt = "PR terms, honestly defined. — DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({ kicker: "PR GLOSSARY", lead: "PR terms,", highlight: "honestly defined.", sub: "Advertorials, bylines, syndication, earned media and more." });
}
