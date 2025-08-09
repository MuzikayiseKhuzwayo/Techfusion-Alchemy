// components/magic/animated-bento-grid.tsx
"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoGridItem {
  title: string;
  description: string;
  className?: string;
  icon?: React.ReactNode;
}

export const AnimatedBentoGrid = ({ items }: { items: BentoGridItem[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className={cn(
            "relative group flex flex-col justify-between p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10",
            item.className
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(0,255,255,0.1),_transparent_30%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="mb-3 text-cyan-400">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};