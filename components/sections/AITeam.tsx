"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import { AI_AGENTS } from "@/data/content";

export function AITeam() {
  return (
    <section
      id="ai-team"
      className="section-pad bg-[var(--color-ivory)] relative overflow-hidden"
    >
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--color-wine)] opacity-[0.04] blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <ScrollReveal>
            <span className="inline-block text-[10px] font-sans font-medium tracking-[0.18em] uppercase text-[var(--color-wine)] mb-5">
              The AI Support Team
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold text-[var(--color-charcoal)] leading-tight mb-5">
              Seven agents. One coherent support experience.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-base text-[var(--color-charcoal-60)] leading-relaxed">
              Unlike a generic AI assistant, VANI deploys a team of specialized agents
              — each with a defined responsibility in the support flow.
            </p>
          </ScrollReveal>
        </div>

        {/* Agent cards */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {AI_AGENTS.map((agent, i) => (
            <motion.div
              key={agent.name}
              variants={staggerItem}
              className={`
                group relative rounded-2xl p-6 border transition-all duration-350 cursor-default overflow-hidden
                ${agent.color === "wine"
                  ? "bg-[var(--color-wine)] border-[var(--color-wine-600)] hover:bg-[var(--color-wine-600)]"
                  : "bg-white border-[var(--color-ivory-border)] hover:border-[var(--color-stone-300)] hover:shadow-md"
                }
              `}
            >
              {/* Subtle texture on wine cards */}
              {agent.color === "wine" && (
                <div className="pointer-events-none absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  }}
                />
              )}

              {/* Agent number */}
              <span className={`text-[10px] font-sans font-medium tracking-[0.15em] uppercase block mb-4 ${
                agent.color === "wine" ? "text-[var(--color-wine-200)]/60" : "text-[var(--color-wine)] opacity-50"
              }`}>
                Agent {String(i + 1).padStart(2, "0")}
              </span>

              {/* Role badge */}
              <span className={`inline-block text-[9px] font-sans font-semibold tracking-[0.12em] uppercase px-2.5 py-1 rounded-full mb-4 ${
                agent.color === "wine"
                  ? "bg-white/10 text-white/70"
                  : "bg-[var(--color-wine-100)] text-[var(--color-wine)]"
              }`}>
                {agent.role}
              </span>

              {/* Name */}
              <h3 className={`font-sans font-bold text-base mb-3 ${
                agent.color === "wine" ? "text-white" : "text-[var(--color-charcoal)]"
              }`}>
                {agent.name}
              </h3>

              {/* Description */}
              <p className={`font-sans text-sm leading-relaxed ${
                agent.color === "wine" ? "text-white/75" : "text-[var(--color-charcoal-60)]"
              }`}>
                {agent.description}
              </p>
            </motion.div>
          ))}

          {/* Connector card — last tile */}
          <motion.div
            variants={staggerItem}
            className="sm:col-span-2 lg:col-span-1 rounded-2xl p-6 border border-dashed border-[var(--color-beige)] flex flex-col items-center justify-center text-center bg-transparent"
          >
            <p className="font-display text-lg italic text-[var(--color-stone)] mb-2">
              &ldquo;Working together,<br />invisibly.&rdquo;
            </p>
            <p className="font-sans text-xs text-[var(--color-stone)] leading-relaxed">
              Your customers experience one coherent, natural conversation.
            </p>
          </motion.div>
        </StaggerContainer>
      </div>
    </section>
  );
}
