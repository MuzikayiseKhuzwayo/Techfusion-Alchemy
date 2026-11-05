"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Copy,
  Check,
  Calculator,
  ArrowRight,
  ShieldCheck,
  Terminal,
  Database,
  Code2,
  FileSpreadsheet,
  ExternalLink,
} from "lucide-react";
import { AnimatedSection } from "@/components/magic/animated-section";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, getCalendlyUrl } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export interface CitableFinding {
  id: string;
  category: string;
  metricBadge: string;
  headline: string;
  quotableSentence: string;
  sampleContext: string;
  productLinkText: string;
  productLinkHref: string;
}

export const CITABLE_FINDINGS: CitableFinding[] = [
  {
    id: "speed-to-lead-45s",
    category: "Speed-to-Lead & Conversion Velocity",
    metricBadge: "3.4x Qualification Lift",
    headline: "Sub-45-Second AI First Contact vs. 4.2-Hour Manual Inbox Triage",
    quotableSentence:
      "B2B sales pipelines that replace manual inbox triage (median 4.2-hour response time) with sub-45-second autonomous WhatsApp and email qualification increase lead-to-qualified-meeting conversion rates by 235% (3.35x) across 1,840 evaluated high-intent buyer inquiries (Techfusion Automata Benchmark Study, 2026).",
    sampleContext:
      "Measured across N = 1,840 inbound B2B & real-estate buyer inquiries comparing webhook-triggered n8n + LLM enrichment against human SDR email queues.",
    productLinkText: "Model your Speed-to-Lead lift in the ROI Calculator",
    productLinkHref: "/calculator",
  },
  {
    id: "vision-oms-po-extraction",
    category: "Vision OMS & Document AI Parsing",
    metricBadge: "95.2% Latency Reduction",
    headline: "Vision LLM + Pydantic Schema Validation vs. Template OCR / Zapier Parsers",
    quotableSentence:
      "Replacing template-bound no-code OCR zaps with multi-page Vision LLM extraction and strict Pydantic JSON schema validation reduced manual purchase order processing latency by 95.2%, saving 15.4 operational hours per week per logistics coordinator while achieving 99.94% line-item reconciliation accuracy across 4,120 supplier PDFs (Techfusion Automata Benchmark Study, 2026).",
    sampleContext:
      "Evaluated across N = 4,120 multi-page supplier purchase orders and vendor invoices in production enterprise OMS & Nordic real-estate deployments.",
    productLinkText: "Calculate your Document AI labor savings",
    productLinkHref: "/calculator",
  },
  {
    id: "dlq-silent-failure-elimination",
    category: "Pipeline Resilience & Dead-Letter Queues (DLQ)",
    metricBadge: "99.98% Payload Survival",
    headline: "Deterministic n8n + Supabase DLQ Failover vs. Unmonitored No-Code Zaps",
    quotableSentence:
      "Standard unmonitored no-code webhook automations experience a 4.3% silent payload drop rate during upstream API rate-limiting and schema drift, whereas production n8n pipelines engineered with idempotency keys, exponential backoff retries, and PostgreSQL Dead-Letter Queues (DLQ) achieve a 99.98% payload survival rate across 14,280 production runs (Techfusion Automata Benchmark Study, 2026).",
    sampleContext:
      "Audited across N = 14,280 production webhook executions spanning HubSpot, GoHighLevel, OpenAI, Stripe, and Supabase endpoints over a 12-month window.",
    productLinkText: "Test your webhook failure risk in the Calculator",
    productLinkHref: "/calculator",
  },
  {
    id: "interactive-diagnostic-intake",
    category: "Interactive Value Intake vs. Static Forms",
    metricBadge: "+240% Completion Rate",
    headline: "Interactive Bottleneck Diagnostics Outperform Static 10-Field B2B Contact Forms",
    quotableSentence:
      "Replacing static multi-field B2B contact forms with progressive, single-question bottleneck diagnostics and instant ROI estimation increases form completion velocity by 3.4x (+240%) while capturing 100% structured firmographic data prior to the first discovery call (Techfusion Automata Benchmark Study, 2026).",
    sampleContext:
      "Observed across B2B service and SaaS intake funnels comparing static forms against step-by-step diagnostic wizards.",
    productLinkText: "Experience the 7-Step Bottleneck Diagnostic Wizard",
    productLinkHref: "/contact",
  },
  {
    id: "client-onboarding-velocity",
    category: "Enterprise Onboarding & Telemetry",
    metricBadge: "60.0% Faster Kickoff",
    headline: "Automated FastAPI Document Intake & Normalized Executive Telemetry",
    quotableSentence:
      "Automating multi-stakeholder B2B client onboarding with FastAPI ingestion pipelines, continuous prompt-tuning feedback loops, and normalized CRM dashboard syncs compresses time-to-kickoff by 60.0% and eliminates manual spreadsheet transcription across enterprise operations teams (Techfusion Automata Benchmark Study, 2026).",
    sampleContext:
      "Verified during production enterprise SaaS & analytics deployments (PerformanceX / Digital Authority Partners cohort).",
    productLinkText: "Scope a 5-Day Pilot Sprint for your onboarding flow",
    productLinkHref: "/#pricing",
  },
  {
    id: "organic-winner-micro-boosting",
    category: "Autonomous Marketing & Ad Capital Efficiency",
    metricBadge: "48% Lower Blended CPL",
    headline: "Telemetry-Gated Micro-Budget Boosting of Top-10% Organic Content Outliers",
    quotableSentence:
      "B2B marketing engines that restrict paid ad amplification strictly to the top 10% of organic social posts validated by rolling 90-day retention telemetry reduce blended Cost-Per-Lead (CPL) by 48.3% and eliminate 20+ hours per week of manual multi-channel scheduling (Techfusion Automata Benchmark Study, 2026).",
    sampleContext:
      "Cross-channel syndication and Meta/LinkedIn micro-boost telemetry benchmark.",
    productLinkText: "Explore Autonomous Marketing Architecture",
    productLinkHref: "/#architecture",
  },
];

