"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Expertise", href: "/expertise" },
  { label: "Advisory", href: "/advisory" },
  { label: "Training & Speaking", href: "/training-speaking" },
  { label: "Insights", href: "/insights" },
];

export default function ExecutiveNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        role="banner"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          transition: "background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
          backgroundColor: scrolled ? "rgba(253,244,232,0.92)" : "rgba(242,237,227,0.55)",
          borderBottom: scrolled ? "1px solid var(--rule-soft)" : "1px solid var(--rule-soft)",
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <nav
          aria-label="Main navigation"
          style={{
            maxWidth: "1280px", margin: "0 auto", padding: "0 2rem",
            display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px",
          }}
        >
          <Link href="/" aria-label="Raymond Cheung — Home" style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontWeight: 800, fontSize: "1rem", letterSpacing: "0.18em",
              color: "var(--ink)", textTransform: "uppercase",
            }}>Raymond Cheung</span>
            <span style={{
              fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.58rem",
              letterSpacing: "0.12em", color: "var(--strategic-teal)",
              textTransform: "uppercase", marginTop: "2px",
            }}>Actuary · Risk · Insurance · ESG</span>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{
                fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                fontWeight: 500, fontSize: "0.85rem", letterSpacing: "0.01em",
                color: "var(--graphite)", textDecoration: "none", transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--midnight-navy)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--graphite)")}
              >{link.label}</Link>
            ))}

            <a href="https://www.linkedin.com/in/raymond-cheung-actuary/" target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                fontWeight: 400, fontSize: "0.8rem", color: "rgba(242,237,227,0.5)",
                textDecoration: "none", display: "flex", alignItems: "center", gap: "0.25rem", transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--graphite)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(242,237,227,0.5)")}
            >LinkedIn <ExternalLink size={11} /></a>

            <Link href="/contact" style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.02em",
              color: "var(--ink)", backgroundColor: "var(--midnight-navy)",
              padding: "0.55rem 1.25rem", borderRadius: "999px",
              textDecoration: "none", transition: "background-color 0.2s ease, transform 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--deep-teal)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--midnight-navy)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
            >Discuss an Engagement</Link>
          </div>

          <button
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "var(--ink)", padding: "0.5rem" }}
            className="show-mobile"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div role="dialog" aria-modal="true" aria-label="Navigation menu" style={{
          position: "fixed", inset: 0, zIndex: 49,
          backgroundColor: "var(--warm-ivory)", paddingTop: "80px", paddingLeft: "2rem", paddingRight: "2rem",
          display: "flex", flexDirection: "column",
        }}>
          <nav aria-label="Mobile navigation">
            {navLinks.map((link, i) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{
                display: "block", fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                fontWeight: 600, fontSize: "1.4rem", letterSpacing: "-0.01em",
                color: "var(--ink)", textDecoration: "none",
                paddingTop: "1.25rem", paddingBottom: "1.25rem",
                borderBottom: "1px solid rgba(242,237,227,0.1)", animationDelay: `${i * 60}ms`,
              }}>{link.label}</Link>
            ))}
          </nav>
          <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Link href="/contact" onClick={() => setMobileOpen(false)} style={{
              display: "block", textAlign: "center",
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontWeight: 600, fontSize: "0.9rem", color: "var(--ink)",
              backgroundColor: "var(--midnight-navy)", padding: "1rem", borderRadius: "999px", textDecoration: "none",
            }}>Discuss an Engagement</Link>
            <a href="https://www.linkedin.com/in/raymond-cheung-actuary/" target="_blank" rel="noopener noreferrer" style={{
              display: "block", textAlign: "center",
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontWeight: 400, fontSize: "0.85rem", color: "rgba(242,237,227,0.55)", textDecoration: "none",
            }}>LinkedIn ↗</a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 899px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </>
  );
}
