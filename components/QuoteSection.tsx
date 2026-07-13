import { profile } from "@/data/profile";

export default function QuoteSection() {
  const { signature } = profile;

  return (
    <section
      aria-label="Personal philosophy"
      style={{
        backgroundColor: "var(--warm-ivory)",
        padding: "7rem 2rem",
        borderTop: "1px solid rgba(7,26,43,0.06)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        {/* Gold divider above */}
        <div
          aria-hidden="true"
          style={{
            width: "40px",
            height: "2px",
            backgroundColor: "var(--gold)",
            margin: "0 auto 2.5rem",
          }}
        />

        <blockquote
          cite="Raymond Cheung"
          style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--midnight-navy)",
            lineHeight: 1.2,
            marginBottom: "1.5rem",
          }}
        >
          &ldquo;{signature.quote}&rdquo;
        </blockquote>

        <p
          style={{
            fontFamily: "var(--font-ibm-mono), monospace",
            fontSize: "0.7rem",
            letterSpacing: "0.14em",
            color: "var(--strategic-teal)",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          — {signature.attribution}
        </p>

        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--graphite)",
            lineHeight: 1.8,
            opacity: 0.7,
            maxWidth: "620px",
            margin: "0 auto",
          }}
        >
          {signature.context}
        </p>

        {/* Gold divider below */}
        <div
          aria-hidden="true"
          style={{
            width: "40px",
            height: "2px",
            backgroundColor: "var(--gold)",
            margin: "2.5rem auto 0",
          }}
        />

        {/* VERIFY BEFORE PUBLICATION: Confirm quote approval with Raymond */}
      </div>
    </section>
  );
}
