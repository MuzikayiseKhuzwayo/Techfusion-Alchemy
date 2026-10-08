// app/legal/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Building2, 
  FileText, 
  Lock, 
  Scale, 
  Server, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  Mail,
  ChevronRight,
  Download
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TechfusionLogo } from "@/components/layout/TechfusionLogo";

type TabId = "ecta" | "popia" | "paia" | "terms" | "cybersecurity";

interface TabConfig {
  id: TabId;
  label: string;
  badge: string;
  icon: React.ReactNode;
  subtitle: string;
}

const tabs: TabConfig[] = [
  {
    id: "ecta",
    label: "Corporate & ECTA s43",
    badge: "Act 25 of 2002",
    icon: <Building2 className="w-4 h-4 text-zinc-300" />,
    subtitle: "Statutory Disclosures & Corporate Structure"
  },
  {
    id: "popia",
    label: "POPIA & AI Privacy",
    badge: "Act 4 of 2013",
    icon: <Lock className="w-4 h-4 text-zinc-300" />,
    subtitle: "8 Lawful Conditions & Zero-Model-Training Guarantee"
  },
  {
    id: "paia",
    label: "PAIA Manual s51",
    badge: "Act 2 of 2000",
    icon: <FileText className="w-4 h-4 text-zinc-300" />,
    subtitle: "Promotion of Access to Information Manual"
  },
  {
    id: "terms",
    label: "Terms of Service & CPA",
    badge: "Act 68 of 2008",
    icon: <Scale className="w-4 h-4 text-zinc-300" />,
    subtitle: "Master Services Terms & 14-Day Delivery Warranty"
  },
  {
    id: "cybersecurity",
    label: "Cybercrimes & Security",
    badge: "Act 19 of 2020",
    icon: <Server className="w-4 h-4 text-zinc-300" />,
    subtitle: "Credential Vaults, DLQ Failover & Incident Protocols"
  },
];

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<TabId>("ecta");

  useEffect(() => {
    // Read hash on mount to enable deep-linking
    const hash = window.location.hash.replace("#", "") as TabId;
    if (tabs.some(t => t.id === hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    window.location.hash = tabId;
  };

  return (
    <main className="bg-black text-zinc-200 min-h-screen pt-28 pb-24 overflow-x-hidden">
      {/* Background Subtle Hairline Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,_rgba(0,0,0,0.8),_transparent)]"></div>
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-700/80 bg-zinc-900/80 text-zinc-300 text-xs font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
            Republic of South Africa Statutory Compliance
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tighter text-white mb-4">
            Legal & Regulatory Governance
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal font-sans">
            Statutory disclosures, data privacy protocols, PAIA manual, and contractual standards governing{" "}
            <strong className="text-white">Techfusion Automata (Pty) Ltd</strong> and its operating divisions, including{" "}
            <span className="text-white font-medium">TechFusion Alchemy</span>.
          </p>
        </div>

        {/* Corporate Hierarchy Callout */}
        <div className="p-4 sm:p-5 rounded-xl border border-zinc-800 bg-zinc-950 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <TechfusionLogo variant="iconOnly" className="w-8 h-8" />
            <div>
              <span className="text-white font-semibold block">Techfusion Automata (Pty) Ltd (Reg: 2026/399837/07)</span>
              <span className="text-zinc-400 font-sans">Operating Entity • Alchemy is the dedicated AI & Automation Engineering division</span>
            </div>
          </div>
          <div className="text-zinc-400">
            Parent Group:{" "}
            <a 
              href="https://techfusion-ventures.xyz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white underline hover:text-zinc-300 inline-flex items-center gap-1"
            >
              techfusion-ventures.xyz <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>
          </div>
        </div>

        {/* Subtabs Selector */}
        <div className="flex overflow-x-auto gap-2 p-1.5 rounded-2xl bg-zinc-950 border border-zinc-800/80 mb-8 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex-1 min-w-[200px] p-3.5 rounded-xl text-left transition-all duration-200 relative flex flex-col justify-between ${
                  isActive
                    ? "bg-zinc-900 border border-zinc-400 shadow-[0_0_20px_rgba(255,255,255,0.08)] text-white"
                    : "hover:bg-zinc-900/60 border border-transparent text-zinc-400 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                    {tab.badge}
                  </span>
                  <div className="p-1 rounded-md bg-zinc-900 border border-zinc-800">
                    {tab.icon}
                  </div>
                </div>
                <div className="text-sm font-semibold truncate">{tab.label}</div>
                <div className="text-[11px] text-zinc-500 truncate mt-0.5">{tab.subtitle}</div>

                {isActive && (
                  <motion.div
                    layoutId="activeLegalTab"
                    className="absolute -bottom-1 left-4 right-4 h-0.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <AnimatePresence mode="wait">
            {activeTab === "ecta" && (
              <motion.div
                key="ecta"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="border-b border-zinc-800 pb-6">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                    Electronic Communications and Transactions Act 25 of 2002
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
                    Section 43 Statutory E-Commerce Disclosures
                  </h2>
                  <p className="text-sm text-zinc-400 mt-2 font-normal font-sans">
                    In compliance with Section 43 of the ECTA and Section 32 of the Companies Act 71 of 2008, the following formal company information is made available to all clients and visitors.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-sans">
                  <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3">
                    <span className="text-xs font-mono text-zinc-400 uppercase block font-semibold">1. Corporate Entity</span>
                    <div>
                      <div className="text-white font-semibold">Full Registered Name:</div>
                      <div className="text-zinc-300">Techfusion Automata (Pty) Ltd</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Registration Number:</div>
                      <div className="text-zinc-300 font-mono">2026/399837/07 (CIPC, South Africa)</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Trading Division:</div>
                      <div className="text-zinc-300">TechFusion Alchemy (AI & Workflow Automation Systems)</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Parent Holding:</div>
                      <div className="text-zinc-300">Techfusion Ventures (https://techfusion-ventures.xyz)</div>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3">
                    <span className="text-xs font-mono text-zinc-400 uppercase block font-semibold">2. Governance & Contacts</span>
                    <div>
                      <div className="text-white font-semibold">Sole Director & Principal:</div>
                      <div className="text-zinc-300">Muzikayise Khuzwayo</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Official Contact Email:</div>
                      <a href="mailto:muzi@techfusion-alchemy.xyz" className="text-white underline hover:text-zinc-300">
                        muzi@techfusion-alchemy.xyz
                      </a>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Registered Office & Operational Base:</div>
                      <div className="text-zinc-300">Cape Town & Johannesburg, Republic of South Africa</div>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Alternative Dispute Resolution:</div>
                      <div className="text-zinc-300">Arbitration Foundation of Southern Africa (AFSA)</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800 pt-6 font-sans">
                  <h3 className="text-lg font-semibold text-white">ECTA Section 13 Electronic Signatures & Contracts</h3>
                  <p>
                    All Statements of Work (SOW), Non-Disclosure Agreements (NDAs), and sprint confirmations executed digitally via electronic signature, mutual email acceptance, or approved platform checkout possess full legal validity and enforceability under Section 13 of the Electronic Communications and Transactions Act.
                  </p>
                  <h3 className="text-lg font-semibold text-white pt-2">Service Pricing & Delivery Arrangements</h3>
                  <p>
                    Bespoke engineering engagements are priced in United States Dollars (USD) or South African Rand (ZAR) as specified in individual SOWs. Delivery timelines, milestone acceptance criteria, and payment schedules are governed by atomic contracts executed prior to credential provisioning.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "popia" && (
              <motion.div
                key="popia"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="border-b border-zinc-800 pb-6">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                    Protection of Personal Information Act 4 of 2013 (POPIA)
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
                    Data Processing Principles & Zero-Model-Training Guarantee
                  </h2>
                  <p className="text-sm text-zinc-400 mt-2 font-normal font-sans">
                    How Techfusion Automata complies with the 8 statutory conditions for lawful data processing, section 72 cross-border data flows, and guarantees zero training on client proprietary IP.
                  </p>
                </div>

                {/* The Zero-Training Guarantee Callout */}
                <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900 border border-zinc-700/80">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="w-5 h-5 text-white" />
                    <h3 className="text-lg font-semibold text-white">
                      Strict Zero-AI-Model-Training Guarantee
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                    Techfusion Automata warrants that <strong>no client data, customer database records, webhook payloads, or business workflows will ever be used to train, retrain, fine-tune, or benchmark public or proprietary LLMs or third-party AI systems</strong>. All data transfers across integrated APIs are strictly ephemeral, non-persistent, and zero-data-retention where supported.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-sans">
                  <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                    <span className="text-xs font-mono text-zinc-300 font-semibold uppercase block">8 Lawful Processing Conditions</span>
                    <ul className="space-y-1.5 text-xs text-zinc-300 list-disc pl-4">
                      <li><strong>Condition 1 (Accountability):</strong> Dedicated Information Officer overseeing technical compliance.</li>
                      <li><strong>Condition 2 (Processing Limitation):</strong> Lawful, minimal, and justified solely by SOW execution.</li>
                      <li><strong>Condition 3 (Purpose Specification):</strong> Data processed strictly for specified workflow pipeline tasks.</li>
                      <li><strong>Condition 4 (Further Processing Limitation):</strong> No secondary use, sale, or distribution of client data.</li>
                      <li><strong>Condition 5 (Information Quality):</strong> Automated schema validation guards against corruption.</li>
                      <li><strong>Condition 6 (Openness):</strong> Documented transparency via this legal hub.</li>
                      <li><strong>Condition 7 (Security Safeguards):</strong> Encrypted secret vaults and dead-letter queues.</li>
                      <li><strong>Condition 8 (Data Subject Participation):</strong> Rights to request access, correction, or deletion.</li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-3">
                    <span className="text-xs font-mono text-zinc-300 font-semibold uppercase block">Section 72 Cross-Border Transfers</span>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Where workflow pipelines route through international cloud infrastructure (e.g., Supabase / AWS / OpenAI API endpoints), Techfusion Automata ensures that transfers comply strictly with <strong>Section 72 of POPIA</strong> by ensuring the recipient is subject to a law, binding corporate rules, or standard contractual clauses providing an adequate level of data protection comparable to POPIA.
                    </p>
                    <div className="pt-2 border-t border-zinc-800 text-xs font-mono text-zinc-400">
                      <strong>Designated Information Officer:</strong> Muzikayise Khuzwayo<br />
                      <strong>POPIA Regulatory Authority:</strong> Information Regulator (South Africa)
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3 font-sans">
                  <span>To submit a Data Subject Access Request (DSAR) or request data destruction:</span>
                  <a 
                    href="mailto:muzi@techfusion-alchemy.xyz?subject=POPIA%20Data%20Subject%20Request"
                    className="text-white underline hover:text-zinc-300 font-semibold font-mono"
                  >
                    Email Information Officer →
                  </a>
                </div>
              </motion.div>
            )}

            {activeTab === "paia" && (
              <motion.div
                key="paia"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="border-b border-zinc-800 pb-6">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                    Promotion of Access to Information Act 2 of 2000 (PAIA)
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
                    Section 51 Statutory PAIA Manual
                  </h2>
                  <p className="text-sm text-zinc-400 mt-2 font-normal font-sans">
                    Statutory manual for Techfusion Automata (Pty) Ltd prepared in accordance with Section 51 of the Promotion of Access to Information Act.
                  </p>
                </div>

                <div className="space-y-6 text-sm text-zinc-300 leading-relaxed font-sans">
                  <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                    <h3 className="text-base font-semibold text-white">1. Company Contact Details</h3>
                    <p className="text-xs text-zinc-400">
                      <strong className="text-zinc-200">Private Body:</strong> Techfusion Automata (Pty) Ltd<br />
                      <strong className="text-zinc-200">Registration No:</strong> 2026/399837/07<br />
                      <strong className="text-zinc-200">Head of Private Body:</strong> Muzikayise Khuzwayo (Director)<br />
                      <strong className="text-zinc-200">Postal & Physical Address:</strong> Cape Town & Johannesburg, Republic of South Africa<br />
                      <strong className="text-zinc-200">Email:</strong> muzi@techfusion-alchemy.xyz<br />
                      <strong className="text-zinc-200">Website:</strong> https://techfusion-ventures.xyz
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">2. Guide of the Information Regulator</h3>
                    <p className="text-xs text-zinc-400">
                      The Information Regulator has compiled a guide in each official language containing information to assist any person who wishes to exercise any right contemplated in PAIA. Enquiries can be directed to: JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001 (enquiries@inforegulator.org.za).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">3. Categories of Records Held</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
                        <span className="font-semibold text-white block mb-1">Statutory & Corporate:</span>
                        Memorandum of Incorporation, CIPC registration records, Director resolutions, and register of directors.
                      </div>
                      <div className="p-3.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
                        <span className="font-semibold text-white block mb-1">Financial & Tax:</span>
                        Invoices, bank statements, asset register, accounting records, and tax filings in terms of the Tax Administration Act.
                      </div>
                      <div className="p-3.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
                        <span className="font-semibold text-white block mb-1">Client & Operational:</span>
                        Statements of Work (SOWs), Non-Disclosure Agreements, project technical specifications, and SLA monitoring logs.
                      </div>
                      <div className="p-3.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
                        <span className="font-semibold text-white block mb-1">Proprietary Technology:</span>
                        Source code architectures, proprietary algorithm designs, and research manuscripts.
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white mb-2">4. Request Procedure (Form 2) & Statutory Grounds for Refusal</h3>
                    <p className="text-xs text-zinc-400">
                      Requests must be submitted using prescribed <strong>Form 2</strong> to the Information Officer together with the prescribed request fee. Access to records will be refused where mandated by Chapter 4 of PAIA, including mandatory protection of the commercial information of a third party, trade secrets, confidential technical architecture, or personal information of a natural person under POPIA.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "terms" && (
              <motion.div
                key="terms"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="border-b border-zinc-800 pb-6">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                    Consumer Protection Act 68 of 2008 & Common Law
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
                    Master Services Agreement & 14-Day Delivery Warranty
                  </h2>
                  <p className="text-sm text-zinc-400 mt-2 font-normal font-sans">
                    Contractual terms governing custom workflow engineering, Pilot Sprints, intellectual property allocation, and statutory CPA Section 49 notices.
                  </p>
                </div>

                <div className="space-y-6 text-sm text-zinc-300 leading-relaxed font-sans">
                  <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <h3 className="text-base font-semibold text-white mb-1">
                      14-Day Production Delivery Warranty
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      In accordance with the standards of Section 54 of the Consumer Protection Act, Techfusion Automata warrants that all custom workflows and automated pipelines deployed under an approved SOW or Pilot Sprint will perform substantially in accordance with agreed specifications for a period of <strong>fourteen (14) calendar days</strong> following production handover. Any software defect, edge-case failure, or schema deviation reported within this window will be corrected promptly at zero additional cost.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">Intellectual Property Ownership</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Upon final and full payment of fees specified in an executed Statement of Work, Techfusion Automata grants the Client a perpetual, worldwide, irrevocable license to use, execute, modify, and host the bespoke workflow schemas and integration scripts developed specifically for the Client&apos;s business. Pre-existing proprietary modules, architectural libraries, and foundational templates remain the property of Techfusion Automata.
                    </p>
                  </div>

                  {/* CPA Section 49 Notice */}
                  <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-700/80">
                    <div className="flex items-center gap-2 text-zinc-300 text-xs font-mono font-semibold uppercase mb-1">
                      <AlertCircle className="w-4 h-4 text-zinc-300" />
                      Notice in Terms of Section 49 of the Consumer Protection Act
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      <strong className="text-zinc-200">Limitation of Liability:</strong> Under no circumstances shall Techfusion Automata (Pty) Ltd, its directors, or Techfusion Ventures be held liable for indirect, consequential, or punitive damages, or loss of profits resulting from third-party platform downtime (including global outages of OpenAI, Anthropic, HubSpot, Make, or n8n cloud hosting). Our maximum aggregate financial liability is strictly capped at the total project fees paid by the client under the specific SOW.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">Governing Law & Jurisdiction</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      These Terms are governed by and construed in accordance with the laws of the <strong className="text-zinc-200">Republic of South Africa</strong>. The parties submit to the exclusive jurisdiction of the High Court of South Africa (Western Cape or Gauteng Division).
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "cybersecurity" && (
              <motion.div
                key="cybersecurity"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="border-b border-zinc-800 pb-6">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                    Cybercrimes Act 19 of 2020 & Technical Security Standards
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
                    Credential Vaults, Failover & Incident Protocols
                  </h2>
                  <p className="text-sm text-zinc-400 mt-2 font-normal font-sans">
                    How Techfusion Automata enforces cybersecurity controls, credential vaulting, and dead-letter queue resilience to protect systems from unauthorized access and data loss.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-sans">
                  <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                    <span className="text-xs font-mono text-zinc-300 font-semibold uppercase block">Encrypted Credential Vaults</span>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      In strict compliance with modern cybersecurity protocols and the Cybercrimes Act 19 of 2020, client API keys, database credentials, and webhook secrets are stored solely inside hardware-encrypted secret vaults (Supabase Vault, AWS Secrets Manager, or Doppler) using AES-256 / KMS encryption.
                    </p>
                    <div className="pt-2 text-xs font-mono text-zinc-500">
                      • Zero plaintext secrets in code or chats<br />
                      • Least-privilege API scoping<br />
                      • Key revocation upon project delivery
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                    <span className="text-xs font-mono text-zinc-300 font-semibold uppercase block">Dead-Letter Queue (DLQ) & Resilience</span>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Upstream APIs fail and experience rate limits. Every production pipeline built by Techfusion Automata includes dead-letter queues (DLQ), automated exponential retry loops, and instant real-time incident alerting to Slack or Telegram to guarantee zero data loss.
                    </p>
                    <div className="pt-2 text-xs font-mono text-zinc-500">
                      • Idempotency key deduplication<br />
                      • Automatic backoff retry mechanisms<br />
                      • Real-time stack trace incident alerts
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-zinc-300 border-t border-zinc-800 pt-6 font-sans">
                  <h3 className="text-lg font-semibold text-white">Section 22 POPIA & Cybercrimes Breach Response Protocol</h3>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    In the improbable event of a suspected security compromise affecting client infrastructure, Techfusion Automata initiates an immediate containment protocol: revoking access credentials, quarantining affected pipelines, and providing written notification to the client and the Information Regulator in accordance with Section 22 of POPIA.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-7 rounded-2xl border border-zinc-800 bg-zinc-950 shadow-xl">
          <div>
            <h3 className="text-base font-semibold text-white">Need a Signed Mutual NDA Before Technical Discovery?</h3>
            <p className="text-xs text-zinc-400 mt-0.5 font-sans">
              We execute mutual NDAs on Day 1 before inspecting your CRM, API keys, or operational data.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button asChild size="sm" className="bg-white hover:bg-zinc-200 text-black rounded-full text-xs font-semibold px-5 py-4 shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all">
              <Link href="https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes" target="_blank" rel="noopener noreferrer">
                Schedule Architecture Session →
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="border-zinc-700 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-500 hover:text-white rounded-full text-xs font-mono py-4">
              <a href="mailto:muzi@techfusion-alchemy.xyz?subject=Mutual%20NDA%20Request">
                Request Mutual NDA
              </a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
