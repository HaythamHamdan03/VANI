"use client";

import { motion } from "framer-motion";
import { Repeat, Clock, MessageSquare, AlertTriangle, TrendingDown, Shield } from "lucide-react";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import { PROBLEMS } from "@/data/content";

const ICONS: Record<string, React.ElementType> = {
  Repeat, Clock, MessageSquare, AlertTriangle, TrendingDown, Shield,
};

export function Problem() {
  return (
    <section
      id="problem"
      className="section-pad bg-[var(--color-charcoal)] relative overflow-hidden"
    >
      {/* Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Warm glow */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[400px] bg-[var(--color-wine)] opacity-[0.06] blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <ScrollReveal>
            <span className="inline-block text-[10px] font-sans font-medium tracking-[0.18em] uppercase text-[var(--color-wine-200)] mb-5">
              The Problem
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold text-[var(--color-ivory)] leading-tight mb-5">
              Support teams are losing the battle against volume.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-base text-[var(--color-stone)] leading-relaxed">
              Every day, your best agents are answering the same twenty questions — while
              genuinely complex, sensitive, and revenue-impacting cases wait in the queue.
              The problem isn&apos;t your team. It&apos;s the system.
            </p>
          </ScrollReveal>
        </div>

        {/* Problem grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROBLEMS.map((p) => {
            const Icon = ICONS[p.icon] ?? Shield;
            return (
              <motion.div
                key={p.title}
                variants={staggerItem}
                className="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[var(--color-wine)]/30 rounded-2xl p-6 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-[var(--color-wine)]/10 flex items-center justify-center">
                    <Icon size={16} className="text-[var(--color-wine-200)]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-sm text-[var(--color-ivory)] mb-2">
                      {p.title}
                    </h3>
                    <p className="font-sans text-sm text-[var(--color-stone)] leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* Bottom pull quote */}
        <ScrollReveal delay={0.2} className="mt-20 max-w-3xl mx-auto text-center">
          <p className="font-display text-[clamp(1.4rem,3vw,2rem)] italic font-light text-[var(--color-stone-300)] leading-snug">
            &ldquo;The question isn&apos;t whether to use AI for support.{" "}
            <span className="text-[var(--color-ivory)] not-italic font-medium">
              It&apos;s whether you can afford not to.
            </span>&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
