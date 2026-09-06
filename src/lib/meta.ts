/**
 * Clamp a meta description to the length Google actually renders (~155-160
 * chars). Several templated pages were emitting 190-206 characters, which
 * simply gets truncated mid-sentence in the SERP.
 *
 * Trims on a sentence boundary where possible, otherwise a word boundary.
 */
export function clampDescription(text: string, max = 155): string {
  const s = text.replace(/\s+/g, " ").trim();
  if (s.length <= max) return s;

  // Prefer ending on a complete sentence.
  const window = s.slice(0, max + 1);
  const lastStop = Math.max(
    window.lastIndexOf(". "),
    window.lastIndexOf("? "),
    window.lastIndexOf("! ")
  );
  if (lastStop >= max * 0.6) return s.slice(0, lastStop + 1).trim();

  // Otherwise cut on a word boundary and add an ellipsis.
  const cut = window.lastIndexOf(" ");
  return s.slice(0, cut > 0 ? cut : max).trim().replace(/[,;:.—-]+$/, "") + "…";
}

/**
 * Keep meta titles inside the ~60 char SERP limit. Long outlet names
 * ("Harper's Bazaar Australia") push the full brand suffix past the cut, so
 * fall back to the short one before resorting to truncation.
 */
export function clampTitle(text: string, max = 60): string {
  const s = text.replace(/\s+/g, " ").trim();
  if (s.length <= max) return s;

  const short = s.replace(/\s*\|\s*Digital Networking Agency\s*$/, " | DNA PR");
  if (short !== s && short.length <= max) return short;

  const base = short !== s ? short : s;
  const parts = base.split(" | ");
  if (parts.length > 1) {
    const suffix = " | " + parts[parts.length - 1];
    const head = parts.slice(0, -1).join(" | ");
    const room = max - suffix.length;
    if (room > 20) {
      const cut = head.slice(0, room).lastIndexOf(" ");
      return head.slice(0, cut > 0 ? cut : room).trim() + suffix;
    }
  }
  const cut = base.slice(0, max).lastIndexOf(" ");
  return base.slice(0, cut > 0 ? cut : max).trim();
}
