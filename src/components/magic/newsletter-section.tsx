"use client";
import { AnimatedSection } from "./animated-section";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export const NewsletterSection = () => {
  return (
    <AnimatedSection className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-card border border-primary/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-primary/10 blur-3xl rounded-full z-0 pointer-events-none"></div>
          
          <div className="relative z-10">
            <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground mb-4">
              Unlock the Secrets of Alchemical Automation
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sign up for our newsletter to receive an exclusive free resource: The Ultimate Checklist for Business Optimisation, plus weekly insights on AI systems.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your business email" 
                className="flex-1 bg-background border border-border rounded-full px-6 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-foreground"
                required
              />
              <Button type="submit" className="rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-primary/50">
                Subscribe & Get Checklist
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. No spam, just value.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
