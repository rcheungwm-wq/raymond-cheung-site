import Link from "next/link";
import { Mic, Users, Briefcase, GraduationCap, MessageSquare, Radio, ArrowRight } from "lucide-react";
import { speakingThemes, speakingFormats } from "@/data/programmes";
import { speakingEngagements } from "@/data/profile";

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
      style={{ backgroundColor: "var(--midnight-navy)", padding: "5rem 2rem", position: "relative", overflow: "hidden" }}
    >
      <div aria-hidden="true" style={{ position: "absolute", top: "50%", right: "5%", transform: "translateY(-50%)", width: "min(40vw, 500px)", aspectRatio: "1", border: "1px solid rgba(201,169,97,0.06)", borderRadius: "50%", pointerEvents: "none", overflow: "hidden" }} />
      <div aria-hidden="true" style={{ position: "absolute", top: "50%", right: "8%", transform: "translateY(-50%)", width: "min(28vw, 360px)", aspectRatio: "1", border: "1px solid rgba(201,169,97,0.08)", borderRadius: "50%", pointerEvents: "none", overflow: "hidden" }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
          <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase" }}>
            07 / Speaking
          </span>
          <div aria-hidden="true" style={{ flex: 1, height: "1px", backgroundColor: "rgba(201,169,97,0.15)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="speaking-grid">
          <div>
            <h2 id="speaking-heading" style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, letterSpacing: "-0.025em", color: "var(--ink)", lineHeight: 1.15, marginBottom: "1.5rem" }}>
              I don&rsquo;t present theory.<br />I bring what I&rsquo;ve lived.<br />And I make it actionable.
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(26,23,18,0.62)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "440px" }}>
              I speak to boards, regulators, executives and professional audiences across Asia on the forces reshaping insurance, risk governance, climate strategy and technology. When I stand up to speak, I bring the perspective of someone who has actually held the roles you are navigating — not read about them.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "3rem" }}>
              {speakingFormats.map((fmt) => (
                <div key={fmt.label} style={{ display: "flex", alignItems: "center", gap: "0.4rem", backgroundColor: "rgba(201,169,97,0.08)", border: "1px solid rgba(201,169,97,0.2)", borderRadius: "1px", padding: "0.45rem 0.85rem", color: "rgba(26,23,18,0.75)" }}>
                  <span style={{ color: "var(--strategic-teal)" }}>{iconMap[fmt.icon]}</span>
                  <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{fmt.label}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact?type=speaking" className="btn-teal" style={{ padding: "0.85rem 1.75rem" }}>
                Invite Me to Speak <ArrowRight size={14} />
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
            <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "2.5rem" }}>
              {speakingThemes.map((theme, i) => (
                <li key={theme} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1rem 0", borderBottom: "1px solid rgba(201,169,97,0.1)" }}>
                  <span aria-hidden="true" style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem", color: "rgba(26,23,18,0.22)", flexShrink: 0, marginTop: "0.15rem" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontSize: "0.9rem", fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontWeight: 500, color: "rgba(26,23,18,0.78)", lineHeight: 1.45 }}>
                    {theme}
                  </p>
                </li>
              ))}
            </ul>

            {/* Past & ongoing engagements */}
            <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem", letterSpacing: "0.14em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              Selected Engagements
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {speakingEngagements.map((e) => (
                <li key={e.event} style={{ padding: "0.85rem 0", borderBottom: "1px solid rgba(201,169,97,0.08)", display: "grid", gridTemplateColumns: "1fr auto", gap: "1rem", alignItems: "start" }}>
                  <div>
                    <p style={{ fontSize: "0.82rem", fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontWeight: 600, color: "rgba(26,23,18,0.82)", lineHeight: 1.3, marginBottom: "0.2rem" }}>
                      {e.event}
                    </p>
                    <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.56rem", letterSpacing: "0.06em", color: "rgba(26,23,18,0.38)", textTransform: "uppercase" }}>
                      {e.host} · {e.venue}
                    </p>
                  </div>
                  <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem", letterSpacing: "0.08em", color: "var(--strategic-teal)", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                    {e.year}
                  </span>
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
