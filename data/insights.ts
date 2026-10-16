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
  /** ISO 8601 publish date (e.g. "2026-10-16") for schema/OG. Falls back to the 1st of `date`'s month. */
  datePublished?: string;
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

const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

/** ISO publish date for structured data: explicit datePublished, else "October 2026" -> "2026-10-01". */
export function insightIsoDate(insight: Insight): string | undefined {
  if (insight.datePublished) return insight.datePublished;
  const m = insight.date.trim().toLowerCase().match(/^([a-z]+)\s+(\d{4})$/);
  if (!m) return undefined;
  const month = MONTHS.indexOf(m[1]);
  if (month < 0) return undefined;
  return `${m[2]}-${String(month + 1).padStart(2, "0")}-01`;
}

/** Strips inline [label](href) link markup down to its label, for meta/schema text. */
export function stripInlineLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, "$1");
}

/** Up to `limit` related posts: shared keyword terms weigh most, same category adds, newer breaks ties. */
export function relatedInsights(insight: Insight, limit = 3): Insight[] {
  const terms = (i: Insight) =>
    new Set((i.keywords ?? []).join(" ").toLowerCase().split(/\W+/).filter((w) => w.length > 3 && w !== "singapore"));
  const mine = terms(insight);
  return insights
    .map((other, index) => ({ other, index }))
    .filter(({ other }) => other.slug !== insight.slug && !other.canonicalSlug && other.status === "published")
    .map(({ other, index }) => {
      let shared = 0;
      terms(other).forEach((t) => { if (mine.has(t)) shared++; });
      return { other, index, score: shared * 2 + (other.category === insight.category ? 3 : 0) };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || b.index - a.index)
    .slice(0, limit)
    .map(({ other }) => other);
}
