"use client";

import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      aria-label="Contact and engagement"
      style={{
        background: "var(--midnight-navy)",
        padding: "5rem 2rem",
        borderTop: "1px solid rgba(201,169,97,0.15)",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-ibm-mono), monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.2em",
            color: "var(--gold)",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          Advisory · Training · Speaking · Board Briefings
        </p>

        <h2
          style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--ink)",
            lineHeight: 1.15,
            marginBottom: "1.5rem",
          }}
        >
          Let&rsquo;s work through what your organisation is facing.
        </h2>

        <p
          style={{
            fontSize: "1rem",
            color: "rgba(26,23,18,0.6)",
            lineHeight: 1.8,
            marginBottom: "3rem",
            maxWidth: "560px",
            margin: "0 auto 3rem",
          }}
        >
          Whether you need to strengthen your board&rsquo;s risk oversight, develop
          your team&rsquo;s capability, bring a credible voice to your event, or work
          through a complex advisory challenge — I&rsquo;d welcome the conversation.
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
            Get in Touch <ArrowRight size={15} />
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
            color: "rgba(26,23,18,0.22)",
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
          color: rgba(26,23,18,0.75);
          font-family: var(--font-plus-jakarta), system-ui, sans-serif;
          font-weight: 500;
          font-size: 0.9rem;
          border-radius: 999px;
          border: 1.5px solid rgba(26,23,18,0.2);
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .cta-outline-btn:hover { border-color: rgba(26,23,18,0.5); color: rgba(26,23,18,1); transform: translateY(-2px); }
      `}</style>
    </section>
  );
}