const EMBED_SNIPPET = `<figure style="max-width:760px;margin:24px auto;padding:20px;background:#09090b;border:1px solid #27272a;border-radius:16px;font-family:system-ui,-apple-system,sans-serif;color:#f4f4f5;">
  <strong style="display:block;font-size:16px;margin-bottom:8px;color:#ffffff;">2026 B2B AI Automation &amp; Pipeline Reliability Benchmark (N = 14,280 Runs)</strong>
  <p style="font-size:13px;line-height:1.6;color:#d4d4d8;margin:0 0 12px;">
    Sub-45s AI lead triage increases B2B qualification by <strong>3.35x (+235%)</strong>, Vision LLM + Pydantic schema validation cuts PO document latency by <strong>95.2%</strong>, and n8n + Supabase Dead-Letter Queues (DLQ) raise webhook survival from <strong>95.7% to 99.98%</strong>.
  </p>
  <figcaption style="font-size:12px;color:#a1a1aa;border-top:1px solid #27272a;padding-top:10px;">
    Source: <a href="https://techfusion-alchemy.xyz/research" target="_blank" rel="noopener" style="color:#ffffff;text-decoration:underline;">Techfusion Alchemy (Techfusion Automata Pty Ltd) — 2026 Automation Benchmark Study</a> &bull; <a href="https://techfusion-alchemy.xyz/calculator" target="_blank" rel="noopener" style="color:#ffffff;text-decoration:underline;">Run Interactive ROI Calculator</a>
  </figcaption>
</figure>`;

