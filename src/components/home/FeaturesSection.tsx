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

  const brandFeatures = [
    { title: "AI Campaign Matching", desc: "Automatically match with the perfect creators for your target demographic.", icon: <Focus /> },
    { title: "ROI Tracking", desc: "Track conversions, engagement rates, and ROI down to the cent.", icon: <TrendingUp /> },
    { title: "Smart Recommendations", desc: "AI-driven insights on optimal budget and overlay placements.", icon: <Crosshair /> },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-dark/80">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Creator Features */}
          <div>
            <SlideUp>
              <div className="mb-10">
                <span className="text-purple uppercase tracking-wider font-bold text-sm">For Creators</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Monetize Your Influence</h2>
                <p className="text-muted">Turn your existing audience into a predictable revenue stream without selling out.</p>
              </div>
            </SlideUp>
            
            <div className="space-y-6">
              {creatorFeatures.map((feat, i) => (
                <SlideUp key={feat.title} delay={i * 0.1}>
                  <GlassCard className="p-6 flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-purple/10 text-purple flex items-center justify-center shrink-0 group-hover:bg-purple group-hover:text-white transition-colors">
                      {feat.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                      <p className="text-muted text-sm">{feat.desc}</p>
                    </div>
                  </GlassCard>
                </SlideUp>
              ))}
            </div>
          </div>

          {/* Brand Features */}
          <div>
            <SlideUp>
              <div className="mb-10">
                <span className="text-blue uppercase tracking-wider font-bold text-sm">For Brands</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Viral Campaign Launchpad</h2>
                <p className="text-muted">Deploy dynamic overlay campaigns across thousands of creators instantly.</p>
              </div>
            </SlideUp>
            
            <div className="space-y-6">
              {brandFeatures.map((feat, i) => (
                <SlideUp key={feat.title} delay={i * 0.1}>
                  <GlassCard className="p-6 flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-blue/10 text-blue flex items-center justify-center shrink-0 group-hover:bg-blue group-hover:text-white transition-colors">
                      {feat.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                      <p className="text-muted text-sm">{feat.desc}</p>
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
