"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NAV = [
  { label: "Product",    href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "Security",   href: "#security" },
  { label: "Simulation", href: "#simulation" },
];

function VaniLogo() {
  return (
    <div className="flex items-center gap-2.5 select-none">
      {/* Waveform mark */}
      <svg width="28" height="20" viewBox="0 0 28 20" fill="none" aria-hidden>
        <rect x="0"  y="6"  width="4" height="8"  rx="2" fill="#6E7780"/>
        <rect x="6"  y="0"  width="4" height="20" rx="2" fill="#C41230"/>
        <rect x="12" y="3"  width="4" height="14" rx="2" fill="#6E7780"/>
        <rect x="18" y="0"  width="4" height="20" rx="2" fill="#C41230"/>
        <rect x="24" y="6"  width="4" height="8"  rx="2" fill="#6E7780"/>
      </svg>
      <span className="font-sans font-semibold text-xl tracking-tight text-[#E8EAED]">
        V<span className="text-[#C41230]">AI</span>NI
      </span>
    </div>
  );
}

export function CmdNavbar() {
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
            ? "bg-[#070B0F]/90 backdrop-blur-md border-b border-white/[0.06]"
            : "bg-transparent"
        } py-4`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/style-command"><VaniLogo /></Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <button
                key={n.href}
                onClick={() => go(n.href)}
                className="text-[13px] font-sans font-medium text-[#6E7780] hover:text-[#E8EAED] tracking-wider uppercase transition-colors duration-150 cursor-pointer"
              >
                {n.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => go("#simulation")}
              className="text-[13px] font-sans text-[#6E7780] hover:text-[#E8EAED] transition-colors cursor-pointer"
            >
              Simulation
            </button>
            <button
              onClick={() => go("#demo")}
              className="text-[13px] font-sans font-medium bg-[#C41230] hover:bg-[#A50E26] text-white px-4 py-2 rounded cursor-pointer transition-colors duration-150"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile */}
          <button className="lg:hidden p-2 text-[#E8EAED] cursor-pointer" onClick={() => setMobileOpen((o) => !o)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#070B0F] flex flex-col pt-24 px-8 pb-10"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <nav className="flex flex-col gap-5 flex-1">
              {NAV.map((n, i) => (
                <motion.button
                  key={n.href}
                  onClick={() => go(n.href)}
                  className="text-left text-xl font-sans font-semibold text-[#E8EAED] tracking-wider uppercase cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.05 }}
                >
                  {n.label}
                </motion.button>
              ))}
            </nav>
            <button
              onClick={() => go("#demo")}
              className="w-full bg-[#C41230] text-white font-sans font-medium py-3.5 rounded text-sm tracking-wider uppercase mt-8 cursor-pointer"
            >
              Request Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
