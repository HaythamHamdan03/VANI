"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import { Phone, MessageCircle, Globe, Mail, Smartphone, Share2, ChevronRight } from "lucide-react";
import type { LCTheme } from "@/lib/lc-themes";

// ── DASHBOARD ────────────────────────────────────────────────────────
const QUEUE = [
  { name: "سارة المطيري",       en: "Card Replacement",    channel: "WhatsApp", conf: 94, status: "Resolved",  flag: false },
  { name: "Ahmed Al-Rasheed",    en: "Travel Block",        channel: "Voice",    conf: 91, status: "Escalated", flag: true  },
  { name: "نورة العتيبي",        en: "Appointment Booking", channel: "Website",  conf: 97, status: "Resolved",  flag: false },
  { name: "Faisal Al-Ghamdi",    en: "Account Statement",   channel: "Email",    conf: 88, status: "Resolved",  flag: false },
  { name: "مريم الشهري",         en: "Insurance Inquiry",   channel: "Mobile",   conf: 79, status: "Pending",   flag: true  },
  { name: "Khalid Al-Dossari",   en: "Branch Location",     channel: "WhatsApp", conf: 99, status: "Resolved",  flag: false },
];

const CHANNELS_CHART = [
  { ch: "WhatsApp",  pct: 42 },
  { ch: "Voice",     pct: 28 },
  { ch: "Email",     pct: 16 },
  { ch: "Website",   pct: 10 },
  { ch: "Social",    pct:  4 },
];

function StatusPill({ status, theme }: { status: string; theme: LCTheme }) {
  const color = status === "Resolved" ? "#22c55e" : status === "Escalated" ? theme.accent : "#f59e0b";
  return (
    <span className="font-sans text-xs font-medium" style={{ color }}>{status}</span>
  );
}

