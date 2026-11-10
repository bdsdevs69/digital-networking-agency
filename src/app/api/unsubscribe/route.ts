import { NextResponse } from "next/server";

export const runtime = "edge";

// The newsletter app (a Google Apps Script web app in sam.harris@'s account) that owns
// the client list. Calling it from here, server to server, avoids Google's errors for
// visitors signed in to several Google accounts.
const APP_URL =
  process.env.NEWSLETTER_APP_URL ||
  "https://script.google.com/macros/s/AKfycbyHDngt34_oRuZ791aK5eRMW53UBSm1Fs7Yb0TEcrYwLJmPAsifJO-xbqFjs8lIEWq1GA/exec";

export async function POST(req: Request) {
  const { u, t } = await req.json().catch(() => ({}));
  if (!/^[\w-]+$/.test(u || "") || !/^[\w-]+$/.test(t || "")) {
    return NextResponse.json({ ok: false, error: "This unsubscribe link is not valid." }, { status: 400 });
  }
  try {
    // Apps Script answers a POST with a redirect to the result; fetch follows it.
    const res = await fetch(APP_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ action: "unsubscribe", u, t }),
    });
    const data = await res.json();
    if (!data.ok) return NextResponse.json({ ok: false, error: data.error || "Something went wrong." }, { status: 400 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "We couldn't reach the mailing list just now." }, { status: 502 });
  }
}
