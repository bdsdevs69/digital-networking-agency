// Pulls Q&A pairs out of a body's "Frequently asked questions" section for
// FAQPage structured data. Shared by guides, industry, country and service pages.
export function extractFaq(body: string): { q: string; a: string }[] {
  const start = body.indexOf('id="frequently-asked-questions"');
  if (start === -1) return [];
  const tail = body.slice(start);
  const strip = (h: string) =>
    h
      .replace(/<[^>]+>/g, "")
      .replace(/&amp;/g, "&")
      .replace(/&rsquo;|&#8217;/g, "\u2019")
      .replace(/&ldquo;/g, "\u201c")
      .replace(/&rdquo;/g, "\u201d")
      .replace(/&mdash;/g, "\u2014")
      .replace(/&nbsp;/g, " ")
      .replace(/&quot;/g, '"')
      .replace(/\s+/g, " ")
      .trim();
  const out: { q: string; a: string }[] = [];
  const re = /<h3>([\s\S]*?)<\/h3>\s*((?:<p>[\s\S]*?<\/p>\s*)+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(tail)) !== null) {
    const q = strip(m[1]);
    const a = strip(m[2]);
    if (q && a) out.push({ q, a });
  }
  return out;
}
