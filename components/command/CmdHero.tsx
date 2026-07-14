"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Globe, Mail, Share2, Smartphone } from "lucide-react";

// ── Animated AI-network SVG ─────────────────────────────────────
// 6 channel nodes → VANI core → 7 agent nodes
// Travelling dots animate along SVG paths

const CHANNELS = [
  { label: "Voice",     Icon: Phone,          angle: -90 },
  { label: "WhatsApp",  Icon: MessageCircle,  angle: -30 },
  { label: "Chat",      Icon: Globe,          angle:  30 },
  { label: "Email",     Icon: Mail,           angle:  90 },
  { label: "Social",    Icon: Share2,         angle: 150 },
  { label: "App",       Icon: Smartphone,     angle: 210 },
];

const AGENTS = [
  { label: "Triage",     color: "#C41230", angle: -90 },
  { label: "Knowledge",  color: "#6E7780", angle: -38.6 },
  { label: "Response",   color: "#6E7780", angle:  12.8 },
  { label: "Compliance", color: "#C41230", angle:  64.3 },
  { label: "Escalation", color: "#6E7780", angle: 115.7 },
  { label: "Summary",    color: "#6E7780", angle: 167.2 },
  { label: "Quality",    color: "#C41230", angle: 218.6 },
];

function toXY(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

const CX = 260, CY = 230;
const R_OUTER = 190;
const R_INNER = 100;

function NetworkViz() {
  const channels = CHANNELS.map((c) => ({ ...c, ...toXY(CX, CY, R_OUTER, c.angle) }));
  const agents   = AGENTS.map((a)   => ({ ...a, ...toXY(CX, CY, R_INNER, a.angle) }));

  return (
    <div className="relative w-full max-w-[540px] mx-auto hidden lg:block">
      <svg viewBox="0 0 520 460" className="w-full h-auto" aria-hidden>
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#C41230" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#C41230" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Outer ring */}
        <circle cx={CX} cy={CY} r={R_OUTER} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="4 8" />
        {/* Inner ring */}
        <circle cx={CX} cy={CY} r={R_INNER} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

        {/* Lines: channels → core */}
        {channels.map((ch, i) => (
          <motion.line
            key={`ch-line-${i}`}
            x1={ch.x} y1={ch.y} x2={CX} y2={CY}
            stroke="rgba(196,18,48,0.2)" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.12 + 0.5 }}
          />
        ))}

        {/* Lines: core → agents */}
        {agents.map((ag, i) => (
          <motion.line
            key={`ag-line-${i}`}
            x1={CX} y1={CY} x2={ag.x} y2={ag.y}
            stroke="rgba(255,255,255,0.08)" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.1 + 0.9 }}
          />
        ))}

        {/* Travelling dots on channel → core lines */}
        {channels.map((ch, i) => (
          <motion.circle
            key={`dot-ch-${i}`}
            r="3"
            fill="#C41230"
            filter="url(#glow)"
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

        {/* Travelling dots on core → agent lines */}
        {agents.map((ag, i) => (
          <motion.circle
            key={`dot-ag-${i}`}
            r="2.5"
            fill="rgba(232,234,237,0.7)"
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
          <motion.g
            key={`ch-${i}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
          >
            <circle cx={ch.x} cy={ch.y} r="26" fill="#0F1318" stroke="rgba(196,18,48,0.3)" strokeWidth="1" />
            <foreignObject x={ch.x - 12} y={ch.y - 12} width="24" height="24">
              <ch.Icon size={16} color="#6E7780" />
            </foreignObject>
            <text x={ch.x} y={ch.y + 40} textAnchor="middle" fill="#4A5260" fontSize="9" fontFamily="system-ui" letterSpacing="0.08em">
              {ch.label.toUpperCase()}
            </text>
          </motion.g>
        ))}

        {/* Core glow */}
        <circle cx={CX} cy={CY} r="55" fill="url(#coreGlow)" />

        {/* Core VANI node */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
        >
          <circle cx={CX} cy={CY} r="42" fill="#0F1318" stroke="#C41230" strokeWidth="1.5" />
          <circle cx={CX} cy={CY} r="42" fill="none" stroke="rgba(196,18,48,0.2)" strokeWidth="20" />
          <text x={CX} y={CY + 5} textAnchor="middle" fill="#E8EAED" fontSize="15" fontFamily="system-ui" fontWeight="700" letterSpacing="0.12em">
            VANI
          </text>
          {/* Pulse ring */}
          <motion.circle
            cx={CX} cy={CY} r="52"
            fill="none" stroke="rgba(196,18,48,0.3)" strokeWidth="1"
            animate={{ r: [42, 70], opacity: [0.8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", repeatDelay: 0.5 }}
          />
        </motion.g>

        {/* Agent nodes */}
        {agents.map((ag, i) => (
          <motion.g
            key={`ag-${i}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 + 0.7, duration: 0.4 }}
          >
            <circle cx={ag.x} cy={ag.y} r="20" fill="#0F1318" stroke={ag.color === "#C41230" ? "rgba(196,18,48,0.5)" : "rgba(255,255,255,0.08)"} strokeWidth="1" />
            <circle cx={ag.x} cy={ag.y} r="5" fill={ag.color} />
            <text x={ag.x} y={ag.y + 32} textAnchor="middle" fill="#4A5260" fontSize="8" fontFamily="system-ui" letterSpacing="0.06em">
              {ag.label.toUpperCase()}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Floating metric card overlay */}
      <motion.div
        className="absolute bottom-4 right-0 bg-[#0F1318] border border-white/[0.08] rounded-xl p-3.5 min-w-[150px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#22c55e] pulse-status" />
          <span className="text-[10px] font-mono text-[#6E7780] uppercase tracking-widest">Live Queue</span>
        </div>
        {[
          { label: "AI Resolved", value: "247", color: "#22c55e" },
          { label: "Escalated",   value: "12",  color: "#C41230" },
          { label: "Avg. Time",   value: "1.4s", color: "#6E7780" },
        ].map((m) => (
          <div key={m.label} className="flex justify-between items-center py-0.5">
            <span className="text-[10px] text-[#4A5260]">{m.label}</span>
            <span className="text-[11px] font-mono font-semibold" style={{ color: m.color }}>{m.value}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ── Stats pill ──────────────────────────────────────────────────
function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5 border-r border-white/[0.08] last:border-0 pr-5 last:pr-0">
      <span className="text-lg font-mono font-bold text-[#E8EAED]">{value}</span>
      <span className="text-[10px] text-[#4A5260] uppercase tracking-wider">{label}</span>
    </div>
  );
}

// ── Hero ────────────────────────────────────────────────────────
export function CmdHero() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#070B0F]"
    >
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Red gradient blob */}
      <div className="pointer-events-none absolute top-0 right-0 w-[700px] h-[500px] bg-[#C41230] opacity-[0.04] blur-[160px] rounded-full" />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — copy */}
            <div className="flex flex-col gap-7">
              {/* Status badge */}
              <motion.div
                className="inline-flex items-center gap-2 self-start border border-white/[0.08] rounded px-3 py-1.5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <span className="text-[10px] font-mono text-[#6E7780] uppercase tracking-[0.2em]">
                  Enterprise AI Support · Active
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <h1 className="font-sans font-bold text-[clamp(2.6rem,5.5vw,4.5rem)] leading-[1.0] text-[#E8EAED] tracking-tight">
                  AI support with<br />
                  <span className="text-[#C41230]">a human voice.</span>
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                className="font-sans text-base text-[#6E7780] leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                VANI helps enterprise teams resolve repetitive calls and messages
                24/7 — while escalating complex and sensitive cases to the people
                who handle them best.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  onClick={() => go("#demo")}
                  className="inline-flex items-center gap-2 bg-[#C41230] hover:bg-[#A50E26] text-white font-sans font-medium text-sm px-5 py-3 rounded transition-colors duration-150 cursor-pointer"
                >
                  Request a Demo <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => go("#simulation")}
                  className="inline-flex items-center gap-2 border border-white/[0.12] text-[#E8EAED] hover:border-white/[0.25] font-sans font-medium text-sm px-5 py-3 rounded transition-colors duration-150 cursor-pointer"
                >
                  Try Simulation
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="flex gap-5 pt-4 border-t border-white/[0.06]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <StatBadge value="24/7"   label="Always on" />
                <StatBadge value="6"      label="Channels" />
                <StatBadge value="7"      label="AI Agents" />
                <StatBadge value="<2s"    label="Response" />
              </motion.div>
            </div>

            {/* Right — network visualization */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <NetworkViz />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="flex justify-center pb-8 relative z-10">
        <motion.button
          onClick={() => go("#problem")}
          className="flex flex-col items-center gap-2 text-[#4A5260] hover:text-[#6E7780] transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-transparent via-[#4A5260] to-transparent"
          />
        </motion.button>
      </div>
    </section>
  );
}
