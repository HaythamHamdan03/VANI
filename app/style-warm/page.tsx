import { WarmNavbar } from "@/components/warm/WarmNavbar";
import { WarmHero }   from "@/components/warm/WarmHero";
import {
  WarmProblem, WarmSolution, WarmHowItWorks, WarmAgents,
  WarmDashboard, WarmSimulation, WarmChannels, WarmIndustries,
  WarmSecurity, WarmWhyVani, WarmPricing, WarmFAQ,
  WarmFinalCTA, WarmFooter,
} from "@/components/warm/WarmSections";

export default function StyleWarmPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <WarmNavbar />
      <main>
        <WarmHero />
        <WarmProblem />
        <WarmSolution />
        <WarmHowItWorks />
        <WarmAgents />
        <WarmDashboard />
        <WarmSimulation />
        <WarmChannels />
        <WarmIndustries />
        <WarmSecurity />
        <WarmWhyVani />
        <WarmPricing />
        <WarmFAQ />
        <WarmFinalCTA />
      </main>
      <WarmFooter />
    </div>
  );
}
