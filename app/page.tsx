"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const STYLES = [
  {
    slug:      "style-command",
    name:      "Command Center",
    tag:       "01 — TECHNICAL",
    tagline:   "Advanced AI infrastructure for enterprise support operations.",
    desc:      "Near-black background, animated AI network visualization hero, terminal-style dashboard, and tactical typography. Technical, powerful, operational.",
    palette:   ["#070B0F", "#C41230", "#E8EAED", "#6E7780"],
    labels:    ["Near Black", "Command Red", "Off White", "Graphite"],
    mood:      "Powerful · Technical · Futuristic · Operational",
    fit:       "Tech-forward enterprise · Operations-led orgs · AI-native teams",
    bg:        "#070B0F",
    border:    "rgba(255,255,255,0.08)",
    accent:    "#C41230",
    text:      "#E8EAED",
    muted:     "#6E7780",
    cardBg:    "#0F1318",
  },
  {
    slug:      "style-neo-arabic",
    name:      "Neo-Arabic Enterprise",
    tag:       "03 — CULTURAL",
    tagline:   "Premium AI enterprise with a subtle Arabic soul.",
    desc:      "Pearl ivory palette, deep date red accents, octagonal geometric mark, layered bilingual cards hero, and fine architectural grid. Premium, culturally rooted, Saudi-market-ready.",
    palette:   ["#F8F5F0", "#7D1A28", "#9B7B4A", "#1C1917"],
    labels:    ["Pearl", "Date Red", "Bronze", "Charcoal"],
    mood:      "Premium · Cultural · Editorial · Trustworthy",
    fit:       "Saudi banks · Gulf hospitals · Regulated enterprise · Government",
    bg:        "#F8F5F0",
    border:    "#E8D9C4",
    accent:    "#7D1A28",
    text:      "#1C1917",
    muted:     "#8A8680",
    cardBg:    "#FFFFFF",
  },
  {
    slug:      "style-warm",
    name:      "Warm Minimal",
    tag:       "02 — HUMAN",
    tagline:   "Improves customer support without losing the human touch.",
    desc:      "Warm white and sand backgrounds, terracotta accents, rounded cards, and floating conversation cards in the hero. Approachable, clean, and human-centered.",
    palette:   ["#FAF9F7", "#C4633E", "#111111", "#7A7470"],
    labels:    ["Warm White", "Terracotta", "Near Black", "Warm Gray"],
    mood:      "Warm · Approachable · Clean · Human-first",
    fit:       "Customer-facing orgs · Schools · Healthcare · General enterprise",
    bg:        "#FAF9F7",
    border:    "#E5DDD5",
    accent:    "#C4633E",
    text:      "#111111",
    muted:     "#7A7470",
    cardBg:    "#FFFFFF",
  },
];

