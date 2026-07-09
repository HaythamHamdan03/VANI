"use client";

import { motion } from "framer-motion";
import {
  Lock, Server, ShieldCheck, Users, FileText, Eye,
  CheckSquare, Settings,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import { SECURITY_FEATURES } from "@/data/content";

const ICONS: Record<string, React.ElementType> = {
  Lock, Server, ShieldCheck, Users, FileText, Eye, CheckSquare, Settings,
};

export function Security() {
  return (
    <section
      id="security"
      className="section-pad bg-[var(--color-charcoal)] relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--color-wine)] opacity-[0.04] blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — headline and key statement */}
          <div className="lg:sticky lg:top-32">
            <ScrollReveal>
              <span className="inline-block text-[10px] font-sans font-medium tracking-[0.18em] uppercase text-[var(--color-wine-200)] mb-5">
                Security & Privacy
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold text-[var(--color-ivory)] leading-tight mb-6">
                Your data answers your customers.<br />
                <span className="text-[var(--color-stone)]">Not anyone else&apos;s.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-sans text-base text-[var(--color-stone)] leading-relaxed mb-8">
                VANI is designed with security-conscious and compliance-aware
                enterprise workflows. Every feature — from data isolation to
                audit logging — is built for organizations where trust is non-negotiable.
              </p>
            </ScrollReveal>

            {/* Key statement card */}
            <ScrollReveal delay={0.3}>
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                <p className="font-display text-xl italic font-light text-[var(--color-ivory)] leading-snug mb-4">
                  &ldquo;Your data is used to answer your customers, not to train a public model.&rdquo;
                </p>
                <div className="space-y-2">
                  {[
                    "Client-isolated knowledge base",
                    "No data commingling between clients",
                    "Private deployment and integration review",
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[var(--color-wine-200)] shrink-0" />
                      <span className="font-sans text-sm text-[var(--color-stone)]">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Responsible disclaimer */}
            <ScrollReveal delay={0.4}>
              <p className="mt-6 font-sans text-xs text-[var(--color-stone)]/60 leading-relaxed">
                VANI is designed with compliance-aware workflows for financial services and healthcare environments.
                Specific regulatory certifications are determined on a per-deployment basis.
                Contact us to discuss your sector&apos;s requirements.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — feature grid */}
          <div>
            <StaggerContainer className="grid sm:grid-cols-2 gap-4">
              {SECURITY_FEATURES.map((f) => {
                const Icon = ICONS[f.icon] ?? Lock;
                return (
                  <motion.div
                    key={f.title}
                    variants={staggerItem}
                    className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-[var(--color-wine)]/30 rounded-2xl p-5 transition-all duration-300 cursor-default"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[var(--color-wine)]/10 flex items-center justify-center mb-4">
                      <Icon size={15} className="text-[var(--color-wine-200)]" />
                    </div>
                    <h3 className="font-sans font-semibold text-sm text-[var(--color-ivory)] mb-2">{f.title}</h3>
                    <p className="font-sans text-sm text-[var(--color-stone)] leading-relaxed">{f.detail}</p>
                  </motion.div>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
