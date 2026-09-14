export type GlossaryTerm = {
  term: string;
  id: string;
  definition: string;
  link: string | null;
};

export type Glossary = {
  slug: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  terms: GlossaryTerm[];
};

export const GLOSSARY: Glossary | null = {
  "slug": "glossary",
  "h1": "PR Glossary: The Terms, Honestly Defined",
  "title": "PR Glossary: Media and PR Terms Defined | DNA PR",
  "description": "Plain definitions of the PR and media terms you meet when buying press, from advertorial to wire service, with earned, paid and sponsored routes kept apart.",
  "intro": "The PR industry runs on jargon, and some of it blurs the line between coverage you earned and coverage you bought. These are the terms you will meet most often, defined plainly.",
  "terms": [
    {
      "term": "Advertorial",
      "id": "advertorial",
      "definition": "An advertisement written and designed to resemble a publication's editorial content. The advertiser pays for the space and controls the message, while the format borrows the look of an article. Reputable publications label advertorials, typically as advertisement, sponsored or promoted. An advertorial is paid media, not coverage, and should never be described as a publication choosing to write about you.",
      "link": "/guides/sponsored-vs-branded-vs-advertorial"
    },
    {
      "term": "Angle",
      "id": "angle",
      "definition": "The specific reason a story is interesting to a particular publication's readers at a particular moment. The same company can offer many angles: a data finding, a contrarian view, a trend it can evidence, a founder's unusual route. Editors respond to angles, not to companies. A pitch without a clear angle is usually just an announcement, and announcements are rarely covered.",
      "link": null
    },
    {
      "term": "As featured in",
      "id": "as-featured-in",
      "definition": "A marketing phrase, usually paired with a strip of publication logos on a website or pitch deck. It says an organisation appeared somewhere, but not how: earned editorial, a contributor article, a sponsored post or a syndicated press release can all sit behind the same logo. The only reliable way to check one is to ask for the live link and read the page.",
      "link": "/guides/how-to-vet-a-pr-agency"
    },
    {
      "term": "Backlink",
      "id": "backlink",
      "definition": "A link from another website to yours. Search engines use links as one of many signals when assessing pages, and a link from a relevant, reputable site is generally worth more than one from an obscure or unrelated site. Google's guidance asks that paid links carry a sponsored or nofollow attribute. Nobody can promise a particular search result from any single link.",
      "link": null
    },
    {
      "term": "Branded content",
      "id": "branded-content",
      "definition": "Content paid for by a brand, often produced by the publisher's own content studio, that tells a story or explores a subject associated with the brand rather than directly selling a product. It is usually labelled with wording such as paid for by, presented by or in partnership with. Like other sponsored formats, it is paid media, whatever its production quality.",
      "link": "/guides/sponsored-vs-branded-vs-advertorial"
    },
    {
      "term": "Byline",
      "id": "byline",
      "definition": "The line naming the author of an article. It tells readers who wrote the piece and often in what capacity: staff writer, contributor or partner. A byline under your own name means you wrote the piece, or someone wrote it for you. Coverage about you carries somebody else's byline, which is exactly why readers treat it differently.",
      "link": null
    },
    {
      "term": "Contributor article",
      "id": "contributor-article",
      "definition": "An article written by an outside contributor rather than a staff journalist, and published under the contributor's byline. Some contributor programmes are unpaid and selective; others charge membership or placement fees. The words are yours, the platform is theirs, and the piece usually carries a contributor label. It is a legitimate format, but it is not earned editorial coverage of you.",
      "link": "/guides/what-is-a-contributor-article"
    },
    {
      "term": "Do-follow link",
      "id": "do-follow-link",
      "definition": "An informal industry term for an ordinary link that carries no nofollow, sponsored or ugc attribute. It is not an official attribute in its own right. Some sellers advertise do-follow links as a selling point, but publications set their own link policies and change them, and search engines decide how any link is treated. Treat promises about link value with caution.",
      "link": null
    },
    {
      "term": "Earned media",
      "id": "earned-media",
      "definition": "Coverage you did not pay for and do not control. A journalist, editor or producer decided independently that you were worth covering and published it under their own name. Earned media carries weight precisely because nobody bought it. It cannot be guaranteed, because the decision belongs to the newsroom, not to you or your agency.",
      "link": "/guides/what-is-earned-media"
    },
    {
      "term": "Editorial calendar",
      "id": "editorial-calendar",
      "definition": "A publication's plan of themes, special issues or sections by date, often included in media kits for advertisers. It helps PR teams time pitches to subjects an outlet has already planned to cover. Calendars change, and a planned theme guarantees nothing, but it is a better opening than a pitch that ignores what the publication is working on.",
      "link": null
    },
    {
      "term": "Embargo",
      "id": "embargo",
      "definition": "An agreement that information shared with a journalist will not be published before a set date and time. Embargoes let reporters prepare stories on announcements, research or results in advance. They rest on agreement and professional trust, so they only hold if the journalist accepted the terms before receiving the information. Sending embargoed material unannounced creates no obligation.",
      "link": null
    },
    {
      "term": "Exclusive",
      "id": "exclusive",
      "definition": "A story offered to a single publication before, or instead of, anyone else. Exclusives can make a pitch more attractive, because the outlet gets something its competitors do not. The arrangement only works if it is honoured: pitching the same story elsewhere at the same time damages the relationship, often for good. Agree the terms, including timing, before sharing the details.",
      "link": null
    },
    {
      "term": "Feature",
      "id": "feature",
      "definition": "A longer article that explores a person, company or subject in depth, as opposed to a short news story reporting an event. The word is used loosely in the PR industry: an earned profile, a paid placement and a contributor piece may all be sold as a feature. Always ask which route sits behind the word before you buy one.",
      "link": "/guides/press-release-vs-feature-article"
    },
    {
      "term": "Guaranteed placement",
      "id": "guaranteed-placement",
      "definition": "A promise that an article will be published in a named outlet or set of outlets. It can be legitimate when it relates to paid, contributor or sponsored inventory that a publisher controls and sells. It cannot honestly apply to earned editorial, because no agency controls an independent newsroom's decisions. Ask exactly what is guaranteed, and what happens if it does not run.",
      "link": "/guides/is-guaranteed-pr-legit"
    },
    {
      "term": "Lead time",
      "id": "lead-time",
      "definition": "The gap between when a publication plans or accepts a piece and when it appears. News sites can move within hours, while print magazines often plan issues months ahead. Lead time matters when pitching seasonal or date-sensitive stories. For earned coverage it is never fully predictable, and a guaranteed publication date for independent editorial is a promise nobody controls.",
      "link": null
    },
    {
      "term": "Listicle",
      "id": "listicle",
      "definition": "An article structured as a numbered or grouped list, such as a top 10 or a leaders-to-watch roundup. Some lists are compiled independently by editors. Many commercial lists are paid placements, where entrants pay to appear and the piece should be labelled according to the publication's policy. The format is useful for comparison, but a paid list is not an independent ranking.",
      "link": "/get-featured-in-top-lists"
    },
    {
      "term": "Masthead",
      "id": "masthead",
      "definition": "A term with two common meanings. In American usage, it is the published list of a publication's editors and senior staff. In British usage, it more often means the title design at the top of a newspaper's front page. For PR purposes the staff list is the useful one, because it shows who holds which editorial role and who is likely to decide what runs.",
      "link": null
    },
    {
      "term": "Media kit",
      "id": "media-kit",
      "definition": "A document a publisher prepares for advertisers, usually covering audience figures, reader demographics, advertising formats, rates and sometimes an editorial calendar. Audience numbers in a media kit are the publisher's own figures, so treat them as claims unless independently verified. The term is also used for a company's press kit: logos, biographies, images and fact sheets for journalists.",
      "link": null
    },
    {
      "term": "No-follow link",
      "id": "no-follow-link",
      "definition": "A link carrying the nofollow attribute, which asks search engines not to associate the linking page with the destination for ranking purposes. Google treats nofollow as a hint rather than a strict rule. Many publications apply it to links in contributor and sponsored content. A no-follow link can still send readers, and its value to people is unaffected by the attribute.",
      "link": null
    },
    {
      "term": "Off the record",
      "id": "off-the-record",
      "definition": "An agreement that what a source says will not be published or attributed to them. Journalists and publications interpret the term differently, and related terms such as on background vary too. Crucially, it must be agreed before you speak, not afterwards. The safe working assumption in any conversation with a journalist is that everything you say may be published.",
      "link": null
    },
    {
      "term": "Owned media",
      "id": "owned-media",
      "definition": "Channels you publish on and control yourself: your website, blog, newsletter and social media accounts. Owned media gives you complete control over the message and the timing. What it cannot give you is third-party credibility, because readers know you wrote it. It works best alongside earned coverage, which says what your own channels cannot.",
      "link": "/guides/what-is-earned-media"
    },
    {
      "term": "Paid media",
      "id": "paid-media",
      "definition": "Any exposure where money secures the placement: advertising, sponsored articles, advertorials, paid list inclusions, promoted social posts and similar formats. You control the message and usually the timing, and the audience generally knows, or should be told, that it was paid for. Paid media is a legitimate tool. It becomes a problem only when it is presented as earned coverage.",
      "link": "/guides/what-is-earned-media"
    },
    {
      "term": "Partner content",
      "id": "partner-content",
      "definition": "A label publishers use for content produced with or on behalf of a commercial partner. The exact meaning varies between publications: it may be written by the publisher's studio, by the partner, or jointly. What partner content has in common is that a commercial arrangement sits behind it, so it is paid media, however closely it resembles the surrounding journalism.",
      "link": "/guides/sponsored-vs-branded-vs-advertorial"
    },
    {
      "term": "Pitch",
      "id": "pitch",
      "definition": "A short message proposing a story to a journalist or editor. A good pitch explains the angle, why it matters to that publication's readers and why now, in a few sentences. Journalists owe you nothing in return, and most pitches go unanswered. Relevance to what the writer actually covers matters far more than volume or persistence.",
      "link": null
    },
    {
      "term": "Press release",
      "id": "press-release",
      "definition": "An official announcement written by an organisation and issued to the media, often through a wire service. It is your own account in your own words. Publications may use it as the starting point for a story, reproduce it or ignore it. A release reposted on news sites through distribution is still a release, not independent coverage of you.",
      "link": "/guides/press-release-vs-feature-article"
    },
    {
      "term": "Publicist",
      "id": "publicist",
      "definition": "A person who manages publicity for a client: developing angles, pitching journalists, arranging interviews and handling media enquiries. A good publicist knows which writers cover what and how to make a story relevant to them. What a publicist cannot do is control an independent editor's decision, so be wary of any who present earned coverage as a certainty.",
      "link": null
    },
    {
      "term": "Sponsored content",
      "id": "sponsored-content",
      "definition": "Content a brand pays a publication to run, typically on a subject the brand chooses and with copy the brand approves. Reputable publications label it with wording such as sponsored, paid post or partner. It is a normal commercial product and can be a useful asset. It is paid media, not an editorial judgement about you.",
      "link": "/guides/sponsored-vs-branded-vs-advertorial"
    },
    {
      "term": "Syndication",
      "id": "syndication",
      "definition": "The republishing of an article on other sites under a licence or content-sharing arrangement, such as a publisher's articles appearing on a news aggregator. The syndicated copy can reach a larger audience than the original, but it is the same article. Whether a piece is syndicated is the partner platform's decision, so be cautious of anyone guaranteeing it.",
      "link": "/guides/syndication-vs-original-publication"
    },
    {
      "term": "Tier 1 publication",
      "id": "tier-1-publication",
      "definition": "An informal industry label for the most prominent outlets: large audiences, recognised brands and selective newsrooms. There is no official list, and agencies apply the label inconsistently, sometimes stretching it to outlets few others would include. When an agency promises tier 1 coverage, ask which named publications they mean and which route each placement would use.",
      "link": "/guides/tier-1-vs-tier-2-publications"
    },
    {
      "term": "Wire service",
      "id": "wire-service",
      "definition": "A term with two meanings that are often confused. A news wire, such as AP or Reuters, is a news agency whose journalists supply reporting to other outlets. A press release wire is a paid distribution service that sends releases to journalists and republishes them across partner sites. Appearing through the second is distribution, not coverage.",
      "link": null
    }
  ]
};
