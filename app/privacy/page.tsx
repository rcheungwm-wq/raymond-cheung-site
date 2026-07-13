import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Raymond Cheung",
  description: "Privacy policy for Raymond Cheung's professional website.",
};

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "var(--warm-ivory)", paddingTop: "96px" }}>
      <section
        style={{
          backgroundColor: "var(--midnight-navy)",
          padding: "4rem 2rem 3rem",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "2.5rem",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--warm-ivory)",
              lineHeight: 1.15,
            }}
          >
            Privacy Policy
          </h1>
        </div>
      </section>

      <section style={{ padding: "4rem 2rem" }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "0.925rem",
            color: "var(--graphite)",
            lineHeight: 1.85,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(193,162,105,0.08)",
              border: "1px solid rgba(193,162,105,0.2)",
              padding: "1.25rem",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-ibm-mono), monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.06em",
                color: "var(--gold)",
                lineHeight: 1.6,
              }}
            >
              <strong>CONCEPT PREVIEW</strong> — This page is a placeholder.
              Final privacy policy content requires legal review and Raymond
              Cheung&rsquo;s approval before this website is published.
            </p>
          </div>

          <h2
            id="terms"
            style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--midnight-navy)",
              marginBottom: "1rem",
            }}
          >
            1. Introduction
          </h2>
          <p style={{ marginBottom: "1.75rem", opacity: 0.85 }}>
            This website is operated by Raymond Cheung, a Chartered Actuary and
            professional adviser based in Singapore. This privacy notice explains
            what personal information may be collected when you interact with this
            platform, and how it is handled.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--midnight-navy)",
              marginBottom: "1rem",
            }}
          >
            2. Preview mode
          </h2>
          <p style={{ marginBottom: "1.75rem", opacity: 0.85 }}>
            During the preview stage of this website, no personal information is
            collected, submitted or stored. The contact form is for demonstration
            purposes only and does not transmit any data.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--midnight-navy)",
              marginBottom: "1rem",
            }}
          >
            3. Information collected upon publication
          </h2>
          <p style={{ marginBottom: "1.75rem", opacity: 0.85 }}>
            Upon activation of the contact form, information submitted through
            enquiry forms — including name, organisation, email address, role
            and message content — will be used solely for the purpose of
            responding to professional enquiries. This information will not be
            shared with third parties for marketing purposes.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--midnight-navy)",
              marginBottom: "1rem",
            }}
          >
            4. Cookies
          </h2>
          <p style={{ marginBottom: "1.75rem", opacity: 0.85 }}>
            This website does not currently use tracking or advertising cookies.
            Essential cookies may be used to maintain basic website functionality.
            {/* VERIFY BEFORE PUBLICATION: confirm analytics or cookie tools */}
          </p>

          <h2
            style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--midnight-navy)",
              marginBottom: "1rem",
            }}
          >
            5. Contact
          </h2>
          <p style={{ opacity: 0.85 }}>
            For any privacy-related enquiries, please contact Raymond Cheung
            through the professional channels listed on the contact page.
          </p>

          <p
            style={{
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.06em",
              color: "rgba(7,26,43,0.35)",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(7,26,43,0.08)",
              lineHeight: 1.6,
            }}
          >
            VERIFY BEFORE PUBLICATION — This privacy policy requires legal review
            and must be finalised before this website is published publicly.
          </p>
        </div>
      </section>
    </div>
  );
}
