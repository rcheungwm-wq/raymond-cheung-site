import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, Mic, Users, Briefcase, GraduationCap, MessageSquare, Radio } from "lucide-react";
import { programmes, speakingThemes, speakingFormats } from "@/data/programmes";

export const metadata: Metadata = {
  title: "Executive Training & Keynote Speaking — Risk, ESG & Governance",
  description:
    "Accredited trainer at SMU Academy and the Singapore College of Insurance, lecturer at ESSEC Business School, and author of ten proprietary curricula covering ERM, RBC2, cyber risk, IoT, blockchain and PDPA. Available for board briefings, certification programmes and conference keynotes across Asia.",
  alternates: { canonical: "https://raymondcheungwm.com/training-speaking" },
  openGraph: {
    title: "Executive Training & Keynote Speaking — Raymond Cheung",
    description:
      "Accredited trainer at SMU Academy and SCI. Ten authored curricula. Board briefings and conference keynotes across Asia.",
    url: "https://raymondcheungwm.com/training-speaking",
  },
};

const iconMap: Record<string, React.ReactNode> = {
  mic: <Mic size={18} />,
  users: <Users size={18} />,
  briefcase: <Briefcase size={18} />,
  "graduation-cap": <GraduationCap size={18} />,
  "message-square": <MessageSquare size={18} />,
  radio: <Radio size={18} />,
};

const trainingOfferings = ["Executive workshops", "Board briefings", "Professional certification programmes", "Regulatory training", "Custom corporate programmes", "Technical masterclasses", "Risk leadership development"];
const speakingOfferings = ["Keynotes", "Conference sessions", "Panel discussions", "Roundtables", "Webinars", "Media interviews", "Moderation", "Guest lectures"];

