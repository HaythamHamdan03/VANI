"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import { Phone, MessageCircle, Globe, Mail, Smartphone, Share2 } from "lucide-react";

const GEO_PAT: React.CSSProperties = {
  backgroundImage: [
    "linear-gradient(45deg, rgba(155,123,74,0.04) 1px, transparent 1px)",
    "linear-gradient(-45deg, rgba(155,123,74,0.04) 1px, transparent 1px)",
  ].join(", "),
  backgroundSize: "48px 48px",
};

function GeoDivider() {
  return (
    <div className="flex items-center gap-3 my-1">
      <div className="h-px flex-1 bg-[#E8D9C4]" />
      <svg width="8" height="8" viewBox="0 0 8 8"><polygon points="4,0 8,4 4,8 0,4" fill="#9B7B4A" opacity="0.5" /></svg>
      <div className="h-px flex-1 bg-[#E8D9C4]" />
    </div>
  );
}

// ── DASHBOARD ────────────────────────────────────────────────────────
const DASH_ROWS = [
  { name: "سارة المطيري",       en: "Card Replacement",        channel: "WhatsApp", conf: 94, status: "Resolved",  statusColor: "#6B9E72" },
  { name: "Ahmed Al-Rasheed",    en: "Travel Block",            channel: "Voice",    conf: 91, status: "Escalated", statusColor: "#7D1A28" },
  { name: "نورة العتيبي",        en: "Appointment Booking",     channel: "Website",  conf: 97, status: "Resolved",  statusColor: "#6B9E72" },
  { name: "Faisal Al-Ghamdi",    en: "Account Statement",       channel: "Email",    conf: 88, status: "Resolved",  statusColor: "#6B9E72" },
  { name: "مريم الشهري",         en: "Insurance Inquiry",       channel: "Mobile",   conf: 79, status: "Pending",   statusColor: "#9B7B4A" },
  { name: "Khalid Al-Dossari",   en: "Branch Location",         channel: "WhatsApp", conf: 99, status: "Resolved",  statusColor: "#6B9E72" },
];

