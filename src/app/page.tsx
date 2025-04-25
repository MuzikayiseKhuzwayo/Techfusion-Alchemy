"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useRef } from "react";
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import React from "react";

export default function Home() {
  const offeringsRef = useRef(null);

  const scrollToOfferings = () => {
    offeringsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
    { id: 1, name: 'n8n', src: 'https://picsum.photos/100/50' },
    { id: 2, name: 'Make', src: 'https://picsum.photos/100/50' },
    { id: 3, name: 'ChatGPT API', src: 'https://picsum.photos/100/50' },
    { id: 4, name: 'ElevenLabs', src: 'https://picsum.photos/100/50' },
    { id: 5, name: 'HeyGen', src: 'https://picsum.photos/100/50' },
    { id: 6, name: 'Synthesia', src: 'https://picsum.photos/100/50' },
    { id: 7, name: 'Notion', src: 'https://picsum.photos/100/50' },
    { id: 8, name: 'Airtable', src: 'https://picsum.photos/100/50' },
    { id: 9, name: 'Twilio', src: 'https://picsum.photos/100/50' },
    { id: 10, name: 'Puppeteer', src: 'https://picsum.photos/100/50' },
    { id: 11, name: 'Playwright', src: 'https://picsum.photos/100/50' },
    { id: 12, name: 'LinkedIn Scraper', src: 'https://picsum.photos/100/50' },
    { id: 13, name: 'Calendly', src: 'https://picsum.photos/100/50' },
    { id: 14, name: 'Custom CRMs', src: 'https://picsum.photos/100/50' },
    { id: 15, name: 'Firebase', src: 'https://picsum.photos/100/50' },
    { id: 16, name: 'Supabase', src: 'https://picsum.photos/100/50' },
    { id: 17, name: 'Stripe', src: 'https://picsum.photos/100/50' },
    { id: 18, name: 'Paystack', src: 'https://picsum.photos/100/50' },
    { id: 19, name: 'PayPal', src: 'https://picsum.photos/100/50' },
    { id: 20, name: 'Hubspot', src: 'https://picsum.photos/100/50' },
    { id: 21, name: 'Pipedrive', src: 'https://picsum.photos/100/50' },
    { id: 22, name: 'Clickup', src: 'https://picsum.photos/100/50' },
  ];

  return (
    <div className="container mx-auto p-8">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Full-Stack AI Systems That Automate Your Entire Business — From First Click to Final Sale
        </h1>
        <div className="section-title-divider"></div>
        <p className="text-lg text-secondary mb-8">
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
          <Button variant="accent" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/0 transition-colors duration-300">
            <Link href="/demo">Book a Demo</Link>
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">You're Losing Time, Leads, and Sales Every Day.</h2>
        <div className="section-title-divider"></div>
        <div className="grid grid-cols-2 gap-8 mt-10">
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
              alt="Our Story"
              width={500}
              height={300}
              className="rounded-[50px] shadow-md"
            />
          </div>

          {/* Our Expertise */}
          <div className="flex items-center justify-center">
            <Image
              src="https://picsum.photos/500/300?random=2"
              alt="Our Expertise"
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
        <p className="text-md text-foreground mb-4 text-center">
              Every piece of your business, fully integrated. Fully automated. Fully optimized.
            </p>
        <div className="section-title-divider"></div>
        <div className="flex flex-col gap-8 mt-10">
          {offerings.map((offering, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-[#8A0000]">{offering.title}</CardTitle>
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
        <p className="text-md text-foreground mb-4 text-center">
          Stop the leaks, start the flood: Why smart founders choose our systems to convert at scale.
        </p>
        <div className="section-title-divider"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>End-to-End Integration</CardTitle>
            </CardHeader>
            <CardContent>
              No random automations. We build full systems that talk to each other and scale with you.
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Real AI, Not Just Zapier</CardTitle>
            </CardHeader>
            <CardContent>
              We build with advanced AI agents, LLMs, voice bots, and visual avatars — not just simple workflows.
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Custom-Built For Your Business</CardTitle>
            </CardHeader>
            <CardContent>
              We don’t just give you templates. We build tailored systems for your offer, funnel, and sales process.
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Built to Convert, Not Just Save Time</CardTitle>
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
        <Card className="mt-10">
          <CardHeader>
            <CardTitle>Increased Efficiency by 40%</CardTitle>
            <CardDescription>
              AI-driven automation transforms client operations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-md text-foreground">
              "Thanks to TechFusion Alchemy, we've seen a remarkable improvement
              in our operational efficiency. Their AI solutions have saved us
              time and resources, allowing us to focus on growth." - John Smith,
              CEO
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Explore Our Stack Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">Explore Our Stack</h2>
        <p className="text-md text-foreground mb-4 text-center">
          {/* Insert Engaging subtitle posed to show how in the know we are about tending things. */}
        </p>
        <div className="section-title-divider"></div>
        <Carousel
          opts={{
            loop: true,
            dragFree: true,
            slidesToScroll: 1,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full max-w-2xl mx-auto"
        >
          <CarouselContent className="-ml-1 pl-1">
            {logos.map((logo) => (
              <CarouselItem key={logo.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Image
                    src={logo.src}
                    width={100}
                    height={50}
                    alt={logo.name}
                    className="aspect-video rounded-md object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </section>

      {/* Engagement Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">Get Started</h2>
        <div className="section-title-divider"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <Button variant="accent" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/20 transition-colors duration-300">Book a Demo</Button>
          <Button variant="secondary" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/20 transition-colors duration-300">Sign Up for Newsletter</Button>
          <Button variant="ghost" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/20 transition-colors duration-300"><Link href="/demo">View Demo</Link></Button>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">Contact Us</h2>
        <div className="section-title-divider"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="border rounded-lg p-8 shadow-md">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Name
                </label>
                <Input type="text" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Email
                </label>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <Textarea placeholder="Your Message" />
              </div>
              <Button variant="primary" className="bg-accent text-foreground border-2 border-accent hover:bg-opacity-0 transition-colors duration-300">Submit</Button>
            </form>
          </div>
          <div>
            <Image
              src="https://picsum.photos/500/300" // Replace with actual image
              alt="Happy Business Person"
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
