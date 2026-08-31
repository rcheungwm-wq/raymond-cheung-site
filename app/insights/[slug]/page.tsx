import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { insights } from "@/data/insights";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

const SITE_URL = "https://raymondcheungwm.com";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) return { title: "Insight Not Found" };
  const url = `${SITE_URL}/insights/${insight.slug}`;
  return {
    title: insight.title,
    description: insight.summary,
    alternates: { canonical: url },
    openGraph: {
      title: insight.title,
      description: insight.summary,
      type: "article",
      url,
      publishedTime: insight.date,
      authors: ["Raymond Cheung"],
      section: insight.category,
      images: [{ url: "/raymond-cheung-portrait.jpg", width: 1200, height: 630, alt: insight.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: insight.title,
      description: insight.summary,
    },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) notFound();

  const idx = insights.findIndex((i) => i.slug === slug);
  const prev = idx > 0 ? insights[idx - 1] : null;
  const next = idx < insights.length - 1 ? insights[idx + 1] : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.summary,
    articleSection: insight.category,
    datePublished: insight.date,
    inLanguage: "en-SG",
    image: `${SITE_URL}/raymond-cheung-portrait.jpg`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/insights/${insight.slug}`,
    },
    author: {
      "@type": "Person",
      name: "Raymond Cheung",
      url: SITE_URL,
      jobTitle: "Chartered Actuary and Board Director",
      sameAs: ["https://www.linkedin.com/in/raymond-cheung-erm/"],
    },
    publisher: {
      "@type": "Person",
      name: "Raymond Cheung",
      url: SITE_URL,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/insights` },
      { "@type": "ListItem", position: 3, name: insight.title, item: `${SITE_URL}/insights/${insight.slug}` },
    ],
  };

  return (
    <div style={{ backgroundColor: "var(--warm-ivory)", paddingTop: "96px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, var(--midnight-navy) 0%, var(--executive-navy) 100%)",
        padding: "4rem 2rem 3.5rem",
        position: "relative", overflow: "hidden",
      }}>
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 70% at 80% 50%, rgba(229,102,74,0.07) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/insights" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem",
            letterSpacing: "0.12em", color: "rgba(245,243,236,0.45)",
            textDecoration: "none", marginBottom: "2rem", textTransform: "uppercase",
          }}>
            <ArrowLeft size={12} /> Back to Insights
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem",
              letterSpacing: "0.1em", color: "var(--white)",
              backgroundColor: "var(--strategic-teal)",
              padding: "0.3rem 0.75rem", borderRadius: "999px", textTransform: "uppercase",
            }}>{insight.category}</span>
            <span style={{
              display: "flex", alignItems: "center", gap: "0.35rem",
              fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem",
              letterSpacing: "0.08em", color: "rgba(245,243,236,0.4)",
            }}>
              <Clock size={11} />{insight.readingTime}
            </span>
            <span style={{
              fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem",
              letterSpacing: "0.06em", color: "rgba(245,243,236,0.3)",
            }}>{insight.date}</span>
          </div>
          <h1 style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800,
            letterSpacing: "-0.025em", color: "var(--warm-ivory)", lineHeight: 1.2,
          }}>
            {insight.title}
          </h1>
        </div>
      </section>

      {/* Article body */}
      <section style={{ padding: "4rem 2rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Byline */}
          <div style={{
            display: "flex", alignItems: "center", gap: "1rem",
            paddingBottom: "2.5rem", marginBottom: "2.5rem",
            borderBottom: "1px solid rgba(42,31,26,0.1)",
          }}>
            <div style={{
              width: "44px", height: "44px", borderRadius: "50%",
              background: "linear-gradient(135deg, var(--strategic-teal), var(--deep-teal))",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <span style={{ color: "white", fontWeight: 800, fontSize: "0.85rem" }}>RC</span>
            </div>
            <div>
              <p style={{
                fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                fontWeight: 700, fontSize: "0.88rem", color: "var(--midnight-navy)",
              }}>Raymond Cheung</p>
              <p style={{
                fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem",
                letterSpacing: "0.08em", color: "var(--graphite)", opacity: 0.6,
              }}>
                Chartered Actuary · CRO · Board Adviser · Singapore
              </p>
            </div>
          </div>

          {/* Lead paragraph */}
          <p style={{
            fontSize: "1.12rem", color: "var(--midnight-navy)", lineHeight: 1.85,
            fontWeight: 500, marginBottom: "2rem",
          }}>{insight.summary}</p>

          {/* Body sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {insight.body.map((section, i) => {
              if (section.type === "heading") {
                return (
                  <h2 key={i} style={{
                    fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                    fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em",
                    color: "var(--midnight-navy)", marginTop: "1rem",
                    paddingTop: "1rem", borderTop: "1px solid rgba(42,31,26,0.06)",
                  }}>{section.text}</h2>
                );
              }
              if (section.type === "pullquote") {
                return (
                  <blockquote key={i} style={{
                    borderLeft: "3px solid var(--strategic-teal)",
                    paddingLeft: "1.5rem", margin: "0.5rem 0",
                  }}>
                    <p style={{
                      fontFamily: "var(--font-cormorant, Georgia), serif",
                      fontSize: "1.2rem", fontStyle: "italic", fontWeight: 600,
                      color: "var(--midnight-navy)", lineHeight: 1.55,
                    }}>&ldquo;{section.text}&rdquo;</p>
                  </blockquote>
                );
              }
              if (section.type === "list" && section.items) {
                return (
                  <ul key={i} style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                    {section.items.map((item, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
                        <span aria-hidden="true" style={{
                          color: "var(--strategic-teal)", fontSize: "0.6rem",
                          marginTop: "0.45rem", flexShrink: 0,
                        }}>◆</span>
                        <span style={{ fontSize: "0.95rem", color: "var(--graphite)", lineHeight: 1.75, opacity: 0.88 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} style={{
                  fontSize: "0.975rem", color: "var(--graphite)", lineHeight: 1.85, opacity: 0.88,
                }}>{section.text}</p>
              );
            })}
          </div>

          {/* Author card */}
          <div style={{
            marginTop: "4rem", padding: "2rem 2.5rem",
            background: "linear-gradient(135deg, var(--midnight-navy), var(--executive-navy))",
            borderRadius: "16px",
          }}>
            <p style={{
              fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.6rem",
              letterSpacing: "0.14em", color: "var(--gold)", textTransform: "uppercase",
              marginBottom: "1rem",
            }}>About the author</p>
            <p style={{ fontSize: "0.88rem", color: "rgba(244,229,208,0.8)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
              Raymond Cheung is a Chartered Actuary, C-suite executive and board adviser with more than 20 years of experience across Asia in risk management, insurance, ESG and corporate governance. He is the CEO of CER Consultancy and an accredited trainer at SMU Academy and the Singapore College of Insurance.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.6rem 1.25rem", borderRadius: "999px",
                background: "var(--strategic-teal)", color: "white",
                fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                fontWeight: 600, fontSize: "0.78rem", textDecoration: "none",
              }}>
                Work with Raymond <ArrowRight size={12} />
              </Link>
              <a href="https://www.linkedin.com/in/raymond-cheung-actuary/" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                padding: "0.6rem 1.25rem", borderRadius: "999px",
                border: "1px solid rgba(244,229,208,0.2)", color: "rgba(244,229,208,0.7)",
                fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                fontSize: "0.78rem", textDecoration: "none",
              }}>
                Follow on LinkedIn
              </a>
            </div>
          </div>

          {/* Prev / Next navigation */}
          <nav aria-label="Article navigation" style={{
            marginTop: "3rem", paddingTop: "2rem",
            borderTop: "1px solid rgba(42,31,26,0.08)",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem",
          }}>
            {prev ? (
              <Link href={`/insights/${prev.slug}`} style={{
                textDecoration: "none", padding: "1.25rem",
                border: "1px solid rgba(42,31,26,0.1)", borderRadius: "12px",
                display: "block", transition: "border-color 0.2s",
              }}>
                <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--graphite)", opacity: 0.5, marginBottom: "0.4rem" }}>← Previous</p>
                <p style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "var(--midnight-navy)", lineHeight: 1.4 }}>{prev.title}</p>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/insights/${next.slug}`} style={{
                textDecoration: "none", padding: "1.25rem",
                border: "1px solid rgba(42,31,26,0.1)", borderRadius: "12px",
                display: "block", textAlign: "right", transition: "border-color 0.2s",
              }}>
                <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem", letterSpacing: "0.1em", color: "var(--graphite)", opacity: 0.5, marginBottom: "0.4rem" }}>Next →</p>
                <p style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "var(--midnight-navy)", lineHeight: 1.4 }}>{next.title}</p>
              </Link>
            ) : <div />}
          </nav>

          <div style={{ marginTop: "2rem" }}>
            <Link href="/insights" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              fontSize: "0.85rem", fontWeight: 600, color: "var(--strategic-teal)",
              textDecoration: "none",
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            }}>
              <ArrowLeft size={14} /> All insights
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
