import { currentThemes } from "@/data/expertise";

const themeImages: Record<string, string> = {
  "Climate Risk": "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=700&q=80&auto=format",
  "ESG": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&q=80&auto=format",
  "Insurance Capital": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80&auto=format",
  "Technology": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80&auto=format",
  "Regulatory": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=700&q=80&auto=format",
  "Leadership": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80&auto=format",
};
const fallback = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80&auto=format";

export default function CurrentThemes() {
  return (
    <section
      id="themes"
      aria-labelledby="themes-heading"
      style={{ backgroundColor: "var(--soft-mist)", padding: "5rem 2rem" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}>
          <span style={{
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.65rem",
            letterSpacing: "0.2em", color: "var(--strategic-teal)", textTransform: "uppercase",
          }}>05 / Current Themes</span>
          <div aria-hidden="true" style={{ flex: 1, height: "1px", backgroundColor: "rgba(26,23,18,0.1)" }} />
        </div>

        <h2 id="themes-heading" style={{
          fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
          fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700,
          letterSpacing: "-0.025em", color: "var(--ink)", lineHeight: 1.22,
          marginBottom: "3rem",
        }}>Where Raymond is focused right now</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
          {currentThemes.map((theme, i) => {
            const imgKey = Object.keys(themeImages).find(k => theme.title?.includes(k)) || "";
            const imgSrc = themeImages[imgKey] || fallback;
            return (
              <div key={theme.id} style={{
                background: "var(--glass)",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
                border: "1px solid var(--glass-border)",
                borderRadius: "2px", overflow: "hidden",
                boxShadow: "var(--sh-glass)",
              }}>
                <div style={{ position: "relative", height: "140px", overflow: "hidden" }}>
                  <img src={imgSrc} alt={theme.title} loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <div aria-hidden="true" style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, transparent, rgba(26,23,18,0.6))",
                  }} />
                  <div style={{
                    position: "absolute", bottom: "0.85rem", left: "1rem",
                    background: "rgba(201,169,97,0.9)", borderRadius: "999px",
                    padding: "0.25rem 0.75rem",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.56rem",
                      letterSpacing: "0.12em", color: "var(--ink)", textTransform: "uppercase",
                    }}>{theme.title}</span>
                  </div>
                </div>
                <div style={{ padding: "1.75rem" }}>
                  <h3 style={{
                    fontFamily: "var(--font-cormorant, Georgia), serif",
                    fontSize: "1.1rem", fontWeight: 600, fontStyle: "italic",
                    color: "var(--ink)", marginBottom: "0.75rem", lineHeight: 1.3,
                  }}>{theme.headline}</h3>
                  <p style={{
                    fontSize: "0.87rem", color: "var(--graphite)", lineHeight: 1.75,
                    opacity: 0.82, margin: 0,
                  }}>{theme.summary}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
