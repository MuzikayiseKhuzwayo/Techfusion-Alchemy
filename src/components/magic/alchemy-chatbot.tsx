// components/magic/alchemy-chatbot.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Bot, MessageCircle, Send, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// --- Interfaces and Constants ---
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const CHATBOT_WEBHOOK_URL = 'https://n8n.techfusion-ventures.xyz/webhook/e3b2f9f2-9c17-4bbc-a21a-63a309109f63';
const SESSION_ID_KEY = 'chatbot_session_id';
const generateSessionId = (): string => `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

// --- Sub-components for a Cleaner Structure ---

const TypingIndicator = () => (
    <motion.div
        className="flex items-center space-x-1.5 p-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
    >
        <span className="text-gray-400 text-sm">Alchemy Assistant is thinking</span>
        <motion.div
            className="flex space-x-1"
            variants={{
                start: { transition: { staggerChildren: 0.1 } },
                end: {},
            }}
            initial="start"
            animate="end"
        >
            <motion.div className="h-1.5 w-1.5 bg-cyan-400 rounded-full" variants={{ start: { y: '0%' }, end: { y: ['0%', '-100%', '0%'] } }} transition={{ duration: 0.8, repeat: Infinity }} />
            <motion.div className="h-1.5 w-1.5 bg-cyan-400 rounded-full" variants={{ start: { y: '0%' }, end: { y: ['0%', '-100%', '0%'] } }} transition={{ duration: 0.8, repeat: Infinity }} />
            <motion.div className="h-1.5 w-1.5 bg-cyan-400 rounded-full" variants={{ start: { y: '0%' }, end: { y: ['0%', '-100%', '0%'] } }} transition={{ duration: 0.8, repeat: Infinity }} />
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
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center">
          <Bot className="w-5 h-5 text-cyan-200" />
        </div>
      )}
      <div
        className={cn(
          'max-w-[75%] rounded-2xl px-4 py-2.5 text-sm break-words',
          isBot
            ? 'bg-white/5 border border-white/10 text-gray-300 rounded-bl-lg'
            : 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white rounded-br-lg'
        )}
      >
        {message.text}
      </div>
       {!isBot && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
          <User className="w-5 h-5 text-gray-400" />
        </div>
      )}
    </motion.div>
  );
};

// --- Main Chatbot Component ---

export function AlchemyChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hello! I am the Alchemy Assistant. Ask me anything about our AI automation services or how we can help your business.', sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const sessionIdRef = useRef<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let storedSessionId = localStorage.getItem(SESSION_ID_KEY);
    if (!storedSessionId) {
      storedSessionId = generateSessionId();
      localStorage.setItem(SESSION_ID_KEY, storedSessionId);
    }
    sessionIdRef.current = storedSessionId;
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '' || isLoading || !sessionIdRef.current) return;

    const userMessage: Message = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    const messageToSend = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(CHATBOT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageToSend, sessionId: sessionIdRef.current }),
      });

      let botResponseText = "I seem to be having trouble connecting. Please try again shortly.";
      if (response.ok) {
        const data = await response.json();
        botResponseText = data?.data?.response || "I received a response I couldn't understand. Can you try rephrasing?";
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

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, type: 'spring' }}
        >
          <Button
            size="icon"
            className="group h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40"
            aria-label="Open Chat"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -15, 15, -15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut',
              }}
            >
              <MessageCircle className="h-8 w-8 transition-transform group-hover:scale-110" />
            </motion.div>
          </Button>
        </motion.div>
      </SheetTrigger>

      <SheetContent side="right" className="flex flex-col p-0 border-l-0 bg-[#0A0F1A]/80 backdrop-blur-xl text-gray-200 w-full sm:w-[440px] sm:max-w-full">
         <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20"></div>

        <header className="relative p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Bot className="h-6 w-6 text-cyan-400" />
            <h2 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Alchemy Assistant
            </h2>
          </div>
          <SheetClose className="p-1 rounded-full text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </header>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-6">
            <AnimatePresence>
              {messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
            </AnimatePresence>
             <AnimatePresence>
                {isLoading && <TypingIndicator />}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>
        </div>

        <footer className="relative p-4 border-t border-white/10">
          <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-3">
            <Input
              type="text"
              placeholder="Ask a question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-white/5 border-white/10 text-white placeholder-gray-500 rounded-full focus-visible:ring-1 focus-visible:ring-cyan-400 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent"
              disabled={isLoading}
              aria-label="Chat message input"
            />
            <Button type="submit" size="icon" className="rounded-full bg-cyan-500 hover:bg-cyan-600 text-white flex-shrink-0" disabled={isLoading || inputValue.trim() === ''}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </footer>
      </SheetContent>
    </Sheet>
  );
}