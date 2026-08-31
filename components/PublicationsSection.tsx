import { publications, proprietaryCourses } from "@/data/publications";

export default function PublicationsSection() {
  const conferenceCount = publications.filter((p) => p.type === "conference").length;
  const publicationCount = publications.filter((p) => p.type === "publication").length;

  return (
    <section aria-labelledby="publications-heading">
      {/* Research & Publications */}
      <div style={{ marginBottom: "4rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
          <span style={{
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem",
            letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase",
          }}>Research & Publications</span>
          <div aria-hidden="true" style={{ flex: 1, height: "1px", backgroundColor: "rgba(42,31,26,0.1)" }} />
        </div>

        <h2 id="publications-heading" style={{
          fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
          fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em",
          color: "var(--midnight-navy)", marginBottom: "0.75rem",
        }}>
          Conference papers & publications
        </h2>
        <p style={{
          fontSize: "0.88rem", color: "var(--graphite)", opacity: 0.72,
          marginBottom: "2rem", lineHeight: 1.65,
        }}>
          {conferenceCount} conference presentations and {publicationCount} published works (2012–2016) — across international actuarial conferences, Singapore regulators, and regional industry bodies.
        </p>

        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {publications.map((pub, i) => (
            <li key={i} style={{
              display: "grid",
              gridTemplateColumns: "3rem 1fr",
              gap: "1rem",
              padding: "1.1rem 1.5rem",
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(42,31,26,0.07)",
              borderRadius: "12px",
            }}>
              <span style={{
                fontFamily: "var(--font-ibm-mono), monospace",
                fontSize: "0.62rem", letterSpacing: "0.08em",
                color: pub.type === "conference" ? "var(--strategic-teal)" : "var(--gold)",
                fontWeight: 600, paddingTop: "0.15rem",
              }}>{pub.year}</span>
              <div>
                <p style={{
                  fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                  fontSize: "0.875rem", fontWeight: 600,
                  color: "var(--midnight-navy)", marginBottom: "0.25rem", lineHeight: 1.45,
                }}>{pub.title}</p>
                <p style={{
                  fontSize: "0.78rem", color: "var(--graphite)", opacity: 0.65, lineHeight: 1.4,
                }}>
                  <span style={{
                    display: "inline-block", marginRight: "0.5rem",
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.58rem", letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: pub.type === "conference" ? "var(--strategic-teal)" : "var(--gold)",
                    background: pub.type === "conference" ? "rgba(229,102,74,0.08)" : "rgba(201,169,97,0.1)",
                    padding: "0.15rem 0.45rem", borderRadius: "4px",
                  }}>{pub.type === "conference" ? "conference" : "publication"}</span>
                  {pub.publisher}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Proprietary curricula */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
          <span style={{
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem",
            letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase",
          }}>Proprietary Curricula</span>
          <div aria-hidden="true" style={{ flex: 1, height: "1px", backgroundColor: "rgba(42,31,26,0.1)" }} />
        </div>

        <h2 style={{
          fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
          fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em",
          color: "var(--midnight-navy)", marginBottom: "0.75rem",
        }}>
          Training programmes I authored
        </h2>
        <p style={{
          fontSize: "0.88rem", color: "var(--graphite)", opacity: 0.72,
          marginBottom: "2rem", lineHeight: 1.65,
        }}>
          Ten original curricula built under BRCA Pte Ltd and delivered through accredited institutions across Asia — not programmes I teach, but programmes I created from the ground up.
        </p>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.75rem" }}>
          {proprietaryCourses.map((course, i) => (
            <li key={i} style={{
              display: "flex", alignItems: "flex-start", gap: "0.75rem",
              padding: "1rem 1.25rem",
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(42,31,26,0.07)",
              borderRadius: "12px",
            }}>
              <span aria-hidden="true" style={{
                color: "var(--gold)", fontSize: "0.55rem",
                marginTop: "0.3rem", flexShrink: 0,
              }}>◆</span>
              <span style={{
                fontSize: "0.84rem", color: "var(--midnight-navy)", fontWeight: 500, lineHeight: 1.5,
              }}>{course}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
