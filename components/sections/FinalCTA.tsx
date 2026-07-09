"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { VaniLogo } from "@/components/ui/VaniLogo";

export function FinalCTA() {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="demo"
      className="section-pad bg-[var(--color-charcoal)] relative overflow-hidden"
    >
      {/* Noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      {/* Dual glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[400px] bg-[var(--color-wine)] opacity-[0.08] blur-[180px] rounded-full" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--color-wine-200)] opacity-[0.03] blur-[180px] rounded-full" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <VaniLogo size="lg" onDark className="mb-8 mx-auto" animate />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] font-semibold text-[var(--color-ivory)] leading-[1.05] mb-6">
            See how VANI would handle your support volume.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-sans text-lg text-[var(--color-stone)] leading-relaxed mb-12 max-w-2xl mx-auto">
            A 30-minute session is enough to show you exactly how VANI would
            work within your team, your channels, and your compliance requirements —
            before any commitment.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="primary"
              size="lg"
              className="min-w-[200px]"
            >
              Request a Demo
              <ArrowRight size={16} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[200px]"
              onClick={() => handleScroll("#simulation")}
            >
              Try Simulation
            </Button>
          </div>
        </ScrollReveal>

        {/* Contact options */}
        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-sans text-[var(--color-stone)]">
            <a href="mailto:hello@vani.ai" className="hover:text-[var(--color-ivory)] transition-colors underline-wine">
              hello@vani.ai
            </a>
            <span className="w-px h-4 bg-white/10" />
            <button
              onClick={() => handleScroll("#simulation")}
              className="hover:text-[var(--color-ivory)] transition-colors underline-wine cursor-pointer"
            >
              Book a Consultation
            </button>
            <span className="w-px h-4 bg-white/10" />
            <button
              onClick={() => handleScroll("#simulation")}
              className="hover:text-[var(--color-ivory)] transition-colors underline-wine cursor-pointer"
            >
              Talk to Sales
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
