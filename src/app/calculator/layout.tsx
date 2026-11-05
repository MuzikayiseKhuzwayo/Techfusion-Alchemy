import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Free B2B AI Automation, Speed-to-Lead & DLQ ROI Calculator',
  description:
    'Interactive B2B AI Automation & Speed-to-Lead ROI Calculator. Model your revenue recovery from sub-45s AI lead triage, Vision OMS document extraction labor savings, Dead-Letter Queue (DLQ) webhook protection, and 5-Day Pilot Sprint payback.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/calculator`,
  },
  openGraph: {
    title: 'Interactive B2B Automation & Speed-to-Lead ROI Calculator | Techfusion Alchemy',
    description:
      'Calculate exact annual revenue recovered from <45s lead response, manual document parsing elimination, and zero-data-loss DLQ failover.',
    url: `${SITE_CONFIG.url}/calculator`,
    type: 'website',
  },
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
