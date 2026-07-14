"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NAV = [
  { label: "Product",       href: "#product" },
  { label: "How It Works",  href: "#how-it-works" },
  { label: "Industries",    href: "#industries" },
  { label: "Security",      href: "#security" },
  { label: "Simulation",    href: "#simulation" },
];

function OctagonMark({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden>
      <polygon
        points="6.5,1.5 13.5,1.5 18.5,6.5 18.5,13.5 13.5,18.5 6.5,18.5 1.5,13.5 1.5,6.5"
        fill="none" stroke="#7D1A28" strokeWidth="1.2"
      />
      <circle cx="10" cy="10" r="2.5" fill="#7D1A28" opacity="0.45" />
    </svg>
  );
}

export function NeoNavbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8F5F0]/96 backdrop-blur-md border-b border-[#E8D9C4] py-3"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/style-neo-arabic" className="flex items-center gap-2.5 select-none">
            <OctagonMark />
            <span className="font-sans font-bold text-[1.1rem] text-[#1C1917] tracking-tight">
              V<span className="text-[#7D1A28]">AI</span>NI
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.href}
                onClick={() => go(n.href)}
                className="font-sans text-sm text-[#5A5550] hover:text-[#1C1917] transition-colors duration-150 cursor-pointer"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => go("#simulation")}
              className="font-sans text-sm text-[#5A5550] hover:text-[#1C1917] transition-colors cursor-pointer"
            >
              Simulation
            </button>
            <button
              onClick={() => go("#demo")}
              className="font-sans text-sm font-medium bg-[#7D1A28] hover:bg-[#6A1521] text-[#F8F5F0] px-5 py-2.5 rounded-sm transition-colors duration-150 cursor-pointer"
            >
              Request Demo
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-[#1C1917] cursor-pointer"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#F8F5F0] flex flex-col pt-24 px-8 pb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col flex-1">
              {NAV.map((n, i) => (
                <motion.button
                  key={n.href}
                  onClick={() => go(n.href)}
                  className="text-left py-5 border-b border-[#E8D9C4] text-xl font-sans font-medium text-[#1C1917] cursor-pointer"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.05 }}
                >
                  {n.label}
                </motion.button>
              ))}
            </nav>
            <button
              onClick={() => go("#demo")}
              className="w-full bg-[#7D1A28] text-[#F8F5F0] font-sans font-medium py-4 rounded-sm text-sm mt-8 cursor-pointer"
            >
              Request Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
