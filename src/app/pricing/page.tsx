"use client";

import { SlideUp } from "@/components/animations/SlideUp";
import { GlassCard } from "@/components/ui/glass-card";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-[#FDD7E4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
        <SlideUp>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">Simple, Transparent Pricing</h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">No hidden fees. Creators keep 100% of their calculated earnings.</p>
        </SlideUp>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <SlideUp delay={0.1}>
          <GlassCard className="p-10 h-full">
            <h2 className="text-3xl font-bold mb-2 text-foreground">For Creators</h2>
            <div className="text-5xl font-black text-purple-light mb-6">Free</div>
            <p className="text-foreground/70 mb-8">Monetize your audience without paying a dime to us.</p>
            
            <ul className="space-y-4 mb-10">
              {["100% of calculated earnings", "Instant payouts via Stripe", "AI Campaign Matching", "Real-time analytics", "Dedicated support"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple/20 flex items-center justify-center text-purple-light">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors">
              Start Earning
            </button>
          </GlassCard>
        </SlideUp>
      </div>
    </div>
  );
}
