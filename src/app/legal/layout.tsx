import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Legal & Regulatory Governance Hub (POPIA, ECTA s43, PAIA s51, CPA)',
  description:
    'Republic of South Africa statutory compliance hub for Techfusion Automata (Pty) Ltd (CIPC Reg: 2026/399837/07): ECTA s43 disclosures, POPIA Zero-Model-Training Guarantee, PAIA s51 Manual, CPA s49 14-day warranty, and Cybercrimes Act vault controls.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/legal`,
  },
  openGraph: {
    title: 'Legal & Regulatory Hub | Techfusion Automata (Pty) Ltd',
    description:
      'Full statutory disclosures under ECTA s43, POPIA Act 4 of 2013 Zero-AI-Training Guarantee, PAIA s51 Manual, and 14-Day Delivery Warranty.',
    url: `${SITE_CONFIG.url}/legal`,
  },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
