"use client";

import { useState } from "react";
import Link from "next/link";

const domains = [
  {
    title: "Enterprise Risk Management",
    tag: "ERM",
    summary: "I build risk frameworks that actually guide decisions — connecting risk appetite, governance, strategy and board reporting into one coherent system that works under pressure.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80&auto=format",
    caps: ["Risk Appetite", "Governance", "Stress Testing", "Board Reporting"],
  },
  {
    title: "Insurance, Reinsurance & Capital",
    tag: "Insurance",
    summary: "Capital is not just a regulatory number. It shapes your strategic choices, product viability and reinsurance structure. I connect technical capital decisions to commercial strategy — because I've had to make them.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80&auto=format",
    caps: ["Risk-Based Capital", "Reserving", "Reinsurance", "Regulation"],
  },
  {
    title: "Climate Risk & ESG",
    tag: "ESG",
    summary: "I help you move from broad ESG commitments to measurable governance, underwriting, investment and disclosure action — before regulators require it and before the gap becomes a liability.",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&q=80&auto=format",
    caps: ["Climate Transition", "ESG Strategy", "TCFD", "Sustainability"],
  },
  {
    title: "Board & Governance Advisory",
    tag: "Governance",
    summary: "I help your board ask better questions and build real oversight capability. I've sat on both sides of the table — as CRO presenting to directors and as an independent director receiving those reports.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80&auto=format",
    caps: ["Board Advisory", "Risk Literacy", "Committee Effectiveness", "Oversight"],
  },
  {
    title: "Insurtech, AI & Digital Transformation",
    tag: "InsurTech",
    summary: "I built digital insurance at platform scale across eight ASEAN markets. I understand what technology changes, what it demands of governance, and where the gaps typically open up — because I've navigated them.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80&auto=format",
    caps: ["AI Governance", "Digital Insurance", "InsurTech Strategy", "Embedded Insurance"],
  },
  {
    title: "Executive Education & Training",
    tag: "Education",
    summary: "I design learning experiences from the perspective of someone who has held the roles my participants are navigating. Technically rigorous, practically grounded — and built to change how people actually make decisions.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80&auto=format",
    caps: ["Corporate Training", "Board Programmes", "Climate Risk", "ESG Education"],
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
          <div aria-hidden="true" style={{ flex: 1, height: "1px", backgroundColor: "rgba(242,237,227,0.1)" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <h2 id="expertise-heading" style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700,
            letterSpacing: "-0.025em", color: "var(--ink)", lineHeight: 1.22, margin: 0,
          }}>Six domains of deep expertise</h2>
          <span style={{
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem",
            letterSpacing: "0.12em", color: "rgba(242,237,227,0.38)", textTransform: "uppercase",
          }}>Across Asia · 20+ years</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {domains.map((domain, i) => (
            <div key={domain.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "var(--glass)",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                border: "1px solid var(--glass-border)",
                borderRadius: "2px", overflow: "hidden",
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
                  background: "linear-gradient(to bottom, rgba(242,237,227,0.08) 0%, rgba(242,237,227,0.5) 100%)",
                }} />
                <div style={{
                  position: "absolute", bottom: "1rem", left: "1rem",
                  background: "rgba(201,169,97,0.9)", borderRadius: "999px",
                  padding: "0.3rem 0.9rem",
                }}>
                  <span style={{
                    fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem",
                    letterSpacing: "0.12em", color: "var(--ink)", textTransform: "uppercase",
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
                  fontSize: "1rem", fontWeight: 700, color: "var(--ink)",
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
                      letterSpacing: "0.1em", color: "var(--ink)",
                      backgroundColor: "rgba(242,237,227,0.06)", borderRadius: "999px",
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
