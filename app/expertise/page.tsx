import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { expertiseAreas } from "@/data/expertise";

export const metadata: Metadata = {
  title: "Expertise — Enterprise Risk, Capital, Climate & ESG",
  description:
    "Enterprise risk management and ORSA design, risk-based capital (RBC2) and MAS regulatory submissions, climate and environmental risk, ESG governance and insurtech strategy — from a Chartered Actuary and former statutory Chief Risk Officer at AIG Asia Pacific.",
  alternates: { canonical: "https://raymondcheungwm.com/expertise" },
  openGraph: {
    title: "Expertise — Enterprise Risk, Capital, Climate & ESG",
    description:
      "ERM and ORSA, RBC2 capital work, climate risk and ESG governance from a former statutory CRO.",
    url: "https://raymondcheungwm.com/expertise",
  },
};

export default function ExpertisePage() {
  return (
    <div style={{ backgroundColor: "var(--warm-ivory)", paddingTop: "96px" }}>
      <section style={{ backgroundColor: "var(--midnight-navy)", padding: "5rem 2rem 4rem", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(201,169,97,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase", display: "block", marginBottom: "1.5rem" }}>
            Expertise
          </span>
          <h1 style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--ink)", lineHeight: 1.12, maxWidth: "680px", marginBottom: "1.5rem" }}>
            Expertise shaped by the boardroom, the balance sheet and the market.
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(26,23,18,0.65)", lineHeight: 1.75, maxWidth: "560px" }}>
            Raymond&rsquo;s work spans technical actuarial practice, executive risk leadership, insurance markets, digital innovation, board governance and sustainability. Each area connects to the others.
          </p>
        </div>
      </section>

      {expertiseAreas.map((area, i) => (
        <section key={area.id} id={area.id} aria-labelledby={`expertise-${area.id}`} style={{ backgroundColor: i % 2 === 0 ? "var(--warm-ivory)" : "var(--soft-mist)", padding: "5rem 2rem", borderBottom: "1px solid rgba(26,23,18,0.06)" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="expertise-detail-grid">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem", letterSpacing: "0.14em", color: "var(--gold)", textTransform: "uppercase" }}>{area.number}</span>
                <div aria-hidden="true" style={{ flex: 1, height: "1px", backgroundColor: "rgba(26,23,18,0.08)" }} />
              </div>
              <h2 id={`expertise-${area.id}`} style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "var(--ink)", marginBottom: "1rem", lineHeight: 1.2 }}>
                {area.title}
              </h2>
              <p style={{ fontSize: "1rem", color: "var(--graphite)", lineHeight: 1.8, marginBottom: "1.75rem", opacity: 0.85 }}>{area.businessIssue}</p>
              <p style={{ fontSize: "0.925rem", color: "var(--graphite)", lineHeight: 1.8, marginBottom: "2rem", opacity: 0.75 }}>{area.raymondPerspective}</p>
              <div style={{ marginBottom: "2rem" }}>
                <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem", letterSpacing: "0.14em", color: "var(--strategic-teal)", textTransform: "uppercase", marginBottom: "0.85rem" }}>Focus areas</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {area.topics.map((topic) => (
                    <span key={topic} style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem", letterSpacing: "0.06em", color: "var(--graphite)", backgroundColor: "var(--panel)", border: "1px solid rgba(26,23,18,0.1)", padding: "0.3rem 0.65rem", borderRadius: "1px" }}>{topic}</span>
                  ))}
                </div>
              </div>
              <Link href="/contact" className="btn-navy" style={{ fontSize: "0.825rem" }}>
                Discuss this expertise <ArrowRight size={13} />
              </Link>
            </div>

            <div>
              <div style={{ backgroundColor: "var(--panel)", border: "1px solid rgba(26,23,18,0.08)", padding: "2rem", marginBottom: "1.5px" }}>
                <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem", letterSpacing: "0.14em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "0.85rem" }}>Why it matters</p>
                <p style={{ fontSize: "0.9rem", color: "var(--graphite)", lineHeight: 1.75, opacity: 0.85 }}>{area.whyItMatters}</p>
              </div>
              <div style={{ backgroundColor: "var(--panel)", border: "1px solid rgba(26,23,18,0.08)", padding: "2rem", marginBottom: "1.5px" }}>
                <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem", letterSpacing: "0.14em", color: "var(--strategic-teal)", textTransform: "uppercase", marginBottom: "1rem" }}>Typical questions addressed</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {area.questions.map((q) => (
                    <li key={q} style={{ fontSize: "0.875rem", color: "var(--ink)", padding: "0.6rem 0", borderBottom: "1px solid rgba(26,23,18,0.05)", display: "flex", alignItems: "flex-start", gap: "0.6rem", lineHeight: 1.5 }}>
                      <span aria-hidden="true" style={{ color: "var(--strategic-teal)", fontSize: "0.6rem", marginTop: "0.2rem", flexShrink: 0 }}>◆</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ backgroundColor: "var(--panel)", border: "1px solid rgba(26,23,18,0.08)", padding: "2rem" }}>
                <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem", letterSpacing: "0.14em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "0.85rem" }}>Relevant audiences</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {area.audiences.map((aud) => (
                    <span key={aud} style={{ fontSize: "0.78rem", color: "var(--graphite)", backgroundColor: "var(--soft-mist)", padding: "0.3rem 0.65rem", borderRadius: "1px" }}>{aud}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <style>{`
        @media (max-width: 899px) {
          .expertise-detail-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </div>
  );
}
