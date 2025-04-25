"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const DetailedOfferingsPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#F2C72C]">Detailed Offerings</h1>
      <div className="section-title-divider"></div>
      {/* Add detailed descriptions of each service */}
      <section className="mb-6 mt-10">
        <h2 className="text-2xl font-semibold mb-2 text-center text-[#B66B19]">AI System Development</h2>
        <div className="section-title-divider"></div>
        <p className="text-center mt-10">
          Our AI system development service focuses on creating customised automation workflows to optimise your business processes.
          We analyse your existing workflows, identify bottlenecks, and design AI-driven solutions tailored to your specific needs.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <Button variant="accent" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/0 transition-colors duration-300">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button variant="secondary" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/20 transition-colors duration-300">
            <Link href="/book-consultation">Book a Consultation</Link>
          </Button>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-center text-[#B66B19]">Workflow Optimisation</h2>
        <div className="section-title-divider"></div>
        <p className="text-center mt-10">
          We streamline tasks for maximum productivity. Our experts use cutting-edge AI technologies to automate repetitive tasks,
          improve data accuracy, and enhance overall efficiency.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <Button variant="accent" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/0 transition-colors duration-300">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button variant="secondary" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/20 transition-colors duration-300">
            <Link href="/book-consultation">Book a Consultation</Link>
          </Button>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-center text-[#B66B19]">AR and Digital Integration</h2>
        <div className="section-title-divider"></div>
        <p className="text-center mt-10">
          Offering Augmented Reality solutions for enhanced customer engagement. We integrate AR seamlessly with your digital presence,
          creating immersive experiences that captivate your customers and drive sales.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <Button variant="accent" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/0 transition-colors duration-300">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button variant="secondary" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/20 transition-colors duration-300">
            <Link href="/book-consultation">Book a Consultation</Link>
          </Button>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-center text-[#B66B19]">Consulting</h2>
        <div className="section-title-divider"></div>
        <p className="text-center mt-10">
          Providing expert advice on AI implementation tailored to your business needs. Our consulting services provide you with the insights
          and strategies needed to successfully implement AI in your business.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <Button variant="accent" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/0 transition-colors duration-300">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button variant="secondary" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/20 transition-colors duration-300">
            <Link href="/book-consultation">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default DetailedOfferingsPage;
