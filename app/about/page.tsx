"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { profile } from "@/data/profile";
import { careerJourney } from "@/data/experience";
import PublicationsSection from "@/components/PublicationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const roles = [
  {
    title: "CEO",
    org: "CER Consultancy",
    status: "current",
    period: "Current",
    what: "CER Consultancy is my independent advisory practice. I work with boards, insurers, financial institutions and regulators across Asia on the questions that matter most — risk governance, capital strategy, ESG implementation and organisational resilience. Every engagement is different, but the underlying challenge is usually the same: turning complex, high-stakes problems into clear decisions.",
    did: [
      "Board and strategic advisory across insurance, finance and listed companies",
      "Climate risk and ESG governance frameworks for institutions and regulators",
      "Risk appetite and enterprise risk management design",
      "Executive education on risk, insurance and sustainability",
    ],
  },
  {
    title: "Statutory Chief Risk Officer",
    org: "AIG Asia Pacific",
    status: "former",
    period: "Former",
    what: "This was one of the most formative roles of my career. As statutory CRO for one of Asia Pacific's largest insurance groups, I was personally accountable — not just functionally responsible — for enterprise risk across the region. I had to understand how risk, capital, strategy and governance connected at the highest levels of the organisation and explain it clearly to boards and regulators.",
    did: [
      "Enterprise-wide risk framework design and implementation across Asia Pacific",
      "Statutory risk accountability across multiple regulatory jurisdictions",
      "Board and regulator reporting on capital adequacy and risk exposure",
      "ORSA process leadership and stress-testing programme oversight",
      "Risk culture development across a large, distributed organisation",
    ],
  },
  {
    title: "Group Chief Risk Officer & Group Head of Compliance",
    org: "Asia Capital Reinsurance Group",
    status: "former",
    period: "Former",
    what: "Leading risk and compliance for a pan-Asian reinsurance group gave me a distinctive perspective on how risk accumulates at the group level — across subsidiaries, markets and regulatory regimes with very different expectations. Reinsurance sits at the intersection of risk transfer, capital and relationships; understanding it deeply shaped how I advise on capital and governance today.",
    did: [
      "Group-level risk governance across multiple Asian jurisdictions",
      "Enterprise risk management and compliance programme leadership",
      "Reinsurance risk oversight and capital framework development",
      "Internal risk capability building across group entities",
      "Regulatory relationships and submissions across ASEAN markets",
    ],
  },
  {
    title: "Regional Insurance Lead",
    org: "Grab",
    status: "former",
    period: "Former",
    what: "This role sat at the intersection of insurance and technology at a scale few practitioners ever get to see. I helped build digital insurance programmes across eight ASEAN markets at one of Southeast Asia's most significant technology platforms — designing products, securing regulatory licences, structuring partnerships and connecting insurance expertise to a customer base of millions. It gave me a practitioner's understanding of where insurance is going.",
    did: [
      "Digital insurance product design and launch across 8 ASEAN markets",
      "Insurance regulatory licensing and compliance across multiple jurisdictions",
      "Distribution strategy connecting platform technology to insurance delivery",
      "Insurtech partnership structuring and governance",
      "Building insurance capability within a technology-first organisation",
    ],
  },
  {
    title: "Group CEO",
    org: "Basel Medical Group",
    status: "former",
    period: "Former",
    what: "Stepping into the Group CEO role of a listed healthcare company expanded my perspective far beyond financial services. I was responsible for commercial strategy, operational performance and board governance of a publicly listed organisation — with all the accountability that entails. It reinforced for me how universal the fundamentals of good governance and strategic risk management really are.",
    did: [
      "Group strategic leadership and commercial performance",
      "Board governance and listed-company accountability",
      "Operational oversight across healthcare group entities",
      "Stakeholder management across investors, regulators and clinical leadership",
    ],
  },
  {
    title: "Independent Director",
    org: "SGX & Nasdaq Listed Companies",
    status: "associated",
    period: "Board",
    what: "Serving as an independent director on publicly listed companies — across both SGX and Nasdaq — is where my experience on both sides of the boardroom becomes most visible. I bring risk, actuarial and financial services depth to audit and risk committee work, and I know from my own CRO experience what good risk reporting to a board should look like.",
    did: [
      "Independent board oversight and governance stewardship",
      "Audit and risk committee membership",
      "Risk and capital challenge of management reporting",
      "Regulatory accountability in multi-jurisdiction public-market environments",
    ],
  },
  {
    title: "Accredited Trainer",
    org: "SMU Academy",
    status: "associated",
    period: "Training",
    what: "I design and deliver executive education at Singapore Management University's professional learning arm. My programmes are built around the questions that boards, executives and senior practitioners are actually wrestling with — not theoretical frameworks disconnected from practice. I teach risk, insurance, ESG and governance through the lens of someone who has had to make the decisions I'm asking participants to think about.",
    did: [
      "Executive education in risk management, ESG and insurance governance",
      "Programme design for board directors, C-suite and senior professionals",
      "Climate risk and sustainability training for financial institutions",
      "Curriculum development connecting technical frameworks to real decisions",
    ],
  },
  {
    title: "Accredited Trainer",
    org: "Singapore College of Insurance",
    status: "associated",
    period: "Training",
    what: "The Singapore College of Insurance is the region's principal professional development institution for insurance practitioners. Training here connects me with the next generation of insurance professionals — and keeps me close to what the industry is thinking about, asking about and struggling with. I cover insurance regulation, enterprise risk, climate risk and ESG practice.",
    did: [
      "Accredited professional training in insurance regulation and risk management",
      "Climate risk and ESG content for insurance practitioners",
      "Enterprise risk management education for senior insurance executives",
      "Continuing professional development across the Singapore insurance industry",
    ],
  },
];

