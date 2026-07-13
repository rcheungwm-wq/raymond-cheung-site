import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: "var(--midnight-navy)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-ibm-mono), monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          color: "var(--strategic-teal)",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
          display: "block",
        }}
      >
        404 / Page not found
      </span>
      <h1
        style={{
          fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "var(--warm-ivory)",
          lineHeight: 1.15,
          marginBottom: "1.25rem",
          maxWidth: "560px",
        }}
      >
        This page doesn&rsquo;t exist—but the right answer often begins with a better question.
      </h1>
      <p
        style={{
          fontSize: "1rem",
          color: "rgba(245,243,236,0.55)",
          lineHeight: 1.75,
          marginBottom: "2.5rem",
          maxWidth: "440px",
        }}
      >
        The page you are looking for has moved, been removed or never existed.
        Return to the homepage to continue.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.9rem 2rem",
          backgroundColor: "var(--strategic-teal)",
          color: "var(--white)",
          fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
          fontWeight: 600,
          fontSize: "0.875rem",
          textDecoration: "none",
          borderRadius: "1px",
        }}
      >
        Return to homepage <ArrowRight size={15} />
      </Link>
    </div>
  );
}
