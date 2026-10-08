// components/magic/architecture-flow.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Sparkles, 
  Zap, 
  Gift, 
  DollarSign, 
  Share2, 
  BarChart3, 
  Rocket, 
  Search, 
  Layers, 
  Briefcase, 
  Award, 
  Activity, 
  TrendingUp, 
  CheckCircle2, 
  Compass, 
  ShieldCheck
} from 'lucide-react';

export type PillarId = 'sales' | 'marketing' | 'bizdev';

export interface FlowStage {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  outcomeBadge: string;
  capabilities: string[];
  imageSrc: string;
  imageAlt: string;
  businessOutcome: string;
}

export interface PillarConfig {
  id: PillarId;
  name: string;
  shortTitle: string;
  tagline: string;
  icon: React.ReactNode;
  stages: FlowStage[];
}

const pillars: PillarConfig[] = [
  {
    id: "sales",
    name: "Automated Sales Pipelines",
    shortTitle: "Sales",
    tagline: "Turn cold curiosity into closed deals with sub-60s triage and value-first nurture drips.",
    icon: <Target className="w-4 h-4" />,
    stages: [
      {
        id: "sales-touchpoint",
        step: "01",
        title: "Initial Touchpoint & Inception",
        subtitle: "Multi-Channel Discovery",
        icon: <Compass className="w-4 h-4 text-zinc-200" />,
        outcomeBadge: "100% Attribution Preserved",
        capabilities: [
          "Ingests inbound interest from targeted LinkedIn outbound, Meta ads, organic search, or referrals",
          "Preserves granular UTM tracking and intent context to record the prospect's exact trigger bottleneck",
          "Routes traffic to personalized, high-converting value landing pages with zero distraction"
        ],
        imageSrc: "/images/architecture/sales_touchpoint.jpg",
        imageAlt: "Multi-channel streams converging into a monolithic intake conduit",
        businessOutcome: "Your system autonomously captures every high-intent lead across LinkedIn, search, referrals, and ads into a single lossless conduit—zero lost attribution, zero dropped buyers."
      },
      {
        id: "sales-capture",
        step: "02",
        title: "Interactive Lead Capture",
        subtitle: "The Frictionless Value Hook",
        icon: <Sparkles className="w-4 h-4 text-zinc-200" />,
        outcomeBadge: "3.4x Higher Conversion Than Static Forms",
        capabilities: [
          "Replaces dead-end 12-field contact forms with an interactive ROI calculator and workflow diagnostic",
          "Captures key company firmographics (headcount, revenue bracket, software stack) in under 30 seconds",
          "Automated domain validation verifies corporate email authenticity before initiating downstream pipelines"
        ],
        imageSrc: "/images/architecture/sales_capture.jpg",
        imageAlt: "Modular diagnostic slider dissolving static paperwork into digital telemetry",
        businessOutcome: "Replace boring static forms with interactive ROI diagnostics that qualify company size and pain points in 26 seconds—quadrupling completion rates and pre-educating buyers."
      },
      {
        id: "sales-contact",
        step: "03",
        title: "Sub-60s AI First Contact",
        subtitle: "The Speed-to-Lead Moat",
        icon: <Zap className="w-4 h-4 text-zinc-200" />,
        outcomeBadge: "< 45s Response SLA",
        capabilities: [
          "Automated AI agent enriches the company profile with clear web data and company hierarchy in seconds",
          "Dispatches an authentically human, personalized WhatsApp message or email addressing their exact problem",
          "Offers a concrete 90-second custom video teardown of their bottleneck rather than a generic booking link"
        ],
        imageSrc: "/images/architecture/sales_contact.jpg",
        imageAlt: "Sub-45s laser signal traversing fiber optic conduit with stopwatch at 00:38",
        businessOutcome: "Engage hot prospects in under 45 seconds via personalized WhatsApp or email with a custom teardown of their exact bottleneck while your competitors are still checking their inboxes."
      },
      {
        id: "sales-drip",
        step: "04",
        title: "Value-Stacking Nurture Drip",
        subtitle: "Continuous Free Value Drips",
        icon: <Gift className="w-4 h-4 text-zinc-200" />,
        outcomeBadge: "Zero 'Just Checking In' Spam",
        capabilities: [
          "If the prospect doesn't book immediately, the system deploys tailored, unignorable value assets",
          "Day 2: Free custom architecture blueprint; Day 5: Plug-and-play n8n template; Day 9: CFO ROI spreadsheet",
          "Sequences adapt in real time: if a lead re-opens an asset 3 times, their account executive is alerted instantly"
        ],
        imageSrc: "/images/architecture/sales_drip.jpg",
        imageAlt: "Three frosted glass tablets stacking blueprints in zero gravity",
        businessOutcome: "Deliver an automated sequence of bespoke blueprints and production templates that build relentless trust, triggering instant sales alerts the moment leads re-engage."
      },
      {
        id: "sales-close",
        step: "05",
        title: "High-Conversion Close & Onboarding",
        subtitle: "Frictionless Conversion",
        icon: <DollarSign className="w-4 h-4 text-zinc-200" />,
        outcomeBadge: "5-Day Pilot Fast-Track",
        capabilities: [
          "1-click calendar reservation with automated pre-call briefing dossier delivered to the sales team",
          "Dynamically generated Scope of Work (SOW) and mutual NDA ready for e-signature within 10 minutes",
          "Automated client portal provisioning, Slack Connect channel creation, and kickoff sequence post-deposit"
        ],
        imageSrc: "/images/architecture/sales_close.jpg",
        imageAlt: "Precision mechanical iris locking into place with cryptographic seal",
        businessOutcome: "Turn closed deals into instant revenue with automated NDAs, 1-click checkout, and auto-provisioned client Slack channels launched in under 10 minutes."
      }
    ]
  },
  {
    id: "marketing",
    name: "Autonomous Marketing Flows",
    shortTitle: "Marketing",
    tagline: "Omnipresent distribution, real-time telemetry, automated micro-boosts, and competitor creative intelligence.",
    icon: <Share2 className="w-4 h-4" />,
    stages: [
      {
        id: "mkt-distribution",
        step: "01",
        title: "Omnichannel Content Distribution",
        subtitle: "Multi-Platform Syndication",
        icon: <Share2 className="w-4 h-4 text-zinc-200" />,
        outcomeBadge: "1 Core Idea → 4 Formats",
        capabilities: [
          "Takes one high-value engineering breakdown and autonomously formats it for LinkedIn, X, Meta, and newsletters",
          "Generates high-contrast 1080x1350 visual carousel slides, Twitter threads, and executive thought leadership copy",
          "Auto-schedules across all platforms with optimal engagement windows and hashtag tagging"
        ],
        imageSrc: "/images/architecture/mkt_distribution.jpg",
        imageAlt: "Monolithic black prism refracting one core insight into four structured formats",
        businessOutcome: "Turn a single breakthrough into platform-native carousels, X threads, LinkedIn teardowns, and client newsletters published synchronously with zero manual reformatting."
      },
      {
        id: "mkt-telemetry",
        step: "02",
        title: "Performance & Retention Telemetry",
        subtitle: "Real-Time Engagement Tracking",
        icon: <BarChart3 className="w-4 h-4 text-zinc-200" />,
        outcomeBadge: "Hourly Ingestion & Scoring",
        capabilities: [
          "Pulls live engagement telemetry: first-3-second retention, scroll depth, reposts, comments, and outbound CTR",
          "Scores every post against a 90-day rolling performance baseline to isolate statistical outliers",
          "Maps content views directly to inbound website visits and CRM contact creation via clean UTM tracing"
        ],
        imageSrc: "/images/architecture/mkt_telemetry.jpg",
        imageAlt: "3D topographical retention wireframe terrain with 8.9% outlier peak",
        businessOutcome: "Continuously track audience retention curves and CTR across every platform, isolating viral top 5% outliers and mapping exact pipeline revenue to each piece of content."
      },
      {
        id: "mkt-boost",
        step: "03",
        title: "Automated Micro-Boosting Engine",
        subtitle: "Paid Amplification of Organic Winners",
        icon: <Rocket className="w-4 h-4 text-zinc-200" />,
        outcomeBadge: "Zero Wasted Ad Spend",
        capabilities: [
          "Removes guesswork: Only organic posts validated by genuine audience engagement are selected for advertising",
          "Triggers Meta & LinkedIn Ads API with an autonomous micro-budget ($10–$25/day) targeting verified decision-makers",
          "Automated guardrails: Scales daily budget if Cost-Per-Lead (CPL) is low; pauses automatically if CAC deviates"
        ],
        imageSrc: "/images/architecture/mkt_boost.jpg",
        imageAlt: "Precision mechanical calipers and booster ring locking around a winning asset",
        businessOutcome: "Eliminate wasted ad spend by letting algorithms automatically inject micro-budgets ($10–$25/day) only behind proven organic winners, scaling ROAS while protecting cash flow."
      },
      {
        id: "mkt-iteration",
        step: "04",
        title: "AI Creative & Copy Iteration",
        subtitle: "Continuous Creative Evolution",
        icon: <Sparkles className="w-4 h-4 text-zinc-200" />,
        outcomeBadge: "Permanent Ad Fatigue Defense",
        capabilities: [
          "Deconstructs winning ads into core psychological components: hook angle, visual typography, and objection killers",
          "Generates 5 brand-new variations (contrarian point of view, metrics-backed breakdown, story-driven struggle)",
          "Iterates design framing (bento grid layout vs split terminal vs proof receipts) to test fresh visual appetite"
        ],
        imageSrc: "/images/architecture/mkt_iteration.jpg",
        imageAlt: "3D dark-mode bento grid dynamically morphing into fresh hook variations",
        businessOutcome: "Your creative pipeline continuously deconstructs winning angles and deploys fresh visual bento layouts and copy variations before ad fatigue can ever set in."
      },
      {
        id: "mkt-competitor",
        step: "05",
        title: "Autonomous Competitor Intelligence",
        subtitle: "Ad Library & Market Crawlers",
        icon: <Search className="w-4 h-4 text-zinc-200" />,
        outcomeBadge: "Continuous Strategic Edge",
        capabilities: [
          "Autonomous crawlers monitor public competitor ad libraries (Meta, Google) and high-growth industry profiles",
          "Detects competitor creatives that have been running active ad spend for >30 days (indicates proven profitability)",
          "Synthesizes counter-positioning angles (e.g. highlighting our zero-failure engineering vs brittle no-code tools)"
        ],
        imageSrc: "/images/architecture/mkt_competitor.jpg",
        imageAlt: "Radar array sweeping across competitor cubes exposing fractures",
        businessOutcome: "Deploy 24/7 crawlers across competitor ad libraries to uncover their longest-running campaigns and craft bulletproof counter-positioning that wins market share."
      }
    ]
  },
  {
    id: "bizdev",
    name: "Business Development 2.0",
    shortTitle: "Business Development",
    tagline: "Shift from surveillance time tracking to observable productive outcomes, role benchmarks, and AI growth.",
    icon: <Briefcase className="w-4 h-4" />,
    stages: [
      {
        id: "biz-telemetry",
        step: "01",
        title: "Internal Operational Data Ingestion",
        subtitle: "Every Business Action is Iteration Fuel",
        icon: <Layers className="w-4 h-4 text-zinc-200" />,
        outcomeBadge: "Zero Creepy Spyware",
        capabilities: [
          "Transforms day-to-day business exhaust into structured intelligence: CRM stage changes, ticket closes, Git commits, SOP updates",
          "Completely abandons toxic keystroke trackers and webcam surveillance in favor of objective work artifacts",
          "POPIA and GDPR compliant: Private employee conversations remain private while operational output is aggregated"
        ],
        imageSrc: "/images/architecture/biz_telemetry.jpg",
        imageAlt: "Operational data streams passing through privacy filter yielding structured crystals",
        businessOutcome: "Transform daily operational activity into structured growth telemetry without invasive employee surveillance—protecting team trust while illuminating business flow."
      },
      {
        id: "biz-roles",
        step: "02",
        title: "Role-Calibrated Expectation Mapping",
        subtitle: "Clarity on What Excellence Looks Like",
        icon: <Briefcase className="w-4 h-4 text-zinc-200" />,
        outcomeBadge: "Objective Scorecards per Role",
        capabilities: [
          "Defines crystal-clear, measurable outcome benchmarks tailored to specific positions (BDR, Account Exec, Engineer, Support)",
          "Replaces vague 'hours seated at desk' expectations with concrete deliverables, velocity, and quality scores",
          "Provides every team member with unambiguous visibility into how their output directly impacts business revenue"
        ],
        imageSrc: "/images/architecture/biz_roles.jpg",
        imageAlt: "Carbon fiber balance scale weighing outcome scorecards with shattered clock",
        businessOutcome: "Give every team member unambiguous clarity with role-specific outcome benchmarks—rewarding velocity and business impact instead of hours clocked at a desk."
      },
      {
        id: "biz-outcomes",
        step: "03",
        title: "Productive Outcome Tracking",
        subtitle: "Observable Results Over Hours Logged",
        icon: <Award className="w-4 h-4 text-zinc-200" />,
        outcomeBadge: "Output & Leverage Over Time",
        capabilities: [
          "Work completed is directly observable through real business outcomes: deals progressed, bugs squashed, clients retained",
          "Empowers high performers who produce high-quality output quickly rather than incentivizing slow, stretched-out hours",
          "Gives leadership instant real-time telemetry on company-wide productivity without needing micromanaging status meetings"
        ],
        imageSrc: "/images/architecture/biz_outcomes.jpg",
        imageAlt: "Three museum pedestals displaying shipped outcomes with +134% benchmark badge",
        businessOutcome: "Track real, observable milestones—shipped features, resolved tickets, closed revenue—empowering top performers to produce 10x leverage with high autonomy."
      },
      {
        id: "biz-bottlenecks",
        step: "04",
        title: "AI Friction & Bottleneck Discovery",
        subtitle: "Uncovering Lost Organizational Leverage",
        icon: <Activity className="w-4 h-4 text-zinc-200" />,
        outcomeBadge: "Automated Toil Elimination",
        capabilities: [
          "AI continuously analyzes where team workflows get bogged down in repetitive manual copy-pasting and busywork",
          "Identifies tasks where highly paid knowledge workers are wasting 10+ hours/week doing low-leverage data entry",
          "Synthesizes automated solution specs and triggers workflow automation builds to immediately liberate employee capacity"
        ],
        imageSrc: "/images/architecture/biz_bottlenecks.jpg",
        imageAlt: "Laser scalpel dissolving manual bottleneck inside glass workflow pipe",
        businessOutcome: "AI diagnostics continuously hunt down manual copy-pasting, CSV formatting, and workflow friction, automatically generating automation scripts to liberate your team."
      },
      {
        id: "biz-coaching",
        step: "05",
        title: "AI Employee Mentorship & Career Growth",
        subtitle: "Empowering Talent to Scale Output",
        icon: <TrendingUp className="w-4 h-4 text-zinc-200" />,
        outcomeBadge: "5x Multiplier on Human Talent",
        capabilities: [
          "Uses AI output analysis as an executive coach and personal copilot for each team member to elevate their capabilities",
          "Delivers constructive, data-backed insights on how to improve win rates, shorten delivery cycles, and overcome roadblocks",
          "Accelerates professional growth, helping team members achieve more in less time and evolve into high-leverage leaders"
        ],
        imageSrc: "/images/architecture/biz_coaching.jpg",
        imageAlt: "Professional silhouette elevated by expansive geometric AI copilot lattice",
        businessOutcome: "Equip every employee with a personalized AI copilot that analyzes winning patterns in their position, coaching them to achieve 5x more output and accelerate their career."
      }
    ]
  }
];

