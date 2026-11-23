import type { Metadata } from "next";
import Link from "next/link";
import styles from "../legal.module.css";

const SITE = "https://www.digitalnetworkingagency.com";
const UPDATED = "12 August 2026";

export const metadata: Metadata = {
  title: "Privacy Policy | Digital Networking Agency",
  description:
    "How Digital Networking Agency collects, uses and protects the information you share with us through this website.",
  alternates: { canonical: `${SITE}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.crumbs}>
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Privacy Policy</span>
        </div>
        <h1 className={styles.h1}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: {UPDATED}</p>

        <div className={styles.body}>
          <p>
            This policy explains what information Digital Networking Agency LLC
            (&ldquo;DNA&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects
            through digitalnetworkingagency.com, why we collect it, and what we
            do with it.
          </p>

          <h2>Information you give us</h2>
          <p>
            When you submit our contact form we collect the details you choose
            to enter: your name, email address, phone number, website or social
            profile, the publications you are interested in, who the coverage is
            for, your budget range, your timeline and any message you write.
          </p>
          <p>
            We use this solely to respond to your enquiry and, if you become a
            client, to deliver the work. We do not sell your information, and we
            do not share it with third parties for their own marketing.
          </p>

          <h2>Information collected automatically</h2>
          <p>
            Like most websites, our hosting and analytics providers record
            standard technical information such as IP address, browser type,
            device type, referring page and the pages you view. This is used to
            keep the site running and to understand which content is useful.
          </p>
          <p>
            We use the Meta (Facebook) pixel to measure the performance of our
            advertising. It may set cookies and report activity back to Meta.
            You can control this through your browser settings and through your
            Meta ad preferences.
          </p>

          <h2>Service providers we use</h2>
          <ul>
            <li>
              <strong>Vercel</strong> &mdash; website hosting and delivery.
            </li>
            <li>
              <strong>Resend</strong> &mdash; delivers contact form submissions
              to our inbox by email.
            </li>
            <li>
              <strong>Meta</strong> &mdash; advertising measurement via the
              pixel described above.
            </li>
            <li>
              <strong>Trustpilot</strong> &mdash; we link to our public review
              profile. Reviews are hosted by Trustpilot, not by us.
            </li>
          </ul>
          <p>
            These providers process data on our behalf and are bound by their
            own privacy terms.
          </p>

          <h2>How long we keep it</h2>
          <p>
            Enquiry emails are retained in our business inbox so we have a
            record of the conversation. If you would like your enquiry deleted,
            email us and we will remove it.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us to access, correct or delete the personal information
            you have given us. You can also ask us to stop contacting you at any
            time. Email{" "}
            <a href="mailto:sam@digitalnetworkingagency.com">
              sam@digitalnetworkingagency.com
            </a>{" "}
            and we will action it.
          </p>
          <p>
            Depending on where you live, you may have additional rights under
            laws such as the GDPR or the CCPA, including the right to object to
            processing or to lodge a complaint with your local regulator.
          </p>

          <h2>Children</h2>
          <p>
            This site is intended for business use and is not directed at
            children under 13. We do not knowingly collect their information.
          </p>

          <h2>Changes</h2>
          <p>
            If we change this policy we will update the date at the top of this
            page.
          </p>

          <h2>Contact us</h2>
          <p>
            Digital Networking Agency LLC
            <br />
            6545 Market Ave N, Suite 100, Canton, OH 44721, United States
            <br />
            <a href="mailto:sam@digitalnetworkingagency.com">
              sam@digitalnetworkingagency.com
            </a>
            <br />
            <a href="tel:+13302276337">+1 (330) 227-6337</a>
          </p>
        </div>
      </div>
    </div>
  );
}
