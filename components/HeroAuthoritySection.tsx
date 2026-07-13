"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const pathwayLabels = ["UNCERTAINTY", "CLARITY", "DECISION", "RESILIENCE"];

const floatingLabels = [
  { text: "BOARD & GOVERNANCE", top: "10%", right: "-5%" },
  { text: "INSURANCE & CAPITAL", top: "35%", right: "-8%" },
  { text: "CLIMATE & ESG", bottom: "30%", right: "-4%" },
  { text: "INNOVATION & TECH", bottom: "10%", right: "-6%" },
];

export default function HeroAuthoritySection() {
  const [mounted, setMounted] = useState(false);
  const [activeLabel, setActiveLabel] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveLabel((prev) => (prev + 1) % pathwayLabels.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Subtle animated grid on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let raf: number;
    let t = 0;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Faint grid
      ctx.strokeStyle = "rgba(21,154,146,0.06)";
      ctx.lineWidth = 0.5;
      const spacing = 48;
      for (let x = 0; x < w; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Animated data nodes
      const nodes = [
        { x: w * 0.15, y: h * 0.25 },
        { x: w * 0.35, y: h * 0.6 },
        { x: w * 0.6, y: h * 0.3 },
        { x: w * 0.8, y: h * 0.7 },
        { x: w * 0.5, y: h * 0.85 },
      ];

      // Animated connecting lines
      ctx.strokeStyle = "rgba(21,154,146,0.12)";
      ctx.lineWidth = 0.7;
      nodes.forEach((n1, i) => {
        if (i < nodes.length - 1) {
          const n2 = nodes[i + 1];
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          const cx = (n1.x + n2.x) / 2 + Math.sin(t * 0.4 + i) * 20;
          const cy = (n1.y + n2.y) / 2 + Math.cos(t * 0.3 + i) * 15;
          ctx.quadraticCurveTo(cx, cy, n2.x, n2.y);
          ctx.stroke();
        }
      });

      // Nodes
      nodes.forEach((n, i) => {
        const pulse = Math.sin(t * 0.8 + i * 1.2) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2 + pulse * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(21,154,146,${0.15 + pulse * 0.15})`;
        ctx.fill();
      });

      t += 0.012;
      raf = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      aria-label="Introduction"
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "var(--midnight-navy)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "96px",
      }}
    >
      {/* Background canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

      {/* Gold accent line */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, var(--gold), transparent)",
          opacity: 0.4,
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
        className="hero-grid"
      >
        {/* Left — copy */}
        <div>
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                width: "28px",
                height: "1px",
                backgroundColor: "var(--gold)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-ibm-mono), monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "var(--gold)",
                textTransform: "uppercase",
              }}
            >
              Chartered Actuary · C-Suite Executive · Board Adviser
            </span>
          </div>

          {/* Primary headline */}
          <h1
            style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "clamp(2.6rem, 5vw, 4.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              color: "var(--warm-ivory)",
              marginBottom: "1.75rem",
            }}
          >
            Risk clarity for a
            <br />
            world in transition.
          </h1>

          {/* Supporting copy */}
          <p
            style={{
              fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
              color: "rgba(245,243,236,0.72)",
              lineHeight: 1.75,
              maxWidth: "520px",
              marginBottom: "2.5rem",
            }}
          >
            Raymond Cheung helps boards, insurers, financial institutions and
            business leaders navigate enterprise risk, capital, climate
            transition and technological change—turning complexity into
            practical strategic decisions.
          </p>

          {/* Pathway ticker */}
          <div
            aria-live="polite"
            aria-label="Risk pathway"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2.75rem",
              flexWrap: "wrap",
            }}
          >
            {pathwayLabels.map((label, i) => (
              <div
                key={label}
                style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    color:
                      mounted && i === activeLabel
                        ? "var(--strategic-teal)"
                        : "rgba(245,243,236,0.28)",
                    transition: "color 0.4s ease",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </span>
                {i < pathwayLabels.length - 1 && (
                  <span
                    aria-hidden="true"
                    style={{ color: "rgba(245,243,236,0.18)", fontSize: "0.6rem" }}
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <Link
              href="/expertise"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 1.75rem",
                backgroundColor: "var(--strategic-teal)",
                color: "var(--white)",
                fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                letterSpacing: "0.02em",
                borderRadius: "1px",
                textDecoration: "none",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor =
                  "var(--deep-teal)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor =
                  "var(--strategic-teal)")
              }
            >
              Explore Raymond&rsquo;s Expertise <ArrowRight size={15} />
            </Link>
            <Link
              href="/training-speaking"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 1.75rem",
                backgroundColor: "transparent",
                color: "var(--warm-ivory)",
                fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                fontWeight: 500,
                fontSize: "0.875rem",
                letterSpacing: "0.02em",
                borderRadius: "1px",
                border: "1px solid rgba(245,243,236,0.3)",
                textDecoration: "none",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(245,243,236,0.65)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(245,243,236,0.3)")
              }
            >
              Invite Raymond to Speak
            </Link>
          </div>

          {/* Credibility line */}
          <p
            style={{
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.08em",
              color: "rgba(245,243,236,0.38)",
              lineHeight: 1.6,
            }}
          >
            More than 20 years across actuarial science, insurance, enterprise
            risk, innovation and sustainability in Asia.
            {/* VERIFY BEFORE PUBLICATION */}
          </p>
        </div>

        {/* Right — portrait */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Portrait frame */}
          <div
            style={{
              position: "relative",
              width: "min(380px, 90vw)",
              aspectRatio: "3/4",
            }}
          >
            {/* Teal corner accent top-left */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-12px",
                left: "-12px",
                width: "60px",
                height: "60px",
                borderTop: "2px solid var(--strategic-teal)",
                borderLeft: "2px solid var(--strategic-teal)",
                zIndex: 2,
              }}
            />
            {/* Gold corner accent bottom-right */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: "-12px",
                right: "-12px",
                width: "60px",
                height: "60px",
                borderBottom: "2px solid var(--gold)",
                borderRight: "2px solid var(--gold)",
                zIndex: 2,
              }}
            />

            {/* Portrait image */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "4px",
                overflow: "hidden",
                filter: "grayscale(25%) contrast(1.05)",
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/raymond-cheung-portrait.jpg`}
                alt="Raymond Cheung — Chartered Actuary, Risk Executive, Board Adviser and ESG Specialist"
                fill
                priority
                sizes="(max-width: 900px) 90vw, 380px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              {/* Subtle overlay gradient */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent 50%, rgba(7,26,43,0.35) 100%)",
                }}
              />
            </div>

            {/* Floating label cards */}
            {floatingLabels.map((fl) => (
              <div
                key={fl.text}
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: fl.top,
                  bottom: fl.bottom,
                  right: fl.right,
                  backgroundColor: "rgba(7,26,43,0.88)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(21,154,146,0.25)",
                  borderRadius: "1px",
                  padding: "0.4rem 0.7rem",
                  whiteSpace: "nowrap",
                  zIndex: 3,
                  transform: "translateX(calc(100% + 12px))",
                }}
                className="portrait-label"
              >
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.14em",
                    color: "var(--strategic-teal)",
                    textTransform: "uppercase",
                  }}
                >
                  {fl.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 899px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            padding-bottom: 3rem !important;
          }
          .portrait-label {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
