import { profile } from "@/data/profile";

export default function QuoteSection() {
  const { signature } = profile;

  return (
    <section
      aria-label="Personal philosophy"
      style={{
        background: "linear-gradient(160deg, var(--midnight-navy) 0%, #0a1929 100%)",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Faint grain texture via SVG noise */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
        pointerEvents: "none",
      }} />

      {/* Radial glow */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px", height: "400px",
        background: "radial-gradient(ellipse, rgba(201,169,97,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Decorative oversized open-quote */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "-0.5rem", left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "var(--font-cormorant, Georgia), serif",
        fontSize: "clamp(12rem, 22vw, 20rem)",
        fontWeight: 700,
        color: "rgba(201,169,97,0.05)",
        lineHeight: 1,
        userSelect: "none",
        pointerEvents: "none",
      }}>&ldquo;</div>

      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

        {/* Gold rule */}
        <div aria-hidden="true" style={{
          width: "48px", height: "2px",
          background: "linear-gradient(90deg, var(--gold), rgba(201,169,97,0.4))",
          margin: "0 auto 3rem", borderRadius: "2px",
        }} />

        <blockquote
          cite="Raymond Cheung"
          style={{
            fontFamily: "var(--font-cormorant, Georgia), serif",
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 600,
            fontStyle: "italic",
            letterSpacing: "-0.015em",
            color: "var(--warm-ivory)",
            lineHeight: 1.2,
            marginBottom: "2.25rem",
          }}
        >
          &ldquo;{signature.quote}&rdquo;
        </blockquote>

        <p style={{
          fontFamily: "var(--font-ibm-mono), monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.18em",
          color: "var(--gold)",
          textTransform: "uppercase",
          marginBottom: "2.5rem",
        }}>
          — {signature.attribution}
        </p>

        <p style={{
          fontSize: "0.95rem",
          color: "rgba(244,229,208,0.55)",
          lineHeight: 1.85,
          maxWidth: "580px",
          margin: "0 auto",
        }}>
          {signature.context}
        </p>

        {/* Gold rule */}
        <div aria-hidden="true" style={{
          width: "48px", height: "2px",
          background: "linear-gradient(90deg, rgba(201,169,97,0.4), var(--gold))",
          margin: "3rem auto 0", borderRadius: "2px",
        }} />
      </div>
    </section>
  );
}
