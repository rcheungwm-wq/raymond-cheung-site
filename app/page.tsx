import type { Metadata } from "next";
import HeroAuthoritySection from "@/components/HeroAuthoritySection";
import CredibilityStrip from "@/components/CredibilityStrip";
import AudienceRouter from "@/components/AudienceRouter";
import IntroductionSection from "@/components/IntroductionSection";
import ExpertiseGrid from "@/components/ExpertiseGrid";
import CareerJourney from "@/components/CareerJourney";
import ImpactMetrics from "@/components/ImpactMetrics";
import CurrentThemes from "@/components/CurrentThemes";
import FeaturedProgrammes from "@/components/FeaturedProgrammes";
import SpeakingSection from "@/components/SpeakingSection";
import QuoteSection from "@/components/QuoteSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightCards from "@/components/InsightCards";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title:
    "Raymond Cheung | Chartered Actuary, Board Director & ESG Adviser, Singapore",
  description:
    "Chartered Actuary and former Nasdaq CEO who led Basel Medical Group to listing. Independent director on Nasdaq and SGX boards, former statutory CRO at AIG Asia Pacific. Advising Asia's boards on enterprise risk, ESG and IPO readiness.",
  alternates: { canonical: "https://raymondcheungwm.com" },
};

export default function HomePage() {
  return (
    <>
      <HeroAuthoritySection />
      <CredibilityStrip />
      <AudienceRouter />
      <IntroductionSection />
      <ImpactMetrics />
      <CareerJourney />
      <ExpertiseGrid />
      <CurrentThemes />
      <FeaturedProgrammes />
      <SpeakingSection />
      <QuoteSection />
      <TestimonialsSection />
      <InsightCards />
      <FinalCTA />
    </>
  );
}
