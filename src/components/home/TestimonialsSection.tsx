"use client";

import { useState, useEffect } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { SlideUp } from "@/components/animations/SlideUp";
import { Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "AdOnReel transformed my Instagram account into a full-time business. I made $4,500 last month just by including automated brand overlays in my daily reels.",
    name: "Sarah Jenkins",
    role: "Lifestyle Creator • 1.2M Followers",
    type: "creator"
  },
  {
    quote: "The ROI we're seeing from the AdOnReel AI matching engine is insane. We launched a campaign on Monday and saw a 300% increase in conversions by Friday.",
    name: "Marcus Chen",
    role: "CMO @ TechGear",
    type: "brand"
  },
  {
    quote: "Finally, a platform that doesn't make me do the heavy lifting. I connect my account, upload my reel, and the money just hits my wallet. It's magic.",
    name: "David Ross",
    role: "Comedy Creator • 800K Followers",
    type: "creator"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple/10 to-blue/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4">
        <SlideUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by the Best</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Join thousands of creators and brands who are already revolutionizing influencer advertising.
            </p>
          </div>
        </SlideUp>

        <div 
          className="max-w-4xl mx-auto relative h-[350px] md:h-[250px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <GlassCard className="p-8 md:p-12 h-full flex flex-col justify-center relative">
                <Quote className="absolute top-6 left-6 w-12 h-12 text-white/5" />
                <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed mb-8 relative z-10 text-center">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                  <div className={`text-sm ${testimonials[currentIndex].type === 'creator' ? 'text-purple-light' : 'text-blue'}`}>
                    {testimonials[currentIndex].role}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-purple' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
