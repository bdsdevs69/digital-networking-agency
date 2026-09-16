"use client";

import { useState } from "react";
import styles from "@/app/get-featured-in/getfeatured.module.css";

// Short enquiry form placed on the outlet pages themselves. Previously the only
// form on the site was /contact, so every outlet page handed its traffic off to
// another page before it could convert.
export function OutletForm({ outlet }: { outlet: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq?.("track", "Lead");
        (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
          "event",
          "generate_lead",
          { form: "outlet", outlet }
        );
        setStatus("done");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className={styles.formDone}>
        <h3>Thanks — that is with us.</h3>
        <p>
          We reply within 24 hours, usually sooner, and we will tell you honestly whether{" "}
          {outlet} is a realistic fit for your story.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.formBlock} onSubmit={onSubmit}>
      <input type="hidden" name="publications" value={outlet} />
      <input type="hidden" name="source" value={`get-featured-in/${outlet}`} />

      <div className={styles.formRow}>
        <label>
          <span className={styles.formCap}>
            Your name <em className={styles.formReq}>*</em>
          </span>
          <input type="text" name="first_name" required autoComplete="given-name" />
        </label>
        <label>
          <span className={styles.formCap}>
            Email <em className={styles.formReq}>*</em>
          </span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
      </div>

      <label>
        <span className={styles.formCap}>
          What is the story? <span className={styles.formHint}>A sentence is enough.</span>
        </span>
        <textarea name="message" rows={3} placeholder={`Why ${outlet}, and what you want people to know about you.`} />
      </label>

      <button type="submit" className={styles.formBtn} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : `Ask about ${outlet}`}{" "}
        <span aria-hidden="true">&rarr;</span>
      </button>

      {status === "error" ? (
        <p className={styles.formErr}>
          That did not send. Email{" "}
          <a href="mailto:sam@digitalnetworkingagency.com">sam@digitalnetworkingagency.com</a> and we
          will pick it up.
        </p>
      ) : (
        <p className={styles.formNote}>
          No obligation. We will tell you if {outlet} is the wrong fit for your story.
        </p>
      )}
    </form>
  );
}
