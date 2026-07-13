"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    value: "20+",
    label: "Years of regional experience",
    sub: "Actuarial · Risk · Insurance · ESG",
  },
  {
    value: "8",
    label: "ASEAN markets",
    sub: "Connected through regional digital-insurance work",
  },
  {
    value: "C-Suite",
    label: "Executive accountability",
    sub: "Across insurance, risk, technology and business leadership",
  },
  {
    value: "Board",
    label: "to Classroom",
    sub: "Insights translated for directors, executives and professionals",
  },
];

export default function ImpactMetrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Impact metrics"
      style={{
        backgroundColor: "var(--warm-ivory)",
        padding: "6rem 2rem",
        borderTop: "1px solid rgba(7,26,43,0.06)",
        borderBottom: "1px solid rgba(7,26,43,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "0",
        }}
      >
        {metrics.map((m, i) => (
          <div
            key={m.label}
            style={{
              padding: "2.5rem 2rem",
              borderRight:
                i < metrics.length - 1
                  ? "1px solid rgba(7,26,43,0.07)"
                  : "none",
              textAlign: "center",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
            }}
            className="metric-card"
          >
            <p
              style={{
                fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                fontSize: "clamp(2.2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "var(--midnight-navy)",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              {m.value}
            </p>
            <p
              style={{
                fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "var(--midnight-navy)",
                marginBottom: "0.4rem",
              }}
            >
              {m.label}
            </p>
            <p
              style={{
                fontFamily: "var(--font-ibm-mono), monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.08em",
                color: "var(--strategic-teal)",
                lineHeight: 1.5,
              }}
            >
              {m.sub}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .metric-card {
            border-right: none !important;
            border-bottom: 1px solid rgba(7,26,43,0.07);
          }
        }
      `}</style>
    </section>
  );
}
