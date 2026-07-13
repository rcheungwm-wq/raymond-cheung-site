"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const pathwayLabels = ["UNCERTAINTY", "CLARITY", "DECISION", "RESILIENCE"];

const floatingLabels = [
  { text: "BOARD & GOVERNANCE", icon: "⬡", delay: 0 },
  { text: "INSURANCE & CAPITAL", icon: "◈", delay: 0.8 },
  { text: "CLIMATE & ESG", icon: "◉", delay: 1.6 },
  { text: "INNOVATION & TECH", icon: "◆", delay: 2.4 },
];

export default function HeroAuthoritySection() {
  const [mounted, setMounted] = useState(false);
  const [activeLabel, setActiveLabel] = useState(0);
  const [activePill, setActivePill] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveLabel((prev) => (prev + 1) % pathwayLabels.length);
    }, 2200);
    const pillInterval = setInterval(() => {
      setActivePill((prev) => (prev + 1) % floatingLabels.length);
    }, 1800);
    return () => { clearInterval(interval); clearInterval(pillInterval); };
  }, []);

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

      [[0.12], [0.35], [0.5], [0.65], [0.78]].forEach(([x]) => {
        const grad = ctx.createLinearGradient(w * x, 0, w * x, h);
        grad.addColorStop(0, "rgba(255,255,255,0.18)");
        grad.addColorStop(0.4, "rgba(255,255,255,0.06)");
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.beginPath();
        ctx.strokeStyle = grad as unknown as string;
        ctx.lineWidth = 1;
        ctx.moveTo(w * x, 0);
        ctx.lineTo(w * x, h);
        ctx.stroke();
      });

      const nodes = [
        { x: w * 0.12, y: h * 0.22 },
        { x: w * 0.32, y: h * 0.58 },
        { x: w * 0.55, y: h * 0.28 },
        { x: w * 0.75, y: h * 0.65 },
        { x: w * 0.45, y: h * 0.82 },
      ];

      ctx.lineWidth = 0.8;
      nodes.forEach((n1, i) => {
        if (i < nodes.length - 1) {
          const n2 = nodes[i + 1];
          const cx = (n1.x + n2.x) / 2 + Math.sin(t * 0.4 + i) * 18;
          const cy = (n1.y + n2.y) / 2 + Math.cos(t * 0.3 + i) * 14;
          ctx.beginPath();
          ctx.strokeStyle = "rgba(229,102,74,0.1)";
          ctx.moveTo(n1.x, n1.y);
          ctx.quadraticCurveTo(cx, cy, n2.x, n2.y);
          ctx.stroke();
        }
      });

      nodes.forEach((n, i) => {
        const pulse = Math.sin(t * 0.8 + i * 1.2) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.5 + pulse * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229,102,74,${0.12 + pulse * 0.14})`;
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
        background: `
          radial-gradient(ellipse 70% 55% at 15% 30%, rgba(255,140,114,0.18) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 85% 75%, rgba(251,224,207,0.7) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 50% 10%, rgba(255,255,255,0.5) 0%, transparent 50%),
          #F4E5D0
        `,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "96px",
      }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      />

      <div aria-hidden="true" style={{
        position: "absolute", top: "38%", left: "-10%", right: "-10%", height: "4px",
        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
        filter: "blur(8px)", zIndex: 0, pointerEvents: "none",
      }} />

      <div
        style={{
          maxWidth: "1280px", margin: "0 auto", padding: "4rem 2rem 4rem 2rem",
          /* shift portrait left: give text less, portrait more */
          display: "grid", gridTemplateColumns: "45fr 55fr", gap: "2rem",
          alignItems: "center", position: "relative", zIndex: 1, width: "100%",
        }}
        className="hero-grid"
      >
        {/* Left — copy */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div aria-hidden="true" style={{ width: "28px", height: "2px", backgroundColor: "var(--gold)", borderRadius: "2px" }} />
            <span style={{
              fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem",
              letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase",
            }}>
              Chartered Actuary · C-Suite Executive · Board Adviser
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "clamp(2.6rem, 5vw, 4.5rem)", fontWeight: 800,
            letterSpacing: "-0.03em", lineHeight: 1.06, color: "var(--midnight-navy)",
            marginBottom: "1.75rem",
          }}>
            Risk clarity for a<br />world in transition.
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 1.5vw, 1.12rem)", color: "var(--graphite)",
            lineHeight: 1.78, maxWidth: "520px", marginBottom: "2.5rem", opacity: 0.85,
          }}>
            Chartered Actuary, C-suite executive and board adviser with more than 20 years
            across Asia. Raymond helps boards, insurers and financial institutions navigate
            enterprise risk, capital, climate transition and digital change — turning complexity
            into decisions that hold.
          </p>

          <div aria-live="polite" aria-label="Risk pathway" style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            marginBottom: "2.75rem", flexWrap: "wrap",
          }}>
            {pathwayLabels.map((label, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{
                  fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem",
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: mounted && i === activeLabel ? "var(--strategic-teal)" : "rgba(42,31,26,0.28)",
                  transition: "color 0.4s ease",
                }}>{label}</span>
                {i < pathwayLabels.length - 1 && (
                  <span aria-hidden="true" style={{ color: "rgba(42,31,26,0.2)", fontSize: "0.6rem" }}>→</span>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <Link href="/expertise" className="btn-teal">
              Explore Expertise <ArrowRight size={15} />
            </Link>
            <Link href="/training-speaking" className="btn-ghost-light">
              Invite to Speak
            </Link>
          </div>

          <p style={{
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.68rem",
            letterSpacing: "0.08em", color: "rgba(42,31,26,0.42)", lineHeight: 1.6,
          }}>
            Former CRO, AIG Asia Pacific · Asia Capital Reinsurance · Regional Insurance Lead, Grab · CEO, CER Consultancy
          </p>
        </div>

        {/* Right — portrait + floating labels */}
        <div style={{ display: "flex", justifyContent: "flex-start", position: "relative", paddingRight: "160px" }}>
          {/* Portrait container — taller & larger */}
          <div style={{ position: "relative", width: "min(420px, 85vw)", aspectRatio: "3/4" }}>

            {/* Coral aura */}
            <div aria-hidden="true" style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "115%", height: "115%", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,140,114,0.38) 0%, rgba(255,180,150,0.15) 40%, transparent 65%)",
              filter: "blur(44px)", zIndex: 0,
            }} />

            {/* Gold corner top-left */}
            <div aria-hidden="true" style={{
              position: "absolute", top: "-14px", left: "-14px",
              width: "64px", height: "64px",
              borderTop: "2.5px solid var(--gold)", borderLeft: "2.5px solid var(--gold)",
              borderRadius: "4px 0 0 0", zIndex: 2,
            }} />
            {/* Coral corner bottom-right */}
            <div aria-hidden="true" style={{
              position: "absolute", bottom: "-14px", right: "-14px",
              width: "64px", height: "64px",
              borderBottom: "2.5px solid var(--strategic-teal)", borderRight: "2.5px solid var(--strategic-teal)",
              borderRadius: "0 0 4px 0", zIndex: 2,
            }} />

            {/* Portrait image — no blur filter, crisp */}
            <div style={{
              position: "absolute", inset: 0, borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(120,70,50,0.32)",
              border: "1.5px solid rgba(255,255,255,0.8)",
            }}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/raymond-cheung-portrait.jpg`}
                alt="Raymond Cheung — Chartered Actuary, Risk Executive, Board Adviser and ESG Specialist"
                fill priority
                sizes="(max-width: 900px) 85vw, 420px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              <div aria-hidden="true" style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, transparent 65%, rgba(42,31,26,0.2) 100%)",
              }} />
            </div>

            {/* Floating label pills — stacked to the right of portrait */}
            {floatingLabels.map((fl, i) => {
              const isActive = mounted && activePill === i;
              return (
                <div
                  key={fl.text}
                  aria-hidden="true"
                  className="portrait-label"
                  style={{
                    position: "absolute",
                    right: "-168px",
                    top: `${14 + i * 22}%`,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    background: isActive
                      ? "linear-gradient(135deg, var(--strategic-teal), var(--deep-teal))"
                      : "rgba(255,255,255,0.88)",
                    backdropFilter: "blur(12px) saturate(130%)",
                    WebkitBackdropFilter: "blur(12px) saturate(130%)",
                    border: isActive ? "1.5px solid rgba(229,102,74,0.6)" : "1.5px solid rgba(255,255,255,0.9)",
                    borderRadius: "14px",
                    padding: "0.65rem 1.1rem",
                    minWidth: "155px",
                    whiteSpace: "nowrap",
                    zIndex: 3,
                    boxShadow: isActive
                      ? "0 8px 32px rgba(229,102,74,0.35)"
                      : "0 4px 20px rgba(120,70,50,0.1)",
                    transform: isActive ? "translateX(6px) scale(1.04)" : "translateX(0) scale(1)",
                    transition: "all 0.45s cubic-bezier(0.34,1.56,0.64,1)",
                  }}
                >
                  {/* Pulse dot */}
                  <span style={{
                    width: "8px", height: "8px", borderRadius: "50%", flexShrink: 0,
                    backgroundColor: isActive ? "rgba(255,255,255,0.9)" : "var(--strategic-teal)",
                    boxShadow: isActive ? "0 0 0 3px rgba(255,255,255,0.3)" : "0 0 0 3px rgba(229,102,74,0.15)",
                    animation: isActive ? "pilsPulse 1s ease-in-out infinite" : "none",
                  }} />
                  <span style={{
                    fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: isActive ? "#fff" : "var(--midnight-navy)",
                    textTransform: "uppercase",
                  }}>{fl.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pilsPulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(255,255,255,0.3); transform: scale(1); }
          50% { box-shadow: 0 0 0 6px rgba(255,255,255,0.12); transform: scale(1.15); }
        }
        @media (max-width: 1100px) {
          .portrait-label { display: none !important; }
        }
        @media (max-width: 899px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; padding-bottom: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
