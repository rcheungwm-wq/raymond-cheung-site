"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight, Filter } from "lucide-react";
import { programmes, type ProgrammeCategory } from "@/data/programmes";

const filters: { label: string; value: string }[] = [
  { label: "All", value: "all" },
  { label: "Risk", value: "Risk" },
  { label: "Insurance", value: "Insurance" },
  { label: "Climate", value: "Climate" },
  { label: "ESG", value: "ESG" },
  { label: "Technology", value: "Technology" },
  { label: "Governance", value: "Governance" },
];

const statusLabel: Record<string, string> = {
  upcoming: "Upcoming",
  ongoing: "Ongoing",
  past: "Past",
  enquire: "Enquire",
};

const statusColor: Record<string, string> = {
  upcoming: "var(--strategic-teal)",
  ongoing: "var(--gold)",
  past: "rgba(26,23,18,0.5)",
  enquire: "var(--strategic-teal)",
};

export default function FeaturedProgrammes() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? programmes
      : programmes.filter((p) =>
          p.categories.includes(activeFilter as ProgrammeCategory)
        );

  return (
    <section
      id="programmes"
      aria-labelledby="programmes-heading"
      style={{
        backgroundColor: "var(--warm-ivory)",
        padding: "5rem 2rem",
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
            06 / Programmes
          </span>
          <div
            aria-hidden="true"
            style={{ flex: 1, height: "1px", backgroundColor: "rgba(26,23,18,0.08)" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          <h2
            id="programmes-heading"
            style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "var(--ink)",
              maxWidth: "460px",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            How I can help build your organisation&rsquo;s risk capability.
          </h2>

          {/* Filters */}
          <div
            role="group"
            aria-label="Filter programmes by category"
            style={{
              display: "flex",
              gap: "0.4rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Filter size={12} style={{ color: "var(--graphite)", opacity: 0.4 }} />
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                aria-pressed={activeFilter === f.value}
                style={{
                  fontFamily: "var(--font-ibm-mono), monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.35rem 0.75rem",
                  border: "1px solid",
                  borderColor:
                    activeFilter === f.value
                      ? "var(--strategic-teal)"
                      : "rgba(26,23,18,0.15)",
                  borderRadius: "1px",
                  backgroundColor:
                    activeFilter === f.value
                      ? "var(--strategic-teal)"
                      : "transparent",
                  color:
                    activeFilter === f.value
                      ? "var(--white)"
                      : "var(--graphite)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programme cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5px",
          }}
        >
          {filtered.map((prog) => (
            <article
              key={prog.id}
              className="executive-card"
              style={{ padding: "2rem" }}
            >
              {/* Status + categories */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.25rem",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.12em",
                    color: statusColor[prog.status],
                    textTransform: "uppercase",
                    padding: "0.25rem 0.6rem",
                    border: `1px solid ${statusColor[prog.status]}`,
                    borderRadius: "1px",
                  }}
                >
                  {statusLabel[prog.status]}
                  {prog.isPreviewOnly && " — Preview"}
                </span>
                <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
                  {prog.categories.map((cat) => (
                    <span
                      key={cat}
                      style={{
                        fontFamily: "var(--font-ibm-mono), monospace",
                        fontSize: "0.55rem",
                        letterSpacing: "0.08em",
                        color: "var(--graphite)",
                        backgroundColor: "var(--soft-mist)",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "1px",
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  color: "var(--ink)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.3,
                }}
              >
                {prog.title}
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--strategic-teal)",
                  fontWeight: 500,
                  marginBottom: "1rem",
                }}
              >
                {prog.subtitle}
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--graphite)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                  opacity: 0.8,
                }}
              >
                {prog.description}
              </p>

              {/* Meta */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                  marginBottom: "1.5rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(26,23,18,0.06)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.75rem",
                    color: "rgba(26,23,18,0.6)",
                  }}
                >
                  <MapPin size={11} />
                  {prog.deliveryMode}
                </div>
                {prog.cpdHours && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.75rem",
                      color: "rgba(26,23,18,0.6)",
                    }}
                  >
                    <Clock size={11} />
                    CPD: {prog.cpdHours}
                  </div>
                )}
                {prog.hostOrganisation && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.75rem",
                      color: "rgba(26,23,18,0.6)",
                    }}
                  >
                    <Calendar size={11} />
                    {prog.hostOrganisation}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link
                  href="/training-speaking"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "var(--strategic-teal)",
                    textDecoration: "none",
                    fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                  }}
                >
                  View programme <ArrowRight size={12} />
                </Link>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "rgba(26,23,18,0.55)",
                    textDecoration: "none",
                    fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                    borderLeft: "1px solid rgba(26,23,18,0.12)",
                    paddingLeft: "0.75rem",
                  }}
                >
                  Enquire
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p
            style={{
              textAlign: "center",
              color: "rgba(26,23,18,0.45)",
              padding: "3rem",
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
            }}
          >
            No programmes in this category yet. Contact Raymond to discuss custom delivery.
          </p>
        )}

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link
            href="/training-speaking"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.85rem 2rem",
              backgroundColor: "var(--midnight-navy)",
              color: "var(--ink)",
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "0.875rem",
              borderRadius: "1px",
              textDecoration: "none",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--executive-navy)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "var(--midnight-navy)")
            }
          >
            View all programmes <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
