"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calculator,
  Zap,
  Clock,
  ShieldCheck,
  TrendingUp,
  Copy,
  Check,
  ArrowRight,
  BookOpen,
  Code2,
  RotateCcw,
} from "lucide-react";
import { AnimatedSection } from "@/components/magic/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { calculateAutomationRoi, AutomationCalcInput } from "@/lib/roi-calculator";
import { SITE_CONFIG, getCalendlyUrl } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

interface PresetScenario {
  id: string;
  label: string;
  badge: string;
  values: AutomationCalcInput;
}

const PRESETS: PresetScenario[] = [
  {
    id: "b2b-sales",
    label: "High-Ticket B2B / Real Estate CRM",
    badge: "<45s Speed-to-Lead Moat",
    values: {
      monthlyLeads: 140,
      avgDealValueUsd: 4200,
      currentCloseRatePct: 7.5,
      currentResponseMinutes: 240,
      weeklyManualHours: 18,
      hourlyLoadedCostUsd: 45,
      monthlyWebhookVolume: 4500,
      currentSilentFailurePct: 4.3,
      pilotInvestmentUsd: 2500,
    },
  },
  {
    id: "vision-oms",
    label: "Enterprise Logistics & Vision OMS",
    badge: "PO & Invoice PDF Parsing",
    values: {
      monthlyLeads: 45,
      avgDealValueUsd: 8500,
      currentCloseRatePct: 12,
      currentResponseMinutes: 90,
      weeklyManualHours: 35,
      hourlyLoadedCostUsd: 55,
      monthlyWebhookVolume: 18000,
      currentSilentFailurePct: 5.1,
      pilotInvestmentUsd: 3500,
    },
  },
  {
    id: "saas-onboarding",
    label: "Agency / Enterprise SaaS Onboarding",
    badge: "FastAPI + HubSpot Sync",
    values: {
      monthlyLeads: 220,
      avgDealValueUsd: 2800,
      currentCloseRatePct: 9,
      currentResponseMinutes: 120,
      weeklyManualHours: 26,
      hourlyLoadedCostUsd: 50,
      monthlyWebhookVolume: 9000,
      currentSilentFailurePct: 3.8,
      pilotInvestmentUsd: 2500,
    },
  },
];

const CALCULATOR_EMBED_SNIPPET = `<iframe src="https://techfusion-alchemy.xyz/calculator" width="100%" height="780" style="border:1px solid #27272a;border-radius:16px;background:#000000;" loading="lazy" title="Techfusion Alchemy B2B Automation & Speed-to-Lead ROI Calculator"></iframe>
<p style="font-size:12px;color:#71717a;margin-top:6px;font-family:system-ui,sans-serif;">
  Interactive Calculator by <a href="https://techfusion-alchemy.xyz/calculator" target="_blank" rel="noopener" style="color:#ffffff;text-decoration:underline;">Techfusion Alchemy</a> (Data methodology: <a href="https://techfusion-alchemy.xyz/research" target="_blank" rel="noopener" style="color:#ffffff;text-decoration:underline;">2026 B2B Automation Benchmark Study</a>)
</p>`;

