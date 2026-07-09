"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface VaniLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  onDark?: boolean;
  className?: string;
  animate?: boolean;
}

/* ── Size tokens ─────────────────────────────────────────────── */
const sizes = {
  sm: { text: "text-lg tracking-[0.07em]",            markH: 18, gap: "gap-2"   },
  md: { text: "text-2xl tracking-[0.07em]",            markH: 22, gap: "gap-2.5" },
  lg: { text: "text-[2.25rem] tracking-[0.065em]",     markH: 30, gap: "gap-3"   },
  xl: { text: "text-[clamp(3.5rem,7vw,5.5rem)] tracking-[0.055em]", markH: 44, gap: "gap-4" },
};

/* ── Voice Waveform Mark ─────────────────────────────────────── */
/*
 * 4 bars — each maps to one letter of VANI.
 * The A (bar 2) and I (bar 4) are rendered in wine/burgundy.
 * Heights form a natural voice waveform peak.
 * On hover the bars re-animate, like a live audio visualizer.
 */
function WaveformMark({
  markH,
  onDark,
  isHovered,
  size,
}: {
  markH: number;
  onDark: boolean;
  isHovered: boolean;
  size: keyof typeof sizes;
}) {
  const base   = onDark ? "rgba(250,248,245,0.85)" : "rgba(26,22,18,0.82)";
  const wine   = "#7A1828";
  const wineHi = "#9B2235";

  /* 4 bars: V · A · N · I
   * relH = resting height ratio (0–1 of viewBox).
   * animH = hover target height ratio. */
  const bars = [
    { letter: "V", relH: 0.40, animH: 0.58, color: base,  hoverColor: base   },
    { letter: "A", relH: 0.84, animH: 1.00, color: wine,  hoverColor: wineHi },
    { letter: "N", relH: 0.62, animH: 0.72, color: base,  hoverColor: base   },
    { letter: "I", relH: 0.46, animH: 0.62, color: wine,  hoverColor: wineHi },
  ];

  const VB_H   = 22;               // viewBox height (px units)
  const BAR_W  = size === "xl" ? 4 : 3;
  const GAP    = size === "xl" ? 2.5 : 2;
  const TOTAL_W = bars.length * BAR_W + (bars.length - 1) * GAP; // 18 or 22

  const scale  = markH / VB_H;

  return (
    <svg
      width={TOTAL_W * scale}
      height={markH}
      viewBox={`0 0 ${TOTAL_W} ${VB_H}`}
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      {/* Micro baseline – the "ground line" of the voice waveform */}
      <line
        x1={0}         y1={VB_H - 0.5}
        x2={TOTAL_W}   y2={VB_H - 0.5}
        stroke={base}
        strokeWidth={0.6}
        strokeOpacity={0.18}
      />

      {/* Bars */}
      {bars.map((bar, i) => {
        const x       = i * (BAR_W + GAP);
        const restH   = bar.relH   * (VB_H - 2);   // leave 2px for baseline
        const targetH = bar.animH  * (VB_H - 2);
        const h       = isHovered ? targetH : restH;
        const y       = VB_H - h - 1;               // anchored to baseline

        return (
          <motion.rect
            key={bar.letter}
            x={x}
            width={BAR_W}
            rx={BAR_W / 2}
            fill={isHovered ? bar.hoverColor : bar.color}
            animate={{ height: h, y }}
            transition={{
              duration: 0.35,
              delay: i * 0.06,
              ease: [0.34, 1.56, 0.64, 1],  // spring-ish for that alive feel
            }}
          />
        );
      })}

      {/* Micro arc over the A bar — suggests a mic/voice pickup area */}
      <motion.path
        d={`M ${BAR_W + GAP} ${VB_H * 0.05}
            Q ${BAR_W + GAP + BAR_W / 2} ${-VB_H * 0.04}
              ${BAR_W + GAP + BAR_W} ${VB_H * 0.05}`}
        stroke={isHovered ? wineHi : wine}
        strokeWidth={0.8}
        strokeLinecap="round"
        fill="none"
        strokeOpacity={isHovered ? 0.7 : 0.45}
        animate={{ strokeOpacity: isHovered ? 0.7 : 0.45 }}
        transition={{ duration: 0.3 }}
      />
    </svg>
  );
}

/* ── Exported VaniLogo ───────────────────────────────────────── */
export function VaniLogo({
  size = "md",
  onDark = false,
  className,
  animate: shouldAnimate = false,
}: VaniLogoProps) {
  const [hovered, setHovered]  = useState(false);
  const prefersReduced         = useReducedMotion();
  const { text, markH, gap }   = sizes[size];
  const isAnimated             = shouldAnimate && !prefersReduced && hovered;

  const baseColor  = onDark
    ? "text-[var(--color-ivory)]"
    : "text-[var(--color-charcoal)]";
  const wineColor  = "text-[var(--color-wine)]";

  const letters = [
    { char: "V", isAI: false },
    { char: "A", isAI: true  },
    { char: "N", isAI: false },
    { char: "I", isAI: true  },
  ];

  return (
    <motion.span
      className={cn("inline-flex items-center", gap, className)}
      onHoverStart={() => shouldAnimate && setHovered(true)}
      onHoverEnd={() => shouldAnimate && setHovered(false)}
      aria-label="VANI — Enterprise AI Support"
    >
      {/* Voice waveform mark */}
      <WaveformMark
        markH={markH}
        onDark={onDark}
        isHovered={isAnimated}
        size={size}
      />

      {/* Wordmark: VANI with A and I in wine */}
      <span
        className={cn(
          "font-display font-semibold uppercase select-none leading-none",
          text,
        )}
      >
        {letters.map(({ char, isAI }, i) => (
          <motion.span
            key={i}
            className={cn("inline-block", isAI ? wineColor : baseColor)}
            animate={
              shouldAnimate && !prefersReduced
                ? hovered
                  ? { y: -2, transition: { duration: 0.22, delay: i * 0.04 } }
                  : { y: 0,  transition: { duration: 0.22, delay: i * 0.02 } }
                : {}
            }
          >
            {char}
          </motion.span>
        ))}
      </span>
    </motion.span>
  );
}
