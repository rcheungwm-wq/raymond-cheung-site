import { credibilityGroups } from "@/data/profile";

export default function CredibilityStrip() {
  return (
    <section
      aria-labelledby="credibility-heading"
      style={{
        background: "linear-gradient(135deg, var(--midnight-navy) 0%, var(--executive-navy) 100%)",
        padding: "3.5rem 2rem",
        position: "relative", overflow: "hidden",
      }}
    >
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(201,169,97,0.08) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        <h2 id="credibility-heading" style={{
          fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem",
          letterSpacing: "0.2em", color: "rgba(242,237,227,0.45)", textTransform: "uppercase",
          textAlign: "center", marginBottom: "2.5rem", fontWeight: 400,
        }}>
          Twenty-four years across Asia&rsquo;s boardrooms, insurers and institutions
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "2rem 2.5rem",
        }}>
          {credibilityGroups.map((group) => (
            <div key={group.label}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem" }}>
                <span aria-hidden="true" style={{
                  width: "16px", height: "2px", backgroundColor: "var(--gold)",
                  borderRadius: "2px", flexShrink: 0,
                }} />
                <p style={{
                  fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                  fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.02em",
                  color: "var(--gold)",
                }}>{group.label}</p>
              </div>

              <p style={{
                fontSize: "0.68rem", color: "rgba(242,237,227,0.4)",
                lineHeight: 1.5, marginBottom: "1rem", paddingLeft: "1.6rem",
              }}>{group.note}</p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, paddingLeft: "1.6rem" }}>
                {group.orgs.map((org) => (
                  <li key={org} style={{
                    fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                    fontWeight: 600, fontSize: "0.83rem", letterSpacing: "0.01em",
                    color: "rgba(242,237,227,0.92)", lineHeight: 1.5,
                    paddingBottom: "0.45rem",
                  }}>{org}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
