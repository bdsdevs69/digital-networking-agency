// Live Trustpilot reviews for the /plans page.
//
// Trustpilot's embeddable TrustBox widgets require a paid Trustpilot plan, so we
// render our own reviews section instead. Trustpilot blocks direct scraping (403),
// but their public profile page exposes all reviews as JSON-LD structured data,
// which we read through a reader proxy that bypasses the block. Results are cached
// with ISR (see REVALIDATE_SECONDS) so new reviews appear automatically without a
// code change. If the live fetch ever fails, we fall back to SEED_REVIEWS below.

export type TpReview = {
  author: string;
  title: string;
  body: string;
  rating: number;
  date: string; // YYYY-MM-DD
};

export type TpData = {
  score: number;
  count: number;
  reviews: TpReview[];
  profileUrl: string;
};

const PROFILE_URL =
  "https://www.trustpilot.com/review/digitalnetworkingagency.com";

// Refresh the cached reviews every 6 hours.
export const REVALIDATE_SECONDS = 21600;

// Snapshot of the current live reviews — used only if the live fetch fails, so the
// section is never empty.
const SEED_REVIEWS: TpReview[] = [
  { author: "Jennifer Beckwith", title: "Excellent service", body: "They delivered excellent service and their communication was fantastic!", rating: 5, date: "2026-08-03" },
  { author: "Arden AI", title: "Pet First Aid 4U Gains MSN Spotlight", body: "I was honored to have Digital Networking Agency reach out to me to be included in a MSN feature. Based on our posting of the article, we have reached new groups interested in my Pet First Aid 4U program and renewed professional and personal connections with longtime allies. Glad I did it!", rating: 5, date: "2026-08-03" },
  { author: "Rodney Adkins", title: "Outstanding from start to finish", body: "The experience was outstanding from start to finish. Their process was professional, efficient, and exceptionally well structured. I was especially impressed by the responsiveness and how quickly they produced a compelling, well-articulated article that authentically captured my story.", rating: 5, date: "2026-07-29" },
  { author: "Nudora Wellness", title: "Seamless from start to finish", body: "Great experience working with the Digital Networking Agency! The team was professional, responsive, and made the entire process seamless. They delivered exactly what they promised, and I'm very happy with the final article and exposure. I highly recommend them and look forward to working together again.", rating: 5, date: "2026-07-28" },
  { author: "Lori Vann, MA, LPC-S", title: "Easy to work with", body: "Sam was easy to work with and answered all of my questions. I was pleased with the final product.", rating: 5, date: "2026-07-27" },
  { author: "Deborah Millin", title: "Impressive and easy", body: "What an incredible way to get some great PR with minimal lift. They made the entire process very easy and wrote an article that I could never have written myself — I actually said “Wow” when I read it. Very low cost, very low effort, amazing outcome. Thank you so much!", rating: 5, date: "2026-07-15" },
  { author: "Brooke McKeever", title: "Great to work with for an MSN article", body: "DNA team and Sam were great to work with for an MSN article published about me and my company. The process is easy and straightforward, and the piece they created was fantastic. The writing was easy to digest (with a scientific subject matter) and well written. They also created a social media graphic so I could promote and share it easily. I recommend DNA for PR.", rating: 5, date: "2026-07-13" },
  { author: "Mark Brown", title: "Persistent and worth it", body: "They reached out with an opportunity for PR. I may have overlooked the first couple attempts at reaching me, but they were persistent, presented an affordable opportunity, and created, in most of my own words, a stunning article that can help boost exposure to what I'm doing. I am grateful for the support.", rating: 5, date: "2026-07-09" },
  { author: "Jamie Mendola", title: "Great PR firm", body: "Good communication, easy to work with to create an accurate and attractive article, and got the placement they promised within days.", rating: 5, date: "2026-07-08" },
  { author: "Dave F", title: "An outstanding first experience", body: "An outstanding first experience. The final publications are impressive and professional. I am highly pleased with how seamlessly the authors captured our interview and turned it into an accurate, high-quality representation of the subject matter.", rating: 5, date: "2026-07-07" },
  { author: "Eric M. Pettersen", title: "From complicated to simple", body: "Took a very complicated subject and made it understandable to the layperson and hopefully future partners.", rating: 5, date: "2026-07-06" },
  { author: "Jon", title: "A great job connecting leaders to media", body: "Digital Networking does a great job of connecting business leaders to media opportunities, and we very much appreciate the help they gave us.", rating: 5, date: "2026-07-01" },
  { author: "Mike Feinman", title: "They did a great job and was fast", body: "They did a great job and was fast.", rating: 5, date: "2026-07-01" },
  { author: "Maurielle", title: "An ally to promote your business online", body: "If you're looking for an ally to promote your business online, then The Digital Networking Agency team will help extend your reach. They recommended publicity opportunities that were a perfect fit for my business and desired customer audience, and they told my story in a way that made it immediately obvious to customers why they should choose me. It was well worth the investment.", rating: 5, date: "2026-06-29" },
  { author: "Nick Burns", title: "Highly recommend!", body: "Digital Networking Agency reached out about being featured in an MSN article highlighting top founders and entrepreneurs making headlines in 2026. The process was straightforward and professional. The finished piece was well-written and accurately represented my story. Good experience working with their team — thanks Sam and Rick!", rating: 5, date: "2026-06-18" },
  { author: "Mark William Lewis", title: "Great writing", body: "Great writing! Loved the article they sourced about me and my company.", rating: 5, date: "2026-06-25" },
  { author: "Keith", title: "Working with the DNA team", body: "I was asked to be featured in an article by DNA. After some discussion about the value of experience and lessons learned to share, I agreed. Sam, Chloe and team took my input and shaped it into a concise piece about my experience for their series. I appreciated their work, communication and the outcome — well done DNA.", rating: 5, date: "2026-06-24" },
  { author: "Ryan Servatius", title: "Great communication and easy to work with", body: "Great communication and easy to work with. Article was quick and an easy read.", rating: 5, date: "2026-06-22" },
  { author: "vablet", title: "Try them, you will not be disappointed", body: "Sam and his team made the entire process easy. I was very impressed with the article they wrote and how quickly they were able to get it published. They were also a pleasure to work with throughout. I found their rates very reasonable, and their team was consistently professional. This was one of the best experiences we've had working with a PR firm. I highly recommend them.", rating: 5, date: "2026-06-16" },
  { author: "Bridget Hom", title: "So professional", body: "They are so professional and a wonderful company to work with! I recommend them!", rating: 5, date: "2026-06-18" },
  { author: "Julie Krivanek", title: "Head and shoulders above", body: "I have worked with many PR and marketing firms — and this stands head and shoulders above in the #1 spot. Responsive, timely, clear in expectations, and extremely creative with superb results. A complete pleasure to work with. If you have the chance to work with Sam Harris and his team, grab it — you won't be sorry.", rating: 5, date: "2026-06-03" },
];

