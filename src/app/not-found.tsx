"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#000010] text-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <h1 className="text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          System Not Found
        </h2>
        <p className="text-gray-400 mb-8 text-sm sm:text-base">
          The page you are looking for has either been moved, deleted, or doesn't exist. Let's get you back to building automated workflows.
        </p>
        <Button
          asChild
          size="lg"
          className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
        >
          <Link href="/">Return to Dashboard</Link>
        </Button>
      </motion.div>
    </div>
  );
}
