"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ThankYouPage() {
  return (
    <main className="bg-[#000010] text-gray-200 min-h-screen flex items-center justify-center p-4">
      <motion.div
        className="text-center bg-gray-900/50 border border-cyan-400/20 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-lg shadow-cyan-500/10 max-w-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
        >
          <CheckCircle className="h-20 w-20 text-cyan-400 mx-auto mb-6" />
        </motion.div>

        <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
          Thank You!
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto">
          Your inquiry has been received. We're reviewing your information and will be in touch within 24 hours to discuss the next steps.
        </p>
        <Link href="/" passHref>
          <Button size="lg">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}