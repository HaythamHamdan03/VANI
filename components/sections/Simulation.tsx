"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cross, Landmark, GraduationCap, Share2,
  Bot, User, ShieldAlert, CheckCircle, ArrowRight,
  Database, Zap,
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { SIMULATION_SCENARIOS } from "@/data/content";

const ICON_MAP: Record<string, React.ElementType> = {
  Cross, Landmark, GraduationCap, Share2,
};

type Stage = "idle" | "customer" | "thinking" | "response" | "escalation" | "handoff";

function useSimulation(scenarioId: string) {
  const [stage, setStage] = useState<Stage>("idle");

  useEffect(() => {
    setStage("idle");
  }, [scenarioId]);

  const run = () => {
    setStage("customer");
    setTimeout(() => setStage("thinking"), 800);
    setTimeout(() => setStage("response"), 2400);
    setTimeout(() => {
      const sc = SIMULATION_SCENARIOS.find((s) => s.id === scenarioId);
      setStage(sc?.escalation ? "escalation" : "handoff");
    }, 4000);
  };

  const reset = () => setStage("idle");

  return { stage, run, reset };
}

/* ── Typing indicator ─────────────────────────────────────────── */
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-3 py-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[var(--color-stone-300)]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </div>
  );
}

/* ── Chat bubble ──────────────────────────────────────────────── */
function Bubble({
  side, children, delay = 0,
}: {
  side: "customer" | "ai"; children: React.ReactNode; delay?: number;
}) {
  const isAI = side === "ai";
  return (
    <motion.div
      className={`flex gap-3 ${isAI ? "flex-row" : "flex-row-reverse"}`}
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
        isAI
          ? "bg-[var(--color-charcoal)] text-[var(--color-ivory)]"
          : "bg-[var(--color-stone-100)] text-[var(--color-charcoal)]"
      }`}>
        {isAI ? <Bot size={14} /> : <User size={14} />}
      </div>
      <div
        className={`rounded-2xl px-4 py-3 max-w-[85%] text-sm font-sans leading-relaxed ${
          isAI
            ? "bg-[var(--color-charcoal)] text-[var(--color-ivory)] rounded-tl-sm"
            : "bg-white border border-[var(--color-ivory-border)] text-[var(--color-charcoal)] rounded-tr-sm"
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
}

/* ── Thinking panel ───────────────────────────────────────────── */
function ThinkingPanel({ text }: { text: string }) {
  return (
    <motion.div
      className="rounded-2xl border border-dashed border-[var(--color-stone-300)] bg-[var(--color-ivory)] p-4 text-center"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
    >
      <div className="flex items-center justify-center gap-2 text-[var(--color-stone)] mb-2">
        <Database size={12} />
        <span className="text-[10px] font-sans font-medium tracking-[0.12em] uppercase">VANI processing</span>
        <Zap size={12} />
      </div>
      <p className="text-[11px] font-sans text-[var(--color-charcoal-60)] italic">{text}</p>
      <TypingDots />
    </motion.div>
  );
}

/* ── Escalation notice ────────────────────────────────────────── */
function EscalationPanel({ reason, delay }: { reason: string; delay: number }) {
  return (
    <motion.div
      className="rounded-2xl border border-[var(--color-wine-200)] bg-[var(--color-wine-100)] p-4"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45 }}
    >
      <div className="flex items-center gap-2 mb-2">
        <ShieldAlert size={14} className="text-[var(--color-wine)] shrink-0" />
        <span className="text-xs font-sans font-semibold text-[var(--color-wine)]">Human Escalation Triggered</span>
      </div>
      <p className="text-[11px] font-sans text-[var(--color-wine)] leading-relaxed opacity-80">{reason}</p>
    </motion.div>
  );
}

