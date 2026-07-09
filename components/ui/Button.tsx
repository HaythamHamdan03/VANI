"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit";
}

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-wine)] text-[var(--color-ivory)] hover:bg-[var(--color-wine-600)] border border-[var(--color-wine)]",
  secondary:
    "bg-transparent text-[var(--color-charcoal)] border border-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-[var(--color-ivory)]",
  ghost:
    "bg-transparent text-[var(--color-charcoal)] hover:bg-[var(--color-stone-100)] border border-transparent",
  outline:
    "bg-transparent text-[var(--color-ivory)] border border-[rgba(250,248,245,0.3)] hover:bg-[rgba(250,248,245,0.08)] hover:border-[rgba(250,248,245,0.6)]",
};

const sizes: Record<Size, string> = {
  sm:  "px-4 py-2 text-sm",
  md:  "px-6 py-3 text-sm",
  lg:  "px-8 py-4 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  href,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide",
    "rounded-full transition-all duration-300 cursor-pointer select-none whitespace-nowrap",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-wine)]",
    disabled && "opacity-40 cursor-not-allowed pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={base}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.97 }}
        transition={{ duration: 0.18 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={base}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      transition={{ duration: 0.18 }}
    >
      {children}
    </motion.button>
  );
}
