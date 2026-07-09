"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Globe, Mail, Share2, Smartphone } from "lucide-react";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import { CHANNELS } from "@/data/content";

const ICONS: Record<string, React.ElementType> = {
  Phone, MessageCircle, Globe, Mail, Share2, Smartphone,
};

export function Channels() {
  return (
    <section
      id="channels"
      className="section-pad bg-[var(--color-charcoal)] relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[var(--color-wine)] opacity-[0.05] blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <ScrollReveal>
            <span className="inline-block text-[10px] font-sans font-medium tracking-[0.18em] uppercase text-[var(--color-wine-200)] mb-5">
              Omnichannel
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold text-[var(--color-ivory)] leading-tight mb-5">
              One AI support team.<br />Every channel your customers use.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-base text-[var(--color-stone)] leading-relaxed">
              VANI operates across all the channels your customers already use —
              with consistent, policy-accurate responses and unified escalation workflows.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHANNELS.map((ch) => {
            const Icon = ICONS[ch.icon] ?? Phone;
            return (
              <motion.div
                key={ch.label}
                variants={staggerItem}
                className="group relative border border-white/[0.07] hover:border-[var(--color-wine)]/40 rounded-2xl p-6 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[var(--color-wine)]/10 group-hover:bg-[var(--color-wine)]/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Icon size={18} className="text-[var(--color-wine-200)]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-sm text-[var(--color-ivory)] mb-2">{ch.label}</h3>
                    <p className="font-sans text-sm text-[var(--color-stone)] leading-relaxed">{ch.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>

        {/* Bottom connector */}
        <ScrollReveal delay={0.3} className="mt-16 text-center">
          <p className="font-display text-xl font-light italic text-[var(--color-stone)]">
            All channels. One knowledge base. Unified analytics.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
