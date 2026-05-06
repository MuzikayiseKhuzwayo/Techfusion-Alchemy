// components/layout/Footer.tsx
"use client";

import Link from 'next/link';
import { ArrowUp } from "lucide-react";
import { AnimatedSection } from '../magic/animated-section';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatedSection className="bg-[#000010] text-gray-400 border-t border-white/10">
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand and Tagline */}
          <div className="md:col-span-4">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              TechFusion Alchemy
            </Link>
            <p className="mt-2 text-sm max-w-xs">
              Simplify. Scale. Succeed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/#offerings" className="hover:text-cyan-400 transition-colors">Our Offerings</Link></li>
              <li><Link href="/#why-us" className="hover:text-cyan-400 transition-colors">Why Choose Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-white mb-4">Let Us Grow Your Stack</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">Contact Us →</a></li>
              <li>
                <Link href="https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes" target="_blank" rel="noopener noreferrer" className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">Book a Demo →</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p suppressHydrationWarning>© {new Date().getFullYear()} TechFusion Alchemy. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <button onClick={scrollToTop} className="p-2 rounded-full bg-white/10 hover:bg-cyan-400/20 hover:text-white transition-all" aria-label="Scroll to top">
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>
    </AnimatedSection>
  );
};