import { careerJourney } from "@/data/experience";

export default function CareerJourney() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      style={{
        backgroundColor: "var(--midnight-navy)",
        padding: "7rem 2rem",
        overflow: "hidden",
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
            03 / Journey
          </span>
          <div
            aria-hidden="true"
            style={{ flex: 1, height: "1px", backgroundColor: "rgba(21,154,146,0.15)" }}
          />
        </div>

        <h2
          id="journey-heading"
          style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "var(--warm-ivory)",
            maxWidth: "580px",
            marginBottom: "4rem",
            lineHeight: 1.2,
          }}
        >
          A career built across the full risk and insurance value chain.
        </h2>

        {/* Timeline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {careerJourney.map((stage, i) => (
            <div
              key={stage.id}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1px 1fr",
                gap: "0 2rem",
                paddingBottom: i < careerJourney.length - 1 ? "3rem" : "0",
              }}
            >
              {/* Stage number */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingTop: "0.1rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.1em",
                    color: "var(--gold)",
                  }}
                >
                  {stage.stage}
                </span>
              </div>

              {/* Vertical line + dot */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "var(--strategic-teal)",
                    border: "2px solid var(--midnight-navy)",
                    boxShadow: "0 0 0 1px var(--strategic-teal)",
                    flexShrink: 0,
                    marginTop: "0.15rem",
                  }}
                />
                {i < careerJourney.length - 1 && (
                  <div
                    aria-hidden="true"
                    style={{
                      flex: 1,
                      width: "1px",
                      backgroundColor: "rgba(21,154,146,0.2)",
                      marginTop: "0.5rem",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: "0.5rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: "var(--warm-ivory)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {stage.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(245,243,236,0.62)",
                    lineHeight: 1.7,
                    marginBottom: stage.highlights ? "0.75rem" : "0",
                    maxWidth: "540px",
                  }}
                >
                  {stage.description}
                </p>
                {stage.highlights && (
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.25rem",
                    }}
                  >
                    {stage.highlights.map((h) => (
                      <li
                        key={h}
                        style={{
                          fontFamily: "var(--font-ibm-mono), monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.06em",
                          color: "rgba(21,154,146,0.8)",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <span aria-hidden="true">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div
          style={{
            marginTop: "4rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(21,154,146,0.15)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              fontWeight: 600,
              color: "rgba(245,243,236,0.5)",
              letterSpacing: "-0.01em",
              fontStyle: "italic",
            }}
          >
            The common thread:{" "}
            <span style={{ color: "var(--warm-ivory)" }}>
              turning emerging complexity into practical action.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
