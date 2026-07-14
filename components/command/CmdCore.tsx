"use client";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import {
  Repeat, Clock, MessageSquare, AlertTriangle, TrendingDown, Shield,
  Brain, Database, Zap, ShieldAlert, Users, BarChart3,
  CheckCircle,
} from "lucide-react";

// ──────────────────────────────────────────────────────────────
// Shared CMD styles
// ──────────────────────────────────────────────────────────────
const S = {
  section:  "section-pad bg-[#070B0F] relative overflow-hidden",
  sectionAlt: "section-pad bg-[#0B0F14] relative overflow-hidden",
  card:     "bg-[#0F1318] border border-white/[0.06] hover:border-[#C41230]/30 rounded-xl transition-all duration-300",
  label:    "text-[10px] font-mono tracking-[0.22em] uppercase text-[#C41230] mb-4 block",
  h2:       "font-sans font-bold text-[clamp(1.8rem,4vw,3rem)] text-[#E8EAED] leading-tight mb-5",
  p:        "font-sans text-base text-[#6E7780] leading-relaxed",
  border:   "border-t border-white/[0.06]",
};

// ──────────────────────────────────────────────────────────────
// Problem
// ──────────────────────────────────────────────────────────────
const PROBLEMS = [
  { icon: Repeat,        title: "Drowning in repetition",       body: "Your best agents answer the same 20 questions every day. High-value team members stuck in low-value loops." },
  { icon: Clock,         title: "Customers expect instant",      body: "Wait times damage trust. Banks and hospitals lose credibility — and customers — to slow response queues." },
  { icon: MessageSquare, title: "Disconnected channels",         body: "WhatsApp, voice, chat, email — managed separately. Context lost. Cases duplicated. Revenue missed." },
  { icon: AlertTriangle, title: "Inconsistent responses",        body: "Compliance-regulated environments can't afford agents giving conflicting answers to the same policy question." },
  { icon: TrendingDown,  title: "Scaling costs",                 body: "Doubling support volume means doubling headcount. There's no efficient path to scale under current models." },
  { icon: Shield,        title: "Escalation without context",    body: "By the time a complex case reaches a human agent, the conversation history, intent, and urgency signals are often lost." },
];

