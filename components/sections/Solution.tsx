"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import { SOLUTION_POINTS } from "@/data/content";
import { Button } from "@/components/ui/Button";

export function Solution() {
  return (
    <section id="product" className="section-pad bg-[var(--color-ivory)] relative overflow-hidden">
      {/* Subtle warm gradient */}
      <div className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--color-wine-200)] opacity-30 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div>
            <ScrollReveal>
              <span className="inline-block text-[10px] font-sans font-medium tracking-[0.18em] uppercase text-[var(--color-wine)] mb-5">
                The Solution
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold text-[var(--color-charcoal)] leading-tight mb-6">
                VANI is not a chatbot.<br />
                <span className="text-[var(--color-wine)]">It is an AI Support Team.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-sans text-base text-[var(--color-charcoal-60)] leading-relaxed mb-6">
                Seven specialized AI agents work together behind every customer interaction
                — triaging intent, retrieving approved knowledge, composing responses, detecting risk,
                escalating to humans, generating handoff summaries, and improving over time.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <p className="font-sans text-base text-[var(--color-charcoal-60)] leading-relaxed mb-8">
                Your customers get fast, consistent, policy-accurate answers. Your team
                gets context-rich escalations — and the time to focus on what actually
                requires a human touch.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Request a Demo
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                >
                  See How It Works
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — solution steps */}
          <div>
            <StaggerContainer className="space-y-1">
              {SOLUTION_POINTS.map((s, i) => (
                <motion.div
                  key={s.step}
                  variants={staggerItem}
                  className="group flex gap-5 items-start py-5 border-b border-[var(--color-ivory-border)] last:border-0 hover:bg-white/50 rounded-xl px-4 -mx-4 transition-all duration-300 cursor-default"
                >
                  <span className="font-display text-xs font-medium text-[var(--color-wine)] opacity-60 mt-1 shrink-0 w-5">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-sans font-semibold text-sm text-[var(--color-charcoal)] mb-1">
                      {s.title}
                    </h3>
                    <p className="font-sans text-sm text-[var(--color-charcoal-60)] leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
