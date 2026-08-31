import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Board Advisory & Independent Directorship — Asia",
  description:
    "Independent director on Nasdaq (iO3 Ltd) and SGX (SDAI Limited) boards, chairing Nominating and Risk Committees. Board advisory on risk governance, IPO readiness, regulatory engagement and ESG strategy for insurers, financial institutions and listed companies across Asia.",
  alternates: { canonical: "https://raymondcheungwm.com/advisory" },
  openGraph: {
    title: "Board Advisory & Independent Directorship — Raymond Cheung",
    description:
      "Nasdaq and SGX independent director. Board advisory on risk governance, IPO readiness and ESG across Asia.",
    url: "https://raymondcheungwm.com/advisory",
  },
};

const advisoryFormats = [
  {
    id: "board-briefings",
    title: "Board and Executive Briefings",
    for: "Boards, risk committees and senior leadership teams",
    subjects: ["Emerging-risk landscape", "Climate-transition responsibilities", "Insurance capital", "AI governance", "Strategic resilience"],
    description: "Structured briefings that help boards and senior leadership teams understand complex, consequential issues and ask better questions of management.",
  },
  {
    id: "strategic-advisory",
    title: "Strategic Advisory",
    for: "Insurers, financial institutions and growth companies",
    subjects: ["Enterprise risk", "Regulatory readiness", "ESG implementation", "Insurance innovation", "Risk operating models"],
    description: "Ongoing advisory relationships with organisations navigating significant risk, regulatory or strategic change.",
  },
  {
    id: "independent-review",
    title: "Independent Review",
    for: "Organisations seeking an experienced external perspective",
    subjects: ["Risk frameworks", "Governance structures", "Board reporting", "Capital and reinsurance strategy", "Climate-risk implementation"],
    description: "An independent, expert assessment of risk frameworks, governance structures, reporting mechanisms and strategic positioning.",
  },
  {
    id: "capability-development",
    title: "Capability Development",
    for: "Leadership teams and professional functions",
    subjects: ["Risk culture", "Decision-making", "Executive workshops", "Technical education", "Internal trainer development"],
    description: "Working with leadership teams and professional functions to build genuine risk capability—not just awareness.",
  },
];

export default function AdvisoryPage() {
  return (
    <div style={{ backgroundColor: "var(--warm-ivory)", paddingTop: "96px" }}>
      <section style={{ backgroundColor: "var(--midnight-navy)", padding: "5rem 2rem 4rem", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(201,169,97,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase", display: "block", marginBottom: "1.5rem" }}>
            06 / Advisory
          </span>
          <h1 style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--ink)", lineHeight: 1.12, maxWidth: "600px", marginBottom: "1.5rem" }}>
            Independent thinking for consequential decisions.
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(242,237,227,0.65)", lineHeight: 1.75, maxWidth: "580px" }}>
            Raymond&rsquo;s advisory work is intended for organisations facing decisions that require technical understanding, executive judgement and a clear view of the wider system.
          </p>
        </div>
      </section>

      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5px" }}>
            {advisoryFormats.map((fmt, i) => (
              <div key={fmt.id} style={{ backgroundColor: i === 0 ? "var(--midnight-navy)" : "var(--white)", border: "1px solid", borderColor: i === 0 ? "rgba(201,169,97,0.2)" : "rgba(242,237,227,0.08)", padding: "2.5rem" }}>
                <h2 style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "1.05rem", fontWeight: 700, letterSpacing: "-0.01em", color: i === 0 ? "var(--ink)" : "var(--ink)", marginBottom: "0.6rem", lineHeight: 1.3 }}>
                  {fmt.title}
                </h2>
                <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem", letterSpacing: "0.08em", color: "var(--strategic-teal)", marginBottom: "1.25rem", lineHeight: 1.5 }}>
                  For: {fmt.for}
                </p>
                <p style={{ fontSize: "0.875rem", color: i === 0 ? "rgba(242,237,227,0.65)" : "var(--graphite)", lineHeight: 1.75, marginBottom: "1.5rem", opacity: i === 0 ? 1 : 0.8 }}>
                  {fmt.description}
                </p>
                <div>
                  <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem", letterSpacing: "0.12em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                    Possible subjects
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {fmt.subjects.map((subj) => (
                      <li key={subj} style={{ fontSize: "0.82rem", color: i === 0 ? "rgba(242,237,227,0.55)" : "rgba(242,237,227,0.65)", padding: "0.3rem 0", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span aria-hidden="true" style={{ color: "var(--strategic-teal)", fontSize: "0.5rem", flexShrink: 0 }}>◆</span>
                        {subj}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem", padding: "4rem 2rem", backgroundColor: "var(--soft-mist)", border: "1px solid rgba(242,237,227,0.06)" }}>
            <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem", letterSpacing: "0.18em", color: "var(--strategic-teal)", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              Begin the conversation
            </p>
            <h2 style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "clamp(1.4rem, 2.8vw, 2rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: "1.5rem", lineHeight: 1.2 }}>
              Advisory begins with understanding the decision in front of you.
            </h2>
            <Link href="/contact?type=advisory" className="btn-teal" style={{ padding: "0.95rem 2.25rem", fontSize: "0.9rem" }}>
              Discuss an Advisory Engagement <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
