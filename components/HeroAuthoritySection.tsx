"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const proofPoints = [
  { value: "Nasdaq", label: "Led a company to listing as Group CEO" },
  { value: "3", label: "Concurrent listed-company board seats" },
  { value: "24 yrs", label: "Actuarial, risk and executive practice" },
  { value: "2×", label: "MAS statutory Chief Risk Officer" },
];

const floatingLabels = [
  { text: "BOARD & GOVERNANCE", icon: "⬡", delay: 0 },
  { text: "INSURANCE & CAPITAL", icon: "◈", delay: 0.8 },
  { text: "CLIMATE & ESG", icon: "◉", delay: 1.6 },
  { text: "INNOVATION & TECH", icon: "◆", delay: 2.4 },
];

export default function HeroAuthoritySection() {
  const [mounted, setMounted] = useState(false);
  const [activePill, setActivePill] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
    const pillInterval = setInterval(() => {
      setActivePill((prev) => (prev + 1) % floatingLabels.length);
    }, 1800);
    return () => { clearInterval(pillInterval); };
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
        grad.addColorStop(0, "rgba(201,169,97,0.16)");
        grad.addColorStop(0.4, "rgba(201,169,97,0.05)");
        grad.addColorStop(1, "rgba(201,169,97,0)");
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
          ctx.strokeStyle = "rgba(201,169,97,0.1)";
          ctx.moveTo(n1.x, n1.y);
          ctx.quadraticCurveTo(cx, cy, n2.x, n2.y);
          ctx.stroke();
        }
      });

      nodes.forEach((n, i) => {
        const pulse = Math.sin(t * 0.8 + i * 1.2) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2.5 + pulse * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,169,97,${0.12 + pulse * 0.14})`;
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
          radial-gradient(ellipse 60% 50% at 78% 42%, rgba(201,169,97,0.10) 0%, transparent 62%),
          radial-gradient(ellipse 70% 60% at 12% 78%, rgba(201,169,97,0.05) 0%, transparent 60%),
          #08080A
        `,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        paddingTop: "96px",
        maxWidth: "100vw",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.5 }}
      />

      <div
        style={{
          maxWidth: "1280px", margin: "0 auto", padding: "4rem 2rem 4rem 2rem",
          /* shift portrait left: give text less, portrait more */
          display: "grid", gridTemplateColumns: "40fr 60fr", gap: "2rem",
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
              Singapore · Nasdaq &amp; SGX Board Director
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            letterSpacing: "-0.03em", color: "var(--ink)",
            marginBottom: "1.5rem",
          }}>
            <span style={{
              display: "block",
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(3rem, 5.6vw, 5.2rem)", fontWeight: 500,
              lineHeight: 0.98, letterSpacing: "-0.015em",
              marginBottom: "1.1rem", color: "var(--ink)",
            }}>
              Raymond Cheung
            </span>
            <span style={{
              display: "block",
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "clamp(0.95rem, 1.35vw, 1.12rem)", fontWeight: 500,
              lineHeight: 1.55, color: "var(--ink-soft)",
              letterSpacing: "0", maxWidth: "500px",
              paddingTop: "1.1rem", borderTop: "1px solid var(--rule)",
            }}>
              Chartered Actuary, former Nasdaq CEO and board director — advising
              Asia&rsquo;s boards on risk, governance and ESG.
            </span>
          </h1>

          <p style={{
            fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)", color: "var(--graphite)",
            lineHeight: 1.78, maxWidth: "520px", marginBottom: "2.25rem", opacity: 0.8,
          }}>
            I led Basel Medical Group to its Nasdaq listing as Group CEO, served as
            statutory Chief Risk Officer at AIG Asia Pacific and Asia Capital
            Reinsurance, and built digital insurance across seven ASEAN markets at
            Grab. Today I sit on Nasdaq- and SGX-listed boards and advise institutions
            on enterprise risk, ESG strategy and IPO readiness.
          </p>

          {/* Proof points — hard credentials */}
          <div aria-label="Career credentials" style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(118px, 1fr))",
            gap: "0.5rem", marginBottom: "2.5rem", maxWidth: "540px",
          }}>
            {proofPoints.map((p) => (
              <div key={p.value} style={{
                background: "var(--panel)",
                border: "1px solid var(--rule-soft)",
                backdropFilter: "none", WebkitBackdropFilter: "none",
                borderRadius: "2px", padding: "0.8rem 0.9rem",
              }}>
                <p style={{
                  fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                  fontSize: "1.05rem", fontWeight: 800, color: "var(--ink)",
                  letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "0.3rem",
                }}>{p.value}</p>
                <p style={{
                  fontSize: "0.66rem", color: "var(--graphite)", opacity: 0.72,
                  lineHeight: 1.4,
                }}>{p.label}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.25rem" }}>
            <Link href="/advisory" className="btn-teal">
              Advisory &amp; Board Work <ArrowRight size={15} />
            </Link>
            <Link href="/training-speaking" className="btn-ghost-light">
              Invite to Speak
            </Link>
          </div>

          <p style={{
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.66rem",
            letterSpacing: "0.07em", color: "rgba(242,237,227,0.42)", lineHeight: 1.65,
          }}>
            iO3 Ltd (Nasdaq: IOTR) · SDAI Limited (SGX: 5TI) · Former Group CEO, Basel Medical Group (Nasdaq: BMGL) · Former CRO, AIG Asia Pacific · CEO, CER Consultancy
          </p>
        </div>

        {/* Right — portrait + floating labels */}
        <div style={{ display: "flex", justifyContent: "flex-start", position: "relative" }} className="hero-portrait-col">
          {/* Portrait container */}
          <div style={{ position: "relative", width: "min(520px, 90vw)", aspectRatio: "1/1" }}>

            {/* Coral aura */}
            <div aria-hidden="true" style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "115%", height: "115%", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(201,169,97,0.38) 0%, rgba(255,180,150,0.15) 40%, transparent 65%)",
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
              position: "absolute", inset: 0, borderRadius: "2px",
              overflow: "hidden",
              boxShadow: "none",
              border: "1.5px solid var(--rule-soft)",
            }}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/raymond-cheung-portrait.jpg`}
                alt="Raymond Cheung — Chartered Actuary, Risk Executive, Board Adviser and ESG Specialist"
                fill priority
                sizes="(max-width: 900px) 90vw, 520px"
                style={{ objectFit: "cover", objectPosition: "center center" }}
              />
              <div aria-hidden="true" style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, transparent 65%, rgba(242,237,227,0.2) 100%)",
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
                      : "var(--panel)",
                    backdropFilter: "none",
                    WebkitBackdropFilter: "none",
                    border: isActive ? "1.5px solid rgba(201,169,97,0.6)" : "1.5px solid var(--rule-soft)",
                    borderRadius: "2px",
                    padding: "0.65rem 1.1rem",
                    minWidth: "155px",
                    whiteSpace: "nowrap",
                    zIndex: 3,
                    boxShadow: isActive
                      ? "0 8px 32px rgba(201,169,97,0.35)"
                      : "0 4px 20px rgba(0,0,0,0.1)",
                    transform: isActive ? "translateX(6px) scale(1.04)" : "translateX(0) scale(1)",
                    transition: "all 0.45s cubic-bezier(0.34,1.56,0.64,1)",
                  }}
                >
                  {/* Pulse dot */}
                  <span style={{
                    width: "8px", height: "8px", borderRadius: "50%", flexShrink: 0,
                    backgroundColor: isActive ? "#08080A" : "var(--gold)",
                    boxShadow: isActive ? "0 0 0 3px rgba(8,8,10,0.35)" : "0 0 0 3px rgba(201,169,97,0.15)",
                    animation: isActive ? "pilsPulse 1s ease-in-out infinite" : "none",
                  }} />
                  <span style={{
                    fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: isActive ? "#08080A" : "var(--ink)",
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
          0%, 100% { box-shadow: 0 0 0 3px rgba(8,8,10,0.35); transform: scale(1); }
          50% { box-shadow: 0 0 0 6px rgba(8,8,10,0.15); transform: scale(1.15); }
        }
        @media (min-width: 1101px) {
          .hero-portrait-col { padding-right: 160px; }
        }
        @media (max-width: 1100px) {
          .portrait-label { display: none !important; }
        }
        @media (max-width: 899px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            padding-bottom: 3rem !important;
          }
          .hero-portrait-col {
            justify-content: center !important;
            padding-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
