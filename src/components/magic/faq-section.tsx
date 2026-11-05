// src/components/magic/faq-section.tsx
"use client";

import React from "react";
import { AnimatedSection } from "./animated-section";
import { FAQ_ITEMS } from "@/components/seo/structured-data";
import { HelpCircle, ChevronDown } from "lucide-react";

export const FAQSection = () => {
  return (
    <section id="faq" className="bg-black border-t border-zinc-900">
      <AnimatedSection className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-zinc-300" />
            <span>Technical &amp; Commercial FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] text-white text-balance">
            Frequently Asked Engineering Questions
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed font-normal text-pretty">
            Direct answers on our 5-Day Pilot Sprint, deterministic n8n + Supabase architecture, POPIA/GDPR data governance, and IP ownership.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => (
            <details
              key={idx}
              open={idx === 0}
              className="group rounded-2xl border border-zinc-800/80 bg-zinc-950/80 hover:border-zinc-700 transition-all duration-200 p-5 sm:p-6"
            >
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none text-left">
                <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                  {item.question}
                </h3>
                <span className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-open:rotate-180 group-open:text-white transition-transform duration-200 shrink-0 mt-0.5">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-zinc-800/80 text-sm text-zinc-300 leading-relaxed font-sans">
                {item.answer}
              </div>
            </details>
          ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};
