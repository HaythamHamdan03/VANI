"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Phone, MessageCircle, Globe, Mail } from "lucide-react";

// ── Floating conversation cards ─────────────────────────────────
const CONVERSATIONS = [
  {
    from: "customer",
    name: "Layla M.",
    avatar: "LM",
    avatarBg: "#FDE8DF",
    avatarColor: "#C4633E",
    channel: "WhatsApp",
    channelIcon: MessageCircle,
    channelColor: "#22c55e",
    message: "Hi, I need to reschedule my appointment for next week.",
    time: "9:14 AM",
  },
  {
    from: "vani",
    name: "VANI",
    avatar: "V",
    avatarBg: "#C4633E",
    avatarColor: "white",
    channel: "AI Response",
    channelIcon: CheckCircle,
    channelColor: "#C4633E",
    message: "Of course! I can see your appointment with Dr. Khalid on Tuesday at 10am. Would Wednesday or Thursday work better for you?",
    time: "9:14 AM",
    confidence: 96,
  },
  {
    from: "customer",
    name: "Ahmed K.",
    avatar: "AK",
    avatarBg: "#E5EFF9",
    avatarColor: "#3B82F6",
    channel: "Voice Call",
    channelIcon: Phone,
    message: "My card was declined — I'm traveling and need help urgently.",
    time: "11:32 AM",
    urgent: true,
  },
  {
    from: "vani",
    name: "VANI → Human Agent",
    avatar: "V",
    avatarBg: "#C4633E",
    avatarColor: "white",
    channel: "Escalated",
    channelIcon: ArrowRight,
    channelColor: "#C4633E",
    message: "Routing to Priority Banking Support with full context. Agent will be with you in under 60 seconds.",
    time: "11:32 AM",
    escalated: true,
  },
];

function ConvCard({
  conv,
  delay,
  className,
}: {
  conv: typeof CONVERSATIONS[number];
  delay: number;
  className?: string;
}) {
  const isVani = conv.from === "vani";
  const Icon = conv.channelIcon;

  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-md border border-[#F0EBE4] p-4 w-[280px] sm:w-[320px] ${className ?? ""}`}
      initial={{ opacity: 0, y: 28, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-sans font-bold"
          style={{ backgroundColor: conv.avatarBg, color: conv.avatarColor }}
        >
          {conv.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-sans font-semibold text-xs text-[#111111]">{conv.name}</span>
            <div className="flex items-center gap-1">
              <Icon size={9} style={{ color: conv.channelColor ?? "#7A7470" }} />
              <span className="font-sans text-[10px] text-[#7A7470]">{conv.channel}</span>
            </div>
          </div>
          <p className="font-sans text-xs text-[#3A3530] leading-relaxed">{conv.message}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="font-sans text-[10px] text-[#B0A89E]">{conv.time}</span>
            {isVani && "confidence" in conv && (
              <span className="font-sans text-[10px] text-[#C4633E] font-medium">AI · {conv.confidence}% confident</span>
            )}
            {conv.escalated && (
              <span className="font-sans text-[10px] text-[#C4633E] font-medium">⬆ Escalated</span>
            )}
            {conv.urgent && (
              <span className="font-sans text-[10px] text-[#C4633E] font-medium">Urgent</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function WarmHero() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#FAF9F7]"
    >
      {/* Warm circle backgrounds */}
      <div className="pointer-events-none absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-[#FDE8DF] opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[-50px] w-[400px] h-[400px] rounded-full bg-[#F0EBE4] opacity-60 blur-3xl" />

      <div className="relative z-10 flex-1 max-w-7xl mx-auto px-6 pt-32 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-12rem)]">

          {/* Left — headline */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              className="self-start"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 font-sans text-xs font-medium text-[#C4633E] bg-[#FDE8DF] rounded-full px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C4633E]" />
                Enterprise AI Support
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="font-sans font-bold text-[clamp(2.8rem,6vw,5rem)] leading-[1.0] text-[#111111] tracking-tight">
                AI support with<br />
                <span className="text-[#C4633E]">a human voice.</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              className="font-sans text-base md:text-lg text-[#7A7470] leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              VANI helps enterprise teams resolve repetitive calls and messages 24/7,
              while escalating sensitive and complex cases to the people who handle them best.
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
                className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#2A2520] text-white font-sans font-medium text-sm px-6 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
              >
                Request a Demo <ArrowRight size={15} />
              </button>
              <button
                onClick={() => go("#simulation")}
                className="inline-flex items-center gap-2 border-2 border-[#E5DDD5] hover:border-[#C4633E] text-[#3A3530] hover:text-[#C4633E] font-sans font-medium text-sm px-6 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
              >
                Try Simulation
              </button>
            </motion.div>

            {/* Trust */}
            <motion.div
              className="flex flex-col gap-2 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              {[
                "AI handles repetition — humans handle excellence.",
                "Built for banks, hospitals, and regulated organizations.",
                "Arabic-first and English-ready. Voice + messaging.",
              ].map((pt) => (
                <div key={pt} className="flex items-center gap-2.5">
                  <CheckCircle size={13} className="text-[#C4633E] shrink-0" />
                  <span className="font-sans text-sm text-[#7A7470]">{pt}</span>
                </div>
              ))}
            </motion.div>

            {/* Channel badges */}
            <motion.div
              className="flex flex-wrap gap-2 pt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { label: "Voice", Icon: Phone },
                { label: "WhatsApp", Icon: MessageCircle },
                { label: "Chat", Icon: Globe },
                { label: "Email", Icon: Mail },
              ].map(({ label, Icon }) => (
                <div key={label} className="flex items-center gap-1.5 bg-white border border-[#E5DDD5] rounded-full px-3 py-1.5">
                  <Icon size={11} className="text-[#B0A89E]" />
                  <span className="font-sans text-xs text-[#7A7470]">{label}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5 bg-white border border-[#E5DDD5] rounded-full px-3 py-1.5">
                <span className="font-sans text-xs text-[#7A7470]">+2 more</span>
              </div>
            </motion.div>
          </div>

          {/* Right — floating conversation cards */}
          <div className="relative hidden lg:flex flex-col gap-3 items-end">
            {/* Decorative warm blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#FDE8DF] opacity-40 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-3 w-full max-w-[360px]">
              {CONVERSATIONS.map((conv, i) => (
                <ConvCard
                  key={i}
                  conv={conv}
                  delay={0.5 + i * 0.18}
                  className={i % 2 === 1 ? "self-end" : "self-start"}
                />
              ))}
            </div>

            {/* Bottom stat card */}
            <motion.div
              className="bg-white rounded-2xl border border-[#F0EBE4] shadow-md p-4 flex items-center gap-4 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="w-10 h-10 rounded-full bg-[#FDE8DF] flex items-center justify-center shrink-0">
                <CheckCircle size={18} className="text-[#C4633E]" />
              </div>
              <div>
                <p className="font-sans font-semibold text-sm text-[#111111]">247 cases resolved today</p>
                <p className="font-sans text-xs text-[#7A7470]">by AI · 12 escalated to humans</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="flex justify-center pb-10 relative z-10">
        <motion.button
          onClick={() => go("#problem")}
          className="flex flex-col items-center gap-2 text-[#B0A89E] hover:text-[#7A7470] transition-colors cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
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
