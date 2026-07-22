"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { LCTheme } from "@/lib/lc-themes";

// ── Network visualization constants ─────────────────────────────────
const CX = 210, CY = 180, R_OUT = 148, R_IN = 82;

function toXY(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

const CH_ANGLES  = [0, 60, 120, 180, 240, 300];
const AG_ANGLES  = [0, 51, 103, 154, 206, 257, 309];
const CH_LABELS  = ["Voice", "WhatsApp", "Chat", "Email", "Social", "App"];
const AG_LABELS  = ["Triage", "Know.", "Response", "Comply", "Escalate", "Summary", "Quality"];

const CHANNELS = CH_ANGLES.map((a, i) => ({ ...toXY(CX, CY, R_OUT, a), label: CH_LABELS[i] }));
const AGENTS   = AG_ANGLES.map((a, i) => ({ ...toXY(CX, CY, R_IN, a),  label: AG_LABELS[i] }));

// Traveling dot paths (channel → VANI core)
const DOT_PATHS = [0, 2, 3, 5].map((ci) => ({
  from: CHANNELS[ci],
  to:   { x: CX, y: CY },
}));

function NetworkViz({ theme, delay = 0 }: { theme: LCTheme; delay?: number }) {
  return (
    <svg width="420" height="360" viewBox="0 0 420 360" className="w-full h-full" aria-hidden>
      <defs>
        <radialGradient id={`glow-${theme.slug}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={theme.netNode} stopOpacity="0.12" />
          <stop offset="100%" stopColor={theme.netNode} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient glow behind core */}
      <circle cx={CX} cy={CY} r="60" fill={`url(#glow-${theme.slug})`} />

      {/* Channel → agent lines (very faint) */}
      {CHANNELS.map((ch, ci) =>
        AGENTS.slice(0, 3).map((ag, ai) => (
          <line key={`ch-ag-${ci}-${ai}`}
            x1={ch.x} y1={ch.y} x2={ag.x} y2={ag.y}
            stroke={theme.netLine} strokeWidth="0.5"
          />
        ))
      )}

      {/* Channel → core lines */}
      {CHANNELS.map((ch, ci) => {
        const mid = { x: (ch.x + CX) / 2, y: (ch.y + CY) / 2 };
        return (
          <motion.line key={`ch-core-${ci}`}
            x1={ch.x} y1={ch.y} x2={CX} y2={CY}
            stroke={theme.netLine} strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: delay + ci * 0.12 + 0.4, duration: 0.8, ease: "easeOut" }}
          />
        );
      })}

      {/* Agent → core lines */}
      {AGENTS.map((ag, ai) => (
        <motion.line key={`ag-core-${ai}`}
          x1={ag.x} y1={ag.y} x2={CX} y2={CY}
          stroke={theme.netLine} strokeWidth="0.8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: delay + ai * 0.1 + 0.7, duration: 0.7 }}
        />
      ))}

      {/* Traveling dots: channel → core */}
      {DOT_PATHS.map((p, i) => (
        <motion.circle key={`dot-${i}`}
          r="3" fill={theme.netNode}
          animate={{
            x: [p.from.x, CX],
            y: [p.from.y, CY],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            delay: i * 0.7 + delay + 1.5,
            ease: "linear",
          }}
        />
      ))}

      {/* Channel nodes (outer ring) */}
      {CHANNELS.map((ch, i) => (
        <motion.g key={`ch-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + i * 0.1 + 0.2, duration: 0.4, type: "spring" }}
        >
          <circle cx={ch.x} cy={ch.y} r="18"
            fill={theme.accentSoft} stroke={theme.border} strokeWidth="1"
          />
          <circle cx={ch.x} cy={ch.y} r="5" fill={theme.netNode} />
          <text x={ch.x} y={ch.y + 30} textAnchor="middle"
            fontSize="9" fill={theme.faint} fontFamily="system-ui, sans-serif"
          >
            {ch.label}
          </text>
        </motion.g>
      ))}

      {/* Agent nodes (inner ring) */}
      {AGENTS.map((ag, i) => (
        <motion.g key={`ag-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + i * 0.08 + 0.5, duration: 0.35, type: "spring" }}
        >
          <circle cx={ag.x} cy={ag.y} r="13"
            fill={theme.surface} stroke={theme.border} strokeWidth="1"
          />
          <circle cx={ag.x} cy={ag.y} r="3.5" fill={theme.netNode} opacity="0.7" />
        </motion.g>
      ))}

      {/* VANI core */}
      <motion.g
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 0.15, duration: 0.5, type: "spring" }}
      >
        <motion.circle cx={CX} cy={CY} r="30"
          fill={theme.accentSoft} stroke={theme.accent} strokeWidth="1.5"
          animate={{ r: [28, 31, 28] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        />
        <circle cx={CX} cy={CY} r="20" fill={theme.accent} />
        <text x={CX} y={CY + 1} textAnchor="middle" dominantBaseline="middle"
          fontSize="8" fill="#fff" fontWeight="700" fontFamily="system-ui, sans-serif"
          letterSpacing="1"
        >
          VANI
        </text>
      </motion.g>
    </svg>
  );
}

// ── Trust strip badges ────────────────────────────────────────────────
const BADGES = [
  "Voice + Messages",
  "Human Escalation",
  "Private Knowledge",
  "Audit Logs",
  "Arabic + English",
  "Compliance-Aware",
];

