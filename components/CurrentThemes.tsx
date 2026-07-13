import { currentThemes } from "@/data/expertise";

export default function CurrentThemes() {
  return (
    <section
      id="current-agenda"
      aria-labelledby="themes-heading"
      style={{
        backgroundColor: "var(--executive-navy)",
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
            04 / Current Agenda
          </span>
          <div
            aria-hidden="true"
            style={{ flex: 1, height: "1px", backgroundColor: "rgba(21,154,146,0.15)" }}
          />
        </div>

        <h2
          id="themes-heading"
          style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "var(--warm-ivory)",
            maxWidth: "480px",
            marginBottom: "3.5rem",
            lineHeight: 1.2,
          }}
        >
          The questions leaders must prepare for now.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5px",
          }}
        >
          {currentThemes.map((theme, i) => (
            <article
              key={theme.id}
              style={{
                backgroundColor:
                  i === 0
                    ? "rgba(21,154,146,0.12)"
                    : "rgba(245,243,236,0.03)",
                border:
                  i === 0
                    ? "1px solid rgba(21,154,146,0.25)"
                    : "1px solid rgba(245,243,236,0.06)",
                padding: "2.25rem",
                borderRadius: "1px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.14em",
                    color: "var(--gold)",
                    textTransform: "uppercase",
                  }}
                >
                  {theme.number}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    color: "var(--strategic-teal)",
                    textTransform: "uppercase",
                  }}
                >
                  {theme.label}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: "var(--warm-ivory)",
                  marginBottom: "0.85rem",
                  lineHeight: 1.3,
                }}
              >
                {theme.headline}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(245,243,236,0.58)",
                  lineHeight: 1.75,
                }}
              >
                {theme.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
