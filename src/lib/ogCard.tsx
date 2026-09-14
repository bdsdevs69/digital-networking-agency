import { ImageResponse } from "next/og";

// Shared 1200x630 share card. Pages that set their own `openGraph` metadata
// replace the root one wholesale, which silently dropped og:image from 155 of
// 159 URLs. Every route segment now ships a file-based image built from this.
export const OG_SIZE = { width: 1200, height: 630 };

const FOOTER =
  "MSN · USA Today · Forbes · Entrepreneur · Yahoo Finance · 1,100+ outlets";

type Card = {
  kicker: string;
  lead: string;
  highlight?: string;
  sub?: string;
};

export function shorten(text: string, max = 96): string {
  const s = text.replace(/\s+/g, " ").trim();
  if (s.length <= max) return s;
  const cut = s.slice(0, max).lastIndexOf(" ");
  return s.slice(0, cut > 0 ? cut : max).replace(/[,;:.—-]+$/, "") + "…";
}

export function renderOgCard({ kicker, lead, highlight = "", sub = "" }: Card) {
  const len = lead.length + highlight.length;
  const fontSize = len <= 42 ? 76 : len <= 64 ? 64 : 52;
  const line = {
    display: "flex",
    flexWrap: "wrap" as const,
    fontSize,
    fontWeight: 800,
    lineHeight: 1.06,
    letterSpacing: -1,
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background: "#0f1015",
          backgroundImage:
            "radial-gradient(900px 520px at 82% -12%, rgba(143,255,0,0.26), transparent 60%), radial-gradient(760px 520px at -8% 120%, rgba(0,224,160,0.16), transparent 60%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 800, letterSpacing: 6, color: "#8FFF00" }}>
            DNA PR
          </div>
          <div style={{ display: "flex", fontSize: 19, letterSpacing: 6, color: "#9aa0aa" }}>
            {kicker}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={line}>{lead}</div>
          {highlight ? <div style={{ ...line, color: "#8FFF00" }}>{highlight}</div> : null}
          {sub ? (
            <div style={{ display: "flex", fontSize: 30, color: "#c8ccd2", marginTop: 26 }}>
              {shorten(sub)}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#aab0ba",
            letterSpacing: 1,
            borderTop: "1px solid rgba(143,255,0,0.25)",
            paddingTop: 24,
          }}
        >
          {FOOTER}
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
