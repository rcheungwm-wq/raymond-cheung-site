import Link from "next/link";
import { ExternalLink } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function ExecutiveFooter() {
  return (
    <footer
      role="contentinfo"
      style={{ backgroundColor: "var(--midnight-navy)", borderTop: "1px solid rgba(201,169,97,0.15)", paddingTop: "4rem", paddingBottom: "2rem" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", paddingBottom: "3rem", borderBottom: "1px solid rgba(21,154,146,0.1)" }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none" }} aria-label="Raymond Cheung – Home">
              <p style={{ fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif", fontWeight: 800, fontSize: "1.05rem", letterSpacing: "0.16em", color: "var(--warm-ivory)", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                Raymond Cheung
              </p>
            </Link>
            <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--strategic-teal)", textTransform: "uppercase" }}>
              Risk · Insurance · Capital · ESG · Innovation
            </p>
            <p style={{ marginTop: "1.25rem", fontSize: "0.82rem", color: "rgba(245,243,236,0.45)", lineHeight: 1.7, maxWidth: "260px" }}>
              Chartered Actuary, C-suite executive and board adviser operating from Singapore.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem", letterSpacing: "0.14em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1rem" }}>
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              {[
                { label: "About", href: "/about" },
                { label: "Expertise", href: "/expertise" },
                { label: "Advisory", href: "/advisory" },
                { label: "Training & Speaking", href: "/training-speaking" },
                { label: "Insights", href: "/insights" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="nav-link-footer" style={{ display: "block", marginBottom: "0.6rem" }}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Professional */}
          <div>
            <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem", letterSpacing: "0.14em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1rem" }}>
              Professional
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a href="https://www.linkedin.com/in/raymond-cheung-actuary/" target="_blank" rel="noopener noreferrer" className="nav-link-footer" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                LinkedIn <ExternalLink size={11} />
              </a>
              <a href="#" className="nav-link-footer" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                CER Consultancy <ExternalLink size={11} />
                {/* VERIFY BEFORE PUBLICATION: Replace # with actual CER URL */}
              </a>
              <Link href="/training-speaking" className="nav-link-footer">
                Speaker Profile
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem", letterSpacing: "0.14em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "1rem" }}>
              Legal
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <Link href="/privacy" className="nav-link-footer">Privacy</Link>
              <Link href="/privacy#terms" className="nav-link-footer">Terms</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ paddingTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div aria-label="Preview mode notice" style={{ backgroundColor: "rgba(193,162,105,0.08)", border: "1px solid rgba(193,162,105,0.2)", borderRadius: "1px", padding: "0.75rem 1.25rem" }}>
            <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem", letterSpacing: "0.08em", color: "rgba(193,162,105,0.7)", lineHeight: 1.6 }}>
              <strong style={{ color: "var(--gold)", textTransform: "uppercase", letterSpacing: "0.12em" }}>CONCEPT PREVIEW</strong>{" "}
              — This website is a professional proposal prepared from publicly available information. Final content, imagery and affiliations require Raymond Cheung&rsquo;s review and approval before publication.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
            <p style={{ fontSize: "0.78rem", color: "rgba(245,243,236,0.35)" }}>
              &copy; {currentYear} Raymond Cheung. All rights reserved.
            </p>
            <p style={{ fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem", letterSpacing: "0.08em", color: "rgba(245,243,236,0.2)" }}>
              Singapore
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
