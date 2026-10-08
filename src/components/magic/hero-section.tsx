// components/magic/hero-section.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = ({ scrollToOfferings }: { scrollToOfferings: () => void }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#000010] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,_rgba(0,0,0,0.6),_transparent)]"></div>
        <div 
          className="absolute inset-0 h-full w-full bg-[#000010] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        ></div>
      </div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4"
      >

        <motion.h1 
          variants={fadeIn('down', 0.2)}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400"
        >
          Full-Stack AI Automation
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            From First Click to Final Sale
          </span>
        </motion.h1>
        
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="mt-6 max-w-2xl mx-auto text-lg text-gray-400"
        >
          We build intelligent systems that scrape leads, nurture prospects with AI avatars, close deals with voice bots, and automate fulfillment. Ready to scale your business while you sleep?
        </motion.p>
        
        <motion.div 
          variants={fadeIn('up', 0.6)}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Button
            onClick={scrollToOfferings}
            size="lg"
            className="group w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Explore Our Systems
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-gray-600 text-gray-300 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300">
             <Link href="https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes" target="_blank" rel="noopener noreferrer">
              Book a Free Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
             </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};