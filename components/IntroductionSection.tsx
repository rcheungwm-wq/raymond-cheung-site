import { profile } from "@/data/profile";

export default function IntroductionSection() {
  const { philosophy } = profile;

  return (
    <section
      id="perspective"
      aria-labelledby="perspective-heading"
      style={{ backgroundColor: "var(--warm-ivory)", padding: "5rem 2rem" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
          <span style={{
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem",
            letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase",
          }}>01 / Perspective</span>
          <div aria-hidden="true" style={{ flex: 1, height: "1px", backgroundColor: "rgba(242,237,227,0.1)" }} />
        </div>

        {/* Two-column: text + Singapore image */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", marginBottom: "4rem" }} className="intro-grid">
          <div>
            <h2 id="perspective-heading" style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700,
              letterSpacing: "-0.025em", color: "var(--ink)", lineHeight: 1.22, marginBottom: "1.75rem",
            }}>{philosophy.headline}</h2>
            <p style={{ fontSize: "1.05rem", color: "var(--graphite)", lineHeight: 1.8, opacity: 0.82 }}>
              {philosophy.body}
            </p>
          </div>

          {/* Singapore image */}
          <div style={{ position: "relative", borderRadius: "2px", overflow: "hidden", aspectRatio: "4/3", boxShadow: "var(--sh-deep)" }}>
            <img
              src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=900&q=80&auto=format"
              alt="Singapore financial district skyline"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, rgba(242,237,227,0.35) 0%, transparent 60%)",
            }} />
            <div style={{
              position: "absolute", bottom: "1.5rem", left: "1.5rem",
              background: "var(--glass-strong)", backdropFilter: "none",
              WebkitBackdropFilter: "none", border: "1px solid var(--glass-border)",
              borderRadius: "2px", padding: "0.65rem 1.1rem",
            }}>
              <p style={{
                fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem",
                letterSpacing: "0.14em", color: "var(--ink)", textTransform: "uppercase", margin: 0,
              }}>Singapore · Asia Pacific</p>
            </div>
          </div>
        </div>

        {/* Three principles — glass cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
          {philosophy.principles.map((p, i) => (
            <div key={p.title} style={{
              background: i === 1 ? "var(--midnight-navy)" : "var(--glass)",
              backdropFilter: i === 1 ? "none" : "blur(20px) saturate(140%)",
              WebkitBackdropFilter: i === 1 ? "none" : "blur(20px) saturate(140%)",
              border: i === 1 ? "1px solid var(--rule-soft)" : "1px solid var(--glass-border)",
              borderRadius: "2px", padding: "2.25rem",
              boxShadow: "var(--sh-glass)",
            }}>
              <div aria-hidden="true" style={{
                width: "36px", height: "3px", borderRadius: "2px",
                backgroundColor: i === 1 ? "var(--gold)" : "var(--strategic-teal)",
                marginBottom: "1.5rem",
              }} />
              <h3 style={{
                fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: i === 1 ? "var(--ink)" : "var(--ink)", marginBottom: "0.85rem",
              }}>{p.title}</h3>
              <p style={{
                fontSize: "0.9rem",
                color: i === 1 ? "rgba(242,237,227,0.68)" : "var(--graphite)",
                lineHeight: 1.75, opacity: i === 1 ? 1 : 0.85, margin: 0,
              }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 899px) { .intro-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
      `}</style>
    </section>
  );
}
