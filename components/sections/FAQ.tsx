"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import { FAQS } from "@/data/content";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="section-pad bg-[var(--color-ivory-dark)] relative overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-beige)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <ScrollReveal>
              <span className="inline-block text-[10px] font-sans font-medium tracking-[0.18em] uppercase text-[var(--color-wine)] mb-5">
                FAQ
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-semibold text-[var(--color-charcoal)] leading-tight mb-5">
                Common questions about VANI.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-sans text-base text-[var(--color-charcoal-60)] leading-relaxed">
                Enterprise support is complex. We&apos;ve tried to answer the questions
                that matter most to the teams and organizations we work with.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — accordion */}
          <StaggerContainer className="space-y-2">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className={`rounded-2xl border overflow-hidden transition-colors duration-200 ${
                    isOpen
                      ? "border-[var(--color-wine)]/30 bg-white"
                      : "border-[var(--color-ivory-border)] bg-white/60 hover:bg-white hover:border-[var(--color-stone-300)]"
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="flex-1 font-sans font-medium text-sm text-[var(--color-charcoal)] leading-snug">
                      {faq.q}
                    </span>
                    <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isOpen ? "bg-[var(--color-wine)] text-white" : "bg-[var(--color-stone-100)] text-[var(--color-charcoal)]"
                    }`}>
                      {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                    </span>
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
                        <p className="px-6 pb-5 font-sans text-sm text-[var(--color-charcoal-60)] leading-relaxed border-t border-[var(--color-ivory-border)] pt-4">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
