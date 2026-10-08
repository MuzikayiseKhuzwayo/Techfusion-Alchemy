// components/magic/alchemy-chatbot.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { MessageCircle, Send, X, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AutomataIcon } from '@/components/layout/TechfusionLogo';

// --- Interfaces and Constants ---
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const CHATBOT_WEBHOOK_URL = '/api/assistant';
const SESSION_ID_KEY = 'chatbot_session_id';
const HAS_POPPED_KEY = 'techfusion_chat_auto_popped';
const generateSessionId = (): string => `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

const QUICK_STARTERS = [
  "Automate Inbound Leads (<45s Speed)",
  "Vision Document & Invoice Parsing",
  "How does the $850 Pilot Sprint work?",
  "Book a 30-min Architecture Session"
];

// --- Sub-components for a Cleaner Structure ---

const TypingIndicator = () => (
    <motion.div
        className="flex items-center space-x-1.5 p-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
    >
        <span className="text-zinc-400 text-xs font-mono">Techfusion Assistant is thinking</span>
        <motion.div
            className="flex space-x-1"
            variants={{
                start: { transition: { staggerChildren: 0.1 } },
                end: {},
            }}
            initial="start"
            animate="end"
        >
            <motion.div className="h-1.5 w-1.5 bg-zinc-400 rounded-full" variants={{ start: { y: '0%' }, end: { y: ['0%', '-100%', '0%'] } }} transition={{ duration: 0.8, repeat: Infinity }} />
            <motion.div className="h-1.5 w-1.5 bg-zinc-400 rounded-full" variants={{ start: { y: '0%' }, end: { y: ['0%', '-100%', '0%'] } }} transition={{ duration: 0.8, repeat: Infinity }} />
            <motion.div className="h-1.5 w-1.5 bg-zinc-400 rounded-full" variants={{ start: { y: '0%' }, end: { y: ['0%', '-100%', '0%'] } }} transition={{ duration: 0.8, repeat: Infinity }} />
        </motion.div>
    </motion.div>
);

const ChatMessage = ({ message }: { message: Message }) => {
  const isBot = message.sender === 'bot';
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={cn('flex items-end gap-3', isBot ? 'justify-start' : 'justify-end')}
    >
      {isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center p-1 overflow-hidden">
          <AutomataIcon className="w-5 h-5" />
        </div>
      )}
      <div
        className={cn(
          'max-w-[82%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm break-words font-sans leading-relaxed whitespace-pre-wrap',
          isBot
            ? 'bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-bl-sm shadow-md'
            : 'bg-white text-black font-medium rounded-br-sm shadow-md'
        )}
      >
        {message.text}
      </div>
       {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
          <User className="w-4 h-4 text-zinc-300" />
        </div>
      )}
    </motion.div>
  );
};

// --- Main Chatbot Component ---

export function AlchemyChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "Hey there! 👋 I'm the Techfusion Automata Assistant.\n\nWhat's the biggest operational bottleneck or repetitive manual task slowing down your team right now? Tell me about your workflow—I can outline an immediate technical architecture, calculate your ROI on a 5-day Pilot Sprint ($850), or connect you with Muzikayise.", 
      sender: 'bot' 
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const sessionIdRef = useRef<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize session ID
  useEffect(() => {
    let storedSessionId = localStorage.getItem(SESSION_ID_KEY);
    if (!storedSessionId) {
      storedSessionId = generateSessionId();
      localStorage.setItem(SESSION_ID_KEY, storedSessionId);
    }
    sessionIdRef.current = storedSessionId;
  }, []);

  // Pop up and try to start a conversation as soon as someone steps on the page
  useEffect(() => {
    const hasPopped = sessionStorage.getItem(HAS_POPOED_KEY(HAS_POPPED_KEY));
    if (!hasPopped) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem(HAS_POPPED_KEY, 'true');
      }, 1400);

      return () => clearTimeout(timer);
    }
  }, []);

  function HAS_POPOED_KEY(key: string) {
    return key;
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendUserMessage = async (text: string) => {
    if (text.trim() === '' || isLoading) return;

    const userMessage: Message = { id: Date.now(), text, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(CHATBOT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            message: text, 
            history: messages.map(m => ({ role: m.sender, text: m.text })) 
        }),
      });

      let botResponseText = "I seem to be having trouble connecting. Please try again shortly.";
      if (response.ok) {
        const data = await response.json();
        botResponseText = data?.response || "I received a response I couldn't understand. Can you try rephrasing?";
      }

      const botMessage: Message = { id: Date.now() + 1, text: botResponseText, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error('Chatbot API error:', error);
      const errorMessage: Message = { id: Date.now() + 1, text: "My apologies, I'm experiencing a technical issue. Please try again later.", sender: 'bot' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendUserMessage(inputValue);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          {/* Subtle invitation teaser when sheet is closed */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              onClick={() => setIsOpen(true)}
              className="hidden sm:flex cursor-pointer items-center gap-2 rounded-full border border-zinc-700 bg-zinc-950/90 backdrop-blur-md px-4 py-2 text-xs text-zinc-300 shadow-2xl hover:border-zinc-500 hover:text-white transition-all"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono">Have a bottleneck? Let&apos;s automate it</span>
            </motion.div>
          )}

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
          >
            <Button
              size="icon"
              className="relative group h-14 w-14 rounded-full bg-white hover:bg-zinc-200 text-black shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all"
              aria-label="Open Chat"
            >
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-black"></span>
              </span>
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: 'easeInOut',
                }}
              >
                <MessageCircle className="h-6 w-6 transition-transform group-hover:scale-110" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </SheetTrigger>

      <SheetContent side="right" className="flex flex-col p-0 border-l border-zinc-800 bg-black/95 backdrop-blur-2xl text-zinc-200 w-full sm:w-[460px] sm:max-w-full">
        <header className="relative p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center p-1 overflow-hidden">
              <AutomataIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold tracking-tight text-white">
                  Techfusion Automata Assistant
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400">
                  Online
                </span>
              </div>
              <p className="text-[10px] font-mono text-zinc-400">Direct Architecture & Lead Capture</p>
            </div>
          </div>
          <SheetClose className="p-1 rounded-full text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </header>

        <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4">
          <div className="space-y-4">
            <AnimatePresence>
              {messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
            </AnimatePresence>
            <AnimatePresence>
              {isLoading && <TypingIndicator />}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Quick reply suggestions to trigger immediate conversation */}
          {messages.length <= 2 && !isLoading && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-2"
            >
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 mb-2">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Suggested Questions:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {QUICK_STARTERS.map((starter) => (
                  <button
                    key={starter}
                    onClick={() => sendUserMessage(starter)}
                    className="text-[11px] font-mono bg-zinc-900/90 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white px-3 py-1.5 rounded-xl text-left transition-all hover:bg-zinc-800"
                  >
                    {starter}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <footer className="relative p-4 border-t border-zinc-800 bg-zinc-950">
          <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-3">
            <Input
              type="text"
              placeholder="Describe your bottleneck or drop your email..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-zinc-900 border-zinc-800 text-white placeholder-zinc-500 rounded-full focus-visible:ring-1 focus-visible:ring-zinc-400 focus-visible:ring-offset-0 text-xs py-5 font-sans"
              disabled={isLoading}
              aria-label="Chat message input"
            />
            <Button 
              type="submit" 
              size="icon" 
              className="rounded-full bg-white hover:bg-zinc-200 text-black flex-shrink-0 h-10 w-10 shadow-[0_0_10px_rgba(255,255,255,0.2)]" 
              disabled={isLoading || inputValue.trim() === ''}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
          <div className="mt-2 text-[10px] text-center font-mono text-zinc-500">
            Powered by Gemini 2.5 Flash • 100% POPIA & GDPR Compliant
          </div>
        </footer>
      </SheetContent>
    </Sheet>
  );
}