export function NeoDashboard() {
  return (
    <section id="dashboard" className="py-24 bg-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-xl mb-12">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-[#9B7B4A] mb-4 block">Product Dashboard</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.8rem)] text-[#EDE8E3] leading-tight">
              Your support operations, in one view.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-[#141010] border border-white/[0.06] rounded-sm overflow-hidden">
            {/* Chrome bar */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06]">
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="ml-3 font-sans text-[11px] text-[#5A5550]">VANI · Live Conversation Queue</span>
              <span className="ml-auto flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B9E72] animate-pulse" />
                <span className="font-sans text-[10px] text-[#6B9E72]">Live</span>
              </span>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04]">
              {[
                { v: "247",  l: "Resolved Today",    c: "#6B9E72"  },
                { v: "12",   l: "Escalated",          c: "#7D1A28"  },
                { v: "94%",  l: "Avg. Confidence",    c: "#9B7B4A"  },
                { v: "1.8s", l: "Avg. Response Time", c: "#EDE8E3"  },
              ].map(({ v, l, c }) => (
                <div key={l} className="bg-[#141010] px-6 py-5">
                  <p className="font-sans font-bold text-2xl" style={{ color: c }}>{v}</p>
                  <p className="font-sans text-[11px] text-[#5A5550] mt-0.5">{l}</p>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.05]">
                    {["Customer", "Intent", "Channel", "Confidence", "Status"].map((h) => (
                      <th key={h} className="px-5 py-3 text-left font-sans text-[10px] text-[#4A4540] tracking-widest uppercase">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DASH_ROWS.map((r, i) => (
                    <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                      <td className="px-5 py-3.5">
                        <p className="font-sans text-sm text-[#EDE8E3]">{r.name}</p>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="font-sans text-sm text-[#8A8680]">{r.en}</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="font-sans text-xs text-[#6A6460] border border-white/[0.07] px-2.5 py-1 rounded-sm">{r.channel}</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: `${r.conf}%`, backgroundColor: r.conf > 90 ? "#6B9E72" : r.conf > 80 ? "#9B7B4A" : "#7D1A28" }} />
                          </div>
                          <span className="font-sans text-xs text-[#6A6460]">{r.conf}%</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="font-sans text-xs font-medium" style={{ color: r.statusColor }}>{r.status}</span>
                      </td>
                    </tr>
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

// ── SIMULATION ────────────────────────────────────────────────────────
type SimState = "idle" | "customer" | "thinking" | "vani" | "done";

type Exchange = {
  from: "customer" | "vani";
  ar?: string;
  en: string;
  resolved?: boolean;
  escalated?: boolean;
};

type Scenario = {
  id: string;
  label: string;
  channel: string;
  lang: "ar" | "en";
  exchanges: Exchange[];
};

const SCENARIOS: Scenario[] = [
  {
    id: "hospital",
    label: "مستشفى · Hospital",
    channel: "WhatsApp",
    lang: "ar",
    exchanges: [
      { from: "customer", ar: "السلام عليكم، أريد تغيير موعدي مع الدكتور أحمد.", en: "Hello, I'd like to reschedule my appointment with Dr. Ahmed." },
      { from: "vani",     ar: "وعليكم السلام! لديك موعد الثلاثاء الساعة 9 صباحاً. هل تفضل الأربعاء أو الخميس؟", en: "Hello! You have an appointment Tuesday at 9am. Would Wednesday or Thursday work?", resolved: true },
    ],
  },
  {
    id: "bank",
    label: "Bank Card",
    channel: "Voice",
    lang: "en",
    exchanges: [
      { from: "customer", en: "My credit card was declined. I'm traveling abroad and need help urgently." },
      { from: "vani",     en: "I can help. To verify your identity, please confirm the last 4 digits of your card." },
      { from: "customer", en: "It's 8832." },
      { from: "vani",     en: "Verified. Your card was flagged for unusual activity. I've cleared the hold. International transactions are now enabled for 30 days.", resolved: true },
    ],
  },
  {
    id: "school",
    label: "جامعة · University",
    channel: "Website Chat",
    lang: "ar",
    exchanges: [
      { from: "customer", ar: "ما هي متطلبات القبول في برنامج إدارة الأعمال؟", en: "What are the Business Administration admission requirements?" },
      { from: "vani",     ar: "متطلبات القبول: معدل 75% فأعلى، اختبار القدرات، وخطاب تحفيزي. هل تريد الرابط المباشر للتقديم؟", en: "Requirements: 75%+ secondary grade, aptitude test, and motivation letter. Would you like the direct application link?", resolved: true },
    ],
  },
  {
    id: "social",
    label: "Social Complaint",
    channel: "Twitter / X",
    lang: "en",
    exchanges: [
      { from: "customer", en: "Your service has been terrible. I've been waiting 3 days for a response on my complaint!" },
      { from: "vani",     en: "I'm sorry for the delay — that's not the experience we want. Your case is being escalated to our priority team now. Can you share your reference number?" },
      { from: "customer", en: "REF-2024-8812." },
      { from: "vani",     en: "Found it. Your case has been escalated with full context. Our senior support team will contact you within the hour.", escalated: true },
    ],
  },
];

export function NeoSimulation() {
  const [activeIdx,   setActiveIdx]   = useState(0);
  const [state,       setState]       = useState<SimState>("idle");
  const [msgIndex,    setMsgIndex]    = useState(0);
  const [shownMsgs,   setShownMsgs]   = useState<Exchange[]>([]);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearAll = () => { timeouts.current.forEach(clearTimeout); timeouts.current = []; };

  const run = (scenario: Scenario) => {
    clearAll();
    setShownMsgs([]);
    setMsgIndex(0);
    setState("idle");

    let delay = 500;
    scenario.exchanges.forEach((ex, i) => {
      if (ex.from === "customer") {
        const t = setTimeout(() => {
          setState("customer");
          setShownMsgs((p) => [...p, ex]);
        }, delay);
        timeouts.current.push(t);
        delay += 900;
        const t2 = setTimeout(() => setState("thinking"), delay);
        timeouts.current.push(t2);
        delay += 1200;
      } else {
        const t = setTimeout(() => {
          setState("vani");
          setShownMsgs((p) => [...p, ex]);
          if (i === scenario.exchanges.length - 1) {
            setTimeout(() => setState("done"), 600);
          }
        }, delay);
        timeouts.current.push(t);
        delay += 1000;
      }
    });
  };

  const select = (idx: number) => { setActiveIdx(idx); run(SCENARIOS[idx]); };

  useEffect(() => () => clearAll(), []);

  const scenario = SCENARIOS[activeIdx];

  return (
    <section id="simulation" className="py-24 bg-[#F8F5F0]" style={GEO_PAT}>
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-[#7D1A28] mb-4 block">Live Simulation</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.8rem)] text-[#1C1917] leading-tight mb-3">
              See VANI in action.
            </h2>
            <GeoDivider />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-white border border-[#EDE5D8] overflow-hidden">
            {/* Scenario tabs */}
            <div className="flex overflow-x-auto border-b border-[#EDE5D8]">
              {SCENARIOS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => select(i)}
                  className={`shrink-0 px-5 py-3.5 font-sans text-xs font-medium border-r border-[#EDE5D8] transition-colors duration-150 cursor-pointer ${
                    activeIdx === i
                      ? "bg-[#7D1A28] text-white"
                      : "text-[#7A7470] hover:bg-[#F8F5F0] hover:text-[#1C1917]"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Channel badge */}
            <div className="px-6 py-3 bg-[#F8F5F0] border-b border-[#EDE5D8] flex items-center gap-2">
              <Globe size={12} className="text-[#9B7B4A]" />
              <span className="font-sans text-[10px] text-[#9B7B4A] tracking-widest uppercase">{scenario.channel}</span>
              {state === "thinking" && (
                <motion.span
                  className="ml-2 font-sans text-[10px] text-[#7D1A28]"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                >
                  VANI processing...
                </motion.span>
              )}
            </div>

            {/* Chat area */}
            <div className="p-6 min-h-[280px] flex flex-col gap-3">
              {state === "idle" && (
                <div className="flex-1 flex flex-col items-center justify-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <polygon points="6.5,1.5 13.5,1.5 18.5,6.5 18.5,13.5 13.5,18.5 6.5,18.5 1.5,13.5 1.5,6.5" fill="none" stroke="#9B7B4A" strokeWidth="1" opacity="0.5" />
                    <circle cx="10" cy="10" r="2" fill="#9B7B4A" opacity="0.4" />
                  </svg>
                  <p className="font-sans text-sm text-[#B0A89E]">Select a scenario above to start</p>
                </div>
              )}

              <AnimatePresence>
                {shownMsgs.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`flex ${msg.from === "vani" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[75%] rounded-sm px-4 py-3 ${
                        msg.from === "vani"
                          ? msg.escalated
                            ? "bg-[#7D1A28]/10 border border-[#7D1A28]/30"
                            : "bg-[#1C1917] text-[#EDE8E3]"
                          : "bg-[#F4EDE0] border border-[#E8D9C4]"
                      }`}
                    >
                      {msg.ar && scenario.lang === "ar" && (
                        <p className="font-sans text-sm leading-relaxed text-right mb-1" dir="rtl" style={{ color: msg.from === "vani" ? "#EDE8E3" : "#1C1917" }}>
                          {msg.ar}
                        </p>
                      )}
                      <p className={`font-sans text-xs leading-relaxed ${msg.ar && scenario.lang === "ar" ? "text-[#8A8680] italic" : ""}`} style={{ color: msg.from === "vani" ? (msg.ar && scenario.lang === "ar" ? "#6A6460" : "#EDE8E3") : "#3A3530" }}>
                        {msg.en}
                      </p>
                      {(msg.resolved || msg.escalated) && (
                        <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-1.5">
                          <span className={`font-sans text-[10px] font-medium ${msg.resolved ? "text-[#6B9E72]" : "text-[#9B7B4A]"}`}>
                            {msg.resolved ? "✓ Resolved by VANI" : "⬆ Escalated to human agent"}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {state === "thinking" && (
                <div className="flex justify-end">
                  <div className="bg-[#1C1917] rounded-sm px-4 py-3 flex items-center gap-1.5">
                    {[0, 1, 2].map((j) => (
                      <motion.div key={j} className="w-1.5 h-1.5 rounded-full bg-[#7D1A28]"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1, delay: j * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {state === "done" && (
              <div className="px-6 py-4 border-t border-[#EDE5D8] bg-[#F8F5F0] flex items-center justify-between">
                <span className="font-sans text-xs text-[#9B7B4A]">Simulation complete</span>
                <button onClick={() => select(activeIdx)} className="font-sans text-xs text-[#7D1A28] hover:underline cursor-pointer">
                  Run again
                </button>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── CHANNELS ─────────────────────────────────────────────────────────
const CHANNELS = [
  { label: "Voice Calls",    Icon: Phone,         desc: "Full Arabic and English voice support. Natural conversation flow." },
  { label: "WhatsApp",       Icon: MessageCircle, desc: "Most-used channel in Saudi Arabia. Rich message support." },
  { label: "Website Chat",   Icon: Globe,         desc: "Embedded live chat with AI-first handling." },
  { label: "Email",          Icon: Mail,          desc: "Intelligent email triage, drafting, and response routing." },
  { label: "Social Media",   Icon: Share2,        desc: "Twitter, Instagram, and LinkedIn mentions monitored and handled." },
  { label: "Mobile App",     Icon: Smartphone,    desc: "In-app support flows with push notification follow-up." },
];

export function NeoChannels() {
  return (
    <section id="channels" className="py-24 bg-[#F4EDE0]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-[#7D1A28] mb-4 block">Channels</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.8rem)] text-[#1C1917] leading-tight">
              One AI team. Every channel.
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {CHANNELS.map(({ label, Icon, desc }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              className="bg-white border border-[#E8D9C4] p-7 flex flex-col gap-3 hover:border-[#7D1A28]/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-9 h-9 border border-[#EDE5D8] flex items-center justify-center">
                <Icon size={16} className="text-[#7D1A28]" />
              </div>
              <h3 className="font-sans font-semibold text-base text-[#1C1917]">{label}</h3>
              <p className="font-sans text-sm text-[#7A7470] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ── INDUSTRIES ────────────────────────────────────────────────────────
const INDUSTRIES = [
  { name: "Banks & Financial Services", cases: ["Card services & replacements", "Product FAQs & eligibility", "Branch & ATM information", "Complaint handling & fraud guidance"] },
  { name: "Hospitals & Healthcare",     cases: ["Appointment booking & changes", "Insurance coverage guidance", "Lab results & clinic info", "Emergency escalation routing"] },
  { name: "Schools & Universities",     cases: ["Admissions requirements", "Registration & scheduling", "Fee inquiries", "Student services routing"] },
  { name: "Insurance Companies",        cases: ["Policy FAQs", "Claim status tracking", "Coverage inquiries", "Renewal reminders"] },
  { name: "Real Estate",                cases: ["Property availability", "Pricing & payment plans", "Appointment scheduling", "Document collection"] },
  { name: "Enterprise Support",         cases: ["FAQ automation", "Order status", "Lead capture", "Social response management"] },
];

export function NeoIndustries() {
  return (
    <section id="industries" className="py-24 bg-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-xl mb-14">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-[#9B7B4A] mb-4 block">Industries</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.8rem)] text-[#EDE8E3] leading-tight mb-3">
              Built for high-trust organizations.
            </h2>
            <p className="font-sans text-sm text-[#6A6460]">VANI is designed for the regulated, people-first industries where every customer interaction matters.</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
          {INDUSTRIES.map((ind) => (
            <motion.div
              key={ind.name}
              variants={staggerItem}
              className="bg-[#1C1917] hover:bg-[#221E1B] transition-colors duration-200 p-8 flex flex-col gap-4"
            >
              <h3 className="font-sans font-semibold text-base text-[#EDE8E3]">{ind.name}</h3>
              <div className="w-6 h-px bg-[#7D1A28]" />
              <ul className="space-y-2">
                {ind.cases.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <svg width="6" height="6" viewBox="0 0 6 6" className="shrink-0 mt-1.5"><polygon points="3,0 6,3 3,6 0,3" fill="#9B7B4A" opacity="0.6" /></svg>
                    <span className="font-sans text-xs text-[#6A6460] leading-relaxed">{c}</span>
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
