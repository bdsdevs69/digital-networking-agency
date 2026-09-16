// Data for the short /get-featured-in/[outlet] landing pages.
// Each maps to an existing long guide under /guides for "Read the full guide".

export type Outlet = {
  slug: string; // /get-featured-in/<slug>
  guideSlug: string; // /guides/<guideSlug>
  name: string; // "USA Today"
  title: string; // meta title
  subhead: string; // hero subhead
  value: string; // hero value proposition
  about: string; // "About <outlet>"
  why: string; // "Why a feature here matters"
  audience: string; // short list of who it suits
};

export const OUTLETS: Outlet[] = [
  {
    slug: "forbes",
    guideSlug: "get-featured-in-forbes",
    name: "Forbes",
    title: "Get Featured in Forbes | Digital Networking Agency",
    subhead: "The name everyone recognises",
    value:
      "We develop your story and pitch it toward Forbes on your behalf. You approve every word before anything is submitted.",
    about:
      "Forbes is one of the most recognised business brands in the world, covering entrepreneurship, leadership, money and innovation for a global audience.",
    why:
      "A Forbes association is understood instantly, with no explanation needed. It carries weight with investors, partners and prospects long after they forget where they read it.",
    audience: "Founders, executives and established businesses.",
  },
  {
    slug: "msn",
    guideSlug: "how-to-get-featured-on-msn",
    name: "MSN",
    title: "Get Featured on MSN | Digital Networking Agency",
    subhead: "Mainstream reach through Microsoft",
    value:
      "We publish your story through outlets whose content reaches MSN. Real client features, in both solo and listicle formats.",
    about:
      "MSN is one of the largest news surfaces on the internet, sitting inside Microsoft Edge, the Windows feed and msn.com, carrying content from thousands of publishers.",
    why:
      "“As featured on MSN” is understood by anyone, mainstream and non-specialist. Your feature stays searchable and surfaces when someone looks you up.",
    audience: "Founders, brands and personal brands.",
  },
  {
    slug: "usa-today",
    guideSlug: "how-to-get-featured-in-usa-today",
    name: "USA Today",
    title: "Get Featured in USA Today | Digital Networking Agency",
    subhead: "Mainstream reach, national recognition",
    value:
      "We write a custom feature about you and manage the placement. You approve every word before it goes live.",
    about:
      "USA Today is one of America’s largest national publications, covering news, money, life, tech and travel for a broad general audience.",
    why:
      "A name every prospect, investor and client recognises instantly. It works as social proof for consumer brands, authors, speakers and public-facing experts.",
    audience: "Consumer brands, authors, speakers and public experts.",
  },
  {
    slug: "yahoo-finance",
    guideSlug: "how-to-get-featured-in-yahoo-finance",
    name: "Yahoo Finance",
    title: "Get Featured in Yahoo Finance | Digital Networking Agency",
    subhead: "One of the most-visited finance sites in the world",
    value:
      "We develop your story and place it with an outlet that reaches Yahoo Finance. We tell you exactly which route fits your business first.",
    about:
      "Yahoo Finance is a leading financial news and data platform carrying its own reporting alongside syndicated content from partner publishers and newswires.",
    why:
      "A recognised financial name that stays searchable and reads as credible to investors and a financially literate audience.",
    audience: "Founders raising, fintech and finance-facing brands.",
  },
  {
    slug: "benzinga",
    guideSlug: "how-to-get-featured-in-benzinga",
    name: "Benzinga",
    title: "Get Featured in Benzinga | Digital Networking Agency",
    subhead: "Where the finance audience reads",
    value:
      "We write your feature and manage the placement in Benzinga. You approve every word before it goes live.",
    about:
      "Benzinga is a fast-moving financial media brand read by investors, traders and a financially engaged audience.",
    why:
      "Valuable if you are raising, in fintech, or selling to people who take markets seriously. It carries credibility with a sceptical, detail-driven readership.",
    audience: "Fintech, finance and investor-facing founders.",
  },
  {
    slug: "ap-news",
    guideSlug: "how-to-get-featured-on-ap-news",
    name: "AP News",
    title: "Get Featured on AP News | Digital Networking Agency",
    subhead: "One of the most trusted names in news",
    value:
      "We write and distribute your release through a wire tier that reaches apnews.com. We confirm the tier before anything is paid.",
    about:
      "The Associated Press is a not-for-profit news cooperative whose content reaches thousands of outlets. apnews.com also carries distributed press releases.",
    why:
      "A recognised, trusted name that travels far through republication. We are straight about what a distributed release is, and what it is not.",
    audience: "Companies with a genuine announcement.",
  },
  {
    slug: "fox-interviewer",
    guideSlug: "how-to-get-featured-in-fox-interviewer",
    name: "Fox Interviewer",
    title: "Get Featured in Fox Interviewer | Digital Networking Agency",
    subhead: "An interview-led feature in your own words",
    value:
      "We develop and place your interview feature in Fox Interviewer. You approve every word before it goes live.",
    about:
      "Fox Interviewer is an independent digital publication with a strong interview and profile format. It is not affiliated with Fox News or Fox Corporation.",
    why:
      "The interview format lets your personality and expertise come through directly, which reads as more personal than a standard write-up.",
    audience: "Founders and experts with a story to tell.",
  },
  {
    slug: "ceo-weekly",
    guideSlug: "how-to-get-featured-in-ceo-weekly",
    name: "CEO Weekly",
    title: "Get Featured in CEO Weekly | Digital Networking Agency",
    subhead: "A precise, executive audience",
    value:
      "We write a dedicated feature about you and manage the placement in CEO Weekly. You approve every word before it goes live.",
    about:
      "CEO Weekly is a digital business publication focused on leadership, executives and the decisions behind companies.",
    why:
      "If you sell to executives, a precise audience is worth more than a bigger, irrelevant one. Your ideal reader is already here.",
    audience: "Executives, founders and business owners.",
  },
  {
    slug: "ny-weekly",
    guideSlug: "how-to-get-featured-in-ny-weekly",
    name: "NY Weekly",
    title: "Get Featured in NY Weekly | Digital Networking Agency",
    subhead: "A New York dateline that travels",
    value:
      "We develop and place a dedicated feature about you in NY Weekly. You approve every word before it goes live.",
    about:
      "NY Weekly is a digital publication covering business, culture and founders in and around New York.",
    why:
      "A New York association reads as serious to people who have never set foot there. It signals operating where the standard is high.",
    audience: "Founders and brands with a New York angle.",
  },
  {
    slug: "womens-journal",
    guideSlug: "how-to-get-featured-in-womens-journal",
    name: "Women's Journal",
    title: "Get Featured in Women's Journal | Digital Networking Agency",
    subhead: "Built for women founders and leaders",
    value:
      "We write a dedicated feature about you and manage the placement in Women’s Journal. You approve every word before it goes live.",
    about:
      "Women’s Journal is a digital publication covering business, wellness and leadership with a focus on women founders, executives and experts.",
    why:
      "Being in a publication built for your audience beats being lost in a general one. Its readers are already looking for the expertise you sell.",
    audience: "Women founders, coaches and executives.",
  },
  {
    slug: "healthcare-business-today",
    guideSlug: "how-to-get-featured-in-healthcare-business-today",
    name: "Healthcare Business Today",
    title: "Get Featured in Healthcare Business Today | DNA",
    subhead: "For healthcare and health-tech leaders",
    value:
      "We develop and place a feature about your work in Healthcare Business Today. You approve every word before it goes live.",
    about:
      "Healthcare Business Today covers the business of healthcare for providers, executives and health-tech founders.",
    why:
      "A targeted healthcare audience that takes clinical and operational credibility seriously. The right room for a health-focused story.",
    audience: "Providers, health-tech and medical practices.",
  },
  {
    slug: "digital-journal",
    guideSlug: "how-to-get-featured-in-digital-journal",
    name: "Digital Journal",
    title: "Get Featured in Digital Journal | Digital Networking Agency",
    subhead: "For tech and innovation stories",
    value:
      "We write and place a feature about your work in Digital Journal. You approve every word before it goes live.",
    about:
      "Digital Journal is a long-running publication covering technology, business and innovation for a professional readership.",
    why:
      "An audience that follows how industries change and reads past the headline. Room to make a real case, not just a slogan.",
    audience: "Tech founders and innovation-led companies.",
  },
  {
    slug: "la-wire",
    guideSlug: "how-to-get-featured-in-la-wire",
    name: "LA Wire",
    title: "Get Featured in LA Wire | Digital Networking Agency",
    subhead: "A West Coast dateline",
    value:
      "We develop and place a dedicated feature about you in LA Wire. You approve every word before it goes live.",
    about:
      "LA Wire is a digital publication covering business, culture and founders through a Los Angeles lens.",
    why:
      "A Los Angeles association frames you differently, especially if you sell to consumers or work anywhere near culture.",
    audience: "Consumer, creative and West Coast brands.",
  },
  {
    slug: "us-reporter",
    guideSlug: "how-to-get-featured-in-us-reporter",
    name: "US Reporter",
    title: "Get Featured in US Reporter | Digital Networking Agency",
    subhead: "National framing for a national audience",
    value:
      "We write and place a dedicated feature about you in US Reporter. You approve every word before it goes live.",
    about:
      "US Reporter is an independent digital publication covering business and human-interest stories across the United States.",
    why:
      "A national frame suits founders whose audience is not tied to one city. It works as a general-purpose credibility asset.",
    audience: "Founders with a nationwide audience.",
  },
  {
    slug: "international-business-times",
    guideSlug: "how-to-get-featured-in-international-business-times",
    name: "International Business Times",
    title: "Get Featured in IBTimes | Digital Networking Agency",
    subhead: "For a market that crosses borders",
    value:
      "We develop and place a feature about you in International Business Times. You approve every word before it goes live.",
    about:
      "International Business Times covers business, markets and economics with a global outlook across several regional editions.",
    why:
      "Cross-border credibility is harder to build and worth more when you have it. The right frame for global ambitions.",
    audience: "Companies with international reach.",
  },
  {
    slug: "entrepreneur",
    guideSlug: "how-to-get-featured-in-entrepreneur",
    name: "Entrepreneur",
    title: "Get Featured in Entrepreneur Magazine | DNA PR",
    subhead: "The title founders name without thinking",
    value:
      "We develop your story and pitch it toward Entrepreneur on your behalf. You approve every word before anything is submitted.",
    about:
      "Entrepreneur has covered startups, small business and founder stories since 1977, reaching an audience of operators and business owners across its magazine and entrepreneur.com.",
    why:
      "Its readers are founders and operators, so a feature reaches people who might actually buy from you — not just people impressed by the logo. Recognised instantly, and specific enough to mean something.",
    audience: "Founders, operators and small-business owners.",
  },
  {
    slug: "business-insider",
    guideSlug: "how-to-get-featured-in-business-insider",
    name: "Business Insider",
    title: "Get Featured in Business Insider | Digital Networking Agency",
    subhead: "Hard to get, and worth it for that reason",
    value:
      "We build the story and the press record that make coverage at this level plausible, then pitch on your behalf. We are honest with you about the odds before we start.",
    about:
      "Business Insider is one of the most-read business publications in the world, written by its own newsroom and covering companies, markets, tech and careers for business decision-makers.",
    why:
      "Because it is genuinely difficult. A Business Insider mention signals that a working journalist judged your story worth telling — and its readers are the people in a position to act on it.",
    audience: "Founders and executives with a substantive, evidenced story.",
  },
  {
    slug: "bloomberg",
    guideSlug: "how-to-get-featured-in-bloomberg",
    name: "Bloomberg",
    title: "Get Featured in Bloomberg | Digital Networking Agency",
    subhead: "The top of the financial media stack",
    value:
      "We build the press record and positioning that make top-tier financial coverage possible. We will also tell you honestly whether Bloomberg is realistic for your business.",
    about:
      "Bloomberg is a global financial news organisation covering markets, capital and the economy for investors and finance professionals.",
    why:
      "Few names carry more weight with investors. Coverage here signals genuine financial significance — which is exactly why it cannot be bought.",
    audience: "Companies with real financial or market significance.",
  },
  {
    slug: "fast-company",
    guideSlug: "how-to-get-featured-in-fast-company",
    name: "Fast Company",
    title: "Get Featured in Fast Company | Digital Networking Agency",
    subhead: "For the idea, not the announcement",
    value:
      "We shape the idea inside your business into a story that reads like an argument rather than an advertisement, then pitch it where it fits.",
    about:
      "Fast Company covers innovation, design, sustainability, leadership and the future of work, and is known for its annual lists recognising innovative companies and people.",
    why:
      "Its readers are creative and strategic professionals. A feature here frames you as someone doing something structurally different, not just successfully.",
    audience: "Innovative, design-led and future-of-work businesses.",
  },
  {
    slug: "inc",
    guideSlug: "how-to-get-featured-in-inc",
    name: "Inc.",
    title: "Get Featured in Inc. Magazine | Digital Networking Agency",
    subhead: "Written for founders, read by founders",
    value:
      "We find the lesson inside your business and build it into a piece written to editorial standard. You approve every word before anything is submitted.",
    about:
      "Inc. has covered entrepreneurs and growing companies for decades, spanning growth, hiring, leadership and funding, and is known for the Inc. 5000 ranking.",
    why:
      "Its audience is founders and operators, so the coverage reaches actual peers and buyers rather than a general audience. Commercially useful, not just flattering.",
    audience: "Founders and growing private companies.",
  },
  {
    slug: "apple-news",
    guideSlug: "how-to-get-featured-on-apple-news",
    name: "Apple News",
    title: "Get Featured on Apple News | Digital Networking Agency",
    subhead: "Reach through the app on every iPhone",
    value:
      "Apple News carries content from publishers, so the route in is a feature with a publication that syndicates there. We place the story and tell you honestly how syndication works.",
    about:
      "Apple News is a news aggregation app built into iPhone, iPad and Mac, surfacing content from publishers who distribute through it alongside Apple's own editorial curation.",
    why:
      "Enormous built-in distribution on devices people already carry. Worth understanding clearly: appearing there generally means your article ran in a publication that feeds Apple News.",
    audience: "Consumer brands and founders after mainstream reach.",
  },
  {
    slug: "google-news",
    guideSlug: "how-to-get-featured-on-google-news",
    name: "Google News",
    title: "Get Featured on Google News | Digital Networking Agency",
    subhead: "Where people look when they search your name",
    value:
      "Google News surfaces articles from sites it already indexes, so the route in is being published on one of them. We handle the placement and explain exactly how it works.",
    about:
      "Google News aggregates coverage from publishers across the web, surfacing it in the News tab, the Google News app and news carousels in search results.",
    why:
      "It is where coverage about you shows up when someone searches your name. A permanent, indexed article keeps working long after publication.",
    audience: "Anyone whose buyers research them before committing.",
  },
  {
    slug: "marketwatch",
    guideSlug: "how-to-get-featured-in-marketwatch",
    name: "MarketWatch",
    title: "Get Featured in MarketWatch | Digital Networking Agency",
    subhead: "Financial media, staff-written",
    value:
      "We build the press record and positioning that make top-tier financial coverage plausible, and tell you honestly whether MarketWatch is realistic for your business.",
    about:
      "MarketWatch is a financial news site owned by Dow Jones, covering markets, investing and personal finance for an audience that follows money closely.",
    why:
      "Dow Jones credibility with a retail-investor and finance-literate readership. Like its stablemates it is staff-written, which is exactly why coverage there carries weight.",
    audience: "Finance-facing companies with a substantive story.",
  },
  {
    slug: "arabian-business",
    guideSlug: "how-to-get-featured-in-arabian-business",
    name: "Arabian Business",
    title: "Get Featured in Arabian Business | Digital Networking Agency",
    subhead: "Business recognition across the Gulf region",
    value: "We develop your story and pitch it toward Arabian Business on your behalf. You approve every word before anything is submitted.",
    about: "Arabian Business is a regional business title covering companies, markets, property, technology and the people running them across the Gulf.",
    why: "Coverage in a regional business masthead is understood immediately by partners, investors and buyers in the Gulf, and it signals that you actually operate here.",
    audience: "Founders, executives and businesses with a Gulf presence.",
  },
  {
    slug: "gulf-news",
    guideSlug: "how-to-get-featured-in-gulf-news",
    name: "Gulf News",
    title: "Get Featured in Gulf News | Digital Networking Agency",
    subhead: "A long-running UAE daily newspaper",
    value: "We build the story and the press record that make a masthead pitch credible, then pitch the right desk. Nothing goes out without your approval.",
    about: "Gulf News is an established English-language daily in the UAE, publishing in print and online across news, business, property and life in the Emirates.",
    why: "A decades-old daily is trusted differently from a new website, and its general readership reaches customers, hires and partners at the same time.",
    audience: "Businesses and experts with a genuine UAE angle.",
  },
  {
    slug: "khaleej-times",
    guideSlug: "how-to-get-featured-in-khaleej-times",
    name: "Khaleej Times",
    title: "Get Featured in Khaleej Times | Digital Networking Agency",
    subhead: "One of the UAE's oldest English dailies",
    value: "We shape the angle, write to editorial standard and pitch the desk that fits. You review everything before it is submitted.",
    about: "Khaleej Times is a long-established UAE daily covering national news, business, technology, property and lifestyle in print and online.",
    why: "Its largely expatriate readership makes practical decisions daily, so coverage reaches residents, employees and business owners across the country at once.",
    audience: "Founders and businesses operating in the Emirates.",
  },
  {
    slug: "esquire-middle-east",
    guideSlug: "how-to-get-featured-in-esquire-middle-east",
    name: "Esquire Middle East",
    title: "Get Featured in Esquire Middle East | Digital Networking Agency",
    subhead: "Men's culture, edited for the region",
    value: "We develop the angle and position it with the right editor, and we tell you plainly which route any opportunity actually is.",
    about: "Esquire Middle East is a licensed regional edition of the Esquire brand, published locally with its own editorial team. It is editorially separate from Esquire US.",
    why: "It reaches an affluent, international regional readership in style, luxury and culture — and it is a genuine credential when described by its correct name.",
    audience: "Lifestyle, luxury, hospitality and culture figures.",
  },
  {
    slug: "harpers-bazaar-arabia",
    guideSlug: "how-to-get-featured-in-harpers-bazaar-arabia",
    name: "Harper's Bazaar Arabia",
    title: "Get Featured in Harper's Bazaar Arabia | Digital Networking Agency",
    subhead: "Regional fashion, beauty and luxury coverage",
    value: "We build the positioning, the story and the assets around it, then pitch where the fit is real. You approve everything first.",
    about: "Harper's Bazaar Arabia is a licensed regional edition of Harper's Bazaar, published locally with its own editors. It is separate from the US and UK editions.",
    why: "Luxury, fashion and society coverage is read closely in this market, and a regional feature reaches buyers, retailers and event bookers who are actually here.",
    audience: "Designers, luxury brands, artists and founders.",
  },
  {
    slug: "grazia-middle-east",
    guideSlug: "how-to-get-featured-in-grazia-middle-east",
    name: "Grazia Middle East",
    title: "Get Featured in Grazia Middle East | Digital Networking Agency",
    subhead: "Fast-moving fashion and culture in the Gulf",
    value: "We shape a timely angle, prepare the assets and pitch the right editor at the right moment. Nothing publishes without your sign-off.",
    about: "Grazia Middle East is a licensed regional edition of Grazia, produced locally with its own editorial team. It is separate from the European parent editions.",
    why: "It reaches consumer readers in the region's cities quickly, which matters for brands whose buyers are in the Gulf rather than abroad.",
    audience: "Consumer, beauty, fashion and wellness brands.",
  },
  {
    slug: "dubai-weekly",
    guideSlug: "how-to-get-featured-in-dubai-weekly",
    name: "Dubai Weekly",
    title: "Get Featured in Dubai Weekly | Digital Networking Agency",
    subhead: "A Dubai dateline that stays searchable",
    value: "We write a dedicated feature about you and manage the placement. You revise until it is right, and nothing goes live without your approval.",
    about: "Dubai Weekly is a smaller regional digital publication covering business, entrepreneurship and life in the emirate, published online and indexed by search engines.",
    why: "A Dubai dateline signals international ambition and regional presence, and the article stays permanently searchable when someone looks you up.",
    audience: "Founders and brands building a Gulf profile.",
  },
  {
    slug: "forbes-australia",
    guideSlug: "how-to-get-featured-in-forbes-australia",
    name: "Forbes Australia",
    title: "Get Featured in Forbes Australia | Digital Networking Agency",
    subhead: "The Australian edition, not Forbes US",
    value: "We develop your Australian business story and pitch it toward Forbes Australia on your behalf. You approve every word before anything is submitted, and we are clear that earned editorial is never guaranteed.",
    about: "Forbes Australia is a licensed Australian edition of Forbes, produced here with its own editorial team covering local founders, investors, companies and the money moving around them.",
    why: "The Forbes name is recognised instantly, and the Australian edition reaches the local investors, partners and buyers who actually matter to an Australian business. It is worth being precise about which edition ran the piece.",
    audience: "Australian founders, executives and established local businesses.",
  },
  {
    slug: "rolling-stone-australia",
    guideSlug: "how-to-get-featured-in-rolling-stone-australia",
    name: "Rolling Stone Australia",
    title: "Get Featured in Rolling Stone Australia | Digital Networking Agency",
    subhead: "Australia's edition of a cultural institution",
    value: "We shape the cultural story and pitch it to the right writer. If your story is not genuinely a music or culture story, we will tell you before you spend anything.",
    about: "Rolling Stone Australia is a licensed Australian edition with its own editorial team covering local music, artists, festivals, screen and culture, editorially separate from the US magazine.",
    why: "Few mastheads carry the same cultural authority. For artists and creative brands, coverage here reaches an audience that takes the recommendation seriously and keeps working long afterwards.",
    audience: "Artists, labels, festivals and creative brands.",
  },
  {
    slug: "variety-australia",
    guideSlug: "how-to-get-featured-in-variety-australia",
    name: "Variety Australia",
    title: "Get Featured in Variety Australia | Digital Networking Agency",
    subhead: "The screen trade, read locally",
    value: "We help build the story and the wider press record around your screen project. For trade announcements themselves, a specialist screen publicist is often the better call, and we will say so.",
    about: "Variety Australia is a licensed Australian edition of the entertainment trade, covering local production, commissioning, distribution, festivals and talent for people working in the industry.",
    why: "Trade coverage reaches commissioners, distributors, financiers and agents rather than general readers. That is a small audience, and for a screen business it is the one that decides things.",
    audience: "Production companies, distributors, festivals and screen talent.",
  },
  {
    slug: "mens-health-australia",
    guideSlug: "how-to-get-featured-in-mens-health-australia",
    name: "Men's Health Australia",
    title: "Get Featured in Men's Health Australia | Digital Networking Agency",
    subhead: "Australia's edition, its own editorial team",
    value: "We shape a health or performance angle that stands up to scrutiny and pitch the editors who cover it. We will not pitch a claim your credentials do not support.",
    about: "Men's Health Australia is a licensed Australian edition covering training, nutrition, recovery, mental health and men's lifestyle for an Australian readership, with its own local editorial team.",
    why: "A trusted consumer health title puts you in front of a large, engaged audience, and a named expert quote there carries weight with clients long after the issue has passed.",
    audience: "Coaches, clinicians, health founders and performance experts.",
  },
  {
    slug: "harpers-bazaar-australia",
    guideSlug: "how-to-get-featured-in-harpers-bazaar-australia",
    name: "Harper's Bazaar Australia",
    title: "Get Featured in Harper's Bazaar Australia | Digital Networking Agency",
    subhead: "The Australian edition of a global fashion masthead",
    value: "We build the angle and the assets a fashion desk expects, then pitch the Australian edition. You approve everything first, and we never promise an editor's decision.",
    about: "Harper's Bazaar Australia is a licensed Australian edition of the international Harper's Bazaar title, produced by an Australian editorial team covering fashion, beauty, luxury and culture for Australian readers. It is editorially separate from the US and UK editions.",
    why: "A fashion masthead confers a kind of credibility business titles cannot. It reaches the buyers, stylists, editors and customers who decide whether a brand is taken seriously in this market.",
    audience: "Fashion, jewellery, beauty and luxury lifestyle brands.",
  },
  {
    slug: "smartcompany",
    guideSlug: "how-to-get-featured-in-smart-company-australia",
    name: "SmartCompany",
    title: "Get Featured in SmartCompany | Digital Networking Agency",
    subhead: "Australian business news for founders and operators",
    value: "We find the operational story inside your business, write it to an Australian business desk's standard and pitch it. Publication remains the newsroom's decision.",
    about: "SmartCompany is an Australian online business publication with a staff newsroom, covering startups, small and medium enterprises, funding, workplace change, tax and the policy decisions that affect business owners.",
    why: "Its readers are Australian operators, buyers and founders. Coverage here reads as genuine business credibility rather than general publicity, because the newsroom writes its own stories.",
    audience: "Australian founders, SMEs and startup teams.",
  },
  {
    slug: "canberra-times",
    guideSlug: "how-to-get-featured-in-canberra-times",
    name: "The Canberra Times",
    title: "Get Featured in The Canberra Times | Digital Networking Agency",
    subhead: "An established Australian daily with its own newsroom",
    value: "We develop the regional angle and pitch it properly. We do not sell placements in staff-written newspapers, and we will tell you when the story is not ready.",
    about: "The Canberra Times is a long-established Australian daily newspaper serving Canberra and the surrounding region in print and online, with its own journalists covering news, politics, courts, business and community life.",
    why: "Coverage in an established daily carries a weight digital-only titles do not, and it is often picked up elsewhere. It is earned editorial only, which is exactly why it counts.",
    audience: "Businesses and organisations with a real regional presence.",
  },
  {
    slug: "australian-times",
    guideSlug: "how-to-get-featured-in-australian-times",
    name: "Australian Times",
    title: "Get Featured in Australian Times | Digital Networking Agency",
    subhead: "Written for Australians living overseas",
    value: "We write a custom feature about you and manage the placement. You review and revise until it is right, and nothing publishes without your approval.",
    about: "Australian Times is a digital publication written for Australians abroad and readers connected to Australia, covering news, business, lifestyle, travel and the practicalities of living between two countries.",
    why: "A permanently indexed feature aimed at a mobile, cross-border readership. It suits businesses whose customers sit on the seam between Australia and somewhere else.",
    audience: "Cross-border founders, relocation, finance and travel brands.",
  },
  {
    slug: "financial-post",
    guideSlug: "how-to-get-featured-in-financial-post",
    name: "Financial Post",
    title: "Get Featured in the Financial Post | Digital Networking Agency",
    subhead: "Canadian business journalism at the top",
    value: "We build the story and the press record that make Canadian business coverage plausible. We will also tell you honestly whether the Financial Post is realistic for your business.",
    about: "The Financial Post is a Canadian business and financial news brand covering markets, the economy, corporate news, energy, real estate and personal finance, written by staff journalists.",
    why: "A mention here reads as financial credibility to Canadian investors, partners and regulators. It is earned rather than bought, which is exactly why it carries weight.",
    audience: "Founders and companies with real financial or economic significance in Canada.",
  },
  {
    slug: "national-post",
    guideSlug: "how-to-get-featured-in-national-post",
    name: "National Post",
    title: "Get Featured in the National Post | Digital Networking Agency",
    subhead: "A national voice across Canada",
    value: "We develop the argument or story inside your business and build the record that makes a national pitch credible. Editorial coverage is a newsroom decision, and we say so.",
    about: "The National Post is a Canadian national daily covering news, federal politics, business, culture and opinion for readers across the country.",
    why: "National recognition, and a comment section that reaches decision-makers. Coverage here signals that an editor judged your point worth publishing.",
    audience: "Founders and experts with a national story or a genuine argument to make.",
  },
  {
    slug: "toronto-sun",
    guideSlug: "how-to-get-featured-in-toronto-sun",
    name: "Toronto Sun",
    title: "Get Featured in the Toronto Sun | Digital Networking Agency",
    subhead: "Toronto's plain-spoken daily city paper",
    value: "We find the angle a Toronto city desk would actually take and build the story around it. Local coverage is earned, and we are candid about that.",
    about: "The Toronto Sun is a long-running Toronto newspaper covering city news, politics, crime, sport and entertainment in a direct, populist style.",
    why: "It reaches ordinary Torontonians rather than specialists, which makes it valuable for consumer-facing businesses with a real presence in the city.",
    audience: "Local businesses, consumer brands and founders with a genuine Toronto story.",
  },
  {
    slug: "montreal-gazette",
    guideSlug: "how-to-get-featured-in-montreal-gazette",
    name: "Montreal Gazette",
    title: "Get Featured in the Montreal Gazette | Digital Networking Agency",
    subhead: "Montreal's English-language daily newspaper, locally reported",
    value: "We shape a story a Montreal desk would recognise as local news, and tell you plainly where English coverage reaches and where it does not.",
    about: "The Montreal Gazette is Montreal's established English-language daily newspaper, covering Quebec news, politics, business and culture with a staff newsroom.",
    why: "Strong local credibility in a bilingual market. A genuine Montreal angle competes in a far smaller field than a national pitch.",
    audience: "Businesses, founders and organisations with a real Montreal or Quebec presence.",
  },
  {
    slug: "vancouver-sun",
    guideSlug: "how-to-get-featured-in-vancouver-sun",
    name: "Vancouver Sun",
    title: "Get Featured in the Vancouver Sun | Digital Networking Agency",
    subhead: "Vancouver and British Columbia coverage",
    value: "We identify the angle a BC desk would treat as a story and build the press record behind it. We will say when a masthead is not realistic yet.",
    about: "The Vancouver Sun is a long-established daily covering Vancouver and British Columbia news, politics, business, housing and culture with staff journalists.",
    why: "Local relevance is the strongest hook there is. Coverage here reaches BC customers, employers and decision-makers directly.",
    audience: "Founders and organisations with a genuine British Columbia connection.",
  },
  {
    slug: "elle-canada",
    guideSlug: "how-to-get-featured-in-elle-canada",
    name: "Elle Canada",
    title: "Get Featured in Elle Canada | Digital Networking Agency",
    subhead: "Fashion and beauty, edited in Canada",
    value: "We develop the story and the press record behind a brand, and are straight with you about what consumer fashion and beauty press actually takes.",
    about: "Elle Canada is the licensed Canadian edition of the international Elle brand, editorially separate from other editions, covering fashion, beauty and women's lifestyle.",
    why: "It reaches a Canadian fashion and beauty readership that acts on what it reads, and editorial recommendations there carry real weight with that audience.",
    audience: "Beauty and fashion brands, designers and consumer lifestyle founders.",
  },
  {
    slug: "independent",
    guideSlug: "how-to-get-featured-in-the-independent",
    name: "The Independent",
    title: "Get Featured in The Independent | Digital Networking Agency",
    subhead: "A UK national newsroom, earned not bought",
    value: "We build the story and the press record that make national coverage plausible, and tell you honestly whether The Independent is realistic for you.",
    about: "The Independent is a UK national news organisation with its own newsroom, covering news, politics, business, culture and lifestyle for a large British and international readership.",
    why: "A national masthead applies real editorial judgement, so a mention signals that a working journalist thought your story was worth the space. There is no contributor route to buy.",
    audience: "UK-facing businesses and experts with a substantive story.",
  },
  {
    slug: "rolling-stone-uk",
    guideSlug: "how-to-get-featured-in-rolling-stone-uk",
    name: "Rolling Stone UK",
    title: "Get Featured in Rolling Stone UK | Digital Networking Agency",
    subhead: "Music and culture, British edition",
    value: "We develop the angle and pitch where we have genuine reach. We will always tell you which edition of a licensed title we are talking about.",
    about: "Rolling Stone UK is a licensed British edition of the Rolling Stone brand, with its own editorial team covering music, film, television and culture for a UK audience.",
    why: "It reaches a British music and culture readership under a name everyone recognises. It is editorially separate from the US title, and we describe it that way.",
    audience: "Musicians, filmmakers, labels and creative brands.",
  },
  {
    slug: "elle-uk",
    guideSlug: "how-to-get-featured-in-elle-uk",
    name: "Elle UK",
    title: "Get Featured in Elle UK | Digital Networking Agency",
    subhead: "British fashion and beauty, licensed edition",
    value: "We shape the story, manage the timing and pitch the right desk. Earned editorial is never guaranteed, and we say so before you commit.",
    about: "Elle UK is a licensed British edition of the Elle brand, with its own editors commissioning fashion, beauty, style and women's lifestyle coverage for a UK readership.",
    why: "It puts a brand in front of an engaged fashion and beauty audience. It is a separate operation from Elle US, so coverage in one is not coverage in the other.",
    audience: "Fashion labels, beauty brands, designers and founders.",
  },
  {
    slug: "hollywood-reporter",
    guideSlug: "how-to-get-featured-in-hollywood-reporter",
    name: "The Hollywood Reporter",
    title: "Get Featured in The Hollywood Reporter | Digital Networking Agency",
    subhead: "Entertainment trade press, written by staff journalists",
    value: "We build the record and positioning that make top-tier trade coverage plausible, and are candid about whether it is realistic for your work right now.",
    about: "The Hollywood Reporter is a leading US entertainment-industry trade publication covering film, television, streaming, talent and the business of the industry.",
    why: "Trade press reaches the executives, agents and financiers who make decisions, which is narrower and far more useful than general coverage if you work in entertainment.",
    audience: "Production companies, filmmakers and entertainment businesses.",
  },
  {
    slug: "lawyers-weekly",
    guideSlug: "how-to-get-featured-in-lawyers-weekly",
    name: "Lawyers Weekly",
    title: "Get Featured in Lawyers Weekly | Digital Networking Agency",
    subhead: "Trade press for the legal profession",
    value: "We develop the angle, draft to the publication's standard and manage placement. You approve every word, which matters in a regulated profession.",
    about: "Lawyers Weekly is a legal-profession trade publication covering firms, practice management, careers, regulation and the direction of legal services.",
    why: "It reaches lawyers, firm leaders and in-house counsel rather than the public, so it works for referrals, hiring and reputation among peers.",
    audience: "Law firms, legal technology businesses and practitioners.",
  },
  {
    slug: "market-daily",
    guideSlug: "how-to-get-featured-in-market-daily",
    name: "Market Daily",
    title: "Get Featured in Market Daily | Digital Networking Agency",
    subhead: "A permanent business feature, searchable",
    value: "We write a custom feature about you and manage the placement. You approve every word before it goes live.",
    about: "Market Daily is a digital publication covering business, markets, finance and the people building companies. Online only and indexed by search engines.",
    why: "It is more accessible than a national masthead and carries less weight, which is the honest trade-off. What you get is a permanent, credible article that stands up to a name search.",
    audience: "Founders, operators and finance-facing businesses.",
  },
  {
    slug: "artist-weekly",
    guideSlug: "how-to-get-featured-in-artist-weekly",
    name: "Artist Weekly",
    title: "Get Featured in Artist Weekly | Digital Networking Agency",
    subhead: "Your practice, explained in plain language",
    value: "We write the feature around your work and manage the placement. You review and revise until it is right, and nothing publishes without your approval.",
    about: "Artist Weekly is a digital publication covering artists, creative practice and the people making work across visual art, music, design and performance.",
    why: "It is not a critical arts publication and should never be presented as one. It is a permanent, searchable article that explains your work to galleries, venues and clients.",
    audience: "Visual artists, musicians, designers and creative studios.",
  },
  {
    slug: "famous-times",
    guideSlug: "how-to-get-featured-in-famous-times",
    name: "Famous Times",
    title: "Get Featured in Famous Times | Digital Networking Agency",
    subhead: "A profile that shows up in search",
    value: "We write a dedicated profile about you and manage the placement. You approve every word before anything goes live.",
    about: "Famous Times is a digital publication covering people, personal brands, entrepreneurs and public figures, with a broad general-interest remit.",
    why: "A smaller digital title carries less authority than a national masthead. What it does give you is a substantive article a stranger finds when they search your name.",
    audience: "Founders, creators, speakers and public-facing professionals.",
  },
  {
    slug: "real-estate-today",
    guideSlug: "how-to-get-featured-in-real-estate-today",
    name: "Real Estate Today",
    title: "Get Featured in Real Estate Today | Digital Networking Agency",
    subhead: "Property coverage that survives a name search",
    value: "We write the feature around your market view and track record, and manage the placement. Nothing publishes until you have approved it.",
    about: "Real Estate Today is a digital publication covering property, real estate markets, development and the people working across the sector.",
    why: "Property runs on trust and buyers research people before they commit. This is a permanent article they can find, not the authority of an established trade title.",
    audience: "Agents, brokers, developers and proptech founders.",
  },
  {
    slug: "maxim",
    guideSlug: "how-to-get-featured-in-maxim",
    name: "Maxim",
    title: "Get Featured in Maxim | Digital Networking Agency",
    subhead: "Men's lifestyle, entertainment and culture",
    value: "We develop the angle, prepare what an editor needs and pitch where the fit is genuine. You approve everything before it goes anywhere.",
    about: "Maxim is a men's lifestyle and entertainment magazine covering style, cars, watches, travel, food and drink, sport, music and the people around all of it.",
    why: "It is a consumer and cultural credential rather than a business one, and it reaches a general audience. Earned editorial there is competitive and entirely the editor's decision.",
    audience: "Lifestyle, entertainment, hospitality and consumer founders.",
  }
];

export const getOutlet = (slug: string) =>
  OUTLETS.find((o) => o.slug === slug);
