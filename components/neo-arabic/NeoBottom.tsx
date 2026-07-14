"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import { ChevronDown, ArrowRight, Globe, Mail } from "lucide-react";

const GEO_PAT: React.CSSProperties = {
  backgroundImage: [
    "linear-gradient(45deg, rgba(155,123,74,0.04) 1px, transparent 1px)",
    "linear-gradient(-45deg, rgba(155,123,74,0.04) 1px, transparent 1px)",
  ].join(", "),
  backgroundSize: "48px 48px",
};

function GeoDivider() {
  return (
    <div className="flex items-center gap-3 my-1">
      <div className="h-px flex-1 bg-[#E8D9C4]" />
      <svg width="8" height="8" viewBox="0 0 8 8"><polygon points="4,0 8,4 4,8 0,4" fill="#9B7B4A" opacity="0.5" /></svg>
      <div className="h-px flex-1 bg-[#E8D9C4]" />
    </div>
  );
}

// ── SECURITY ──────────────────────────────────────────────────────────
const SECURITY = [
  { n: "01", title: "Private Knowledge Layer",         desc: "Your knowledge base is private to your organization. It is never shared or used to improve a public model." },
  { n: "02", title: "Data Isolation",                  desc: "Every client's data is fully isolated. Conversations, knowledge, and analytics are separated by design." },
  { n: "03", title: "End-to-End Encryption",           desc: "All data in transit and at rest is encrypted. Your conversations are protected at every layer." },
  { n: "04", title: "Full Audit Logs",                 desc: "Every AI response, escalation, and handoff is logged and auditable for compliance and review." },
  { n: "05", title: "Role-Based Access Control",       desc: "Permissions are scoped to role. Agents, supervisors, and administrators see only what they need." },
  { n: "06", title: "Human Approval Workflows",        desc: "Critical AI decisions can be configured to require human approval before action is taken." },
  { n: "07", title: "PII & PHI Protection",            desc: "Personal and health information is masked and handled according to your compliance requirements." },
  { n: "08", title: "Configurable Data Retention",     desc: "Data is retained only as long as your policy requires. Deletion schedules are fully configurable." },
];

