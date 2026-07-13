"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: "20+", label: "Years in Risk & Insurance", context: "Across Asia Pacific markets" },
  { value: "S$50B+", label: "Assets Risk-Managed", context: "Across insurers and financial institutions" },
  { value: "3,000+", label: "Professionals Trained", context: "Through executive programmes and workshops" },
  { value: "8+", label: "Regulatory Frameworks", context: "MAS, HKIA, OJK, CBIRC and beyond" },
  { value: "15+", label: "Board & Advisory Roles", context: "Across insurance, fintech and ESG organisations" },
  { value: "40+", label: "Keynotes & Conferences", context: "As invited speaker across Asia" },
];

export default function ImpactMetrics() {
  return (
    <section
      aria-labelledby="metrics-heading"
      style={{
        background: "linear-gradient(135deg, var(--midnight-navy) 0%, var(--executive-navy) 100%)",
        padding: "5rem 2rem", position: "relative", overflow: "hidden",
      }}
    >
      <div aria-hidden="true" style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(201,169,97,0.4), transparent)",
      }} />
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(229,102,74,0.07) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3.5rem" }}>
          <span style={{
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem",
            letterSpacing: "0.2em", color: "rgba(201,169,97,0.6)", textTransform: "uppercase",
          }}>Impact at Scale</span>
          <div aria-hidden="true" style={{ flex: 1, height: "1px", backgroundColor: "rgba(244,229,208,0.1)" }} />
        </div>

        <h2 id="metrics-heading" className="sr-only">Impact metrics</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
          {metrics.map((m, i) => (
            <div key={m.label} style={{
              background: i % 3 === 1 ? "rgba(229,102,74,0.12)" : "rgba(255,255,255,0.04)",
              border: i % 3 === 1 ? "1px solid rgba(229,102,74,0.2)" : "1px solid rgba(255,255,255,0.07)",
              borderRadius: "20px", padding: "2.25rem 1.75rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}>
              <div style={{
                fontFamily: "var(--font-cormorant, Georgia), serif",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 700,
                color: i % 3 === 1 ? "var(--strategic-teal)" : "var(--gold)",
                lineHeight: 1, marginBottom: "0.5rem", letterSpacing: "-0.02em",
              }}>{m.value}</div>
              <div style={{
                fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                fontSize: "0.82rem", fontWeight: 600,
                color: "rgba(244,229,208,0.9)", marginBottom: "0.5rem",
              }}>{m.label}</div>
              <div style={{
                fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem",
                letterSpacing: "0.06em", color: "rgba(244,229,208,0.38)", lineHeight: 1.6,
              }}>{m.context}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
