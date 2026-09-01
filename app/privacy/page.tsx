import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Raymond Cheung",
  description: "Privacy policy for Raymond Cheung's professional website.",
};

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "var(--warm-ivory)", paddingTop: "96px" }}>
      <section style={{ backgroundColor: "var(--midnight-navy)", padding: "4rem 2rem 3rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.03em",
            color: "var(--ink)", lineHeight: 1.15,
          }}>
            Privacy Policy
          </h1>
        </div>
      </section>

      <section style={{ padding: "4rem 2rem" }}>
        <div style={{
          maxWidth: "800px", margin: "0 auto",
          fontSize: "0.925rem", color: "var(--graphite)", lineHeight: 1.85,
        }}>
          <h2 id="terms" style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.02em",
            color: "var(--ink)", marginBottom: "1rem",
          }}>
            1. Introduction
          </h2>
          <p style={{ marginBottom: "1.75rem", opacity: 0.85 }}>
            This website is operated by Raymond Cheung, a Chartered Actuary and professional adviser based in Singapore.
            This privacy notice explains what personal information may be collected when you interact with this platform, and how it is handled.
          </p>

          <h2 style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.02em",
            color: "var(--ink)", marginBottom: "1rem",
          }}>
            2. Information we collect
          </h2>
          <p style={{ marginBottom: "1.75rem", opacity: 0.85 }}>
            Information submitted through enquiry forms — including name, organisation, email address, role and message content —
            is used solely for the purpose of responding to professional enquiries. This information will not be shared with
            third parties for marketing purposes.
          </p>

          <h2 style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.02em",
            color: "var(--ink)", marginBottom: "1rem",
          }}>
            3. Cookies
          </h2>
          <p style={{ marginBottom: "1.75rem", opacity: 0.85 }}>
            This website does not use tracking or advertising cookies. Essential cookies may be used to maintain basic website functionality.
          </p>

          <h2 style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.02em",
            color: "var(--ink)", marginBottom: "1rem",
          }}>
            4. Third-party links
          </h2>
          <p style={{ marginBottom: "1.75rem", opacity: 0.85 }}>
            This website may contain links to external platforms such as LinkedIn. Raymond Cheung is not responsible for the
            privacy practices of those sites and encourages you to review their policies independently.
          </p>

          <h2 style={{
            fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
            fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.02em",
            color: "var(--ink)", marginBottom: "1rem",
          }}>
            5. Contact
          </h2>
          <p style={{ opacity: 0.85 }}>
            For any privacy-related enquiries, please contact Raymond Cheung through the professional channels listed on the contact page.
          </p>

          <p style={{
            fontFamily: "var(--font-ibm-mono), monospace", fontSize: "0.62rem",
            letterSpacing: "0.06em", color: "rgba(26,23,18,0.35)",
            marginTop: "3rem", paddingTop: "2rem",
            borderTop: "1px solid rgba(26,23,18,0.08)", lineHeight: 1.6,
          }}>
            Last updated: 2025 · Raymond Cheung · Singapore
          </p>
        </div>
      </section>
    </div>
  );
}