export default function StylePickerPage() {
  return (
    <div className="min-h-screen bg-[#0E0C0A] flex flex-col">
      {/* Header */}
      <div className="border-b border-white/[0.06] px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="24" height="18" viewBox="0 0 28 20" fill="none" aria-hidden>
              <rect x="0"  y="6"  width="4" height="8"  rx="2" fill="#4A4540"/>
              <rect x="6"  y="0"  width="4" height="20" rx="2" fill="#9B6B4A"/>
              <rect x="12" y="3"  width="4" height="14" rx="2" fill="#4A4540"/>
              <rect x="18" y="0"  width="4" height="20" rx="2" fill="#9B6B4A"/>
              <rect x="24" y="6"  width="4" height="8"  rx="2" fill="#4A4540"/>
            </svg>
            <span className="font-sans font-semibold text-[#EDE8E3] text-lg">VANI</span>
          </div>
          <span className="font-sans text-xs text-[#6A6560] tracking-widest uppercase">Brand Direction · Choose a Style</span>
        </div>
      </div>

      {/* Hero copy */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-[#9B6B4A] mb-5">
            Three Visual Directions
          </span>
          <h1 className="font-sans font-bold text-[clamp(2rem,5vw,4rem)] text-[#EDE8E3] leading-tight mb-4">
            Same product.<br />Three identities.
          </h1>
          <p className="font-sans text-base text-[#6A6560] max-w-xl mx-auto leading-relaxed">
            Each direction shares the same content and sections — but has a completely different color system, typography mood, hero layout, animation feel, and visual personality.
          </p>
        </motion.div>
      </div>

      {/* Style cards */}
      <div className="max-w-7xl mx-auto px-6 pb-20 w-full">
        <div className="grid lg:grid-cols-3 gap-6">
          {STYLES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 + 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group"
            >
              {/* Preview window */}
              <Link href={`/${s.slug}`}>
                <div
                  className="rounded-2xl overflow-hidden border mb-4 cursor-pointer transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ borderColor: s.border, backgroundColor: s.bg }}
                >
                  {/* Mini browser chrome */}
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: s.border, backgroundColor: s.bg }}>
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                    <div className="flex-1 mx-3 rounded text-[9px] px-2 py-1 text-center" style={{ backgroundColor: s.cardBg, color: s.muted }}>
                      vani.ai/{s.slug}
                    </div>
                  </div>

                  {/* Preview mockup */}
                  <div className="p-5 h-52 relative overflow-hidden">
                    {/* Fake nav */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: s.accent }} />
                        <div className="w-8 h-2 rounded-sm" style={{ backgroundColor: s.text, opacity: 0.8 }} />
                      </div>
                      <div className="flex gap-3">
                        {[1,2,3].map((j) => (
                          <div key={j} className="w-8 h-1.5 rounded-sm" style={{ backgroundColor: s.muted, opacity: 0.4 }} />
                        ))}
                      </div>
                      <div className="w-14 h-5 rounded-full" style={{ backgroundColor: s.accent, opacity: 0.85 }} />
                    </div>

                    {/* Fake headline */}
                    <div className="mb-3">
                      <div className="w-4/5 h-3.5 rounded mb-2" style={{ backgroundColor: s.text, opacity: 0.85 }} />
                      <div className="w-3/5 h-3.5 rounded" style={{ backgroundColor: s.accent, opacity: 0.7 }} />
                    </div>

                    {/* Fake subtext lines */}
                    <div className="space-y-1.5 mb-4">
                      <div className="w-full h-1.5 rounded-sm" style={{ backgroundColor: s.muted, opacity: 0.35 }} />
                      <div className="w-5/6 h-1.5 rounded-sm" style={{ backgroundColor: s.muted, opacity: 0.25 }} />
                    </div>

                    {/* Fake CTAs */}
                    <div className="flex gap-2">
                      <div className="w-20 h-6 rounded-full" style={{ backgroundColor: s.accent, opacity: 0.8 }} />
                      <div className="w-20 h-6 rounded-full border" style={{ borderColor: s.muted + "60" }} />
                    </div>

                    {/* Fake right element */}
                    <div className="absolute right-5 top-14 w-24 h-28 rounded-xl border" style={{ backgroundColor: s.cardBg, borderColor: s.border, opacity: 0.8 }}>
                      {[0,1,2,3].map((j) => (
                        <div key={j} className="mx-2.5 my-2 flex gap-1.5 items-center">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: j === 0 ? s.accent : s.muted, opacity: j === 0 ? 0.7 : 0.25 }} />
                          <div className="flex-1 h-1 rounded-sm" style={{ backgroundColor: s.muted, opacity: 0.3 }} />
                        </div>
                      ))}
                    </div>

                    {/* Palette accent blobs */}
                    {s.slug === "style-executive" && (
                      <div className="absolute top-0 right-0 w-24 h-16 rounded-full blur-2xl opacity-20" style={{ backgroundColor: s.accent }} />
                    )}
                    {s.slug === "style-command" && (
                      <>
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                        <div className="absolute top-0 right-0 w-28 h-20 rounded-full blur-2xl opacity-15" style={{ backgroundColor: s.accent }} />
                      </>
                    )}
                    {s.slug === "style-warm" && (
                      <div className="absolute top-0 right-0 w-28 h-20 rounded-full blur-2xl opacity-30" style={{ backgroundColor: "#FDE8DF" }} />
                    )}
                  </div>
                </div>
              </Link>

              {/* Card info */}
              <div className="px-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-sans text-[10px] font-medium tracking-[0.18em] uppercase mb-1" style={{ color: s.accent }}>{s.tag}</p>
                    <h2 className="font-sans font-bold text-[#EDE8E3] text-xl">{s.name}</h2>
                  </div>
                  {/* Palette dots */}
                  <div className="flex gap-1.5 mt-1">
                    {s.palette.map((c, j) => (
                      <div key={j} className="w-5 h-5 rounded-full border border-white/10" style={{ backgroundColor: c }} title={s.labels[j]} />
                    ))}
                  </div>
                </div>

                <p className="font-sans text-sm text-[#9A9490] leading-relaxed mb-3">{s.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {s.mood.split(" · ").map((m) => (
                    <span key={m} className="font-sans text-[10px] text-[#5A5550] border border-white/[0.06] rounded-full px-2.5 py-1">{m}</span>
                  ))}
                </div>

                <p className="font-sans text-[10px] text-[#5A5550] mb-4">
                  Best for: <span className="text-[#7A7570]">{s.fit}</span>
                </p>

                <Link
                  href={`/${s.slug}`}
                  className="inline-flex items-center gap-2 font-sans font-medium text-sm text-[#EDE8E3] hover:gap-3 transition-all duration-150"
                >
                  View full style <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <p className="font-sans text-xs text-[#4A4540] leading-relaxed max-w-lg mx-auto">
            Each style is a complete, functional landing page with all 17 sections.<br />
            Colors, typography, animations, and 3D elements differ across styles.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
