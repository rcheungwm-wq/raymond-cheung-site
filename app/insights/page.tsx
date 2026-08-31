import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights — Risk, Governance, ESG & Insurance Commentary",
  description:
    "Written commentary from Raymond Cheung on enterprise risk, climate transition governance, risk appetite, insurance capital strategy, AI governance and ESG compliance — drawn from two decades in Asia's boardrooms and risk functions.",
  alternates: { canonical: "https://raymondcheungwm.com/insights" },
  openGraph: {
    title: "Insights — Raymond Cheung on Risk, Governance & ESG",
    description:
      "Commentary on enterprise risk, climate governance, capital strategy and ESG from a Chartered Actuary and former Nasdaq CEO.",
    url: "https://raymondcheungwm.com/insights",
  },
};

const categoryColors: Record<string, string> = {
  "Climate Risk": "#1a6b5a",
  "Enterprise Risk": "var(--midnight-navy)",
  "Insurance Innovation": "var(--executive-navy)",
  "Technology Risk": "var(--graphite)",
  "Insurance Capital": "#3d2820",
  ESG: "#1a6b5a",
  Governance: "var(--executive-navy)",
  Regulation: "var(--graphite)",
};

export default function InsightsPage() {
  const featured = insights[0];
  const rest = insights.slice(1);

  return (
    <div style={{ backgroundColor: "var(--warm-ivory)", paddingTop: "96px" }}>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, var(--midnight-navy) 0%, var(--executive-navy) 100%)",
        padding: "5rem 2rem 4rem", position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(229,102,74,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span style={{
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem",
            letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase",
            display: "block", marginBottom: "1.5rem",
          }}>
            Insights
          </span>
          <h1 style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800,
            letterSpacing: "-0.03em", color: "var(--warm-ivory)", lineHeight: 1.12,
            maxWidth: "600px", marginBottom: "1.5rem",
          }}>
            Ideas for leaders navigating uncertainty.
          </h1>
          <p style={{
            fontSize: "1.05rem", color: "rgba(245,243,236,0.65)",
            lineHeight: 1.75, maxWidth: "520px",
          }}>
            Perspectives on risk, insurance, climate transition, governance, ESG and the forces shaping organisations across Asia. Written by Raymond Cheung from 20 years at the sharp end.
          </p>
        </div>
      </section>

      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

          {/* Featured article */}
          <Link href={`/insights/${featured.slug}`} style={{ textDecoration: "none", display: "block", marginBottom: "4rem" }}>
            <article style={{
              background: "linear-gradient(135deg, var(--midnight-navy), var(--executive-navy))",
              borderRadius: "20px", padding: "3rem",
              display: "grid", gridTemplateColumns: "1fr auto",
              gap: "2rem", alignItems: "center",
              boxShadow: "var(--sh-deep)",
              transition: "transform 0.3s ease",
            }}
            className="featured-article"
            >
              <div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap" }}>
                  <span style={{
                    fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem",
                    letterSpacing: "0.1em", color: "white",
                    backgroundColor: "var(--strategic-teal)",
                    padding: "0.25rem 0.65rem", borderRadius: "999px", textTransform: "uppercase",
                  }}>{featured.category}</span>
                  <span style={{
                    fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem",
                    letterSpacing: "0.06em", color: "rgba(245,243,236,0.4)",
                    display: "flex", alignItems: "center", gap: "0.3rem",
                  }}><Clock size={10} />{featured.readingTime}</span>
                  <span style={{
                    fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem",
                    letterSpacing: "0.06em", color: "rgba(245,243,236,0.35)",
                  }}>{featured.date}</span>
                </div>
                <h2 style={{
                  fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                  fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 800,
                  letterSpacing: "-0.025em", color: "var(--warm-ivory)", lineHeight: 1.2,
                  marginBottom: "1rem",
                }}>{featured.title}</h2>
                <p style={{
                  fontSize: "0.92rem", color: "rgba(245,243,236,0.65)",
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
                background: "rgba(229,102,74,0.12)", border: "1px solid rgba(229,102,74,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <span style={{ fontSize: "2rem" }}>◆</span>
              </div>
            </article>
          </Link>

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}>
            {rest.map((insight) => (
              <article key={insight.id} style={{
                backgroundColor: "var(--white)", borderRadius: "16px",
                border: "1px solid rgba(42,31,26,0.08)",
                padding: "2rem", display: "flex", flexDirection: "column",
                boxShadow: "0 2px 12px rgba(120,70,50,0.06)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              className="insight-card"
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.5rem" }}>
                  <span style={{
                    fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.56rem",
                    letterSpacing: "0.1em", color: "var(--white)",
                    backgroundColor: categoryColors[insight.category] || "var(--graphite)",
                    padding: "0.22rem 0.6rem", borderRadius: "999px", textTransform: "uppercase",
                  }}>{insight.category}</span>
                  <span style={{
                    fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem",
                    letterSpacing: "0.06em", color: "rgba(42,31,26,0.35)",
                  }}>{insight.date}</span>
                </div>
                <h2 style={{
                  fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                  fontSize: "0.98rem", fontWeight: 700, letterSpacing: "-0.01em",
                  color: "var(--midnight-navy)", marginBottom: "0.85rem",
                  lineHeight: 1.35, flex: 1,
                }}>{insight.title}</h2>
                <p style={{
                  fontSize: "0.84rem", color: "var(--graphite)", lineHeight: 1.7,
                  marginBottom: "1.5rem", opacity: 0.75,
                }}>{insight.summary}</p>
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  paddingTop: "1rem", borderTop: "1px solid rgba(7,26,43,0.06)",
                }}>
                  <div style={{
                    display: "flex", alignItems: "center", gap: "0.4rem",
                    fontSize: "0.72rem", color: "rgba(32,42,51,0.45)",
                    fontFamily: "var(--font-ibm-mono), monospace", letterSpacing: "0.05em",
                  }}>
                    <Clock size={10} />{insight.readingTime}
                  </div>
                  <Link href={`/insights/${insight.slug}`} style={{
                    display: "inline-flex", alignItems: "center", gap: "0.35rem",
                    fontSize: "0.8rem", fontWeight: 600, color: "var(--strategic-teal)",
                    textDecoration: "none",
                    fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                  }} aria-label={`Read: ${insight.title}`}>
                    Read article <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .featured-article:hover { transform: translateY(-3px); }
        .insight-card:hover { transform: translateY(-4px); box-shadow: var(--sh-glass); }
        @media (max-width: 640px) {
          .featured-article { grid-template-columns: 1fr !important; }
          .featured-article > div:last-child { display: none; }
        }
      `}</style>
    </div>
  );
}
