"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  BarChart2,
  Leaf,
  Users,
  Cpu,
  GraduationCap,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { expertiseAreas } from "@/data/expertise";

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield size={20} />,
  "bar-chart": <BarChart2 size={20} />,
  leaf: <Leaf size={20} />,
  users: <Users size={20} />,
  cpu: <Cpu size={20} />,
  "graduation-cap": <GraduationCap size={20} />,
};

export default function ExpertiseGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      style={{
        backgroundColor: "var(--soft-mist)",
        padding: "7rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: "var(--strategic-teal)",
              textTransform: "uppercase",
            }}
          >
            02 / Expertise
          </span>
          <div
            aria-hidden="true"
            style={{ flex: 1, height: "1px", backgroundColor: "rgba(7,26,43,0.08)" }}
          />
        </div>

        <h2
          id="expertise-heading"
          style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "var(--midnight-navy)",
            maxWidth: "600px",
            marginBottom: "3.5rem",
            lineHeight: 1.2,
          }}
        >
          Expertise shaped by the boardroom, the balance sheet and the market.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "1.5px",
          }}
        >
          {expertiseAreas.map((area) => {
            const isOpen = expandedId === area.id;
            return (
              <article
                key={area.id}
                style={{
                  backgroundColor: "var(--white)",
                  border: "1px solid rgba(7,26,43,0.06)",
                  padding: "2rem",
                  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(21,154,146,0.25)";
                  el.style.boxShadow = "0 4px 20px rgba(7,26,43,0.07)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(7,26,43,0.06)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-ibm-mono), monospace",
                        fontSize: "0.6rem",
                        letterSpacing: "0.14em",
                        color: "var(--gold)",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {area.number}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                        fontSize: "1rem",
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                        color: "var(--midnight-navy)",
                        lineHeight: 1.25,
                      }}
                    >
                      {area.title}
                    </h3>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      color: "var(--strategic-teal)",
                      flexShrink: 0,
                      marginTop: "0.2rem",
                    }}
                  >
                    {iconMap[area.icon]}
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--graphite)",
                    lineHeight: 1.7,
                    marginBottom: "1.25rem",
                    opacity: 0.8,
                  }}
                >
                  {area.description}
                </p>

                {/* Topics toggle */}
                <button
                  aria-expanded={isOpen}
                  aria-controls={`topics-${area.id}`}
                  onClick={() => setExpandedId(isOpen ? null : area.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.12em",
                    color: "var(--strategic-teal)",
                    textTransform: "uppercase",
                    marginBottom: isOpen ? "1rem" : "1.5rem",
                  }}
                >
                  Topics
                  <ChevronDown
                    size={12}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                    }}
                  />
                </button>

                {/* Expandable topics */}
                <div
                  id={`topics-${area.id}`}
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? "200px" : "0",
                    transition: "max-height 0.35s ease",
                    marginBottom: isOpen ? "1.25rem" : "0",
                  }}
                >
                  <ul
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.4rem",
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                    }}
                  >
                    {area.topics.map((topic) => (
                      <li
                        key={topic}
                        style={{
                          fontFamily: "var(--font-ibm-mono), monospace",
                          fontSize: "0.6rem",
                          letterSpacing: "0.06em",
                          color: "var(--graphite)",
                          backgroundColor: "var(--soft-mist)",
                          padding: "0.3rem 0.65rem",
                          borderRadius: "1px",
                        }}
                      >
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link */}
                <Link
                  href={area.link}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "var(--strategic-teal)",
                    textDecoration: "none",
                    fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                    transition: "gap 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.gap = "0.6rem")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.gap = "0.35rem")
                  }
                >
                  Explore this expertise <ArrowRight size={13} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
