"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ThankYouPage() {
  return (
    <main className="bg-black text-zinc-200 min-h-screen flex items-center justify-center p-4">
      <motion.div
        className="text-center bg-zinc-950 border border-zinc-800 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-2xl max-w-xl relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_70%)] pointer-events-none" />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
          className="relative z-10"
        >
          <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-3 relative z-10">
          Inquiry Logged
        </h1>
        <p className="text-sm text-zinc-400 mb-8 max-w-md mx-auto leading-relaxed relative z-10 font-sans">
          Your pipeline specifications have been recorded. Muzi reviews incoming requests directly and will respond with technical feedback or scheduling confirmation within 24 business hours.
        </p>
        <Link href="/" passHref className="relative z-10">
          <Button size="lg" className="bg-white hover:bg-zinc-200 text-black rounded-full font-medium px-6 py-5 text-sm transition-all shadow-md">
            <Home className="mr-2 h-4 w-4" />
            Return to Alchemy Home
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}