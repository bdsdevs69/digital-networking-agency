/**
 * Where the face is in each client photo, as a CSS object-position.
 * The same photo is cropped wide on some cards and tall on others; without
 * this, `object-fit: cover` centres the crop and cuts heads off. Read off a
 * quarter-grid contact sheet of every image.
 */
const FOCAL: Record<string, string> = {
  "placement-shams": "50% 22%",
  "placement-shermel": "50% 25%",
  "placement-entrepreneurs-msn": "58% 40%",
  "placement-mark": "58% 28%",
  "placement-vrdo": "50% 18%",
  "placement-sharpe": "47% 36%",
  "placement-kirk-msn": "52% 26%",
  "kirk-sanford-v3": "50% 26%",
  "krishan-thakker": "50% 14%",
  "placement-indran": "52% 55%",
  "placement-brick": "38% 28%",
  "placement-albright": "50% 18%",
  "placement-kelly": "50% 15%",
  "placement-flaxington": "50% 22%"
};

/** object-position for an image path like "/placement-kirk-msn.webp". */
export function focal(src?: string | null): string {
  if (!src) return "50% 30%";
  const key = src.replace(/^\//, "").replace(/\.(webp|jpe?g|png)$/i, "");
  return FOCAL[key] ?? "50% 30%";
}
