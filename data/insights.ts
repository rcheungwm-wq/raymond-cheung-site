export type InsightCategory =
  | "Climate Risk"
  | "Enterprise Risk"
  | "Insurance Innovation"
  | "Technology Risk"
  | "Insurance Capital"
  | "ESG"
  | "Governance"
  | "Regulation";

export interface Insight {
  id: string;
  title: string;
  summary: string;
  category: InsightCategory;
  readingTime: string;
  date: string;
  status: "draft-concept" | "draft" | "published";
  slug: string;
}

export const insights: Insight[] = [
  {
    id: "1",
    title: "Climate Transition Is a Governance Issue Before It Is a Reporting Issue",
    summary:
      "I keep seeing organisations frame climate transition as a disclosure challenge. The harder — and more consequential — work is in governance: who owns the risk, how it connects to strategy, and what your board must be willing to actually ask.",
    category: "Climate Risk",
    readingTime: "6 min read",
    date: "2025",
    status: "draft-concept",
    slug: "climate-transition-governance",
  },
  {
    id: "2",
    title: "Risk Appetite Should Guide Decisions, Not Decorate a Policy Document",
    summary:
      "Risk appetite statements are everywhere. Frameworks that genuinely influence how an organisation makes choices are far rarer. The difference is not technical — it is about whether leadership is willing to be constrained by it.",
    category: "Enterprise Risk",
    readingTime: "5 min read",
    date: "2025",
    status: "draft-concept",
    slug: "risk-appetite-decisions",
  },
  {
    id: "3",
    title: "What the Next Generation Expects From Insurance",
    summary:
      "Younger customers are not simply less loyal — they hold fundamentally different expectations about value, digital experience and social purpose. I saw this firsthand building digital insurance at scale across ASEAN. The organisations that adapt early will carry a structural advantage.",
    category: "Insurance Innovation",
    readingTime: "7 min read",
    date: "2025",
    status: "draft-concept",
    slug: "next-generation-insurance",
  },
  {
    id: "4",
    title: "AI in Insurance: Where Efficiency Ends and Governance Begins",
    summary:
      "AI adoption in insurance is accelerating. The governance frameworks needed to manage it are not keeping pace. In my view, that gap is not a technology problem — it is a leadership problem. And it is where risk quietly accumulates.",
    category: "Technology Risk",
    readingTime: "8 min read",
    date: "2025",
    status: "draft-concept",
    slug: "ai-insurance-governance",
  },
  {
    id: "5",
    title: "Why Capital Strategy Belongs in the Boardroom",
    summary:
      "In every CRO role I have held, capital was the conversation that shaped everything else — growth, reinsurance, product decisions, strategic resilience. It should not be confined to the actuarial function. It belongs at the highest level of governance.",
    category: "Insurance Capital",
    readingTime: "6 min read",
    date: "2025",
    status: "draft-concept",
    slug: "capital-strategy-boardroom",
  },
  {
    id: "6",
    title: "ESG Compliance Is Not the Same as Organisational Readiness",
    summary:
      "Meeting disclosure requirements and being genuinely prepared to manage ESG risks across your organisation are very different states. Many companies are achieving the first while quietly deferring the second. That gap will close — on someone else's timeline.",
    category: "ESG",
    readingTime: "5 min read",
    date: "2025",
    status: "draft-concept",
    slug: "esg-compliance-readiness",
  },
];
