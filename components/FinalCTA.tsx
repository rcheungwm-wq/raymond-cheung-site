"use client";

import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      aria-label="Contact and engagement"
      style={{
        background:
          "linear-gradient(160deg, var(--warm-ivory) 0%, var(--soft-mist) 40%, var(--executive-navy) 100%)",
        padding: "5rem 2rem",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-ibm-mono), monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.2em",
            color: "var(--strategic-teal)",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          Advisory · Training · Speaking
        </p>

        <h2
          style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--midnight-navy)",
            lineHeight: 1.15,
            marginBottom: "1.5rem",
          }}
        >
          The right response to uncertainty begins with a clearer question.
        </h2>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--graphite)",
            lineHeight: 1.8,
            opacity: 0.75,
            marginBottom: "3rem",
            maxWidth: "560px",
            margin: "0 auto 3rem",
          }}
        >
          If you are looking to strengthen your board&rsquo;s risk oversight,
          develop your team&rsquo;s capability, engage a credible speaker,
          or work through a complex advisory challenge — Raymond is the right conversation to start.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          <Link href="/contact" className="cta-dark-btn">
            Start a Conversation <ArrowRight size={15} />
          </Link>
          <a
            href="https://www.linkedin.com/in/raymond-cheung-actuary/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-outline-btn"
          >
            Connect on LinkedIn <ExternalLink size={14} />
          </a>
        </div>

        <p
          style={{
            fontFamily: "var(--font-ibm-mono), monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.08em",
            color: "rgba(7,26,43,0.35)",
            lineHeight: 1.6,
          }}
        >
          Enquiries are reviewed personally or by an authorised representative.
        </p>
      </div>

      <style>{`
        .cta-dark-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background-color: var(--midnight-navy);
          color: var(--warm-ivory);
          font-family: var(--font-plus-jakarta), system-ui, sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          border-radius: 999px;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .cta-dark-btn:hover { background-color: var(--deep-teal); transform: translateY(-2px); }
        .cta-outline-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background-color: transparent;
          color: var(--midnight-navy);
          font-family: var(--font-plus-jakarta), system-ui, sans-serif;
          font-weight: 500;
          font-size: 0.9rem;
          border-radius: 999px;
          border: 1.5px solid rgba(42,31,26,0.25);
          text-decoration: none;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .cta-outline-btn:hover { border-color: rgba(42,31,26,0.5); transform: translateY(-2px); }
      `}</style>
    </section>
  );
}
