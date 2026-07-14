import { CmdNavbar } from "@/components/command/CmdNavbar";
import { CmdHero }   from "@/components/command/CmdHero";
import { CmdProblem, CmdSolution, CmdHowItWorks, CmdAgents } from "@/components/command/CmdCore";
import { CmdDashboard, CmdSimulation, CmdChannels, CmdIndustries } from "@/components/command/CmdProduct";
import { CmdSecurity, CmdWhyVani, CmdPricing, CmdFAQ, CmdFinalCTA, CmdFooter } from "@/components/command/CmdBottom";

export default function StyleCommandPage() {
  return (
    <div className="min-h-screen bg-[#070B0F]">
      <CmdNavbar />
      <main>
        <CmdHero />
        <CmdProblem />
        <CmdSolution />
        <CmdHowItWorks />
        <CmdAgents />
        <CmdDashboard />
        <CmdSimulation />
        <CmdChannels />
        <CmdIndustries />
        <CmdSecurity />
        <CmdWhyVani />
        <CmdPricing />
        <CmdFAQ />
        <CmdFinalCTA />
      </main>
      <CmdFooter />
    </div>
  );
}
