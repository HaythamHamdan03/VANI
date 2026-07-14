"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";
import {
  Lock, Server, ShieldCheck, Users, FileText, Eye, CheckSquare, Settings,
  Globe2, Layers, Zap, BarChart3,
  ArrowRight, ChevronDown, Globe, Share2,
} from "lucide-react";

const S = {
  section:    "section-pad bg-[#070B0F] relative overflow-hidden",
  sectionAlt: "section-pad bg-[#0B0F14] relative overflow-hidden",
  card:       "bg-[#0F1318] border border-white/[0.06] hover:border-[#C41230]/30 rounded-xl transition-all duration-300",
  label:      "text-[10px] font-mono tracking-[0.22em] uppercase text-[#C41230] mb-4 block",
  h2:         "font-sans font-bold text-[clamp(1.8rem,4vw,3rem)] text-[#E8EAED] leading-tight mb-5",
  p:          "font-sans text-base text-[#6E7780] leading-relaxed",
};

// ── Security ──────────────────────────────────────────────────
const SEC = [
  { icon: Lock,        title: "Private knowledge layer",      detail: "Your knowledge base is isolated and used only to answer your customers. Never shared or used to train public models." },
  { icon: Server,      title: "Client-level data isolation",  detail: "Each organization operates in a dedicated, isolated environment. No data commingling." },
  { icon: ShieldCheck, title: "Encryption in transit & at rest", detail: "All data is encrypted using industry-standard protocols at every point in the pipeline." },
  { icon: Users,       title: "Role-based access control",    detail: "Granular permission layers for agents, supervisors, compliance reviewers, and administrators." },
  { icon: FileText,    title: "Audit logs",                   detail: "Complete, tamper-evident logs for every AI action, human escalation, and system event." },
  { icon: Eye,         title: "PII/PHI-aware workflows",      detail: "Sensitive identifiers are masked in logs and transcripts. Healthcare workflows recognize PHI and handle accordingly." },
  { icon: CheckSquare, title: "Human approval workflows",     detail: "Configure any knowledge update or policy change to require human review before publishing." },
  { icon: Settings,    title: "Configurable retention",       detail: "Set your own data retention windows. Request complete deletion at any time." },
];

