// components/magic/hero-section.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { ArrowRight, ShieldCheck, CheckCircle2, Terminal, ExternalLink } from "lucide-react";

export const HeroSection = ({ scrollToOfferings }: { scrollToOfferings: () => void }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center text-center overflow-hidden pt-32 pb-20 bg-black">
      {/* Background Subtle Hairline Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,_rgba(0,0,0,0.8),_transparent)]"></div>
        <div
          className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"
        ></div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 max-w-5xl"
      >

        {/* Main Headline */}
        <motion.h1
          variants={fadeIn('down', 0.2)}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.18] sm:leading-[1.15] text-balance"
        >
          We are <span className="text-silver-gradient">Techfusion Alchemy</span>.{" "}
          <span className="block sm:inline">
            We design custom, reliable AI &amp; backend automation pipelines.
          </span>
        </motion.h1>

        {/* Subtitle / Positioning */}
        <motion.p
          variants={fadeIn('up', 0.4)}
          className="mt-5 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed font-normal text-pretty"
        >
          No agency bloat, no junior handoffs, and zero fragile &quot;no-code glue&quot;. We engineer production-grade n8n pipelines, structured LLM extraction engines, and resilient CRM backends built to withstand enterprise load.
        </motion.p>

        {/* Verified Badges Bar */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          className="mt-8 flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 text-xs text-zinc-400 font-mono"
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-1.5 px-3.5 py-1.5 rounded-2xl sm:rounded-full bg-zinc-950 border border-zinc-800 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
            <span className="text-zinc-300">
              Techfusion Automata (Pty) Ltd <span className="text-zinc-500">(Reg: 2026/399837/07)</span>
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-zinc-800">
            <Terminal className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            <a
              href="https://techfusion-ventures.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline decoration-zinc-700 underline-offset-4 transition-colors inline-flex items-center gap-1"
            >
              techfusion-ventures.xyz <ExternalLink className="w-3 h-3 text-zinc-500 shrink-0" />
            </a>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-zinc-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-zinc-200 shrink-0" />
            <a
              href="https://www.upwork.com/freelancers/~01690494e012631bd1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline decoration-zinc-700 underline-offset-4 transition-colors inline-flex items-center gap-1"
            >
              Upwork Verified ML Specialist <ExternalLink className="w-3 h-3 text-zinc-500 shrink-0" />
            </a>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          className="mt-10 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3.5 sm:gap-4 max-w-md sm:max-w-none mx-auto"
        >
          <Button
            asChild
            size="lg"
            className="group w-full sm:w-auto h-auto whitespace-normal text-center bg-white hover:bg-zinc-200 text-black font-semibold rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] transition-all duration-300 px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base"
          >
            <Link
              href="https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book an Architecture Session
              <ArrowRight className="ml-2 h-4 w-4 shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            onClick={scrollToOfferings}
            size="lg"
            variant="outline"
            className="w-full sm:w-auto h-auto whitespace-normal text-center bg-zinc-900/80 border-zinc-700 text-zinc-300 rounded-full hover:bg-zinc-800 hover:border-zinc-500 hover:text-white transition-all duration-300 px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-base"
          >
            Explore Production Architecture
          </Button>
        </motion.div>

        {/* Framing Micro-copy */}
        <motion.p
          variants={fadeIn('up', 0.7)}
          className="mt-5 text-xs text-zinc-500 font-mono"
        >
          30-minute technical audit: We map your bottlenecks and draft a concrete architecture diagram. Zero sales pressure.
        </motion.p>
      </motion.div>
    </section>
  );
};