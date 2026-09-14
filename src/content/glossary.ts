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

export const GLOSSARY: Glossary | null = null;