export const ArchitectureFlow = () => {
  const [activePillarId, setActivePillarId] = useState<PillarId>('sales');
  const activePillar = pillars.find((p) => p.id === activePillarId) || pillars[0];
  const [activeStageId, setActiveStageId] = useState<string>(activePillar.stages[0].id);

  // When switching pillars, default to stage 01
  const handlePillarChange = (pillarId: PillarId) => {
    setActivePillarId(pillarId);
    const pillar = pillars.find((p) => p.id === pillarId) || pillars[0];
    setActiveStageId(pillar.stages[0].id);
  };

  const activeStage = activePillar.stages.find((s) => s.id === activeStageId) || activePillar.stages[0];

  return (
    <div className="w-full max-w-6xl mx-auto mt-6">
      {/* 1. Pillar Switcher Tabs */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-10">
        {pillars.map((pillar) => {
          const isSelected = pillar.id === activePillarId;
          return (
            <button
              key={pillar.id}
              onClick={() => handlePillarChange(pillar.id)}
              className={`w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border text-sm font-medium transition-all duration-300 relative ${
                isSelected
                  ? "bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.25)] font-semibold"
                  : "bg-zinc-950/80 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white hover:bg-zinc-900/60"
              }`}
            >
              <span className={`p-1 rounded-full ${isSelected ? "bg-black text-white" : "bg-zinc-900 text-zinc-400"}`}>
                {pillar.icon}
              </span>
              <span>{pillar.name}</span>
            </button>
          );
        })}
      </div>

      {/* Pillar Description Banner */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
          {activePillar.tagline}
        </p>
      </div>

      {/* 2. Interactive Stages Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
        {activePillar.stages.map((stage) => {
          const isActive = stage.id === activeStage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStageId(stage.id)}
              className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-200 relative ${
                isActive
                  ? "bg-zinc-900 border-zinc-300 shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                  : "bg-zinc-950/80 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/60"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-zinc-400">{stage.step}</span>
                <div className={`p-1.5 rounded-lg border ${isActive ? "bg-zinc-800 border-zinc-600 text-white" : "bg-zinc-900 border-zinc-800 text-zinc-400"}`}>
                  {stage.icon}
                </div>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white truncate">{stage.title}</div>
              <div className="text-[11px] text-zinc-400 truncate mt-0.5">{stage.subtitle}</div>

              {isActive && (
                <motion.div 
                  layoutId="active-stage-indicator" 
                  className="absolute -bottom-1 left-3 right-3 h-0.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] rounded-full" 
                />
              )}
            </button>
          );
        })}
      </div>

      {/* 3. Stage Deep-Dive Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${activePillar.id}-${activeStage.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-zinc-950 border border-zinc-800/90 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl items-stretch"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column: Business Outcome & Capabilities */}
          <div className="lg:col-span-6 flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  Step {activeStage.step} • {activeStage.subtitle}
                </span>
                <span className="text-[11px] font-mono text-white bg-zinc-900 border border-zinc-700 px-2.5 py-0.5 rounded-full">
                  {activeStage.outcomeBadge}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-4">
                {activeStage.title}
              </h3>

              <div className="space-y-3.5 mt-6">
                {activeStage.capabilities.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-zinc-200 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-300 leading-relaxed font-sans">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between text-xs text-zinc-400 font-mono gap-y-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                POPIA & Enterprise Data Compliant
              </span>
              <span className="text-white font-medium">Deterministic Automation Guarantee</span>
            </div>
          </div>

          {/* Right Column: Metaphorical Visual Frame with Future-Oriented Business Outcome */}
          <div className="lg:col-span-6 flex flex-col z-10 justify-center">
            <div className="rounded-xl border border-zinc-800 bg-black overflow-hidden flex flex-col h-full shadow-2xl group relative">
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-600 inline-block"></span>
                  <span className="ml-2 text-zinc-300 font-mono text-[11px] tracking-wide">{activeStage.id}.render</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-300 font-semibold uppercase tracking-wider bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700/80">
                  Future State Model
                </span>
              </div>
              
              {/* Image Frame with Aspect Ratio */}
              <div className="relative w-full aspect-video sm:aspect-[16/10] overflow-hidden bg-zinc-950 flex-1 min-h-[260px]">
                <Image
                  src={activeStage.imageSrc}
                  alt={activeStage.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                
                {/* Future-Oriented Possibility / Business Outcome Overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <div className="bg-zinc-950/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-zinc-800/80 shadow-2xl">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Sparkles className="w-3 h-3 text-white" />
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-300 font-semibold">
                        What This Unlocks For You
                      </span>
                    </div>
                    <p className="text-xs sm:text-[13px] font-sans text-zinc-200 leading-relaxed font-normal">
                      {activeStage.businessOutcome}
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Footer */}
              <div className="px-4 py-2 bg-zinc-950 border-t border-zinc-900 text-[11px] text-zinc-400 flex items-center justify-between font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Production Ready Pipeline
                </span>
                <span className="text-zinc-400 font-medium">High-Leverage ROI</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
