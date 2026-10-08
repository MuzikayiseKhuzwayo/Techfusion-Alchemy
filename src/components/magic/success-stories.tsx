"use client";
import React, { useState } from "react";
import { AnimatedSection } from "./animated-section";
import {
  Building2,
  CheckCircle2,
  ExternalLink,
  FileText,
  GitBranch,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CaseStudy {
  id: string;
  client: string;
  role: string;
  tagline: string;
  timeframe: string;
  badge: string;
  tags: string[];
  problem: string;
  bottleneck: string;
  architecture: string;
  outcome: string;
  metric: string;
  verifiedReference: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "henry-cumines",
    client: "Henry Cumines / Ulysses Group Ltd",
    role: "AI Automation Specialist",
    tagline: "Purchase Order & Line-Item Extraction Architecture (Vision OMS)",
    timeframe: "March 2025 – September 2025",
    badge: "Enterprise Logistics & OMS",
    tags: ["n8n", "Supabase", "PDF.co", "Vision LLM", "Slack Alerts"],
    problem: "Manual purchase order intake from diverse supplier PDFs required 15+ hours per week of manual data entry, creating order fulfillment lag and human keying errors.",
    bottleneck: "Standard Zapier / no-code tools failed consistently on multi-page invoices, non-standard tabular formats, and unpredictable supplier layouts.",
    architecture: "Evaluated legacy workflow and designed a modern Vision OMS architecture using Supabase for relational schema persistence, PDF.co / vision parsing for table extraction, and custom n8n pipelines with schema validation and real-time Slack exception dispatch.",
    outcome: "Eliminated 95% of manual intake latency, achieved 100% structured data capture, and protected downstream inventory systems with automated schema guards.",
    metric: "15+ Hrs/Wk Saved • Zero Dropped POs",
    verifiedReference: "Reference: Dave Leng (Ulysses Group Ltd)"
  },
  {
    id: "performancex",
    client: "Digital Authority Partners",
    role: "Head of Integrations & Automation Engineer",
    tagline: "PerformanceX Client Document Intake & Analytics Engine",
    timeframe: "September 2025 – May 2026",
    badge: "Enterprise SaaS & Analytics",
    tags: ["FastAPI", "Continuous Data Loops", "Prompt Engineering", "CRM Sync"],
    problem: "Multi-stakeholder corporate client onboarding involved unstandardized client intake documents, delaying project kickoff and analytics ingestion.",
    bottleneck: "Manual transcription across spreadsheets and folders resulted in disconnected reporting metrics and delayed management insights.",
    architecture: "Headed Integrations for PerformanceX. Architected automated internal client intake pipelines, established continuous data feedback loops for prompt tuning, and piped normalized metrics directly into manager dashboards.",
    outcome: "Accelerated client onboarding velocity by 60%, delivering instantaneous executive telemetry and structured multi-source data ingestion.",
    metric: "60% Faster Onboarding Velocity",
    verifiedReference: "Reference: Michael Reddy, Partner (Digital Authority Partners)"
  },
  {
    id: "levatus",
    client: "Levatus i Norden AB",
    role: "AI Automation Engineer",
    tagline: "Automated Invoice Reconciliation & Real Estate Conversational CRM",
    timeframe: "May 2025 – October 2025",
    badge: "Nordic Real Estate & FinTech",
    tags: ["n8n", "Roboflow", "Multi-Channel CRM", "Webhook Queues"],
    problem: "Inbound real estate buyer inquiries cooled off due to delayed response times, while accounting teams struggled with tedious manual vendor invoice validation.",
    bottleneck: "Disjointed communication channels (SMS, email, WhatsApp) left high-ticket property buyers waiting up to 6 hours for initial qualification.",
    architecture: "Engineered automated invoice processing pipelines in n8n with optical data validation. Built an AI-powered CRM automating multi-channel lead qualification conversations with sub-minute latency.",
    outcome: "Reduced lead qualification response time from hours to under 60 seconds, significantly increasing qualified property sales meetings while automating accounts payable.",
    metric: "< 60s Lead Response • 100% Automated Invoicing",
    verifiedReference: "Reference: Walid Valerius Namro (Levatus i Norden AB)"
  },
  {
    id: "dubstrata",
    client: "Dubstrata & Simulacra UAT",
    role: "Founder & Principal ML Engineer",
    tagline: "Autonomous Agent-Driven UAT & Causal Knowledge Intelligence",
    timeframe: "2025 – 2026",
    badge: "Autonomous Systems & Research",
    tags: ["TypeScript", "Multi-Agent SDKs", "Python", "SSRN Publications"],
    problem: "Complex multi-step web applications require extensive manual QA before releases; quantitative alt-data pipelines suffer from lookahead bias and fragile scraping.",
    bottleneck: "Traditional headless testing scripts break whenever UI elements shift; manual testing cycles delay release schedules by weeks.",
    architecture: "Engineered Simulacra UAT—an autonomous agent framework simulating realistic user personas to conduct qualitative UX and regression evaluations. Authored Dubstrata Causal-FM foundation model architecture published on SSRN.",
    outcome: "Autonomous persona simulations catching critical user journey UX bottlenecks prior to production deployment; research published under SSRN IDs: 7528238 & 7377639.",
    metric: "Autonomous End-to-End Persona Testing",
    verifiedReference: "Published Research: SSRN Abstract 7528238 & 7377639"
  }
];

