// src/lib/site-config.ts

export const SITE_CONFIG = {
  name: 'Techfusion Alchemy',
  legalName: 'Techfusion Automata (Pty) Ltd',
  cipcReg: '2026/399837/07',
  parentCompany: 'Techfusion Ventures',
  parentUrl: 'https://techfusion-ventures.xyz',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://techfusion-alchemy.xyz',
  ogImage: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/og-banner.jpg',
  locale: 'en_ZA',
  email: 'muzi@techfusion-alchemy.xyz',
  calendlyBaseUrl: 'https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes',
  founder: {
    name: 'Muzikayise Khuzwayo',
    role: 'Founder & Principal AI & Automation Engineer',
    personalSite: 'https://www.muzikhuzwayo.xyz',
    upworkUrl: 'https://www.upwork.com/freelancers/~01690494e012631bd1',
    twitterHandle: '@3mk4y_',
    twitterUrl: 'https://x.com/3mk4y_',
    university: 'University of Cape Town (UCT)',
    publications: [
      'SSRN Abstract ID 7528238 (Dubstrata Causal-FM)',
      'SSRN Abstract ID 7377639 (Dubstrata Causal-FM)',
    ],
  },
  locations: ['Cape Town, South Africa', 'Johannesburg, South Africa'],
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
} as const;

export function getCalendlyUrl(sourceSection: string = 'website'): string {
  const params = new URLSearchParams({
    utm_source: 'techfusion-alchemy.xyz',
    utm_medium: 'website',
    utm_campaign: 'architecture_session',
    utm_content: sourceSection,
  });
  return `${SITE_CONFIG.calendlyBaseUrl}?${params.toString()}`;
}
