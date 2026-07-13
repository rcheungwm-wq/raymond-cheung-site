import { profile } from "@/data/profile";

export default function IntroductionSection() {
  const { philosophy } = profile;

  return (
    <section
      id="perspective"
      aria-labelledby="perspective-heading"
      style={{
        backgroundColor: "var(--warm-ivory)",
        padding: "7rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: "var(--strategic-teal)",
              textTransform: "uppercase",
            }}
          >
            01 / Perspective
          </span>
          <div
            aria-hidden="true"
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: "rgba(7,26,43,0.08)",
            }}
          />
        </div>

        {/* Main quote */}
        <div
          style={{
            maxWidth: "820px",
            marginBottom: "5rem",
          }}
        >
          <h2
            id="perspective-heading"
            style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "var(--midnight-navy)",
              lineHeight: 1.25,
              marginBottom: "2rem",
            }}
          >
            {philosophy.headline}
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--graphite)",
              lineHeight: 1.8,
              opacity: 0.82,
            }}
          >
            {philosophy.body}
          </p>
        </div>

        {/* Three principles */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2px",
          }}
        >
          {philosophy.principles.map((p, i) => (
            <div
              key={p.title}
              style={{
                backgroundColor: i === 1 ? "var(--midnight-navy)" : "var(--white)",
                border: "1px solid rgba(7,26,43,0.07)",
                padding: "2.5rem",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: "32px",
                  height: "2px",
                  backgroundColor: i === 1 ? "var(--gold)" : "var(--strategic-teal)",
                  marginBottom: "1.5rem",
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: i === 1 ? "var(--warm-ivory)" : "var(--midnight-navy)",
                  marginBottom: "0.85rem",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: i === 1 ? "rgba(245,243,236,0.65)" : "var(--graphite)",
                  lineHeight: 1.7,
                  opacity: i === 1 ? 1 : 0.8,
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
