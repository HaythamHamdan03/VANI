"use client";

import { motion } from "framer-motion";
import {
  Phone, MessageCircle, Mail, Share2,
  AlertCircle, CheckCircle2, ArrowUpRight,
  Activity, Shield, Users, Zap,
} from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

/* ── Metric card ──────────────────────────────────────────────── */
function MetricCard({
  label, value, sub, delta, positive = true,
}: {
  label: string; value: string; sub?: string; delta?: string; positive?: boolean;
}) {
  return (
    <div className="bg-white border border-[var(--color-ivory-border)] rounded-2xl p-5 hover:shadow-md transition-shadow duration-300">
      <p className="text-[10px] font-sans font-medium text-[var(--color-stone)] uppercase tracking-widest mb-2">{label}</p>
      <p className="font-display text-3xl font-semibold text-[var(--color-charcoal)] mb-1">{value}</p>
      {sub && <p className="text-xs font-sans text-[var(--color-stone)] mb-2">{sub}</p>}
      {delta && (
        <span className={`inline-flex items-center gap-1 text-[10px] font-sans font-medium px-2 py-0.5 rounded-full ${positive ? "bg-green-50 text-green-700" : "bg-[var(--color-wine-200)] text-[var(--color-wine)]"}`}>
          <ArrowUpRight size={9} className={positive ? "" : "rotate-180"} />
          {delta}
        </span>
      )}
    </div>
  );
}

/* ── Conversation row — static, no individual motion ─────────── */
function ConvRow({
  name, intent, channel, status, confidence, time, urgent,
}: {
  name: string; intent: string; channel: string; status: string;
  confidence: number; time: string; urgent: boolean;
}) {
  const ChIcon: Record<string, React.ElementType> = { call: Phone, whatsapp: MessageCircle, email: Mail, social: Share2, chat: Zap };
  const Icon = ChIcon[channel] ?? MessageCircle;

  const statusStyle: Record<string, string> = {
    "AI Resolved":   "bg-green-50 text-green-700",
    "Escalated":     "bg-[var(--color-wine-200)] text-[var(--color-wine)]",
    "Pending Human": "bg-amber-50 text-amber-700",
    "AI Active":     "bg-blue-50 text-blue-700",
  };

  const confColor = confidence >= 85 ? "text-green-600" : confidence >= 70 ? "text-amber-600" : "text-[var(--color-wine)]";

  return (
    <tr className="border-b border-[var(--color-ivory-border)] hover:bg-[var(--color-ivory)] transition-colors duration-150">
      <td className="py-3 pl-5 pr-3 w-8">
        {urgent && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-wine)] animate-ping-slow" />}
      </td>
      <td className="py-3 pr-4">
        <div className="flex items-center gap-2">
          <Icon size={12} className="text-[var(--color-stone)] shrink-0" />
          <span className="font-sans text-sm font-medium text-[var(--color-charcoal)]">{name}</span>
        </div>
      </td>
      <td className="py-3 pr-4 hidden md:table-cell">
        <span className="font-sans text-xs text-[var(--color-stone)]">{intent}</span>
      </td>
      <td className="py-3 pr-4">
        <span className={`inline-block text-[10px] font-sans font-medium px-2.5 py-1 rounded-full ${statusStyle[status] ?? "bg-[var(--color-stone-100)] text-[var(--color-stone)]"}`}>
          {status}
        </span>
      </td>
      <td className={`py-3 pr-4 hidden lg:table-cell text-xs font-sans font-medium ${confColor}`}>
        {confidence}%
      </td>
      <td className="py-3 pr-5 text-xs font-sans text-[var(--color-stone)] hidden sm:table-cell">{time}</td>
    </tr>
  );
}

