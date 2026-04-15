import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero-section"
import { CompanySection } from "@/components/sections/company-section"
import { FinancialAnalysisSection } from "@/components/sections/financial-analysis-section"
import { CAPMSection } from "@/components/sections/capm-section"
import { WACCSection } from "@/components/sections/wacc-section"
import { DCFSection } from "@/components/sections/dcf-section"
import { MonteCarloSection } from "@/components/sections/monte-carlo-section"
import { ProphetSection } from "@/components/sections/prophet-section"
import { RecommendationSection } from "@/components/sections/recommendation-section"
import { TeamSection } from "@/components/sections/team-section"
import { DownloadsSection } from "@/components/sections/downloads-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CompanySection />
      <FinancialAnalysisSection />
      <CAPMSection />
      <WACCSection />
      <DCFSection />
      <MonteCarloSection />
      <ProphetSection />
      <RecommendationSection />
      <TeamSection />
      <DownloadsSection />
      <Footer />
    </main>
  )
}