export function LCHero({ theme }: { theme: LCTheme }) {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: theme.bg }}
    >
      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0" style={{
        backgroundImage: theme.heroBgImage,
        backgroundSize: theme.heroBgSize,
      }} />
      {/* Accent glow */}
      <div className="pointer-events-none absolute inset-0" style={{ background: theme.heroGlow }} />
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: `radial-gradient(ellipse 90% 70% at 10% 60%, ${theme.bg} 0%, transparent 60%)`,
      }} />

      <div className="relative z-10 flex-1 max-w-7xl mx-auto px-6 pt-32 pb-0 w-full">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center min-h-[calc(100vh-18rem)]">

          {/* Left: headline + CTAs */}
          <div className="flex flex-col gap-6">
            {/* Status badge */}
            <motion.div className="self-start"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-2.5 border px-3.5 py-2 rounded-full text-xs font-sans font-medium"
                style={{ borderColor: theme.border, backgroundColor: theme.surface, color: theme.muted }}
              >
                <motion.span className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: theme.accent }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                />
                Enterprise AI Support Operations
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="font-sans font-bold text-[clamp(2.6rem,5.2vw,4.4rem)] leading-[1.04] tracking-tight"
                style={{ color: theme.ink }}
              >
                AI support with<br />
                <span style={{ color: theme.accent }}>a human voice.</span>
              </h1>
            </motion.div>

            {/* Sub */}
            <motion.p className="font-sans text-base leading-relaxed max-w-[500px]"
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
                className="inline-flex items-center gap-2 font-sans font-medium text-sm px-6 py-3.5 rounded-md cursor-pointer"
                style={{ backgroundColor: theme.accent, color: "#fff" }}
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
              {[
                "AI handles repetition. Humans handle excellence.",
                "Arabic-first and English-ready. Voice + messaging.",
                "Private knowledge layer. Your data stays yours.",
              ].map((pt) => (
                <div key={pt} className="flex items-center gap-2.5">
                  <CheckCircle size={13} style={{ color: theme.accent }} className="shrink-0" />
                  <span className="font-sans text-sm" style={{ color: theme.muted }}>{pt}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Command Interface Preview */}
          <div className="hidden lg:block relative">
            <motion.div
              className="relative rounded-xl overflow-hidden shadow-2xl border"
              style={{ borderColor: theme.border, backgroundColor: theme.surface,
                boxShadow: `0 24px 64px ${theme.netGlow}, 0 4px 24px rgba(0,0,0,0.06)` }}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Chrome bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ borderColor: theme.border, backgroundColor: theme.dashChrome }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                <span className="ml-3 font-sans text-[10px] font-medium tracking-widest uppercase"
                  style={{ color: theme.faint }}
                >
                  VANI · AI Operations Network
                </span>
                <div className="ml-auto flex items-center gap-1.5">
                  <motion.div className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: "#22c55e" }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.6 }}
                  />
                  <span className="font-sans text-[10px]" style={{ color: theme.faint }}>Live</span>
                </div>
              </div>

              {/* Network viz */}
              <div className="p-4 pb-0" style={{ backgroundColor: theme.bg }}>
                <NetworkViz theme={theme} delay={0.5} />
              </div>

              {/* Metric strip */}
              <div className="grid grid-cols-4 border-t" style={{ borderColor: theme.border }}>
                {[
                  { v: "247", l: "Resolved" },
                  { v: "12",  l: "Escalated" },
                  { v: "94%", l: "Confidence" },
                  { v: "1.8s",l: "Response" },
                ].map(({ v, l }) => (
                  <div key={l} className="flex flex-col items-center py-3 border-r last:border-r-0 gap-0.5"
                    style={{ borderColor: theme.border, backgroundColor: theme.surface }}
                  >
                    <span className="font-sans font-bold text-sm" style={{ color: theme.accent }}>{v}</span>
                    <span className="font-sans text-[10px]" style={{ color: theme.faint }}>{l}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating alert card */}
            <motion.div
              className="absolute -bottom-10 -left-8 border rounded-xl shadow-lg px-4 py-3 flex items-center gap-3"
              style={{ backgroundColor: theme.surface, borderColor: theme.border,
                boxShadow: `0 8px 32px rgba(0,0,0,0.08)` }}
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: theme.accentSoft }}>
                <motion.div className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: theme.accent }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </div>
              <div>
                <p className="font-sans font-semibold text-xs" style={{ color: theme.ink }}>
                  Case escalated · Ahmed K.
                </p>
                <p className="font-sans text-[10px]" style={{ color: theme.faint }}>
                  Banking · Human agent briefed
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust strip */}
        <motion.div
          className="mt-20 pb-8 border-t pt-6"
          style={{ borderColor: theme.border }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="font-sans text-[10px] font-medium tracking-widest uppercase"
              style={{ color: theme.faint }}>
              Operational pillars
            </span>
            {BADGES.map((b) => (
              <div key={b} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full" style={{ backgroundColor: theme.accent }} />
                <span className="font-sans text-xs font-medium" style={{ color: theme.muted }}>{b}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="relative z-10 flex justify-center py-6">
        <motion.button onClick={() => go("#problem")}
          className="flex flex-col items-center gap-2 cursor-pointer"
          style={{ color: theme.faint }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          whileHover={{ color: theme.muted }}
        >
          <span className="font-sans text-[10px] tracking-widest uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-px h-6"
            style={{ background: `linear-gradient(to bottom, transparent, ${theme.faint}, transparent)` }}
          />
        </motion.button>
      </div>
    </section>
  );
}
