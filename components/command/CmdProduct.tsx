"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import {
  Phone, MessageCircle, Globe, Mail, Share2, Smartphone,
  Landmark, Cross, GraduationCap, Briefcase,
  ChevronRight, AlertCircle, CheckCircle, Clock,
} from "lucide-react";

const S = {
  section:    "section-pad bg-[#070B0F] relative overflow-hidden",
  sectionAlt: "section-pad bg-[#0B0F14] relative overflow-hidden",
  card:       "bg-[#0F1318] border border-white/[0.06] hover:border-[#C41230]/30 rounded-xl transition-all duration-300",
  label:      "text-[10px] font-mono tracking-[0.22em] uppercase text-[#C41230] mb-4 block",
  h2:         "font-sans font-bold text-[clamp(1.8rem,4vw,3rem)] text-[#E8EAED] leading-tight mb-5",
  p:          "font-sans text-base text-[#6E7780] leading-relaxed",
};

// ──────────────────────────────────────────────────────────────
// Command Center Dashboard
// ──────────────────────────────────────────────────────────────
const QUEUE = [
  { name: "Ahmed K.",  intent: "Card Block",    ch: "voice",    urgent: true,  status: "Escalated",  time: "0:42", score: 72 },
  { name: "Sara M.",   intent: "Appt. Book",    ch: "whatsapp", urgent: false, status: "Resolved",   time: "1:12", score: 96 },
  { name: "Faisal A.", intent: "Fee Inquiry",   ch: "chat",     urgent: false, status: "AI Active",  time: "2:01", score: 91 },
  { name: "Reem N.",   intent: "Complaint",     ch: "email",    urgent: true,  status: "Pending",    time: "4:30", score: 64 },
  { name: "Khalid M.", intent: "App Login",     ch: "app",      urgent: false, status: "Resolved",   time: "0:58", score: 88 },
];

const STATUS_STYLE: Record<string, string> = {
  Escalated: "text-[#C41230] bg-[#C41230]/10",
  Resolved:  "text-[#22c55e] bg-[#22c55e]/10",
  "AI Active": "text-blue-400 bg-blue-400/10",
  Pending:   "text-amber-400 bg-amber-400/10",
};

const CH_ICON: Record<string, React.ElementType> = {
  voice: Phone, whatsapp: MessageCircle, chat: Globe, email: Mail, app: Smartphone,
};

