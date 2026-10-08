// components/magic/security-section.tsx
"use client";

import React from "react";
import { AnimatedSection } from "./animated-section";
import {
  ShieldCheck,
  Lock,
  RefreshCw,
  FileCheck,
  Server,
  Scale,
  Building2,
  FileText,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const SecuritySection = () => {
  const legalFrameworks = [
    {
      tabId: "popia",
      statute: "POPIA (Act 4 of 2013)",
      title: "Zero AI Model Training & Strict Ephemeral Processing",
      description: "We never train public or third-party AI models on your proprietary business records. Compliant with all 8 lawful conditions and Section 72 cross-border data transfer safeguards.",
      badge: "Data Privacy",
      icon: <Lock className="w-5 h-5 text-zinc-200" />
    },
    {
      tabId: "ecta",
      statute: "ECTA (Act 25 of 2002) s43",
      title: "Statutory Disclosures & Electronic Contracting",
      description: "Complete formal company registration disclosures (Techfusion Automata Pty Ltd, Reg: 2026/399837/07) and legally binding Section 13 digital SOW execution.",
      badge: "ECTA & Companies Act",
      icon: <Building2 className="w-5 h-5 text-zinc-200" />
    },
    {
      tabId: "terms",
      statute: "CPA (Act 68 of 2008)",
      title: "14-Day Delivery Warranty & Fair Contracting",
      description: "Implied warranty of service quality under CPA Section 54/56, backed by our 14-day defect remediation warranty and plain-language Section 49 notices.",
      badge: "Consumer Protection",
      icon: <Scale className="w-5 h-5 text-zinc-200" />
    },
    {
      tabId: "cybersecurity",
      statute: "Cybercrimes Act (Act 19 of 2020)",
      title: "Encrypted Credential Vaults & DLQ Failovers",
      description: "All client API tokens and webhooks managed strictly in hardware-encrypted secret vaults (Supabase Vault / AWS KMS). Dead-letter queues protect against silent API crashes.",
      badge: "Cybersecurity & DLQ",
      icon: <Server className="w-5 h-5 text-zinc-200" />
    },
  ];

  return (
    <AnimatedSection className="py-20 sm:py-28 bg-black relative overflow-hidden" id="security">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tighter text-white">
            Built for Zero Liability, Full Statutory Compliance
          </h2>
          <p className="text-base text-zinc-400 mt-4 leading-relaxed font-normal">
            The biggest hesitation when hiring an automation specialist is risk: data leaks, model hallucinations, and silent pipeline failures. Techfusion Automata operates under strict South African statutes with formal legal governance.
          </p>
        </div>

        {/* Corporate Transparency & Subtab Hub Entry */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
              Registered Operating Business & Division
            </div>
            <div className="text-white font-semibold text-base sm:text-lg">
              Techfusion Automata (Pty) Ltd <span className="text-zinc-500 text-sm font-normal">• Reg: 2026/399837/07</span>
            </div>
            <div className="text-xs text-zinc-400 mt-1 max-w-xl font-sans">
              <strong className="text-zinc-200">Alchemy</strong> is the specialized AI and Workflow Automation engineering division under Techfusion Automata. Parent company: <a href="https://techfusion-ventures.xyz" target="_blank" rel="noopener noreferrer" className="text-white underline">Techfusion Ventures</a>.
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button asChild className="bg-white hover:bg-zinc-200 text-black rounded-full text-xs font-semibold px-6 py-5 shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all">
              <Link href="/legal">
                Open Full Legal & Regulatory Hub →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
