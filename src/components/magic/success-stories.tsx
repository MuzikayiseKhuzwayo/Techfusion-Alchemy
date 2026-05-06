"use client";
import { AnimatedSection } from "./animated-section";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, NexaLogistics",
    content: "Techfusion Alchemy revolutionised our entire supply chain. Their AI workflows increased our operational efficiency by 40% in just two months.",
    metric: "40% Efficiency Increase",
  },
  {
    name: "David Chen",
    role: "Founder, GrowthEngine",
    content: "We were losing hours to manual data entry. The automated systems they built saved us over 20 hours per week, allowing us to focus purely on strategy.",
    metric: "20+ Hours Saved Weekly",
  },
  {
    name: "Elena Rostova",
    role: "Marketing Director, Bloom Retail",
    content: "Their custom AR integration and lead nurturing bots tripled our customer engagement. It feels like magic, but it's just incredible engineering.",
    metric: "3x Customer Engagement",
  }
];

export const SuccessStories = () => {
  return (
    <AnimatedSection className="py-20 sm:py-28 bg-card/30 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter text-primary-foreground mb-4">Client Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See the measurable impact our intelligent automations have delivered for our partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-background border border-primary/20 rounded-2xl p-8 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-6 mt-auto">
                <div className="font-bold text-accent mb-1">{testimonial.metric}</div>
                <div className="text-primary-foreground font-semibold">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
