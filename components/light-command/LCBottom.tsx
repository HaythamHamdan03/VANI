"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import { ChevronDown, ArrowRight, Globe, Mail } from "lucide-react";
import type { LCTheme } from "@/lib/lc-themes";

// ── SECURITY ──────────────────────────────────────────────────────────
const SECURITY = [
  { n: "01", title: "Private Knowledge Layer",        desc: "Every client's knowledge base is fully isolated. Your approved content is used to answer your customers only — never shared, never used to train public models." },
  { n: "02", title: "Client-Level Data Isolation",    desc: "Conversations, knowledge, and analytics are separated at the infrastructure level. Cross-client exposure is architecturally prevented." },
  { n: "03", title: "Encryption In Transit & At Rest",desc: "All data is encrypted using industry-standard protocols across every layer — storage, transfer, and processing." },
  { n: "04", title: "Audit Logs",                     desc: "Every AI response, escalation, knowledge retrieval, and handoff is logged with full timestamps and context — available for review and compliance." },
  { n: "05", title: "Role-Based Access Control",      desc: "Permissions are scoped by role. Agents, team leads, admins, and compliance officers see only what they are authorized to access." },
  { n: "06", title: "Human Approval Workflows",       desc: "Critical AI decisions can be configured to require human review and approval before any action is taken." },
  { n: "07", title: "PII & PHI Awareness",            desc: "Personal and health information is detected, masked, and handled according to your compliance configuration — not a generic policy." },
  { n: "08", title: "Configurable Retention",         desc: "Data is retained only as long as your policy requires. Deletion schedules and retention windows are fully configurable per deployment." },
];

