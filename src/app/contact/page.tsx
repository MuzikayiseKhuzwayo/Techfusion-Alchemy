"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useFormStore, FormData } from '@/lib/store';
import { FormProgress } from '@/components/contact-form/form-progress';
import { QuestionStep } from '@/components/contact-form/question-step';
import { SummaryStep } from '@/components/contact-form/summary-step';

const questions = [
  { id: 'name', question: "Let's start with your name.", type: 'text' },
  { id: 'companyName', question: "What's the name of your company?", type: 'text' },
  { id: 'primaryGoal', question: 'What is your primary goal with automation?', type: 'text' },
  { id: 'biggestChallenge', question: 'Describe your biggest operational challenge right now.', type: 'textarea' },
  { id: 'estimatedLosses', question: 'How much money are you losing because of this one problem?', type: 'text' },
  { id: 'estimatedBudget', question: 'How much would you be willing to spend to solve it?', type: 'text' },
  { id: 'contactEmail', question: 'Finally, what’s the best email to reach you at?', type: 'email' },
];

const formVariants = {
  enter: { opacity: 0, y: 50 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

export default function ContactPage() {
  const router = useRouter();
  const { step, formData, setFormData, nextStep, goToStep, reset } = useFormStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form state on component mount to ensure a fresh start
  useEffect(() => {
    reset();
  }, [reset]);

  const handleNext = () => {
    nextStep();
  };
  
  const handleUpdateAndNext = (field: keyof FormData, value: string) => {
    setFormData({ [field]: value });
    // For a better UX, you might not auto-advance on textarea
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }
      const result = await response.json();
      console.log("Webhook response:", result);

      router.push('/contact/thank-you');
    } catch (error) {
      console.error('An error occurred:', error);
      alert('There was an error submitting your form. Please try again.');
      setIsSubmitting(false);
    }
  };

  const currentQuestion = questions[step];
  const isSummaryStep = step >= questions.length;

  return (
    <main className="bg-[#000010] text-gray-200 min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        {!isSummaryStep && <FormProgress currentStep={step} totalSteps={questions.length} />}
        
        <div className="relative min-h-[450px] sm:min-h-[400px] w-full">
          <AnimatePresence mode="wait">
            {isSummaryStep ? (
              <motion.div
                key="summary"
                variants={formVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full"
              >
                <SummaryStep
                  formData={formData}
                  onEdit={goToStep}
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                />
              </motion.div>
            ) : (
              <motion.div
                key={step}
                variants={formVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full"
              >
                <QuestionStep
                  question={currentQuestion.question}
                  type={currentQuestion.type as 'text' | 'textarea' | 'email'}
                  value={formData[currentQuestion.id as keyof FormData]}
                  onChange={(value) => setFormData({ [currentQuestion.id]: value })}
                  onNext={handleNext}
                  isLastQuestion={step === questions.length - 1}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-500"></footer>
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-500"></footer>
    </main>
  );
}