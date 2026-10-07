export type InsightCategory =
  | "Climate Risk"
  | "Enterprise Risk"
  | "Insurance Innovation"
  | "Technology Risk"
  | "Insurance Capital"
  | "ESG"
  | "Governance"
  | "Regulation"
  | "Board Advisory"
  | "Actuarial"
  | "Speaking & Events";

export interface InsightSection {
  type: "paragraph" | "heading" | "pullquote" | "list" | "image" | "image-grid";
  text?: string;
  items?: string[];
  /** For type "image": single src + optional caption */
  src?: string;
  alt?: string;
  caption?: string;
  /** For type "image-grid": array of {src, alt} */
  images?: { src: string; alt: string }[];
}

export interface InsightFAQ {
  question: string;
  answer: string;
}

export interface Insight {
  id: string;
  title: string;
  summary: string;
  category: InsightCategory;
  readingTime: string;
  date: string;
  status: "draft" | "published";
  slug: string;
  body: InsightSection[];
  faqs?: InsightFAQ[];
  keywords?: string[];
  /** If set, the canonical URL for this page points to this slug instead of its own.
   *  Use when an older post is superseded by a newer, more specific one. */
  canonicalSlug?: string;
  ogImage?: string;
}

import insightsData from "./insights.json";
export const insights: Insight[] = insightsData as Insight[];
