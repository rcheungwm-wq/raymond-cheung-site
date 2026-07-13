import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ExecutiveNavbar from "@/components/ExecutiveNavbar";
import ExecutiveFooter from "@/components/ExecutiveFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  // PREVIEW MODE: noindex/nofollow active until Raymond approves for publication
  robots: { index: false, follow: false },
  title: {
    default: "Raymond Cheung | Actuary, Risk, Insurance & ESG Leadership",
    template: "%s | Raymond Cheung",
  },
  description:
    "Raymond Cheung is a Chartered Actuary, C-suite executive, board adviser and trainer specialising in enterprise risk, insurance, capital, climate transition, ESG and innovation across Asia.",
  keywords: [
    "Raymond Cheung actuary",
    "Raymond Cheung risk management",
    "enterprise risk management Singapore",
    "insurance risk consultant Singapore",
    "Chartered Actuary Singapore",
    "board risk adviser Asia",
    "ESG consultant Singapore",
    "climate risk training Singapore",
    "risk-based capital Singapore",
    "insurtech adviser Asia",
    "insurance speaker Singapore",
  ],
  authors: [{ name: "Raymond Cheung" }],
  openGraph: {
    type: "website",
    locale: "en_SG",
    siteName: "Raymond Cheung",
    title: "Raymond Cheung | Actuary, Risk, Insurance & ESG Leadership",
    description:
      "Chartered Actuary, C-suite executive and board adviser specialising in enterprise risk, insurance, climate transition and ESG across Asia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raymond Cheung | Risk clarity for a world in transition.",
    description:
      "Chartered Actuary, C-suite executive and board adviser specialising in enterprise risk, insurance, climate transition and ESG across Asia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          backgroundColor: "var(--warm-ivory)",
        }}
      >
        <ExecutiveNavbar />
        <main className="flex-1">{children}</main>
        <ExecutiveFooter />
      </body>
    </html>
  );
}
