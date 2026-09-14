// Standalone service landings that are not part of a collection.
export type Landing = {
  slug: string;
  h1: string;
  title: string;
  description: string;
  body: string;
  toc: { id: string; text: string }[];
  takeaways: string[];
};

export const VISA_PAGE: Landing | null = null;

export const TOP_LISTS_PAGE: Landing | null = null;