/* ── Mini bar — whileInView, no useInView hook ────────────────── */
function MiniBar({ label, pct, delay }: { label: string; pct: number; delay: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-xs font-sans text-[var(--color-stone)]">{label}</span>
        <span className="text-xs font-sans font-medium text-[var(--color-charcoal)]">{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[var(--color-stone-100)] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-[var(--color-wine)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-60px 0px" }}
          transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

/* ── Main Dashboard section ───────────────────────────────────── */
export function Dashboard() {
  const conversations = [
    { name: "Ahmed K.",  intent: "Card Blocking — Urgent Travel",  channel: "call",     status: "Escalated",     confidence: 68, time: "0:42", urgent: true  },
    { name: "Sara M.",   intent: "Appointment — Internal Medicine", channel: "whatsapp", status: "AI Resolved",   confidence: 94, time: "1:12", urgent: false },
    { name: "Faisal A.", intent: "Fees & Payment Plan Inquiry",     channel: "chat",     status: "AI Active",     confidence: 88, time: "2:01", urgent: false },
    { name: "Reem N.",   intent: "Complaint — Unresolved 3 Weeks",  channel: "social",   status: "Escalated",     confidence: 65, time: "4:30", urgent: true  },
    { name: "Omar S.",   intent: "ATM Location — Near Tahlia St.",  channel: "whatsapp", status: "AI Resolved",   confidence: 97, time: "5:08", urgent: false },
    { name: "Noor H.",   intent: "Lab Results Collection Process",  channel: "email",    status: "Pending Human", confidence: 72, time: "6:20", urgent: false },
  ];

  return (
    <section
      id="dashboard"
      className="section-pad bg-[var(--color-ivory-dark)] relative overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-beige)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <ScrollReveal>
            <span className="inline-block text-[10px] font-sans font-medium tracking-[0.18em] uppercase text-[var(--color-wine)] mb-5">
              Product Preview
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-semibold text-[var(--color-charcoal)] leading-tight mb-5">
              Full visibility into every conversation, escalation, and outcome.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="font-sans text-base text-[var(--color-charcoal-60)] leading-relaxed">
              The VANI dashboard gives your team a real-time command view of all
              AI-handled and human-escalated cases — with intent labels, confidence scores,
              compliance flags, and performance analytics.
            </p>
          </ScrollReveal>
        </div>

        {/* Dashboard chrome — one smooth reveal */}
        <ScrollReveal delay={0.1} duration={0.7}>
          <div className="bg-[var(--color-charcoal)] rounded-3xl overflow-hidden dashboard-shadow w-full">

            {/* Window bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-[var(--color-charcoal-80)]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                <div className="w-3 h-3 rounded-full bg-green-400/70" />
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-status" />
                <span className="text-[11px] text-white/40 font-sans">VANI Support Dashboard — Live Mode</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] text-white/25 font-sans hidden sm:block">Jun 27, 2026 · 09:41 AM</span>
                <button className="text-[10px] font-sans text-white/30 border border-white/10 px-2.5 py-1 rounded-full hover:bg-white/5 transition-colors">
                  Export
                </button>
              </div>
            </div>

            {/* Tab nav */}
            <div className="flex gap-0 border-b border-white/[0.06]">
              {["Overview", "Queue", "Analytics", "Audit Log"].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-5 py-3 text-xs font-sans font-medium transition-colors ${
                    i === 0
                      ? "text-white/90 border-b-2 border-[var(--color-wine)] -mb-px"
                      : "text-white/30 hover:text-white/60"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-5 space-y-5">
              {/* Metric cards — static, no individual animation */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <MetricCard label="AI Resolved Today" value="247" delta="+12% vs yesterday" positive />
                <MetricCard label="Human Escalated"   value="12"  sub="4.6% escalation rate" />
                <MetricCard label="Live Queue"        value="8"   sub="across 5 channels" />
                <MetricCard label="Avg. Response"     value="1.4s" delta="↓18% this week" positive />
              </div>

              {/* Two-column: queue + sidebar */}
              <div className="grid lg:grid-cols-3 gap-4">

                {/* Conversation queue */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-[var(--color-ivory-border)] overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-ivory-border)]">
                    <div className="flex items-center gap-2">
                      <Activity size={13} className="text-[var(--color-wine)]" />
                      <h3 className="font-sans font-semibold text-sm text-[var(--color-charcoal)]">Live Conversation Queue</h3>
                    </div>
                    <span className="text-[10px] font-sans text-[var(--color-stone)] border border-[var(--color-beige)] px-2.5 py-1 rounded-full">
                      Showing 6 of 8
                    </span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[var(--color-ivory-border)]">
                          <th className="w-8" />
                          <th className="text-left py-2 pl-5 pr-4 text-[10px] font-sans font-medium text-[var(--color-stone)] uppercase tracking-wider">Customer</th>
                          <th className="text-left py-2 pr-4 text-[10px] font-sans font-medium text-[var(--color-stone)] uppercase tracking-wider hidden md:table-cell">Intent</th>
                          <th className="text-left py-2 pr-4 text-[10px] font-sans font-medium text-[var(--color-stone)] uppercase tracking-wider">Status</th>
                          <th className="text-left py-2 pr-4 text-[10px] font-sans font-medium text-[var(--color-stone)] uppercase tracking-wider hidden lg:table-cell">Confidence</th>
                          <th className="text-left py-2 pr-5 text-[10px] font-sans font-medium text-[var(--color-stone)] uppercase tracking-wider hidden sm:table-cell">Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {conversations.map((c, i) => (
                          <ConvRow key={i} {...c} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Sidebar panels */}
                <div className="space-y-4">
                  {/* Channel breakdown */}
                  <div className="bg-white rounded-2xl border border-[var(--color-ivory-border)] p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Share2 size={13} className="text-[var(--color-wine)]" />
                      <h3 className="font-sans font-semibold text-sm text-[var(--color-charcoal)]">Channel Volume</h3>
                    </div>
                    <div className="space-y-3">
                      <MiniBar label="WhatsApp"    pct={68} delay={0}    />
                      <MiniBar label="Voice Calls" pct={52} delay={0.06} />
                      <MiniBar label="Web Chat"    pct={34} delay={0.12} />
                      <MiniBar label="Email"       pct={22} delay={0.18} />
                      <MiniBar label="Social"      pct={14} delay={0.24} />
                    </div>
                  </div>

                  {/* Compliance panel */}
                  <div className="bg-[var(--color-wine-100)] rounded-2xl border border-[var(--color-wine-200)] p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Shield size={13} className="text-[var(--color-wine)]" />
                      <h3 className="font-sans font-semibold text-sm text-[var(--color-wine)]">Compliance Signals</h3>
                    </div>
                    <div className="space-y-2">
                      {[
                        { flag: "PII detected — masked in log",    time: "09:38" },
                        { flag: "Sensitive case routed to agent",   time: "09:41" },
                        { flag: "Knowledge gap identified",         time: "08:52" },
                      ].map((f, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <AlertCircle size={11} className="text-[var(--color-wine)] shrink-0 mt-0.5" />
                          <div>
                            <p className="text-[10px] font-sans text-[var(--color-wine)] font-medium">{f.flag}</p>
                            <p className="text-[9px] font-sans text-[var(--color-stone)]">{f.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quality panel */}
                  <div className="bg-white rounded-2xl border border-[var(--color-ivory-border)] p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Users size={13} className="text-[var(--color-wine)]" />
                      <h3 className="font-sans font-semibold text-sm text-[var(--color-charcoal)]">Agent Quality</h3>
                    </div>
                    <div className="space-y-2">
                      {[
                        { agent: "Triage Agent",   score: 98 },
                        { agent: "Response Agent", score: 94 },
                        { agent: "Compliance",     score: 100 },
                      ].map((a, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 size={11} className="text-green-600 shrink-0" />
                          <span className="text-xs font-sans flex-1 text-[var(--color-charcoal-60)]">{a.agent}</span>
                          <span className="text-xs font-sans font-semibold text-green-700">{a.score}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Caption */}
        <ScrollReveal delay={0.1} className="mt-6 text-center">
          <p className="font-sans text-xs text-[var(--color-stone)]">
            Dashboard preview — populated with representative mock data.
            Real deployments reflect your actual support volume and channels.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
