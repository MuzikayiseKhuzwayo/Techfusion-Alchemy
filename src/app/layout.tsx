
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body data-new-gr-c-s-check-loaded="14.1101.0"
        data-gr-ext-installed="" className={`${shareTechMono.variable} antialiased bg-background text-foreground`}>
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