export function CmdSecurity() {
  return (
    <section id="security" className={S.sectionAlt}>
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C41230] opacity-[0.03] blur-[160px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <ScrollReveal><span className={S.label}>// Security & Privacy</span></ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className={S.h2}>Your data answers your customers.<br /><span className="text-[#6E7780]">Not anyone else's.</span></h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}><p className={`${S.p} mb-8`}>Designed with security-conscious and compliance-aware enterprise workflows for financial services and healthcare environments.</p></ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className={`${S.card} p-5`}>
                <p className="font-mono text-xs text-[#4A5260] mb-3">// Core guarantee</p>
                <p className="font-sans text-sm text-[#E8EAED] italic leading-relaxed mb-4">"Your data is used to answer your customers, not to train a public model."</p>
                {["Client-isolated knowledge base", "No data commingling between clients", "Private deployment & integration review"].map((pt) => (
                  <div key={pt} className="flex items-center gap-2 py-1.5 border-b border-white/[0.04] last:border-0">
                    <span className="text-[#C41230] font-mono text-xs">›</span>
                    <span className="font-sans text-xs text-[#6E7780]">{pt}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 gap-3">
            {SEC.map((f) => (
              <motion.div key={f.title} variants={staggerItem} className={`${S.card} p-4 cursor-default`}>
                <div className="w-8 h-8 rounded-lg bg-[#C41230]/10 flex items-center justify-center mb-3">
                  <f.icon size={14} className="text-[#C41230]" />
                </div>
                <h3 className="font-sans font-semibold text-xs text-[#E8EAED] mb-1.5">{f.title}</h3>
                <p className="font-sans text-xs text-[#6E7780] leading-relaxed">{f.detail}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

// ── Why VANI ─────────────────────────────────────────────────
const WHY = [
  { icon: Globe2,   title: "Arabic-first. English-ready.", detail: "Built for the Gulf enterprise market. Native Arabic understanding across all channels." },
  { icon: Users,    title: "Human-in-the-loop architecture", detail: "VANI augments your team. Sensitive, complex, and revenue-impacting cases always reach a human." },
  { icon: Layers,   title: "Truly omnichannel",             detail: "One system across calls, WhatsApp, chat, email, and social — unified context, no silos." },
  { icon: ShieldCheck, title: "Regulation-aware",           detail: "Built alongside financial services and healthcare compliance needs from the ground up." },
  { icon: Zap,      title: "Not a generic chatbot",         detail: "Seven specialized AI agents working as a team — not a single general-purpose model." },
  { icon: BarChart3, title: "Full performance visibility",  detail: "Real-time dashboards tracking resolution rate, escalation accuracy, response time, and quality." },
];

export function CmdWhyVani() {
  return (
    <section id="why-vani" className={S.section}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <ScrollReveal><span className={S.label}>// Why VANI</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={S.h2}>Built for Gulf enterprise. Not a generic AI.</h2></ScrollReveal>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {WHY.map((w) => (
            <motion.div key={w.title} variants={staggerItem} className={`${S.card} p-5 cursor-default`}>
              <div className="w-9 h-9 rounded-xl bg-[#C41230]/10 flex items-center justify-center mb-4">
                <w.icon size={16} className="text-[#C41230]" />
              </div>
              <h3 className="font-sans font-semibold text-sm text-[#E8EAED] mb-2">{w.title}</h3>
              <p className="font-sans text-xs text-[#6E7780] leading-relaxed">{w.detail}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        <ScrollReveal>
          <div className="bg-[#0F1318] border border-[#C41230]/20 rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-80 h-48 bg-[#C41230] opacity-10 blur-[80px] rounded-full" />
            <div className="relative z-10">
              <p className="font-sans font-bold text-[clamp(1.5rem,3.5vw,2.5rem)] text-[#E8EAED] leading-snug mb-4">
                AI handles repetition.<br /><span className="text-[#C41230]">Humans handle excellence.</span>
              </p>
              <p className="font-sans text-base text-[#6E7780] mb-8 max-w-xl mx-auto">VANI is your first line of support — resolving what it can, and making sure what it can't reaches the right person with everything they need to act.</p>
              <button
                onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-white/[0.15] hover:border-white/[0.3] text-[#E8EAED] font-sans font-medium text-sm px-6 py-3 rounded transition-colors cursor-pointer"
              >
                Request a Demo
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── Pricing ──────────────────────────────────────────────────
const TIERS = [
  {
    name: "Pilot",
    tagline: "Focused workflow validation.",
    desc: "Start with selected channels and specific use cases. Validate AI performance and team fit before scaling.",
    features: ["Selected channel deployment", "Knowledge base setup & onboarding", "Dashboard & analytics preview", "Human handoff workflows", "Basic escalation rules", "Pilot review session"],
    cta: "Request Demo",
    hot: false,
  },
  {
    name: "Growth",
    tagline: "Scaling across departments.",
    desc: "Deploy across multiple channels and teams. Advanced analytics and escalation control for growing support operations.",
    features: ["Multi-channel deployment", "Advanced analytics & reporting", "Custom escalation & routing rules", "Team workflow configuration", "Quality review tooling", "Dedicated onboarding support"],
    cta: "Talk to Sales",
    hot: true,
  },
  {
    name: "Enterprise",
    tagline: "For regulated, high-volume organizations.",
    desc: "Full security review, compliance workflows, and custom integrations for banks, hospitals, and enterprise operations.",
    features: ["Security & compliance review", "PHI/PII-aware workflows", "Advanced role-based access", "CRM & ticketing integration", "Full audit log infrastructure", "Dedicated account management"],
    cta: "Talk to Sales",
    hot: false,
  },
];

export function CmdPricing() {
  return (
    <section id="pricing" className={S.sectionAlt}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <ScrollReveal><span className={S.label}>// Engagement</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={S.h2}>Start where it makes sense.</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className={S.p}>Three engagement models designed around how enterprise AI deployments actually work — not subscription boxes.</p></ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              className={`${S.card} p-6 flex flex-col relative ${t.hot ? "border-[#C41230]/40" : ""}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
            >
              {t.hot && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C41230] text-white font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-full">
                  Recommended
                </div>
              )}
              <div className="mb-5">
                <p className="font-mono text-xs text-[#C41230] mb-1 uppercase tracking-widest">{t.name}</p>
                <h3 className="font-sans font-bold text-lg text-[#E8EAED] mb-2">{t.tagline}</h3>
                <p className="font-sans text-sm text-[#6E7780] leading-relaxed">{t.desc}</p>
              </div>
              <div className="space-y-2 mb-6 flex-1">
                {t.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <span className="text-[#C41230] font-mono text-xs shrink-0">›</span>
                    <span className="font-sans text-xs text-[#6E7780]">{f}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-2.5 rounded font-sans font-medium text-sm transition-colors cursor-pointer ${
                  t.hot
                    ? "bg-[#C41230] hover:bg-[#A50E26] text-white"
                    : "border border-white/[0.12] text-[#E8EAED] hover:border-white/[0.25]"
                }`}
              >
                {t.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────
const FAQS = [
  { q: "Does VANI replace human support agents?", a: "No. VANI handles repetitive, high-volume inquiries so your human agents can focus on complex, sensitive, and revenue-impacting cases. The goal is to reduce repetition burden — not headcount." },
  { q: "How does VANI handle sensitive cases?", a: "VANI's Escalation Agent continuously monitors for urgency, emotional distress, compliance indicators, and low AI confidence. When any threshold is crossed, the case is immediately routed to a human agent with a full conversation summary." },
  { q: "Can VANI work with calls and WhatsApp?", a: "Yes. VANI supports voice calls, WhatsApp, website chat, email, social media, and mobile app support — all from a single unified system." },
  { q: "Can VANI support Arabic and English?", a: "Yes. VANI is built Arabic-first with strong English support. Both languages are handled natively across all channels." },
  { q: "Does VANI train on our private data?", a: "No. Your knowledge base and conversation data are never used to train shared or public models. Your data is used exclusively to serve your customers within your isolated environment." },
  { q: "Is VANI suitable for banks and hospitals?", a: "VANI was designed with these sectors in mind — compliance-aware workflows, PHI-aware data handling, audit logging, human approval workflows, and sensitive-case routing are all built in." },
  { q: "Can VANI integrate with our CRM or ticketing system?", a: "Yes. VANI supports integration with major CRM and ticketing platforms. Integration scope and depth are reviewed during the onboarding process." },
  { q: "What happens when the AI is not confident?", a: "VANI's Escalation Agent has a configurable confidence threshold. When AI confidence falls below your defined level, the case is automatically routed to a human agent with full context — before the customer notices any drop in service quality." },
];

export function CmdFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className={S.section}>
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <ScrollReveal><span className={S.label}>// FAQ</span></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className={S.h2}>Common questions.</h2></ScrollReveal>
        </div>

        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              className={`${S.card} overflow-hidden`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 + 0.1 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
              >
                <span className="font-sans font-medium text-sm text-[#E8EAED] pr-4">{faq.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={16} className="text-[#6E7780] shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-4 border-t border-white/[0.04]">
                      <p className="font-sans text-sm text-[#6E7780] leading-relaxed pt-3">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Final CTA ─────────────────────────────────────────────────
export function CmdFinalCTA() {
  return (
    <section id="demo" className={S.sectionAlt}>
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C41230] opacity-[0.06] blur-[180px] rounded-full" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 border border-white/[0.08] rounded px-3 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
            <span className="font-mono text-[10px] text-[#6E7780] uppercase tracking-[0.2em]">Available for demos</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-sans font-bold text-[clamp(2rem,5vw,4rem)] text-[#E8EAED] leading-tight mb-6">
            See how VANI would handle<br />your support volume.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-sans text-lg text-[#6E7780] leading-relaxed mb-10 max-w-xl mx-auto">
            A 30-minute session is enough to show you exactly how VANI would work within your team, channels, and compliance requirements — before any commitment.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button className="inline-flex items-center gap-2 bg-[#C41230] hover:bg-[#A50E26] text-white font-sans font-medium px-7 py-3.5 rounded transition-colors cursor-pointer">
              Request a Demo <ArrowRight size={16} />
            </button>
            <button
              onClick={() => document.querySelector("#simulation")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-white/[0.12] hover:border-white/[0.25] text-[#E8EAED] font-sans font-medium px-7 py-3.5 rounded transition-colors cursor-pointer"
            >
              Try Simulation
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-6 font-sans text-sm text-[#4A5260]">
            <a href="mailto:hello@vani.ai" className="hover:text-[#6E7780] transition-colors">hello@vani.ai</a>
            <span className="w-px h-4 bg-white/[0.06]" />
            <button onClick={() => document.querySelector("#simulation")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#6E7780] transition-colors cursor-pointer">Book a Consultation</button>
            <span className="w-px h-4 bg-white/[0.06]" />
            <button onClick={() => document.querySelector("#simulation")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#6E7780] transition-colors cursor-pointer">Talk to Sales</button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────
const FOOTER_LINKS = {
  Product:    ["How It Works", "AI Agents", "Dashboard", "Simulation"],
  Industries: ["Banks", "Hospitals", "Schools", "Enterprise"],
  Company:    ["About", "Security", "Privacy", "Contact"],
};

export function CmdFooter() {
  return (
    <footer className="bg-[#0B0F14] border-t border-white/[0.06] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="24" height="18" viewBox="0 0 28 20" fill="none" aria-hidden>
                <rect x="0"  y="6"  width="4" height="8"  rx="2" fill="#4A5260"/>
                <rect x="6"  y="0"  width="4" height="20" rx="2" fill="#C41230"/>
                <rect x="12" y="3"  width="4" height="14" rx="2" fill="#4A5260"/>
                <rect x="18" y="0"  width="4" height="20" rx="2" fill="#C41230"/>
                <rect x="24" y="6"  width="4" height="8"  rx="2" fill="#4A5260"/>
              </svg>
              <span className="font-sans font-semibold text-lg text-[#E8EAED]">V<span className="text-[#C41230]">AI</span>NI</span>
            </div>
            <p className="font-sans text-xs text-[#4A5260] leading-relaxed mb-4">Enterprise AI Support Team for customer service across voice, messages, and digital channels.</p>
            <div className="flex gap-3">
              <Globe size={15} className="text-[#4A5260] cursor-pointer hover:text-[#6E7780] transition-colors" />
              <Share2 size={15} className="text-[#4A5260] cursor-pointer hover:text-[#6E7780] transition-colors" />
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="font-mono text-[9px] text-[#C41230] uppercase tracking-widest mb-4">{group}</p>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l}><a href="#" className="font-sans text-xs text-[#4A5260] hover:text-[#6E7780] transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-[#2A3040]">© {new Date().getFullYear()} VANI. All rights reserved.</p>
          <p className="font-mono text-[10px] text-[#2A3040]">Designed with security-conscious and compliance-aware enterprise workflows.</p>
        </div>
      </div>
    </footer>
  );
}