/* ── Handoff card ─────────────────────────────────────────────── */
function HandoffCard({
  scenario, delay,
}: {
  scenario: typeof SIMULATION_SCENARIOS[0]; delay: number;
}) {
  return (
    <motion.div
      className="rounded-2xl border border-[var(--color-ivory-border)] bg-white p-5"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <CheckCircle size={14} className="text-green-600 shrink-0" />
        <span className="text-xs font-sans font-semibold text-[var(--color-charcoal)]">
          {scenario.escalation ? "Agent Handoff Summary" : "Case Resolved — Summary"}
        </span>
      </div>
      <div className="space-y-2 text-[11px] font-sans">
        <div className="flex gap-3">
          <span className="text-[var(--color-stone)] w-24 shrink-0">Channel</span>
          <span className="text-[var(--color-charcoal)] font-medium">{scenario.channel}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-[var(--color-stone)] w-24 shrink-0">Confidence</span>
          <span className={`font-semibold ${scenario.confidence >= 80 ? "text-green-700" : "text-[var(--color-wine)]"}`}>
            {scenario.confidence}%
          </span>
        </div>
        <div className="flex gap-3">
          <span className="text-[var(--color-stone)] w-24 shrink-0">Knowledge</span>
          <span className="text-[var(--color-charcoal)] flex-1">{scenario.knowledgeSource}</span>
        </div>
        <div className="flex gap-3">
          <span className="text-[var(--color-stone)] w-24 shrink-0">Outcome</span>
          <span className="text-[var(--color-charcoal)] font-medium">
            {scenario.escalation ? "Routed to human agent" : "Resolved by VANI"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main Simulation section ──────────────────────────────────── */
export function Simulation() {
  const [activeId, setActiveId] = useState<string>(SIMULATION_SCENARIOS[0].id);
  const scenario = SIMULATION_SCENARIOS.find((s) => s.id === activeId)!;
  const { stage, run, reset } = useSimulation(activeId);

  return (
    <section
      id="simulation"
      className="section-pad bg-[var(--color-ivory)] relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <ScrollReveal>
            <span className="inline-block text-[10px] font-sans font-medium tracking-[0.18em] uppercase text-[var(--color-wine)] mb-5">
              Live Simulation
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold text-[var(--color-charcoal)] leading-tight mb-5">
              See VANI handle a real support scenario.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-base text-[var(--color-charcoal-60)] leading-relaxed">
              Select a scenario, press &ldquo;Run Simulation&rdquo;, and watch VANI receive,
              process, respond, and escalate — in real time.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8 items-start">
          {/* Scenario selector */}
          <ScrollReveal direction="left" className="space-y-3">
            <p className="text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-[var(--color-stone)] mb-4">Choose a Scenario</p>
            {SIMULATION_SCENARIOS.map((sc) => {
              const Icon = ICON_MAP[sc.icon] ?? Cross;
              const active = sc.id === activeId;
              return (
                <button
                  key={sc.id}
                  onClick={() => { setActiveId(sc.id); reset(); }}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border text-left transition-all duration-250 cursor-pointer ${
                    active
                      ? "bg-[var(--color-charcoal)] border-[var(--color-charcoal)] shadow-md"
                      : "bg-white border-[var(--color-ivory-border)] hover:border-[var(--color-stone-300)] hover:shadow-sm"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    active ? "bg-white/10" : "bg-[var(--color-wine-100)]"
                  }`}>
                    <Icon size={14} className={active ? "text-[var(--color-ivory)]" : "text-[var(--color-wine)]"} />
                  </div>
                  <div>
                    <p className={`font-sans text-sm font-medium ${active ? "text-[var(--color-ivory)]" : "text-[var(--color-charcoal)]"}`}>
                      {sc.label}
                    </p>
                    <p className={`font-sans text-[11px] ${active ? "text-white/50" : "text-[var(--color-stone)]"}`}>
                      {sc.channel}
                    </p>
                  </div>
                  {active && <ArrowRight size={13} className="ml-auto text-white/30" />}
                </button>
              );
            })}
          </ScrollReveal>

          {/* Simulation panel */}
          <ScrollReveal direction="right">
            <div className="bg-white border border-[var(--color-ivory-border)] rounded-3xl overflow-hidden shadow-sm">
              {/* Chat header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-ivory-border)] bg-[var(--color-ivory)]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-charcoal)] flex items-center justify-center">
                    <Bot size={14} className="text-[var(--color-ivory)]" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-[var(--color-charcoal)]">VANI Support Agent</p>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-[10px] font-sans text-[var(--color-stone)]">Online · {scenario.channel}</span>
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-sans text-[var(--color-stone)] border border-[var(--color-beige)] px-3 py-1 rounded-full">
                  {scenario.label}
                </span>
              </div>

              {/* Chat body */}
              <div className="p-6 min-h-[400px] space-y-4 relative">
                <AnimatePresence mode="wait">
                  {stage === "idle" && (
                    <motion.div
                      key="idle"
                      className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-[var(--color-charcoal)] flex items-center justify-center">
                        <Bot size={24} className="text-[var(--color-ivory)]" />
                      </div>
                      <p className="font-sans text-sm text-[var(--color-stone)] text-center max-w-xs leading-relaxed">
                        Press <strong className="text-[var(--color-charcoal)]">Run Simulation</strong> to watch VANI
                        handle this support scenario step by step.
                      </p>
                    </motion.div>
                  )}

                  {stage !== "idle" && (
                    <motion.div
                      key={`sim-${activeId}-${stage}`}
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {/* Customer message */}
                      {["customer", "thinking", "response", "escalation", "handoff"].includes(stage) && (
                        <Bubble side="customer" delay={0}>
                          {scenario.customerEn}
                        </Bubble>
                      )}

                      {/* Thinking */}
                      {["thinking"].includes(stage) && (
                        <ThinkingPanel text={scenario.vaniThinking} />
                      )}

                      {/* Response */}
                      {["response", "escalation", "handoff"].includes(stage) && (
                        <>
                          <Bubble side="ai" delay={0.1}>{scenario.vaniResponseEn}</Bubble>

                          {/* Knowledge source tag */}
                          <motion.div
                            className="flex items-center gap-2 pl-11"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            <Database size={10} className="text-[var(--color-stone)]" />
                            <span className="text-[10px] font-sans text-[var(--color-stone)] italic">{scenario.knowledgeSource}</span>
                          </motion.div>
                        </>
                      )}

                      {/* Escalation */}
                      {["escalation", "handoff"].includes(stage) && scenario.escalation && (
                        <EscalationPanel reason={scenario.escalationReason!} delay={0.2} />
                      )}

                      {/* Handoff summary */}
                      {stage === "handoff" && (
                        <HandoffCard scenario={scenario} delay={0.3} />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action bar */}
              <div className="px-6 py-4 border-t border-[var(--color-ivory-border)] bg-[var(--color-ivory)] flex items-center gap-3">
                {stage === "idle" || stage === "handoff" ? (
                  <Button
                    variant="primary"
                    size="md"
                    onClick={run}
                    className="flex-1 sm:flex-none"
                  >
                    {stage === "handoff" ? "Run Again" : "Run Simulation"}
                    <ArrowRight size={14} />
                  </Button>
                ) : (
                  <div className="flex items-center gap-2 text-sm text-[var(--color-stone)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-wine)] animate-ping-slow" />
                    VANI is processing...
                  </div>
                )}
                {stage !== "idle" && (
                  <Button variant="ghost" size="sm" onClick={reset}>
                    Reset
                  </Button>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