export function NeoSecurity() {
  return (
    <section id="security" className="py-24 bg-[#F8F5F0]" style={GEO_PAT}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ScrollReveal>
              <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-[#7D1A28] mb-4 block">Security & Compliance</span>
              <h2 className="font-sans font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#1C1917] leading-tight mb-5">
                Your data answers your customers. Nothing else.
              </h2>
              <GeoDivider />
              <p className="font-sans text-base text-[#5A5550] leading-relaxed mt-5">
                "Your data is used to answer your customers, not to train a public model."
              </p>
              <p className="font-sans text-sm text-[#9B7B4A] mt-4">
                Built for banks, hospitals, and regulated organizations where data governance is non-negotiable.
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 gap-px bg-[#E8D9C4]">
            {SECURITY.map((s) => (
              <motion.div
                key={s.n}
                variants={staggerItem}
                className="bg-[#F8F5F0] hover:bg-white transition-colors duration-200 p-6 flex flex-col gap-2"
              >
                <span className="font-sans text-[10px] text-[#9B7B4A] font-medium">{s.n}</span>
                <h3 className="font-sans font-semibold text-sm text-[#1C1917]">{s.title}</h3>
                <p className="font-sans text-xs text-[#7A7470] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

// ── WHY VANI ──────────────────────────────────────────────────────────
const WHY = [
  { title: "Arabic-First Intelligence",      desc: "Native Arabic understanding — not translation. VANI reads intent, tone, and dialect the way your customers communicate." },
  { title: "Voice and Messaging, Unified",   desc: "Handle calls, WhatsApp, email, chat, and social — all from one system, with one consistent voice." },
  { title: "Human-in-the-Loop",             desc: "VANI never replaces human judgment for cases that need it. Escalation is a feature, not a failure." },
  { title: "Compliance-Aware Architecture", desc: "Audit logs, approval workflows, PII masking, and configurable retention — designed for regulated industries." },
  { title: "Private AI Model",              desc: "Your knowledge trains your model. No shared training. No cross-client data exposure. Ever." },
  { title: "Designed for Saudi Enterprise", desc: "Built with the Gulf market in mind — bilingual, culturally appropriate, and adapted for local enterprise needs." },
];

export function NeoWhyVani() {
  return (
    <section id="why-vani" className="py-24 bg-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-[#9B7B4A] mb-4 block">Why VANI</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.8rem)] text-[#EDE8E3] leading-tight">
              Not a generic chatbot. An enterprise AI Support Team.
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {WHY.map((w) => (
            <motion.div
              key={w.title}
              variants={staggerItem}
              className="border border-white/[0.06] p-7 flex flex-col gap-3 hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-200"
            >
              <div className="w-6 h-px bg-[#7D1A28]" />
              <h3 className="font-sans font-semibold text-sm text-[#EDE8E3]">{w.title}</h3>
              <p className="font-sans text-xs text-[#6A6460] leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Banner */}
        <ScrollReveal>
          <div className="border border-white/[0.08] p-10 text-center">
            <p className="font-sans text-xl md:text-2xl text-[#EDE8E3] font-light">
              AI handles repetition.{" "}
              <span className="font-semibold text-[#7D1A28]">Humans handle excellence.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── PRICING ───────────────────────────────────────────────────────────
const TIERS = [
  {
    name: "Pilot",
    desc: "Prove the value with a focused proof of concept in one team or channel.",
    features: ["1 channel", "Core AI agents", "Knowledge base setup", "Monthly reporting", "Dedicated onboarding"],
    featured: false,
  },
  {
    name: "Growth",
    desc: "Full multi-channel deployment for enterprise support teams at scale.",
    features: ["All 6 channels", "Full AI agent team", "Bilingual Arabic/English", "Advanced analytics", "SLA monitoring", "Compliance module", "Priority support"],
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "Custom scale, dedicated infrastructure, and fully tailored deployment.",
    features: ["Custom channels", "Private model deployment", "Custom integrations", "Dedicated infra", "White-glove onboarding", "Executive SLA", "On-site training"],
    featured: false,
  },
];

export function NeoPricing() {
  return (
    <section id="pricing" className="py-24 bg-[#F8F5F0]" style={GEO_PAT}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-[#7D1A28] mb-4 block">Engagement Plans</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.8rem)] text-[#1C1917] leading-tight mb-3">
              A plan for every stage of your journey.
            </h2>
            <GeoDivider />
            <p className="font-sans text-sm text-[#5A5550] mt-4">All plans begin with a tailored demo. No standard pricing — every deployment is configured to your needs.</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-px bg-[#E8D9C4]">
          {TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              variants={staggerItem}
              className={`flex flex-col gap-6 p-8 transition-colors duration-200 ${
                tier.featured
                  ? "bg-[#7D1A28] text-[#F8F5F0]"
                  : "bg-white hover:bg-[#F8F5F0]"
              }`}
            >
              {tier.featured && (
                <span className="self-start font-sans text-[10px] font-medium tracking-[0.18em] uppercase text-[#F8F5F0]/60 border border-[#F8F5F0]/20 px-2.5 py-1">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className={`font-sans font-bold text-xl mb-2 ${tier.featured ? "text-[#F8F5F0]" : "text-[#1C1917]"}`}>{tier.name}</h3>
                <p className={`font-sans text-sm leading-relaxed ${tier.featured ? "text-[#F8F5F0]/70" : "text-[#7A7470]"}`}>{tier.desc}</p>
              </div>
              <div className="flex flex-col gap-2.5 flex-1">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <svg width="8" height="8" viewBox="0 0 8 8" className="shrink-0 mt-0.5">
                      <polygon points="4,0 8,4 4,8 0,4" fill={tier.featured ? "rgba(248,245,240,0.6)" : "#9B7B4A"} />
                    </svg>
                    <span className={`font-sans text-xs leading-relaxed ${tier.featured ? "text-[#F8F5F0]/80" : "text-[#5A5550]"}`}>{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2.5">
                <button className={`w-full py-3 font-sans font-medium text-sm rounded-sm transition-colors duration-150 cursor-pointer ${
                  tier.featured
                    ? "bg-[#F8F5F0] text-[#7D1A28] hover:bg-white"
                    : "bg-[#1C1917] text-[#F8F5F0] hover:bg-[#2A2520]"
                }`}>
                  Request Demo
                </button>
                <button className={`w-full py-3 font-sans text-sm rounded-sm border transition-colors duration-150 cursor-pointer ${
                  tier.featured
                    ? "border-[#F8F5F0]/30 text-[#F8F5F0]/70 hover:border-[#F8F5F0]/60"
                    : "border-[#E8D9C4] text-[#5A5550] hover:border-[#C8BAA8]"
                }`}>
                  Talk to Sales
                </button>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────
const FAQS = [
  { q: "Does VANI replace human agents?", a: "No. VANI handles routine, repetitive cases — freeing your human agents to focus on sensitive, complex, and high-value interactions. Humans remain in control of all escalations and approvals." },
  { q: "What languages does VANI support?", a: "VANI is Arabic-first with full English support. It understands Arabic intent natively — not through translation — ensuring culturally appropriate responses for Gulf enterprise customers." },
  { q: "How does VANI handle sensitive cases?", a: "VANI is trained to detect sensitivity — PII, financial data, complaints, medical context, and urgency signals. When detected, it immediately escalates to the right human team with full conversation context." },
  { q: "Where is our data stored?", a: "Your data remains in your designated region. VANI operates with full data isolation — your knowledge, conversations, and analytics are never shared with other clients or used to train public models." },
  { q: "How long does implementation take?", a: "A focused Pilot typically goes live in 4–6 weeks. Full Growth deployment, including knowledge base setup and all channels, is usually complete within 10–14 weeks." },
  { q: "Can VANI work with our existing CRM?", a: "Yes. VANI is designed to integrate with major CRM platforms, ticketing systems, and communication tools. Our team handles custom integrations as part of the onboarding process." },
];

export function NeoFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#F4EDE0]">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-12">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-[#7D1A28] mb-4 block">FAQ</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.6rem)] text-[#1C1917] leading-tight">Common questions.</h2>
          </div>
        </ScrollReveal>

        <div className="divide-y divide-[#E8D9C4]">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <div>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
                >
                  <span className="font-sans font-medium text-base text-[#1C1917] group-hover:text-[#7D1A28] transition-colors duration-150 pr-4">
                    {faq.q}
                  </span>
                  <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={16} className="text-[#9B7B4A] shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-sm text-[#5A5550] leading-relaxed pb-5">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FINAL CTA ─────────────────────────────────────────────────────────
export function NeoFinalCTA() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="demo" className="py-28 bg-[#1C1917]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-[#9B7B4A] mb-6 block">Get Started</span>

          {/* Octagon mark */}
          <div className="flex justify-center mb-8">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
              <polygon points="13,3 27,3 37,13 37,27 27,37 13,37 3,27 3,13" fill="none" stroke="#7D1A28" strokeWidth="1.5" opacity="0.5" />
              <circle cx="20" cy="20" r="5" fill="#7D1A28" opacity="0.35" />
            </svg>
          </div>

          <h2 className="font-sans font-bold text-[clamp(2rem,5vw,3.5rem)] text-[#EDE8E3] leading-tight mb-5">
            See how VANI would handle<br />your support volume.
          </h2>
          <div className="flex items-center gap-3 justify-center mb-10">
            <div className="h-px flex-1 max-w-[120px] bg-white/[0.08]" />
            <svg width="8" height="8" viewBox="0 0 8 8"><polygon points="4,0 8,4 4,8 0,4" fill="#9B7B4A" opacity="0.5" /></svg>
            <div className="h-px flex-1 max-w-[120px] bg-white/[0.08]" />
          </div>
          <p className="font-sans text-base text-[#6A6460] leading-relaxed mb-10 max-w-xl mx-auto">
            We'll show you a real demonstration of VANI handling your top 10 most common support inquiries — before any commitment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-[#7D1A28] hover:bg-[#9A2035] text-[#F8F5F0] font-sans font-medium text-sm px-7 py-3.5 rounded-sm transition-colors duration-150 cursor-pointer">
              Request a Demo <ArrowRight size={14} />
            </button>
            <button onClick={() => go("#simulation")} className="inline-flex items-center gap-2 border border-white/[0.12] hover:border-white/[0.25] text-[#EDE8E3] font-sans font-medium text-sm px-7 py-3.5 rounded-sm transition-colors duration-150 cursor-pointer">
              Try Simulation
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────
const FOOTER_COLS = [
  { title: "Product",     links: ["How It Works", "AI Agents", "Dashboard", "Simulation", "Channels"] },
  { title: "Industries",  links: ["Banking", "Healthcare", "Education", "Insurance", "Real Estate"] },
  { title: "Company",     links: ["About", "Careers", "Contact", "Privacy Policy", "Terms of Use"] },
];

export function NeoFooter() {
  return (
    <footer className="bg-[#141010] border-t border-white/[0.06] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-16 mb-14">
          {/* Brand col */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <polygon points="6.5,1.5 13.5,1.5 18.5,6.5 18.5,13.5 13.5,18.5 6.5,18.5 1.5,13.5 1.5,6.5" fill="none" stroke="#7D1A28" strokeWidth="1.2" />
                <circle cx="10" cy="10" r="2.5" fill="#7D1A28" opacity="0.45" />
              </svg>
              <span className="font-sans font-bold text-[1.05rem] text-[#EDE8E3] tracking-tight">
                V<span className="text-[#7D1A28]">AI</span>NI
              </span>
            </div>
            <p className="font-sans text-xs text-[#5A5550] leading-relaxed max-w-[220px]">
              AI Customer Support for enterprise teams. Built for Saudi Arabia and the Gulf.
            </p>
            <div className="flex gap-4">
              <Globe size={15} className="text-[#5A5550] hover:text-[#9B7B4A] cursor-pointer transition-colors" />
              <Mail  size={15} className="text-[#5A5550] hover:text-[#9B7B4A] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Link cols */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <p className="font-sans text-[10px] font-medium tracking-[0.18em] uppercase text-[#4A4540] mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-sans text-xs text-[#5A5550] hover:text-[#EDE8E3] transition-colors duration-150">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.05] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[11px] text-[#3A3530]">© 2025 VANI. All rights reserved.</p>
          <p className="font-sans text-[11px] text-[#3A3530]">AI handles repetition. Humans handle excellence.</p>
        </div>
      </div>
    </footer>
  );
}
