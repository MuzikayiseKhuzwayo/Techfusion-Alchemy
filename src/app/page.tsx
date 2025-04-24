"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Revolutionising Productivity Through Intelligent Automation
        </h1>
        <p className="text-lg text-secondary mb-8">
          Empowering Founders and Professionals with Tailor-Made AI Solutions
        </p>
        <p className="text-md text-foreground">
          TechFusion Alchemy is an automation agency dedicated to transforming
          businesses through innovative AI solutions. Our mission is to streamline
          operations, enhance productivity, and drive growth for our clients.
        </p>
        <div className="flex justify-center mt-8 space-x-4">
          <Button variant="accent" className="border-2 border-accent text-accent">
            Find Out More
          </Button>
          <Button variant="primary" className="bg-primary text-primary-foreground">
            Book a Consultation
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">About Us</h2>
        <p className="text-md text-foreground mb-4 text-center">
          TechFusion Alchemy was born from a vision to help businesses thrive in
          the digital age. We leverage the power of AI and automation to create
          bespoke solutions that drive efficiency and innovation.
        </p>
        <p className="text-md text-foreground mb-4 text-center">
          Our expertise lies in crafting intelligent systems that adapt to your
          unique needs. We value innovation, reliability, and a relentless focus
          on customer success.
        </p>
      </section>

      {/* Offerings Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">Our Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <Link href="/offerings/ai-system-development" className="text-accent">
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
                  <Link href="/offerings/workflow-optimisation" className="text-accent">
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
                  <Link href="/offerings/ar-digital-integration" className="text-accent">
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
                  <Link href="/offerings/consulting" className="text-accent">
                    Learn More
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>
                Basic automation solutions for small businesses.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Workflow analysis</li>
                <li>Basic AI implementation</li>
                <li>Email support</li>
              </ul>
              <p className="font-bold mt-4">£499/month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Premium</CardTitle>
              <CardDescription>
                Advanced automation with dedicated support.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Custom AI development</li>
                <li>Dedicated support team</li>
                <li>Advanced analytics</li>
              </ul>
              <p className="font-bold mt-4">£999/month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>
                Comprehensive AI solutions for large organisations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Full AI system integration</li>
                <li>24/7 priority support</li>
                <li>Bespoke AR solutions</li>
              </ul>
              <p className="font-bold mt-4">Custom Quote</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Button variant="accent" className="border-2 border-accent text-accent">Book a Consultation</Button>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">
          Client Success Stories
        </h2>
        <Card>
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
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">Get Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="accent">Book a Consultation</Button>
          <Button variant="secondary">Sign Up for Newsletter</Button>
          <Button variant="ghost"><Link href="/demo">View Demo</Link></Button>
        </div>
      </section>

      {/* Contact Us Section */}
      <section>
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
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
              <Button variant="primary">Submit</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
