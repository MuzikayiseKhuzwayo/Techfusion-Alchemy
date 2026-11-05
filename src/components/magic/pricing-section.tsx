// components/magic/pricing-section.tsx
"use client";

import { Check, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./animated-section";
import Link from "next/link";
import { getCalendlyUrl } from "@/lib/site-config";

const engagementModels = [
  {
    name: "The Pilot Sprint",
    badge: "Low-Risk Entry • 5-Day Delivery",
    description: "Validate code quality and engineering rigor on a single mission-critical bottleneck before committing to larger infrastructure.",
    price: "Fixed-Scope",
    localPrice: "scoped per workflow",
    cadence: "5-day sprint",
    features: [
      "1 self-contained production workflow (e.g. Lead triage, PO parsing, CRM sync)",
      "Structured LLM parsing (deterministic JSON schemas)",
      "Dead-letter queue & Slack/Telegram incident alerting",
      "5 business days turnaround from SOW sign-off",
      "14-day bugfix & edge-case warranty",
      "Mutual NDA & full architecture diagram provided"
    ],
    highlighted: true,
    ctaText: "Book Pilot Architecture Session",
    ctaLink: getCalendlyUrl("pricing_pilot_sprint")
  },
  {
    name: "Core Pipeline Build",
    badge: "End-to-End System Overhaul",
    description: "Comprehensive multi-step automation infrastructure connecting multiple platforms, relational databases, and AI agents.",
    price: "Custom Build",
    localPrice: "scoped to architecture",
    cadence: "milestone-based",
    features: [
      "Multi-stage orchestration across n8n, Supabase, and APIs",
      "Deep CRM & ERP bi-directional synchronization",
      "Multi-document Vision OCR & complex schema validation",
      "Custom Python/FastAPI microservices where required",
      "Comprehensive staging environment & UAT testing",
      "30-day post-deployment engineering warranty"
    ],
    highlighted: false,
    ctaText: "Discuss System Scope",
    ctaLink: "/contact"
  },
  {
    name: "Fractional Automation Lead",
    badge: "Dedicated Senior Bandwidth",
    description: "Ongoing partnership for businesses scaling fast that require ML & backend automation engineering on demand.",
    price: "Retainer",
    localPrice: "subject to discussion",
    cadence: "per month",
    features: [
      "Direct Slack/Teams channel with Muzikayise Khuzwayo",
      "Continuous workflow creation, tuning, and optimization",
      "24/7 dead-letter queue monitoring & priority incident resolution",
      "Proactive bottleneck audits across your tech stack",
      "Zero agency overhead, cancel anytime with 30-day notice",
      "Strict capacity limit: capped at 3 clients concurrently"
    ],
    highlighted: false,
    ctaText: "Inquire for Retainer Availability",
    ctaLink: "/contact"
  }
];

export const PricingSection = () => {
  return (
    <AnimatedSection className="py-20 sm:py-28 bg-black" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-14 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] text-white mb-4 text-balance">
            Start Small with a 5-Day Paid Pilot
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal text-pretty">
            You don&apos;t need a bloated multi-month agency contract to start automating. Test our speed, code resilience, and communication on a single high-ROI bottleneck first.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch max-w-xl mx-auto lg:max-w-none">
          {engagementModels.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${plan.highlighted
                ? "bg-zinc-950 border-zinc-400 shadow-[0_0_35px_rgba(255,255,255,0.08)] lg:-translate-y-2 z-10"
                : "bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700"
                }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-white text-black text-[11px] font-mono font-bold px-3.5 py-1 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] uppercase tracking-wider whitespace-nowrap">
                    Recommended
                  </span>
                </div>
              )}

              <div className="mb-6">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                  {plan.badge}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-white mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-xs sm:text-sm min-h-[48px] leading-relaxed font-sans">{plan.description}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-zinc-800">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">{plan.price}</span>
                  <span className="text-zinc-400 text-xs font-mono">/{plan.cadence}</span>
                </div>
                <div className="text-[11px] text-zinc-500 font-mono mt-1">{plan.localPrice}</div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 font-sans">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-zinc-300" />
                    <span className="text-zinc-300 text-xs sm:text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full h-auto whitespace-normal text-center rounded-full text-xs font-semibold py-4 px-5 transition-all ${plan.highlighted
                  ? "bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  : "bg-zinc-900 border border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-500 hover:text-white"
                  }`}
              >
                <Link
                  href={plan.ctaLink}
                  target={plan.ctaLink.startsWith("http") ? "_blank" : undefined}
                  rel={plan.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center gap-1.5"
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Framing call-out box */}
        <div className="mt-14 p-7 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950 text-center max-w-3xl mx-auto shadow-xl">
          <h4 className="text-lg font-semibold tracking-tight text-white mb-2">
            Not Sure Where To Start?
          </h4>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans max-w-2xl mx-auto">
            In 30 minutes, we map out your current manual workflow, identify the highest-ROI bottleneck, and draft an architecture diagram of how to automate it. Want technical clarity?
          </p>
          <div className="mt-5">
            <Button asChild size="sm" className="bg-white hover:bg-zinc-200 text-black rounded-full text-xs font-semibold px-6 py-5 shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all">
              <Link href={getCalendlyUrl("pricing_bottom_cta")} target="_blank" rel="noopener noreferrer">
                Book Your 30-Min Session →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
