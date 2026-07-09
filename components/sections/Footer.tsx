"use client";

import { VaniLogo } from "@/components/ui/VaniLogo";
import { Globe2, Share2, ExternalLink, Mail } from "lucide-react";

const FOOTER_LINKS = {
  Product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "AI Agents", href: "#ai-team" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Try Simulation", href: "#simulation" },
  ],
  Channels: [
    { label: "Voice Calls", href: "#channels" },
    { label: "WhatsApp", href: "#channels" },
    { label: "Website Chat", href: "#channels" },
    { label: "Email & Social", href: "#channels" },
  ],
  Industries: [
    { label: "Banks", href: "#industries" },
    { label: "Hospitals", href: "#industries" },
    { label: "Schools", href: "#industries" },
    { label: "Enterprise", href: "#industries" },
  ],
  Company: [
    { label: "Security", href: "#security" },
    { label: "Why VANI", href: "#why-vani" },
    { label: "FAQ", href: "#faq" },
    { label: "Request Demo", href: "#demo" },
  ],
};

export function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--color-charcoal)] border-t border-white/[0.06]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <VaniLogo size="md" onDark className="mb-4" animate />
            <p className="font-sans text-sm text-[var(--color-stone)] leading-relaxed mb-6">
              Enterprise AI Support Team for organizations where response quality,
              trust, and escalation accuracy are non-negotiable.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[var(--color-stone)] hover:text-[var(--color-ivory)] transition-all duration-200">
                <Globe2 size={13} />
              </a>
              <a href="#" aria-label="Social" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[var(--color-stone)] hover:text-[var(--color-ivory)] transition-all duration-200">
                <Share2 size={13} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="text-[10px] font-sans font-semibold tracking-[0.15em] uppercase text-[var(--color-stone)] mb-4">
                {group}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className="font-sans text-sm text-[var(--color-stone)] hover:text-[var(--color-ivory)] transition-colors duration-200 underline-wine cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-[var(--color-stone)]/50">
            © {new Date().getFullYear()} VANI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-sans text-xs text-[var(--color-stone)]/50">Privacy Policy</span>
            <span className="font-sans text-xs text-[var(--color-stone)]/50">Terms of Use</span>
            <a
              href="mailto:hello@vani.ai"
              className="font-sans text-xs text-[var(--color-stone)]/60 hover:text-[var(--color-ivory)] transition-colors duration-200"
            >
              hello@vani.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
