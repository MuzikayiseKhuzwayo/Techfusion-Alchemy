// components/layout/TechfusionLogo.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "navbar" | "hero" | "footer" | "iconOnly" | "stacked";
  showDivisionBadge?: boolean;
}

export const AutomataIcon = ({ 
  className = "w-7 h-7",
  priority = false 
}: { 
  className?: string;
  priority?: boolean;
}) => (
  <Image
    src="/techfusion_automata_jpg_nobg.png"
    alt="Techfusion Automata Logo"
    width={96}
    height={96}
    priority={priority}
    className={cn(
      "shrink-0 object-contain aspect-square transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(255,255,255,0.22)]",
      className
    )}
  />
);

export const TechfusionLogo = ({ 
  className, 
  variant = "navbar", 
  showDivisionBadge = true 
}: LogoProps) => {
  if (variant === "iconOnly") {
    return (
      <Link href="/" className={cn("inline-flex items-center justify-center group", className)}>
        <AutomataIcon className={cn("w-8 h-8", className)} />
      </Link>
    );
  }

  if (variant === "stacked") {
    return (
      <Link href="/" className={cn("flex flex-col items-center text-center group", className)}>
        <AutomataIcon className="w-14 h-14 mb-3" />
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-2xl tracking-tight text-white">TECHFUSION</span>
          <span className="font-light text-2xl tracking-wider text-zinc-400">AUTOMATA</span>
        </div>
        {showDivisionBadge && (
          <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-700/70 text-[10px] font-mono uppercase tracking-widest text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 inline-block animate-pulse"></span>
            Alchemy Division
          </div>
        )}
      </Link>
    );
  }

  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)}>
      <AutomataIcon 
        className={variant === "footer" ? "w-9 h-9" : "w-8 h-8 sm:w-9 sm:h-9"} 
        priority={variant === "navbar"} 
      />
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-zinc-200 transition-colors">
            TECHFUSION
          </span>
          <span className="font-light text-lg sm:text-xl tracking-wide text-zinc-400">
            AUTOMATA
          </span>
        </div>
        {showDivisionBadge && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase">
              Alchemy Division
            </span>
            <span className="text-[8px] font-mono text-zinc-300 px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800">
              AI & Automation
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};
