"use client";
import { motion } from 'framer-motion';

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
}

export const FormProgress = ({ currentStep, totalSteps }: FormProgressProps) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-zinc-900 rounded-full h-1.5 my-8 border border-zinc-800">
      <motion.div
        className="bg-white h-1.5 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        initial={{ width: 0 }}
        animate={{ width: `${progressPercentage}%` }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
    </div>
  );
};