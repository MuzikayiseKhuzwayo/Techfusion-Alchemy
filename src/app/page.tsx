
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useRef } from "react";
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Added Select imports
import Autoplay from 'embla-carousel-autoplay'
import React from "react";


export default function Home() {
  const offeringsRef = useRef<HTMLDivElement>(null);
  const contactUsRef = useRef<HTMLDivElement>(null);


  const scrollToOfferings = () => {
    offeringsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContactUs = () => {
    contactUsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const offerings = [
    {
      title: "Lead Generation",
      subtitle: "AI-powered lead scraping for targeted and precise audience engagement.",
      textContent: "AI scrapes targeted leads from social media and online platforms using custom filters and precision targeting.",
    },
    {
      title: "Lead Qualification",
      subtitle: "Automated smart forms combined with enriched data profiles for instant scoring and segmentation.",
      textContent: "Automated smart forms + enriched data profiles. Every lead is scored, segmented, and sorted instantly.",
    },
    {
      title: "Lead Nurturing",
      subtitle: "Personalized automated emails and dynamic AI avatars for engaging follow-up flows.",
      textContent: "Automated personalized emails, dynamic AI avatars in Loom-style videos, and intelligent follow-up flows.",
    },
    {
      title: "Lead Conversion",
      subtitle: "AI voice bots handling calls with real-time objection handling and scheduling.",
      textContent: "AI-powered voice bots handle inbound and outbound calls with real-time objection handling + scheduling.",
    },
    {
      title: "Sales Automation",
      subtitle: "Automated call routing, CRM updates, and pipeline triggers for seamless sales processes.",
      textContent: "Call routing, CRM updates, pipeline triggers — all automated. Human reps only step in to close.",
    },
    {
      title: "Fulfillment",
      subtitle: "Integrated systems automating orders, onboarding, and task distribution upon deal closure.",
      textContent: "Orders, onboarding, task distribution — all handled by integrated systems the moment a deal closes.",
    },
  ];

  const logos = [
    { id: 1, name: 'n8n', src: 'https://picsum.photos/100/50?random=23', description: 'Automate complex workflows with a visual, node-based interface. Perfect for connecting disparate APIs and services without extensive coding.' },
    { id: 2, name: 'Make', src: 'https://picsum.photos/100/50?random=24', description: 'Design, build, and automate visually. Link apps and services seamlessly to streamline repetitive tasks and processes.' },
    { id: 3, name: 'ChatGPT API', src: 'https://picsum.photos/100/50?random=25', description: 'Integrate powerful language models for content generation, chatbots, text analysis, and personalized communication automation.' },
    { id: 4, name: 'ElevenLabs', src: 'https://picsum.photos/100/50?random=26', description: 'Generate hyper-realistic, versatile AI speech. Ideal for automated voiceovers, personalized audio messages, and voice bots.' },
    { id: 5, name: 'HeyGen', src: 'https://picsum.photos/100/50?random=27', description: 'Create engaging AI avatar videos from scripts. Perfect for scalable video marketing, training materials, and automated client updates.' },
    { id: 6, name: 'Synthesia', src: 'https://picsum.photos/100/50?random=28', description: 'Produce professional AI videos with avatars from text. Automate video content creation for various business needs.' },
    { id: 7, name: 'Notion', src: 'https://picsum.photos/100/50?random=29', description: 'Centralise tasks, notes, and project management. Automate documentation, knowledge base updates, and team workflows.' },
    { id: 8, name: 'Airtable', src: 'https://picsum.photos/100/50?random=30', description: 'Build flexible databases and automate data handling. Ideal for custom CRM extensions, project tracking, and content management.' },
    { id: 9, name: 'Twilio', src: 'https://picsum.photos/100/50?random=31', description: 'Automate customer communications via SMS, voice, and WhatsApp. Integrate for automated reminders, notifications, and support.' },
    { id: 10, name: 'Puppeteer', src: 'https://picsum.photos/100/50?random=32', description: 'Automate browser actions for web scraping, testing, and form submissions. Essential for gathering data or interacting with non-API sites.' },
    { id: 11, name: 'Playwright', src: 'https://picsum.photos/100/50?random=33', description: 'Enable reliable end-to-end web automation and testing across multiple browsers. Great for robust scraping and interaction tasks.' },
    { id: 12, name: 'LinkedIn Scraper', src: 'https://picsum.photos/100/50?random=34', description: 'Automate the extraction of valuable lead data and profiles from LinkedIn for targeted outreach and market research.' },
    { id: 13, name: 'Calendly', src: 'https://picsum.photos/100/50?random=35', description: 'Streamline meeting scheduling by automating booking and reminders. Integrates with calendars and CRMs for efficiency.' },
    { id: 14, name: 'Custom CRMs', src: 'https://picsum.photos/100/50?random=36', description: 'Develop tailor-made CRM systems or automate existing ones to manage customer relationships, track interactions, and trigger sales actions.' },
    { id: 15, name: 'Firebase', src: 'https://picsum.photos/100/50?random=37', description: 'Leverage backend services to build scalable web/mobile apps. Automate database updates, authentication flows, and cloud functions.' },
    { id: 16, name: 'Supabase', src: 'https://picsum.photos/100/50?random=38', description: 'Utilise an open-source Firebase alternative for building secure apps. Automate database interactions, user management, and real-time features.' },
    { id: 17, name: 'Stripe', src: 'https://picsum.photos/100/50?random=39', description: 'Automate online payment processing, invoicing, and subscription management securely and efficiently.' },
    { id: 18, name: 'Paystack', src: 'https://picsum.photos/100/50?random=40', description: 'Automate payment acceptance across multiple channels in Africa, streamlining sales and revenue collection.' },
    { id: 19, name: 'PayPal', src: 'https://picsum.photos/100/50?random=41', description: 'Automate global online payment processing through a trusted platform, simplifying e-commerce transactions.' },
    { id: 20, name: 'Hubspot', src: 'https://picsum.photos/100/50?random=42', description: 'Automate marketing, sales, and customer service workflows. Integrate lead nurturing, email sequences, and CRM updates.' },
    { id: 21, name: 'Pipedrive', src: 'https://picsum.photos/100/50?random=43', description: 'Automate sales pipeline management, deal tracking, and activity logging for increased sales team efficiency.' },
    { id: 22, name: 'Clickup', src: 'https://picsum.photos/100/50?random=44', description: 'Automate project management, task assignments, and workflow triggers within a unified productivity platform.' },
  ];

  return (
    <div className="container mx-auto p-8">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Full-Stack AI Systems That Automate Your Entire Business — From First Click to Final Sale
        </h1>
        <div className="section-title-divider"></div>
        <p className="text-lg text-secondary mb-8 mt-10">
          From scraping leads off social media to automated AI sales calls and fulfillment... We build smart systems that scale your business while you sleep.
        </p>
        <p className="text-md text-foreground">
          TechFusion Alchemy is an automation agency dedicated to transforming
          businesses through innovative AI solutions. Our mission is to streamline
          operations, enhance productivity, and drive growth for our clients.
        </p>
        <div className="flex justify-center mt-8 space-x-4">
          <Button variant="accent" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/0 transition-colors duration-300" onClick={scrollToOfferings}>
            Find Out More
          </Button>
          <Button variant="accent" className="border-2 border-accent text-accent-foreground bg-accent hover:bg-opacity-0 transition-colors duration-300">
             <Link href="/demo">Book a Demo</Link>
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">You're Losing Time, Leads, and Sales Every Day.</h2>
        <div className="section-title-divider"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Our Story */}
          <div className="flex items-center justify-center">
            <p className="text-md text-foreground mb-4 text-center">
              Most businesses still run on manual effort, missed follow-ups, and messy sales funnels.
              Speed to lead? Too slow. Follow-ups? Forgotten. Closing? Chaotic. Fulfillment? Overwhelming.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://picsum.photos/500/300?random=1"
              alt="Frustrated business process"
              width={500}
              height={300}
              className="rounded-[50px] shadow-md"
            />
          </div>

          {/* Our Expertise */}
          <div className="flex items-center justify-center">
            <Image
              src="https://picsum.photos/500/300?random=2"
              alt="AI and Automation tools"
              width={500}
              height={300}
              className="rounded-[50px] shadow-md"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-md text-foreground mb-4 text-center">
              You're bleeding potential — but the tools to fix it already exist.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="mb-20" ref={offeringsRef}>
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">Our Offerings</h2>
         <div className="section-title-divider"></div>
        <p className="text-md text-foreground mb-8 text-center mt-10">
              Every piece of your business, fully integrated. Fully automated. Fully optimized.
            </p>

        <div className="flex flex-col gap-8 mt-10">
          {offerings.map((offering, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-[#0A2540]">{offering.title}</CardTitle>
                 <CardDescription>
                  {offering.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between">
                <p className="text-md text-foreground mb-4">
                  {offering.textContent}
                </p>
                <div className="flex justify-center">
                  <Button variant="link" asChild>
                    <Link href="/detailed-offerings" className="text-accent">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why TechFusion Alchemy? Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">Why TechFusion Alchemy?</h2>
         <div className="section-title-divider"></div>
        <p className="text-md text-foreground mb-4 text-center mt-10">
          Stop the leaks, start the flood: Why smart founders choose our systems to convert at scale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-[#0A2540]">End-to-End Integration</CardTitle>
            </CardHeader>
            <CardContent>
              No random automations. We build full systems that talk to each other and scale with you.
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-[#0A2540]">Real AI, Not Just Zapier</CardTitle>
            </CardHeader>
            <CardContent>
              We build with advanced AI agents, LLMs, voice bots, and visual avatars — not just simple workflows.
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-[#0A2540]">Custom-Built For Your Business</CardTitle>
            </CardHeader>
            <CardContent>
              We don’t just give you templates. We build tailored systems for your offer, funnel, and sales process.
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-[#0A2540]">Built to Convert, Not Just Save Time</CardTitle>
            </CardHeader>
            <CardContent>
              Our automations aren’t just pretty—they close deals. Speed. Personalization. Follow-up. Done for you.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">
          Client Success Stories
        </h2>
        <div className="section-title-divider"></div>
        <Card className="mt-10 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-[#0A2540]">Strategic Monetisation for Social Media</CardTitle>
            <CardDescription>
              Empowering a client with a robust X and LinkedIn strategy.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-md text-foreground mb-4">
              "TechFusion Alchemy didn't just automate tasks; they crafted a complete monetisation strategy for my presence on X and LinkedIn. This tailored approach has been instrumental in acquiring new clients and growing my business." - [Client Name/Business Name]
            </p>
             <div className="flex justify-center">
                  <Button variant="link" asChild>
                    <Link href="#" className="text-accent">
                      Read More
                    </Link>
                  </Button>
                </div>
          </CardContent>
        </Card>
        {/* Merged Engagement Section */}
        <div className="mt-10 text-center">
          <p className="text-lg text-foreground mb-4">Ready to transform your business? Take the next step.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="accent" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/0 transition-colors duration-300">
               <Link href="/demo">Book a Demo</Link>
            </Button>
            <Button variant="secondary" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/20 transition-colors duration-300">Sign Up for Newsletter</Button>
            <Button variant="ghost" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/20 transition-colors duration-300" onClick={scrollToContactUs}>Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Explore Our Stack Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">Explore Our Stack</h2>
         <div className="section-title-divider"></div>
        <p className="text-md text-foreground mb-4 text-center mt-10">
           Leveraging cutting-edge tools to build powerful, bespoke automation solutions.
        </p>

        <div className="grid grid-cols-4 md:grid-cols-6 gap-4 mt-10">
          {logos.map((logo) => (
            <TooltipProvider key={logo.id}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <div className="relative group overflow-hidden rounded-md border p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center aspect-square">
                    <Image
                      src={logo.src}
                      width={60}
                      height={30}
                      alt={logo.name}
                      className="object-contain transition-transform duration-300 group-hover:scale-110 mb-2"
                    />
                    <p className="text-center text-xs font-medium">{logo.name}</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top" align="center">
                  {logo.description}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </section>



      {/* Contact Us Section */}
      <section className="mb-20" ref={contactUsRef}>
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">Let’s Design Your Fully Automated AI Business System</h2>
         <div className="section-title-divider"></div>
         <p className="text-md text-foreground mb-4 text-center mt-10">
          Here's how we do things: Discovery Call → Proposal → Onboarding → Build!
         </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="border rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <form className="space-y-4">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium text-foreground mb-1" htmlFor="firstName">
                     First Name
                   </label>
                   <Input id="firstName" type="text" placeholder="First Name" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-foreground mb-1" htmlFor="lastName">
                     Last Name
                   </label>
                   <Input id="lastName" type="text" placeholder="Last Name" />
                 </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1" htmlFor="phone">
                    Phone
                  </label>
                  <Input id="phone" type="tel" placeholder="Phone Number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1" htmlFor="email">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your Email" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1" htmlFor="businessName">
                    Business Name
                  </label>
                  <Input id="businessName" type="text" placeholder="Your Business Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1" htmlFor="website">
                    Website
                  </label>
                  <Input id="website" type="url" placeholder="https://yourwebsite.com" />
                </div>
               </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1" htmlFor="services">
                  What Services Are You Interested In?
                </label>
                <Textarea id="services" placeholder="e.g., Lead Generation, Sales Automation" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium text-foreground mb-1" htmlFor="budget">
                     Budget
                   </label>
                   <Select>
                     <SelectTrigger id="budget">
                       <SelectValue placeholder="Select Budget Range" />
                     </SelectTrigger>
                     <SelectContent>
                       <SelectItem value="2k-5k">$2k - $5k</SelectItem>
                       <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                       <SelectItem value="10k-20k">$10k - $20k</SelectItem>
                       <SelectItem value="20k+">$20k+</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1" htmlFor="referral">
                    How did you hear about us?
                  </label>
                  <Input id="referral" type="text" placeholder="e.g., LinkedIn, Referral" />
                </div>
               </div>
              <Button variant="primary" className="bg-accent text-foreground border-2 border-accent hover:bg-opacity-0 transition-colors duration-300">Submit</Button>
            </form>
          </div>
          <div>
            <Image
              src="https://picsum.photos/500/300?random=45" // Replace with actual image
              alt="Business meeting or planning"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

