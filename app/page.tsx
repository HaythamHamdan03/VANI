import { Navbar }       from "@/components/sections/Navbar";
import { Hero }         from "@/components/sections/Hero";
import { Problem }      from "@/components/sections/Problem";
import { Solution }     from "@/components/sections/Solution";
import { HowItWorks }   from "@/components/sections/HowItWorks";
import { AITeam }       from "@/components/sections/AITeam";
import { Dashboard }    from "@/components/sections/Dashboard";
import { Simulation }   from "@/components/sections/Simulation";
import { Channels }     from "@/components/sections/Channels";
import { Industries }   from "@/components/sections/Industries";
import { Security }     from "@/components/sections/Security";
import { WhyVani }      from "@/components/sections/WhyVani";
import { Pricing }      from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ }          from "@/components/sections/FAQ";
import { FinalCTA }     from "@/components/sections/FinalCTA";
import { Footer }       from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <AITeam />
        <Dashboard />
        <Simulation />
        <Channels />
        <Industries />
        <Security />
        <WhyVani />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
