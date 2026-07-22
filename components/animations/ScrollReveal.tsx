"use client";

import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
}

const getOffset = (dir: Direction, d: number) => {
  if (dir === "up")    return { y: d };
  if (dir === "down")  return { y: -d };
  if (dir === "left")  return { x: d };
  if (dir === "right") return { x: -d };
  return {};
};

/* ─────────────────────────────────────────────────────────────
 * Uses whileInView (not useInView hook) — avoids the
 * re-render flash that caused the glitch. Framer Motion handles
 * the IntersectionObserver internally, batching it with the
 * animation frame loop. viewport.margin fires the animation
 * 100px before the element reaches the visible edge so it
 * arrives cleanly, never catching the user mid-reveal.
 * ───────────────────────────────────────────────────────────── */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.55,
  direction = "up",
  distance = 18,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...getOffset(direction, distance) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
 * StaggerContainer — parent drives children via variant
 * propagation. No hook, no state, no re-render.
 * ───────────────────────────────────────────────────────────── */
export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.07,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* Children variants — controlled by parent StaggerContainer */
export const staggerItem = {
  hidden:   { opacity: 0, y: 18 },
  visible:  {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};
