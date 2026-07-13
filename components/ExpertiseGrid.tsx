"use client";

import { useState } from "react";
import Link from "next/link";

const domains = [
  {
    title: "Enterprise Risk Management",
    tag: "ERM",
    summary: "Designing risk frameworks, ORSA processes and stress-testing programmes that connect risk appetite to board-level decision-making.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80&auto=format",
    caps: ["Risk Appetite", "ORSA", "Stress Testing", "Capital Models"],
  },
  {
    title: "Insurance & Capital",
    tag: "Insurance",
    summary: "Deep technical fluency across life, general and reinsurance—covering product, pricing, reserving and regulatory capital regimes.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80&auto=format",
    caps: ["RBC Regimes", "Reserving", "Reinsurance", "Pricing"],
  },
  {
    title: "ESG & Climate Transition",
    tag: "ESG",
    summary: "Translating climate science into quantified financial risk—transition scenarios, physical risk modelling and sustainable finance.",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&q=80&auto=format",
    caps: ["TCFD", "Climate Scenarios", "Green Finance", "Reporting"],
  },
  {
    title: "Board & Governance",
    tag: "Governance",
    summary: "Working with boards and audit/risk committees to strengthen oversight capability, director literacy and strategic risk culture.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80&auto=format",
    caps: ["Board Advisory", "Risk Culture", "Director Literacy", "Oversight"],
  },
  {
    title: "Innovation & InsurTech",
    tag: "Innovation",
    summary: "Applying AI, data analytics and digital platforms to underwriting, distribution and claims—bridging technology and actuarial rigour.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80&auto=format",
    caps: ["AI in Insurance", "Data Analytics", "Digital Platforms", "InsurTech"],
  },
  {
    title: "Leadership & Culture",
    tag: "Leadership",
    summary: "Coaching C-suite leaders and building high-performance risk teams that translate technical insight into organisational action.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80&auto=format",
    caps: ["C-Suite Coaching", "Team Building", "Change Management", "Culture"],
  },
];

export default function ExpertiseGrid() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      style={{ backgroundColor: "var(--soft-mist)", padding: "5rem 2rem" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
          <span style={{
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem",
            letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase",
          }}>02 / Expertise</span>
          <div aria-hidden="true" style={{ flex: 1, height: "1px", backgroundColor: "rgba(42,31,26,0.1)" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <h2 id="expertise-heading" style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700,
            letterSpacing: "-0.025em", color: "var(--midnight-navy)", lineHeight: 1.22, margin: 0,
          }}>Six domains of deep expertise</h2>
          <span style={{
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem",
            letterSpacing: "0.12em", color: "rgba(42,31,26,0.38)", textTransform: "uppercase",
          }}>Across Asia · 20+ years</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {domains.map((domain, i) => (
            <div key={domain.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "var(--glass)",
                backdropFilter: "blur(20px) saturate(140%)",
                WebkitBackdropFilter: "blur(20px) saturate(140%)",
                border: "1px solid var(--glass-border)",
                borderRadius: "20px", overflow: "hidden",
                boxShadow: hovered === i ? "var(--sh-deep)" : "var(--sh-glass)",
                transform: hovered === i ? "translateY(-4px)" : "none",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              <div style={{ position: "relative", height: "160px", overflow: "hidden" }}>
                <img src={domain.img} alt={domain.title} loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block",
                    transform: hovered === i ? "scale(1.04)" : "scale(1)", transition: "transform 0.4s ease" }} />
                <div aria-hidden="true" style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, rgba(42,31,26,0.08) 0%, rgba(42,31,26,0.5) 100%)",
                }} />
                <div style={{
                  position: "absolute", bottom: "1rem", left: "1rem",
                  background: "rgba(229,102,74,0.9)", borderRadius: "999px",
                  padding: "0.3rem 0.9rem",
                }}>
                  <span style={{
                    fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem",
                    letterSpacing: "0.12em", color: "#fff", textTransform: "uppercase",
                  }}>{domain.tag}</span>
                </div>
              </div>
              <div style={{ padding: "1.75rem" }}>
                <div aria-hidden="true" style={{
                  width: "30px", height: "2.5px", borderRadius: "2px",
                  backgroundColor: "var(--strategic-teal)", marginBottom: "1rem",
                }} />
                <h3 style={{
                  fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                  fontSize: "1rem", fontWeight: 700, color: "var(--midnight-navy)",
                  letterSpacing: "-0.01em", marginBottom: "0.75rem",
                }}>{domain.title}</h3>
                <p style={{
                  fontSize: "0.88rem", color: "var(--graphite)", lineHeight: 1.72,
                  opacity: 0.82, marginBottom: "1.25rem",
                }}>{domain.summary}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                  {domain.caps.map((cap) => (
                    <span key={cap} style={{
                      fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem",
                      letterSpacing: "0.1em", color: "var(--midnight-navy)",
                      backgroundColor: "rgba(42,31,26,0.06)", borderRadius: "999px",
                      padding: "0.3rem 0.75rem", textTransform: "uppercase",
                    }}>{cap}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
