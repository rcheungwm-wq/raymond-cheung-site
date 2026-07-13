// VERIFY BEFORE PUBLICATION: All article concepts are placeholders for Raymond's review and approval.
// Do not publish without Raymond's written content or approval of ghost-written drafts.

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
    title:
      "Climate Transition Is a Governance Issue Before It Is a Reporting Issue",
    summary:
      "Most organisations approach climate transition as a disclosure challenge. The harder—and more consequential—work is in governance: who owns the risk, how it connects to strategy, and what the board must ask.",
    category: "Climate Risk",
    readingTime: "6 min read",
    date: "2026", // VERIFY BEFORE PUBLICATION
    status: "draft-concept",
    slug: "climate-transition-governance",
  },
  {
    id: "2",
    title: "Risk Appetite Should Guide Decisions, Not Decorate a Policy Document",
    summary:
      "Risk appetite statements are everywhere. Risk appetite frameworks that actually influence decisions are far rarer. The difference is not technical—it is about how risk appetite is connected to the way the organisation makes choices.",
    category: "Enterprise Risk",
    readingTime: "5 min read",
    date: "2026", // VERIFY BEFORE PUBLICATION
    status: "draft-concept",
    slug: "risk-appetite-decisions",
  },
  {
    id: "3",
    title: "What the Next Generation Expects From Insurance",
    summary:
      "Younger customers are not simply less loyal—they have genuinely different expectations about value, service, digital experience and social purpose. Insurance organisations that understand this early will have a structural advantage.",
    category: "Insurance Innovation",
    readingTime: "7 min read",
    date: "2026", // VERIFY BEFORE PUBLICATION
    status: "draft-concept",
    slug: "next-generation-insurance",
  },
  {
    id: "4",
    title: "AI in Insurance: Where Efficiency Ends and Governance Begins",
    summary:
      "AI adoption in insurance is accelerating. The governance frameworks needed to manage it are lagging. The gap between what AI can do and what organisations are prepared to govern responsibly is where risk accumulates.",
    category: "Technology Risk",
    readingTime: "8 min read",
    date: "2026", // VERIFY BEFORE PUBLICATION
    status: "draft-concept",
    slug: "ai-insurance-governance",
  },
  {
    id: "5",
    title: "Why Capital Strategy Belongs in the Boardroom",
    summary:
      "Capital management has long been treated as an actuarial and finance function. The decisions it shapes—about growth, risk appetite, reinsurance and strategic resilience—belong at the highest level of governance.",
    category: "Insurance Capital",
    readingTime: "6 min read",
    date: "2026", // VERIFY BEFORE PUBLICATION
    status: "draft-concept",
    slug: "capital-strategy-boardroom",
  },
  {
    id: "6",
    title: "ESG Compliance Is Not the Same as Organisational Readiness",
    summary:
      "Meeting disclosure requirements and being genuinely ready to manage ESG risks across the organisation are very different states. Many companies are achieving the first while deferring the second.",
    category: "ESG",
    readingTime: "5 min read",
    date: "2026", // VERIFY BEFORE PUBLICATION
    status: "draft-concept",
    slug: "esg-compliance-readiness",
  },
];
