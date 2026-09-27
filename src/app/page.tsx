import type { Metadata } from "next";
import { Intro } from "@/components/home/Intro";
import { HomeFAQ } from "@/components/landing/HomeFAQ";
import {
  Guides,
  HomeHero,
  KirkJourney,
  KrishanStory,
  Numbers,
  LogoMarquee,
  Process,
  Reviews,
  Services,
  WorkGrid
} from "@/components/home/HomeSections";

// Refresh the homepage (and its Trustpilot rating and reviews) every 6 hours.
export const revalidate = 21600;

// The homepage was the only route without a canonical.
export const metadata: Metadata = {
  alternates: { canonical: "https://www.digitalnetworkingagency.com" },
};

export default function Home() {
  return (
    <main>
      <Intro />
      <HomeHero />
      <LogoMarquee />
      <WorkGrid />
      <Numbers />
      <KrishanStory />
      <KirkJourney />
      <Process />
      <Services />
      <Reviews />
      <Guides />
      <HomeFAQ />
    </main>
  );
}
