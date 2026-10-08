// components/magic/legal-page.tsx
"use client";

import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import { AnimatedSection } from './animated-section';

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export const LegalPageLayout = ({ title, lastUpdated, children }: LegalPageProps) => {
  return (
    <main className="bg-black text-zinc-200 overflow-x-hidden min-h-screen">
      {/* Page Hero */}
      <div className="pt-32 pb-16 text-center relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h1 
            className="text-4xl md:text-6xl font-semibold tracking-tighter text-silver-gradient mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-zinc-500 font-mono text-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Last Updated: {lastUpdated}
          </motion.p>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
            {/* Disclaimer */}
            <div className="mb-12 p-5 border border-zinc-800 bg-zinc-950 rounded-xl flex items-start gap-4">
                <ShieldAlert className="h-5 w-5 text-zinc-300 mt-0.5 flex-shrink-0" />
                <div>
                    <h3 className="font-semibold text-white text-sm">Regulatory Notice</h3>
                    <p className="text-zinc-400 text-xs leading-relaxed mt-1 font-sans">
                        This document details the operational and legal policies of Techfusion Automata (Pty) Ltd. For full interactive subtabs including POPIA compliance and PAIA manual, visit the <a href="/legal" className="text-white underline">Legal Hub</a>.
                    </p>
                </div>
            </div>

            <div className="prose prose-invert prose-headings:text-white prose-headings:tracking-tight prose-a:text-white hover:prose-a:text-zinc-300 max-w-none space-y-8 font-sans">
                {children}
            </div>
        </div>
      </div>
    </main>
  );
};

export const LegalSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <AnimatedSection>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">{title}</h2>
        {children}
    </AnimatedSection>
);

export const PlainEnglishSummary = ({ children }: { children: React.ReactNode }) => (
    <div className="my-5 p-4 border-l-2 border-white bg-zinc-950 border border-zinc-800/80 rounded-r-xl">
        <p className="font-semibold text-zinc-400 font-mono text-[11px] uppercase tracking-wider">In Plain English</p>
        <p className="mt-1.5 text-zinc-300 italic text-sm font-sans leading-relaxed">{children}</p>
    </div>
);