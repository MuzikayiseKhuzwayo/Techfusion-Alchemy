// app/page.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  BrainCircuit,
  Bot,
  Users,
  Target,
  Rocket,
  Wand2,
  PackageCheck,
  Zap,
  LayoutGrid,
  HeartHandshake,
  Scaling,
} from "lucide-react";

// Import our new magic components
import { HeroSection } from "@/components/magic/hero-section";
import { AnimatedSection } from "@/components/magic/animated-section";
import { InfiniteMovingLogos } from "@/components/magic/infinite-moving-logos";
import { AnimatedBentoGrid } from "@/components/magic/animated-bento-grid";
import { ContactSection } from "@/components/magic/contact-section";

// Keep existing imports for shared components if needed elsewhere
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const offeringsRef = useRef<HTMLDivElement>(null);
  const contactUsRef = useRef<HTMLDivElement>(null);

  const scrollToOfferings = () => offeringsRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContactUs = () => contactUsRef.current?.scrollIntoView({ behavior: 'smooth' });

  const offerings = [
    { icon: <Target className="w-8 h-8 text-cyan-400" />, title: "Lead Generation", textContent: "AI scrapes targeted leads from social media and online platforms using custom filters and precision targeting." },
    { icon: <Users className="w-8 h-8 text-cyan-400" />, title: "Lead Qualification", textContent: "Automated smart forms + enriched data profiles. Every lead is scored, segmented, and sorted instantly." },
    { icon: <HeartHandshake className="w-8 h-8 text-cyan-400" />, title: "Lead Nurturing", textContent: "Automated personalised emails, dynamic AI avatars in Loom-style videos, and intelligent follow-up flows." },
    { icon: <Bot className="w-8 h-8 text-cyan-400" />, title: "Lead Conversion", textContent: "AI-powered voice bots handle inbound and outbound calls with real-time objection handling + scheduling." },
    { icon: <Zap className="w-8 h-8 text-cyan-400" />, title: "Sales Automation", textContent: "Call routing, CRM updates, pipeline triggers — all automated. Human reps only step in to close." },
    { icon: <PackageCheck className="w-8 h-8 text-cyan-400" />, title: "Fulfillment", textContent: "Orders, onboarding, task distribution — all handled by integrated systems the moment a deal closes." },
  ];

  const whyUsItems = [
    { icon: <Wand2 className="h-6 w-6" />, title: "End-to-End Integration", description: "No random automations. We build full systems that talk to each other and scale with you.", className: "md:col-span-2" },
    { icon: <BrainCircuit className="h-6 w-6" />, title: "Real AI Integration", description: "We build with advanced AI agents, LLMs, voice bots, and visual avatars — not just simple workflows." },
    { icon: <LayoutGrid className="h-6 w-6" />, title: "Custom-Built For You", description: "We don’t just give you templates. We build tailored systems for your offer, funnel, and sales process." },
    { icon: <Scaling className="h-6 w-6" />, title: "Built to Convert", description: "Our automations aren’t just pretty—they close deals. Speed. Personalization. Follow-up. Done for you.", className: "md:col-span-2" },
  ];
  
  const logos = [
    {
      id: 1,
      name: 'n8n',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/n8n.avif',
      description: 'We’ll turn your scattered tools into a symphony of automation—n8n lets us build custom workflows that think, act, and scale with your business.',
    },
    {
      id: 2,
      name: 'Make',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/make.png',
      description: 'Imagine your entire business running on autopilot—Make helps us link your apps into seamless flows that eliminate manual work.',
    },
    {
      id: 3,
      name: 'ChatGPT',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/openai.png',
      description: 'We’ll give your brand a voice that never sleeps—ChatGPT powers intelligent agents that write, respond, and adapt to your audience.',
    },
    {
      id: 4,
      name: 'ElevenLabs',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/elevenlabs.png',
      description: 'Want your automations to speak with emotion? ElevenLabs lets us generate lifelike voiceovers that connect, convert, and guide.',
    },
    {
      id: 5,
      name: 'HeyGen',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/heygen.png',
      description: 'We’ll turn your scripts into avatar-led videos—HeyGen helps you scale client updates, training, and marketing with a human touch.',
    },
    {
      id: 6,
      name: 'GoHighLevel',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/highlevel.jpg',
      description: 'From lead capture to automated follow-ups—GoHighLevel lets us build full-stack funnels that run while you sleep.',
    },
    {
      id: 7,
      name: 'Notion',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/notion.png',
      description: 'We’ll turn your chaos into clarity—Notion becomes your living workspace, updated by agents that document, organize, and sync your knowledge.',
    },
    {
      id: 8,
      name: 'QuickBooks',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/quickbooks.svg',
      description: 'No more chasing invoices—QuickBooks automations keep your finances flowing, synced, and stress-free.',
    },
    {
      id: 9,
      name: 'Twilio',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/twilio.png',
      description: 'We’ll help you speak to your customers at scale—Twilio powers automated SMS, voice, and WhatsApp flows that feel personal.',
    },
    {
      id: 10,
      name: 'Airtable',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/airtable.png',
      description: 'We’ll build you a custom backend without the dev overhead—Airtable lets us track, trigger, and transform your data in real time.',
    },
    {
      id: 11,
      name: 'Google Apps',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/google.jpg',
      description: 'Your inbox, calendar, and docs—automated. We use Google Apps to streamline your daily grind into intelligent workflows.',
    },
    {
      id: 12,
      name: 'LinkedIn',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/linkedin.png',
      description: 'We’ll help you extract leads while you sleep—LinkedIn automations surface high-value profiles and trigger outreach at scale.',
    },
    {
      id: 13,
      name: 'Calendly',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/calendly.png',
      description: 'No more back-and-forth—Calendly automations handle bookings, reminders, and CRM syncs so you can focus on the meeting, not the scheduling.',
    },
    {
      id: 14,
      name: 'Monday',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/monday.png',
      description: 'We’ll build you a CRM that works like a team member—Monday lets us automate sales actions, track interactions, and trigger follow-ups.',
    },
    {
      id: 15,
      name: 'Microsoft',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/microsoft.avif',
      description: 'From backend logic to cloud functions—Microsoft tools help us scale your systems with enterprise-grade reliability.',
    },
    {
      id: 16,
      name: 'Supabase',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/supabase.webp',
      description: 'We’ll build your app’s brain—Supabase gives us secure, scalable databases with real-time sync and user auth baked in.',
    },
    {
      id: 17,
      name: 'Stripe',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/stripe.png',
      description: 'We’ll automate your revenue engine—Stripe handles payments, subscriptions, and invoicing with zero friction.',
    },
    {
      id: 18,
      name: 'Paystack',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/paystack.png',
      description: 'Sell across Africa with ease—Paystack automations help you accept payments, track revenue, and grow without borders.',
    },
    {
      id: 19,
      name: 'PayPal',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/paypal.png',
      description: 'We’ll simplify your global transactions—PayPal lets us automate checkout, refunds, and recurring payments with trust.',
    },
    {
      id: 20,
      name: 'Hubspot',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/hubspot.png',
      description: 'We’ll turn cold leads into loyal clients—Hubspot automations nurture, convert, and update your CRM without lifting a finger.',
    },
    {
      id: 21,
      name: 'Pipedrive',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/pipedrive.jpg',
      description: 'We’ll help you close deals faster—Pipedrive automates pipeline updates, activity logging, and sales nudges.',
    },
    {
      id: 22,
      name: 'Clickup',
      src: 'https://storage.googleapis.com/techfusion-alchemy-bucket/alchemy/alchemy/clickup.jpg',
      description: 'We’ll make your projects run themselves—Clickup automations assign tasks, track progress, and keep your team aligned.',
    },
  ];
  

  return (
    <main className="bg-[#000010] text-gray-200 overflow-x-hidden">
      <HeroSection scrollToOfferings={scrollToOfferings} />

      <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
          You're Losing Time, Leads, and Sales.
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-400">
          Most businesses run on manual effort, missed follow-ups, and leaky funnels. You're bleeding potential, but the tools to fix it already exist. We build the systems that stop the leaks and start the flood.
        </p>
      </AnimatedSection>

      <div ref={offeringsRef} id="offerings">
        <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-center mb-4 text-white">Our Offerings</h2>
          <p className="text-lg text-gray-400 text-center mb-12">Every piece of your business, fully integrated and optimised.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering) => (
              <Card key={offering.title} className="bg-gray-900/50 border border-cyan-400/20 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-2 transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  {offering.icon}
                  <CardTitle className="text-xl font-semibold text-white">{offering.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{offering.textContent}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection className="py-20 text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Ready to Make Your Workflows Agentic?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Let's discuss how our automated systems can transform your business from the ground up.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/50">
                  <Link href="/contact">Start the Conversation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-gray-600 text-gray-300 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300">
                  <Link href="https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes" target="_blank" rel="noopener noreferrer">
                    Book a Free Demo
                  </Link>
                </Button>
              </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-center mb-12 text-white">Why TechFusion Alchemy?</h2>
        <AnimatedBentoGrid items={whyUsItems} />
      </AnimatedSection>

      <AnimatedSection className="py-20 sm:py-28" id="why-us">
         <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-center mb-12 text-white">Our Technology Stack</h2>
         <InfiniteMovingLogos items={logos} direction="right" speed="slow" />
      </AnimatedSection>
      
      <AnimatedSection className="py-20 text-center">
          <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Position Yourself for the Future of AI.</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Let's discuss how our automated systems can transform your business from the ground up.</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-cyan-500/50">
                  <Link href="/contact">Start the Conversation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-gray-600 text-gray-300 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300">
                  <Link href="https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes" target="_blank" rel="noopener noreferrer">
                    Book a Free Demo
                  </Link>
                </Button>
              </div>
          </div>
      </AnimatedSection>
    </main>
  );
}