"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import {
  Repeat, Clock, MessageSquare, AlertTriangle, TrendingDown, Shield,
  Brain, Database, Zap, ShieldAlert, Users, BarChart3,
  Phone, MessageCircle, Globe, Mail, Share2, Smartphone,
  Landmark, Cross, GraduationCap, Briefcase,
  Lock, Server, ShieldCheck, FileText, Eye, CheckSquare, Settings,
  Globe2, Layers, CheckCircle, ChevronDown, ArrowRight,
} from "lucide-react";

// ── Shared Warm Styles ──────────────────────────────────────────
const W = {
  section:    "section-pad bg-[#FAF9F7] relative overflow-hidden",
  sectionAlt: "section-pad bg-[#F4EDE6] relative overflow-hidden",
  card:       "bg-white rounded-2xl border border-[#E5DDD5] hover:border-[#C4633E]/30 hover:shadow-md transition-all duration-300 cursor-default",
  label:      "text-xs font-sans font-medium tracking-[0.16em] uppercase text-[#C4633E] mb-4 block",
  h2:         "font-sans font-bold text-[clamp(1.9rem,4vw,3rem)] text-[#111111] leading-tight mb-5",
  p:          "font-sans text-base text-[#7A7470] leading-relaxed",
};

// ── Problem ───────────────────────────────────────────────────
const PROBLEMS = [
  { icon: Repeat,        title: "Drowning in repetition",       body: "Your best agents spend most of their day answering the same 20 questions. High-value people stuck in low-value loops." },
  { icon: Clock,         title: "Customers want instant answers",body: "Wait times erode trust. In banking and healthcare, slow response can mean losing a customer permanently." },
  { icon: MessageSquare, title: "Too many disconnected channels",body: "WhatsApp, voice, chat, email — each managed separately. Context gets lost. Cases get duplicated. Revenue leaks." },
  { icon: AlertTriangle, title: "Inconsistent responses",       body: "Regulated industries can't afford agents answering policy questions differently. Inconsistency is a compliance risk." },
  { icon: TrendingDown,  title: "Scaling support is expensive", body: "Adding volume means adding headcount. There's no efficient path to growth under a purely human support model." },
  { icon: Shield,        title: "Escalation without context",   body: "When a complex case finally reaches a human, the agent often has no conversation history or intent signal to act on." },
];

