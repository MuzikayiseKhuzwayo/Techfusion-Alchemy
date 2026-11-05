import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About Muzikayise Khuzwayo | Founder & Principal AI Engineer',
  description:
    'Meet Muzikayise Khuzwayo, Founder & Principal AI Engineer at Techfusion Automata (Pty) Ltd. From Soweto and UCT Electrical & Computer Engineering (Dean’s Merit List, Dell Young Leaders Scholar) to SSRN-published causal AI research and enterprise automation.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
  openGraph: {
    title: 'Muzikayise Khuzwayo | Founder & Principal Engineer at Techfusion Alchemy',
    description:
      'Electrical & Computer Engineering background at UCT, SSRN-published causal AI researcher, and Principal Automation Engineer at Techfusion Automata (Pty) Ltd.',
    url: `${SITE_CONFIG.url}/about`,
    type: 'profile',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
