"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import { PRICING_TIERS } from "@/data/content";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="section-pad bg-[var(--color-ivory-dark)] relative overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-beige)] to-transparent" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[var(--color-wine-200)] opacity-25 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <ScrollReveal>
            <span className="inline-block text-[10px] font-sans font-medium tracking-[0.18em] uppercase text-[var(--color-wine)] mb-5">
              Engagement
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold text-[var(--color-charcoal)] leading-tight mb-5">
              Enterprise plans built around your support volume.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-base text-[var(--color-charcoal-60)] leading-relaxed">
              We don&apos;t believe in one-size-fits-all pricing for enterprise support.
              Every engagement starts with a conversation about your actual needs.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {PRICING_TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              variants={staggerItem}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                tier.highlight
                  ? "bg-[var(--color-charcoal)] border border-[var(--color-charcoal)] shadow-2xl scale-[1.02] origin-center"
                  : "bg-white border border-[var(--color-ivory-border)] hover:border-[var(--color-stone-300)] hover:shadow-md"
              }`}
            >
              {tier.highlight && (
                <>
                  <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden opacity-[0.06]"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
                  />
                  <div className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[var(--color-wine)] text-white text-[10px] font-sans font-semibold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                </>
              )}

              {/* Tier header */}
              <div className="mb-6">
                <h3 className={`font-display text-2xl font-semibold mb-1 ${
                  tier.highlight ? "text-[var(--color-ivory)]" : "text-[var(--color-charcoal)]"
                }`}>
                  {tier.name}
                </h3>
                <p className={`font-sans text-sm font-medium mb-3 ${
                  tier.highlight ? "text-[var(--color-wine-200)]" : "text-[var(--color-wine)]"
                }`}>
                  {tier.tagline}
                </p>
                <p className={`font-sans text-sm leading-relaxed ${
                  tier.highlight ? "text-[var(--color-stone)]" : "text-[var(--color-charcoal-60)]"
                }`}>
                  {tier.description}
                </p>
              </div>

              {/* Divider */}
              <div className={`h-px mb-6 ${tier.highlight ? "bg-white/10" : "bg-[var(--color-ivory-border)]"}`} />

              {/* Features */}
              <ul className="space-y-2.5 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle size={13} className={`shrink-0 mt-0.5 ${
                      tier.highlight ? "text-[var(--color-wine-200)]" : "text-[var(--color-wine)]"
                    }`} />
                    <span className={`font-sans text-sm ${
                      tier.highlight ? "text-[var(--color-stone)]" : "text-[var(--color-charcoal-60)]"
                    }`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Price placeholder */}
              <div className="mb-6">
                <p className={`font-display text-3xl font-semibold ${
                  tier.highlight ? "text-[var(--color-ivory)]" : "text-[var(--color-charcoal)]"
                }`}>
                  Custom
                </p>
                <p className={`font-sans text-xs mt-1 ${
                  tier.highlight ? "text-[var(--color-stone)]" : "text-[var(--color-stone)]"
                }`}>
                  Pricing based on your support volume and channels
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-2">
                <Button
                  variant={tier.highlight ? "outline" : "primary"}
                  size="md"
                  className="w-full"
                  onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })}
                >
                  {tier.cta}
                  <ArrowRight size={14} />
                </Button>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Footer note */}
        <ScrollReveal delay={0.3} className="mt-12 text-center">
          <p className="font-sans text-sm text-[var(--color-charcoal-60)]">
            All plans include onboarding, knowledge base setup, and support.{" "}
            <button
              onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })}
              className="text-[var(--color-wine)] underline cursor-pointer hover:opacity-80 transition-opacity"
            >
              Talk to us to find the right fit.
            </button>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
