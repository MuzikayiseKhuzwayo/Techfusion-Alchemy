
import type {Metadata} from 'next';
import {Share_Tech_Mono} from 'next/font/google';
import './globals.css';
import {Toaster} from "@/components/ui/toaster";
import Header from './header';
import Footer from './footer';
import { Chatbot } from '@/components/chatbot/Chatbot'; // Import the Chatbot

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-share-tech-mono',
});

export const metadata: Metadata = {
  title: 'Alchemy Automate',
  description: 'TechFusion Alchemy - Automation Agency',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${shareTechMono.variable} antialiased bg-background text-foreground`}>
        {/* Remove Grammarly attributes if they are injected */}
        {/* data-new-gr-c-s-check-loaded="14.1101.0" */}
        {/* data-gr-ext-installed="" */}
        <Header />
        <main className="flex-grow"> {/* Ensure main content takes available space */}
           {children}
        </main>
        <Chatbot /> {/* Add the Chatbot component here */}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
