"use client";

import { useState } from "react";

type Status = "idle" | "working" | "done" | "error";

export default function UnsubscribeButton({ u, t }: { u: string; t: string }) {
  const [status, setStatus] = useState<Status>(u && t ? "idle" : "error");
  const [message, setMessage] = useState(u && t ? "" : "This unsubscribe link is incomplete. Reply to the email and we'll remove you.");

  async function unsubscribe() {
    setStatus("working");
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ u, t }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("done");
      setMessage("Done. You won't get any more of these emails.");
    } catch (err) {
      setStatus("error");
      setMessage((err as Error).message + " Reply to the email and we'll remove you.");
    }
  }

  if (status === "done" || status === "error") {
    return <p style={{ margin: 0, font: "600 17px var(--f-body)", color: status === "done" ? "var(--lime)" : "var(--ink)" }}>{message}</p>;
  }

  return (
    <button
      type="button"
      onClick={unsubscribe}
      disabled={status === "working"}
      style={{
        background: "var(--lime)",
        color: "var(--lime-ink)",
        border: 0,
        borderRadius: "var(--r-sm)",
        padding: "15px 26px",
        font: "700 16px var(--f-body)",
        cursor: status === "working" ? "default" : "pointer",
        opacity: status === "working" ? 0.6 : 1,
      }}
    >
      {status === "working" ? "One moment..." : "Unsubscribe me"}
    </button>
  );
}
