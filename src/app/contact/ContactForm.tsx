"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./contact.module.css";

const ENDPOINT = "/api/contact";

function PillGroup({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <fieldset className={styles.pillset}>
      <legend>{label}</legend>
      <div className={styles.pills}>
        {options.map((opt) => (
          <label key={opt} className={styles.pill}>
            <input type="radio" name={name} value={opt} />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        // Meta Pixel only fired PageView, so ads and reporting could never see
        // an actual enquiry. Fire Lead on a confirmed submission only.
        (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq?.("track", "Lead");
        (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag?.(
          "event",
          "generate_lead",
          { form: "contact" }
        );
        form.reset();
        router.push("/thank-you");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className={styles.success}>
        <span className={styles.successMark} aria-hidden="true">
          <svg viewBox="0 0 52 52" width="60" height="60">
            <circle cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path d="M15 27l7 7 15-16" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2 className={styles.successTitle}>You&rsquo;re on the list.</h2>
        <p className={styles.successText}>
          Thanks for reaching out. We&rsquo;ll get back to you within 24 hours
          with the fastest path to your feature.
        </p>
        <button type="button" className={styles.successBtn} onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <label>
          First name <span className={styles.req}>*</span>
          <input type="text" name="first_name" required />
        </label>
        <label>
          Last name
          <input type="text" name="last_name" />
        </label>
      </div>

      <div className={styles.row}>
        <label>
          Email <span className={styles.req}>*</span>
          <input type="email" name="email" required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" />
        </label>
      </div>

      <label>
        Website or social profile
        <input type="text" name="website" placeholder="https://" />
      </label>

      <label>
        Publications you have in mind
        <input
          type="text"
          name="publications"
          placeholder={'e.g. Forbes, USA Today, or "recommend me"'}
        />
      </label>

      <PillGroup
        name="featuring"
        label="Who are we featuring?"
        options={["Personal", "Company", "Both"]}
      />
      <PillGroup
        name="budget"
        label="Budget in mind"
        options={["Under $1K", "$1K–$3K", "$3K–$10K", "$10K+", "Not sure yet"]}
      />
      <PillGroup
        name="timeline"
        label="Timeline"
        options={["ASAP", "Within a month", "1–3 months", "Just exploring"]}
      />

      <label>
        Anything else?
        <textarea name="message" rows={4} />
      </label>

      {/* honeypot: hidden from humans; bots fill it and get silently dropped */}
      <input
        type="text"
        name="company_hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request my feature"}
      </button>

      {status === "error" && (
        <p className={styles.errnote}>
          Something went wrong. Please email us at{" "}
          <a href="mailto:sam@digitalnetworkingagency.com">
            sam@digitalnetworkingagency.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
