"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const DetailedOfferingsPage = () => {
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

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#F2C72C]">Detailed Offerings</h1>
      <div className="section-title-divider"></div>
      <section className="mb-6 mt-10">
        {offerings.map((offering, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 text-center text-[#B66B19]">{offering.title}</h2>
            <div className="section-title-divider"></div>
            <h3 className="text-xl font-semibold mb-2 text-center">{offering.subtitle}</h3>
            <p className="text-center mt-4">{offering.textContent}</p>
            <div className="flex justify-center mt-4 space-x-4">
              <Button variant="accent" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/0 transition-colors duration-300">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="secondary" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/20 transition-colors duration-300">
                <Link href="https://calendly.com/khuzwayomuzikayise/automated-growth-systems-consultation-30-minutes" target="_blank" rel="noopener noreferrer">Book a Demo</Link>
              </Button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DetailedOfferingsPage;
