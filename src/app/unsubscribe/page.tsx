import type { Metadata } from "next";
import styles from "../guides/guides.module.css";
import UnsubscribeButton from "./UnsubscribeButton";

// Where the "Unsubscribe" link in client offer emails lands. The button posts to
// /api/unsubscribe, which tells the newsletter app to stop emailing this address.
// Kept out of search: it is only meaningful from a link in an email.
export const metadata: Metadata = {
  title: "Unsubscribe | Digital Networking Agency",
  description: "Stop receiving offer emails from Digital Networking Agency.",
  robots: { index: false, follow: false },
};

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ u?: string; t?: string }>;
}) {
  const { u = "", t = "" } = await searchParams;
  return (
    <div className={styles.page}>
      <main className={styles.wrap}>
        <header className={styles.header}>
          <h1>Unsubscribe</h1>
          <p className={styles.lede}>
            Click below and you won&apos;t get any more offer emails from Digital Networking Agency.
          </p>
          <UnsubscribeButton u={u} t={t} />
        </header>
      </main>
    </div>
  );
}
