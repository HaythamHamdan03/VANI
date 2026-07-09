"use client";

import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

const QUOTES = [
  {
    quote:
      "VANI gives our agents the context they need before the customer even reaches them. That alone changes the quality of every conversation.",
    role: "Support Operations Lead",
    sector: "Financial Services",
    placeholder: true,
  },
  {
    quote:
      "We needed something that understood our compliance boundaries, not just our FAQs. The approach to escalation is exactly what regulated support teams need.",
    role: "Head of Customer Experience",
    sector: "Healthcare Sector",
    placeholder: true,
  },
  {
    quote:
      "The Arabic-first capability made the difference. Our customers deserve support in their language — not translated, not approximated.",
    role: "Digital Transformation Director",
    sector: "Large Enterprise",
    placeholder: true,
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-pad bg-[var(--color-ivory)] relative overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px] bg-[var(--color-wine-200)] opacity-20 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <ScrollReveal>
            <span className="inline-block text-[10px] font-sans font-medium tracking-[0.18em] uppercase text-[var(--color-wine)] mb-5">
              What Enterprise Teams Say
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-semibold text-[var(--color-charcoal)] leading-tight mb-5">
              Built for teams where response time, trust, and escalation quality matter.
            </h2>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {QUOTES.map((q, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } } }}
              className="bg-white border border-[var(--color-ivory-border)] rounded-2xl p-7 hover:shadow-sm transition-shadow duration-300"
            >
              {/* Quote mark */}
              <p className="font-display text-5xl text-[var(--color-wine)] opacity-25 leading-none mb-4">&ldquo;</p>
              <p className="font-sans text-sm text-[var(--color-charcoal-60)] leading-relaxed mb-6 italic">
                {q.quote}
              </p>
              <div className="pt-4 border-t border-[var(--color-ivory-border)]">
                <p className="font-sans font-semibold text-sm text-[var(--color-charcoal)]">{q.role}</p>
                <p className="font-sans text-xs text-[var(--color-stone)]">{q.sector}</p>
                {q.placeholder && (
                  <p className="font-sans text-[9px] text-[var(--color-stone)]/50 mt-1 italic">Representative perspective</p>
                )}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
