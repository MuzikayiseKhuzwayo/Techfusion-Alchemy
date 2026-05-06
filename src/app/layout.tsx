
import type {Metadata} from 'next';
import {Share_Tech_Mono} from 'next/font/google';
import './globals.css';
import {Toaster} from "@/components/ui/toaster";
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import { AlchemyChatbot } from '@/components/magic/alchemy-chatbot';

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-share-tech-mono',
});

export const metadata: Metadata = {
  title: 'TechFusion Alchemy | AI Business Automation',
  description: 'Full-stack AI systems that automate your entire business — from first click to final sale.',
  keywords: ['AI automation', 'business automation', 'Data Science', 'Agentic Systems', 'Custom AI Agents'],
  authors: [{ name: 'Muzikayise Khuzwayo' }],
  openGraph: {
    title: 'TechFusion Alchemy | AI Business Automation',
    description: 'Full-stack AI systems that automate your entire business — from first click to final sale.',
    url: 'https://techfusionalchemy.com',
    siteName: 'TechFusion Alchemy',
    images: [
      {
        url: 'https://techfusionalchemy.com/og-image.jpg', // Placeholder for actual OG image
        width: 1200,
        height: 630,
        alt: 'TechFusion Alchemy Banner',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechFusion Alchemy | AI Business Automation',
    description: 'Full-stack AI systems that automate your entire business — from first click to final sale.',
    images: ['https://techfusionalchemy.com/og-image.jpg'], // Placeholder for actual OG image
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
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body data-new-gr-c-s-check-loaded="14.1101.0"
        data-gr-ext-installed="" className={`${shareTechMono.variable} antialiased bg-background text-foreground overscroll-none`}>
        {/* Remove Grammarly attributes if they are injected */}
        <Header />
        <main className="flex-grow"> {/* Ensure main content takes available space */}
           {children}
        </main>
        <AlchemyChatbot />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
