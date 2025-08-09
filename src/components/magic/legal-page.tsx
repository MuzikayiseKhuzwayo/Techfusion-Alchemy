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
    <main className="bg-[#000010] text-gray-200 overflow-x-hidden">
      {/* Page Hero */}
      <div className="pt-32 pb-16 text-center relative bg-grid-white/[0.05]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#000010] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="text-gray-500 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Last Updated: {lastUpdated}
          </motion.p>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
            {/* Disclaimer */}
            <div className="mb-12 p-4 border border-amber-500/30 bg-amber-900/20 rounded-lg flex items-start gap-4">
                <ShieldAlert className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                    <h3 className="font-semibold text-amber-300">Not Legal Advice</h3>
                    <p className="text-amber-400/80 text-sm">
                        This document is provided for informational purposes only. It is a template and does not constitute legal advice. Please consult with a qualified legal professional to ensure compliance with all applicable laws and regulations for your specific business.
                    </p>
                </div>
            </div>

            <div className="prose prose-invert prose-headings:text-white prose-a:text-cyan-400 hover:prose-a:text-cyan-300 max-w-none space-y-8">
                {children}
            </div>
        </div>
      </div>
    </main>
  );
};

export const LegalSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <AnimatedSection>
        <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
        {children}
    </AnimatedSection>
);

export const PlainEnglishSummary = ({ children }: { children: React.ReactNode }) => (
    <div className="my-6 p-4 border-l-4 border-cyan-400 bg-gray-900/50 rounded-r-lg">
        <p className="font-semibold text-cyan-300 text-sm uppercase tracking-wider">In Plain English</p>
        <p className="mt-2 text-gray-300 italic">{children}</p>
    </div>
);