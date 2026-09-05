import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, IBM_Plex_Mono, Cormorant_Garamond } from "next/font/google";
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

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const SITE_URL = "https://raymondcheungwm.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  title: {
    default:
      "Raymond Cheung | Chartered Actuary, Board Director & ESG Adviser, Singapore",
    template: "%s | Raymond Cheung",
  },
  description:
    "Raymond Cheung is a Chartered Actuary and former Nasdaq CEO who led Basel Medical Group to listing. Independent director on Nasdaq and SGX boards. Former statutory CRO at AIG Asia Pacific. Advising boards across Asia on enterprise risk, ESG and IPO readiness.",
  applicationName: "Raymond Cheung",
  keywords: [
    "Raymond Cheung",
    "Raymond Cheung actuary",
    "Chartered Actuary Singapore",
    "independent director Singapore",
    "board director Asia",
    "enterprise risk management Singapore",
    "chief risk officer Singapore",
    "ERM consultant Singapore",
    "ORSA consultant Singapore",
    "risk-based capital RBC2 Singapore",
    "ESG consultant Singapore",
    "ESG advisory ASEAN",
    "climate risk training Singapore",
    "IPO readiness adviser Asia",
    "insurance risk consultant Singapore",
    "insurtech adviser Asia",
    "corporate governance speaker Singapore",
    "actuarial trainer Singapore",
  ],
  authors: [{ name: "Raymond Cheung", url: SITE_URL }],
  creator: "Raymond Cheung",
  publisher: "CER Consultancy",
  alternates: { canonical: SITE_URL },
  category: "Business Consulting",
  openGraph: {
    type: "profile",
    locale: "en_SG",
    url: SITE_URL,
    siteName: "Raymond Cheung",
    title:
      "Raymond Cheung | Chartered Actuary, Board Director & ESG Adviser, Singapore",
    description:
      "Former Nasdaq CEO. Independent director on Nasdaq and SGX boards. Former statutory CRO at AIG Asia Pacific and Asia Capital Reinsurance. Advising boards across Asia on risk, governance and ESG.",
    images: [
      {
        url: "/raymond-cheung-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Raymond Cheung — Chartered Actuary, Board Director and ESG Adviser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raymond Cheung | Chartered Actuary & Board Director, Singapore",
    description:
      "Former Nasdaq CEO. Independent director on Nasdaq and SGX boards. Advising Asia's boards on risk, governance and ESG.",
    images: ["/raymond-cheung-portrait.jpg"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Raymond Cheung",
  url: SITE_URL,
  image: `${SITE_URL}/raymond-cheung-portrait.jpg`,
  jobTitle: "Chartered Actuary and Board Adviser",
  description:
    "Chartered Actuary, former Nasdaq CEO and independent board director advising boards, insurers and financial institutions across Asia on enterprise risk, governance, ESG and IPO readiness.",
  email: "mailto:enquiries@cer-consultancy.com",
  sameAs: [
    "https://www.linkedin.com/in/raymond-cheung-erm/",
    "https://www.cer-consultancy.com",
    "https://www.alphacoasia.com/raymond-cheung/",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Singapore",
    addressCountry: "SG",
  },
  worksFor: {
    "@type": "Organization",
    name: "CER Consultancy",
    url: "https://www.cer-consultancy.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Nanyang Technological University",
    url: "https://www.ntu.edu.sg",
  },
  knowsAbout: [
    "Enterprise Risk Management",
    "Own Risk and Solvency Assessment (ORSA)",
    "Risk-Based Capital (RBC2)",
    "Corporate Governance",
    "ESG and Sustainability Strategy",
    "Climate Risk",
    "Actuarial Science",
    "Insurance and Reinsurance",
    "IPO Readiness",
    "Board Advisory",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Chartered Actuary and Board Director",
    occupationLocation: { "@type": "Country", name: "Singapore" },
  },
  nationality: { "@type": "Country", name: "Singapore" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Raymond Cheung",
  description:
    "Chartered Actuary, board director and ESG adviser to boards, insurers and financial institutions across Asia.",
  publisher: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en-SG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} ${ibmPlexMono.variable} ${cormorant.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
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
