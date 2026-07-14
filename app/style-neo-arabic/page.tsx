import { NeoNavbar }   from "@/components/neo-arabic/NeoNavbar";
import { NeoHero }     from "@/components/neo-arabic/NeoHero";
import { NeoProblem, NeoSolution, NeoHowItWorks, NeoAgents } from "@/components/neo-arabic/NeoCore";
import { NeoDashboard, NeoSimulation, NeoChannels, NeoIndustries } from "@/components/neo-arabic/NeoProduct";
import { NeoSecurity, NeoWhyVani, NeoPricing, NeoFAQ, NeoFinalCTA, NeoFooter } from "@/components/neo-arabic/NeoBottom";

export default function StyleNeoArabicPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <NeoNavbar />
      <main>
        <NeoHero />
        <NeoProblem />
        <NeoSolution />
        <NeoHowItWorks />
        <NeoAgents />
        <NeoDashboard />
        <NeoSimulation />
        <NeoChannels />
        <NeoIndustries />
        <NeoSecurity />
        <NeoWhyVani />
        <NeoPricing />
        <NeoFAQ />
        <NeoFinalCTA />
      </main>
      <NeoFooter />
    </div>
  );
}
