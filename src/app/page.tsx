"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
          Tehcfusion Alchemy is an automation agency dedicated to transforming
          businesses through innovative AI solutions. Our mission is to streamline
          operations, enhance productivity, and drive growth for our clients.
        </p>
      </section>

      {/* About Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-4">About Us</h2>
        <p className="text-md text-foreground mb-4">
          Tehcfusion Alchemy was born from a vision to help businesses thrive in
          the digital age. We leverage the power of AI and automation to create
          bespoke solutions that drive efficiency and innovation.
        </p>
        <p className="text-md text-foreground mb-4">
          Our expertise lies in crafting intelligent systems that adapt to your
          unique needs. We value innovation, reliability, and a relentless focus
          on customer success.
        </p>
      </section>

      {/* Offerings Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-4">Our Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>AI System Development</CardTitle>
              <CardDescription>
                Customised automation workflows to optimise business processes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              We create AI-driven systems tailored to your specific needs,
              automating repetitive tasks and enhancing overall efficiency.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Workflow Optimisation</CardTitle>
              <CardDescription>
                Streamlining tasks for maximum productivity.
              </CardDescription>
            </CardHeader>
            <CardContent>
              Our workflow optimisation service identifies bottlenecks and
              implements AI solutions to streamline your operations.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>AR and Digital Integration</CardTitle>
              <CardDescription>
                Augmented Reality solutions for enhanced customer engagement.
              </CardDescription>
            </CardHeader>
            <CardContent>
              We offer AR solutions that integrate seamlessly with your digital
              presence, creating immersive experiences for your customers.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Consulting</CardTitle>
              <CardDescription>
                Expert advice on AI implementation tailored to business needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              Our consulting services provide you with the insights and strategies
              needed to successfully implement AI in your business.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-4">Pricing</h2>
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
          <Button variant="accent">Book a Consultation</Button>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-4">
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
              "Thanks to Tehcfusion Alchemy, we've seen a remarkable improvement
              in our operational efficiency. Their AI solutions have saved us
              time and resources, allowing us to focus on growth." - John Smith,
              CEO
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-4">Why Choose Us</h2>
        <ul className="list-disc pl-5 text-md text-foreground">
          <li>Innovative Approach</li>
          <li>Personalised Solutions</li>
          <li>Measurable Results</li>
          <li>Expert Team</li>
        </ul>
      </section>

      {/* Engagement Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-4">Get Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="accent">Book a Consultation</Button>
          <Button variant="secondary">Sign Up for Newsletter</Button>
        </div>
      </section>

      {/* Contact Us Section */}
      <section>
        <h2 className="text-3xl font-semibold text-primary mb-4">Contact Us</h2>
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
          <div>
            <p className="text-md text-foreground">
              Additional Contact Details:
            </p>
            <p className="text-md text-foreground">
              Phone: +44 1234 567890
            </p>
            <p className="text-md text-foreground">
              Email: info@tehcfusionalchemy.com
            </p>
            <p className="text-md text-foreground">
              Address: 123 Alchemy Street, London, UK
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
