"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle, Phone, Mail, Zap, Users, CheckCircle } from "lucide-react";
import { VaniLogo } from "@/components/ui/VaniLogo";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/data/content";

/* ── Mini floating conversation card ─────────────────────────── */
function ConvCard({
  side,
  message,
  label,
  delay,
  className,
}: {
  side: "ai" | "human";
  message: string;
  label: string;
  delay: number;
  className?: string;
}) {
  const isAI = side === "ai";
  return (
    <motion.div
      className={`absolute z-10 max-w-[240px] ${className}`}
      initial={{ opacity: 0, scale: 0.9, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className={`rounded-2xl px-4 py-3 text-xs shadow-lg ${
        isAI
          ? "bg-[var(--color-charcoal)] text-[var(--color-ivory)] rounded-bl-sm"
          : "bg-white text-[var(--color-charcoal)] rounded-br-sm border border-[var(--color-ivory-border)]"
      }`}>
        <p className="font-sans leading-relaxed">{message}</p>
      </div>
      <p className={`mt-1.5 text-[10px] font-sans text-[var(--color-stone)] ${isAI ? "text-left pl-1" : "text-right pr-1"}`}>
        {label}
      </p>
    </motion.div>
  );
}

/* ── Hero stat pill ───────────────────────────────────────────── */
function StatPill({ icon: Icon, value, label, delay }: { icon: React.ElementType; value: string; label: string; delay: number }) {
  return (
    <motion.div
      className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm border border-[var(--color-ivory-border)] rounded-full px-4 py-2 shadow-sm"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Icon size={14} className="text-[var(--color-wine)] shrink-0" />
      <span className="font-sans font-semibold text-sm text-[var(--color-charcoal)]">{value}</span>
      <span className="font-sans text-xs text-[var(--color-stone)]">{label}</span>
    </motion.div>
  );
}

/* ── Dashboard mock (right side visual) ──────────────────────── */
function DashboardPreview() {
  const conversations = [
    { name: "Ahmed K.", intent: "Card Block", channel: "call", urgent: true,  status: "Escalated",  time: "0:42" },
    { name: "Sara M.",  intent: "Appt. Book", channel: "whatsapp", urgent: false, status: "Resolved", time: "1:12" },
    { name: "Faisal A.", intent: "Fees Inquiry", channel: "chat", urgent: false, status: "AI Active", time: "2:01" },
    { name: "Reem N.",  intent: "Complaint",  channel: "email", urgent: true,  status: "Pending",   time: "4:30" },
  ];

  const statusColor: Record<string, string> = {
    Escalated: "bg-[var(--color-wine-200)] text-[var(--color-wine)]",
    Resolved:  "bg-green-50 text-green-700",
    "AI Active": "bg-blue-50 text-blue-700",
    Pending:   "bg-amber-50 text-amber-700",
  };

  const channelIcon: Record<string, React.ElementType> = {
    call: Phone,
    whatsapp: MessageCircle,
    chat: Zap,
    email: Mail,
  };

  return (
    <div className="relative w-full max-w-[540px] mx-auto">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-3xl bg-[var(--color-wine)] opacity-[0.06] blur-3xl scale-110 pointer-events-none" />

      <motion.div
        className="relative bg-[var(--color-charcoal)] rounded-3xl overflow-hidden dashboard-shadow"
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: 0.5, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ perspective: 1000 }}
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-amber-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-status" />
            <span className="text-[11px] text-white/40 font-sans">VANI Dashboard — Live</span>
          </div>
          <div className="w-16" />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-px bg-white/5 border-b border-white/5">
          {[
            { label: "AI Resolved", value: "247", delta: "+12%" },
            { label: "Escalated",   value: "12",  delta: "4.6%" },
            { label: "Queue",       value: "8",   delta: "live" },
            { label: "Avg. Time",   value: "1.4s", delta: "↓18%" },
          ].map((s, i) => (
            <div key={i} className="bg-[var(--color-charcoal-80)] px-4 py-3">
              <p className="text-[10px] text-white/40 font-sans uppercase tracking-wider mb-1">{s.label}</p>
              <p className="text-lg font-display font-semibold text-[var(--color-ivory)]">{s.value}</p>
              <p className="text-[10px] text-[var(--color-wine-200)] font-sans mt-0.5">{s.delta}</p>
            </div>
          ))}
        </div>

        {/* Conversation queue */}
        <div className="px-4 pt-4 pb-1">
          <p className="text-[10px] text-white/30 font-sans uppercase tracking-widest mb-3">Live Queue</p>
          <div className="space-y-2">
            {conversations.map((c, i) => {
              const Icon = channelIcon[c.channel];
              return (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.04] rounded-xl px-3 py-2.5 transition-colors duration-200"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.08 }}
                >
                  {c.urgent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-wine)] animate-ping-slow shrink-0" />
                  )}
                  {!c.urgent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                  )}
                  <Icon size={11} className="text-white/40 shrink-0" />
                  <span className="text-xs text-white/80 font-sans font-medium flex-1 truncate">{c.name}</span>
                  <span className="text-[10px] text-white/30 font-sans truncate">{c.intent}</span>
                  <span className={`text-[9px] font-sans font-medium px-2 py-0.5 rounded-full shrink-0 ${statusColor[c.status]}`}>
                    {c.status}
                  </span>
                  <span className="text-[10px] text-white/20 font-sans shrink-0">{c.time}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Channel bar chart */}
        <div className="px-4 pt-4 pb-5">
          <p className="text-[10px] text-white/30 font-sans uppercase tracking-widest mb-3">Channel volume today</p>
          <div className="flex items-end gap-2 h-12">
            {[
              { ch: "WhatsApp", pct: 72 },
              { ch: "Voice",    pct: 55 },
              { ch: "Chat",     pct: 38 },
              { ch: "Email",    pct: 24 },
              { ch: "Social",   pct: 18 },
            ].map((b, i) => (
              <div key={i} className="flex flex-col items-center gap-1 flex-1">
                <motion.div
                  className="w-full rounded-t bg-[var(--color-wine)] opacity-70"
                  style={{ height: `${b.pct}%`, originY: 1 }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                />
                <span className="text-[8px] text-white/25 font-sans truncate w-full text-center">{b.ch}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────────────── */
export function Hero() {
  const ref = useRef<HTMLElement>(null);

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[var(--color-ivory)] flex flex-col"
    >
      {/* Subtle texture grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Warm radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[var(--color-wine)] rounded-full opacity-[0.04] blur-[120px]" />

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 flex-1 flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

            {/* Left — copy */}
            <div className="flex flex-col gap-6 lg:gap-8">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 self-start"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.55 }}
              >
                <span className="inline-flex items-center gap-2 text-xs font-sans font-medium tracking-widest uppercase text-[var(--color-wine)] border border-[var(--color-wine-200)] bg-[var(--color-wine-100)] rounded-full px-3.5 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-wine)] pulse-status" />
                  Enterprise AI Support
                </span>
              </motion.div>

              {/* Headline */}
              <div className="overflow-hidden">
                <motion.h1
                  className="font-display font-semibold text-[clamp(2.8rem,6vw,5rem)] leading-[1.02] text-[var(--color-charcoal)]"
                  initial={{ opacity: 0, y: 48 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  AI support with<br />
                  <em className="not-italic text-[var(--color-wine)]">a human voice.</em>
                </motion.h1>
              </div>

              {/* Subheadline */}
              <motion.p
                className="font-sans text-base md:text-lg text-[var(--color-charcoal-60)] leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.65 }}
              >
                {BRAND.description}
              </motion.p>

              {/* Trust line */}
              <motion.p
                className="font-sans text-sm text-[var(--color-stone)] tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                {BRAND.trustLine}
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-3 pt-2"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.55 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => handleScroll("#demo")}
                >
                  Request a Demo
                  <ArrowRight size={16} />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => handleScroll("#simulation")}
                >
                  Try Simulation
                </Button>
              </motion.div>

              {/* Micro-trust line */}
              <motion.div
                className="flex items-center gap-3 pt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
              >
                <CheckCircle size={13} className="text-[var(--color-wine)] shrink-0" />
                <span className="text-xs font-sans text-[var(--color-stone)]">
                  No setup commitment · Arabic &amp; English support · Enterprise deployment
                </span>
              </motion.div>

              {/* Stat pills */}
              <motion.div
                className="flex flex-wrap gap-2 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85 }}
              >
                <StatPill icon={Zap}     value="24/7"    label="Always on"      delay={0.9} />
                <StatPill icon={Users}   value="Human+"  label="escalation"     delay={0.95} />
                <StatPill icon={Phone}   value="6"       label="channels"       delay={1.0} />
              </motion.div>
            </div>

            {/* Right — dashboard preview */}
            <div className="relative hidden lg:block">
              <DashboardPreview />
            </div>
          </div>
        </div>

        {/* Bottom scroll cue */}
        <div className="flex justify-center pb-10 relative z-10">
          <motion.button
            onClick={() => handleScroll("#problem")}
            className="flex flex-col items-center gap-2 text-[var(--color-stone)] hover:text-[var(--color-charcoal)] transition-colors cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-[10px] font-sans tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-transparent via-[var(--color-stone)] to-transparent"
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
