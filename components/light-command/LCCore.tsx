"use client";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import type { LCTheme } from "@/lib/lc-themes";

// ── PROBLEM ──────────────────────────────────────────────────────────
const PROBLEMS = [
  { n: "01", title: "Repetitive Inquiries at Scale",   desc: "Thousands of routine calls and messages overwhelm your team daily, leaving no bandwidth for cases that need genuine human judgment." },
  { n: "02", title: "Customers Expect Instant Answers", desc: "Every minute of wait time on a basic question erodes trust. Customers move on — or escalate — before agents even respond." },
  { n: "03", title: "Disconnected Channels",            desc: "Voice, WhatsApp, email, and social media operate in silos. No unified view means no consistent service." },
  { n: "04", title: "Agents Waste Time on Routine",     desc: "Skilled agents spend most of their shift on questions that a knowledge retrieval system could handle in under two seconds." },
  { n: "05", title: "Serious Cases Get Delayed",        desc: "When routine volume is too high, complex and sensitive cases wait. That delay has real reputational and revenue consequences." },
  { n: "06", title: "Inconsistent Answers, Audit Risk", desc: "Different agents give different answers to the same policy question. In regulated sectors, that inconsistency creates measurable compliance exposure." },
];

export function LCProblem({ theme }: { theme: LCTheme }) {
  return (
    <section id="problem" className="py-24" style={{ backgroundColor: theme.bg }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-xl mb-14">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase mb-3 block"
              style={{ color: theme.label }}>The Problem</span>
            <h2 className="font-sans font-bold text-[clamp(2rem,4vw,3rem)] leading-tight mb-4"
              style={{ color: theme.ink }}>
              Support teams are stretched beyond their capacity.
            </h2>
            <p className="font-sans text-base leading-relaxed" style={{ color: theme.muted }}>
              High-trust organizations lose revenue, talent, and customer confidence to a problem that is largely solvable.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: theme.border }}
        >
          {PROBLEMS.map((p) => (
            <motion.div key={p.n} variants={staggerItem}
              className="flex flex-col gap-4 p-8 transition-colors duration-200"
              style={{ backgroundColor: theme.bg }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.surface)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.bg)}
            >
              <span className="font-mono text-2xl font-bold leading-none select-none"
                style={{ color: theme.border }}>
                {p.n}
              </span>
              <div className="w-8 h-px" style={{ backgroundColor: theme.accent }} />
              <h3 className="font-sans font-semibold text-base" style={{ color: theme.ink }}>{p.title}</h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: theme.muted }}>{p.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ── SOLUTION ─────────────────────────────────────────────────────────
const SOL_STEPS = [
  { n: "01", title: "Receive on every channel",       desc: "VANI listens across voice, WhatsApp, email, chat, social, and mobile simultaneously — no channel left unattended." },
  { n: "02", title: "Understand intent",               desc: "Natural language understanding identifies what the customer needs, in Arabic or English, with context awareness." },
  { n: "03", title: "Retrieve approved knowledge",    desc: "VANI retrieves answers from your private, organization-specific knowledge base — not a generic public model." },
  { n: "04", title: "Respond or collect details",     desc: "VANI answers confidently, or asks targeted follow-up questions to complete the request accurately." },
  { n: "05", title: "Detect sensitivity & risk",      desc: "PII, financial data, medical context, emotional escalation, and compliance triggers are detected in real time." },
  { n: "06", title: "Escalate with full context",     desc: "The human agent receives a complete summary: intent, conversation, channel, and a recommended action." },
];

export function LCSolution({ theme }: { theme: LCTheme }) {
  return (
    <section className="py-24" style={{ backgroundColor: theme.bgAlt }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-28">
          {/* Sticky left */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ScrollReveal>
              <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase mb-3 block"
                style={{ color: theme.label }}>The Solution</span>
              <h2 className="font-sans font-bold text-[clamp(2rem,4vw,3rem)] leading-tight mb-5"
                style={{ color: theme.ink }}>
                AI handles repetition.<br />Humans handle excellence.
              </h2>
              <p className="font-sans text-base leading-relaxed mb-8" style={{ color: theme.muted }}>
                VANI is not a chatbot. It is an AI Support Team — a coordinated layer of specialized agents that work alongside your human team, never instead of them.
              </p>

              {/* Stat grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["24 / 7", "Availability"],
                  ["< 2s",   "Response Time"],
                  ["6+",     "Channels"],
                  ["7",      "AI Agents"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-lg p-5 border"
                    style={{ backgroundColor: theme.surface, borderColor: theme.border }}>
                    <p className="font-mono font-bold text-2xl" style={{ color: theme.accent }}>{v}</p>
                    <p className="font-sans text-xs mt-1" style={{ color: theme.faint }}>{l}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: steps */}
          <div>
            {SOL_STEPS.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 0.07}>
                <div className="flex gap-6 py-6 border-b last:border-b-0"
                  style={{ borderColor: theme.border }}>
                  <span className="font-mono font-bold text-xl shrink-0 w-8"
                    style={{ color: theme.border }}>
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-sans font-semibold text-base mb-1.5" style={{ color: theme.ink }}>{s.title}</h3>
                    <p className="font-sans text-sm leading-relaxed" style={{ color: theme.muted }}>{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── HOW IT WORKS ─────────────────────────────────────────────────────
const STEPS = [
  { n: "1", title: "Customer reaches out",        desc: "Via voice, WhatsApp, chat, email, social, or mobile — in Arabic or English, 24 / 7." },
  { n: "2", title: "VANI classifies intent",      desc: "Triage Agent identifies request type, language, urgency, and channel in under a second." },
  { n: "3", title: "Knowledge retrieved",          desc: "Knowledge Agent pulls the approved answer from your organization's private knowledge base." },
  { n: "4", title: "Response composed",            desc: "Response Agent drafts an accurate reply or collects required details before proceeding." },
  { n: "5", title: "Confidence & sensitivity",    desc: "Compliance Agent evaluates the case — flags PII, risk signals, or low-confidence responses." },
  { n: "6", title: "Human agent briefed",          desc: "Escalation Agent routes complex cases to the right human team with a complete context summary." },
  { n: "7", title: "Summary delivered",            desc: "Summary Agent prepares the full handoff brief — conversation, intent, history, next action." },
  { n: "8", title: "Analytics improve operations", desc: "Quality Agent surfaces patterns, resolution rates, and opportunities to improve the knowledge base." },
];

export function LCHowItWorks({ theme }: { theme: LCTheme }) {
  return (
    <section id="how-it-works" className="py-24" style={{ backgroundColor: theme.bgDark }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase mb-3 block"
              style={{ color: theme.accent }}>Operations Pipeline</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.8rem)] text-white leading-tight">
              Eight steps. One unified AI Support Team.
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
          {STEPS.map((s) => (
            <motion.div key={s.n} variants={staggerItem}
              className="flex flex-col gap-4 p-7 transition-colors duration-200 hover:bg-white/[0.04]"
              style={{ backgroundColor: theme.bgDark }}
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded flex items-center justify-center text-[11px] font-mono font-bold border"
                  style={{ backgroundColor: `${theme.accent}18`, borderColor: `${theme.accent}40`, color: theme.accent }}>
                  {s.n}
                </div>
              </div>
              <h3 className="font-sans font-semibold text-sm text-white">{s.title}</h3>
              <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{s.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ── AGENTS ───────────────────────────────────────────────────────────
const AGENTS = [
  { name: "Triage Agent",     role: "Classifies intent, language, urgency, and channel in real time",     hot: true  },
  { name: "Knowledge Agent",  role: "Retrieves approved responses from your private knowledge base",       hot: false },
  { name: "Response Agent",   role: "Drafts and delivers accurate responses in Arabic and English",        hot: false },
  { name: "Compliance Agent", role: "Detects PII, PHI, risk signals, and compliance triggers instantly",  hot: true  },
  { name: "Escalation Agent", role: "Routes sensitive or complex cases to the right human team",           hot: true  },
  { name: "Summary Agent",    role: "Prepares full context briefing before any human handoff",             hot: false },
  { name: "Quality Agent",    role: "Monitors resolution quality and surfaces improvement opportunities",  hot: false },
];

export function LCAgents({ theme }: { theme: LCTheme }) {
  return (
    <section id="agents" className="py-24" style={{ backgroundColor: theme.bg }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-xl mb-12">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase mb-3 block"
              style={{ color: theme.label }}>AI Support Team</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.8rem)] leading-tight mb-3"
              style={{ color: theme.ink }}>
              Seven specialized agents. One coordinated team.
            </h2>
            <p className="font-sans text-sm leading-relaxed" style={{ color: theme.muted }}>
              Each agent handles a defined part of the support cycle. Together, they process every inquiry end-to-end — without gaps, without drift.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {AGENTS.map((a) => (
            <motion.div key={a.name} variants={staggerItem}
              className="p-6 rounded-xl border flex flex-col gap-3 transition-all duration-200"
              style={{ backgroundColor: theme.surface, borderColor: theme.border }}
              whileHover={{ borderColor: theme.accent + "60",
                boxShadow: `0 4px 20px ${theme.netGlow}` }}
            >
              <div className="flex items-center gap-2">
                {a.hot && (
                  <motion.span className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: theme.accent }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.6 }}
                  />
                )}
                <span className="font-sans font-semibold text-sm" style={{ color: theme.ink }}>{a.name}</span>
              </div>
              <p className="font-sans text-xs leading-relaxed" style={{ color: theme.muted }}>{a.role}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