export function WarmProblem() {
  return (
    <section id="problem" className={W.sectionAlt}>
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-[#FDE8DF] opacity-50 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-14">
          <ScrollReveal><span className={W.label}>The Problem</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={W.h2}>Support teams are overwhelmed by volume.</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className={W.p}>Every day, brilliant people answer the same questions while genuinely complex, human-needing cases wait. The problem isn't your team — it's the system.</p></ScrollReveal>
        </div>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROBLEMS.map((p) => (
            <motion.div key={p.title} variants={staggerItem} className={`${W.card} p-6 group`}>
              <div className="w-10 h-10 rounded-xl bg-[#FDE8DF] flex items-center justify-center mb-4 group-hover:bg-[#C4633E]/15 transition-colors duration-300">
                <p.icon size={18} className="text-[#C4633E]" />
              </div>
              <h3 className="font-sans font-semibold text-sm text-[#111111] mb-2">{p.title}</h3>
              <p className="font-sans text-sm text-[#7A7470] leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ── Solution ─────────────────────────────────────────────────
const STEPS = [
  { n: "01", title: "Receives & understands",    body: "Natural language understanding in Arabic and English across voice, messaging, and digital channels." },
  { n: "02", title: "Retrieves approved knowledge", body: "Queries your private knowledge base — your policies, FAQs, procedures — not public training data." },
  { n: "03", title: "Responds or collects",       body: "Handles safe, routine inquiries instantly. Collects structured details before routing when needed." },
  { n: "04", title: "Detects risk & complexity",  body: "Identifies sensitive topics, emotional signals, compliance indicators, and urgency in real time." },
  { n: "05", title: "Escalates with context",     body: "Routes flagged cases to the right human agent with a full conversation summary and recommended action." },
  { n: "06", title: "Learns & improves",          body: "Quality feedback and analytics refine response accuracy, escalation calibration, and team performance." },
];

export function WarmSolution() {
  return (
    <section id="product" className={W.section}>
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#F0EBE4] opacity-60 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal><span className={W.label}>The Solution</span></ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className={W.h2}>VANI is not a chatbot.<br /><span className="text-[#C4633E]">It is an AI Support Team.</span></h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}><p className={`${W.p} mb-6`}>Seven specialized AI agents work together behind every customer interaction — triaging, retrieving, responding, detecting risk, escalating, summarizing, and improving.</p></ScrollReveal>
            <ScrollReveal delay={0.25}><p className={`${W.p} mb-8`}>Your customers get fast, consistent answers. Your team gets context-rich escalations — and time to focus on what truly requires a human touch.</p></ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center gap-2 bg-[#C4633E] hover:bg-[#A8522E] text-white font-sans font-medium text-sm px-5 py-3 rounded-full transition-colors cursor-pointer">
                  Request a Demo <ArrowRight size={14} />
                </button>
                <button onClick={() => document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })} className="font-sans text-sm font-medium text-[#7A7470] hover:text-[#111111] border border-[#E5DDD5] hover:border-[#C4633E]/30 px-5 py-3 rounded-full transition-colors cursor-pointer">
                  See How It Works
                </button>
              </div>
            </ScrollReveal>
          </div>

          <StaggerContainer className="space-y-2">
            {STEPS.map((s) => (
              <motion.div key={s.n} variants={staggerItem} className={`${W.card} p-5 group flex gap-4 items-start`}>
                <span className="w-8 h-8 rounded-full bg-[#FDE8DF] flex items-center justify-center font-sans text-xs font-bold text-[#C4633E] shrink-0 mt-0.5">{s.n}</span>
                <div>
                  <h3 className="font-sans font-semibold text-sm text-[#111111] mb-1">{s.title}</h3>
                  <p className="font-sans text-sm text-[#7A7470] leading-relaxed">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

// ── How It Works ─────────────────────────────────────────────
const FLOW = [
  { n: "1", icon: MessageSquare, title: "Customer reaches out",         detail: "Via voice, WhatsApp, chat, email, or social." },
  { n: "2", icon: Brain,         title: "VANI understands intent",      detail: "Arabic and English across all channels." },
  { n: "3", icon: Database,      title: "Retrieves approved knowledge", detail: "Your private, client-isolated knowledge base." },
  { n: "4", icon: Zap,           title: "Responds or collects",         detail: "Instant response or structured info gathering." },
  { n: "5", icon: ShieldAlert,   title: "Detects risk",                 detail: "Urgency, sensitivity, compliance signals." },
  { n: "6", icon: Users,         title: "Human handoff",                detail: "Agent receives full context + recommended action." },
  { n: "7", icon: BarChart3,     title: "Analytics & improvement",      detail: "Performance data refines every interaction." },
];

export function WarmHowItWorks() {
  return (
    <section id="how-it-works" className={W.sectionAlt}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <ScrollReveal><span className={W.label}>How It Works</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={W.h2}>Simple, clear, and transparent.</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className={W.p}>VANI's workflow is designed to be understandable by your team and your customers. No black boxes.</p></ScrollReveal>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-8 right-8 h-px bg-[#E5DDD5] hidden lg:block" />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FLOW.map((f) => (
              <motion.div key={f.n} variants={staggerItem} className={`${W.card} p-5 relative`}>
                <div className="w-10 h-10 rounded-full bg-[#FDE8DF] flex items-center justify-center mb-4 border-2 border-white shadow-sm">
                  <f.icon size={16} className="text-[#C4633E]" />
                </div>
                <span className="font-sans text-xs font-medium text-[#C4633E] mb-1 block">{f.n}</span>
                <h3 className="font-sans font-semibold text-sm text-[#111111] mb-1.5">{f.title}</h3>
                <p className="font-sans text-xs text-[#7A7470] leading-relaxed">{f.detail}</p>
              </motion.div>
            ))}
            {/* Last cell — always on / improvement summary */}
            <motion.div variants={staggerItem} className="bg-[#C4633E] rounded-2xl p-5 flex flex-col items-center justify-center text-center">
              <CheckCircle size={24} className="text-white/60 mb-3" />
              <p className="font-sans font-semibold text-sm text-white">Always improving</p>
              <p className="font-sans text-xs text-white/70 mt-1 leading-relaxed">Every interaction makes the system smarter</p>
            </motion.div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

// ── AI Agents ────────────────────────────────────────────────
const AGENTS = [
  { name: "Triage Agent",     role: "First contact",        desc: "Receives and classifies every inbound inquiry by channel, language, intent, and urgency.", accent: true },
  { name: "Knowledge Agent",  role: "Policy retrieval",     desc: "Queries your private, approved knowledge base to surface accurate, relevant information.", accent: false },
  { name: "Response Agent",   role: "Communication",        desc: "Composes contextually appropriate responses in your organization's tone, in Arabic or English.", accent: false },
  { name: "Compliance Agent", role: "Risk & policy",        desc: "Reviews every response against your defined compliance boundaries before sending.", accent: true },
  { name: "Escalation Agent", role: "Human routing",        desc: "Detects when a case exceeds AI confidence or contains sensitive, urgent content — then routes immediately.", accent: false },
  { name: "Summary Agent",    role: "Context transfer",     desc: "Generates a structured handoff summary: intent, history, sentiment, recommended action.", accent: false },
  { name: "Quality Agent",    role: "Learning & feedback",  desc: "Reviews completed conversations to identify improvements and refine the knowledge base.", accent: true },
];

export function WarmAgents() {
  return (
    <section id="ai-team" className={W.section}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <ScrollReveal><span className={W.label}>AI Support Team</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={W.h2}>Seven agents. One team. Built for your customers.</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className={W.p}>Not a single chatbot. A team of specialized AI agents, each with a distinct role — working together to give your customers great service and your team clear context.</p></ScrollReveal>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {AGENTS.map((ag) => (
            <motion.div key={ag.name} variants={staggerItem} className={`${W.card} p-5 flex flex-col gap-3`}>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${ag.accent ? "bg-[#C4633E]" : "bg-[#F0EBE4]"}`}>
                <Users size={15} className={ag.accent ? "text-white" : "text-[#7A7470]"} />
              </div>
              <div>
                <p className="font-sans text-[10px] font-medium text-[#C4633E] uppercase tracking-widest mb-1">{ag.role}</p>
                <h3 className="font-sans font-semibold text-sm text-[#111111] mb-1.5">{ag.name}</h3>
                <p className="font-sans text-xs text-[#7A7470] leading-relaxed">{ag.desc}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ── Dashboard ─────────────────────────────────────────────────
export function WarmDashboard() {
  const queue = [
    { name: "Layla M.",   intent: "Appt. Reschedule", ch: "WhatsApp", status: "Resolved",  urgent: false, score: 96 },
    { name: "Ahmed K.",   intent: "Card Block",        ch: "Voice",    status: "Escalated", urgent: true,  score: 72 },
    { name: "Faisal A.",  intent: "Fee Inquiry",       ch: "Chat",     status: "AI Active", urgent: false, score: 91 },
    { name: "Reem N.",    intent: "Complaint",         ch: "Email",    status: "Pending",   urgent: true,  score: 64 },
    { name: "Khalid M.",  intent: "App Login",         ch: "App",      status: "Resolved",  urgent: false, score: 88 },
  ];

  const statusStyle: Record<string, string> = {
    Resolved:  "text-[#22c55e] bg-green-50",
    Escalated: "text-[#C4633E] bg-[#FDE8DF]",
    "AI Active": "text-blue-600 bg-blue-50",
    Pending:   "text-amber-600 bg-amber-50",
  };

  return (
    <section id="dashboard" className={W.sectionAlt}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <ScrollReveal><span className={W.label}>Product Dashboard</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={W.h2}>Full visibility into every conversation.</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className={W.p}>A clean, humane dashboard that shows you what your AI team is doing — and where your human team is needed most.</p></ScrollReveal>
        </div>

        <ScrollReveal delay={0.15}>
          <div className="bg-white rounded-3xl border border-[#E5DDD5] shadow-xl overflow-hidden">
            {/* Chrome */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0EBE4] bg-[#FAF9F7]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#F5A5A5]" />
                <div className="w-3 h-3 rounded-full bg-[#FCCB8C]" />
                <div className="w-3 h-3 rounded-full bg-[#A5D6A7]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                <span className="font-sans text-xs text-[#7A7470]">VANI Support Dashboard · Live</span>
              </div>
              <div className="w-16" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-[#F0EBE4]">
              {[
                { label: "AI Resolved",  value: "247", color: "#22c55e",  note: "+12% today" },
                { label: "Escalated",    value: "12",  color: "#C4633E",  note: "4.6% rate" },
                { label: "Live Queue",   value: "8",   color: "#111111",  note: "In progress" },
                { label: "Avg. Time",    value: "1.4s", color: "#22c55e", note: "↓ 18%" },
              ].map((m) => (
                <div key={m.label} className="px-6 py-4 border-r border-[#F0EBE4] last:border-0">
                  <p className="font-sans text-xs text-[#B0A89E] mb-1">{m.label}</p>
                  <p className="font-sans font-bold text-2xl mb-0.5" style={{ color: m.color }}>{m.value}</p>
                  <p className="font-sans text-[10px] text-[#B0A89E]">{m.note}</p>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px]">
                <thead>
                  <tr className="border-b border-[#F0EBE4]">
                    {["", "Customer", "Intent", "Channel", "Confidence", "Status"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left font-sans text-xs text-[#B0A89E] font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {queue.map((row, i) => (
                    <motion.tr
                      key={i}
                      className="border-b border-[#FAF9F7] hover:bg-[#FAF9F7] transition-colors duration-150"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 + 0.2 }}
                    >
                      <td className="pl-4 py-3.5 pr-2">
                        {row.urgent && <div className="w-2 h-2 rounded-full bg-[#C4633E]" />}
                        {!row.urgent && <div className="w-2 h-2 rounded-full bg-[#E5DDD5]" />}
                      </td>
                      <td className="px-3 py-3.5 font-sans text-sm font-medium text-[#111111]">{row.name}</td>
                      <td className="px-3 py-3.5 font-sans text-xs text-[#7A7470]">{row.intent}</td>
                      <td className="px-3 py-3.5 font-sans text-xs text-[#7A7470]">{row.ch}</td>
                      <td className="px-3 py-3.5">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 bg-[#F0EBE4] rounded-full overflow-hidden max-w-[50px]">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ backgroundColor: row.score >= 85 ? "#22c55e" : row.score >= 70 ? "#f59e0b" : "#C4633E" }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${row.score}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 + 0.4, duration: 0.6 }}
                            />
                          </div>
                          <span className="font-sans text-xs text-[#7A7470]">{row.score}%</span>
                        </div>
                      </td>
                      <td className="px-3 py-3.5">
                        <span className={`font-sans text-[10px] font-medium px-2.5 py-1 rounded-full ${statusStyle[row.status]}`}>
                          {row.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── Simulation ────────────────────────────────────────────────
const SCENARIOS = [
  {
    id: "hospital", label: "Hospital Appointment", icon: "🏥", channel: "WhatsApp",
    customerMsg: "Hi, I'd like to reschedule my appointment with Dr. Khalid for next week if possible.",
    thinking: "Intent → appointment reschedule → checking schedule availability policy...",
    vaniReply: "Hello Layla! I can see your appointment with Dr. Khalid on Tuesday at 10am. I have openings on Wednesday at 2pm or Thursday at 11am — which works better for you?",
    escalation: false, source: "Appointments Policy v2.4", confidence: 96,
  },
  {
    id: "bank", label: "Bank Card Issue", icon: "🏦", channel: "Mobile App",
    customerMsg: "My card was declined at the ATM just now. I need help urgently — I'm traveling.",
    thinking: "Intent → card declined + urgent travel context → escalation flag: financial urgency + travel",
    vaniReply: "I understand this is urgent, especially while you're traveling. I'm flagging this for immediate agent review and will connect you to Priority Banking Support. Can you confirm your card's last 4 digits?",
    escalation: true, escalationReason: "Financial urgency + travel context. Routing to Priority Banking Support.", source: "Card Services Policy v1.9", confidence: 72,
  },
  {
    id: "school", label: "School Admissions", icon: "🎓", channel: "Website Chat",
    customerMsg: "Hello, what are the admission requirements for Grade 7 and are there seats available?",
    thinking: "Intent → admissions, Grade 7, seat availability → retrieving admissions guide...",
    vaniReply: "Hello! Grade 7 admissions require recent grade transcripts, a birth certificate, and a completed registration form. Seats for the coming year are available — would you like me to send the registration link or connect you with the admissions coordinator?",
    escalation: false, source: "Admissions Guide 2025-26", confidence: 91,
  },
  {
    id: "complaint", label: "Social Complaint", icon: "📱", channel: "Social Media",
    customerMsg: "This is unacceptable — I've been waiting 3 weeks with no callback.",
    thinking: "Intent → escalated complaint + high frustration signal + unresolved duration → escalation: emotional distress",
    vaniReply: "I'm genuinely sorry — 3 weeks without follow-up is unacceptable and I understand your frustration completely. I'm escalating this to a Priority Resolution Agent who will contact you within 2 hours. Can you share your complaint reference number?",
    escalation: true, escalationReason: "High emotional distress + prolonged unresolved complaint. Routing to Customer Resolution Team.", source: "Complaint Handling Policy v3.1", confidence: 68,
  },
];

export function WarmSimulation() {
  const [active, setActive] = useState(0);
  const [step, setStep]     = useState<"idle" | "customer" | "thinking" | "response" | "done">("idle");
  const sc = SCENARIOS[active];

  const run = async () => {
    setStep("customer");
    await new Promise((r) => setTimeout(r, 900));
    setStep("thinking");
    await new Promise((r) => setTimeout(r, 1500));
    setStep("response");
    await new Promise((r) => setTimeout(r, 1000));
    setStep("done");
  };

  return (
    <section id="simulation" className={W.section}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <ScrollReveal><span className={W.label}>Simulation</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={W.h2}>See VANI handle real situations.</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className={W.p}>Pick a scenario and see how VANI would respond — including the escalation decision and human handoff.</p></ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-6">
          {/* Scenario picker */}
          <div className="flex flex-col gap-2">
            {SCENARIOS.map((s, i) => (
              <button
                key={s.id}
                onClick={() => { setActive(i); setStep("idle"); }}
                className={`text-left px-4 py-3.5 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                  active === i
                    ? "border-[#C4633E] bg-[#FDE8DF]"
                    : "border-[#E5DDD5] bg-white hover:border-[#C4633E]/30"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <p className={`font-sans font-semibold text-sm ${active === i ? "text-[#C4633E]" : "text-[#111111]"}`}>{s.label}</p>
                    <p className="font-sans text-xs text-[#7A7470] mt-0.5">{s.channel}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Chat window */}
          <div className="bg-white rounded-3xl border-2 border-[#E5DDD5] overflow-hidden shadow-sm">
            {/* Chrome */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#F0EBE4] bg-[#FAF9F7]">
              <span className="font-sans text-sm font-medium text-[#111111]">{sc.label}</span>
              <span className="font-sans text-xs text-[#B0A89E]">{sc.channel}</span>
            </div>

            <div className="p-5 min-h-[360px] flex flex-col gap-4">
              {/* Customer */}
              <AnimatePresence>
                {(step !== "idle") && (
                  <motion.div className="flex justify-end" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                    <div className="max-w-xs bg-[#111111] rounded-2xl rounded-br-sm px-4 py-3">
                      <p className="font-sans text-sm text-white leading-relaxed">{sc.customerMsg}</p>
                      <p className="font-sans text-[10px] text-white/40 mt-1.5 text-right">Customer</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Thinking */}
              <AnimatePresence>
                {(step === "thinking" || step === "response" || step === "done") && (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="self-start max-w-sm">
                    <div className="bg-[#FAF9F7] border border-[#E5DDD5] rounded-2xl rounded-bl-sm px-4 py-3">
                      <div className="flex items-center gap-2 mb-1.5">
                        <motion.div className="w-2 h-2 rounded-full bg-[#C4633E]" animate={{ opacity: [1,0.3,1] }} transition={{ repeat: Infinity, duration: 0.8 }} />
                        <span className="font-sans text-xs font-medium text-[#C4633E]">VANI is thinking…</span>
                      </div>
                      <p className="font-sans text-xs text-[#7A7470] leading-relaxed">{sc.thinking}</p>
                      <p className="font-sans text-[10px] text-[#B0A89E] mt-1.5">Source: {sc.source}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Response */}
              <AnimatePresence>
                {(step === "response" || step === "done") && (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="self-start max-w-sm">
                    <div className="bg-[#FDE8DF] border border-[#C4633E]/20 rounded-2xl rounded-bl-sm px-4 py-3">
                      <p className="font-sans text-sm text-[#111111] leading-relaxed mb-2">{sc.vaniReply}</p>
                      <div className="flex items-center justify-between">
                        <p className="font-sans text-[10px] text-[#C4633E]">VANI · {sc.confidence}% confidence</p>
                        <CheckCircle size={11} className="text-[#C4633E]" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Outcome */}
              <AnimatePresence>
                {step === "done" && (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                    className={`rounded-2xl px-4 py-3 border-2 ${sc.escalation ? "border-[#C4633E]/30 bg-[#FDE8DF]" : "border-green-200 bg-green-50"}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {sc.escalation ? <ArrowRight size={14} className="text-[#C4633E]" /> : <CheckCircle size={14} className="text-[#22c55e]" />}
                      <span className={`font-sans text-xs font-semibold ${sc.escalation ? "text-[#C4633E]" : "text-[#22c55e]"}`}>
                        {sc.escalation ? "Escalated to Human Agent" : "Resolved by AI"}
                      </span>
                    </div>
                    {sc.escalation && "escalationReason" in sc && (
                      <p className="font-sans text-xs text-[#7A7470] leading-relaxed">{sc.escalationReason}</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Control */}
              <div className="mt-auto">
                {step === "idle" && (
                  <button onClick={run} className="bg-[#C4633E] hover:bg-[#A8522E] text-white font-sans font-medium text-sm px-5 py-2.5 rounded-full transition-colors cursor-pointer">
                    Run Simulation
                  </button>
                )}
                {step === "done" && (
                  <button onClick={() => setStep("idle")} className="border-2 border-[#E5DDD5] hover:border-[#C4633E]/30 text-[#7A7470] font-sans font-medium text-sm px-5 py-2.5 rounded-full transition-colors cursor-pointer">
                    Reset
                  </button>
                )}
                {(step === "customer" || step === "thinking" || step === "response") && (
                  <div className="flex items-center gap-2 text-[#B0A89E]">
                    <motion.div className="w-2 h-2 rounded-full bg-[#C4633E]" animate={{ opacity: [1,0.3,1] }} transition={{ repeat: Infinity, duration: 0.8 }} />
                    <span className="font-sans text-sm">Processing…</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Channels ─────────────────────────────────────────────────
const CHANNELS_DATA = [
  { icon: Phone,         label: "Voice Calls",    desc: "AI-powered inbound and outbound call handling with real-time transcription and intent detection." },
  { icon: MessageCircle, label: "WhatsApp",        desc: "Full conversational support via the region's most-used messaging platform." },
  { icon: Globe,         label: "Website Chat",   desc: "Live chat embedded on your site with intelligent routing and seamless human handoff." },
  { icon: Mail,          label: "Email",           desc: "Automatic triage, response drafting, and escalation for high-volume inboxes." },
  { icon: Share2,        label: "Social Media",   desc: "Monitor and respond to DMs and mentions with consistent, policy-accurate messaging." },
  { icon: Smartphone,    label: "Mobile App",     desc: "In-app support chat with access to customer context and account history." },
];

export function WarmChannels() {
  return (
    <section id="channels" className={W.sectionAlt}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <ScrollReveal><span className={W.label}>Channels</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={W.h2}>Meet your customers where they are.</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className={W.p}>VANI works across all channels your customers already use — with the same friendly, consistent experience everywhere.</p></ScrollReveal>
        </div>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CHANNELS_DATA.map((ch) => (
            <motion.div key={ch.label} variants={staggerItem} className={`${W.card} p-6 group`}>
              <div className="w-11 h-11 rounded-2xl bg-[#FDE8DF] group-hover:bg-[#C4633E]/15 flex items-center justify-center mb-4 transition-colors duration-300">
                <ch.icon size={20} className="text-[#C4633E]" />
              </div>
              <h3 className="font-sans font-semibold text-sm text-[#111111] mb-2">{ch.label}</h3>
              <p className="font-sans text-sm text-[#7A7470] leading-relaxed">{ch.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
        <ScrollReveal delay={0.3} className="mt-10 text-center">
          <p className="font-sans text-sm text-[#B0A89E]">All channels · One knowledge base · Unified context</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── Industries ────────────────────────────────────────────────
const INDUSTRIES = [
  { icon: Landmark,      label: "Banks & Financial Services", desc: "Card guidance, product FAQs, complaint routing, fraud reporting, and sensitive-case escalation." },
  { icon: Cross,         label: "Hospitals & Healthcare",     desc: "Appointment booking, clinic info, insurance guidance, lab instructions, and emergency routing." },
  { icon: GraduationCap, label: "Schools & Universities",     desc: "Admissions, schedules, fees, registration, parent and student support across all channels." },
  { icon: Briefcase,     label: "Enterprise Support Teams",   desc: "FAQ automation, order status, complaint routing, social response, and internal agent assist." },
];

export function WarmIndustries() {
  return (
    <section id="industries" className={W.section}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <ScrollReveal><span className={W.label}>Industries</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={W.h2}>Built for organizations people trust.</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className={W.p}>VANI is designed for sectors where customer trust is foundational — and where the stakes of poor support are high.</p></ScrollReveal>
        </div>
        <StaggerContainer className="grid sm:grid-cols-2 gap-5">
          {INDUSTRIES.map((ind) => (
            <motion.div key={ind.label} variants={staggerItem} className={`${W.card} p-6 group flex gap-5 items-start`}>
              <div className="w-12 h-12 rounded-2xl bg-[#FDE8DF] group-hover:bg-[#C4633E]/15 flex items-center justify-center shrink-0 transition-colors duration-300">
                <ind.icon size={20} className="text-[#C4633E]" />
              </div>
              <div>
                <h3 className="font-sans font-semibold text-base text-[#111111] mb-2">{ind.label}</h3>
                <p className="font-sans text-sm text-[#7A7470] leading-relaxed">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ── Security ─────────────────────────────────────────────────
const SEC = [
  { icon: Lock,        title: "Private knowledge layer",         detail: "Your knowledge base is isolated and used only to answer your customers." },
  { icon: Server,      title: "Client-level data isolation",     detail: "Each organization operates in a dedicated, isolated environment. No data commingling." },
  { icon: ShieldCheck, title: "Encryption in transit & at rest", detail: "All data encrypted using industry-standard protocols at every stage." },
  { icon: Users,       title: "Role-based access control",       detail: "Granular permissions for agents, supervisors, compliance reviewers, and administrators." },
  { icon: FileText,    title: "Audit logs",                      detail: "Complete logs for every AI action, human escalation, and system event." },
  { icon: Eye,         title: "PII/PHI-aware workflows",         detail: "Sensitive identifiers masked in logs. Healthcare workflows recognize PHI and handle accordingly." },
  { icon: CheckSquare, title: "Human approval workflows",        detail: "Require human review before any knowledge update or policy change is published." },
  { icon: Settings,    title: "Configurable data retention",     detail: "Set your own retention windows. Request complete deletion at any time." },
];

export function WarmSecurity() {
  return (
    <section id="security" className={W.sectionAlt}>
      <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#FDE8DF] opacity-40 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <ScrollReveal><span className={W.label}>Security & Privacy</span></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className={W.h2}>Your data answers your customers. Not anyone else's.</h2></ScrollReveal>
            <ScrollReveal delay={0.2}><p className={`${W.p} mb-8`}>Designed with security-conscious and compliance-aware enterprise workflows for financial services and healthcare environments.</p></ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="bg-white rounded-2xl border-2 border-[#E5DDD5] p-6">
                <p className="font-sans text-base text-[#111111] italic leading-relaxed mb-5">
                  "Your data is used to answer your customers, not to train a public model."
                </p>
                {["Client-isolated knowledge base", "No data commingling between clients", "Private deployment and integration review"].map((pt) => (
                  <div key={pt} className="flex items-center gap-2.5 py-2 border-b border-[#F0EBE4] last:border-0">
                    <CheckCircle size={14} className="text-[#C4633E] shrink-0" />
                    <span className="font-sans text-sm text-[#7A7470]">{pt}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          <StaggerContainer className="grid sm:grid-cols-2 gap-4">
            {SEC.map((f) => (
              <motion.div key={f.title} variants={staggerItem} className={`${W.card} p-5`}>
                <div className="w-9 h-9 rounded-xl bg-[#FDE8DF] flex items-center justify-center mb-3">
                  <f.icon size={15} className="text-[#C4633E]" />
                </div>
                <h3 className="font-sans font-semibold text-xs text-[#111111] mb-1.5">{f.title}</h3>
                <p className="font-sans text-xs text-[#7A7470] leading-relaxed">{f.detail}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

// ── Why VANI ─────────────────────────────────────────────────
const WHY = [
  { icon: Globe2,    title: "Arabic-first. English-ready.",      detail: "Native Arabic understanding across all channels — built for the Gulf market." },
  { icon: Users,     title: "Human always in the loop",          detail: "Sensitive, complex, and revenue-impacting cases always reach a real person." },
  { icon: Layers,    title: "Truly omnichannel",                 detail: "One system across all channels. Unified context — no silos, no repeated questions." },
  { icon: ShieldCheck, title: "Regulation-aware architecture",   detail: "Built alongside financial services and healthcare compliance requirements." },
  { icon: Zap,       title: "Not a generic chatbot",             detail: "Seven specialized agents working as a team — not a single general-purpose model." },
  { icon: BarChart3, title: "Full performance visibility",       detail: "Real-time dashboards tracking resolution, escalation accuracy, and response time." },
];

export function WarmWhyVani() {
  return (
    <section id="why-vani" className={W.section}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <ScrollReveal><span className={W.label}>Why VANI</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={W.h2}>Support that keeps the human touch.</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className={W.p}>VANI isn't here to replace your team. It's here to give them the time and clarity to do what they do best.</p></ScrollReveal>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {WHY.map((w) => (
            <motion.div key={w.title} variants={staggerItem} className={`${W.card} p-6 group`}>
              <div className="w-10 h-10 rounded-2xl bg-[#FDE8DF] group-hover:bg-[#C4633E]/15 flex items-center justify-center mb-4 transition-colors duration-300">
                <w.icon size={17} className="text-[#C4633E]" />
              </div>
              <h3 className="font-sans font-semibold text-sm text-[#111111] mb-2">{w.title}</h3>
              <p className="font-sans text-sm text-[#7A7470] leading-relaxed">{w.detail}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="bg-[#111111] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-80 h-56 bg-[#C4633E] opacity-15 blur-[80px] rounded-full" />
            <div className="relative z-10">
              <p className="font-sans font-bold text-[clamp(1.6rem,3.5vw,2.5rem)] text-white leading-snug mb-4">
                AI handles repetition.<br /><span className="text-[#C4633E]">Humans handle excellence.</span>
              </p>
              <p className="font-sans text-base text-white/60 mb-8 max-w-xl mx-auto">VANI is your first line of support — resolving what it can, and making sure what it can't reaches the right person with everything they need.</p>
              <button onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })} className="font-sans font-medium text-sm text-[#111111] bg-white hover:bg-[#F0EBE4] px-6 py-3 rounded-full transition-colors cursor-pointer">
                Request a Demo
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── Pricing ──────────────────────────────────────────────────
const TIERS = [
  {
    name: "Pilot",
    tagline: "Validate before you scale.",
    desc: "Start with selected channels and use cases. Confirm AI performance and team fit before expanding.",
    features: ["Selected channel deployment", "Knowledge base setup & onboarding", "Dashboard & analytics preview", "Human handoff workflows", "Basic escalation rules", "Pilot review session"],
    cta: "Request Demo", hot: false,
  },
  {
    name: "Growth",
    tagline: "Scale across your organization.",
    desc: "Deploy across multiple channels and teams with advanced analytics and escalation control.",
    features: ["Multi-channel deployment", "Advanced analytics & reporting", "Custom escalation & routing", "Team workflow configuration", "Quality review tooling", "Dedicated onboarding support"],
    cta: "Talk to Sales", hot: true,
  },
  {
    name: "Enterprise",
    tagline: "For regulated, high-volume operations.",
    desc: "Full security review, compliance workflows, and custom integrations for banks, hospitals, and enterprise teams.",
    features: ["Security & compliance review", "PHI/PII-aware workflows", "Advanced role-based access", "CRM & ticketing integration", "Full audit log infrastructure", "Dedicated account management"],
    cta: "Talk to Sales", hot: false,
  },
];

export function WarmPricing() {
  return (
    <section id="pricing" className={W.sectionAlt}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <ScrollReveal><span className={W.label}>Engagement</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={W.h2}>Start where it makes sense for you.</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className={W.p}>Three engagement models — built around how enterprise AI actually gets adopted, not how SaaS subscriptions work.</p></ScrollReveal>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              className={`${W.card} p-6 flex flex-col relative ${t.hot ? "border-[#C4633E]/40 shadow-lg" : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
            >
              {t.hot && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C4633E] text-white font-sans text-xs font-medium px-4 py-1 rounded-full">
                  Recommended
                </div>
              )}
              <div className="mb-5">
                <span className="font-sans text-sm font-medium text-[#C4633E] block mb-2">{t.name}</span>
                <h3 className="font-sans font-bold text-lg text-[#111111] mb-2">{t.tagline}</h3>
                <p className="font-sans text-sm text-[#7A7470] leading-relaxed">{t.desc}</p>
              </div>
              <div className="space-y-2.5 mb-6 flex-1">
                {t.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <CheckCircle size={13} className="text-[#C4633E] shrink-0" />
                    <span className="font-sans text-sm text-[#7A7470]">{f}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-3 rounded-full font-sans font-medium text-sm transition-colors cursor-pointer ${t.hot ? "bg-[#C4633E] hover:bg-[#A8522E] text-white" : "border-2 border-[#E5DDD5] hover:border-[#C4633E]/30 text-[#111111]"}`}
              >
                {t.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────
const FAQS = [
  { q: "Does VANI replace human support agents?", a: "No. VANI handles repetitive, high-volume inquiries so your human agents can focus on complex, sensitive, and revenue-impacting cases. The goal is to reduce repetition burden — not replace people." },
  { q: "How does VANI handle sensitive cases?", a: "VANI's Escalation Agent monitors for urgency, emotional distress, compliance indicators, and low confidence. When any threshold is crossed, the case is immediately routed to a human agent with a full summary and context." },
  { q: "Can VANI work with calls and WhatsApp?", a: "Yes. VANI supports voice calls, WhatsApp, website chat, email, social media, and mobile app support — all from one system." },
  { q: "Can VANI support Arabic and English?", a: "Yes. VANI is built Arabic-first with strong English support. Both languages are handled natively across all channels." },
  { q: "Does VANI train on our private data?", a: "No. Your knowledge base and conversation data are never used to train shared or public models. Your data is used exclusively to serve your customers in your isolated environment." },
  { q: "Is VANI suitable for banks and hospitals?", a: "VANI was designed with these sectors in mind — compliance-aware workflows, PHI-aware data handling, audit logging, human approval workflows, and sensitive-case routing are all built in." },
  { q: "Can VANI integrate with our CRM?", a: "Yes. VANI supports integration with major CRM and ticketing platforms. Scope and depth are reviewed during onboarding." },
  { q: "What happens when the AI isn't confident?", a: "VANI has a configurable confidence threshold. When it drops below your defined level, the case routes automatically to a human agent with full context — before the customer notices any decline in quality." },
];

export function WarmFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className={W.section}>
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <ScrollReveal><span className={W.label}>FAQ</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={W.h2}>Questions we hear a lot.</h2></ScrollReveal>
        </div>
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              className={`${W.card} overflow-hidden ${open === i ? "border-[#C4633E]/30" : ""}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer">
                <span className="font-sans font-medium text-sm text-[#111111] pr-4">{faq.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={16} className="text-[#B0A89E] shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <div className="px-5 pb-5 border-t border-[#F0EBE4]">
                      <p className="font-sans text-sm text-[#7A7470] leading-relaxed pt-3">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Final CTA ─────────────────────────────────────────────────
export function WarmFinalCTA() {
  return (
    <section id="demo" className={W.sectionAlt}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#FDE8DF] opacity-60 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-[#F0EBE4] opacity-80 blur-3xl" />
      </div>
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <div className="w-14 h-14 rounded-2xl bg-[#C4633E] flex items-center justify-center mx-auto mb-8">
            <svg width="18" height="16" viewBox="0 0 28 20" fill="none" aria-hidden>
              <rect x="6" y="0" width="4" height="20" rx="2" fill="white"/>
              <rect x="18" y="0" width="4" height="20" rx="2" fill="white"/>
              <rect x="12" y="3" width="4" height="14" rx="2" fill="white" opacity="0.7"/>
            </svg>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-sans font-bold text-[clamp(2rem,5vw,3.8rem)] text-[#111111] leading-tight mb-6">
            See how VANI would handle your support volume.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-sans text-lg text-[#7A7470] leading-relaxed mb-10 max-w-xl mx-auto">
            A 30-minute session is enough to show you exactly how VANI would work within your team, channels, and compliance requirements — before any commitment.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#2A2520] text-white font-sans font-medium px-7 py-4 rounded-full transition-colors cursor-pointer">
              Request a Demo <ArrowRight size={16} />
            </button>
            <button onClick={() => document.querySelector("#simulation")?.scrollIntoView({ behavior: "smooth" })} className="border-2 border-[#E5DDD5] hover:border-[#C4633E]/30 text-[#3A3530] font-sans font-medium px-7 py-4 rounded-full transition-colors cursor-pointer">
              Try Simulation
            </button>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-6 font-sans text-sm text-[#B0A89E]">
            <a href="mailto:hello@vani.ai" className="hover:text-[#7A7470] transition-colors">hello@vani.ai</a>
            <span className="w-px h-4 bg-[#E5DDD5]" />
            <button onClick={() => document.querySelector("#simulation")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#7A7470] transition-colors cursor-pointer">Book a Consultation</button>
            <span className="w-px h-4 bg-[#E5DDD5]" />
            <button onClick={() => document.querySelector("#simulation")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#7A7470] transition-colors cursor-pointer">Talk to Sales</button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────
export function WarmFooter() {
  return (
    <footer className="bg-[#111111] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#C4633E] flex items-center justify-center">
                <svg width="13" height="11" viewBox="0 0 28 20" fill="none" aria-hidden>
                  <rect x="6" y="0" width="4" height="20" rx="2" fill="white"/>
                  <rect x="18" y="0" width="4" height="20" rx="2" fill="white"/>
                  <rect x="12" y="3" width="4" height="14" rx="2" fill="white" opacity="0.7"/>
                </svg>
              </div>
              <span className="font-sans font-bold text-lg text-white">V<span className="text-[#C4633E]">AI</span>NI</span>
            </div>
            <p className="font-sans text-xs text-white/40 leading-relaxed mb-4">Enterprise AI Support Team for customer service — voice, messages, and digital channels.</p>
          </div>
          {[
            { g: "Product",    l: ["How It Works", "AI Agents", "Dashboard", "Simulation"] },
            { g: "Industries", l: ["Banks", "Hospitals", "Schools", "Enterprise"] },
            { g: "Company",    l: ["About", "Security", "Privacy", "Contact"] },
          ].map(({ g, l }) => (
            <div key={g}>
              <p className="font-sans text-xs font-medium text-white/40 uppercase tracking-widest mb-4">{g}</p>
              <ul className="space-y-2">
                {l.map((link) => <li key={link}><a href="#" className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors">{link}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] text-white/20">© {new Date().getFullYear()} VANI. All rights reserved.</p>
          <p className="font-sans text-[10px] text-white/20">Designed with security-conscious and compliance-aware enterprise workflows.</p>
        </div>
      </div>
    </footer>
  );
}
