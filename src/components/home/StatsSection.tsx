"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const springValue = useSpring(0, { duration: 2000, bounce: 0 });
  
  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  const displayValue = useTransform(springValue, (current) => {
    return Math.floor(current).toLocaleString() + suffix;
  });

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export function StatsSection() {
  const stats = [
    { label: "Total Creators", value: 50000, suffix: "+" },
    { label: "Total Brands", value: 1200, suffix: "+" },
    { label: "Reels Monetized", value: 2500000, suffix: "+" },
    { label: "Campaign Revenue", value: 15, suffix: "M+" },
  ];

  return (
    <section className="py-20 relative z-10 bg-dark/50 border-y border-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/10">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1} className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                {stat.label === "Campaign Revenue" ? "$" : ""}
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-muted uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
