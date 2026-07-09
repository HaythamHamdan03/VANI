"use client";

import { motion } from "framer-motion";
import { Globe2, Users, Layers, Shield, Zap, BarChart3 } from "lucide-react";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import { WHY_VANI } from "@/data/content";
import { Button } from "@/components/ui/Button";

const ICONS: Record<string, React.ElementType> = {
  Globe2, Users, Layers, Shield, Zap, BarChart3,
};

export function WhyVani() {
  return (
    <section
      id="why-vani"
      className="section-pad bg-[var(--color-ivory)] relative overflow-hidden"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[400px] bg-[var(--color-wine-200)] opacity-30 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <ScrollReveal>
            <span className="inline-block text-[10px] font-sans font-medium tracking-[0.18em] uppercase text-[var(--color-wine)] mb-5">
              Why VANI
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold text-[var(--color-charcoal)] leading-tight mb-5">
              Not just another AI chatbot.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-base text-[var(--color-charcoal-60)] leading-relaxed">
              VANI is designed specifically for Gulf enterprise needs —
              Arabic-first, compliance-aware, and built as a structured AI team
              rather than a single general-purpose assistant.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_VANI.map((item) => {
            const Icon = ICONS[item.icon] ?? Zap;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group flex flex-col gap-4 p-6 bg-white border border-[var(--color-ivory-border)] hover:border-[var(--color-wine)]/30 rounded-2xl hover:shadow-sm transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 rounded-2xl bg-[var(--color-wine-100)] flex items-center justify-center">
                  <Icon size={16} className="text-[var(--color-wine)]" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-sm text-[var(--color-charcoal)] mb-2">{item.title}</h3>
                  <p className="font-sans text-sm text-[var(--color-charcoal-60)] leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* Positioning statement banner */}
        <ScrollReveal delay={0.2}>
          <div className="bg-[var(--color-charcoal)] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
            />
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-[var(--color-wine)] opacity-10 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <p className="font-display text-[clamp(1.6rem,3.5vw,2.5rem)] font-medium text-[var(--color-ivory)] leading-snug mb-4">
                AI handles repetition.<br />
                <span className="text-[var(--color-wine)]">Humans handle excellence.</span>
              </p>
              <p className="font-sans text-base text-[var(--color-stone)] mb-8 max-w-xl mx-auto">
                VANI is your first line of support — resolving what it can, and making sure what it can&apos;t
                reaches the right person with everything they need to act.
              </p>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })}
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
