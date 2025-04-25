"use client";

import * as React from "react";
import {
  EmblaCarousel,
  EmblaOptionsType,
  EmblaPluginType,
} from "embla-carousel";
import { useEmblaCarousel } from "embla-carousel-react";

import { cn } from "@/lib/utils";

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    opts?: EmblaOptionsType;
    plugins?: EmblaPluginType[];
  }
>(({ className, opts, plugins, children, ...props }, ref) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(opts, plugins);

  return (
    <div className={cn("relative", className)} {...props}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
    </div>
  );
});
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div className={cn("flex", className)} ref={ref} {...props} />;
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div className={cn("relative flex-[0_0_auto]", className)} ref={ref} {...props} />
  );
});
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  return (
    <button
      type="button"
      className={cn(
        "absolute left-2 top-1/2 z-10 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 text-foreground shadow-md transition-colors hover:bg-background",
        className
      )}
      ref={ref}
      {...props}
    >
      <span className="sr-only">Previous slide</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  return (
    <button
      type="button"
      className={cn(
        "absolute right-2 top-1/2 z-10 -translate-y-1/2 h-8 w-8 rounded-full bg-background/80 text-foreground shadow-md transition-colors hover:bg-background",
        className
      )}
      ref={ref}
      {...props}
    >
      <span className="sr-only">Next slide</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  );
});
CarouselNext.displayName = "CarouselNext";

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
