"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useRef } from "react";
import Image from 'next/image';

export default function Home() {
  const offeringsRef = useRef(null);

  const scrollToOfferings = () => {
    offeringsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
          <Button variant="accent" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/20 transition-colors duration-300" onClick={scrollToOfferings}>
            Find Out More
          </Button>
          <Button variant="accent" className="border-2 border-accent text-foreground bg-accent hover:bg-accent/0 transition-colors duration-300">
            <Link href="/demo">Book a Demo</Link>
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">About Us</h2>
        <div className="section-title-divider"></div>
        <div className="grid grid-cols-2 gap-8 mt-10">
          {/* Our Story */}
          <div className="flex items-center justify-center">
            <p className="text-md text-foreground mb-4 text-center">
              TechFusion Alchemy was born from a vision to help businesses thrive in
              the digital age. We leverage the power of AI and automation to create
              bespoke solutions that drive efficiency and innovation.
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
              Our expertise lies in crafting intelligent systems that adapt to your
              unique needs. We value innovation, reliability, and a relentless focus
              on customer success.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="mb-20" ref={offeringsRef}>
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">Our Offerings</h2>
        <div className="section-title-divider"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>AI System Development</CardTitle>
              <CardDescription>
                Customised automation workflows to optimise business processes.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-between">
              <p className="text-md text-foreground mb-4">
                We create AI-driven systems tailored to your specific needs,
                automating repetitive tasks and enhancing overall efficiency.
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
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Workflow Optimisation</CardTitle>
              <CardDescription>
                Streamlining tasks for maximum productivity.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-between">
              <p className="text-md text-foreground mb-4">
                Our workflow optimisation service identifies bottlenecks and
                implements AI solutions to streamline your operations.
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
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>AR and Digital Integration</CardTitle>
              <CardDescription>
                Augmented Reality solutions for enhanced customer engagement.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-between">
              <p className="text-md text-foreground mb-4">
                We offer AR solutions that integrate seamlessly with your digital
                presence, creating immersive experiences for your customers.
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
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Consulting</CardTitle>
              <CardDescription>
                Expert advice on AI implementation tailored to business needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-between">
              <p className="text-md text-foreground mb-4">
                Our consulting services provide you with the insights and strategies
                needed to successfully implement AI in your business.
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

      {/* Why Choose Us Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">Why Choose Us</h2>
        <div className="section-title-divider"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Innovative Approach</CardTitle>
            </CardHeader>
            <CardContent>
              We leverage the latest AI technologies to create innovative solutions that drive efficiency and growth.
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Personalised Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              We tailor our solutions to meet your specific business needs, ensuring maximum impact and value.
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Measurable Results</CardTitle>
            </CardHeader>
            <CardContent>
              We focus on delivering measurable results that demonstrate the value of our services and drive tangible outcomes.
            </CardContent>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Expert Team</CardTitle>
            </CardHeader>
            <CardContent>
              Our team of experts brings years of experience in AI and automation to deliver exceptional results for our clients.
            </CardContent>
          </Card>
        </div>
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

