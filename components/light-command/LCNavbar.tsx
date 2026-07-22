"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import type { LCTheme } from "@/lib/lc-themes";

const NAV = [
  { label: "Product",      href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Industries",   href: "#industries" },
  { label: "Security",     href: "#security" },
  { label: "Simulation",   href: "#simulation" },
];

function NodeMark({ color }: { color: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <rect x="1" y="1" width="16" height="16" rx="2.5" stroke={color} strokeWidth="1.4" fill="none" />
      {[3.5, 9, 14.5].flatMap((x) =>
        [3.5, 9, 14.5].map((y) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.3"
            fill={color}
            opacity={x === 9 && y === 9 ? "1" : "0.3"}
          />
        ))
      )}
    </svg>
  );
}

export function LCNavbar({ theme }: { theme: LCTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? theme.surface + "F2" : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: `1px solid ${scrolled ? theme.border : "transparent"}`,
          paddingTop:    scrolled ? "12px" : "20px",
          paddingBottom: scrolled ? "12px" : "20px",
        }}
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href={`/${theme.slug}`} className="flex items-center gap-2.5 select-none">
            <NodeMark color={theme.accent} />
            <span className="font-sans font-bold text-[1.08rem] tracking-tight" style={{ color: theme.ink }}>
              V<span style={{ color: theme.accent }}>AI</span>NI
            </span>
            <motion.span
              className="w-1.5 h-1.5 rounded-full ml-0.5"
              style={{ backgroundColor: theme.accent }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <button key={n.href} onClick={() => go(n.href)}
                className="font-sans text-sm transition-colors duration-150 cursor-pointer"
                style={{ color: theme.muted }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = theme.ink)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = theme.muted)}
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => go("#simulation")}
              className="font-sans text-sm cursor-pointer transition-colors duration-150"
              style={{ color: theme.muted }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = theme.ink)}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = theme.muted)}
            >
              Simulation
            </button>
            <button onClick={() => go("#demo")}
              className="font-sans text-sm font-medium px-5 py-2.5 rounded-md hover:opacity-90 transition-opacity cursor-pointer"
              style={{ backgroundColor: theme.accent, color: "#fff" }}
            >
              Request Demo
            </button>
          </div>

          <button className="lg:hidden p-2 cursor-pointer" style={{ color: theme.ink }}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-24 px-8 pb-10"
            style={{ backgroundColor: theme.surface }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col flex-1">
              {NAV.map((n, i) => (
                <motion.button key={n.href} onClick={() => go(n.href)}
                  className="text-left py-5 text-xl font-sans font-medium cursor-pointer"
                  style={{ color: theme.ink, borderBottom: `1px solid ${theme.border}` }}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.05 }}
                >
                  {n.label}
                </motion.button>
              ))}
            </nav>
            <button onClick={() => go("#demo")}
              className="w-full font-sans font-medium py-4 rounded-md text-sm mt-8 cursor-pointer hover:opacity-90"
              style={{ backgroundColor: theme.accent, color: "#fff" }}
            >
              Request Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
