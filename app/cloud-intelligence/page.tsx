import { CLOUD }      from "@/lib/lc-themes";
import { LCNavbar }   from "@/components/light-command/LCNavbar";
import { LCHero }     from "@/components/light-command/LCHero";
import { LCProblem, LCSolution, LCHowItWorks, LCAgents } from "@/components/light-command/LCCore";
import { LCDashboard, LCSimulation, LCChannels, LCIndustries } from "@/components/light-command/LCProduct";
import { LCSecurity, LCWhyVani, LCPricing, LCFAQ, LCFinalCTA, LCFooter } from "@/components/light-command/LCBottom";

const T = CLOUD;

export default function CloudIntelligencePage() {
  return (
    <div style={{ backgroundColor: T.bg }}>
      <LCNavbar theme={T} />
      <main>
        <LCHero       theme={T} />
        <LCProblem    theme={T} />
        <LCSolution   theme={T} />
        <LCHowItWorks theme={T} />
        <LCAgents     theme={T} />
        <LCDashboard  theme={T} />
        <LCSimulation theme={T} />
        <LCChannels   theme={T} />
        <LCIndustries theme={T} />
        <LCSecurity   theme={T} />
        <LCWhyVani    theme={T} />
        <LCPricing    theme={T} />
        <LCFAQ        theme={T} />
        <LCFinalCTA   theme={T} />
      </main>
      <LCFooter theme={T} />
    </div>
  );
}
