// Contextual internal links. The first mention of a high-value outlet or topic
// in a body links to the page meant to rank for it. Search Console shows these
// targets sitting at positions 6–30; exact, in-context anchors from relevant
// pages are the strongest on-site signal we can send them.
//
// Rules: first occurrence per target only, never inside an existing link or a
// heading, never a page linking to itself, and a hard cap per page so a body
// never turns into a link farm.

type Target = { re: RegExp; href: string };

const TARGETS: Target[] = [
  { re: /\bUSA Today op-eds?\b/, href: "/guides/usa-today-op-ed-submission" },
  { re: /\bContributor Content\b/, href: "/guides/usa-today-op-ed-submission" },
  { re: /\bHARO\b/, href: "/guides/haro-alternatives" },
  { re: /\b(?:PR agency (?:costs?|pricing)|cost of PR)\b/i, href: "/guides/how-much-does-a-pr-agency-cost" },
  { re: /\b(?:startup PR|PR for startups)\b/i, href: "/pr-for/startups" },
  { re: /\bInc\.(?= magazine|com\b| coverage| feature)/, href: "/get-featured-in/inc" },
  { re: /\bBloomberg\b/, href: "/get-featured-in/bloomberg" },
  { re: /\bBusiness Insider\b/, href: "/get-featured-in/business-insider" },
  { re: /\bYahoo Finance\b/, href: "/get-featured-in/yahoo-finance" },
  { re: /\bUSA Today\b(?! op-ed)/, href: "/get-featured-in/usa-today" },
  { re: /\bForbes\b(?! (?:Australia|Middle East|Councils|BrandVoice))/, href: "/get-featured-in/forbes" },
  { re: /\bMSN\b/, href: "/get-featured-in/msn" },
];

const MAX_PER_PAGE = 6;

export function autoLink(html: string, selfPath: string): string {
  const used = new Set<string>();
  let added = 0;
  let inLink = 0;
  let inHeading = 0;

  // Split into tags and text so only text nodes are rewritten.
  return html.replace(/(<[^>]+>)|([^<]+)/g, (chunk, tag: string, text: string) => {
    if (tag) {
      if (/^<a[\s>]/i.test(tag)) inLink++;
      else if (/^<\/a>/i.test(tag)) inLink = Math.max(0, inLink - 1);
      else if (/^<h[1-6][\s>]/i.test(tag)) inHeading++;
      else if (/^<\/h[1-6]>/i.test(tag)) inHeading = Math.max(0, inHeading - 1);
      return tag;
    }
    if (inLink || inHeading || added >= MAX_PER_PAGE) return text;

    let out = text;
    for (const t of TARGETS) {
      if (added >= MAX_PER_PAGE) break;
      if (used.has(t.href) || t.href === selfPath) continue;
      const m = t.re.exec(out);
      if (!m) continue;
      out =
        out.slice(0, m.index) +
        `<a href="${t.href}">${m[0]}</a>` +
        out.slice(m.index + m[0].length);
      used.add(t.href);
      added++;
      // Only one link per text node keeps anchors spread through the page.
      break;
    }
    return out;
  });
}
