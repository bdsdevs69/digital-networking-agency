import type { Group } from "@/components/landing/ArticlesPage";

// Publication lists for the client plans. Each plan's "View articles" page is
// built from the tiers that plan actually includes:
//   Momentum  = Standard
//   Spotlight = Premier + Standard
//   Authority = Flagship + Premier + Standard

export const STANDARD: Group[] = [
  {
    category: "Power Network",
    pubs: [
      { name: "MSN", dr: 94, url: "https://msn.com" },
      { name: "Business Insider", dr: 92, url: "https://businessinsider.com" },
      { name: "TechBullion", dr: 81, url: "https://techbullion.com" },
      { name: "New York Weekly", dr: 74, url: "https://nyweekly.com" },
      { name: "Los Angeles Wire", dr: 64, url: "https://losangeleswire.com" },
      { name: "CEO Weekly", dr: 62, url: "https://ceoweekly.com" },
      { name: "Kivo Daily", dr: 62, url: "https://kivodaily.com" },
      { name: "US Reporter", dr: 59, url: "https://usreporter.com" }
    ]
  },
  {
    category: "National Publications",
    pubs: [
      { name: "Market Daily", dr: 59, url: "https://marketdaily.com" },
      { name: "Economic Insider", dr: 53, url: "https://economicinsider.com" },
      { name: "US Business News", dr: 52, url: "https://usbusinessnews.com" },
      { name: "Wall Street Times", dr: 52, url: "https://wallstreettimes.com" },
      { name: "World Reporter", dr: 51, url: "https://worldreporter.com" },
      { name: "Real Estate Today", dr: 50, url: "https://realestatetoday.com" },
      { name: "US Insider", dr: 49, url: "https://usinsider.com" },
      { name: "The American News", dr: 18, url: "https://theamericannews.com" }
    ]
  },
  {
    category: "Regional Publications",
    pubs: [
      { name: "Voyage New York", dr: 58, url: "https://voyagenewyork.com" },
      { name: "Miami Wire", dr: 57, url: "https://miamiwire.com" },
      { name: "San Francisco Post", dr: 57, url: "https://sanfranciscopost.com" },
      { name: "Atlanta Wire", dr: 56, url: "https://atlantawire.com" },
      { name: "The Chicago Journal", dr: 54, url: "https://thechicagojournal.com" },
      { name: "Portland News", dr: 53, url: "https://portlandnews.com" },
      { name: "Texas Today", dr: 53, url: "https://texastoday.com" },
      { name: "New York Wire", dr: 49, url: "https://newyorkwire.com" },
      { name: "California Gazette", dr: 27, url: "https://californiagazette.com" },
      { name: "California Observer", dr: 27, url: "https://californiaobserver.com" }
    ]
  },
  {
    category: "Niche & Specialty Publications",
    pubs: [
      { name: "Women's Journal", dr: 58, url: "https://womensjournal.com" },
      { name: "Luxury LA Mag", dr: 56, url: "https://luxurylamag.com" },
      { name: "Entertainment Post", dr: 55, url: "https://entertainmentpost.com" },
      { name: "Fox Interviewer", dr: 54, url: "https://foxinterviewer.com" },
      { name: "Artist Weekly", dr: 54, url: "https://artistweekly.com" },
      { name: "Music Observer", dr: 54, url: "https://musicobserver.com" },
      { name: "Celebrity News", dr: 53, url: "https://celebritynews.com" },
      { name: "Famous Times", dr: 52, url: "https://famoustimes.com" },
      { name: "BLK News", dr: 51, url: "https://blknews.com" },
      { name: "Net Worth", dr: 51, url: "https://networth.com" },
      { name: "Entertainment Monthly News", dr: 49, url: "https://entertainmentmonthlynews.com" },
      { name: "Influencer Daily", dr: 48, url: "https://influencerdaily.com" }
    ]
  }
];

export const PREMIER: Group[] = [
  {
    category: "Top-Tier & National",
    pubs: [
      { name: "Yahoo Finance", dr: 94, url: "https://finance.yahoo.com" },
      { name: "AP News", dr: 91, url: "https://apnews.com" },
      { name: "Benzinga", dr: 86, url: "https://benzinga.com" },
      { name: "Digital Journal", dr: 86, url: "https://digitaljournal.com" },
      { name: "IB Times (AP)", dr: 59, url: "https://ibtimes.com" },
      { name: "Apple News (via Grit Daily)", dr: 58, url: "https://apple.news" }
    ]
  },
  {
    category: "Business & Leadership",
    pubs: [
      { name: "CEO World Biz", dr: 63, url: "https://ceoworld.biz" },
      { name: "Grit Daily", dr: 60, url: "https://gritdaily.com" },
      { name: "CEO Official Magazine", dr: 54, url: "https://ceofficialmag.com" },
      { name: "Financial Tech Times", dr: 53, url: "https://financialtechtimes.com" }
    ]
  },
  {
    category: "Lifestyle & Wealth",
    pubs: [
      { name: "Distractify", dr: 62, url: "https://distractify.com" },
      { name: "NY Magazine", dr: 57, url: "https://ny-magazine.com" },
      { name: "Dubai Weekly", dr: 56, url: "https://dubaiweekly.com" },
      { name: "High Net Worth Magazine", dr: 55, url: "https://highnetworthmag.com" },
      { name: "Net Worth.US", dr: 52, url: "https://networth.us" }
    ]
  }
];

export const FLAGSHIP: Group[] = [
  {
    category: "Flagship & National",
    pubs: [
      { name: "Investing.com", dr: 94, url: "https://investing.com" },
      { name: "USA Today", dr: 92, url: "https://usatoday.com" },
      { name: "Galore Magazine", dr: 83, url: "https://galoremag.com" },
      { name: "OK Magazine", dr: 81, url: "https://okmagazine.com" },
      { name: "Radar Online", dr: 78, url: "https://radaronline.com" },
      { name: "Harper's Bazaar (Australia)", dr: 74, url: "https://harpersbazaar.com.au" },
      { name: "Rolling Stone (UK)", dr: 72, url: "https://rollingstone.co.uk" }
    ]
  },
  {
    category: "Forbes International",
    pubs: [
      { name: "Forbes Australia", dr: 82, url: "https://forbes.com.au", note: "+$1,000 add-on" },
      { name: "Forbes Mexico", dr: 80, url: "https://forbes.com.mx" },
      { name: "Forbes Türkiye", dr: 78, url: "https://forbes.com.tr" },
      { name: "Forbes Colombia", dr: 76, url: "https://forbes.co" },
      { name: "Forbes Ukraine", dr: 74, url: "https://forbes.ua" }
    ]
  }
];
