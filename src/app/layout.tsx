import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AlchemyChatbot } from '@/components/magic/alchemy-chatbot';
import { SITE_CONFIG } from '@/lib/site-config';
import { StructuredData } from '@/components/seo/structured-data';
import { GoogleAnalytics } from '@/components/analytics/google-analytics';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'Techfusion Alchemy | Custom AI & Backend Automation by Muzikayise Khuzwayo',
    template: '%s | Techfusion Alchemy',
  },
  description:
    'Custom, reliable AI & backend automation pipelines for high-growth businesses. Sub-45s inbound lead triage, Vision OMS PO/invoice parsing, and resilient n8n + Supabase backends by Muzikayise Khuzwayo. Techfusion Automata (Pty) Ltd • CIPC Reg: 2026/399837/07.',
  keywords: [
    'Techfusion Alchemy',
    'Techfusion Automata',
    'Muzikayise Khuzwayo',
    'Techfusion Ventures',
    'AI automation engineer',
    'n8n custom workflows',
    'lead triage CRM sync',
    'purchase order AI parsing',
    'Vision OMS',
    'South Africa AI automation',
    'Cape Town AI automation',
    'Johannesburg AI engineer',
    'agentic systems',
    'POPIA compliant AI',
  ],
  authors: [{ name: SITE_CONFIG.founder.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.founder.name,
  publisher: SITE_CONFIG.legalName,
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'Techfusion Alchemy | Custom AI & Backend Automation by Muzikayise Khuzwayo',
    description:
      'Production-grade n8n pipelines, structured LLM extraction engines, and resilient CRM backends. No agency bloat, no junior handoffs. CIPC Reg: 2026/399837/07.',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Techfusion Alchemy — AI & Backend Automation by Techfusion Automata (Pty) Ltd',
      },
    ],
    locale: SITE_CONFIG.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE_CONFIG.founder.twitterHandle,
    creator: SITE_CONFIG.founder.twitterHandle,
    title: 'Techfusion Alchemy | Custom AI & Backend Automation',
    description: 'Boutique AI & backend automation engineering by Muzikayise Khuzwayo (Techfusion Automata Pty Ltd).',
    images: [SITE_CONFIG.ogImage],
  },
  verification: SITE_CONFIG.googleSiteVerification
    ? { google: SITE_CONFIG.googleSiteVerification }
    : undefined,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/techfusion_automata_ico.ico' },
      { url: '/techfusion_automata_jpg_nobg.png', type: 'image/png' },
    ],
    shortcut: '/techfusion_automata_ico.ico',
    apple: '/techfusion_automata_jpg_nobg.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="alternate" type="text/plain" title="LLM Summary" href="/llms.txt" />
        <link rel="alternate" type="text/plain" title="LLM Full Documentation" href="/llms-full.txt" />
        <StructuredData />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-foreground selection:bg-zinc-800 selection:text-white`}>
        <GoogleAnalytics />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <AlchemyChatbot />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
