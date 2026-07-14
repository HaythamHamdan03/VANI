"use client";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/animations/ScrollReveal";

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

// ── PROBLEM ──────────────────────────────────────────────────────────
const PROBLEMS = [
  { n: "01", title: "Repetitive Calls at Scale",    desc: "Thousands of routine inquiries flood your team every day, leaving no capacity for the cases that truly need human judgment." },
  { n: "02", title: "Long Customer Wait Times",     desc: "Customers wait minutes for answers that exist in your knowledge base and could be retrieved in seconds." },
  { n: "03", title: "Inconsistent Responses",       desc: "Different agents give different answers to the same question. Customer trust and brand consistency both suffer." },
  { n: "04", title: "Fragmented Channels",          desc: "Voice, WhatsApp, email, and chat operate in silos. There is no unified view of the customer or the conversation." },
  { n: "05", title: "Compliance Risk",              desc: "Sensitive conversations are handled without guardrails — no audit trail, no escalation protocol, no compliance record." },
  { n: "06", title: "No Operational Insight",       desc: "Support operations run blind without real-time analytics on resolution rates, patterns, or agent performance." },
];

export function NeoProblem() {
  return (
    <section id="problem" className="py-24 bg-[#F8F5F0]" style={GEO_PAT}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-xl mb-16">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-[#7D1A28] mb-4 block">The Problem</span>
            <h2 className="font-sans font-bold text-[clamp(2rem,4vw,3rem)] text-[#1C1917] leading-tight mb-4">
              Support teams are stretched too thin.
            </h2>
            <GeoDivider />
            <p className="font-sans text-base text-[#5A5550] leading-relaxed mt-4">
              High-trust organizations face the same challenge: too many routine cases, too few resources for the ones that matter.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E8D9C4]">
          {PROBLEMS.map((p) => (
            <motion.div
              key={p.n}
              variants={staggerItem}
              className="bg-[#F8F5F0] hover:bg-white transition-colors duration-200 p-8 flex flex-col gap-3"
            >
              <span className="font-sans font-bold text-[#E8D9C4] text-3xl leading-none select-none">{p.n}</span>
              <div className="w-8 h-px bg-[#7D1A28]" />
              <h3 className="font-sans font-semibold text-base text-[#1C1917]">{p.title}</h3>
              <p className="font-sans text-sm text-[#7A7470] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ── SOLUTION ─────────────────────────────────────────────────────────
const SOL_POINTS = [
  { n: "01", title: "Handle All Routine Cases",        desc: "VANI responds to repetitive inquiries 24/7 across all channels, in Arabic and English, with zero wait time." },
  { n: "02", title: "Detect Complexity Instantly",     desc: "VANI identifies sensitive, complex, or revenue-critical cases that require a human agent — before damage is done." },
  { n: "03", title: "Escalate with Full Context",      desc: "The agent receives a complete summary: intent, channel, conversation history, and a recommended action." },
  { n: "04", title: "Omnichannel, Unified",            desc: "One system for voice, WhatsApp, website chat, email, social media, and mobile app — all in one view." },
  { n: "05", title: "Compliance by Design",            desc: "Every AI interaction is logged, auditable, and configured for the compliance requirements of your industry." },
  { n: "06", title: "Continuous Improvement",          desc: "Analytics reveal patterns, improve responses, and help your leadership team identify training opportunities." },
];

export function NeoSolution() {
  return (
    <section className="py-24 bg-[#F4EDE0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-28">
          {/* Sticky left */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ScrollReveal>
              <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-[#7D1A28] mb-4 block">The Solution</span>
              <h2 className="font-sans font-bold text-[clamp(2rem,4vw,3rem)] text-[#1C1917] leading-tight mb-5">
                AI handles repetition.<br />
                Humans handle excellence.
              </h2>
              <GeoDivider />
              <p className="font-sans text-base text-[#5A5550] leading-relaxed mt-5 mb-8">
                VANI is your AI Support Team — a layer of intelligent agents that work alongside your human team, not instead of them.
              </p>
              <div className="bg-white border border-[#E8D9C4] p-6">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    ["24 / 7", "Availability"],
                    ["< 2s",   "Response Time"],
                    ["6+",     "Channels"],
                    ["7",      "AI Agents"],
                  ].map(([v, l]) => (
                    <div key={l}>
                      <p className="font-sans font-bold text-2xl text-[#7D1A28]">{v}</p>
                      <p className="font-sans text-xs text-[#8A8680] mt-0.5">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: steps */}
          <div className="flex flex-col">
            {SOL_POINTS.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 0.07}>
                <div className="flex gap-6 py-7 border-b border-[#E8D9C4] last:border-0">
                  <span className="font-sans font-bold text-[#DCCFBC] text-2xl shrink-0 w-8">{s.n}</span>
                  <div>
                    <h3 className="font-sans font-semibold text-base text-[#1C1917] mb-1.5">{s.title}</h3>
                    <p className="font-sans text-sm text-[#7A7470] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── HOW IT WORKS ─────────────────────────────────────────────────────
const STEPS = [
  { n: "1", title: "Customer Reaches Out",    desc: "Via voice, WhatsApp, chat, email, social, or mobile — in Arabic or English, at any hour." },
  { n: "2", title: "VANI Understands Intent", desc: "Natural language understanding identifies the request type, urgency, and language natively." },
  { n: "3", title: "Knowledge Retrieved",     desc: "VANI retrieves approved answers from your private knowledge base — not a public model." },
  { n: "4", title: "Response Composed",       desc: "VANI responds accurately, collects missing information, or requests confirmation as needed." },
  { n: "5", title: "Sensitivity Detected",    desc: "PII, financial data, complaints, or complexity are flagged immediately for human review." },
  { n: "6", title: "Agent Receives Briefing", desc: "The human agent gets the full context: intent, channel, history, and recommended action." },
  { n: "7", title: "Operations Improve",      desc: "Every interaction feeds analytics — improving responses and revealing training opportunities." },
];

export function NeoHowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-[#9B7B4A] mb-4 block">How It Works</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.8rem)] text-[#EDE8E3] leading-tight">
              Seven steps from inquiry to resolution.
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
          {STEPS.map((s) => (
            <motion.div
              key={s.n}
              variants={staggerItem}
              className="bg-[#1C1917] p-8 flex flex-col gap-4 hover:bg-[#241F1C] transition-colors duration-200"
            >
              <div className="w-8 h-8 border border-[#7D1A28]/40 bg-[#7D1A28]/10 flex items-center justify-center rounded-sm">
                <span className="font-sans font-bold text-xs text-[#7D1A28]">{s.n}</span>
              </div>
              <h3 className="font-sans font-semibold text-sm text-[#EDE8E3]">{s.title}</h3>
              <p className="font-sans text-xs text-[#6A6460] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

// ── AGENTS ───────────────────────────────────────────────────────────
const AGENTS = [
  { name: "Triage Agent",     role: "Classifies intent, language, urgency, and channel",      hot: true  },
  { name: "Knowledge Agent",  role: "Retrieves approved answers from your private knowledge",  hot: false },
  { name: "Response Agent",   role: "Drafts and delivers accurate responses in Arabic/English",hot: false },
  { name: "Compliance Agent", role: "Flags sensitive content and triggers protocol workflows", hot: true  },
  { name: "Escalation Agent", role: "Routes complex cases to the correct human team",          hot: true  },
  { name: "Summary Agent",    role: "Prepares full context briefing before agent handoff",     hot: false },
  { name: "Quality Agent",    role: "Monitors response quality and drives continuous improvement", hot: false },
];

export function NeoAgents() {
  return (
    <section id="agents" className="py-24 bg-[#F8F5F0]" style={GEO_PAT}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-xl mb-14">
            <span className="font-sans text-[10px] font-medium tracking-[0.22em] uppercase text-[#7D1A28] mb-4 block">AI Support Team</span>
            <h2 className="font-sans font-bold text-[clamp(1.8rem,4vw,2.8rem)] text-[#1C1917] leading-tight mb-3">
              Seven specialized agents. One unified team.
            </h2>
            <p className="font-sans text-sm text-[#5A5550]">Each agent has a defined role. Together, they handle the full support cycle without gaps.</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {AGENTS.map((a) => (
            <motion.div
              key={a.name}
              variants={staggerItem}
              className="bg-white border border-[#EDE5D8] p-6 flex flex-col gap-3 hover:border-[#7D1A28]/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                {a.hot && <span className="w-1.5 h-1.5 rounded-full bg-[#7D1A28] animate-pulse" />}
                <span className="font-sans font-semibold text-sm text-[#1C1917]">{a.name}</span>
              </div>
              <p className="font-sans text-xs text-[#7A7470] leading-relaxed">{a.role}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
