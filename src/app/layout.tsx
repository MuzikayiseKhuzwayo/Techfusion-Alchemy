
import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import {Toaster} from "@/components/ui/toaster";
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import { AlchemyChatbot } from '@/components/magic/alchemy-chatbot';

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
  title: 'Techfusion Automata | Custom AI & Backend Automation by Muzikayise Khuzwayo',
  description: 'Custom, reliable AI & backend automation pipelines for high-growth businesses. Inbound lead triage, PO/document AI parsing, and resilient n8n backends by senior specialist Muzikayise Khuzwayo. CIPC Reg: 2026/399837/07.',
  keywords: [
    'Muzikayise Khuzwayo',
    'Techfusion Automata',
    'Techfusion Ventures',
    'AI automation engineer',
    'n8n custom workflows',
    'lead triage CRM sync',
    'purchase order AI parsing',
    'South Africa AI automation',
    'agentic systems',
    'POPIA compliant AI'
  ],
  authors: [{ name: 'Muzikayise Khuzwayo', url: 'https://techfusion-ventures.xyz' }],
  openGraph: {
    title: 'Techfusion Automata | Custom AI & Backend Automation by Muzikayise Khuzwayo',
    description: 'Custom, reliable AI & backend automation pipelines. No agency bloat, no junior handoffs. CIPC Reg: 2026/399837/07.',
    url: 'https://techfusion-ventures.xyz',
    siteName: 'Techfusion Automata',
    images: [
      {
        url: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Techfusion Automata Banner',
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Techfusion Automata | Custom AI & Backend Automation',
    description: 'Boutique AI & backend automation engineering by Muzikayise Khuzwayo.',
  },
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
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-black text-foreground selection:bg-zinc-800 selection:text-white overscroll-none`}>
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
