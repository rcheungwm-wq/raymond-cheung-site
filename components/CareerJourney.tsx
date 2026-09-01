import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { careerJourney } from "@/data/experience";

/* Homepage shows a curated arc — statutory CRO, Grab, the Nasdaq listing,
   and current mandates. The full eight-stage journey lives on /about. */
const FEATURED = [2, 4, 6, 7];
const featured = FEATURED.map((i) => careerJourney[i]).filter(Boolean);

export default function CareerJourney() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      style={{ backgroundColor: "var(--soft-mist)", padding: "5rem 2rem" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
          <span style={{
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem",
            letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase",
          }}>03 / Career Journey</span>
          <div aria-hidden="true" style={{ flex: 1, height: "1px", backgroundColor: "rgba(26,23,18,0.1)" }} />
        </div>

        <h2 id="journey-heading" style={{
          fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
          fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700,
          letterSpacing: "-0.025em", color: "var(--ink)", lineHeight: 1.22,
          marginBottom: "3.5rem",
        }}>Two decades at the sharp end of Asia&rsquo;s risk landscape</h2>

        <div style={{ position: "relative" }}>
          <div aria-hidden="true" style={{
            position: "absolute", left: "11px", top: "8px", bottom: "8px", width: "2px",
            background: "linear-gradient(to bottom, var(--strategic-teal), var(--gold))",
            borderRadius: "2px",
          }} />

          <ol style={{ listStyle: "none", padding: 0, margin: 0, paddingLeft: "2.5rem" }}>
            {featured.map((m, i) => {
              const isCurrent = i === featured.length - 1;
              return (
              <li key={`${m.period}-${m.title}`} style={{ position: "relative", marginBottom: isCurrent ? 0 : "1.5rem" }}>
                <div aria-hidden="true" style={{
                  position: "absolute", left: "-2.5rem", top: "4px",
                  width: "24px", height: "24px", borderRadius: "50%",
                  backgroundColor: isCurrent ? "var(--gold)" : "var(--warm-ivory)",
                  border: `2px solid ${isCurrent ? "var(--gold)" : "rgba(26,23,18,0.2)"}`,
                  boxShadow: isCurrent ? "0 0 0 4px rgba(201,169,97,0.18)" : "none",
                }} />

                <div style={{
                  background: "var(--glass)",
                  backdropFilter: "none",
                  WebkitBackdropFilter: "none",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "2px", padding: "1.5rem 2rem",
                  boxShadow: "var(--sh-glass)",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <div>
                      <span style={{
                        fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem",
                        letterSpacing: "0.14em", color: "var(--strategic-teal)", textTransform: "uppercase",
                      }}>{m.period}</span>
                      <h3 style={{
                        fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                        fontWeight: 700, fontSize: "0.95rem", color: "var(--ink)",
                        margin: "0.25rem 0 0",
                      }}>{m.title}</h3>
                    </div>
                    <span style={{
                      fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem",
                      letterSpacing: "0.1em", color: "rgba(26,23,18,0.45)", textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}>{m.thread}</span>
                  </div>
                  <p style={{ fontSize: "0.88rem", color: "var(--graphite)", lineHeight: 1.7, opacity: 0.82, margin: 0 }}>
                    {m.description}
                  </p>
                </div>
              </li>
              );
            })}
          </ol>
        </div>

        <div style={{ marginTop: "2.5rem", paddingLeft: "2.5rem" }}>
          <Link href="/about" className="link-teal">
            Full career, 2002 to present <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
