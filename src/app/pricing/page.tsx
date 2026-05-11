"use client";

import { SlideUp } from "@/components/animations/SlideUp";
import { GlassCard } from "@/components/ui/glass-card";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
        <SlideUp>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">No hidden fees. Creators keep 100% of their calculated earnings. Brands only pay for performance.</p>
        </SlideUp>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <SlideUp delay={0.1}>
          <GlassCard className="p-10 h-full">
            <h2 className="text-3xl font-bold mb-2">For Creators</h2>
            <div className="text-5xl font-black text-purple-light mb-6">Free</div>
            <p className="text-muted mb-8">Monetize your audience without paying a dime to us.</p>
            
            <ul className="space-y-4 mb-10">
              {["100% of calculated earnings", "Instant payouts via Stripe", "AI Campaign Matching", "Real-time analytics", "Dedicated support"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple/20 flex items-center justify-center text-purple-light">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 rounded-full bg-white text-dark font-bold hover:bg-white/90 transition-colors">
              Start Earning
            </button>
          </GlassCard>
        </SlideUp>

        <SlideUp delay={0.2}>
          <GlassCard className="p-10 h-full relative overflow-hidden border-purple/30">
            <div className="absolute top-0 right-0 bg-purple text-white text-xs font-bold px-4 py-1 rounded-bl-xl">POPULAR</div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-purple to-transparent" />
            
            <h2 className="text-3xl font-bold mb-2">For Brands</h2>
            <div className="text-5xl font-black text-white mb-2">15% <span className="text-lg text-muted font-normal">fee</span></div>
            <p className="text-muted mb-8">Flat platform fee on successful campaign spend.</p>
            
            <ul className="space-y-4 mb-10">
              {["Access to 50k+ creators", "Automated dynamic overlays", "Real-time ROI dashboard", "Fraud protection", "API Access"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue/20 flex items-center justify-center text-blue-400">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full py-4 rounded-full bg-purple text-white font-bold hover:bg-purple/90 transition-colors shadow-[0_0_20px_rgba(124,58,237,0.3)]">
              Launch Campaign
            </button>
          </GlassCard>
        </SlideUp>
      </div>
    </div>
  );
}
