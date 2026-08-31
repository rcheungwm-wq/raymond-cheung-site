"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { ExternalLink, MapPin, Mail } from "lucide-react";

// Note: metadata must be in a separate server component for client pages
// This is handled as a client component for form interactivity

const enquiryTypes = [
  "Advisory",
  "Training",
  "Speaking",
  "Media",
  "Partnership",
  "Other",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    organisation: "",
    email: "",
    role: "",
    enquiryType: "",
    message: "",
    timeframe: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "Please enter your name.";
    if (!formState.organisation.trim())
      newErrors.organisation = "Please enter your organisation.";
    if (!formState.email.trim() || !/\S+@\S+\.\S+/.test(formState.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formState.enquiryType)
      newErrors.enquiryType = "Please select a nature of enquiry.";
    if (!formState.message.trim())
      newErrors.message = "Please describe your enquiry.";
    if (!formState.consent)
      newErrors.consent = "Please confirm your consent to continue.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // PREVIEW MODE: Form does not submit or store data
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "var(--warm-ivory)", paddingTop: "96px" }}>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "var(--midnight-navy)",
          padding: "5rem 2rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(201,169,97,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <span
            style={{
              fontFamily: "var(--font-ibm-mono), monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: "var(--strategic-teal)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            Contact
          </span>
          <h1
            style={{
              fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--ink)",
              lineHeight: 1.12,
              maxWidth: "560px",
              marginBottom: "1.25rem",
            }}
          >
            Begin with the decision in front of you.
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(242,237,227,0.65)",
              lineHeight: 1.75,
              maxWidth: "520px",
            }}
          >
            Whether the need involves advisory work, executive education, a
            conference contribution or an initial exchange of ideas, provide a
            brief outline below.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "5rem 2rem" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: "5rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Form */}
          <div>
            {/* Preview notice */}
            <div
              aria-live="polite"
              style={{
                backgroundColor: "rgba(193,162,105,0.08)",
                border: "1px solid rgba(193,162,105,0.2)",
                borderRadius: "1px",
                padding: "1rem 1.25rem",
                marginBottom: "2.5rem",
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
                <strong>PREVIEW FORM</strong> — This form is for demonstration
                only. It does not submit or store any information. Activation
                requires Raymond&rsquo;s approval.
              </p>
            </div>

            {submitted ? (
              <div
                role="alert"
                style={{
                  backgroundColor: "rgba(201,169,97,0.08)",
                  border: "1px solid rgba(201,169,97,0.25)",
                  padding: "2.5rem",
                  borderRadius: "1px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    color: "var(--strategic-teal)",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}
                >
                  Preview Submission Received
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--ink)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Thank you, {formState.name}.
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--graphite)",
                    lineHeight: 1.7,
                    opacity: 0.8,
                  }}
                >
                  This is a preview submission. In the live version, Raymond or
                  his team would review this enquiry personally and respond
                  within a reasonable timeframe.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name + Organisation */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.25rem",
                    marginBottom: "1.25rem",
                  }}
                  className="form-row"
                >
                  <FormField
                    label="Full name"
                    htmlFor="name"
                    error={errors.name}
                    required
                  >
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      style={inputStyle}
                      aria-required="true"
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" style={errorStyle}>
                        {errors.name}
                      </p>
                    )}
                  </FormField>
                  <FormField
                    label="Organisation"
                    htmlFor="organisation"
                    error={errors.organisation}
                    required
                  >
                    <input
                      id="organisation"
                      type="text"
                      autoComplete="organization"
                      value={formState.organisation}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          organisation: e.target.value,
                        })
                      }
                      style={inputStyle}
                      aria-required="true"
                      aria-describedby={
                        errors.organisation ? "org-error" : undefined
                      }
                    />
                    {errors.organisation && (
                      <p id="org-error" role="alert" style={errorStyle}>
                        {errors.organisation}
                      </p>
                    )}
                  </FormField>
                </div>

                {/* Email + Role */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.25rem",
                    marginBottom: "1.25rem",
                  }}
                  className="form-row"
                >
                  <FormField
                    label="Professional email"
                    htmlFor="email"
                    error={errors.email}
                    required
                  >
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      style={inputStyle}
                      aria-required="true"
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" style={errorStyle}>
                        {errors.email}
                      </p>
                    )}
                  </FormField>
                  <FormField label="Role / Title" htmlFor="role">
                    <input
                      id="role"
                      type="text"
                      autoComplete="organization-title"
                      value={formState.role}
                      onChange={(e) =>
                        setFormState({ ...formState, role: e.target.value })
                      }
                      style={inputStyle}
                    />
                  </FormField>
                </div>

                {/* Enquiry type */}
                <FormField
                  label="Nature of enquiry"
                  htmlFor="enquiry-type"
                  error={errors.enquiryType}
                  required
                  style={{ marginBottom: "1.25rem" }}
                >
                  <div
                    role="group"
                    aria-label="Nature of enquiry"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    {enquiryTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() =>
                          setFormState({ ...formState, enquiryType: type })
                        }
                        aria-pressed={formState.enquiryType === type}
                        style={{
                          fontFamily: "var(--font-ibm-mono), monospace",
                          fontSize: "0.62rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "0.45rem 0.9rem",
                          border: "1px solid",
                          borderColor:
                            formState.enquiryType === type
                              ? "var(--strategic-teal)"
                              : "rgba(242,237,227,0.15)",
                          backgroundColor:
                            formState.enquiryType === type
                              ? "var(--strategic-teal)"
                              : "transparent",
                          color:
                            formState.enquiryType === type
                              ? "var(--white)"
                              : "var(--graphite)",
                          cursor: "pointer",
                          borderRadius: "1px",
                          transition: "all 0.15s ease",
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                  {errors.enquiryType && (
                    <p role="alert" style={errorStyle}>
                      {errors.enquiryType}
                    </p>
                  )}
                </FormField>

                {/* Message */}
                <FormField
                  label="Message"
                  htmlFor="message"
                  error={errors.message}
                  required
                  style={{ marginBottom: "1.25rem" }}
                >
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Please describe the nature of your enquiry, the context and any relevant background."
                    style={{ ...inputStyle, resize: "vertical" }}
                    aria-required="true"
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" style={errorStyle}>
                      {errors.message}
                    </p>
                  )}
                </FormField>

                {/* Timeframe */}
                <FormField
                  label="Preferred timeframe"
                  htmlFor="timeframe"
                  style={{ marginBottom: "2rem" }}
                >
                  <select
                    id="timeframe"
                    value={formState.timeframe}
                    onChange={(e) =>
                      setFormState({ ...formState, timeframe: e.target.value })
                    }
                    style={inputStyle}
                  >
                    <option value="">Select a timeframe</option>
                    <option value="immediate">Immediately</option>
                    <option value="1-3months">Within 1–3 months</option>
                    <option value="3-6months">Within 3–6 months</option>
                    <option value="6months+">6 months or more</option>
                    <option value="exploratory">Exploratory — no fixed timeline</option>
                  </select>
                </FormField>

                {/* Consent */}
                <div style={{ marginBottom: "2rem" }}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={formState.consent}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          consent: e.target.checked,
                        })
                      }
                      style={{
                        marginTop: "0.15rem",
                        accentColor: "var(--strategic-teal)",
                        flexShrink: 0,
                        width: "16px",
                        height: "16px",
                      }}
                      aria-describedby={
                        errors.consent ? "consent-error" : undefined
                      }
                    />
                    <span
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--graphite)",
                        lineHeight: 1.65,
                        opacity: 0.8,
                      }}
                    >
                      I understand this is a preview demonstration. In the live
                      version, I would consent to Raymond Cheung or CER
                      Consultancy reviewing and responding to my enquiry. My
                      information would be handled in accordance with the
                      privacy policy.
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="consent-error" role="alert" style={errorStyle}>
                      {errors.consent}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.95rem 2.25rem",
                    backgroundColor: "var(--midnight-navy)",
                    color: "var(--ink)",
                    fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "1px",
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
                  Send Enquiry (Preview)
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside aria-label="Contact details">
            <div
              style={{
                position: "sticky",
                top: "112px",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "var(--panel)",
                  border: "1px solid rgba(242,237,227,0.08)",
                  padding: "2rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.14em",
                    color: "var(--gold)",
                    textTransform: "uppercase",
                    marginBottom: "1.5rem",
                  }}
                >
                  Connect
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <a
                    href="https://www.linkedin.com/in/raymond-cheung-actuary/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      textDecoration: "none",
                      padding: "0.85rem",
                      backgroundColor: "var(--soft-mist)",
                      border: "1px solid rgba(242,237,227,0.06)",
                      transition: "border-color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(201,169,97,0.3)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(242,237,227,0.06)")
                    }
                  >
                    <ExternalLink
                      size={14}
                      style={{ color: "var(--strategic-teal)", flexShrink: 0 }}
                    />
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                          fontWeight: 600,
                          fontSize: "0.85rem",
                          color: "var(--ink)",
                        }}
                      >
                        LinkedIn
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-ibm-mono), monospace",
                          fontSize: "0.58rem",
                          color: "rgba(242,237,227,0.5)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        raymond-cheung-actuary
                      </p>
                    </div>
                  </a>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.85rem",
                      backgroundColor: "var(--soft-mist)",
                      border: "1px solid rgba(242,237,227,0.06)",
                    }}
                  >
                    <Mail
                      size={14}
                      style={{ color: "var(--strategic-teal)", flexShrink: 0 }}
                    />
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                          fontWeight: 600,
                          fontSize: "0.85rem",
                          color: "var(--ink)",
                        }}
                      >
                        Professional enquiries
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-ibm-mono), monospace",
                          fontSize: "0.58rem",
                          color: "rgba(242,237,227,0.5)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Via this form or LinkedIn
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.85rem",
                      backgroundColor: "var(--soft-mist)",
                      border: "1px solid rgba(242,237,227,0.06)",
                    }}
                  >
                    <MapPin
                      size={14}
                      style={{ color: "var(--strategic-teal)", flexShrink: 0 }}
                    />
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                          fontWeight: 600,
                          fontSize: "0.85rem",
                          color: "var(--ink)",
                        }}
                      >
                        Singapore
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-ibm-mono), monospace",
                          fontSize: "0.58rem",
                          color: "rgba(242,237,227,0.5)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        Asia Pacific engagements
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "var(--midnight-navy)",
                  border: "1px solid rgba(201,169,97,0.12)",
                  padding: "1.75rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-ibm-mono), monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.1em",
                    color: "rgba(242,237,227,0.4)",
                    lineHeight: 1.7,
                  }}
                >
                  Enquiries are reviewed personally or by an authorised
                  representative. Raymond does not accept cold approaches
                  for services not aligned with the work described on this
                  platform.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        @media (max-width: 899px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function FormField({
  label,
  htmlFor,
  error,
  required,
  children,
  style,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div style={style}>
      <label
        htmlFor={htmlFor}
        style={{
          display: "block",
          fontFamily: "var(--font-ibm-mono), monospace",
          fontSize: "0.62rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: error ? "#b91c1c" : "var(--graphite)",
          marginBottom: "0.5rem",
          opacity: error ? 1 : 0.7,
        }}
      >
        {label}
        {required && (
          <span aria-hidden="true" style={{ color: "var(--strategic-teal)", marginLeft: "0.25rem" }}>
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  backgroundColor: "var(--panel)",
  border: "1px solid rgba(242,237,227,0.15)",
  borderRadius: "1px",
  fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
  fontSize: "0.875rem",
  color: "var(--graphite)",
  outline: "none",
  transition: "border-color 0.2s ease",
  boxSizing: "border-box",
};

const errorStyle: React.CSSProperties = {
  fontSize: "0.72rem",
  color: "#b91c1c",
  marginTop: "0.35rem",
  fontFamily: "var(--font-ibm-mono), monospace",
  letterSpacing: "0.04em",
};
