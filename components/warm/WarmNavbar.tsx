"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NAV = [
  { label: "Product",     href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Industries",  href: "#industries" },
  { label: "Security",    href: "#security" },
  { label: "Simulation",  href: "#simulation" },
];

function WarmLogo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="w-7 h-7 rounded-lg bg-[#C4633E] flex items-center justify-center">
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden>
          <rect x="0"  y="3" width="2" height="6"  rx="1" fill="white" opacity="0.5"/>
          <rect x="3"  y="0" width="2" height="12" rx="1" fill="white"/>
          <rect x="6"  y="2" width="2" height="8"  rx="1" fill="white" opacity="0.7"/>
          <rect x="9"  y="0" width="2" height="12" rx="1" fill="white"/>
          <rect x="12" y="3" width="2" height="6"  rx="1" fill="white" opacity="0.5"/>
        </svg>
      </div>
      <span className="font-sans font-bold text-[1.1rem] text-[#111111] tracking-tight">
        V<span className="text-[#C4633E]">AI</span>NI
      </span>
    </div>
  );
}

export function WarmNavbar() {
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-[#E5DDD5] shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/style-warm"><WarmLogo /></Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <button
                key={n.href}
                onClick={() => go(n.href)}
                className="font-sans text-sm text-[#7A7470] hover:text-[#111111] transition-colors duration-150 cursor-pointer"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => go("#simulation")} className="font-sans text-sm text-[#7A7470] hover:text-[#111111] transition-colors cursor-pointer">
              Simulation
            </button>
            <button
              onClick={() => go("#demo")}
              className="font-sans text-sm font-medium bg-[#C4633E] hover:bg-[#A8522E] text-white px-5 py-2.5 rounded-full transition-colors duration-150 cursor-pointer"
            >
              Request Demo
            </button>
          </div>

          <button className="lg:hidden p-2 text-[#111111] cursor-pointer" onClick={() => setMobileOpen((o) => !o)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#FAF9F7] flex flex-col pt-24 px-8 pb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-5 flex-1">
              {NAV.map((n, i) => (
                <motion.button
                  key={n.href}
                  onClick={() => go(n.href)}
                  className="text-left text-2xl font-sans font-semibold text-[#111111] cursor-pointer"
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
              className="w-full bg-[#C4633E] text-white font-sans font-medium py-4 rounded-full text-sm mt-8 cursor-pointer"
            >
              Request Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
