import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Raymond Cheung — Career, Publications & Board Roles",
  description:
    "Raymond Cheung's 24-year career: Watson Wyatt, Standard & Poor's, statutory CRO at AIG Asia Pacific and Asia Capital Reinsurance, Regional Insurance Lead at Grab, Group CEO of Basel Medical Group through its Nasdaq listing. Includes 13 conference papers and 10 proprietary training curricula.",
  alternates: { canonical: "https://raymondcheungwm.com/about" },
  openGraph: {
    title: "About Raymond Cheung — Career, Publications & Board Roles",
    description:
      "From actuarial analyst to Nasdaq CEO and listed-company board director. The full 24-year career, publications and authored curricula.",
    url: "https://raymondcheungwm.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
