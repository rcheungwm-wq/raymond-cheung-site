import Link from "next/link";
import { ArrowRight } from "lucide-react";

const audiences = [
  {
    tag: "For Boards & Nominating Committees",
    title: "Independent director & board adviser",
    body:
      "I currently serve on Nasdaq- and SGX-listed boards, chairing Nominating and Risk Committees. Having been the statutory Chief Risk Officer reporting into board risk committees, I know exactly what useful challenge looks like from both sides of the table.",
    points: [
      "Independent directorship and committee chairmanship",
      "Risk and audit committee challenge",
      "IPO readiness and listing governance",
    ],
    href: "/advisory",
    cta: "Board & Advisory Work",
  },
  {
    tag: "For Insurers & Financial Institutions",
    title: "Enterprise risk, capital & ESG advisory",
    body:
      "Through CER Consultancy I advise insurers, financial institutions and regulators on the frameworks that hold up under scrutiny — ERM and ORSA design, RBC2 capital work, climate and ESG governance, and the regulatory submissions that follow.",
    points: [
      "ERM framework and ORSA design",
      "Risk-based capital (RBC2) and regulatory submissions",
      "Climate risk and ESG governance",
    ],
    href: "/expertise",
    cta: "Explore Expertise",
  },
  {
    tag: "For Institutions & Conference Organisers",
    title: "Executive training & keynote speaking",
    body:
      "I have authored ten proprietary curricula — ERM, RBC2, cyber, IoT, blockchain, PDPA — delivered through SMU Academy, the Singapore College of Insurance and APARI Indonesia. I lecture at ESSEC and have presented at conferences across Asia since 2012.",
    points: [
      "Accredited executive programmes and certifications",
      "Board and C-suite briefings",
      "Conference keynotes and panel moderation",
    ],
    href: "/training-speaking",
    cta: "Training & Speaking",
  },
];

export default function AudienceRouter() {
  return (
    <section
      id="how-i-help"
      aria-labelledby="audience-heading"
      style={{ backgroundColor: "var(--warm-ivory)", padding: "5rem 2rem" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
          <span style={{
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem",
            letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase",
          }}>How I Work With Organisations</span>
          <div aria-hidden="true" style={{ flex: 1, height: "1px", backgroundColor: "rgba(242,237,227,0.1)" }} />
        </div>

        <h2 id="audience-heading" style={{
          fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
          fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700,
          letterSpacing: "-0.025em", color: "var(--ink)", lineHeight: 1.22,
          marginBottom: "1rem", maxWidth: "760px",
        }}>
          Three ways organisations bring me in
        </h2>
        <p style={{
          fontSize: "1rem", color: "var(--graphite)", opacity: 0.8,
          lineHeight: 1.75, maxWidth: "640px", marginBottom: "3rem",
        }}>
          The work differs, but the underlying demand is the same: turning complex,
          high-stakes situations into decisions a board can actually make.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {audiences.map((a) => (
            <div key={a.tag} style={{
              display: "flex", flexDirection: "column",
              background: "var(--glass)",
              backdropFilter: "none",
              WebkitBackdropFilter: "none",
              border: "1px solid var(--glass-border)",
              borderRadius: "2px", padding: "2rem",
              boxShadow: "var(--sh-glass)",
            }}>
              <span style={{
                fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem",
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--strategic-teal)",
                background: "rgba(201,169,97,0.08)",
                padding: "0.3rem 0.7rem", borderRadius: "999px",
                alignSelf: "flex-start", marginBottom: "1.25rem",
              }}>{a.tag}</span>

              <h3 style={{
                fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                fontSize: "1.12rem", fontWeight: 700, letterSpacing: "-0.015em",
                color: "var(--ink)", lineHeight: 1.3, marginBottom: "0.85rem",
              }}>{a.title}</h3>

              <p style={{
                fontSize: "0.88rem", color: "var(--graphite)", opacity: 0.82,
                lineHeight: 1.72, marginBottom: "1.5rem",
              }}>{a.body}</p>

              <ul style={{
                listStyle: "none", padding: 0, margin: "0 0 1.75rem",
                display: "flex", flexDirection: "column", gap: "0.55rem",
                borderTop: "1px solid rgba(242,237,227,0.08)", paddingTop: "1.25rem",
              }}>
                {a.points.map((pt) => (
                  <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: "0.7rem" }}>
                    <span aria-hidden="true" style={{
                      color: "var(--gold)", fontSize: "0.55rem",
                      marginTop: "0.32rem", flexShrink: 0,
                    }}>◆</span>
                    <span style={{
                      fontSize: "0.83rem", color: "var(--ink)",
                      fontWeight: 500, lineHeight: 1.55,
                    }}>{pt}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={a.href}
                style={{
                  marginTop: "auto", display: "inline-flex", alignItems: "center",
                  gap: "0.5rem", textDecoration: "none",
                  fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                  fontSize: "0.83rem", fontWeight: 700, color: "var(--strategic-teal)",
                }}
              >
                {a.cta} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
