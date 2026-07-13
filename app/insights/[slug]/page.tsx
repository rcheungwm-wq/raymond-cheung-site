import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { insights } from "@/data/insights";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) return { title: "Insight Not Found | Raymond Cheung" };
  return {
    title: `${insight.title} | Raymond Cheung`,
    description: insight.summary,
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) notFound();

  return (
    <div style={{ backgroundColor: "var(--warm-ivory)", paddingTop: "96px" }}>
      {/* Header */}
      <section
        style={{
          backgroundColor: "var(--midnight-navy)",
          padding: "4rem 2rem 3.5rem",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Link
            href="/insights"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.12em",
              color: "rgba(245,243,236,0.45)",
              textDecoration: "none",
              marginBottom: "2rem",
              textTransform: "uppercase",
            }}
          >
            <ArrowLeft size={12} /> Back to Insights
          </Link>
          <span
            style={{
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.1em",
              color: "var(--strategic-teal)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.25rem",
            }}
          >
            {insight.category} · {insight.readingTime}
          </span>
          <h1
            style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "var(--warm-ivory)",
              lineHeight: 1.2,
            }}
          >
            {insight.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {insight.status === "draft-concept" && (
            <div
              style={{
                backgroundColor: "rgba(193,162,105,0.08)",
                border: "1px solid rgba(193,162,105,0.25)",
                borderRadius: "1px",
                padding: "1.5rem",
                marginBottom: "3rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-ibm-mono), monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.08em",
                  color: "var(--gold)",
                  lineHeight: 1.6,
                }}
              >
                <strong>CONCEPT PREVIEW</strong> — This article is a draft concept.
                Full content will be written or approved by Raymond Cheung before
                publication. The summary below outlines the intended argument.
              </p>
            </div>
          )}

          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--midnight-navy)",
              lineHeight: 1.85,
              fontWeight: 500,
              marginBottom: "2rem",
            }}
          >
            {insight.summary}
          </p>

          <div
            style={{
              padding: "2rem",
              backgroundColor: "var(--soft-mist)",
              border: "1px solid rgba(7,26,43,0.06)",
              marginBottom: "2rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-ibm-mono), monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                color: "rgba(7,26,43,0.45)",
                lineHeight: 1.7,
              }}
            >
              Full article content pending. Raymond Cheung will review and approve
              the final article text before this page goes live.
            </p>
          </div>

          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(7,26,43,0.08)" }}>
            <Link
              href="/insights"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--strategic-teal)",
                textDecoration: "none",
                fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              }}
            >
              <ArrowLeft size={14} /> Return to Insights
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
