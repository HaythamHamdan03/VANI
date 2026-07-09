"use client";

import { motion } from "framer-motion";
import {
  MessageCircle, Brain, Database, Zap,
  ShieldAlert, Users, BarChart3,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import { HOW_IT_WORKS_STEPS } from "@/data/content";

const ICONS: Record<string, React.ElementType> = {
  MessageCircle, Brain, Database, Zap, ShieldAlert, Users, BarChart3,
};

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-pad bg-[var(--color-ivory-dark)] relative overflow-hidden"
    >
      {/* Decorative line */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-beige)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <ScrollReveal>
            <span className="inline-block text-[10px] font-sans font-medium tracking-[0.18em] uppercase text-[var(--color-wine)] mb-5">
              How It Works
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold text-[var(--color-charcoal)] leading-tight mb-5">
              From first contact to resolved outcome in seconds.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-base text-[var(--color-charcoal-60)] leading-relaxed">
              Seven steps. One seamless experience for your customers —
              and full visibility for your team.
            </p>
          </ScrollReveal>
        </div>

        {/* Steps — desktop horizontal track, mobile stack */}
        <div className="hidden lg:block">
          <StaggerContainer className="relative">
            {/* Connecting line */}
            <div className="absolute top-[2.6rem] left-0 right-0 h-px bg-gradient-to-r from-[var(--color-beige)] via-[var(--color-stone-300)] to-[var(--color-beige)]" />

            <div className="grid grid-cols-7 gap-2 relative z-10">
              {HOW_IT_WORKS_STEPS.map((step, i) => {
                const Icon = ICONS[step.icon] ?? Zap;
                return (
                  <motion.div
                    key={step.number}
                    variants={staggerItem}
                    className="flex flex-col items-center gap-3 group cursor-default"
                  >
                    {/* Node */}
                    <div className="w-[52px] h-[52px] rounded-full bg-[var(--color-ivory)] border-2 border-[var(--color-beige)] group-hover:border-[var(--color-wine)] group-hover:bg-[var(--color-wine-100)] flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon size={18} className="text-[var(--color-charcoal-60)] group-hover:text-[var(--color-wine)] transition-colors duration-300" />
                    </div>
                    {/* Number */}
                    <span className="font-display text-[10px] font-medium text-[var(--color-wine)] opacity-60">{step.number}</span>
                    {/* Title */}
                    <p className="font-sans text-[11px] font-semibold text-[var(--color-charcoal)] text-center leading-tight">{step.title}</p>
                    {/* Detail */}
                    <p className="font-sans text-[10px] text-[var(--color-stone)] text-center leading-relaxed hidden xl:block">{step.detail}</p>
                  </motion.div>
                );
              })}
            </div>
          </StaggerContainer>
        </div>

        {/* Mobile steps */}
        <div className="lg:hidden">
          <StaggerContainer className="space-y-0">
            {HOW_IT_WORKS_STEPS.map((step, i) => {
              const Icon = ICONS[step.icon] ?? Zap;
              const isLast = i === HOW_IT_WORKS_STEPS.length - 1;
              return (
                <motion.div
                  key={step.number}
                  variants={staggerItem}
                  className="flex gap-5 relative"
                >
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-ivory)] border border-[var(--color-beige)] flex items-center justify-center shadow-sm z-10">
                      <Icon size={15} className="text-[var(--color-wine)]" />
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 bg-[var(--color-beige)] mt-2 mb-1" />
                    )}
                  </div>
                  <div className={`pb-8 ${isLast ? "pb-0" : ""}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-sans font-medium text-[var(--color-wine)] opacity-60">{step.number}</span>
                      <h3 className="font-sans font-semibold text-sm text-[var(--color-charcoal)]">{step.title}</h3>
                    </div>
                    <p className="font-sans text-sm text-[var(--color-charcoal-60)] leading-relaxed">{step.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Bottom callout */}
        <ScrollReveal delay={0.3} className="mt-20">
          <div className="max-w-3xl mx-auto border border-[var(--color-beige)] rounded-2xl p-8 bg-white/60 text-center">
            <p className="font-display text-xl font-medium text-[var(--color-charcoal)] mb-3">
              At every step, VANI respects the boundary between AI and human judgment.
            </p>
            <p className="font-sans text-sm text-[var(--color-charcoal-60)] leading-relaxed">
              Routine cases are resolved instantly. Sensitive, complex, and revenue-impacting cases
              always reach a human — with the context needed to act decisively.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