export default function CalculatorPage() {
  const [inputs, setInputs] = useState<AutomationCalcInput>(PRESETS[0].values);
  const [activePreset, setActivePreset] = useState<string>(PRESETS[0].id);
  const [embedCopied, setEmbedCopied] = useState(false);

  const result = useMemo(() => calculateAutomationRoi(inputs), [inputs]);

  const handleFieldChange = (field: keyof AutomationCalcInput, rawValue: string) => {
    const parsed = rawValue === "" ? 0 : Number(rawValue);
    setActivePreset("custom");
    setInputs((prev) => ({
      ...prev,
      [field]: parsed,
    }));
  };

  const applyPreset = (preset: PresetScenario) => {
    setActivePreset(preset.id);
    setInputs(preset.values);
    trackEvent("calculator_preset_selected", { preset_id: preset.id });
  };

  const handleCopyEmbed = () => {
    navigator.clipboard.writeText(CALCULATOR_EMBED_SNIPPET);
    setEmbedCopied(true);
    trackEvent("calculator_embed_copied", { page: "/calculator" });
    setTimeout(() => setEmbedCopied(false), 2500);
  };

  const formatUsd = (val: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <main className="bg-black text-zinc-200 min-h-screen pt-28 pb-24 overflow-x-hidden">
      <AnimatedSection className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/80 text-zinc-300 text-xs font-mono mb-5">
              <Calculator className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Interactive Engineering Utility • Zero Login Required</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.15] text-white mb-4 text-balance">
              B2B Speed-to-Lead, Document AI &amp; DLQ ROI Calculator
            </h1>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
              Quantify how much revenue your pipeline loses to slow lead response, manual PDF data entry, and silent no-code Zapier failures—calibrated against our{" "}
              <Link href="/research" className="text-white underline hover:text-zinc-300">
                N = 14,280 Production Benchmark Study
              </Link>.
            </p>
          </div>

          {/* Preset Selector Bar */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {PRESETS.map((preset) => {
              const isSelected = activePreset === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => applyPreset(preset)}
                  className={`px-4 py-2.5 rounded-full border text-xs font-mono transition-all ${
                    isSelected
                      ? "bg-white text-black border-white font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                      : "bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-600 hover:text-white"
                  }`}
                >
                  <span>{preset.label}</span>
                  <span className={`ml-2 text-[10px] px-2 py-0.5 rounded-full ${isSelected ? "bg-black/15 text-black" : "bg-zinc-900 text-zinc-400"}`}>
                    {preset.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Main Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Inputs */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950 space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                    1. Your Operational Parameters
                  </span>
                  <h2 className="text-lg sm:text-xl font-semibold text-white">
                    Adjust Your Current Workflow Inputs
                  </h2>
                </div>
                <button
                  onClick={() => applyPreset(PRESETS[0])}
                  className="text-xs font-mono text-zinc-400 hover:text-white inline-flex items-center gap-1"
                  title="Reset to default baseline"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1.5">
                  <label htmlFor="monthlyLeads" className="font-mono text-zinc-300 block">
                    Monthly Inbound Leads
                  </label>
                  <Input
                    id="monthlyLeads"
                    type="number"
                    min={0}
                    max={1000000}
                    value={inputs.monthlyLeads}
                    onChange={(e) => handleFieldChange("monthlyLeads", e.target.value)}
                    className="bg-zinc-900 border-zinc-800 text-white font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="avgDealValueUsd" className="font-mono text-zinc-300 block">
                    Average Deal / LTV Value (USD)
                  </label>
                  <Input
                    id="avgDealValueUsd"
                    type="number"
                    min={0}
                    max={10000000}
                    value={inputs.avgDealValueUsd}
                    onChange={(e) => handleFieldChange("avgDealValueUsd", e.target.value)}
                    className="bg-zinc-900 border-zinc-800 text-white font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="currentCloseRatePct" className="font-mono text-zinc-300 block">
                    Current Lead-to-Close Rate (%)
                  </label>
                  <Input
                    id="currentCloseRatePct"
                    type="number"
                    step="0.5"
                    min={0}
                    max={100}
                    value={inputs.currentCloseRatePct}
                    onChange={(e) => handleFieldChange("currentCloseRatePct", e.target.value)}
                    className="bg-zinc-900 border-zinc-800 text-white font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="currentResponseMinutes" className="font-mono text-zinc-300 block">
                    Current First-Response Time (Mins)
                  </label>
                  <Input
                    id="currentResponseMinutes"
                    type="number"
                    min={0.5}
                    max={100000}
                    value={inputs.currentResponseMinutes}
                    onChange={(e) => handleFieldChange("currentResponseMinutes", e.target.value)}
                    className="bg-zinc-900 border-zinc-800 text-white font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="weeklyManualHours" className="font-mono text-zinc-300 block">
                    Weekly Manual Admin / PDF Hours
                  </label>
                  <Input
                    id="weeklyManualHours"
                    type="number"
                    min={0}
                    max={10000}
                    value={inputs.weeklyManualHours}
                    onChange={(e) => handleFieldChange("weeklyManualHours", e.target.value)}
                    className="bg-zinc-900 border-zinc-800 text-white font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="hourlyLoadedCostUsd" className="font-mono text-zinc-300 block">
                    Team Loaded Hourly Cost (USD/hr)
                  </label>
                  <Input
                    id="hourlyLoadedCostUsd"
                    type="number"
                    min={0}
                    max={5000}
                    value={inputs.hourlyLoadedCostUsd}
                    onChange={(e) => handleFieldChange("hourlyLoadedCostUsd", e.target.value)}
                    className="bg-zinc-900 border-zinc-800 text-white font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="monthlyWebhookVolume" className="font-mono text-zinc-300 block">
                    Monthly Webhook / Zap Executions
                  </label>
                  <Input
                    id="monthlyWebhookVolume"
                    type="number"
                    min={0}
                    max={100000000}
                    value={inputs.monthlyWebhookVolume}
                    onChange={(e) => handleFieldChange("monthlyWebhookVolume", e.target.value)}
                    className="bg-zinc-900 border-zinc-800 text-white font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="currentSilentFailurePct" className="font-mono text-zinc-300 block">
                    Silent Zap / API Drop Rate (%)
                  </label>
                  <Input
                    id="currentSilentFailurePct"
                    type="number"
                    step="0.1"
                    min={0}
                    max={100}
                    value={inputs.currentSilentFailurePct}
                    onChange={(e) => handleFieldChange("currentSilentFailurePct", e.target.value)}
                    className="bg-zinc-900 border-zinc-800 text-white font-mono"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <div className="space-y-1.5 text-xs">
                  <label htmlFor="pilotInvestmentUsd" className="font-mono text-zinc-300 block">
                    Estimated 5-Day Pilot Sprint / Build Investment (USD)
                  </label>
                  <Input
                    id="pilotInvestmentUsd"
                    type="number"
                    min={100}
                    max={500000}
                    value={inputs.pilotInvestmentUsd}
                    onChange={(e) => handleFieldChange("pilotInvestmentUsd", e.target.value)}
                    className="bg-zinc-900 border-zinc-800 text-white font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Deterministic Output Breakdown */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl border border-zinc-600 bg-zinc-950 shadow-[0_0_40px_rgba(255,255,255,0.06)] space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
                    2. Deterministic Engineering Projection
                  </span>
                  <h2 className="text-lg sm:text-xl font-semibold text-white">
                    Projected 12-Month Impact &amp; Pilot Payback
                  </h2>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300">
                  Payback: ~{result.pilotPaybackDays} Days ({result.annualRoiMultiple}x ROI)
                </span>
              </div>

              {/* Hero KPI */}
              <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-zinc-400 uppercase">
                    Total Annual Economic Lift (Revenue + Labor + DLQ)
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-white font-mono mt-1">
                    {formatUsd(result.totalAnnualBenefitUsd)}
                    <span className="text-sm font-normal text-zinc-400"> / year</span>
                  </div>
                </div>
                <div className="text-left sm:text-right font-mono">
                  <div className="text-xs text-zinc-400">Monthly Net Lift</div>
                  <div className="text-lg font-semibold text-emerald-400">
                    +{formatUsd(result.totalMonthlyBenefitUsd)}/mo
                  </div>
                </div>
              </div>

              {/* 3 Pillar Breakdown */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="font-semibold text-white flex items-center gap-2">
                      <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>1. Sub-45s Speed-to-Lead Revenue Recovery</span>
                    </div>
                    <p className="text-xs text-zinc-400">
                      Close rate lifts from <strong>{result.sanitizedInput.currentCloseRatePct}%</strong> to{" "}
                      <strong className="text-white">{result.projectedCloseRatePct}%</strong> ({result.speedToLeadLiftMultiplier}x velocity multiplier).
                    </p>
                  </div>
                  <div className="font-mono font-semibold text-white shrink-0">
                    +{formatUsd(result.annualRevenueRecoveredUsd)}/yr
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="font-semibold text-white flex items-center gap-2">
                      <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>2. Manual Toil &amp; Document Parsing Elimination</span>
                    </div>
                    <p className="text-xs text-zinc-400">
                      Eliminates <strong className="text-white">{result.annualHoursSaved.toLocaleString()} hours/year</strong> (92% of manual PDF/CRM keying).
                    </p>
                  </div>
                  <div className="font-mono font-semibold text-white shrink-0">
                    +{formatUsd(result.annualLaborSavedUsd)}/yr
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="font-semibold text-white flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>3. Dead-Letter Queue (DLQ) Failover Savings</span>
                    </div>
                    <p className="text-xs text-zinc-400">
                      Prevents <strong className="text-white">{result.annualPreventedFailedRuns.toLocaleString()} dropped webhook runs/yr</strong> with automated replay.
                    </p>
                  </div>
                  <div className="font-mono font-semibold text-white shrink-0">
                    +{formatUsd(result.annualDlqProtectionValueUsd)}/yr
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="flex-1 bg-white hover:bg-zinc-200 text-black font-semibold rounded-full text-xs sm:text-sm py-5">
                  <Link href={getCalendlyUrl("calculator_results_cta")} target="_blank" rel="noopener noreferrer">
                    Book 30-Min Session to Scope This Pipeline →
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 rounded-full text-xs sm:text-sm py-5">
                  <Link href="/research">
                    <BookOpen className="w-4 h-4 mr-1.5" />
                    View Methodology
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Embed This Calculator Widget (Tactics 43 & 55) */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                  Embed This Free Tool on Your Guide or Resource Page (Tactic 43)
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-white mt-1">
                  Copy-Paste Calculator Embed Snippet
                </h3>
              </div>
              <button
                onClick={handleCopyEmbed}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono text-white transition-colors"
              >
                {embedCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied Embed Snippet!</span>
                  </>
                ) : (
                  <>
                    <Code2 className="w-3.5 h-3.5 text-zinc-300" />
                    <span>Copy HTML Embed Code</span>
                  </>
                )}
              </button>
            </div>
            <pre className="text-[11px] font-mono text-zinc-300 overflow-x-auto whitespace-pre-wrap bg-black p-3.5 rounded-xl border border-zinc-800">
              {CALCULATOR_EMBED_SNIPPET}
            </pre>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
