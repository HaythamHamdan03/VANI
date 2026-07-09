"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Landmark, Cross, GraduationCap, Shield, Building2, Briefcase,
  ChevronDown, CheckCircle,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import { INDUSTRIES } from "@/data/content";
import { Button } from "@/components/ui/Button";

const ICONS: Record<string, React.ElementType> = {
  Landmark, Cross, GraduationCap, Shield, Building2, Briefcase,
};

export function Industries() {
  const [expanded, setExpanded] = useState<string | null>(INDUSTRIES[0].label);

  return (
    <section
      id="industries"
      className="section-pad bg-[var(--color-ivory-dark)] relative overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-beige)] to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-wine-200)] opacity-20 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16">
          <ScrollReveal>
            <span className="inline-block text-[10px] font-sans font-medium tracking-[0.18em] uppercase text-[var(--color-wine)] mb-5">
              Industries
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold text-[var(--color-charcoal)] leading-tight mb-5">
              Built for organizations where response quality and trust are non-negotiable.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-base text-[var(--color-charcoal-60)] leading-relaxed">
              VANI is designed for high-trust environments — not generic customer service.
              Every deployment is shaped around sector-specific workflows and escalation requirements.
            </p>
          </ScrollReveal>
        </div>

        {/* Desktop: card grid */}
        <div className="hidden lg:block">
          <StaggerContainer className="grid grid-cols-2 xl:grid-cols-3 gap-5">
            {INDUSTRIES.map((ind) => {
              const Icon = ICONS[ind.icon] ?? Briefcase;
              return (
                <motion.div
                  key={ind.label}
                  variants={staggerItem}
                  className="group bg-white border border-[var(--color-ivory-border)] hover:border-[var(--color-wine)]/30 rounded-2xl p-6 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-wine-100)] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[var(--color-wine)]" />
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-sm text-[var(--color-charcoal)] mb-0.5">{ind.label}</h3>
                      <p className="font-sans text-xs text-[var(--color-stone)]">{ind.tagline}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {ind.useCases.slice(0, 4).map((uc) => (
                      <li key={uc} className="flex items-start gap-2">
                        <CheckCircle size={10} className="text-[var(--color-wine)] shrink-0 mt-1" />
                        <span className="font-sans text-xs text-[var(--color-charcoal-60)]">{uc}</span>
                      </li>
                    ))}
                  </ul>
                  {ind.note && (
                    <p className="text-[10px] font-sans text-[var(--color-stone)] italic border-t border-[var(--color-ivory-border)] pt-3">
                      {ind.note}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Mobile: accordion */}
        <div className="lg:hidden">
          <StaggerContainer className="space-y-2">
            {INDUSTRIES.map((ind) => {
              const Icon = ICONS[ind.icon] ?? Briefcase;
              const isOpen = expanded === ind.label;
              return (
                <motion.div
                  key={ind.label}
                  variants={staggerItem}
                  className="bg-white border border-[var(--color-ivory-border)] rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpanded(isOpen ? null : ind.label)}
                    className="w-full flex items-center gap-4 p-5 text-left cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[var(--color-wine-100)] flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-[var(--color-wine)]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-sans font-semibold text-sm text-[var(--color-charcoal)]">{ind.label}</p>
                      <p className="font-sans text-xs text-[var(--color-stone)]">{ind.tagline}</p>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`text-[var(--color-stone)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 border-t border-[var(--color-ivory-border)] pt-4">
                          <ul className="space-y-2 mb-3">
                            {ind.useCases.map((uc) => (
                              <li key={uc} className="flex items-start gap-2">
                                <CheckCircle size={10} className="text-[var(--color-wine)] shrink-0 mt-1" />
                                <span className="font-sans text-sm text-[var(--color-charcoal-60)]">{uc}</span>
                              </li>
                            ))}
                          </ul>
                          {ind.note && (
                            <p className="text-xs font-sans text-[var(--color-stone)] italic border-t border-[var(--color-ivory-border)] pt-3">
                              {ind.note}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3} className="mt-16 text-center">
          <p className="font-sans text-sm text-[var(--color-charcoal-60)] mb-6">
            Working in a sector not listed? VANI is adaptable to any enterprise support environment.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })}
          >
            Discuss Your Use Case
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
