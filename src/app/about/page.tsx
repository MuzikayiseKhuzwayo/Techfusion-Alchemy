// app/about/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Lightbulb, ShieldCheck, HeartHandshake } from 'lucide-react';

import { AnimatedSection } from '@/components/magic/animated-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ValueCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="bg-gray-900/50 border border-cyan-400/20 backdrop-blur-sm rounded-2xl p-8 text-center flex flex-col items-center">
    <div className="mb-4 text-cyan-400">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

export default function AboutPage() {
  return (
    <main className="bg-[#000010] text-gray-200 overflow-x-hidden">
      {/* Page Hero */}
      <AnimatedSection className="pt-32 pb-20 text-center relative">
        <div className="absolute inset-0 h-full w-full bg-[#000010] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About TechFusion Alchemy
          </motion.h1>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We are the architects of efficiency, the engineers of growth, and the partners in your automated success.
          </motion.p>
        </div>
      </AnimatedSection>
      
      {/* Our Story & Vision */}
      <AnimatedSection className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-white mb-4">Our Genesis & Trajectory</h2>
              <p className="text-gray-400 mb-4">
                TechFusion Alchemy was founded with a singular vision: to dismantle the inefficiencies that stifle business growth. We saw countless companies shackled by manual processes and untapped data. Our mission became to forge bespoke AI and automation systems that not only streamline operations but fundamentally revolutionise how businesses acquire clients and scale.
              </p>
              <p className="text-gray-400">
                Our trajectory is aimed at being the definitive leader in full-stack automation, continuously pushing the boundaries of what's possible with AI agents, intelligent workflows, and predictive analytics to empower our clients' futures.
              </p>
            </div>
            <motion.div 
                className="relative h-96 w-full rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
            >
                <Image 
                    src="https://picsum.photos/600/400?random=10" // Consider a more abstract or team-related image
                    alt="Our Vision" 
                    layout="fill" 
                    objectFit="cover"
                    className="opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000010] via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Values */}
      <AnimatedSection className="py-20 sm:py-28 bg-grid-white/[0.05]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-center mb-12 text-white">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ValueCard icon={<Lightbulb size={40} />} title="Radical Innovation">
              We don’t just use tools; we invent solutions. We embrace new technologies to create systems that are not just better, but revolutionary.
            </ValueCard>
            <ValueCard icon={<ShieldCheck size={40} />} title="Unyielding Reliability">
              Our systems are the bedrock of your operations. We build robust, scalable, and dependable automations you can trust to perform 24/7.
            </ValueCard>
            <ValueCard icon={<HeartHandshake size={40} />} title="Client-Centric Alchemy">
              Your goals are our blueprint. We work as true partners, deeply understanding your business to transform your specific needs into tangible results.
            </ValueCard>
          </div>
        </div>
      </AnimatedSection>

       {/* CTA Section */}
       <AnimatedSection className="py-20 text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Ready to Build Your Future?</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Let's discuss how our automated systems can transform your business from the ground up.</p>
                <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/50">
                    <Link href="/contact">Start the Conversation</Link>
                </Button>
            </div>
       </AnimatedSection>
    </main>
  );
}