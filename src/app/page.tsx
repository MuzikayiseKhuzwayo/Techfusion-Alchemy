// app/page.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  BrainCircuit,
  Bot,
  Database,
  FileSpreadsheet,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Cpu,
  FileCode2,
  Network,
  Target,
  Share2,
  Briefcase,
  Rocket,
  Zap,
  Award
} from "lucide-react";

// Magic & Section Components
import { HeroSection } from "@/components/magic/hero-section";
import { AnimatedSection } from "@/components/magic/animated-section";
import { ArchitectureFlow } from "@/components/magic/architecture-flow";
import { SuccessStories } from "@/components/magic/success-stories";
import { SecuritySection } from "@/components/magic/security-section";
import { PricingSection } from "@/components/magic/pricing-section";
import { InfiniteMovingLogos } from "@/components/magic/infinite-moving-logos";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const offeringsRef = useRef<HTMLDivElement>(null);

  const scrollToOfferings = () => offeringsRef.current?.scrollIntoView({ behavior: 'smooth' });

  const coreSolutions = [
    {
      icon: <Target className="w-7 h-7 text-white" />,
      title: "Autonomous Sales Lead Pipelines",
      badge: "< 45s Speed-to-Lead Moat",
      problem: "Leads wait hours in inboxes before qualification, cooling off high-intent buyers and dropping conversion rates by over 300%.",
      solution: "From initial multi-channel touchpoint to interactive value intake, sub-60s personalized WhatsApp/email outreach, and automated value-stacking nurture drips until the prospect is booked and closed.",
      techStack: "n8n • WhatsApp API • Supabase • HubSpot / GHL"
    },
    {
      icon: <Share2 className="w-7 h-7 text-white" />,
      title: "Autonomous Marketing & Content Scaling",
      badge: "Organic Winner Auto-Boosting",
      problem: "Marketing teams waste 20+ hours/week manually scheduling content and burning ad budget on unproven creative hunches.",
      solution: "One core insight is autonomously syndicated across LinkedIn, X, Meta, and newsletters. Real-time telemetry detects viral posts in the top 10% and triggers automated micro-budget ad scaling while crawling competitor ad libraries.",
      techStack: "Meta Graph API • Buffer • OpenAI • Analytics Webhooks"
    },
    {
      icon: <Briefcase className="w-7 h-7 text-white" />,
      title: "Outcome-Driven Business Development",
      badge: "Output Over Hours Surveillance",
      problem: "Legacy businesses track hours and keystrokes instead of productive outcomes, suffocating high performers and missing workflow bottlenecks.",
      solution: "We ingest internal operational exhaust (CRM, tickets, code milestones) to evaluate real deliverables against role-calibrated benchmarks. AI models spot operational friction and coach team members to achieve 5x more leverage.",
      techStack: "Role Expectation Models • Knowledge Graphs • Pydantic • Supabase"
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-white" />,
      title: "Mission-Critical Integration Infrastructure",
      badge: "Zero-Data-Loss DLQ Failover",
      problem: "Fragile no-code zaps break silently when upstream APIs change, causing lost deals and missing transaction records.",
      solution: "Engineered with strict idempotency keys, deterministic JSON schema validation, exponential retry policies, and automated dead-letter queue (DLQ) alerts directly to Slack/Telegram.",
      techStack: "n8n Self-Hosted • Python • Redis • PostgreSQL"
    },
  ];

  const logos = [
    {
      id: 1,
      name: 'n8n',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/n8n.avif',
      description: 'Production-grade workflow orchestration with custom JavaScript/Python nodes, webhook listeners, and failover retries.',
    },
    {
      id: 2,
      name: 'Supabase',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/supabase.webp',
      description: 'PostgreSQL database backend with Row-Level Security (RLS), real-time subscriptions, and encrypted secret vaults.',
    },
    {
      id: 3,
      name: 'OpenAI / Claude',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/openai.png',
      description: 'Structured JSON output models with deterministic schema parsing, zero temperature, and strict Pydantic contracts.',
    },
    {
      id: 4,
      name: 'GoHighLevel',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/highlevel.jpg',
      description: 'Deep CRM integration, conversation tagging, appointment orchestration, and multi-channel pipeline triggers.',
    },
    {
      id: 5,
      name: 'HubSpot',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/hubspot.png',
      description: 'Bi-directional contact property sync, deal stage automation, and custom webhook lifecycle notifications.',
    },
    {
      id: 6,
      name: 'Airtable',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/airtable.png',
      description: 'Relational operations data structures, human-in-the-loop review queues, and rapid operational prototyping.',
    },
    {
      id: 7,
      name: 'Twilio',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/twilio.png',
      description: 'Reliable SMS, WhatsApp API, and programmable voice routing for immediate lead notifications and two-way verification.',
    },
    {
      id: 8,
      name: 'Stripe',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/stripe.png',
      description: 'Webhook verification, invoice events reconciliation, subscription state tracking, and accounting synchronization.',
    },
  ];

  return (
    <main className="bg-black text-zinc-200 overflow-x-hidden">
      {/* 1. Hero Section */}
      <HeroSection scrollToOfferings={scrollToOfferings} />

      {/* 2. Core Technical Solutions (Step 2) */}
      <div ref={offeringsRef} id="solutions">
        <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tighter text-white">
              Targeted Automation for Real Business Bottlenecks
            </h2>
            <p className="text-base text-zinc-400 mt-4 leading-relaxed font-normal">
              We don&apos;t sell generic &quot;autonomous agency&quot; promises. We build concrete, fault-tolerant data pipelines that eliminate repetitive human hours and keep your database 100% accurate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreSolutions.map((sol) => (
              <Card
                key={sol.title}
                className="bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-600 rounded-2xl shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-700/80 text-white">
                      {sol.icon}
                    </div>
                    <span className="text-xs font-mono text-zinc-300 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-700/80">
                      {sol.badge}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-semibold tracking-tight text-white">{sol.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-xs text-zinc-400 bg-zinc-900/80 border border-zinc-800 p-3.5 rounded-xl font-sans">
                    <span className="text-zinc-300 font-mono font-medium block mb-1 uppercase tracking-wider text-[11px]">The Bottleneck:</span>
                    {sol.problem}
                  </div>
                  <div className="text-sm text-zinc-300 leading-relaxed font-sans">
                    <span className="text-white font-mono text-xs font-medium block mb-1 uppercase tracking-wider text-[11px]">The Solution:</span>
                    {sol.solution}
                  </div>
                  <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="text-zinc-500 uppercase tracking-wider text-[10px]">Stack:</span>
                    <span className="text-zinc-300">{sol.techStack}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* 3. Interactive Architecture Section (Step 2) */}
      <div id="architecture">
        <AnimatedSection className="py-20 sm:py-28 bg-black border-t border-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tighter text-white">
                Automating What Actually Grows Your Business
              </h2>
              <p className="text-base text-zinc-400 mt-4 leading-relaxed font-normal">
                Step through our interactive systems. Explore how we engineer autonomous sales pipelines, self-scaling marketing engines, and outcome-driven business development powered by AI.
              </p>
            </div>

            <ArchitectureFlow />
          </div>
        </AnimatedSection>
      </div>

      {/* 4. Engineering Proof of Work / Real Case Studies (Step 3) */}
      <SuccessStories />

      {/* 5. Pricing & 5-Day Pilot Sprint (Step 5) */}
      <PricingSection />

      {/* 6. Technology Stack Section */}
      <AnimatedSection className="py-20 sm:py-28 bg-black border-t border-zinc-900" id="tech-stack">
        <div className="text-center max-w-3xl mx-auto mb-12 px-4">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tighter text-white mb-3">
            Production Integrations & Infrastructure
          </h2>
          <p className="text-sm text-zinc-400 font-mono">
            Battle-tested APIs, databases, and workflow orchestration engines
          </p>
        </div>
        <InfiniteMovingLogos items={logos} direction="right" speed="slow" />
      </AnimatedSection>

      {/* 7. Security, Privacy & POPIA Section (Step 4) */}
      <SecuritySection />

      {/* 8. Final CTA Section */}
      <AnimatedSection className="py-20 sm:py-28 text-center bg-black border-t border-zinc-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/80 text-zinc-300 text-xs font-mono mb-6">
            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
            Taking 2 Workflow Deployments This Month
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
            Ready for Production Automation?
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mb-8 leading-relaxed">
            Schedule a 30-minute Architecture Session with Muzikayise Khuzwayo. We’ll map out your highest-friction operational bottleneck and provide a technical flowchart of how to automate it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-white hover:bg-zinc-200 text-black font-semibold rounded-full shadow-[0_0_25px_rgba(255,255,255,0.2)] px-8 py-6 text-base">
              <Link href="https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes" target="_blank" rel="noopener noreferrer">
                Book Architecture Session →
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-zinc-900/80 border-zinc-700 text-zinc-200 rounded-full hover:bg-zinc-800 hover:border-zinc-500 hover:text-white px-8 py-6 text-base">
              <Link href="/contact">Send Project Specs Directly</Link>
            </Button>
          </div>
          <div className="mt-10 text-xs text-zinc-500 font-mono">
            Techfusion Automata (Pty) Ltd • Reg: 2026/399837/07 • Based in South Africa, deploying globally
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}