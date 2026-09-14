// First-published date for each guide, taken from the commit that added it to
// guides.ts. Every guide previously shared one hardcoded "9 August 2026", which
// was wrong for 59 of 74 and gave Google no per-page freshness signal.
// When you materially rewrite a guide, add its slug to GUIDE_UPDATED.
export const GUIDE_PUBLISHED: Record<string, string> = {
  "get-featured-in-forbes": "2026-08-09",
  "how-to-get-featured-on-msn": "2026-08-09",
  "how-to-get-featured-in-ceo-weekly": "2026-08-09",
  "how-to-get-featured-in-ny-weekly": "2026-08-09",
  "how-to-get-featured-in-womens-journal": "2026-08-09",
  "how-to-get-featured-in-healthcare-business-today": "2026-08-09",
  "how-to-get-featured-in-benzinga": "2026-08-09",
  "how-to-get-featured-in-yahoo-finance": "2026-08-09",
  "how-to-get-featured-in-fox-interviewer": "2026-08-09",
  "how-to-get-featured-in-usa-today": "2026-08-09",
  "how-to-get-featured-on-ap-news": "2026-08-09",
  "how-to-get-featured-in-la-wire": "2026-08-09",
  "how-to-get-featured-in-us-reporter": "2026-08-09",
  "how-to-get-featured-in-digital-journal": "2026-08-09",
  "how-to-get-featured-in-international-business-times": "2026-08-09",
  "how-much-does-a-pr-agency-cost": "2026-08-10",
  "how-much-does-it-cost-to-get-featured": "2026-08-10",
  "how-to-get-press-for-your-business": "2026-08-10",
  "how-to-get-featured-in-entrepreneur": "2026-08-12",
  "how-to-get-featured-in-business-insider": "2026-08-12",
  "how-to-get-featured-in-bloomberg": "2026-08-12",
  "how-to-get-featured-in-fast-company": "2026-08-12",
  "how-to-get-featured-in-inc": "2026-08-12",
  "how-to-get-press-for-your-startup": "2026-08-12",
  "how-to-get-press-for-your-saas-company": "2026-08-12",
  "how-to-get-press-as-a-coach": "2026-08-12",
  "how-to-get-press-as-a-consultant": "2026-08-12",
  "how-to-get-press-as-a-real-estate-agent": "2026-08-12",
  "how-to-get-press-as-an-attorney": "2026-08-12",
  "how-to-get-press-as-a-financial-advisor": "2026-08-12",
  "how-to-get-press-for-your-medical-practice": "2026-08-12",
  "how-to-get-press-for-your-ecommerce-brand": "2026-08-12",
  "how-to-get-press-as-an-author": "2026-08-12",
  "how-to-get-press-as-a-speaker": "2026-08-12",
  "how-to-build-a-personal-brand-with-press": "2026-08-12",
  "how-to-get-featured-on-apple-news": "2026-08-12",
  "how-to-get-featured-on-google-news": "2026-08-12",
  "how-to-get-featured-in-marketwatch": "2026-08-12",
  "what-does-chatgpt-say-about-your-business": "2026-08-12",
  "how-ai-engines-choose-sources": "2026-08-12",
  "what-is-earned-media": "2026-08-12",
  "is-guaranteed-pr-legit": "2026-08-12",
  "how-to-vet-a-pr-agency": "2026-08-12",
  "haro-alternatives": "2026-08-12",
  "how-to-get-featured-in-arabian-business": "2026-09-06",
  "how-to-get-featured-in-gulf-news": "2026-09-06",
  "how-to-get-featured-in-khaleej-times": "2026-09-06",
  "how-to-get-featured-in-esquire-middle-east": "2026-09-06",
  "how-to-get-featured-in-harpers-bazaar-arabia": "2026-09-06",
  "how-to-get-featured-in-grazia-middle-east": "2026-09-06",
  "how-to-get-featured-in-dubai-weekly": "2026-09-06",
  "how-to-get-featured-in-forbes-australia": "2026-09-06",
  "how-to-get-featured-in-rolling-stone-australia": "2026-09-06",
  "how-to-get-featured-in-variety-australia": "2026-09-06",
  "how-to-get-featured-in-mens-health-australia": "2026-09-06",
  "how-to-get-featured-in-harpers-bazaar-australia": "2026-09-06",
  "how-to-get-featured-in-smart-company-australia": "2026-09-06",
  "how-to-get-featured-in-canberra-times": "2026-09-06",
  "how-to-get-featured-in-australian-times": "2026-09-06",
  "how-to-get-featured-in-financial-post": "2026-09-06",
  "how-to-get-featured-in-national-post": "2026-09-06",
  "how-to-get-featured-in-toronto-sun": "2026-09-06",
  "how-to-get-featured-in-montreal-gazette": "2026-09-06",
  "how-to-get-featured-in-vancouver-sun": "2026-09-06",
  "how-to-get-featured-in-elle-canada": "2026-09-06",
  "how-to-get-featured-in-the-independent": "2026-09-06",
  "how-to-get-featured-in-rolling-stone-uk": "2026-09-06",
  "how-to-get-featured-in-elle-uk": "2026-09-06",
  "how-to-get-featured-in-hollywood-reporter": "2026-09-06",
  "how-to-get-featured-in-lawyers-weekly": "2026-09-06",
  "how-to-get-featured-in-market-daily": "2026-09-06",
  "how-to-get-featured-in-artist-weekly": "2026-09-06",
  "how-to-get-featured-in-famous-times": "2026-09-06",
  "how-to-get-featured-in-real-estate-today": "2026-09-06",
};

export const GUIDE_UPDATED: Record<string, string> = {};

export const FALLBACK_DATE = "2026-08-09";

export function guideDates(slug: string) {
  const published = GUIDE_PUBLISHED[slug] ?? FALLBACK_DATE;
  const modified = GUIDE_UPDATED[slug] ?? published;
  return { published, modified };
}

export function formatGuideDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
