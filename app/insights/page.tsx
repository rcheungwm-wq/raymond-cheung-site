import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights | Raymond Cheung",
  description:
    "Ideas and perspectives from Raymond Cheung on enterprise risk, insurance, climate transition, ESG, AI and regulatory change across Asia.",
};

const categoryColors: Record<string, string> = {
  "Climate Risk": "var(--deep-teal)",
  "Enterprise Risk": "var(--midnight-navy)",
  "Insurance Innovation": "var(--executive-navy)",
  "Technology Risk": "var(--graphite)",
  "Insurance Capital": "var(--midnight-navy)",
  ESG: "var(--deep-teal)",
  Governance: "var(--executive-navy)",
  Regulation: "var(--graphite)",
};

export default function InsightsPage() {
  return (
    <div style={{ backgroundColor: "var(--warm-ivory)", paddingTop: "96px" }}>
      <section style={{ backgroundColor: "var(--midnight-navy)", padding: "5rem 2rem 4rem", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(21,154,146,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(21,154,146,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase", display: "block", marginBottom: "1.5rem" }}>
            08 / Insights
          </span>
          <h1 style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--warm-ivory)", lineHeight: 1.12, maxWidth: "600px", marginBottom: "1.5rem" }}>
            Ideas for leaders navigating uncertainty.
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(245,243,236,0.65)", lineHeight: 1.75, maxWidth: "520px" }}>
            Perspectives on risk, insurance, climate transition, governance, ESG and the forces shaping organisations across Asia.
          </p>
          <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem", letterSpacing: "0.08em", color: "rgba(193,162,105,0.6)", marginTop: "1.5rem", lineHeight: 1.6 }}>
            CONCEPT PREVIEW — Articles below are draft concepts pending Raymond&rsquo;s written content or approval.
          </p>
        </div>
      </section>

      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5px" }}>
            {insights.map((insight) => (
              <article key={insight.id} className="card-hover" style={{ backgroundColor: "var(--white)", border: "1px solid rgba(7,26,43,0.08)", padding: "2rem", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--white)", backgroundColor: categoryColors[insight.category] || "var(--graphite)", padding: "0.25rem 0.6rem", textTransform: "uppercase" }}>
                    {insight.category}
                  </span>
                  {insight.status === "draft-concept" && (
                    <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.55rem", letterSpacing: "0.08em", color: "rgba(193,162,105,0.7)", textTransform: "uppercase" }}>
                      Draft concept
                    </span>
                  )}
                </div>
                <h2 style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.01em", color: "var(--midnight-navy)", marginBottom: "0.85rem", lineHeight: 1.35, flex: 1 }}>
                  {insight.title}
                </h2>
                <p style={{ fontSize: "0.85rem", color: "var(--graphite)", lineHeight: 1.7, marginBottom: "1.5rem", opacity: 0.75 }}>
                  {insight.summary}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "1rem", borderTop: "1px solid rgba(7,26,43,0.06)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.72rem", color: "rgba(32,42,51,0.45)", fontFamily: "var(--font-ibm-mono), monospace", letterSpacing: "0.05em" }}>
                    <Clock size={10} />{insight.readingTime}
                  </div>
                  <Link href={`/insights/${insight.slug}`} className="link-teal" aria-label={`Read: ${insight.title}`}>
                    Read article <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
