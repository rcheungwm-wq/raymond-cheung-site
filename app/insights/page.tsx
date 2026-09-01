import type { Metadata } from "next";
import { insights } from "@/data/insights";
import InsightsClient from "./InsightsClient";

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

export default function InsightsPage() {
  return (
    <div style={{ backgroundColor: "var(--warm-ivory)", paddingTop: "96px" }}>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, var(--midnight-navy) 0%, var(--executive-navy) 100%)",
        padding: "5rem 2rem 4rem", position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(201,169,97,0.08) 0%, transparent 60%)",
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
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400,
            color: "var(--ink)", lineHeight: 1.1,
            maxWidth: "600px", marginBottom: "1.5rem",
          }}>
            Ideas for leaders navigating uncertainty.
          </h1>
          <p style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "1.05rem", color: "rgba(26,23,18,0.65)",
            lineHeight: 1.75, maxWidth: "520px",
          }}>
            Perspectives on risk, insurance, climate transition, governance, ESG and the forces shaping organisations across Asia. Written by Raymond Cheung from 24 years at the sharp end.
          </p>
        </div>
      </section>

      <section style={{ padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <InsightsClient insights={insights} />
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
