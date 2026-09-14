import { renderOgCard } from "@/lib/ogCard";

export const alt = "Let's make headlines. — DNA PR";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    kicker: "CONTACT",
    lead: "Let's make",
    highlight: "headlines.",
    sub: "Tell us your story and where you want to be seen.",
  });
}
