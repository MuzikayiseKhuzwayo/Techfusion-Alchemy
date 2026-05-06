"use client";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./animated-section";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses looking to begin their automation journey.",
    price: "Custom",
    features: [
      "Basic Workflow Optimisation",
      "Standard Integration Support",
      "Email & Lead Nurturing Automations",
      "Monthly Consultation",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    description: "Comprehensive AI systems tailored for growing companies.",
    price: "Custom",
    features: [
      "Advanced AI System Development",
      "Custom Voice & Text Bots",
      "End-to-End Sales Automation",
      "Priority Support & Weekly Syncs",
      "Predictive Analytics Dashboards",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Fully bespoke, scalable infrastructure for market leaders.",
    price: "Custom",
    features: [
      "Complete Digital & AR Integration",
      "Dedicated Engineering Team",
      "On-Premise or Private Cloud Deployment",
      "24/7 Monitoring & SLA",
      "Strategic Business Optimisation",
    ],
    highlighted: false,
  },
];

export const PricingSection = () => {
  return (
    <AnimatedSection className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-primary-foreground mb-4">Investment Plans</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the package that aligns with your growth ambitions. We provide transparent, value-driven pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                plan.highlighted 
                  ? "bg-card border-primary shadow-[0_0_30px_rgba(242,199,44,0.1)] scale-105 z-10" 
                  : "bg-card/50 border-border hover:border-primary/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-primary-foreground">{plan.price}</span>
                <span className="text-muted-foreground">/project</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-primary" : "text-accent"}`} />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild 
                className={`w-full rounded-full ${
                  plan.highlighted 
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-primary/50" 
                    : "bg-transparent border border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                }`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                <a href="/contact">Get a Custom Quote</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
