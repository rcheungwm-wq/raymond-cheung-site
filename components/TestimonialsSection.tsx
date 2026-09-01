"use client";

import Link from "next/link";
import { testimonials } from "@/data/profile";
import { Quote, ArrowRight } from "lucide-react";

/* `limit` trims the homepage to a curated three; /about renders the full set. */
export default function TestimonialsSection({ limit }: { limit?: number }) {
  const shown = limit ? testimonials.slice(0, limit) : testimonials;
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      style={{
        background: "linear-gradient(135deg, var(--midnight-navy) 0%, var(--executive-navy) 100%)",
        padding: "5rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top border */}
      <div aria-hidden="true" style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(201,169,97,0.4), transparent)",
      }} />

      {/* Background glow */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 50% at 20% 60%, rgba(201,169,97,0.07) 0%, transparent 55%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
          <span style={{
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem",
            letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase",
          }}>08 / Testimonials</span>
          <div aria-hidden="true" style={{ flex: 1, height: "1px", backgroundColor: "rgba(201,169,97,0.15)" }} />
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", flexWrap: "wrap", gap: "1.5rem",
          marginBottom: "3.5rem",
        }}>
          <h2 id="testimonials-heading" style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700,
            letterSpacing: "-0.025em", color: "var(--ink)", lineHeight: 1.15, margin: 0,
          }}>
            What clients and<br />colleagues say.
          </h2>

          {/* LinkedIn social proof badge */}
          <div style={{
            display: "flex", alignItems: "center", gap: "1rem",
            background: "var(--panel)",
            border: "1px solid var(--rule-soft)",
            borderRadius: "2px", padding: "1rem 1.5rem",
          }}>
            <div style={{ textAlign: "right" }}>
              <div style={{
                fontFamily: "var(--font-cormorant, Georgia), serif",
                fontSize: "2rem", fontWeight: 700,
                color: "var(--gold)", lineHeight: 1,
              }}>30,754</div>
              <div style={{
                fontFamily: "var(--font-ibm-mono), monospace",
                fontSize: "0.58rem", letterSpacing: "0.12em",
                color: "rgba(26,23,18,0.45)", textTransform: "uppercase",
                marginTop: "0.25rem",
              }}>LinkedIn followers</div>
            </div>
            <div aria-hidden="true" style={{
              width: "1px", height: "40px",
              backgroundColor: "var(--panel)",
            }} />
            <div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" stroke="rgba(26,23,18,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="9" width="4" height="12" stroke="rgba(26,23,18,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="rgba(26,23,18,0.5)" strokeWidth="1.5"/>
              </svg>
              <div style={{
                fontFamily: "var(--font-ibm-mono), monospace",
                fontSize: "0.56rem", letterSpacing: "0.1em",
                color: "rgba(26,23,18,0.3)", textTransform: "uppercase",
                marginTop: "0.2rem",
              }}>LinkedIn</div>
            </div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
        }} className="testimonials-grid">
          {shown.map((t) => (
            <div key={t.name} style={{
              background: "var(--panel)",
              border: "1px solid var(--rule-soft)",
              borderRadius: "2px", padding: "2.5rem",
              position: "relative",
              display: "flex", flexDirection: "column", gap: "1.75rem",
            }}>
              {/* Quote icon */}
              <div aria-hidden="true" style={{ color: "var(--gold)", opacity: 0.5 }}>
                <Quote size={28} />
              </div>

              {/* The quote */}
              <blockquote style={{
                fontFamily: "var(--font-cormorant, Georgia), serif",
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                fontStyle: "italic",
                fontWeight: 500,
                color: "var(--ink)",
                lineHeight: 1.6,
                margin: 0,
                flex: 1,
              }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div style={{
                borderTop: "1px solid var(--rule-soft)",
                paddingTop: "1.5rem",
                display: "flex", flexDirection: "column", gap: "0.25rem",
              }}>
                <span style={{
                  fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                  fontWeight: 700, fontSize: "0.88rem",
                  color: "rgba(26,23,18,0.9)",
                }}>{t.name}</span>
                <span style={{
                  fontFamily: "var(--font-ibm-mono), monospace",
                  fontSize: "0.6rem", letterSpacing: "0.08em",
                  color: "var(--strategic-teal)",
                  textTransform: "uppercase",
                }}>{t.title}</span>
                <span style={{
                  fontFamily: "var(--font-ibm-mono), monospace",
                  fontSize: "0.56rem", letterSpacing: "0.06em",
                  color: "rgba(26,23,18,0.3)",
                  textTransform: "uppercase",
                }}>{t.engagement}</span>
              </div>
            </div>
          ))}
        </div>

        {limit && testimonials.length > limit && (
          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/about#testimonials" className="link-teal">
              All {testimonials.length} recommendations <ArrowRight size={13} />
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 700px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
