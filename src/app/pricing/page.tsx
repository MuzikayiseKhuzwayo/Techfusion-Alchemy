"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PricingPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Pricing</h1>
      <section className="mb-16">
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
    </div>
  );
};

export default PricingPage;
