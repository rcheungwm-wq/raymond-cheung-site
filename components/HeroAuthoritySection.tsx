import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const proofPoints = [
  { value: "Nasdaq", label: "Led to listing as CEO" },
  { value: "3", label: "Listed board seats" },
  { value: "24", label: "Years in practice" },
  { value: "2×", label: "Statutory CRO" },
];

export default function HeroAuthoritySection() {
  return (
    <section
      aria-label="Introduction"
      style={{
        position: "relative",
        background: "var(--warm-ivory)",
        display: "flex",
        alignItems: "center",
        paddingTop: "72px",
        maxWidth: "100vw",
        borderBottom: "1px solid var(--rule-soft)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--maxw)", margin: "0 auto", padding: "6rem 2rem 5rem",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem",
          alignItems: "center", width: "100%",
        }}
        className="hero-grid"
      >
        {/* Left — copy */}
        <div>
          <p style={{
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.63rem",
            letterSpacing: "0.22em", color: "var(--gold)", textTransform: "uppercase",
            marginBottom: "2.25rem",
          }}>
            Singapore · Nasdaq &amp; SGX Board Director
          </p>

          <h1 style={{
            fontSize: "clamp(3.2rem, 6vw, 5.4rem)",
            marginBottom: "1.75rem",
            color: "var(--ink)",
          }}>
            Raymond Cheung
          </h1>

          <p style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "clamp(1rem, 1.4vw, 1.15rem)", fontWeight: 400,
            lineHeight: 1.65, color: "var(--ink-soft)",
            maxWidth: "440px", marginBottom: "2.75rem",
          }}>
            Chartered Actuary and former Nasdaq CEO, advising Asia&rsquo;s boards
            on risk, governance and ESG.
          </p>

          <div style={{ display: "flex", gap: "0.9rem", flexWrap: "wrap", marginBottom: "3.5rem" }}>
            <Link href="/advisory" className="btn-teal">
              Advisory &amp; Board Work <ArrowRight size={15} />
            </Link>
            <Link href="/training-speaking" className="btn-ghost-light">
              Invite to Speak
            </Link>
          </div>

          {/* Proof points — borderless, editorial */}
          <div aria-label="Career credentials" className="hero-stats" style={{
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem",
            paddingTop: "2rem", borderTop: "1px solid var(--rule-soft)",
          }}>
            {proofPoints.map((p) => (
              <div key={p.value}>
                <p style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "2rem", fontWeight: 400, color: "var(--ink)",
                  lineHeight: 1, marginBottom: "0.45rem",
                }}>{p.value}</p>
                <p style={{
                  fontFamily: "var(--font-ibm-mono), monospace",
                  fontSize: "0.58rem", letterSpacing: "0.13em",
                  color: "var(--ink-faint)", textTransform: "uppercase",
                  lineHeight: 1.4,
                }}>{p.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — portrait */}
        <div className="hero-portrait-col" style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{
            position: "relative", width: "min(480px, 100%)", aspectRatio: "4/5",
            borderRadius: "var(--r-card)", overflow: "hidden",
            boxShadow: "var(--sh-deep)",
            backgroundColor: "var(--midnight-navy)",
          }}>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/raymond-cheung-portrait.jpg`}
              alt="Raymond Cheung — Chartered Actuary, Risk Executive, Board Adviser and ESG Specialist"
              fill priority
              sizes="(max-width: 899px) 90vw, 480px"
              style={{
                objectFit: "cover",
                /* Crop in on the subject to push the event backdrop's
                   sponsor signage out of frame. */
                /* Source is only 400×400 and already renders ~1.8× upscaled,
                   so keep the crop gentle — the scrim below hides the
                   event signage instead of zooming into it. */
                objectPosition: "34% 16%",
                transform: "scale(1.06)",
                /* Warm monochrome — harmonises the event-photo backdrop
                   with the champagne palette and mutes its low resolution. */
                filter: "grayscale(100%) sepia(30%) contrast(1.05) brightness(1.03)",
              }}
            />
            {/* Champagne tint to seat the portrait in the palette */}
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0,
              backgroundColor: "var(--gold)",
              mixBlendMode: "soft-light",
              opacity: 0.28,
            }} />

            {/* Scrim — fades the event backdrop's sponsor signage on the
                right and bottom without cropping further into a small source. */}
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0,
              background: `
                linear-gradient(100deg, transparent 38%, rgba(232,220,192,0.55) 72%, rgba(232,220,192,0.9) 100%),
                linear-gradient(to top, rgba(232,220,192,0.5) 0%, transparent 30%)
              `,
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 899px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            padding: 4rem 2rem 3.5rem !important;
          }
          .hero-portrait-col { justify-content: center !important; }
        }
        @media (max-width: 560px) {
          .hero-stats { grid-template-columns: repeat(2, 1fr) !important; gap: 1.75rem 1.25rem !important; }
        }
      `}</style>
    </section>
  );
}