export default function AboutPage() {
  const [openRole, setOpenRole] = useState<number | null>(0);

  return (
    <div style={{ backgroundColor: "var(--warm-ivory)", paddingTop: "96px" }}>
      {/* Page hero */}
      <section
        aria-labelledby="about-heading"
        style={{
          background: "linear-gradient(135deg, var(--midnight-navy) 0%, var(--executive-navy) 100%)",
          padding: "5rem 2rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(201,169,97,0.08) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span style={{
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem",
            letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase",
            display: "block", marginBottom: "1.5rem",
          }}>About</span>
          <h1 id="about-heading" style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800,
            letterSpacing: "-0.03em", color: "var(--ink)", lineHeight: 1.12,
            maxWidth: "760px",
          }}>
            Raymond Cheung — Chartered Actuary, Chief Risk Officer and Board Adviser in Singapore
          </h1>
          <p style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "clamp(1.05rem, 2vw, 1.35rem)", fontWeight: 500,
            color: "var(--graphite)", lineHeight: 1.4, maxWidth: "620px",
            marginTop: "1.25rem",
          }}>
            Two decades of risk, leadership and the discipline to connect them.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "5rem 2rem" }}>
        <div
          style={{
            maxWidth: "1280px", margin: "0 auto",
            display: "grid", gridTemplateColumns: "1fr 320px",
            gap: "5rem", alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left */}
          <div>
            <p style={{
              fontSize: "1.15rem", color: "var(--ink)", lineHeight: 1.85,
              fontWeight: 500, marginBottom: "1.75rem",
            }}>
              {profile.biography.opening}
            </p>
            <p style={{
              fontSize: "1rem", color: "var(--graphite)", lineHeight: 1.85,
              marginBottom: "3rem", opacity: 0.85,
            }}>
              {profile.biography.full}
            </p>

            {/* Pull quote */}
            <div style={{
              background: "linear-gradient(135deg, var(--midnight-navy) 0%, var(--executive-navy) 100%)",
              padding: "2.5rem", marginBottom: "4rem",
              borderLeft: "3px solid var(--gold)", borderRadius: "0 12px 12px 0",
            }}>
              <p style={{
                fontFamily: "var(--font-cormorant, Georgia), serif",
                fontSize: "1.25rem", fontWeight: 600, fontStyle: "italic",
                color: "var(--ink)", lineHeight: 1.6,
              }}>
                &ldquo;{profile.philosophy.headline}&rdquo;
              </p>
            </div>

            {/* Career journey */}
            <h2 style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em",
              color: "var(--ink)", marginBottom: "2rem",
            }}>
              My career in stages
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "4rem" }}>
              {careerJourney.map((stage) => (
                <div key={stage.id} style={{
                  paddingLeft: "1.5rem",
                  borderLeft: "2px solid rgba(201,169,97,0.25)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem" }}>
                    <span style={{
                      fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem",
                      letterSpacing: "0.1em", color: "var(--gold)",
                    }}>{stage.stage}</span>
                    <h3 style={{
                      fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                      fontSize: "0.9rem", fontWeight: 700, color: "var(--ink)",
                    }}>{stage.title}</h3>
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "var(--graphite)", lineHeight: 1.7, opacity: 0.82 }}>
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Publications & Curricula */}
            <div style={{ marginBottom: "4rem" }}>
              <PublicationsSection />
            </div>

            {/* Accordion roles */}
            <h2 style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em",
              color: "var(--ink)", marginBottom: "0.75rem",
            }}>
              My professional roles
            </h2>
            <p style={{
              fontSize: "0.88rem", color: "var(--graphite)", opacity: 0.7,
              marginBottom: "2rem", lineHeight: 1.6,
            }}>
              Click any role to see what I actually did there.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0", marginBottom: "4rem", borderRadius: "2px", overflow: "hidden", boxShadow: "var(--sh-glass)" }}>
              {roles.map((role, i) => {
                const isOpen = openRole === i;
                return (
                  <div key={`${role.title}-${role.org}`} style={{
                    borderBottom: i < roles.length - 1 ? "1px solid rgba(26,23,18,0.07)" : "none",
                    backgroundColor: isOpen ? "var(--panel-hi)" : "var(--panel)",
                    transition: "background-color 0.3s ease",
                  }}>
                    <button
                      onClick={() => setOpenRole(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      style={{
                        width: "100%", display: "flex", alignItems: "center",
                        justifyContent: "space-between", gap: "1rem",
                        padding: "1.4rem 1.75rem", background: "none", border: "none",
                        cursor: "pointer", textAlign: "left",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flex: 1 }}>
                        <span style={{
                          fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.56rem",
                          letterSpacing: "0.12em", textTransform: "uppercase",
                          color: isOpen ? "var(--gold)" : "var(--strategic-teal)",
                          flexShrink: 0,
                          background: isOpen ? "rgba(201,169,97,0.15)" : "rgba(201,169,97,0.08)",
                          padding: "0.25rem 0.6rem", borderRadius: "999px",
                        }}>{role.period}</span>
                        <div>
                          <p style={{
                            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                            fontSize: "0.92rem", fontWeight: 700,
                            color: isOpen ? "var(--ink)" : "var(--ink)",
                            marginBottom: "0.1rem",
                          }}>{role.title}</p>
                          <p style={{
                            fontSize: "0.8rem",
                            color: isOpen ? "rgba(26,23,18,0.6)" : "rgba(26,23,18,0.5)",
                          }}>{role.org}</p>
                        </div>
                      </div>
                      <ChevronDown
                        size={16}
                        style={{
                          color: isOpen ? "var(--strategic-teal)" : "rgba(26,23,18,0.3)",
                          transform: isOpen ? "rotate(180deg)" : "none",
                          transition: "transform 0.3s ease",
                          flexShrink: 0,
                        }}
                      />
                    </button>

                    {isOpen && (
                      <div style={{ padding: "0 1.75rem 2rem" }}>
                        <p style={{
                          fontSize: "0.9rem", color: "rgba(26,23,18,0.82)",
                          lineHeight: 1.78, marginBottom: "1.5rem",
                        }}>
                          {role.what}
                        </p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                          {role.did.map((item) => (
                            <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                              <span aria-hidden="true" style={{
                                color: "var(--strategic-teal)", fontSize: "0.6rem",
                                marginTop: "0.3rem", flexShrink: 0,
                              }}>◆</span>
                              <span style={{
                                fontSize: "0.84rem", color: "rgba(26,23,18,0.7)", lineHeight: 1.65,
                              }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA strip */}
            <div style={{
              display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center",
              padding: "2rem 2.5rem",
              background: "var(--glass)", backdropFilter: "none",
              WebkitBackdropFilter: "none", border: "1px solid var(--glass-border)",
              borderRadius: "2px", boxShadow: "var(--sh-glass)",
            }}>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                  fontWeight: 700, fontSize: "0.95rem", color: "var(--ink)",
                  marginBottom: "0.25rem",
                }}>Ready to discuss an engagement?</p>
                <p style={{ fontSize: "0.82rem", color: "var(--graphite)", opacity: 0.7 }}>
                  Advisory · Training · Speaking · Board Briefings
                </p>
              </div>
              <Link href="/contact" className="btn-teal">
                Get in Touch <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside aria-label="Raymond Cheung at a glance">
            <div style={{ position: "sticky", top: "112px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{
                position: "relative", width: "100%", aspectRatio: "3/4",
                overflow: "hidden", borderRadius: "2px",
                boxShadow: "var(--sh-deep)",
                border: "1.5px solid var(--rule-soft)",
              }}>
                <Image
                  src={profile.portrait}
                  alt={profile.portraitAlt}
                  fill
                  sizes="320px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
              </div>

              <div style={{
                background: "var(--glass)", backdropFilter: "none",
                WebkitBackdropFilter: "none",
                border: "1px solid var(--glass-border)", borderRadius: "2px",
                padding: "1.75rem", boxShadow: "var(--sh-glass)",
              }}>
                <p style={{
                  fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem",
                  letterSpacing: "0.14em", color: "var(--gold)", textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}>At a glance</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {profile.credentials.map((cred) => (
                    <li key={cred} style={{
                      fontSize: "0.85rem", color: "var(--ink)", fontWeight: 500,
                      padding: "0.5rem 0", borderBottom: "1px solid rgba(26,23,18,0.07)",
                      display: "flex", alignItems: "center", gap: "0.5rem",
                    }}>
                      <span aria-hidden="true" style={{ color: "var(--strategic-teal)", fontSize: "0.6rem" }}>◆</span>
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={profile.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                  padding: "0.85rem 1.5rem",
                  background: "var(--midnight-navy)", color: "var(--ink)",
                  borderRadius: "999px", textDecoration: "none",
                  fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                  fontSize: "0.82rem", fontWeight: 600,
                }}
              >
                Connect on LinkedIn ↗
              </a>

              {/* Press */}
              <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--rule-soft)" }}>
                <p style={{
                  fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem",
                  letterSpacing: "0.18em", color: "var(--ink-faint)",
                  textTransform: "uppercase", marginBottom: "0.85rem",
                }}>
                  In the press
                </p>
                <a
                  href="https://www.ceoinsightsasia.com/leader/raymond-cheung-spearheading-insurtech-to-create-an-ecosystem-for-the-next-generation-of-customers-cid-4515.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block", fontSize: "0.82rem", lineHeight: 1.55,
                    color: "var(--ink-soft)", textDecoration: "none",
                  }}
                >
                  <span style={{ display: "block", fontWeight: 600, color: "var(--ink)" }}>
                    CEO Insights Asia ↗
                  </span>
                  Spearheading insurtech to create an ecosystem for the next
                  generation of customers
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Full set of recommendations — homepage shows a curated three */}
      <TestimonialsSection />

      <style>{`
        @media (max-width: 899px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > aside { order: -1; }
        }
      `}</style>
    </div>
  );
}
