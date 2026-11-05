import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Book an Architecture Session or Submit Project Specs',
  description:
    'Describe your operational bottleneck or book a free 30-minute technical Architecture Session with Muzikayise Khuzwayo. Scope a 5-Day Pilot Sprint or custom n8n + Supabase backend.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
  openGraph: {
    title: 'Contact Techfusion Alchemy | Book a 30-Min Architecture Session',
    description:
      'Submit your workflow specifications or schedule a direct 30-minute technical audit with Principal Engineer Muzikayise Khuzwayo.',
    url: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
