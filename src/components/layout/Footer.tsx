// components/layout/Footer.tsx
"use client";

import Link from 'next/link';
import { ArrowUp, ExternalLink, ShieldCheck, Mail, MapPin, Scale } from "lucide-react";
import { AnimatedSection } from '../magic/animated-section';
import { TechfusionLogo } from './TechfusionLogo';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatedSection className="bg-black text-zinc-400 border-t border-zinc-800">
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Corporate Legitimacy */}
          <div className="md:col-span-5 space-y-4">
            <TechfusionLogo variant="footer" />
            <p className="text-xs text-zinc-300 font-mono">
              Operating Company: Techfusion Automata (Pty) Ltd
            </p>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              <strong className="text-white">Alchemy</strong> is the specialized AI and automated workflow engineering division of Techfusion Automata (Pty) Ltd. Directed by Muzikayise Khuzwayo.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-zinc-300 shrink-0" />
                <span className="text-zinc-200">Techfusion Automata (Pty) Ltd</span>
              </div>
              <div className="text-zinc-500 pl-6">
                CIPC Reg: 2026/399837/07 • Republic of South Africa
              </div>
              <div className="flex items-center gap-2 pt-1">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>Based in South Africa (Cape Town / JHB) — Deploying Globally</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-zinc-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-200"></span>
                </span>
                <span>Currently taking 2 new workflow deployments this month</span>
              </div>
            </div>
          </div>

          {/* Architecture & Navigation */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-semibold text-white text-xs uppercase tracking-widest font-mono">Navigation</h3>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              <li><Link href="/#solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="/#architecture" className="hover:text-white transition-colors">Data Flow & DLQ</Link></li>
              <li><Link href="/#case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition-colors">Pilot Sprints</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Muzi</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* South African Legal Hub */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-semibold text-white text-xs uppercase tracking-widest font-mono flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-zinc-300" />
              Legal Hub
            </h3>
            <ul className="space-y-2 text-xs font-mono text-zinc-400">
              <li><Link href="/legal#ecta" className="hover:text-white transition-colors">ECTA s43 Disclosure</Link></li>
              <li><Link href="/legal#popia" className="hover:text-white transition-colors">POPIA & Zero-Training</Link></li>
              <li><Link href="/legal#paia" className="hover:text-white transition-colors">PAIA s51 Manual</Link></li>
              <li><Link href="/legal#terms" className="hover:text-white transition-colors">Terms & CPA s49</Link></li>
              <li><Link href="/legal#cybersecurity" className="hover:text-white transition-colors">Cybercrimes & Security</Link></li>
            </ul>
          </div>

          {/* Group & Track Record */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-semibold text-white text-xs uppercase tracking-widest font-mono">Book Architecture</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              30-minute technical session directly with Muzi. We audit your bottleneck and deliver an architecture flowchart.
            </p>
            <div className="pt-2">
              <Link
                href="https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-black font-semibold text-xs shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all"
              >
                Schedule Architecture Session →
              </Link>
            </div>
            <div className="pt-3 text-xs text-zinc-400 flex items-center gap-2 font-mono">
              <Mail className="w-3.5 h-3.5 text-zinc-400" />
              <a href="mailto:muzi@techfusion-alchemy.xyz" className="hover:text-white underline">
                muzi@techfusion-alchemy.xyz
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 font-mono gap-4">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} Techfusion Automata (Pty) Ltd. Reg: 2026/399837/07. A Techfusion Ventures Company.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">POPIA & Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  );
};