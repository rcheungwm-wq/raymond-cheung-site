"use client";

import { credibilityOrgs } from "@/data/profile";

export default function CredibilityStrip() {
  return (
    <section
      aria-label="Professional background"
      style={{
        backgroundColor: "var(--executive-navy)",
        borderTop: "1px solid rgba(21,154,146,0.15)",
        borderBottom: "1px solid rgba(21,154,146,0.15)",
        padding: "3rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-ibm-mono), monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            color: "rgba(245,243,236,0.4)",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Experience across some of Asia&rsquo;s most demanding risk environments
        </p>

        {/* Scrollable org list */}
        <div
          style={{
            display: "flex",
            gap: "0",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {credibilityOrgs.map((org, i) => (
            <div
              key={org.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  letterSpacing: "0.04em",
                  color: "rgba(245,243,236,0.72)",
                  padding: "0.5rem 1.25rem",
                  whiteSpace: "nowrap",
                }}
              >
                {org.name}
              </span>
              {i < credibilityOrgs.length - 1 && (
                <span
                  aria-hidden="true"
                  style={{
                    color: "rgba(193,162,105,0.3)",
                    fontSize: "0.7rem",
                  }}
                >
                  ·
                </span>
              )}
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-ibm-mono), monospace",
            fontSize: "0.58rem",
            letterSpacing: "0.08em",
            color: "rgba(245,243,236,0.22)",
            textAlign: "center",
            marginTop: "2rem",
            lineHeight: 1.6,
          }}
        >
          Selected organisations and environments connected to Raymond&rsquo;s
          professional journey. References do not imply endorsement.
        </p>
      </div>
    </section>
  );
}