export function CmdDashboard() {
  return (
    <section id="dashboard" className={S.sectionAlt}>
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <ScrollReveal><span className={S.label}>// Live Dashboard</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={S.h2}>Full visibility. Every conversation.</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className={S.p}>Real-time queue management, AI confidence scoring, and escalation intelligence — all in one operations view.</p></ScrollReveal>
        </div>

        <ScrollReveal delay={0.1}>
          <div className="rounded-2xl overflow-hidden border border-white/[0.06] bg-[#070B0F]">
            {/* Chrome bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] bg-[#0B0F14]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#C41230]/50" />
                <div className="w-3 h-3 rounded-full bg-amber-400/40" />
                <div className="w-3 h-3 rounded-full bg-[#22c55e]/40" />
              </div>
              <div className="flex items-center gap-2">
                <motion.span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" animate={{ opacity: [1,0.3,1] }} transition={{ repeat: Infinity, duration: 2 }} />
                <span className="font-mono text-[10px] text-[#4A5260] tracking-wider">VANI OPERATIONS · LIVE</span>
              </div>
              <div className="font-mono text-[10px] text-[#4A5260]">v2.4.1</div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.04]">
              {[
                { label: "AI Resolved",  value: "247", delta: "+12%",  color: "#22c55e" },
                { label: "Escalated",    value: "12",  delta: "4.6%",  color: "#C41230" },
                { label: "Live Queue",   value: "8",   delta: "live",  color: "#E8EAED" },
                { label: "Avg. Time",    value: "1.4s", delta: "↓18%", color: "#22c55e" },
              ].map((m) => (
                <div key={m.label} className="bg-[#0B0F14] px-5 py-4">
                  <p className="font-mono text-[9px] text-[#4A5260] uppercase tracking-widest mb-1">{m.label}</p>
                  <p className="font-sans font-bold text-xl" style={{ color: m.color }}>{m.value}</p>
                  <p className="font-mono text-[9px] text-[#4A5260] mt-1">{m.delta}</p>
                </div>
              ))}
            </div>

            {/* Queue table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/[0.04]">
                    {["", "Customer", "Intent", "Channel", "Confidence", "Status", "Time"].map((h) => (
                      <th key={h} className="px-4 py-2.5 text-left font-mono text-[9px] text-[#4A5260] uppercase tracking-widest">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {QUEUE.map((row, i) => {
                    const Icon = CH_ICON[row.ch] ?? Phone;
                    return (
                      <motion.tr
                        key={i}
                        className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors duration-150"
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 + 0.2 }}
                      >
                        <td className="px-4 py-3">
                          {row.urgent
                            ? <AlertCircle size={13} className="text-[#C41230]" />
                            : <div className="w-3 h-3 rounded-full bg-white/[0.06]" />}
                        </td>
                        <td className="px-4 py-3 font-sans text-sm font-medium text-[#E8EAED]">{row.name}</td>
                        <td className="px-4 py-3 font-sans text-xs text-[#6E7780]">{row.intent}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <Icon size={11} className="text-[#4A5260]" />
                            <span className="font-mono text-[10px] text-[#4A5260] capitalize">{row.ch}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1 bg-white/[0.06] rounded-full overflow-hidden max-w-[60px]">
                              <motion.div
                                className="h-full rounded-full"
                                style={{ backgroundColor: row.score >= 85 ? "#22c55e" : row.score >= 70 ? "#f59e0b" : "#C41230" }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${row.score}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.5, duration: 0.6 }}
                              />
                            </div>
                            <span className="font-mono text-[10px] text-[#4A5260]">{row.score}%</span>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`font-mono text-[9px] font-medium px-2 py-1 rounded ${STATUS_STYLE[row.status]}`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-mono text-[10px] text-[#4A5260]">{row.time}</td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Channel bar */}
            <div className="px-5 py-4 border-t border-white/[0.04]">
              <p className="font-mono text-[9px] text-[#4A5260] uppercase tracking-widest mb-3">Channel volume today</p>
              <div className="flex items-end gap-2 h-10">
                {[
                  { ch: "WhatsApp", pct: 72 },
                  { ch: "Voice",    pct: 55 },
                  { ch: "Chat",     pct: 38 },
                  { ch: "Email",    pct: 24 },
                  { ch: "Social",   pct: 18 },
                  { ch: "App",      pct: 12 },
                ].map((b, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 flex-1">
                    <motion.div
                      className="w-full rounded-sm bg-[#C41230]/60"
                      style={{ originY: 1 }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.07, duration: 0.5, ease: "easeOut" }}
                      {...({ style: { height: `${b.pct}%`, originY: 1 } } as any)}
                    />
                    <span className="font-mono text-[7px] text-[#4A5260] truncate w-full text-center">{b.ch}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// Simulation
// ──────────────────────────────────────────────────────────────
const SCENARIOS = [
  {
    id: "hospital",
    label: "Hospital Appointment",
    icon: "🏥",
    customerMsg: "Hi, I need to book an appointment with an internist as soon as possible.",
    thinking: "Intent → appointment request, internal medicine → checking availability policy...",
    vaniReply: "Hello! I'd be happy to help schedule that. Do you have a preference for this week or next? I can also guide you to book directly through our app if you're registered.",
    escalation: false,
    source: "Appointments Policy v2.4 — Internal Medicine",
    confidence: 94,
    channel: "WhatsApp",
  },
  {
    id: "bank",
    label: "Bank Card Block",
    icon: "🏦",
    customerMsg: "My debit card was just declined at an ATM. I need urgent help — I'm traveling.",
    thinking: "Intent → card decline, urgent context detected (traveler) → card policy check → ESCALATE: financial urgency + travel flag",
    vaniReply: "I understand this is urgent, especially while traveling. I'm reviewing the card verification steps and flagging this conversation for immediate agent review. Can you confirm the last 4 digits of your card?",
    escalation: true,
    escalationReason: "Financial urgency + travel context detected. Routing to Priority Banking Support.",
    source: "Card Services Policy — Blocked/Declined Cards v1.9",
    confidence: 72,
    channel: "Mobile App",
  },
  {
    id: "school",
    label: "School Admissions",
    icon: "🎓",
    customerMsg: "Hi, I'd like to know the requirements for admission to Grade 7 and whether seats are available.",
    thinking: "Intent → admissions inquiry, Grade 7, seat availability → retrieving admissions policy...",
    vaniReply: "Hello! Grade 7 admission typically requires recent grade transcripts, a birth certificate copy, and a completed registration form. Seats for the coming year are currently available — I can send you the registration link or connect you with the admissions coordinator.",
    escalation: false,
    source: "Admissions Guide 2025-26 — Grade 7 Requirements",
    confidence: 91,
    channel: "Website Chat",
  },
  {
    id: "complaint",
    label: "Social Complaint",
    icon: "📱",
    customerMsg: "This is unacceptable. I've been waiting 3 weeks for a resolution and no one has called me back.",
    thinking: "Intent → escalated complaint, high frustration signal, unresolved case → ESCALATE: emotional distress + prolonged unresolved complaint",
    vaniReply: "I sincerely apologize for the delay — three weeks without follow-up is unacceptable and I understand your frustration. I'm immediately escalating this to a priority resolution agent who will contact you within 2 hours. Can you share your complaint reference number?",
    escalation: true,
    escalationReason: "High emotional distress + prolonged unresolved complaint. Routing to Customer Resolution Team — Priority.",
    source: "Complaint Handling Policy v3.1 — Escalated Cases",
    confidence: 68,
    channel: "Social Media",
  },
];

export function CmdSimulation() {
  const [active, setActive] = useState(0);
  const [step, setStep]     = useState<"idle" | "customer" | "thinking" | "response" | "done">("idle");
  const sc = SCENARIOS[active];

  const run = async () => {
    setStep("customer");
    await new Promise((r) => setTimeout(r, 1000));
    setStep("thinking");
    await new Promise((r) => setTimeout(r, 1600));
    setStep("response");
    await new Promise((r) => setTimeout(r, 1200));
    setStep("done");
  };

  const reset = () => setStep("idle");

  return (
    <section id="simulation" className={S.section}>
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <ScrollReveal><span className={S.label}>// Simulation</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={S.h2}>See VANI handle real scenarios.</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className={S.p}>Frontend simulation — no AI backend. Shows the escalation logic, knowledge retrieval, and handoff workflow.</p></ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Scenario selector */}
          <div className="flex flex-col gap-2">
            {SCENARIOS.map((sc, i) => (
              <button
                key={sc.id}
                onClick={() => { setActive(i); reset(); }}
                className={`text-left px-4 py-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                  active === i
                    ? "border-[#C41230]/50 bg-[#C41230]/05 text-[#E8EAED]"
                    : "border-white/[0.06] text-[#6E7780] hover:border-white/[0.12] hover:text-[#E8EAED]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">{sc.icon}</span>
                  <div>
                    <p className="font-sans font-medium text-sm leading-tight">{sc.label}</p>
                    <p className="font-mono text-[9px] text-[#4A5260] mt-0.5 uppercase tracking-wider">{sc.channel}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Simulation terminal */}
          <div className="bg-[#0B0F14] border border-white/[0.06] rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#C41230]/50" />
                <div className="w-3 h-3 rounded-full bg-amber-400/40" />
                <div className="w-3 h-3 rounded-full bg-[#22c55e]/40" />
              </div>
              <span className="font-mono text-[10px] text-[#4A5260] tracking-wider uppercase">{sc.channel} · {sc.label}</span>
              <div className="w-12" />
            </div>

            <div className="p-5 min-h-[360px] flex flex-col gap-4">
              {/* Customer message */}
              <AnimatePresence>
                {(step === "customer" || step === "thinking" || step === "response" || step === "done") && (
                  <motion.div
                    className="flex justify-end"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="max-w-xs bg-[#1C2128] rounded-2xl rounded-br-sm px-4 py-3">
                      <p className="font-sans text-sm text-[#E8EAED] leading-relaxed">{sc.customerMsg}</p>
                      <p className="font-mono text-[9px] text-[#4A5260] mt-1.5 text-right">Customer</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Thinking */}
              <AnimatePresence>
                {(step === "thinking" || step === "response" || step === "done") && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="self-start max-w-sm"
                  >
                    <div className="bg-[#0F1318] border border-white/[0.06] rounded-xl rounded-bl-sm px-4 py-3">
                      <div className="flex items-center gap-2 mb-1.5">
                        <motion.div className="w-1.5 h-1.5 rounded-full bg-[#C41230]" animate={{ opacity: [1,0.3,1] }} transition={{ repeat: Infinity, duration: 0.7 }} />
                        <span className="font-mono text-[9px] text-[#C41230] uppercase tracking-widest">Processing</span>
                      </div>
                      <p className="font-mono text-xs text-[#4A5260] leading-relaxed">{sc.thinking}</p>
                      <p className="font-mono text-[9px] text-[#4A5260]/60 mt-1.5">Source: {sc.source}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* VANI response */}
              <AnimatePresence>
                {(step === "response" || step === "done") && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="self-start max-w-sm"
                  >
                    <div className="bg-[#0F1318] border border-[#C41230]/20 rounded-2xl rounded-bl-sm px-4 py-3">
                      <p className="font-sans text-sm text-[#E8EAED] leading-relaxed mb-2">{sc.vaniReply}</p>
                      <div className="flex items-center justify-between">
                        <p className="font-mono text-[9px] text-[#6E7780]">VANI · Confidence: {sc.confidence}%</p>
                        <CheckCircle size={11} className="text-[#22c55e]" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Escalation */}
              <AnimatePresence>
                {step === "done" && sc.escalation && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-[#C41230]/30 bg-[#C41230]/05 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <AlertCircle size={13} className="text-[#C41230]" />
                      <span className="font-mono text-[10px] text-[#C41230] uppercase tracking-wider">Escalation Triggered</span>
                    </div>
                    <p className="font-sans text-xs text-[#6E7780] leading-relaxed">{sc.escalationReason}</p>
                  </motion.div>
                )}
                {step === "done" && !sc.escalation && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-[#22c55e]/20 bg-[#22c55e]/05 rounded-xl px-4 py-3"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle size={13} className="text-[#22c55e]" />
                      <span className="font-mono text-[10px] text-[#22c55e] uppercase tracking-wider">Resolved by AI — No escalation needed</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Controls */}
              <div className="mt-auto flex gap-2">
                {step === "idle" && (
                  <button onClick={run} className="bg-[#C41230] hover:bg-[#A50E26] text-white font-sans font-medium text-sm px-5 py-2.5 rounded transition-colors cursor-pointer">
                    Run Simulation
                  </button>
                )}
                {step === "done" && (
                  <button onClick={reset} className="border border-white/[0.12] text-[#E8EAED] hover:border-white/[0.25] font-sans font-medium text-sm px-5 py-2.5 rounded transition-colors cursor-pointer">
                    Reset
                  </button>
                )}
                {(step === "customer" || step === "thinking" || step === "response") && (
                  <div className="flex items-center gap-2 text-[#4A5260]">
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-[#C41230]" animate={{ opacity: [1,0.3,1] }} transition={{ repeat: Infinity, duration: 0.8 }} />
                    <span className="font-mono text-xs">Processing…</span>
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

// ──────────────────────────────────────────────────────────────
// Channels
// ──────────────────────────────────────────────────────────────
const CHANNELS_DATA = [
  { icon: Phone,         label: "Voice Calls",    desc: "AI-powered inbound and outbound call handling with real-time transcription and intent detection." },
  { icon: MessageCircle, label: "WhatsApp",        desc: "Full-volume conversational support via the region's most-used messaging platform." },
  { icon: Globe,         label: "Website Chat",   desc: "Live chat embedded on your site with intelligent routing and seamless human handoff." },
  { icon: Mail,          label: "Email",           desc: "Automatic email triage, response drafting, and escalation for high-volume inboxes." },
  { icon: Share2,        label: "Social Media",   desc: "Monitor and respond to DMs and mentions with consistent, policy-accurate messaging." },
  { icon: Smartphone,    label: "Mobile App",     desc: "In-app support chat with access to customer context, account data, and transaction history." },
];

export function CmdChannels() {
  return (
    <section id="channels" className={S.sectionAlt}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <ScrollReveal><span className={S.label}>// Omnichannel</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={S.h2}>One AI team. Every channel.</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className={S.p}>VANI operates across all the channels your customers already use — with consistent, policy-accurate responses and unified context.</p></ScrollReveal>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CHANNELS_DATA.map((ch) => (
            <motion.div key={ch.label} variants={staggerItem} className={`${S.card} p-5 group cursor-default`}>
              <div className="w-10 h-10 rounded-xl bg-[#C41230]/10 group-hover:bg-[#C41230]/20 flex items-center justify-center mb-4 transition-colors duration-300">
                <ch.icon size={18} className="text-[#C41230]" />
              </div>
              <h3 className="font-sans font-semibold text-sm text-[#E8EAED] mb-2">{ch.label}</h3>
              <p className="font-sans text-xs text-[#6E7780] leading-relaxed">{ch.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3} className="mt-12 text-center">
          <p className="font-mono text-sm text-[#4A5260]">All channels · One knowledge base · Unified analytics</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────
// Industries
// ──────────────────────────────────────────────────────────────
const INDUSTRIES = [
  { icon: Landmark,      label: "Banks & Financial Services", cases: ["Card guidance", "Product FAQs", "Branch/ATM info", "App troubleshooting", "Complaint routing", "Fraud reporting"] },
  { icon: Cross,         label: "Hospitals & Healthcare",     cases: ["Appointment booking", "Insurance guidance", "Clinic info", "Lab instructions", "Complaint intake", "Emergency escalation"] },
  { icon: GraduationCap, label: "Schools & Universities",     cases: ["Admissions inquiries", "Schedules & fees", "Parent & student support", "Academic policy guidance"] },
  { icon: Briefcase,     label: "Enterprise Support Teams",   cases: ["FAQ automation", "Order status", "Complaint routing", "Social media management", "Internal agent assist"] },
];

export function CmdIndustries() {
  return (
    <section id="industries" className={S.section}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-12">
          <ScrollReveal><span className={S.label}>// Industries</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={S.h2}>Built for high-trust organizations.</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className={S.p}>VANI's compliance-aware architecture is designed for sectors where trust, accuracy, and data isolation are non-negotiable.</p></ScrollReveal>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 gap-4">
          {INDUSTRIES.map((ind) => (
            <motion.div key={ind.label} variants={staggerItem} className={`${S.card} p-6 cursor-default`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#C41230]/10 flex items-center justify-center shrink-0">
                  <ind.icon size={18} className="text-[#C41230]" />
                </div>
                <h3 className="font-sans font-semibold text-sm text-[#E8EAED]">{ind.label}</h3>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {ind.cases.map((c) => (
                  <div key={c} className="flex items-center gap-1.5">
                    <ChevronRight size={10} className="text-[#C41230]/60 shrink-0" />
                    <span className="font-sans text-xs text-[#6E7780]">{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
