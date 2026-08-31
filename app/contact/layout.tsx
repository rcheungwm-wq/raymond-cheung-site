import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Advisory, Board & Speaking Enquiries",
  description:
    "Enquire about board appointments, advisory engagements, executive training or conference speaking. Raymond Cheung is based in Singapore and works across ASEAN, Hong Kong and the wider Asia-Pacific region.",
  alternates: { canonical: "https://raymondcheungwm.com/contact" },
  openGraph: {
    title: "Contact Raymond Cheung — Advisory, Board & Speaking Enquiries",
    description:
      "Board appointments, advisory engagements, executive training and speaking. Based in Singapore, working across Asia.",
    url: "https://raymondcheungwm.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
