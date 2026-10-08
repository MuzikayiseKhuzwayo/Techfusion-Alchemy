// components/layout/Header.tsx
"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TechfusionLogo } from './TechfusionLogo';

const navLinks = [
  { href: "/#solutions", label: "Solutions" },
  { href: "/#architecture", label: "Architecture" },
  { href: "/#case-studies", label: "Case Studies" },
  { href: "/#pricing", label: "Pilot Sprints" },
  { href: "/contact", label: "Contact" },
];

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="relative text-zinc-400 hover:text-white transition-colors duration-200 text-xs uppercase tracking-wider font-mono">
      {label}
      {isActive && (
        <motion.div
          layoutId="underline"
          className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        />
      )}
    </Link>
  );
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-zinc-800" : "bg-transparent border-b border-white/[0.04]"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Redesigned Parent-Aligned Logo */}
          <TechfusionLogo variant="navbar" />

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map(link => <NavLink key={link.href} {...link} />)}
            <Button asChild size="sm" className="bg-white hover:bg-zinc-200 text-black font-semibold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 text-xs px-5 py-2">
              <Link href="https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes" target="_blank" rel="noopener noreferrer">
                Architecture Session →
              </Link>
            </Button>
          </nav>

          {/* Medium Screen CTA */}
          <div className="hidden md:flex xl:hidden items-center gap-4">
            <Button asChild size="sm" className="bg-white hover:bg-zinc-200 text-black font-semibold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 text-xs px-4">
              <Link href="https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes" target="_blank" rel="noopener noreferrer">
                Architecture Session →
              </Link>
            </Button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-zinc-400 hover:text-white" aria-label="Toggle Menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-zinc-400 hover:text-white" aria-label="Toggle Menu">
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="xl:hidden absolute top-full left-0 w-full h-[calc(100vh-80px)] bg-black/95 backdrop-blur-2xl border-b border-zinc-800 p-8 flex flex-col items-center text-center overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 text-lg mt-6">
              {navLinks.map(link => (
                <motion.div key={link.href} variants={menuItemVariants}>
                  <Link href={link.href} onClick={() => setIsMenuOpen(false)} className="text-zinc-300 hover:text-white transition-colors font-mono uppercase tracking-wider text-sm">{link.label}</Link>
                </motion.div>
              ))}
            </nav>
            <motion.div variants={menuItemVariants} className="mt-8 w-full max-w-xs">
              <Button asChild size="lg" className="w-full bg-white hover:bg-zinc-200 text-black font-semibold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <Link href="https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                  Book Architecture Session
                </Link>
              </Button>
              <p className="text-xs text-zinc-500 mt-3 font-mono">
                30-Min Technical Audit with Muzikayise Khuzwayo
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};