export default function TrainingSpeakingPage() {
  return (
    <div style={{ backgroundColor: "var(--warm-ivory)", paddingTop: "96px" }}>
      <section style={{ backgroundColor: "var(--midnight-navy)", padding: "5rem 2rem 4rem", position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(201,169,97,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase", display: "block", marginBottom: "1.5rem" }}>
            Training & Speaking
          </span>
          <h1 style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--ink)", lineHeight: 1.12, maxWidth: "680px", marginBottom: "1.5rem" }}>
            Complex subjects. Clear conversations. Practical conclusions.
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(242,237,227,0.65)", lineHeight: 1.75, maxWidth: "560px" }}>
            Raymond delivers corporate training programmes, executive briefings, keynotes and conference contributions on the subjects shaping risk, insurance, regulation, climate and technology across Asia.
          </p>
        </div>
      </section>

      {/* Two pathways */}
      <section style={{ padding: "5rem 2rem", backgroundColor: "var(--warm-ivory)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5px" }} className="pathway-grid">
          <div style={{ backgroundColor: "var(--panel)", border: "1px solid rgba(242,237,227,0.08)", padding: "3rem" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "var(--strategic-teal)", marginBottom: "1.75rem" }} />
            <h2 style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: "0.75rem" }}>
              Corporate & Professional Training
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--graphite)", lineHeight: 1.75, marginBottom: "2rem", opacity: 0.75 }}>
              Structured programmes for corporate audiences, professional associations and regulatory environments. Delivered in-person, virtually or as hybrid.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "2rem" }}>
              {trainingOfferings.map((item) => (
                <li key={item} style={{ fontSize: "0.875rem", color: "var(--ink)", padding: "0.65rem 0", borderBottom: "1px solid rgba(242,237,227,0.05)", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span aria-hidden="true" style={{ color: "var(--strategic-teal)", fontSize: "0.5rem", flexShrink: 0 }}>◆</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact?type=training" className="btn-teal">
              Enquire about training <ArrowRight size={13} />
            </Link>
          </div>

          <div style={{ backgroundColor: "var(--midnight-navy)", border: "1px solid rgba(201,169,97,0.15)", padding: "3rem" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "var(--gold)", marginBottom: "1.75rem" }} />
            <h2 style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: "0.75rem" }}>
              Speaking & Industry Engagement
            </h2>
            <p style={{ fontSize: "0.9rem", color: "rgba(242,237,227,0.6)", lineHeight: 1.75, marginBottom: "2rem" }}>
              Raymond speaks to boards, executives and professional audiences on the forces reshaping risk, insurance, regulation, climate strategy and technology across Asia.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
              {speakingFormats.map((fmt) => (
                <div key={fmt.label} style={{ display: "flex", alignItems: "center", gap: "0.4rem", backgroundColor: "rgba(201,169,97,0.1)", border: "1px solid rgba(201,169,97,0.2)", padding: "0.4rem 0.75rem", borderRadius: "1px", color: "rgba(242,237,227,0.7)" }}>
                  <span style={{ color: "var(--strategic-teal)" }}>{iconMap[fmt.icon]}</span>
                  <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{fmt.label}</span>
                </div>
              ))}
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "2rem" }}>
              {speakingOfferings.map((item) => (
                <li key={item} style={{ fontSize: "0.875rem", color: "rgba(242,237,227,0.65)", padding: "0.5rem 0", borderBottom: "1px solid rgba(201,169,97,0.08)", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span aria-hidden="true" style={{ color: "var(--gold)", fontSize: "0.5rem", flexShrink: 0 }}>◆</span>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link href="/contact?type=speaking" className="btn-teal">
                Invite to Speak <ArrowRight size={13} />
              </Link>
              <button disabled style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.75rem 1.25rem", backgroundColor: "transparent", color: "rgba(242,237,227,0.4)", fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontWeight: 500, fontSize: "0.78rem", border: "1px solid rgba(242,237,227,0.15)", borderRadius: "1px", cursor: "not-allowed" }}>
                <Download size={13} /> Speaker Profile (Pending)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section style={{ padding: "5rem 2rem", backgroundColor: "var(--soft-mist)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: "3rem" }}>
            Speaking themes
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5px" }}>
            {speakingThemes.map((theme, i) => (
              <div key={theme} style={{ backgroundColor: "var(--panel)", border: "1px solid rgba(242,237,227,0.07)", padding: "1.75rem", display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                <span aria-hidden="true" style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem", color: "var(--gold)", flexShrink: 0, marginTop: "0.2rem" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "var(--ink)", lineHeight: 1.45 }}>{theme}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section style={{ padding: "5rem 2rem", backgroundColor: "var(--warm-ivory)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: "3rem" }}>
            Available programmes
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5px" }}>
            {programmes.map((prog) => (
              <div key={prog.id} style={{ backgroundColor: "var(--panel)", border: "1px solid rgba(242,237,227,0.08)", padding: "2rem" }}>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                  {prog.categories.map((cat) => (
                    <span key={cat} style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.55rem", letterSpacing: "0.08em", color: "var(--graphite)", backgroundColor: "var(--soft-mist)", padding: "0.2rem 0.5rem", textTransform: "uppercase" }}>{cat}</span>
                  ))}
                </div>
                <h3 style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "0.975rem", fontWeight: 700, color: "var(--ink)", marginBottom: "0.5rem", lineHeight: 1.3 }}>{prog.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--strategic-teal)", fontWeight: 500, marginBottom: "0.85rem" }}>{prog.subtitle}</p>
                <p style={{ fontSize: "0.82rem", color: "var(--graphite)", lineHeight: 1.7, marginBottom: "1.5rem", opacity: 0.78 }}>{prog.description}</p>
                <p style={{ fontSize: "0.75rem", color: "rgba(242,237,227,0.5)", marginBottom: "0.3rem" }}>Mode: {prog.deliveryMode}</p>
                {prog.audience && <p style={{ fontSize: "0.75rem", color: "rgba(242,237,227,0.5)", marginBottom: "1.25rem" }}>Audience: {prog.audience}</p>}
                <Link href="/contact" className="link-teal">Enquire <ArrowRight size={12} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 899px) { .pathway-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
