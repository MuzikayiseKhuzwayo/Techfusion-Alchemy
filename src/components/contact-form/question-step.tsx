"use client";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight } from 'lucide-react';

interface QuestionStepProps {
  question: string;
  type: 'text' | 'textarea' | 'email';
  value: string;
  onChange: (value: string) => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } },
};

export const QuestionStep = ({ question, type, value, onChange, onNext }: QuestionStepProps) => {
  const isInputValid = value.trim() !== '';

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && type !== 'textarea' && isInputValid) {
      e.preventDefault();
      onNext();
    }
  };

  const InputComponent = type === 'textarea' ? Textarea : Input;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.h2
        className="font-bold text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {question}
      </motion.h2>
      <motion.div variants={inputVariants}>
        <InputComponent
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-gray-900/50 border border-cyan-400/30 text-lg p-4 rounded-lg focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-300 h-auto"
          placeholder="Type your answer here..."
          rows={5}
        />
      </motion.div>
      <motion.div
        className="mt-8 flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInputValid ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <Button onClick={onNext} disabled={!isInputValid} size="lg">
          Next <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  );
};