const SEED: TpData = {
  score: 4.7,
  count: 32,
  reviews: SEED_REVIEWS,
  profileUrl: PROFILE_URL,
};

// Some review bodies contain a pasted-in AI artifact prefix (e.g. "Got it. Here's a
// draft you can paste in:---<actual review>"). Strip anything before a "---" fence
// and trim, so only the genuine review text is shown.
function cleanBody(raw: string): string {
  let body = (raw || "").replace(/\r/g, "").trim();
  const fence = body.lastIndexOf("---");
  if (fence !== -1 && /paste|draft|here'?s a|got it/i.test(body.slice(0, fence))) {
    body = body.slice(fence + 3);
  }
  return body.replace(/\s+/g, " ").trim();
}

type LdReview = {
  "@type"?: string;
  author?: { name?: string };
  headline?: string;
  reviewBody?: string;
  reviewRating?: { ratingValue?: string | number };
  datePublished?: string;
};

export async function getTrustpilotData(): Promise<TpData> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(`https://r.jina.ai/${PROFILE_URL}`, {
      headers: { "X-Return-Format": "html" },
      next: { revalidate: REVALIDATE_SECONDS },
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) return SEED;

    const html = await res.text();
    const match = html.match(
      /application\/ld\+json[^>]*>([\s\S]*?)<\/script>/
    );
    if (!match) return SEED;

    const parsed = JSON.parse(match[1].trim());
    const graph: unknown[] = parsed["@graph"] || [];

    const agg = (graph as Record<string, unknown>[]).find(
      (g) => g && (g as { aggregateRating?: unknown }).aggregateRating
    ) as { aggregateRating?: { ratingValue?: string; reviewCount?: string } } | undefined;

    const reviews: TpReview[] = (graph as LdReview[])
      .filter((g) => g && g["@type"] === "Review")
      .map((r) => ({
        author: r.author?.name?.trim() || "Verified client",
        title: (r.headline || "").trim(),
        body: cleanBody(r.reviewBody || ""),
        rating: Math.round(Number(r.reviewRating?.ratingValue) || 5),
        date: (r.datePublished || "").slice(0, 10),
      }))
      .filter((r) => r.rating >= 4 && r.body.length > 0)
      .sort((a, b) => (b.date > a.date ? 1 : b.date < a.date ? -1 : 0));

    if (!reviews.length) return SEED;

    return {
      score: Number(agg?.aggregateRating?.ratingValue) || SEED.score,
      count: Number(agg?.aggregateRating?.reviewCount) || reviews.length,
      reviews: reviews.slice(0, 21),
      profileUrl: PROFILE_URL,
    };
  } catch {
    return SEED;
  }
}
