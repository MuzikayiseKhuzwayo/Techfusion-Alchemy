import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: '2026 B2B AI Automation, Speed-to-Lead & DLQ Reliability Benchmark Research',
  description:
    'Citable empirical benchmarks across N=14,280 production workflow executions and 1,840 B2B lead events. Compare sub-45s AI speed-to-lead conversion, Vision OMS document extraction accuracy, and deterministic n8n + Supabase + DLQ architectures vs. fragile no-code zaps.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/research`,
  },
  openGraph: {
    title: 'B2B AI Automation & Pipeline Reliability Benchmark Study | Techfusion Alchemy',
    description:
      'Primary empirical research on sub-45s speed-to-lead triage, Vision LLM document parsing, and Dead-Letter Queue (DLQ) failover across 14,280 workflow runs.',
    url: `${SITE_CONFIG.url}/research`,
    type: 'article',
  },
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
