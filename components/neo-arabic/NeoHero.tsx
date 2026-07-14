"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MessageCircle, Shield } from "lucide-react";

const GEO_PAT: React.CSSProperties = {
  backgroundImage: [
    "linear-gradient(45deg, rgba(155,123,74,0.045) 1px, transparent 1px)",
    "linear-gradient(-45deg, rgba(155,123,74,0.045) 1px, transparent 1px)",
  ].join(", "),
  backgroundSize: "48px 48px",
};

function DiamondBullet() {
  return <svg width="8" height="8" viewBox="0 0 8 8" className="shrink-0 mt-0.5"><polygon points="4,0 8,4 4,8 0,4" fill="#9B7B4A" opacity="0.6" /></svg>;
}

function GeoDivider() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px flex-1 bg-[#E8D9C4]" />
      <svg width="8" height="8" viewBox="0 0 8 8"><polygon points="4,0 8,4 4,8 0,4" fill="#9B7B4A" opacity="0.5" /></svg>
      <div className="h-px flex-1 bg-[#E8D9C4]" />
    </div>
  );
}

// ── Layered floating cards ───────────────────────────────────────────

function ArabicMessageCard({ delay }: { delay: number }) {
  return (
    <motion.div
      className="bg-white border border-[#EDE5D8] rounded-xl shadow-[0_4px_24px_rgba(28,25,23,0.08)] p-4 w-[280px]"
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-[#F4EDE0]">
        <div className="w-7 h-7 rounded-full bg-[#22c55e]/15 flex items-center justify-center">
          <MessageCircle size={13} className="text-[#22c55e]" />
        </div>
        <div>
          <p className="font-sans font-semibold text-[11px] text-[#1C1917]">WhatsApp · سارة م.</p>
          <p className="font-sans text-[10px] text-[#9B7B4A]">الرياض · 10:22 ص</p>
        </div>
      </div>
      <p className="font-sans text-sm text-[#1C1917] leading-relaxed text-right mb-1" dir="rtl">
        السلام عليكم، أحتاج مساعدة في استبدال بطاقتي الائتمانية.
      </p>
      <p className="font-sans text-[10px] text-[#9B8880] italic">"I need help replacing my credit card."</p>
    </motion.div>
  );
}

function VaniAnalysisCard({ delay }: { delay: number }) {
  return (
    <motion.div
      className="bg-[#F8F5F0] border border-[#E8D9C4] rounded-xl shadow-[0_8px_32px_rgba(28,25,23,0.1)] p-4 w-[290px]"
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="flex items-center gap-2 mb-3.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#7D1A28] animate-pulse" />
        <span className="font-sans font-medium text-[10px] text-[#7D1A28] tracking-widest uppercase">VANI Processing</span>
      </div>
      <div className="space-y-2.5">
        {[
          ["Intent",      "Card Replacement"],
          ["Language",    "Arabic"],
          ["Sensitivity", "Low"],
          ["Confidence",  "94%"],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between items-center">
            <span className="font-sans text-[11px] text-[#8A8680]">{label}</span>
            <span className={`font-sans text-[11px] font-medium ${label === "Confidence" ? "text-[#7D1A28]" : label === "Sensitivity" ? "text-[#6B9E72]" : "text-[#1C1917]"}`}>{value}</span>
          </div>
        ))}
      </div>
      <div className="mt-3.5 pt-3 border-t border-[#E8D9C4]">
        <div className="h-1.5 rounded-full bg-[#E8D9C4] overflow-hidden">
          <div className="h-full rounded-full bg-[#7D1A28]" style={{ width: "94%" }} />
        </div>
      </div>
    </motion.div>
  );
}

function ResolvedCard({ delay }: { delay: number }) {
  return (
    <motion.div
      className="bg-[#7D1A28] rounded-xl shadow-[0_12px_40px_rgba(125,26,40,0.22)] p-4 w-[275px]"
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="flex items-center gap-2 mb-2.5">
        <CheckCircle size={13} className="text-white/70" />
        <span className="font-sans text-[10px] text-white/70 tracking-widest uppercase font-medium">Resolved by VANI</span>
      </div>
      <p className="font-sans text-sm text-white/90 leading-relaxed mb-3">
        Your replacement card will arrive within 3–5 business days. Would you like SMS or WhatsApp tracking?
      </p>
      <div className="flex items-center gap-2 pt-2.5 border-t border-white/20">
        <Shield size={11} className="text-white/50" />
        <span className="font-sans text-[10px] text-white/50">Compliant · No sensitive data stored</span>
      </div>
    </motion.div>
  );
}