export function LCDashboard({ theme }: { theme: LCTheme }) {
  return (
    <section id="dashboard" className="py-24" style={{ backgroundColor: theme.bgAlt }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-xl mb-10">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase mb-3 block"
              style={{ color: theme.label }}>Product Dashboard</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.8rem)] leading-tight"
              style={{ color: theme.ink }}>
              Your entire support operation, in one console.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="rounded-xl border overflow-hidden shadow-lg"
            style={{ borderColor: theme.border,
              boxShadow: `0 16px 48px rgba(0,0,0,0.06), 0 4px 16px ${theme.netGlow}` }}
          >
            {/* Chrome */}
            <div className="flex items-center gap-2 px-5 py-3 border-b"
              style={{ backgroundColor: theme.dashChrome, borderColor: theme.border }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
              <span className="ml-3 font-sans text-[11px] font-medium" style={{ color: theme.faint }}>
                VANI Operations Console
              </span>
              <div className="ml-auto flex items-center gap-1.5">
                <motion.div className="w-1.5 h-1.5 rounded-full bg-green-400"
                  animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.6 }}
                />
                <span className="font-sans text-[10px] text-green-500">Live</span>
              </div>
            </div>

            {/* KPI row */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b" style={{ borderColor: theme.border }}>
              {[
                { v: "247", l: "Resolved Today",    c: "#22c55e"    },
                { v: "12",  l: "Escalated",          c: theme.accent },
                { v: "94%", l: "Avg Confidence",     c: theme.accent },
                { v: "1.8s",l: "Avg Response",       c: theme.ink    },
              ].map(({ v, l, c }) => (
                <div key={l} className="px-6 py-5 border-r last:border-r-0"
                  style={{ backgroundColor: theme.surface, borderColor: theme.border }}>
                  <p className="font-mono font-bold text-2xl" style={{ color: c }}>{v}</p>
                  <p className="font-sans text-xs mt-0.5" style={{ color: theme.faint }}>{l}</p>
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="flex flex-col lg:flex-row" style={{ backgroundColor: theme.surface }}>
              {/* Table */}
              <div className="flex-1 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b" style={{ borderColor: theme.border }}>
                      {["Customer", "Intent", "Channel", "Confidence", "Status", ""].map((h) => (
                        <th key={h} className="px-5 py-3 text-left font-sans text-[10px] font-medium tracking-widest uppercase"
                          style={{ color: theme.faint, backgroundColor: theme.dashChrome }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {QUEUE.map((r, i) => (
                      <motion.tr key={i}
                        className="border-b transition-colors duration-150"
                        style={{ borderColor: theme.border }}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 + 0.3 }}
                        whileHover={{ backgroundColor: theme.dashRow }}
                      >
                        <td className="px-5 py-3.5">
                          <div className="flex items-center gap-2.5">
                            {r.flag && (
                              <div className="w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ backgroundColor: theme.accent }} />
                            )}
                            <span className="font-sans text-sm" style={{ color: theme.ink }}>{r.name}</span>
                          </div>
                        </td>
                        <td className="px-5 py-3.5">
                          <span className="font-sans text-sm" style={{ color: theme.muted }}>{r.en}</span>
                        </td>
                        <td className="px-5 py-3.5">
                          <span className="font-sans text-xs border px-2 py-0.5 rounded"
                            style={{ borderColor: theme.border, color: theme.faint }}>
                            {r.channel}
                          </span>
                        </td>
                        <td className="px-5 py-3.5">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 rounded-full overflow-hidden"
                              style={{ backgroundColor: theme.border }}>
                              <motion.div className="h-full rounded-full"
                                style={{ backgroundColor: r.conf > 90 ? "#22c55e" : r.conf > 80 ? "#f59e0b" : theme.accent }}
                                initial={{ width: 0 }}
                                animate={{ width: `${r.conf}%` }}
                                transition={{ delay: i * 0.07 + 0.5, duration: 0.5 }}
                              />
                            </div>
                            <span className="font-mono text-xs" style={{ color: theme.faint }}>{r.conf}%</span>
                          </div>
                        </td>
                        <td className="px-5 py-3.5">
                          <StatusPill status={r.status} theme={theme} />
                        </td>
                        <td className="px-5 py-3.5">
                          <ChevronRight size={14} style={{ color: theme.faint }} />
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Right panel */}
              <div className="w-full lg:w-56 border-t lg:border-t-0 lg:border-l flex flex-col"
                style={{ borderColor: theme.border, backgroundColor: theme.dashChrome }}>
                <div className="p-4 border-b" style={{ borderColor: theme.border }}>
                  <p className="font-sans text-[10px] font-medium tracking-widest uppercase mb-3"
                    style={{ color: theme.faint }}>Channels</p>
                  {CHANNELS_CHART.map((c, i) => (
                    <div key={c.ch} className="mb-2.5">
                      <div className="flex justify-between mb-1">
                        <span className="font-sans text-xs" style={{ color: theme.muted }}>{c.ch}</span>
                        <span className="font-mono text-xs" style={{ color: theme.faint }}>{c.pct}%</span>
                      </div>
                      <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: theme.border }}>
                        <motion.div className="h-full rounded-full"
                          style={{ backgroundColor: theme.accent, opacity: 1 - i * 0.12 }}
                          initial={{ width: 0 }}
                          animate={{ width: `${c.pct}%` }}
                          transition={{ delay: i * 0.1 + 0.6, duration: 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4">
                  <p className="font-sans text-[10px] font-medium tracking-widest uppercase mb-3"
                    style={{ color: theme.faint }}>Agents</p>
                  {["Triage", "Knowledge", "Response", "Compliance"].map((a, i) => (
                    <div key={a} className="flex items-center gap-2 mb-2">
                      <motion.div className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: i < 3 ? "#22c55e" : "#f59e0b" }}
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ repeat: Infinity, duration: 1.5 + i * 0.3 }}
                      />
                      <span className="font-sans text-xs" style={{ color: theme.muted }}>{a}</span>
                      <span className="ml-auto font-sans text-[10px]"
                        style={{ color: i < 3 ? "#22c55e" : "#f59e0b" }}>
                        {i < 3 ? "Active" : "Standby"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── SIMULATION ────────────────────────────────────────────────────────
type SimPhase = "idle" | "customer" | "thinking" | "vani" | "done";

type Exchange = {
  from: "customer" | "vani";
  text: string;
  ar?: string;
  resolved?: boolean;
  escalated?: boolean;
  confidence?: number;
  source?: string;
};

type Scenario = {
  id: string;
  label: string;
  channel: string;
  exchanges: Exchange[];
};

const SCENARIOS: Scenario[] = [
  {
    id: "hospital", label: "Hospital Appointment", channel: "WhatsApp",
    exchanges: [
      { from: "customer", ar: "السلام عليكم، أريد تغيير موعدي مع الدكتور أحمد.",
        text: "Hello, I'd like to reschedule my appointment with Dr. Ahmed." },
      { from: "vani",     text: "Of course. I can see your appointment on Tuesday at 9:00am. Would Wednesday or Thursday work better?",
        confidence: 96, source: "Appointment Management KB" },
      { from: "customer", text: "Wednesday morning, please." },
      { from: "vani",     text: "Confirmed — Wednesday at 10:00am with Dr. Ahmed. A reminder will be sent 24 hours before.",
        resolved: true, confidence: 98, source: "Appointment Management KB" },
    ],
  },
  {
    id: "bank", label: "Bank Card Issue", channel: "Voice",
    exchanges: [
      { from: "customer", text: "My card was declined. I'm traveling abroad and need help urgently." },
      { from: "vani",     text: "I can help. For security, please confirm the last 4 digits of your card number.",
        confidence: 91, source: "Card Services KB" },
      { from: "customer", text: "It's 8832." },
      { from: "vani",     text: "Verified. Your card was flagged for unusual activity while abroad. I've lifted the temporary hold. International transactions are active for the next 30 days.",
        resolved: true, confidence: 93, source: "Card Security Procedures" },
    ],
  },
  {
    id: "school", label: "University Admissions", channel: "Website Chat",
    exchanges: [
      { from: "customer", ar: "ما هي متطلبات القبول في برنامج إدارة الأعمال؟",
        text: "What are the admission requirements for the Business Administration program?" },
      { from: "vani",     text: "Requirements: secondary GPA ≥ 75%, aptitude test, motivation letter, and two references. Applications close March 31. Would you like the direct link?",
        resolved: true, confidence: 97, source: "Admissions Handbook 2025" },
    ],
  },
  {
    id: "social", label: "Social Media Complaint", channel: "Twitter / X",
    exchanges: [
      { from: "customer", text: "Your service has been terrible. I've been waiting 3 days for a response to my complaint!" },
      { from: "vani",     text: "I'm sorry for the delay — that's not acceptable. I'm escalating your case to our priority support team with full context now. Can you share your case reference?",
        confidence: 72, source: "Complaint Handling Protocol" },
      { from: "customer", text: "REF-2024-8812." },
      { from: "vani",     text: "Located. Your case has been escalated as Priority with the full conversation context. A senior agent will reach you within 60 minutes.",
        escalated: true, confidence: 88, source: "Escalation Routing Rules" },
    ],
  },
];

export function LCSimulation({ theme }: { theme: LCTheme }) {
  const [idx,      setIdx]      = useState(0);
  const [phase,    setPhase]    = useState<SimPhase>("idle");
  const [shown,    setShown]    = useState<Exchange[]>([]);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAll = () => { timers.current.forEach(clearTimeout); timers.current = []; };

  const run = (sc: Scenario) => {
    clearAll(); setShown([]); setPhase("idle");
    let t = 400;
    sc.exchanges.forEach((ex, i) => {
      if (ex.from === "customer") {
        timers.current.push(setTimeout(() => { setPhase("customer"); setShown((p) => [...p, ex]); }, t));
        t += 900;
        timers.current.push(setTimeout(() => setPhase("thinking"), t));
        t += 1300;
      } else {
        timers.current.push(setTimeout(() => {
          setPhase("vani"); setShown((p) => [...p, ex]);
          if (i === sc.exchanges.length - 1) setTimeout(() => setPhase("done"), 600);
        }, t));
        t += 1100;
      }
    });
  };

  const select = (i: number) => { setIdx(i); run(SCENARIOS[i]); };
  useEffect(() => () => clearAll(), []);

  const sc = SCENARIOS[idx];
  const lastVani = [...shown].reverse().find((m) => m.from === "vani");

  return (
    <section id="simulation" className="py-24" style={{ backgroundColor: theme.bg }}>
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase mb-3 block"
              style={{ color: theme.label }}>Live Simulation</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.8rem)] leading-tight mb-3"
              style={{ color: theme.ink }}>
              See VANI in operation.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="rounded-xl border overflow-hidden"
            style={{ borderColor: theme.border,
              boxShadow: `0 12px 40px rgba(0,0,0,0.06), 0 2px 12px ${theme.netGlow}` }}
          >
            {/* Scenario tabs */}
            <div className="flex overflow-x-auto border-b" style={{ borderColor: theme.border }}>
              {SCENARIOS.map((s, i) => (
                <button key={s.id} onClick={() => select(i)}
                  className="shrink-0 px-5 py-3.5 font-sans text-xs font-medium border-r transition-colors duration-150 cursor-pointer"
                  style={{
                    borderColor: theme.border,
                    backgroundColor: idx === i ? theme.accent : theme.surface,
                    color:           idx === i ? "#fff"        : theme.muted,
                  }}
                >
                  {s.label}
                </button>
              ))}
              <div className="flex-1" style={{ backgroundColor: theme.surface }} />
            </div>

            <div className="flex flex-col lg:flex-row min-h-[380px]" style={{ backgroundColor: theme.surface }}>
              {/* Chat */}
              <div className="flex-1 flex flex-col">
                {/* Channel badge */}
                <div className="flex items-center gap-2 px-5 py-2.5 border-b text-xs"
                  style={{ borderColor: theme.border, backgroundColor: theme.dashChrome }}>
                  <Globe size={11} style={{ color: theme.faint }} />
                  <span style={{ color: theme.faint }}>{sc.channel}</span>
                  {phase === "thinking" && (
                    <motion.span className="ml-2 text-xs"
                      style={{ color: theme.accent }}
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ repeat: Infinity, duration: 0.9 }}
                    >
                      VANI processing…
                    </motion.span>
                  )}
                </div>

                <div className="flex-1 p-5 flex flex-col gap-3 overflow-y-auto max-h-[360px]">
                  {phase === "idle" && (
                    <div className="flex-1 flex items-center justify-center flex-col gap-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: theme.accentSoft }}>
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.accent }} />
                      </div>
                      <p className="font-sans text-sm" style={{ color: theme.faint }}>
                        Select a scenario to start
                      </p>
                    </div>
                  )}

                  <AnimatePresence>
                    {shown.map((msg, i) => (
                      <motion.div key={i}
                        className={`flex ${msg.from === "vani" ? "justify-end" : "justify-start"}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        <div className={`max-w-[78%] rounded-xl px-4 py-3 ${
                          msg.from === "vani" ? "" : ""
                        }`}
                          style={{
                            backgroundColor: msg.from === "vani" ? theme.accent : theme.bgAlt,
                            color: msg.from === "vani" ? "#fff" : theme.ink,
                            border: msg.from === "customer" ? `1px solid ${theme.border}` : "none",
                          }}
                        >
                          {msg.ar && (
                            <p className="text-sm leading-relaxed mb-1 text-right" dir="rtl"
                              style={{ color: msg.from === "vani" ? "rgba(255,255,255,0.85)" : theme.ink }}>
                              {msg.ar}
                            </p>
                          )}
                          <p className={`text-sm leading-relaxed ${msg.ar ? "text-xs opacity-70" : ""}`}>
                            {msg.text}
                          </p>
                          {(msg.resolved || msg.escalated) && (
                            <div className="mt-2 pt-2 border-t border-white/20 text-[11px]"
                              style={{ color: msg.resolved ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.65)" }}>
                              {msg.resolved ? "✓ Resolved by VANI" : "⬆ Escalated to human agent"}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {phase === "thinking" && (
                    <div className="flex justify-end">
                      <div className="flex items-center gap-1.5 px-4 py-3 rounded-xl"
                        style={{ backgroundColor: theme.accentSoft }}>
                        {[0,1,2].map((j) => (
                          <motion.div key={j} className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: theme.accent }}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ repeat: Infinity, duration: 1, delay: j * 0.2 }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {phase === "done" && (
                  <div className="px-5 py-3 border-t flex items-center justify-between"
                    style={{ borderColor: theme.border, backgroundColor: theme.dashChrome }}>
                    <span className="font-sans text-xs" style={{ color: theme.faint }}>Simulation complete</span>
                    <button onClick={() => select(idx)}
                      className="font-sans text-xs cursor-pointer hover:underline"
                      style={{ color: theme.accent }}>
                      Run again
                    </button>
                  </div>
                )}
              </div>

              {/* Analysis panel */}
              <div className="w-full lg:w-56 border-t lg:border-t-0 lg:border-l p-5 flex flex-col gap-5"
                style={{ borderColor: theme.border, backgroundColor: theme.dashChrome }}>
                <p className="font-sans text-[10px] font-medium tracking-widest uppercase"
                  style={{ color: theme.faint }}>Live Analysis</p>

                {lastVani ? (
                  <AnimatePresence>
                    <motion.div className="flex flex-col gap-3"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                      <div>
                        <p className="font-sans text-[10px] mb-1" style={{ color: theme.faint }}>Confidence</p>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: theme.border }}>
                            <div className="h-full rounded-full" style={{
                              backgroundColor: (lastVani.confidence ?? 0) > 90 ? "#22c55e" : theme.accent,
                              width: `${lastVani.confidence ?? 0}%`,
                              transition: "width 0.5s"
                            }} />
                          </div>
                          <span className="font-mono text-xs" style={{ color: theme.ink }}>{lastVani.confidence}%</span>
                        </div>
                      </div>
                      {lastVani.source && (
                        <div>
                          <p className="font-sans text-[10px] mb-1" style={{ color: theme.faint }}>Knowledge Source</p>
                          <p className="font-sans text-xs leading-snug" style={{ color: theme.muted }}>{lastVani.source}</p>
                        </div>
                      )}
                      <div>
                        <p className="font-sans text-[10px] mb-1" style={{ color: theme.faint }}>Decision</p>
                        <span className="font-sans text-xs font-medium"
                          style={{ color: lastVani.resolved ? "#22c55e" : lastVani.escalated ? theme.accent : theme.muted }}>
                          {lastVani.resolved ? "Resolved by AI" : lastVani.escalated ? "Escalated to human" : "In progress"}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <p className="font-sans text-xs" style={{ color: theme.faint }}>
                    Analysis will appear as VANI processes the request.
                  </p>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── CHANNELS ─────────────────────────────────────────────────────────
const CH_LIST = [
  { label: "Voice Calls",    Icon: Phone,         desc: "Full Arabic and English voice support with natural conversation understanding." },
  { label: "WhatsApp",       Icon: MessageCircle, desc: "The most-used channel across the Gulf region. Rich media and response support." },
  { label: "Website Chat",   Icon: Globe,         desc: "Embedded AI-first chat with seamless human handoff when needed." },
  { label: "Email",          Icon: Mail,          desc: "Intelligent triage, drafting, and routing for inbound email support." },
  { label: "Social Media",   Icon: Share2,        desc: "Mentions, DMs, and complaints across Twitter, Instagram, and LinkedIn." },
  { label: "Mobile App",     Icon: Smartphone,    desc: "In-app support flows with context-aware AI and push follow-up." },
];

export function LCChannels({ theme }: { theme: LCTheme }) {
  return (
    <section id="channels" className="py-24" style={{ backgroundColor: theme.bgAlt }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase mb-3 block"
              style={{ color: theme.label }}>Channels</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.8rem)] leading-tight"
              style={{ color: theme.ink }}>
              One AI team. Every channel your customers use.
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {CH_LIST.map(({ label, Icon, desc }) => (
            <motion.div key={label} variants={staggerItem}
              className="p-7 rounded-xl border flex flex-col gap-3 transition-all duration-200"
              style={{ backgroundColor: theme.surface, borderColor: theme.border }}
              whileHover={{ borderColor: `${theme.accent}60`,
                boxShadow: `0 4px 20px ${theme.netGlow}` }}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: theme.accentSoft }}>
                <Icon size={16} style={{ color: theme.accent }} />
              </div>
              <h3 className="font-sans font-semibold text-base" style={{ color: theme.ink }}>{label}</h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: theme.muted }}>{desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ── INDUSTRIES ────────────────────────────────────────────────────────
const INDUSTRIES = [
  { name: "Banks & Financial",  desc: "Guide routine banking questions, detect fraud-related urgency, and route sensitive cases securely.",                     cases: ["Card services", "Product FAQs", "Branch/ATM info", "Fraud guidance"] },
  { name: "Hospitals",          desc: "Support appointments, insurance guidance, patient inquiries, and emergency escalation workflows.",                      cases: ["Appointment booking", "Insurance guidance", "Lab instructions", "Emergency routing"] },
  { name: "Schools & Universities", desc: "Handle admissions, registration, fee inquiries, and student services routing at scale.",                           cases: ["Admissions FAQs", "Registration support", "Fee inquiries", "Student routing"] },
  { name: "Insurance",          desc: "Answer policy questions, track claims, handle renewals, and route complex coverage disputes.",                          cases: ["Policy FAQs", "Claim status", "Coverage inquiries", "Renewal routing"] },
  { name: "Real Estate",        desc: "Qualify leads, provide availability information, schedule visits, and route serious buyers.",                           cases: ["Property availability", "Pricing/plans", "Appointment booking", "Lead routing"] },
  { name: "Enterprise Support", desc: "Automate FAQs, route complaints, handle social mentions, and support internal agent workflows.",                        cases: ["FAQ automation", "Complaint routing", "Order status", "Social response"] },
];

export function LCIndustries({ theme }: { theme: LCTheme }) {
  return (
    <section id="industries" className="py-24" style={{ backgroundColor: theme.bg }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-xl mb-12">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase mb-3 block"
              style={{ color: theme.label }}>Industries</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.8rem)] leading-tight mb-3"
              style={{ color: theme.ink }}>
              Built for high-trust organizations.
            </h2>
            <p className="font-sans text-sm leading-relaxed" style={{ color: theme.muted }}>
              VANI is designed for regulated, people-first industries where every customer interaction matters.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {INDUSTRIES.map((ind) => (
            <motion.div key={ind.name} variants={staggerItem}
              className="p-7 rounded-xl border flex flex-col gap-4 transition-all duration-200"
              style={{ backgroundColor: theme.surface, borderColor: theme.border }}
              whileHover={{ borderColor: `${theme.accent}50`,
                boxShadow: `0 4px 20px ${theme.netGlow}` }}
            >
              <h3 className="font-sans font-semibold text-base" style={{ color: theme.ink }}>{ind.name}</h3>
              <div className="w-8 h-px" style={{ backgroundColor: theme.accent }} />
              <p className="font-sans text-sm leading-relaxed" style={{ color: theme.muted }}>{ind.desc}</p>
              <ul className="space-y-1.5">
                {ind.cases.map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <ChevronRight size={11} style={{ color: theme.accent }} className="shrink-0" />
                    <span className="font-sans text-xs" style={{ color: theme.faint }}>{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
