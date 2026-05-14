"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { SlideUp } from "@/components/animations/SlideUp";
import { PieChart, Zap, HandCoins, Focus, Crosshair, TrendingUp } from "lucide-react";

export function FeaturesSection() {
  const creatorFeatures = [
    { title: "Engagement Analytics", desc: "Real-time tracking of views, likes, and shares via Meta Graph API.", icon: <PieChart /> },
    { title: "Instant Payouts", desc: "Get paid automatically as soon as your Reel hits milestones.", icon: <Zap /> },
    { title: "Wallet Control", desc: "Manage earnings, request withdrawals, and track history effortlessly.", icon: <HandCoins /> },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#FDD7E4]">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-16">
          {/* Creator Features */}
          <div className="max-w-2xl mx-auto">
            <SlideUp>
              <div className="mb-10">
                <span className="text-purple uppercase tracking-wider font-bold text-sm">For Creators</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">Monetize Your Influence</h2>
                <p className="text-foreground/70">Turn your existing audience into a predictable revenue stream without selling out.</p>
              </div>
            </SlideUp>
            
            <div className="space-y-6">
              {creatorFeatures.map((feat, i) => (
                <SlideUp key={feat.title} delay={i * 0.1}>
                  <GlassCard className="p-6 flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-purple/10 text-purple flex items-center justify-center shrink-0 group-hover:bg-purple group-hover:text-primary transition-colors">
                      {feat.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{feat.title}</h3>
                      <p className="text-foreground/70 text-sm">{feat.desc}</p>
                    </div>
                  </GlassCard>
                </SlideUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
