"use client";

import { credibilityOrgs } from "@/data/profile";

export default function CredibilityStrip() {
  return (
    <section
      aria-label="Professional background"
      style={{
        background: "linear-gradient(135deg, var(--midnight-navy) 0%, var(--executive-navy) 100%)",
        padding: "2.5rem 2rem",
        position: "relative", overflow: "hidden",
      }}
    >
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(255,140,114,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        <p style={{
          fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem",
          letterSpacing: "0.2em", color: "rgba(244,229,208,0.45)", textTransform: "uppercase",
          textAlign: "center", marginBottom: "1.5rem",
        }}>
          Experience across some of Asia&rsquo;s most demanding risk environments
        </p>

        <div style={{ display: "flex", gap: 0, flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          {credibilityOrgs.map((org, i) => (
            <div key={org.name} style={{ display: "flex", alignItems: "center", gap: 0 }}>
              <span style={{
                fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.04em",
                color: "rgba(244,229,208,0.75)", padding: "0.4rem 1.1rem", whiteSpace: "nowrap",
              }}>{org.name}</span>
              {i < credibilityOrgs.length - 1 && (
                <span aria-hidden="true" style={{ color: "rgba(201,169,97,0.35)", fontSize: "0.7rem" }}>·</span>
              )}
            </div>
          ))}
        </div>

        <p style={{
          fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.56rem",
          letterSpacing: "0.08em", color: "rgba(244,229,208,0.2)", textAlign: "center",
          marginTop: "1.5rem", lineHeight: 1.6,
        }}>
          Selected organisations connected to Raymond&rsquo;s professional journey. References do not imply endorsement.
        </p>
      </div>
    </section>
  );
}