export const SuccessStories = () => {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy>(caseStudies[0]);

  return (
    <AnimatedSection className="py-20 sm:py-28 bg-black border-y border-zinc-900" id="case-studies">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tighter text-white">
              Engineering Proof of Work
            </h2>
            <p className="text-base text-zinc-400 max-w-2xl mt-2 font-normal">
              Concrete implementations sourced directly from verified client engagements. Real bottlenecks, resilient architectures, and measurable operational outcomes.
            </p>
          </div>

          <Button asChild variant="outline" className="border-zinc-700 bg-zinc-900/80 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-500 hover:text-white rounded-full text-xs font-mono self-start md:self-auto">
            <a
              href="https://www.upwork.com/freelancers/~01690494e012631bd1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              Verify On Upwork Profile <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </Button>
        </div>

        {/* Case Studies Tabs / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Selector List */}
          <div className="lg:col-span-4 space-y-3">
            {caseStudies.map((study) => {
              const isSelected = selectedStudy.id === study.id;
              return (
                <button
                  key={study.id}
                  onClick={() => setSelectedStudy(study)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${isSelected
                      ? "bg-zinc-900 border-zinc-400 shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                      : "bg-zinc-950/80 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/60"
                    }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1">
                    <span>{study.badge}</span>
                    <span className="text-zinc-500">{study.timeframe.split('–')[0]}</span>
                  </div>
                  <div className="font-semibold text-white text-sm line-clamp-1">{study.client}</div>
                  <div className="text-xs text-zinc-400 line-clamp-1 mt-1">{study.tagline}</div>
                  <div className="mt-3 text-xs font-mono text-white font-medium">{study.metric}</div>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Spec Card */}
          <div className="lg:col-span-8 bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-zinc-800 mb-6">
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{selectedStudy.badge}</span>
                  <h3 className="text-2xl font-semibold tracking-tight text-white mt-1">{selectedStudy.client}</h3>
                  <p className="text-xs font-mono text-zinc-500 mt-0.5">{selectedStudy.role} • {selectedStudy.timeframe}</p>
                </div>
                <div className="text-right">
                  <div className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white font-mono text-xs font-semibold">
                    {selectedStudy.metric}
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedStudy.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Technical 4-Part Structure */}
              <div className="space-y-4 text-sm font-sans">
                <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800">
                  <span className="text-[11px] font-mono text-zinc-400 font-semibold uppercase tracking-wider block mb-1">
                    1. The Operational Problem
                  </span>
                  <p className="text-zinc-300 leading-relaxed">{selectedStudy.problem}</p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800">
                  <span className="text-[11px] font-mono text-zinc-400 font-semibold uppercase tracking-wider block mb-1">
                    2. Why Standard Tools Broke (The Bottleneck)
                  </span>
                  <p className="text-zinc-300 leading-relaxed">{selectedStudy.bottleneck}</p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800">
                  <span className="text-[11px] font-mono text-zinc-200 font-semibold uppercase tracking-wider block mb-1">
                    3. The Engineering Architecture
                  </span>
                  <p className="text-zinc-300 leading-relaxed">{selectedStudy.architecture}</p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800">
                  <span className="text-[11px] font-mono text-white font-semibold uppercase tracking-wider block mb-1">
                    4. The Production Outcome
                  </span>
                  <p className="text-zinc-300 leading-relaxed">{selectedStudy.outcome}</p>
                </div>
              </div>
            </div>

            {/* Reference Verification Footer */}
            <div className="mt-8 pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-400 font-mono">
              <span className="text-zinc-400">{selectedStudy.verifiedReference}</span>
              <Link
                href="https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-zinc-300 inline-flex items-center gap-1 font-semibold"
              >
                Discuss a Similar Pipeline <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