export function CmdProblem() {
  return (
    <section id="problem" className={S.section}>
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#C41230] opacity-[0.04] blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-14">
          <ScrollReveal><span className={S.label}>// Problem</span></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className={S.h2}>Support teams are losing the battle against volume.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className={S.p}>Every day, your best agents answer the same 20 questions while complex, sensitive, and revenue-impacting cases sit in the queue.</p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROBLEMS.map((p) => (
            <motion.div key={p.title} variants={staggerItem} className={`${S.card} p-5 group cursor-default`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded bg-[#C41230]/10 flex items-center justify-center shrink-0">
                  <p.icon size={14} className="text-[#C41230]" />
                </div>
                <h3 className="font-sans font-semibold text-sm text-[#E8EAED]">{p.title}</h3>
              </div>
              <p className="font-sans text-sm text-[#6E7780] leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// Solution
// ──────────────────────────────────────────────────────────────
const STEPS = [
  { n: "01", title: "Receives & understands",    body: "Natural language understanding across voice, messages, and digital channels — in Arabic and English." },
  { n: "02", title: "Retrieves approved knowledge", body: "Queries your private knowledge base — policies, FAQs, procedures — not public training data." },
  { n: "03", title: "Responds or collects",       body: "Handles safe, routine inquiries instantly. Collects structured details before routing when needed." },
  { n: "04", title: "Detects risk & complexity",  body: "Identifies sensitive topics, emotional signals, compliance indicators, and urgency in real time." },
  { n: "05", title: "Escalates with context",     body: "Routes flagged cases to the right human agent — with a full conversation summary and recommended action." },
  { n: "06", title: "Learns & improves",          body: "Quality feedback and analytics refine response accuracy, escalation calibration, and team performance over time." },
];

export function CmdSolution() {
  return (
    <section id="product" className={S.sectionAlt}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <ScrollReveal><span className={S.label}>// Solution</span></ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className={S.h2}>
                VANI is not a chatbot.<br />
                <span className="text-[#C41230]">It is an AI Support Team.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className={`${S.p} mb-8`}>Seven specialized AI agents work together behind every customer interaction — triaging, retrieving, responding, detecting risk, escalating, summarizing, and improving.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="border border-white/[0.06] rounded-xl p-5 bg-[#0F1318]">
                <p className="font-mono text-sm text-[#6E7780] mb-3">// Core architecture</p>
                {["AI handles repetition", "Humans handle excellence", "No context lost in escalation", "Built for regulated organizations"].map((pt) => (
                  <div key={pt} className="flex items-center gap-2 py-1.5 border-b border-white/[0.04] last:border-0">
                    <span className="text-[#C41230] font-mono text-xs">›</span>
                    <span className="font-sans text-sm text-[#E8EAED]">{pt}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <StaggerContainer className="space-y-3">
            {STEPS.map((s) => (
              <motion.div key={s.n} variants={staggerItem} className={`${S.card} p-5 group`}>
                <div className="flex gap-4 items-start">
                  <span className="font-mono text-xs text-[#C41230] mt-1 shrink-0 w-6">{s.n}</span>
                  <div>
                    <h3 className="font-sans font-semibold text-sm text-[#E8EAED] mb-1">{s.title}</h3>
                    <p className="font-sans text-sm text-[#6E7780] leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// How It Works
// ──────────────────────────────────────────────────────────────
const FLOW = [
  { n: "01", icon: MessageSquare, title: "Customer reaches out",       detail: "Via voice, WhatsApp, chat, email, or social." },
  { n: "02", icon: Brain,         title: "VANI understands intent",    detail: "NLU in Arabic and English across all channels." },
  { n: "03", icon: Database,      title: "Retrieves approved knowledge", detail: "Your private, client-isolated knowledge base." },
  { n: "04", icon: Zap,           title: "Responds or collects",       detail: "Instant response or structured info gathering." },
  { n: "05", icon: ShieldAlert,   title: "Detects risk",               detail: "Urgency, sensitivity, compliance signals." },
  { n: "06", icon: Users,         title: "Human handoff",              detail: "Agent receives full context + recommended action." },
  { n: "07", icon: BarChart3,     title: "Analytics & improvement",    detail: "Performance data refines every future interaction." },
];

export function CmdHowItWorks() {
  return (
    <section id="how-it-works" className={S.section}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <ScrollReveal><span className={S.label}>// How It Works</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={S.h2}>Seven steps. Zero context lost.</h2></ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-xl overflow-hidden border border-white/[0.06]">
          {FLOW.map((f, i) => (
            <motion.div
              key={f.n}
              className="bg-[#070B0F] p-5 hover:bg-[#0F1318] transition-colors duration-200 cursor-default"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px 0px" }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <div className="w-9 h-9 rounded bg-[#C41230]/10 flex items-center justify-center mb-3">
                <f.icon size={15} className="text-[#C41230]" />
              </div>
              <div className="font-mono text-xs text-[#C41230]/60 mb-1">{f.n}</div>
              <h3 className="font-sans font-semibold text-sm text-[#E8EAED] mb-1.5">{f.title}</h3>
              <p className="font-sans text-xs text-[#6E7780] leading-relaxed">{f.detail}</p>
            </motion.div>
          ))}
          {/* Empty cell for grid balance on 4-col */}
          <div className="bg-[#070B0F] p-5 hidden lg:flex items-center justify-center">
            <div className="text-center">
              <CheckCircle size={28} className="text-[#C41230]/30 mx-auto mb-2" />
              <p className="font-mono text-xs text-[#4A5260]">Continuously<br />improving</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// AI Agents
// ──────────────────────────────────────────────────────────────
const AGENTS = [
  { name: "Triage Agent",     role: "First contact",          desc: "Receives every inbound inquiry, classifies by channel, language, intent, and urgency within seconds.", hot: true },
  { name: "Knowledge Agent",  role: "Policy retrieval",       desc: "Queries your organization's private knowledge layer to surface accurate, approved information.", hot: false },
  { name: "Response Agent",   role: "Customer communication", desc: "Composes contextually appropriate responses in your organization's tone — Arabic or English, any channel.", hot: false },
  { name: "Compliance Agent", role: "Risk & policy",          desc: "Monitors every response against your defined compliance boundaries before it's sent.", hot: true },
  { name: "Escalation Agent", role: "Human routing",          desc: "Detects when a case exceeds AI confidence or contains sensitive, urgent, or emotionally charged content.", hot: false },
  { name: "Summary Agent",    role: "Context transfer",       desc: "Generates a structured handoff summary for human agents: intent, history, customer sentiment, recommended action.", hot: false },
  { name: "Quality Agent",    role: "Feedback & learning",    desc: "Reviews completed conversations to extract improvement opportunities and help refine the knowledge base.", hot: true },
];

export function CmdAgents() {
  return (
    <section id="ai-team" className={S.sectionAlt}>
      <div className="pointer-events-none absolute top-0 left-0 w-[600px] h-[400px] bg-[#C41230] opacity-[0.03] blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <ScrollReveal><span className={S.label}>// AI Support Team</span></ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className={S.h2}>Seven specialized agents. One seamless system.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className={S.p}>Not a single general-purpose model. A team of AI agents, each with a specific role — working together behind every customer interaction.</p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {AGENTS.map((ag) => (
            <motion.div
              key={ag.name}
              variants={staggerItem}
              className={`${S.card} p-5 group cursor-default relative overflow-hidden`}
            >
              {ag.hot && (
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-[#C41230]">
                  <div className="absolute inset-0 rounded-full bg-[#C41230] animate-ping opacity-50" />
                </div>
              )}
              <div className="font-mono text-[9px] text-[#C41230]/60 tracking-widest uppercase mb-2">{ag.role}</div>
              <h3 className="font-sans font-semibold text-sm text-[#E8EAED] mb-2">{ag.name}</h3>
              <p className="font-sans text-xs text-[#6E7780] leading-relaxed">{ag.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
