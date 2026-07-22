"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Globe, Mail, Share2, Smartphone, CheckCircle } from "lucide-react";
import type { LCTheme } from "@/lib/lc-themes";

// ── Network data ──────────────────────────────────────────────────
const CHANNELS = [
  { label: "Voice",    Icon: Phone,         angle: -90  },
  { label: "WhatsApp", Icon: MessageCircle, angle: -30  },
  { label: "Chat",     Icon: Globe,         angle:  30  },
  { label: "Email",    Icon: Mail,          angle:  90  },
  { label: "Social",   Icon: Share2,        angle: 150  },
  { label: "App",      Icon: Smartphone,    angle: 210  },
];

const AGENTS = [
  { label: "Triage",     hot: true,  angle: -90   },
  { label: "Knowledge",  hot: false, angle: -38.6 },
  { label: "Response",   hot: false, angle:  12.8 },
  { label: "Compliance", hot: true,  angle:  64.3 },
  { label: "Escalation", hot: false, angle: 115.7 },
  { label: "Summary",    hot: false, angle: 167.2 },
  { label: "Quality",    hot: true,  angle: 218.6 },
];

function toXY(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

const CX = 260, CY = 230;
const R_OUTER = 190;
const R_INNER = 100;

// ── Network visualization ──────────────────────────────────────────
function NetworkViz({ theme }: { theme: LCTheme }) {
  const A = theme.accent;

  const channels = CHANNELS.map((c) => ({ ...c, ...toXY(CX, CY, R_OUTER, c.angle) }));
  const agents   = AGENTS.map((a)   => ({ ...a, ...toXY(CX, CY, R_INNER, a.angle) }));

  return (
    <div className="relative w-full max-w-[540px] mx-auto hidden lg:block">
      <svg viewBox="0 0 520 460" className="w-full h-auto" aria-hidden>
        <defs>
          <radialGradient id="lc-coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor={A} stopOpacity="0.22" />
            <stop offset="100%" stopColor={A} stopOpacity="0" />
          </radialGradient>
          <filter id="lc-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="lc-dotGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Orbit rings */}
        <circle cx={CX} cy={CY} r={R_OUTER}
          fill="none" stroke="rgba(26,111,232,0.08)" strokeWidth="1" strokeDasharray="4 9" />
        <circle cx={CX} cy={CY} r={R_INNER}
          fill="none" stroke="rgba(26,111,232,0.11)" strokeWidth="1" />

        {/* Lines: channels → core */}
        {channels.map((ch, i) => (
          <motion.line key={`lc-cl-${i}`}
            x1={ch.x} y1={ch.y} x2={CX} y2={CY}
            stroke="rgba(26,111,232,0.17)" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.12 + 0.5 }}
          />
        ))}

        {/* Lines: core → agents */}
        {agents.map((ag, i) => (
          <motion.line key={`lc-al-${i}`}
            x1={CX} y1={CY} x2={ag.x} y2={ag.y}
            stroke="rgba(26,111,232,0.11)" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.1 + 0.9 }}
          />
        ))}

        {/* Travelling dots: channels → core */}
        {channels.map((ch, i) => (
          <motion.circle key={`lc-dch-${i}`}
            r="3.5" fill={A} filter="url(#lc-dotGlow)"
            animate={{
              x: [ch.x, CX],
              y: [ch.y, CY],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.8,
              delay: i * 0.3 + 1.5,
              repeat: Infinity,
              repeatDelay: 1.5 + i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Travelling dots: core → agents */}
        {agents.map((ag, i) => (
          <motion.circle key={`lc-dag-${i}`}
            r="2.5" fill="rgba(26,111,232,0.55)" filter="url(#lc-dotGlow)"
            animate={{
              x: [CX, ag.x],
              y: [CY, ag.y],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.6,
              delay: i * 0.25 + 2.0,
              repeat: Infinity,
              repeatDelay: 2 + i * 0.35,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Channel nodes */}
        {channels.map((ch, i) => (
          <motion.g key={`lc-ch-${i}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
          >
            {/* Ambient halo */}
            <circle cx={ch.x} cy={ch.y} r="36"
              fill="rgba(26,111,232,0.05)" />
            {/* Node body */}
            <circle cx={ch.x} cy={ch.y} r="26"
              fill="white" stroke="rgba(26,111,232,0.25)" strokeWidth="1.5" />
            {/* Lucide icon */}
            <foreignObject x={ch.x - 11} y={ch.y - 11} width="22" height="22">
              <ch.Icon size={15} color={A} />
            </foreignObject>
            {/* Label */}
            <text x={ch.x} y={ch.y + 43} textAnchor="middle"
              fill={theme.muted} fontSize="8.5" fontFamily="system-ui, sans-serif"
              letterSpacing="0.08em" fontWeight="500">
              {ch.label.toUpperCase()}
            </text>
          </motion.g>
        ))}

        {/* Core ambient glow */}
        <circle cx={CX} cy={CY} r="65" fill="url(#lc-coreGlow)" />

        {/* VANI Core node */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
        >
          <circle cx={CX} cy={CY} r="44"
            fill="white" stroke={A} strokeWidth="2" />
          <circle cx={CX} cy={CY} r="44"
            fill="rgba(26,111,232,0.06)" />
          <text x={CX} y={CY - 4} textAnchor="middle"
            fill={A} fontSize="13" fontFamily="system-ui, sans-serif"
            fontWeight="800" letterSpacing="0.16em">
            VANI
          </text>
          <text x={CX} y={CY + 10} textAnchor="middle"
            fill={theme.faint} fontSize="7" fontFamily="system-ui, sans-serif"
            fontWeight="400" letterSpacing="0.12em">
            AI CORE
          </text>
          {/* Pulse ring 1 */}
          <motion.circle cx={CX} cy={CY} r="44"
            fill="none" stroke="rgba(26,111,232,0.38)" strokeWidth="1.5"
            animate={{ r: [44, 74], opacity: [0.9, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", repeatDelay: 0.3 }}
          />
          {/* Pulse ring 2 — offset phase */}
          <motion.circle cx={CX} cy={CY} r="44"
            fill="none" stroke="rgba(26,111,232,0.20)" strokeWidth="1"
            animate={{ r: [44, 82], opacity: [0.7, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", repeatDelay: 0.3, delay: 1.2 }}
          />
        </motion.g>

        {/* Agent nodes */}
        {agents.map((ag, i) => (
          <motion.g key={`lc-ag-${i}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 + 0.7, duration: 0.4 }}
          >
            <circle cx={ag.x} cy={ag.y} r="20"
              fill="white"
              stroke={ag.hot ? "rgba(26,111,232,0.48)" : "rgba(26,111,232,0.16)"}
              strokeWidth="1.5"
            />
            {ag.hot ? (
              <motion.circle cx={ag.x} cy={ag.y} r="6"
                fill={A}
                animate={{ r: [5, 7, 5], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            ) : (
              <circle cx={ag.x} cy={ag.y} r="5" fill="rgba(26,111,232,0.22)" />
            )}
            <text x={ag.x} y={ag.y + 33} textAnchor="middle"
              fill={theme.muted} fontSize="7.5" fontFamily="system-ui, sans-serif"
              letterSpacing="0.06em" fontWeight="500">
              {ag.label.toUpperCase()}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Floating Live Queue card */}
      <motion.div
        className="absolute bottom-6 right-0 rounded-xl p-3.5 min-w-[155px]"
        style={{
          backgroundColor: "white",
          border: "1px solid rgba(26,111,232,0.15)",
          boxShadow: "0 8px 32px rgba(26,111,232,0.10)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-2.5">
          <motion.span
            className="w-2 h-2 rounded-full bg-green-500"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
          <span className="text-[10px] font-mono uppercase tracking-widest"
            style={{ color: theme.muted }}>Live Queue</span>
        </div>
        {[
          { label: "AI Resolved", value: "247", color: "#22c55e" },
          { label: "Escalated",   value: "12",  color: theme.accent },
          { label: "Avg. Time",   value: "1.4s", color: theme.faint },
        ].map((m) => (
          <div key={m.label} className="flex justify-between items-center py-0.5">
            <span className="text-[10px]" style={{ color: theme.faint }}>{m.label}</span>
            <span className="text-[11px] font-mono font-semibold" style={{ color: m.color }}>{m.value}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ── Trust badges ──────────────────────────────────────────────────
const TRUST_POINTS = [
  "AI handles repetition. Humans handle excellence.",
  "Arabic-first and English-ready. Voice + messaging.",
  "Private knowledge layer. Your data stays yours.",
];

// ── Stats badge ───────────────────────────────────────────────────
function StatBadge({ value, label, theme }: { value: string; label: string; theme: LCTheme }) {
  return (
    <div className="flex flex-col items-center gap-0.5 border-r last:border-0 pr-5 last:pr-0"
      style={{ borderColor: theme.border }}>
      <span className="text-lg font-mono font-bold" style={{ color: theme.ink }}>{value}</span>
      <span className="text-[10px] uppercase tracking-wider" style={{ color: theme.faint }}>{label}</span>
    </div>
  );
}

// ── Hero section ──────────────────────────────────────────────────
export function LCHero({ theme }: { theme: LCTheme }) {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: theme.bg }}
    >
      {/* Dot-grid background */}
      <div className="pointer-events-none absolute inset-0" style={{
        backgroundImage: theme.heroBgImage,
        backgroundSize: theme.heroBgSize,
      }} />
      {/* Accent glow */}
      <div className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: theme.heroGlow }} />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left — copy */}
            <div className="flex flex-col gap-7">
              {/* Status badge */}
              <motion.div
                className="inline-flex items-center gap-2 self-start rounded-full px-3.5 py-2"
                style={{ border: `1px solid ${theme.border}`, backgroundColor: theme.surface }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <motion.span className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#22c55e" }}
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em]"
                  style={{ color: theme.faint }}>
                  Enterprise AI Support · Active
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h1 className="font-sans font-bold text-[clamp(2.6rem,5.2vw,4.4rem)] leading-[1.04] tracking-tight"
                  style={{ color: theme.ink }}>
                  AI support with<br />
                  <span style={{ color: theme.accent }}>a human voice.</span>
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                className="font-sans text-base leading-relaxed max-w-[500px]"
                style={{ color: theme.muted }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                VANI helps enterprise teams resolve repetitive calls and messages 24/7,
                while escalating sensitive, complex, and revenue-impacting cases to the people
                who handle them best.
              </motion.p>

              {/* CTAs */}
              <motion.div className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  onClick={() => go("#demo")}
                  className="inline-flex items-center gap-2 font-sans font-medium text-sm px-6 py-3.5 rounded-md cursor-pointer text-white"
                  style={{ backgroundColor: theme.accent }}
                  whileHover={{ scale: 1.02, opacity: 0.92 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Request a Demo <ArrowRight size={14} />
                </motion.button>
                <motion.button
                  onClick={() => go("#simulation")}
                  className="inline-flex items-center gap-2 font-sans font-medium text-sm px-6 py-3.5 rounded-md border cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.muted, backgroundColor: theme.surface }}
                  whileHover={{ borderColor: theme.accent, color: theme.accent }}
                  transition={{ duration: 0.15 }}
                >
                  Try Simulation
                </motion.button>
              </motion.div>

              {/* Trust points */}
              <motion.div className="flex flex-col gap-2.5"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
              >
                {TRUST_POINTS.map((pt) => (
                  <div key={pt} className="flex items-center gap-2.5">
                    <CheckCircle size={13} style={{ color: theme.accent }} className="shrink-0" />
                    <span className="font-sans text-sm" style={{ color: theme.muted }}>{pt}</span>
                  </div>
                ))}
              </motion.div>

              {/* Stats strip */}
              <motion.div
                className="flex gap-5 pt-4 border-t"
                style={{ borderColor: theme.border }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.75 }}
              >
                <StatBadge value="24/7"  label="Always on"  theme={theme} />
                <StatBadge value="6"     label="Channels"   theme={theme} />
                <StatBadge value="7"     label="AI Agents"  theme={theme} />
                <StatBadge value="<2s"   label="Response"   theme={theme} />
              </motion.div>
            </div>

            {/* Right — professional network visualization */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <NetworkViz theme={theme} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative z-10 flex justify-center py-6">
        <motion.button onClick={() => go("#problem")}
          className="flex flex-col items-center gap-2 cursor-pointer"
          style={{ color: theme.faint }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          whileHover={{ color: theme.muted }}
        >
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-px h-7"
            style={{ background: `linear-gradient(to bottom, transparent, ${theme.faint}, transparent)` }}
          />
        </motion.button>
      </div>
    </section>
  );
}
