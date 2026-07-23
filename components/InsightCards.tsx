import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { insights } from "@/data/insights";

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

export default function InsightCards() {
  const featured = insights.slice(0, 6);

  return (
    <section
      id="insights"
      aria-labelledby="insights-heading"
      style={{ backgroundColor: "var(--soft-mist)", padding: "5rem 2rem" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase" }}>
            09 / Insights
          </span>
          <div aria-hidden="true" style={{ flex: 1, height: "1px", backgroundColor: "rgba(7,26,43,0.08)" }} />
        </div>

        <h2 id="insights-heading" style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "var(--midnight-navy)", maxWidth: "520px", marginBottom: "3.5rem", lineHeight: 1.2 }}>
          What I&rsquo;m thinking about — and why it matters to you.
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {featured.map((insight) => (
            <article key={insight.id} className="card-hover" style={{
              background: "var(--glass)",
              backdropFilter: "blur(20px) saturate(140%)",
              WebkitBackdropFilter: "blur(20px) saturate(140%)",
              border: "1px solid var(--glass-border)",
              borderRadius: "20px",
              padding: "2rem", display: "flex", flexDirection: "column",
              boxShadow: "var(--sh-glass)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem", letterSpacing: "0.12em", color: "var(--white)", backgroundColor: categoryColors[insight.category] || "var(--graphite)", padding: "0.25rem 0.6rem", textTransform: "uppercase" }}>
                  {insight.category}
                </span>
                <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.55rem", letterSpacing: "0.08em", color: "rgba(42,31,26,0.35)", textTransform: "uppercase" }}>
                  {insight.date}
                </span>
              </div>
              <h3 style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.01em", color: "var(--midnight-navy)", marginBottom: "0.85rem", lineHeight: 1.35, flex: 1 }}>
                {insight.title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--graphite)", lineHeight: 1.7, marginBottom: "1.5rem", opacity: 0.75 }}>
                {insight.summary}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "1rem", borderTop: "1px solid rgba(7,26,43,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.72rem", color: "rgba(32,42,51,0.45)", fontFamily: "var(--font-ibm-mono), monospace", letterSpacing: "0.05em" }}>
                  <Clock size={10} />{insight.readingTime}
                </div>
                <Link href={`/insights/${insight.slug}`} className="link-teal" aria-label={`Read article: ${insight.title}`}>
                  Read article <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/insights" className="btn-ghost-dark">
            View all insights <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
