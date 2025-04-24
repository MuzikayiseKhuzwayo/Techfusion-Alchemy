import type {Metadata} from 'next';
import {Share_Tech_Mono} from 'next/font/google';
import './globals.css';
import {Toaster} from "@/components/ui/toaster";
import Header from './header';
import Footer from './footer';

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-share-tech-mono',
});

export const metadata: Metadata = {
  title: 'Alchemy Automate',
  description: 'Tehcfusion Alchemy - Automation Agency',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${shareTechMono.variable} antialiased bg-background text-foreground`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

