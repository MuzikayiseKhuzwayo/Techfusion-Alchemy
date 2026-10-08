// components/magic/infinite-moving-logos.tsx
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingLogos = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: { id: number; name: string; src: string; description: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    // This effect now correctly depends on props that influence the animation.
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        // Clear previous clones to prevent duplicates on prop change
        const scrollerContent = Array.from(scrollerRef.current.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
        getDirection();
        getSpeed();
        setStart(true);
      }
    }
    addAnimation();
  }, [direction, speed]); // Note: React's linter would suggest adding getDirection/getSpeed here, but it's safe as they only depend on props.

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full overflow-visible [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-12 sm:gap-16 w-max flex-nowrap",
          // The key change is here: `py-12` adds vertical padding.
          // This creates space for the pop-up card to appear without being clipped.
          "py-24 pb-36",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.id}
            className="group relative w-[150px] h-[100px] flex-shrink-0 flex items-center justify-center transition-all duration-300"
          >
            {/* The Animated Card that appears on hover */}
            <div
              className={cn(
                "absolute top-full mt-3 w-[280px] p-4 bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-xl shadow-2xl shadow-black",
                "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100",
                "transition-all duration-300 ease-in-out origin-top",
                "pointer-events-none group-hover:pointer-events-auto z-10" // Appears behind the logo
              )}
            >
              <p className="text-zinc-300 font-sans text-xs text-center leading-relaxed font-normal">
                {item.description}
              </p>
            </div>

            {/* The Logo Image - positioned above the card */}
            <div className="relative z-20 w-full h-full h-auto flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:scale-110">
              <Image
                src={item.src}
                width={100}
                height={50}
                alt={item.name}
                className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};