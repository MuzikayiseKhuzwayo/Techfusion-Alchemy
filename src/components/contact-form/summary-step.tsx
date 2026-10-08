"use client";
import { motion } from 'framer-motion';
import { FormData } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Edit, Send } from 'lucide-react';

interface SummaryStepProps {
  formData: FormData;
  onEdit: (step: number) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

const summaryItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1 + 0.3, duration: 0.5 },
  }),
};

export const SummaryStep = ({ formData, onEdit, onSubmit, isSubmitting }: SummaryStepProps) => {
  const entries = Object.entries(formData);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Review Your Answers
      </motion.h2>
      <div className="space-y-4 bg-zinc-950 border border-zinc-800 p-6 sm:p-8 rounded-2xl shadow-xl">
        {entries.map(([key, value], index) => (
          <motion.div
            key={key}
            className="flex justify-between items-start pb-4 border-b border-zinc-800 last:border-b-0"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={summaryItemVariants}
          >
            <div>
              <p className="text-xs text-zinc-400 font-mono uppercase tracking-wider">{key.replace(/([A-Z])/g, ' $1')}</p>
              <p className="text-base sm:text-lg text-white font-medium mt-0.5">{value}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => onEdit(index)} className="text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-full font-mono text-xs">
              <Edit className="h-3.5 w-3.5 mr-1.5" /> Edit
            </Button>
          </motion.div>
        ))}
        <motion.div
            className="mt-10 flex justify-center z-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: entries.length * 0.1 + 0.5, duration: 0.5 }}
        >
            <Button onClick={onSubmit} disabled={isSubmitting} size="lg" className="bg-white hover:bg-zinc-200 text-black font-semibold rounded-full px-8 py-6 text-base shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
            {isSubmitting ? 'Submitting...' : 'Submit Automation Request'}
            {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
            </Button>
        </motion.div>
      </div>
    </div>
  );
};