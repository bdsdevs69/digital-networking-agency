import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Shared 1200x630 share card. Pages that set their own `openGraph` metadata
// replace the root one wholesale, which silently dropped og:image from 155 of
// 159 URLs. Every route segment now ships a file-based image built from this.
export const OG_SIZE = { width: 1200, height: 630 };

const FOOTER = "MSN · USA Today · Forbes · Entrepreneur · Yahoo Finance · 1,100+ outlets";

const LIME = "#CBFF00";
const INK = "#F5F5F2";
const MUTED = "#9B9BA1";

// Fonts and the lime logo are read once per server instance.
const asset = (f: string) => readFileSync(join(process.cwd(), "src/assets/og", f));
let cache: { display: Buffer; body: Buffer; bodyBold: Buffer; logo: string } | null = null;
function assets() {
  if (!cache) {
    cache = {
      display: asset("Archivo-800.ttf"),
      body: asset("InstrumentSans-500.ttf"),
      bodyBold: asset("InstrumentSans-600.ttf"),
      logo: `data:image/png;base64,${asset("dna-mark-lime.png").toString("base64")}`,
    };
  }
  return cache;
}

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
  const a = assets();
  const len = lead.length + highlight.length;
  const fontSize = len <= 36 ? 92 : len <= 56 ? 76 : len <= 80 ? 62 : 52;
  const line = {
    display: "flex",
    flexWrap: "wrap" as const,
    fontFamily: "Archivo",
    fontSize,
    fontWeight: 800,
    lineHeight: 0.98,
    letterSpacing: -fontSize * 0.04,
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
          padding: "60px 76px 56px",
          background: "#0B0B0C",
          backgroundImage:
            "radial-gradient(820px 560px at 92% -18%, rgba(203,255,0,0.24), rgba(203,255,0,0) 62%)",
          color: INK,
          fontFamily: "Instrument Sans",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={a.logo} width={108} height={50} alt="" />
          <div style={{ display: "flex", gap: 14, fontSize: 18, fontWeight: 600, letterSpacing: 4, color: LIME }}>
            <span>[</span>
            <span>{kicker}</span>
            <span>]</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={line}>{lead}</div>
          {highlight ? <div style={{ ...line, color: LIME }}>{highlight}</div> : null}
          {sub ? (
            <div style={{ display: "flex", fontSize: 28, lineHeight: 1.35, color: MUTED, marginTop: 28, maxWidth: 980 }}>
              {shorten(sub)}
            </div>
          ) : null}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 19, color: MUTED, whiteSpace: "nowrap" }}>
          <div style={{ display: "flex", width: 56, height: 5, borderRadius: 3, background: LIME }} />
          <div style={{ display: "flex", flex: 1 }}>{FOOTER}</div>
          <div style={{ display: "flex", fontWeight: 600, color: INK }}>digitalnetworkingagency.com</div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Archivo", data: a.display, weight: 800, style: "normal" },
        { name: "Instrument Sans", data: a.body, weight: 500, style: "normal" },
        { name: "Instrument Sans", data: a.bodyBold, weight: 600, style: "normal" },
      ],
    }
  );
}