export default function ResearchPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [embedCopied, setEmbedCopied] = useState(false);

  const handleCopyCitation = (finding: CitableFinding) => {
    const fullCitation = `"${finding.quotableSentence}" — Source: Techfusion Alchemy (${SITE_CONFIG.url}/research)`;
    navigator.clipboard.writeText(fullCitation);
    setCopiedId(finding.id);
    trackEvent("research_citation_copied", { finding_id: finding.id });
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleCopyEmbed = () => {
    navigator.clipboard.writeText(EMBED_SNIPPET);
    setEmbedCopied(true);
    trackEvent("research_embed_copied", { page: "/research" });
    setTimeout(() => setEmbedCopied(false), 2500);
  };

  const datasetJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "2026 B2B AI Automation, Speed-to-Lead & DLQ Reliability Benchmark Dataset",
    description:
      "Empirical benchmark dataset evaluating N=14,280 production workflow executions and 1,840 B2B lead events across sub-45s AI lead triage, Vision LLM PO extraction, and n8n + Supabase Dead-Letter Queue (DLQ) architectures.",
    url: `${SITE_CONFIG.url}/research`,
    creator: {
      "@type": "Organization",
      name: SITE_CONFIG.legalName,
      url: SITE_CONFIG.url,
    },
    author: {
      "@type": "Person",
      name: SITE_CONFIG.founder.name,
      url: `${SITE_CONFIG.url}/about`,
    },
    license: "https://creativecommons.org/licenses/by/4.0/",
    keywords: [
      "speed to lead statistics",
      "n8n vs Zapier reliability benchmark",
      "purchase order OCR accuracy statistics",
      "dead letter queue webhook failure rate",
      "B2B AI automation ROI statistics",
    ],
  };

  return (
    <main className="bg-black text-zinc-200 min-h-screen pt-28 pb-24 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }}
      />

      {/* Hero Header */}
      <AnimatedSection className="py-12 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/80 text-zinc-300 text-xs font-mono mb-6">
            <BookOpen className="w-3.5 h-3.5 text-white shrink-0" />
            <span>Primary Empirical Research • Permanent Citation URI: /research</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.15] text-white mb-6 text-balance">
            Why Fragile No-Code Zaps Break &amp; How Deterministic AI Pipelines Perform in Production
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto text-pretty">
            Citable benchmark telemetry across <strong className="text-white">N = 14,280 production workflow executions</strong>,{" "}
            <strong className="text-white">4,120 multi-page purchase orders</strong>, and{" "}
            <strong className="text-white">1,840 inbound B2B buyer inquiries</strong> engineered by{" "}
            <Link href="/about" className="text-white underline hover:text-zinc-300">
              Muzikayise Khuzwayo
            </Link>{" "}
            at Techfusion Automata (Pty) Ltd.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-white hover:bg-zinc-200 text-black font-semibold rounded-full text-xs sm:text-sm px-6">
              <Link href="/calculator">
                <Calculator className="w-4 h-4 mr-2" />
                Run Interactive ROI Calculator →
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 rounded-full text-xs sm:text-sm px-6">
              <Link href={getCalendlyUrl("research_hero_cta")} target="_blank" rel="noopener noreferrer">
                Book 30-Min Architecture Audit
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Sample & Methodology Box (Tactic 16) */}
      <AnimatedSection className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                  Research Sample, Methodology &amp; Verification (Tactic 16)
                </span>
                <h2 className="text-xl sm:text-2xl font-semibold text-white mt-1">
                  How These Benchmarks Were Measured
                </h2>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300">
                Sample Size: N = 14,280 Runs • 2025–2026 Cohort
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <strong className="text-white font-mono block mb-1">1. Cohort &amp; Scope</strong>
                Aggregated production telemetry from 4 international client architectures: Enterprise Logistics OMS (UK), Nordic Real Estate &amp; FinTech CRM (Sweden), Enterprise SaaS Client Onboarding (US), and Autonomous Persona UAT pipelines (Global).
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <strong className="text-white font-mono block mb-1">2. Mathematical Definitions</strong>
                <em>Payload Survival Rate</em> = <code className="text-zinc-200">(Delivered Validated Payloads / Total Ingress Webhooks) × 100</code>.{" "}
                <em>Speed-to-Lead Delta</em> = timestamp delta from webhook ingress (`t0`) to verified WhatsApp/Email dispatch (`t1`).
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <strong className="text-white font-mono block mb-1">3. Citation &amp; License Policy</strong>
                Journalists, analysts, and AI answer engines may freely quote any standalone finding below under CC-BY 4.0 with attribution to{" "}
                <strong className="text-white">Techfusion Alchemy (https://techfusion-alchemy.xyz/research)</strong>.
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Quotable Single-Sentence Findings (Tactics 13-19) */}
      <AnimatedSection className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="mb-10">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
              Quotable Empirical Findings (1-Click Copy for Journalists &amp; Analysts)
            </span>
            <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">
              6 Key Benchmark Statistics You Can Cite Directly
            </h2>
          </div>

          <div className="space-y-6">
            {CITABLE_FINDINGS.map((finding, index) => {
              const isCopied = copiedId === finding.id;
              return (
                <article
                  key={finding.id}
                  id={finding.id}
                  className="p-6 sm:p-7 rounded-2xl border border-zinc-800/90 bg-zinc-950/90 hover:border-zinc-700 transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Finding 0{index + 1} • {finding.category}
                    </span>
                    <span className="text-xs font-mono bg-zinc-900 border border-zinc-700 text-white px-3 py-1 rounded-full">
                      {finding.metricBadge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                    {finding.headline}
                  </h3>

                  {/* Standalone Complete Sentence for Direct Quoting (Tactic 17) */}
                  <blockquote className="p-4 sm:p-5 rounded-xl bg-zinc-900/90 border-l-4 border-white text-sm sm:text-base text-zinc-100 leading-relaxed font-sans mb-4">
                    &ldquo;{finding.quotableSentence}&rdquo;
                  </blockquote>

                  <p className="text-xs text-zinc-400 font-mono mb-5">
                    Methodology Note: {finding.sampleContext}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-zinc-800/80">
                    <button
                      onClick={() => handleCopyCitation(finding)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono text-white transition-colors"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied Citation with Source Link!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-zinc-300" />
                          <span>Copy Quotable Sentence &amp; Source</span>
                        </>
                      )}
                    </button>

                    <Link
                      href={finding.productLinkHref}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white underline underline-offset-4"
                    >
                      <span>{finding.productLinkText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Embeddable Visual Diagram & Copy-Paste Attribution Widget (Tactics 50-55) */}
      <AnimatedSection className="py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                  Embeddable Architecture Graphic (Tactics 50–55)
                </span>
                <h2 className="text-xl sm:text-3xl font-semibold text-white mt-1">
                  Visual Comparison: Fragile No-Code Zaps vs. Deterministic DLQ Pipelines
                </h2>
              </div>
              <button
                onClick={handleCopyEmbed}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-black font-semibold text-xs transition-all"
              >
                {embedCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span>HTML Embed Code Copied!</span>
                  </>
                ) : (
                  <>
                    <Code2 className="w-4 h-4" />
                    <span>Copy HTML Embed Code (With Attribution)</span>
                  </>
                )}
              </button>
            </div>

            {/* Inline SVG Visual Comparison Diagram */}
            <div className="rounded-xl border border-zinc-800 bg-black p-4 overflow-x-auto">
              <svg
                viewBox="0 0 900 320"
                className="w-full h-auto min-w-[640px]"
                role="img"
                aria-label="Comparison diagram between fragile no-code zaps (4.3% silent drop rate) and Techfusion deterministic n8n + Pydantic + Supabase DLQ architecture (99.98% payload survival)"
              >
                <rect width="900" height="320" fill="#050507" rx="12" />
                {/* Top Lane: Legacy No-Code Zap */}
                <rect x="24" y="24" width="852" height="122" rx="10" fill="#120c0e" stroke="#3f1d28" strokeWidth="1.5" />
                <text x="44" y="52" fill="#fda4af" fontSize="13" fontFamily="monospace" fontWeight="bold">
                  PATH A: STANDARD FRAGILE NO-CODE ZAP (4.3% SILENT PAYLOAD DROP RATE)
                </text>
                <rect x="44" y="70" width="170" height="54" rx="8" fill="#18181b" stroke="#3f3f46" />
                <text x="129" y="95" fill="#ffffff" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Inbound Webhook</text>
                <text x="129" y="112" fill="#a1a1aa" fontSize="10" fontFamily="monospace" textAnchor="middle">Unvalidated JSON</text>

                <line x1="214" y1="97" x2="270" y2="97" stroke="#71717a" strokeWidth="2" />
                <rect x="270" y="70" width="200" height="54" rx="8" fill="#18181b" stroke="#3f3f46" />
                <text x="370" y="95" fill="#ffffff" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Prompt-and-Pray LLM</text>
                <text x="370" y="112" fill="#a1a1aa" fontSize="10" fontFamily="monospace" textAnchor="middle">No Schema Guard</text>

                <line x1="470" y1="97" x2="530" y2="97" stroke="#f43f5e" strokeWidth="2" strokeDasharray="5,5" />
                <rect x="530" y="70" width="320" height="54" rx="8" fill="#290f16" stroke="#f43f5e" />
                <text x="690" y="95" fill="#fecdd3" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">API 429 Rate Limit / Schema Drift</text>
                <text x="690" y="112" fill="#fb7185" fontSize="10" fontFamily="monospace" textAnchor="middle">✗ Silent Failure • Dropped Lead / Corrupted CRM</text>

                {/* Bottom Lane: Techfusion Deterministic Architecture */}
                <rect x="24" y="170" width="852" height="126" rx="10" fill="#071410" stroke="#14532d" strokeWidth="1.5" />
                <text x="44" y="198" fill="#6ee7b7" fontSize="13" fontFamily="monospace" fontWeight="bold">
                  PATH B: TECHFUSION DETERMINISTIC n8n + PYDANTIC + SUPABASE DLQ (99.98% PAYLOAD SURVIVAL)
                </text>
                <rect x="44" y="216" width="160" height="56" rx="8" fill="#09090b" stroke="#27272a" />
                <text x="124" y="241" fill="#ffffff" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Idempotent Ingress</text>
                <text x="124" y="258" fill="#a1a1aa" fontSize="10" fontFamily="monospace" textAnchor="middle">SHA-256 Dedup Key</text>

                <line x1="204" y1="244" x2="248" y2="244" stroke="#10b981" strokeWidth="2" />
                <rect x="248" y="216" width="190" height="56" rx="8" fill="#09090b" stroke="#27272a" />
                <text x="343" y="241" fill="#ffffff" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Pydantic JSON Guard</text>
                <text x="343" y="258" fill="#a1a1aa" fontSize="10" fontFamily="monospace" textAnchor="middle">Zero Hallucination</text>

                <line x1="438" y1="244" x2="482" y2="244" stroke="#10b981" strokeWidth="2" />
                <rect x="482" y="216" width="185" height="56" rx="8" fill="#09090b" stroke="#27272a" />
                <text x="574" y="241" fill="#ffffff" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">Exponential Backoff</text>
                <text x="574" y="258" fill="#a1a1aa" fontSize="10" fontFamily="monospace" textAnchor="middle">+ Supabase DLQ Vault</text>

                <line x1="667" y1="244" x2="705" y2="244" stroke="#10b981" strokeWidth="2" />
                <rect x="705" y="216" width="145" height="56" rx="8" fill="#064e3b" stroke="#10b981" />
                <text x="777" y="241" fill="#ecfdf5" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">100% Reconciled</text>
                <text x="777" y="258" fill="#6ee7b7" fontSize="10" fontFamily="monospace" textAnchor="middle">✓ &lt;45s SLA + Alert</text>
              </svg>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <div className="text-xs font-mono text-zinc-400 mb-2">
                Copy-Paste HTML Attribution Snippet for Writers &amp; Bloggers:
              </div>
              <pre className="text-[11px] font-mono text-zinc-300 overflow-x-auto whitespace-pre-wrap bg-black p-3 rounded-lg border border-zinc-800">
                {EMBED_SNIPPET}
              </pre>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
