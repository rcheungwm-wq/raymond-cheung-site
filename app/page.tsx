import type { Metadata } from "next";
import HeroAuthoritySection from "@/components/HeroAuthoritySection";
import CredibilityStrip from "@/components/CredibilityStrip";
import IntroductionSection from "@/components/IntroductionSection";
import ExpertiseGrid from "@/components/ExpertiseGrid";
import CareerJourney from "@/components/CareerJourney";
import ImpactMetrics from "@/components/ImpactMetrics";
import CurrentThemes from "@/components/CurrentThemes";
import FeaturedProgrammes from "@/components/FeaturedProgrammes";
import SpeakingSection from "@/components/SpeakingSection";
import QuoteSection from "@/components/QuoteSection";
import InsightCards from "@/components/InsightCards";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Raymond Cheung | Actuary, Risk, Insurance & ESG Leadership",
  description:
    "Raymond Cheung is a Chartered Actuary, C-suite executive, board adviser and trainer specialising in enterprise risk, insurance, capital, climate transition, ESG and innovation across Asia.",
};

export default function HomePage() {
  return (
    <>
      <HeroAuthoritySection />
      <CredibilityStrip />
      <IntroductionSection />
      <ExpertiseGrid />
      <CareerJourney />
      <ImpactMetrics />
      <CurrentThemes />
      <FeaturedProgrammes />
      <SpeakingSection />
      <QuoteSection />
      <InsightCards />
      <FinalCTA />
    </>
  );
}