export function LCSecurity({ theme }: { theme: LCTheme }) {
  return (
    <section id="security" className="py-24" style={{ backgroundColor: theme.bg }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ScrollReveal>
              <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase mb-4 block"
                style={{ color: theme.label }}>Security & Compliance</span>
              <h2 className="font-sans font-bold text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight mb-5"
                style={{ color: theme.ink }}>
                Your data answers your customers. Nothing else.
              </h2>
              <div className="rounded-xl border p-5 mb-6"
                style={{ backgroundColor: theme.accentSoft, borderColor: `${theme.accent}30` }}>
                <p className="font-sans text-sm leading-relaxed font-medium"
                  style={{ color: theme.accent }}>
                  "Your data is used to answer your customers, not to train a public model."
                </p>
              </div>
              <p className="font-sans text-sm leading-relaxed" style={{ color: theme.muted }}>
                Designed with security-conscious and compliance-aware enterprise workflows.
                Built for banks, hospitals, and regulated sectors where data governance is non-negotiable.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 gap-px"
            style={{ backgroundColor: theme.border }}>
            {SECURITY.map((s) => (
              <motion.div key={s.n} variants={staggerItem}
                className="flex flex-col gap-2 p-6 transition-colors duration-200"
                style={{ backgroundColor: theme.bg }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.surface)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.bg)}
              >
                <span className="font-mono text-[10px]" style={{ color: theme.accent }}>{s.n}</span>
                <h3 className="font-sans font-semibold text-sm" style={{ color: theme.ink }}>{s.title}</h3>
                <p className="font-sans text-xs leading-relaxed" style={{ color: theme.muted }}>{s.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

// ── WHY VANI ──────────────────────────────────────────────────────────
const WHY = [
  { title: "Not a chatbot",                  desc: "VANI is an AI Support Team — seven coordinated agents with defined roles, not a single Q&A bot." },
  { title: "Arabic-first intelligence",      desc: "Native Arabic understanding, not translation. Intent, tone, and dialect — understood as your customers speak." },
  { title: "Voice and messaging, unified",   desc: "One system for calls, WhatsApp, email, chat, social, and mobile — with one consistent operational view." },
  { title: "Human-in-the-loop by design",   desc: "VANI never replaces human judgment for cases that need it. Escalation is a core feature, not a fallback." },
  { title: "Compliance-aware architecture", desc: "Audit logs, approval workflows, PII masking, and retention controls — built for regulated industries." },
  { title: "Private model, private data",   desc: "Your knowledge base trains your system. No cross-client exposure. No public model training. Ever." },
];

export function LCWhyVani({ theme }: { theme: LCTheme }) {
  return (
    <section id="why-vani" className="py-24" style={{ backgroundColor: theme.bgDark }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase mb-3 block"
              style={{ color: theme.accent }}>Why VANI</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.8rem)] text-white leading-tight">
              The enterprise AI Support Team built for the Gulf.
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {WHY.map((w) => (
            <motion.div key={w.title} variants={staggerItem}
              className="flex flex-col gap-3 p-7 rounded-xl border transition-all duration-200"
              style={{ borderColor: "rgba(255,255,255,0.07)" }}
              whileHover={{ borderColor: `${theme.accent}50`,
                backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <div className="w-6 h-px" style={{ backgroundColor: theme.accent }} />
              <h3 className="font-sans font-semibold text-sm text-white">{w.title}</h3>
              <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{w.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="rounded-xl border p-10 text-center" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <p className="font-sans text-xl md:text-2xl text-white font-light">
              AI handles repetition.{" "}
              <span className="font-semibold" style={{ color: theme.accent }}>
                Humans handle excellence.
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── PRICING ───────────────────────────────────────────────────────────
const TIERS = [
  {
    name: "Pilot",
    desc: "Focused workflow validation for one team or channel.",
    features: ["Selected workflows", "Knowledge-base setup", "Dashboard preview", "Human handoff", "Basic analytics"],
    featured: false,
  },
  {
    name: "Growth",
    desc: "Scale across departments, channels, and larger support volumes.",
    features: ["Multi-channel deployment", "Advanced analytics", "Escalation rule config", "Team workflows", "Quality review", "Bilingual support"],
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "For regulated, high-volume organizations with custom requirements.",
    features: ["Security review", "Compliance-aware workflows", "Advanced access control", "Custom integrations", "Audit logs", "Dedicated onboarding"],
    featured: false,
  },
];

export function LCPricing({ theme }: { theme: LCTheme }) {
  return (
    <section id="pricing" className="py-24" style={{ backgroundColor: theme.bgAlt }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase mb-3 block"
              style={{ color: theme.label }}>Engagement Plans</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.8rem)] leading-tight mb-3"
              style={{ color: theme.ink }}>
              A plan for every stage of your journey.
            </h2>
            <p className="font-sans text-sm leading-relaxed" style={{ color: theme.muted }}>
              All plans begin with a tailored demo. Pricing is configured per deployment — we don't publish standard rates because every enterprise integration is different.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-5">
          {TIERS.map((tier) => (
            <motion.div key={tier.name} variants={staggerItem}
              className="rounded-xl flex flex-col gap-6 p-8 border transition-all duration-200"
              style={{
                backgroundColor: tier.featured ? theme.accent      : theme.surface,
                borderColor:     tier.featured ? theme.accent      : theme.border,
                boxShadow:       tier.featured ? `0 12px 40px ${theme.netGlow}, 0 4px 16px rgba(0,0,0,0.08)` : undefined,
              }}
              whileHover={!tier.featured ? {
                borderColor: `${theme.accent}60`,
                boxShadow: `0 4px 24px ${theme.netGlow}`,
              } : {}}
            >
              {tier.featured && (
                <span className="self-start font-sans text-[10px] font-medium tracking-[0.16em] uppercase border border-white/25 text-white/70 px-2.5 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="font-sans font-bold text-xl mb-2"
                  style={{ color: tier.featured ? "#fff" : theme.ink }}>{tier.name}</h3>
                <p className="font-sans text-sm leading-relaxed"
                  style={{ color: tier.featured ? "rgba(255,255,255,0.7)" : theme.muted }}>{tier.desc}</p>
              </div>
              <div className="flex flex-col gap-2.5 flex-1">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: tier.featured ? "rgba(255,255,255,0.6)" : theme.accent }} />
                    <span className="font-sans text-xs leading-relaxed"
                      style={{ color: tier.featured ? "rgba(255,255,255,0.8)" : theme.muted }}>{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2.5">
                <button className="w-full py-3 font-sans font-medium text-sm rounded-lg transition-opacity hover:opacity-90 cursor-pointer"
                  style={{
                    backgroundColor: tier.featured ? "#fff"        : theme.accent,
                    color:           tier.featured ? theme.accent  : "#fff",
                  }}>
                  Request Demo
                </button>
                <button className="w-full py-3 font-sans text-sm rounded-lg border cursor-pointer transition-colors duration-150"
                  style={{
                    borderColor: tier.featured ? "rgba(255,255,255,0.3)" : theme.border,
                    color:       tier.featured ? "rgba(255,255,255,0.7)" : theme.muted,
                  }}>
                  Talk to Sales
                </button>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────
const FAQS = [
  { q: "Does VANI replace human support agents?",                      a: "No. VANI handles routine and repetitive cases, freeing your human agents to focus on complex, sensitive, and high-value interactions. Human agents remain in control of all escalations and approvals." },
  { q: "How does VANI handle sensitive cases?",                        a: "VANI is trained to detect sensitivity signals — PII, financial data, medical context, emotional escalation, and compliance triggers. When detected, the case is immediately escalated to the appropriate human team with full context." },
  { q: "Can VANI work with both calls and WhatsApp?",                  a: "Yes. VANI handles voice calls, WhatsApp, website chat, email, social media, and mobile app support through a single unified system." },
  { q: "Can VANI support Arabic and English?",                         a: "Yes. VANI is Arabic-first — it understands Arabic intent natively, not through translation. It supports full Arabic and English conversations across all channels." },
  { q: "Does VANI train on our private data?",                         a: "No. Your organization's knowledge base is used to answer your customers only. It is not shared with other clients and is not used to train any public model." },
  { q: "Is VANI suitable for banks and hospitals?",                    a: "Yes. VANI is specifically designed for regulated industries. It includes audit logs, PII/PHI detection, role-based access control, human approval workflows, and configurable retention policies." },
  { q: "Can VANI integrate with our CRM or ticketing system?",         a: "Yes. VANI is designed for enterprise integration. Our team handles custom integrations with CRM platforms, ticketing systems, and communication tools as part of the deployment process." },
  { q: "What happens when the AI is not confident?",                   a: "VANI has configurable confidence thresholds. When a response falls below the threshold, the case is automatically escalated to a human agent with a full context summary — never left unanswered." },
];

export function LCFAQ({ theme }: { theme: LCTheme }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: theme.bg }}>
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-12">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase mb-3 block"
              style={{ color: theme.label }}>FAQ</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.6rem)] leading-tight"
              style={{ color: theme.ink }}>Common questions.</h2>
          </div>
        </ScrollReveal>

        <div className="divide-y" style={{ borderColor: theme.border }}>
          {FAQS.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div style={{ borderColor: theme.border }}>
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
                >
                  <span className="font-sans font-medium text-base pr-6 transition-colors duration-150"
                    style={{ color: theme.ink }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = theme.accent)}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = theme.ink)}
                  >
                    {faq.q}
                  </span>
                  <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={16} style={{ color: theme.faint }} className="shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-sm leading-relaxed pb-5"
                        style={{ color: theme.muted }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FINAL CTA ─────────────────────────────────────────────────────────
export function LCFinalCTA({ theme }: { theme: LCTheme }) {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="demo" className="py-28" style={{ backgroundColor: theme.bgDark }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase mb-6 block"
            style={{ color: theme.accent }}>Get Started</span>

          {/* Node mark */}
          <div className="flex justify-center mb-8">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
              <rect x="2" y="2" width="32" height="32" rx="5" stroke={theme.accent} strokeWidth="1.5" fill="none" opacity="0.5" />
              {[7, 18, 29].flatMap((x) => [7, 18, 29].map((y) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2"
                  fill={theme.accent}
                  opacity={x === 18 && y === 18 ? "0.8" : "0.25"}
                />
              )))}
            </svg>
          </div>

          <h2 className="font-sans font-bold text-[clamp(2rem,5vw,3.5rem)] text-white leading-tight mb-5">
            See how VANI would handle<br />your support volume.
          </h2>
          <p className="font-sans text-base leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.45)" }}>
            We'll demonstrate VANI handling your top 10 most common support inquiries — in a live session tailored to your industry, before any commitment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button
              className="inline-flex items-center gap-2 font-sans font-medium text-sm px-7 py-3.5 rounded-lg cursor-pointer"
              style={{ backgroundColor: theme.accent, color: "#fff" }}
              whileHover={{ scale: 1.02, opacity: 0.92 }}
              whileTap={{ scale: 0.98 }}
            >
              Request a Demo <ArrowRight size={14} />
            </motion.button>
            <button onClick={() => go("#simulation")}
              className="inline-flex items-center gap-2 font-sans font-medium text-sm px-7 py-3.5 rounded-lg border cursor-pointer transition-colors duration-150"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}>
              Try Simulation
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────
const FOOTER_COLS = [
  { title: "Product",     links: ["How It Works", "AI Agents", "Dashboard", "Channels", "Simulation"] },
  { title: "Industries",  links: ["Banking", "Healthcare", "Education", "Insurance", "Real Estate"] },
  { title: "Company",     links: ["About", "Careers", "Contact", "Privacy Policy", "Terms of Use"] },
];

export function LCFooter({ theme }: { theme: LCTheme }) {
  return (
    <footer className="border-t py-16" style={{ backgroundColor: theme.bgDark, borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 mb-14">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                <rect x="1" y="1" width="16" height="16" rx="2.5" stroke={theme.accent} strokeWidth="1.4" fill="none" />
                {[3.5, 9, 14.5].flatMap((x) =>
                  [3.5, 9, 14.5].map((y) => (
                    <circle key={`${x}-${y}`} cx={x} cy={y} r="1.3"
                      fill={theme.accent}
                      opacity={x === 9 && y === 9 ? "1" : "0.3"}
                    />
                  ))
                )}
              </svg>
              <span className="font-sans font-bold text-[1.05rem] text-white tracking-tight">
                V<span style={{ color: theme.accent }}>AI</span>NI
              </span>
            </div>
            <p className="font-sans text-xs leading-relaxed max-w-[200px]"
              style={{ color: "rgba(255,255,255,0.35)" }}>
              Enterprise AI Support Team. Arabic-first. Built for the Gulf.
            </p>
            <div className="flex gap-4">
              <Globe size={14} className="cursor-pointer transition-opacity hover:opacity-70"
                style={{ color: "rgba(255,255,255,0.35)" }} />
              <Mail size={14} className="cursor-pointer transition-opacity hover:opacity-70"
                style={{ color: "rgba(255,255,255,0.35)" }} />
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <p className="font-sans text-[10px] font-medium tracking-[0.18em] uppercase mb-4"
                style={{ color: "rgba(255,255,255,0.25)" }}>{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-sans text-xs transition-colors duration-150"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.8)")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
                    >{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <p className="font-sans text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
            © 2025 VANI. All rights reserved.
          </p>
          <p className="font-sans text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
            AI handles repetition. Humans handle excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