export function NeoHero() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden bg-[#F8F5F0]" style={GEO_PAT}>
      {/* Soft gradient masks over pattern */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(248,245,240,0.85) 0%, rgba(248,245,240,0.2) 70%, transparent 100%)",
      }} />
      {/* Warm glow top-right */}
      <div className="pointer-events-none absolute top-0 right-0 w-[550px] h-[420px]" style={{
        background: "radial-gradient(ellipse at top right, rgba(232,217,196,0.5) 0%, transparent 65%)",
      }} />

      <div className="relative z-10 flex-1 max-w-7xl mx-auto px-6 pt-32 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center min-h-[calc(100vh-12rem)]">

          {/* Left: headline + CTAs */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              className="self-start"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 bg-white border border-[#E8D9C4] px-4 py-2.5 rounded-sm">
                <svg width="6" height="6" viewBox="0 0 6 6"><polygon points="3,0 6,3 3,6 0,3" fill="#7D1A28" /></svg>
                <span className="font-sans text-[10px] font-medium text-[#7D1A28] tracking-[0.16em] uppercase">
                  AI Customer Support · Saudi Enterprise
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="font-sans font-bold text-[clamp(2.6rem,5.5vw,4.5rem)] leading-[1.05] text-[#1C1917] tracking-tight">
                AI support with<br />
                <span className="text-[#7D1A28]">a human voice.</span>
              </h1>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32 }}>
              <GeoDivider />
            </motion.div>

            {/* Sub */}
            <motion.p
              className="font-sans text-base text-[#5A5550] leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
            >
              VANI helps enterprise teams resolve repetitive calls and messages 24/7,
              while escalating sensitive and complex cases to the people who handle them best.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52 }}
            >
              <button
                onClick={() => go("#demo")}
                className="inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#2A2520] text-[#F8F5F0] font-sans font-medium text-sm px-6 py-3.5 rounded-sm transition-colors duration-200 cursor-pointer"
              >
                Request a Demo <ArrowRight size={14} />
              </button>
              <button
                onClick={() => go("#simulation")}
                className="inline-flex items-center gap-2 border border-[#C8BAA8] hover:border-[#7D1A28] text-[#3A3530] hover:text-[#7D1A28] font-sans font-medium text-sm px-6 py-3.5 rounded-sm transition-colors duration-200 cursor-pointer"
              >
                Try Simulation
              </button>
            </motion.div>

            {/* Trust grid */}
            <motion.div
              className="grid grid-cols-2 gap-x-6 gap-y-2.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.66 }}
            >
              {[
                "Arabic-first, English-ready",
                "Voice + all messaging channels",
                "Human-in-the-loop by design",
                "Built for regulated enterprise",
              ].map((pt) => (
                <div key={pt} className="flex items-start gap-2">
                  <DiamondBullet />
                  <span className="font-sans text-xs text-[#7A7470] leading-snug">{pt}</span>
                </div>
              ))}
            </motion.div>

            {/* Channel pills */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {["Voice", "WhatsApp", "Website Chat", "Email", "Social", "Mobile App"].map((ch) => (
                <span key={ch} className="font-sans text-[10px] text-[#8A8680] border border-[#DDD0BE] bg-white rounded-sm px-2.5 py-1 tracking-wide">
                  {ch}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: layered floating cards */}
          <div className="hidden lg:flex items-start justify-center pt-12">
            <div className="relative w-[360px] h-[450px]">
              {/* Back: Arabic customer card */}
              <div className="absolute top-0 left-0 -rotate-[3.5deg] z-10 origin-bottom-left">
                <ArabicMessageCard delay={0.5} />
              </div>
              {/* Middle: VANI analysis */}
              <div className="absolute top-[110px] left-[30px] -rotate-[0.5deg] z-20">
                <VaniAnalysisCard delay={0.72} />
              </div>
              {/* Front: resolved */}
              <div className="absolute top-[265px] left-[55px] rotate-[2deg] z-30">
                <ResolvedCard delay={0.94} />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative z-10 flex justify-center pb-10">
        <motion.button
          onClick={() => go("#problem")}
          className="flex flex-col items-center gap-2 text-[#B0A89E] hover:text-[#5A5550] transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <span className="font-sans text-[10px] tracking-widest uppercase">Explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-7 bg-gradient-to-b from-transparent via-[#B0A89E] to-transparent"
          />
        </motion.button>
      </div>
    </section>
  );
}
