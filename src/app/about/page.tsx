// app/about/page.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Award, 
  GraduationCap, 
  BookOpen, 
  ExternalLink,
  ArrowRight,
  Code2,
  CheckCircle2,
  Quote,
  Sparkles,
  MapPin,
  Globe
} from 'lucide-react';
import { AnimatedSection } from '@/components/magic/animated-section';
import { Button } from '@/components/ui/button';
import { TechfusionLogo } from '@/components/layout/TechfusionLogo';
import Link from 'next/link';

export default function AboutPage() {
  const principles = [
    {
      icon: <Terminal className="w-5 h-5 text-white" />,
      title: "Human Liberation Through Automation",
      description: "When we strip away repetitive, mundane labor, we allow individuals and business teams to transcend survival mode and focus on creative, high-leverage strategic growth."
    },
    {
      icon: <Code2 className="w-5 h-5 text-white" />,
      title: "Demystifying AI From The Ground Up",
      description: "We don't use 'prompt-and-pray' AI or fragile Zapier glue. We build with custom Python, deterministic Pydantic schemas, and structured JSON contracts that never hallucinate."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      title: "Production Resilience & Zero Dropped Data",
      description: "Real enterprise systems experience network timeouts and API rate limits. Our pipelines are built with dead-letter queues, exponential retry mechanisms, and automated incident alerting."
    },
    {
      icon: <Cpu className="w-5 h-5 text-white" />,
      title: "Boutique Senior Craftsmanship",
      description: "Clients work directly with Muzikayise Khuzwayo. No junior handoffs, no bloated overhead, and complete operational transparency on every workflow deployment."
    }
  ];

  return (
    <main className="bg-black text-zinc-200 overflow-x-hidden pt-28 pb-20">
      {/* Page Hero */}
      <AnimatedSection className="py-16 text-center relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/80 text-zinc-300 text-xs font-mono mb-6">
            <TechfusionLogo variant="iconOnly" className="w-4 h-4" />
            <span>Founder & Principal Engineer</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Techfusion Automata</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-white mb-6">
            Accelerating Towards the Future: <br />
            <span className="text-silver-gradient">
              Muzikayise Khuzwayo
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            From growing up in Soweto to studying Electrical & Computer Engineering at UCT and publishing quantitative causal AI research—the journey behind Techfusion Automata and its Alchemy division.
          </p>
        </div>
      </AnimatedSection>

      {/* Main Narrative Story (Sourced from techfusion-ventures.xyz/founder) */}
      <AnimatedSection className="py-16 bg-black border-y border-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* Story text */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                  The Genesis
                </span>
                <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
                  My Story: The Power to Change Everything
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal font-sans">
                <p>
                  I grew up in Soweto, South Africa from a previously disadvantaged background. Born after apartheid, I had the opportunity to change everything for myself. In school, I worked hard enough to earn a scholarship into a private school my family could never have afforded—the <em className="text-white">Deutsche Internationale Schule Johannesburg</em>.
                </p>
                <p>
                  That determination took me to the <strong className="text-white">University of Cape Town</strong>, the greatest university in Africa, studying Electrical and Computer Engineering. I earned distinctions, was recognized on the <em className="text-white">Dean’s Merit List</em>, and was named a <em className="text-white">Dell Young Leaders Scholar</em> (top 50 in the university). But due to severe funding challenges, I lost my place, had to step back, and started over from the bottom back home.
                </p>
                <p>
                  Living at home in Soweto, a fundamental realization hit me: <strong className="text-white">I had the power to change everything. I always have, and I always will.</strong>
                </p>
                <p>
                  I seized every opportunity: completing online software engineering courses, working as a paid technical writer, and channeling every cent into mastering AI and workflow automation.
                </p>
                <p>
                  I began freelancing as an AI Automation specialist, driving immediate, measurable growth for international businesses. But working with those early tools revealed a critical truth: <em className="text-zinc-200">the standard no-code automations and generic AI templates were fundamentally fragile and flawed.</em>
                </p>
                <p>
                  I doubled down on Data Science and Machine Learning to demystify AI from the mathematical ground up. That led to designing novel algorithmic pipelines, authoring peer-reviewed causal research (<strong className="text-white">Dubstrata Causal-FM</strong> on SSRN), and establishing <strong className="text-white">Techfusion Automata</strong>.
                </p>
              </div>

              {/* Personal Philosophy Box */}
              <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 relative overflow-hidden">
                <Quote className="absolute top-3 right-3 w-10 h-10 text-zinc-700/20 pointer-events-none" />
                <h3 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-2">
                  Personal Philosophy
                </h3>
                <p className="italic text-zinc-200 text-base leading-relaxed font-sans">
                  &quot;The true value of artificial intelligence and automation lies in human liberation. When we strip away the necessity of constant labor, we allow humanity to transcend survival mode. We enable individuals to realize their full potential.&quot;
                </p>
                <span className="text-xs text-zinc-400 font-mono mt-3 block">— Muzikayise Khuzwayo</span>
              </div>
            </div>

            {/* Profile & Credentials Sidebar */}
            <div className="md:col-span-5 space-y-6">
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 space-y-5">
                <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
                  <TechfusionLogo variant="iconOnly" className="w-10 h-10" />
                  <div>
                    <h3 className="text-base font-semibold text-white">Muzikayise Khuzwayo</h3>
                    <p className="text-xs text-zinc-400 font-mono">Principal AI & Automation Engineer</p>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs text-zinc-300">
                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">University of Cape Town (UCT)</span>
                      <span className="text-zinc-400 font-sans">Electrical & Computer Engineering (Dean&apos;s Merit List)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Dell Young Leaders Scholar</span>
                      <span className="text-zinc-400 font-sans">Top 50 university-wide leadership selection</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <BookOpen className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">SSRN Published Researcher</span>
                      <span className="text-zinc-400 font-sans">Dubstrata Causal-FM (Abstract IDs: 7528238 & 7377639)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Operating Base</span>
                      <span className="text-zinc-400 font-sans">Cape Town & Johannesburg, South Africa (Deploying Globally)</span>
                    </div>
                  </div>
                </div>

                {/* Social & Web Links */}
                <div className="pt-4 border-t border-zinc-800 flex flex-wrap gap-2 text-xs font-mono">
                  <a 
                    href="https://www.upwork.com/freelancers/~01690494e012631bd1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    Upwork Verified Profile <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                  <a 
                    href="https://techfusion-ventures.xyz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    Techfusion Ventures <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                  <a 
                    href="https://www.muzikhuzwayo.xyz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    Personal Site <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                  <a 
                    href="https://x.com/3mk4y_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    X (@3mk4y_) <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>

                <Button asChild size="sm" className="w-full bg-white hover:bg-zinc-200 text-black rounded-full text-xs font-semibold py-5 shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all">
                  <Link href="https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes" target="_blank" rel="noopener noreferrer">
                    Book Architecture Session With Muzi →
                  </Link>
                </Button>
              </div>

              {/* Operating Division Notice */}
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-950 text-xs text-zinc-400 font-mono">
                <span className="text-white font-semibold block mb-1">Corporate Entity Structure:</span>
                Techfusion Automata (Pty) Ltd (Reg: 2026/399837/07) executes client automation contracts through its specialized <strong className="text-zinc-200">Alchemy Division</strong>.
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Engineering Principles */}
      <AnimatedSection className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tighter text-white">
              Why We Refuse Generic Agency Templates
            </h2>
            <p className="text-sm text-zinc-400 mt-2 font-normal font-sans">
              Every workflow we deploy is designed with the assumption that downstream systems will experience network lag, schema drift, and edge cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-950/70 hover:border-zinc-600 transition-all duration-300"
              >
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-12 bg-black">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="p-8 sm:p-10 rounded-2xl border border-zinc-800 bg-zinc-950 text-center shadow-xl">
            <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white mb-3">
              Ready to eliminate your core operational bottleneck?
            </h3>
            <p className="text-sm text-zinc-400 mb-6 max-w-xl mx-auto font-sans">
              Schedule a 30-minute technical audit. We’ll map out your highest-ROI automation and show you the exact architecture to make it reliable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild size="lg" className="bg-white hover:bg-zinc-200 text-black rounded-full px-8 text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                <Link href="https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes" target="_blank" rel="noopener noreferrer">
                  Schedule 30-Min Architecture Session →
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-500 hover:text-white rounded-full px-6 text-sm">
                <Link href="/legal">View Legal & POPIA Hub</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}