import type { Metadata } from "next";
import { Intro } from "@/components/home/Intro";
import { HomeFAQ } from "@/components/landing/HomeFAQ";
import {
  Guides,
  HomeHero,
  KirkJourney,
  RootJourney,
  ClientVideos,
  Numbers,
  LogoMarquee,
  Process,
  Reviews,
  Services,
  WorkGrid
} from "@/components/home/HomeSections";

// Refresh the homepage every 6 hours.
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
      <ClientVideos />
      <KirkJourney />
      <RootJourney />
      <Process />
      <Services />
      <Reviews />
      <Guides />
      <HomeFAQ />
    </main>
  );
}
