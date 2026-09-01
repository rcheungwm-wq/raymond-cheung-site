"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import type { Insight, InsightCategory } from "@/data/insights";

const categoryColors: Record<string, string> = {
  "Climate Risk": "#C9A961",
  "Enterprise Risk": "var(--midnight-navy)",
  "Insurance Innovation": "var(--executive-navy)",
  "Technology Risk": "var(--graphite)",
  "Insurance Capital": "#8C7538",
  ESG: "#C9A961",
  Governance: "var(--executive-navy)",
  Regulation: "var(--graphite)",
  "Board Advisory": "#8C7538",
  Actuarial: "var(--midnight-navy)",
};

const ALL = "All" as const;

export default function InsightsClient({ insights }: { insights: Insight[] }) {
  const [active, setActive] = useState<InsightCategory | typeof ALL>(ALL);

  const categories = [ALL, ...Array.from(new Set(insights.map((i) => i.category)))];

  const filtered = active === ALL ? insights : insights.filter((i) => i.category === active);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* Category filter */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "3rem" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat as InsightCategory | typeof ALL)}
            style={{
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase",
              padding: "0.4rem 0.9rem", borderRadius: "1px", cursor: "pointer",
              border: active === cat ? "1px solid var(--gold)" : "1px solid rgba(26,23,18,0.15)",
              backgroundColor: active === cat ? "var(--gold)" : "transparent",
              color: active === cat ? "var(--warm-ivory)" : "rgba(26,23,18,0.6)",
              transition: "all 0.15s ease",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured article */}
      {featured && (
        <Link href={`/insights/${featured.slug}`} style={{ textDecoration: "none", display: "block", marginBottom: "4rem" }}>
          <article
            className="featured-article"
            style={{
              background: "linear-gradient(135deg, var(--midnight-navy), var(--executive-navy))",
              borderRadius: "2px", padding: "3rem",
              display: "grid", gridTemplateColumns: "1fr auto",
              gap: "2rem", alignItems: "center",
              boxShadow: "var(--sh-deep)",
              transition: "transform 0.3s ease",
            }}
          >
            <div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap" }}>
                <span style={{
                  fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem",
                  letterSpacing: "0.1em", color: "var(--ink)",
                  backgroundColor: "var(--strategic-teal)",
                  padding: "0.25rem 0.65rem", borderRadius: "999px", textTransform: "uppercase",
                }}>{featured.category}</span>
                <span style={{
                  fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem",
                  letterSpacing: "0.06em", color: "rgba(26,23,18,0.4)",
                  display: "flex", alignItems: "center", gap: "0.3rem",
                }}><Clock size={10} />{featured.readingTime}</span>
                <span style={{
                  fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem",
                  letterSpacing: "0.06em", color: "rgba(26,23,18,0.35)",
                }}>{featured.date}</span>
              </div>
              <h2 style={{
                fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 800,
                letterSpacing: "-0.025em", color: "var(--ink)", lineHeight: 1.2,
                marginBottom: "1rem",
              }}>{featured.title}</h2>
              <p style={{
                fontSize: "0.92rem", color: "rgba(26,23,18,0.65)",
                lineHeight: 1.75, maxWidth: "560px",
              }}>{featured.summary}</p>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                marginTop: "1.5rem",
                fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                fontWeight: 600, fontSize: "0.82rem", color: "var(--strategic-teal)",
              }}>Read article <ArrowRight size={13} /></span>
            </div>
            <div style={{
              width: "80px", height: "80px", borderRadius: "50%",
              background: "rgba(201,169,97,0.12)", border: "1px solid rgba(201,169,97,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <span style={{ fontSize: "2rem" }}>◆</span>
            </div>
          </article>
        </Link>
      )}

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1.5rem",
      }}>
        {rest.map((insight) => (
          <article
            key={insight.id}
            className="insight-card"
            style={{
              backgroundColor: "var(--panel)", borderRadius: "2px",
              border: "1px solid rgba(26,23,18,0.08)",
              padding: "2rem", display: "flex", flexDirection: "column",
              boxShadow: "none",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <span style={{
                fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.56rem",
                letterSpacing: "0.1em", color: "var(--ink)",
                backgroundColor: categoryColors[insight.category] || "var(--graphite)",
                padding: "0.22rem 0.6rem", borderRadius: "999px", textTransform: "uppercase",
              }}>{insight.category}</span>
              <span style={{
                fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem",
                letterSpacing: "0.06em", color: "rgba(26,23,18,0.35)",
              }}>{insight.date}</span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "0.98rem", fontWeight: 700, letterSpacing: "-0.01em",
              color: "var(--ink)", marginBottom: "0.85rem",
              lineHeight: 1.35, flex: 1,
            }}>{insight.title}</h2>
            <p style={{
              fontSize: "0.84rem", color: "var(--graphite)", lineHeight: 1.7,
              marginBottom: "1.5rem", opacity: 0.75,
            }}>{insight.summary}</p>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              paddingTop: "1rem", borderTop: "1px solid rgba(26,23,18,0.06)",
            }}>
              <div style={{
                display: "flex", alignItems: "center", gap: "0.4rem",
                fontSize: "0.72rem", color: "rgba(26,23,18,0.45)",
                fontFamily: "var(--font-ibm-mono), monospace", letterSpacing: "0.05em",
              }}>
                <Clock size={10} />{insight.readingTime}
              </div>
              <Link
                href={`/insights/${insight.slug}`}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.35rem",
                  fontSize: "0.8rem", fontWeight: 600, color: "var(--strategic-teal)",
                  textDecoration: "none",
                  fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                }}
                aria-label={`Read: ${insight.title}`}
              >
                Read article <ArrowRight size={12} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
