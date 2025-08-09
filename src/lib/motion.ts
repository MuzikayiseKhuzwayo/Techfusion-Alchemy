// lib/motion.ts
import { Variants } from "framer-motion";

export const fadeIn = (direction: 'up' | 'down' = 'up', delay: number = 0): Variants => ({
  hidden: {
    y: direction === 'up' ? 20 : -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeOut",
    },
  },
});

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};