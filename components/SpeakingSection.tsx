import Link from "next/link";
import { Mic, Users, Briefcase, GraduationCap, MessageSquare, Radio, ArrowRight } from "lucide-react";
import { speakingThemes, speakingFormats } from "@/data/programmes";

const iconMap: Record<string, React.ReactNode> = {
  mic: <Mic size={16} />,
  users: <Users size={16} />,
  briefcase: <Briefcase size={16} />,
  "graduation-cap": <GraduationCap size={16} />,
  "message-square": <MessageSquare size={16} />,
  radio: <Radio size={16} />,
};

export default function SpeakingSection() {
  return (
    <section
      id="speaking"
      aria-labelledby="speaking-heading"
      style={{ backgroundColor: "var(--midnight-navy)", padding: "7rem 2rem", position: "relative", overflow: "hidden" }}
    >
      <div aria-hidden="true" style={{ position: "absolute", top: "50%", right: "5%", transform: "translateY(-50%)", width: "40vw", maxWidth: "500px", aspectRatio: "1", border: "1px solid rgba(21,154,146,0.06)", borderRadius: "50%", pointerEvents: "none" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "50%", right: "8%", transform: "translateY(-50%)", width: "28vw", maxWidth: "360px", aspectRatio: "1", border: "1px solid rgba(21,154,146,0.08)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase" }}>
            07 / Speaking
          </span>
          <div aria-hidden="true" style={{ flex: 1, height: "1px", backgroundColor: "rgba(21,154,146,0.15)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="speaking-grid">
          <div>
            <h2 id="speaking-heading" style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "var(--warm-ivory)", lineHeight: 1.15, marginBottom: "1.5rem" }}>
              Complex subjects.<br />Clear conversations.<br />Practical conclusions.
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(245,243,236,0.62)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "440px" }}>
              Raymond speaks to boards, executives and professional audiences on the forces reshaping risk, insurance, regulation, climate strategy and technology across Asia.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "3rem" }}>
              {speakingFormats.map((fmt) => (
                <div key={fmt.label} style={{ display: "flex", alignItems: "center", gap: "0.4rem", backgroundColor: "rgba(21,154,146,0.08)", border: "1px solid rgba(21,154,146,0.2)", borderRadius: "1px", padding: "0.45rem 0.85rem", color: "rgba(245,243,236,0.75)" }}>
                  <span style={{ color: "var(--strategic-teal)" }}>{iconMap[fmt.icon]}</span>
                  <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{fmt.label}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact?type=speaking" className="btn-teal" style={{ padding: "0.85rem 1.75rem" }}>
                Invite Raymond to Speak <ArrowRight size={14} />
              </Link>
              <Link href="/training-speaking" className="btn-ghost-light" style={{ padding: "0.85rem 1.75rem" }}>
                View Speaking Themes
              </Link>
            </div>
          </div>

          <div>
            <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem", letterSpacing: "0.14em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Speaking Themes
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {speakingThemes.map((theme, i) => (
                <li key={theme} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1rem 0", borderBottom: "1px solid rgba(21,154,146,0.1)" }}>
                  <span aria-hidden="true" style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem", color: "rgba(245,243,236,0.22)", flexShrink: 0, marginTop: "0.15rem" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontSize: "0.9rem", fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontWeight: 500, color: "rgba(245,243,236,0.78)", lineHeight: 1.45 }}>
                    {theme}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 899px) { .speaking-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
      `}</style>
    </section>
  );
}
