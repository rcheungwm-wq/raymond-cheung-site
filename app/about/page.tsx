import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/profile";
import { careerJourney, selectedRoles } from "@/data/experience";

export const metadata: Metadata = {
  title: "About Raymond Cheung | Chartered Actuary, Risk Executive, Board Adviser",
  description:
    "Raymond Cheung's career spans actuarial science, enterprise risk leadership, insurance and reinsurance, digital insurance, board governance, ESG and climate risk across Asia.",
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "var(--warm-ivory)", paddingTop: "96px" }}>
      {/* Page hero */}
      <section
        aria-labelledby="about-heading"
        style={{
          backgroundColor: "var(--midnight-navy)",
          padding: "5rem 2rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(21,154,146,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(21,154,146,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span
            style={{
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: "var(--strategic-teal)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            About
          </span>
          <h1
            id="about-heading"
            style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--warm-ivory)",
              lineHeight: 1.12,
              maxWidth: "680px",
            }}
          >
            From actuarial analysis to enterprise-wide decisions.
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "5rem 2rem" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: "5rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left */}
          <div>
            <p style={{ fontSize: "1.15rem", color: "var(--midnight-navy)", lineHeight: 1.85, fontWeight: 500, marginBottom: "1.75rem" }}>
              {profile.biography.opening}
            </p>
            <p style={{ fontSize: "1rem", color: "var(--graphite)", lineHeight: 1.85, marginBottom: "3rem", opacity: 0.85 }}>
              {profile.biography.full}
            </p>

            <div style={{ backgroundColor: "var(--midnight-navy)", padding: "2.5rem", marginBottom: "3rem", borderLeft: "3px solid var(--gold)" }}>
              <p style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "1.05rem", fontWeight: 600, color: "var(--warm-ivory)", lineHeight: 1.6, fontStyle: "italic" }}>
                &ldquo;{profile.philosophy.headline}&rdquo;
              </p>
            </div>

            <h2 style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--midnight-navy)", marginBottom: "2rem" }}>
              Career journey
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3.5rem" }}>
              {careerJourney.map((stage) => (
                <div key={stage.id} style={{ paddingLeft: "1.5rem", borderLeft: "2px solid rgba(21,154,146,0.2)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: "var(--gold)" }}>
                      {stage.stage}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "var(--midnight-navy)" }}>
                      {stage.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "var(--graphite)", lineHeight: 1.7, opacity: 0.8 }}>
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>

            <h2 style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--midnight-navy)", marginBottom: "1.5rem" }}>
              Selected professional roles
            </h2>
            <div style={{ backgroundColor: "var(--white)", border: "1px solid rgba(7,26,43,0.08)", marginBottom: "1rem" }}>
              {selectedRoles.map((role, i) => (
                <div
                  key={`${role.title}-${role.organisation}`}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "1.25rem 1.75rem",
                    borderBottom: i < selectedRoles.length - 1 ? "1px solid rgba(7,26,43,0.05)" : "none",
                    gap: "1rem",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <p style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontSize: "0.875rem", fontWeight: 600, color: "var(--midnight-navy)", marginBottom: "0.2rem" }}>
                      {role.title}
                    </p>
                    <p style={{ fontSize: "0.82rem", color: "var(--graphite)", opacity: 0.7 }}>
                      {role.organisation}
                    </p>
                  </div>
                  {role.status === "current" && (
                    <span style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--strategic-teal)", border: "1px solid var(--strategic-teal)", padding: "0.2rem 0.5rem", textTransform: "uppercase", flexShrink: 0 }}>
                      Current
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem", letterSpacing: "0.06em", color: "rgba(7,26,43,0.35)", marginBottom: "3.5rem", lineHeight: 1.6 }}>
              VERIFY BEFORE PUBLICATION — All role titles and organisations require Raymond&rsquo;s review and approval.
            </p>

            {/* Downloads */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", padding: "2rem", backgroundColor: "var(--soft-mist)", border: "1px solid rgba(7,26,43,0.06)" }}>
              <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem", letterSpacing: "0.1em", color: "rgba(7,26,43,0.4)", textTransform: "uppercase", width: "100%", marginBottom: "0.5rem" }}>
                Resources — Pending approval
              </p>
              <button disabled style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "rgba(7,26,43,0.08)", color: "rgba(7,26,43,0.4)", fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontWeight: 500, fontSize: "0.82rem", border: "none", cursor: "not-allowed", borderRadius: "1px" }}>
                <Download size={14} /> Download Biography
              </button>
              <button disabled style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", backgroundColor: "rgba(7,26,43,0.08)", color: "rgba(7,26,43,0.4)", fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontWeight: 500, fontSize: "0.82rem", border: "none", cursor: "not-allowed", borderRadius: "1px" }}>
                <Download size={14} /> Download Speaker Profile
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside aria-label="Raymond Cheung at a glance">
            <div style={{ position: "sticky", top: "112px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", overflow: "hidden", filter: "grayscale(20%) contrast(1.05)" }}>
                <Image
                  src={profile.portrait}
                  alt={profile.portraitAlt}
                  fill
                  sizes="340px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div style={{ backgroundColor: "var(--white)", border: "1px solid rgba(7,26,43,0.08)", padding: "1.75rem" }}>
                <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem", letterSpacing: "0.14em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                  Raymond at a glance
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {profile.credentials.map((cred) => (
                    <li key={cred} style={{ fontSize: "0.85rem", color: "var(--midnight-navy)", fontWeight: 500, padding: "0.5rem 0", borderBottom: "1px solid rgba(7,26,43,0.05)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span aria-hidden="true" style={{ color: "var(--strategic-teal)", fontSize: "0.6rem" }}>◆</span>
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="btn-teal" style={{ justifyContent: "center" }}>
                Discuss an Engagement <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        @media (max-width: 899px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > aside { order: -1; }
        }
      `}</style>
    </div>
  );
}
