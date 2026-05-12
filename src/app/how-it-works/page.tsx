"use client";

import { SlideUp } from "@/components/animations/SlideUp";
import { GlassCard } from "@/components/ui/glass-card";
import { Link2, Video, BarChart3, Wallet } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <Link2 className="w-8 h-8 text-purple-light" />,
      title: "1. Connect Your Account",
      description: "Securely link your Instagram account. We only request permissions necessary to track reel performance and authenticate your identity.",
      color: "bg-purple"
    },
    {
      icon: <Video className="w-8 h-8 text-blue-400" />,
      title: "2. Post Your Reels",
      description: "Continue creating content as you normally would. When you upload through AdOnReel, we dynamically insert non-intrusive brand banners.",
      color: "bg-blue"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-light" />,
      title: "3. Track Performance",
      description: "Watch your metrics grow in real-time. Our AI tracks views, likes, shares, and calculates your earnings based on engagement thresholds.",
      color: "bg-purple"
    },
    {
      icon: <Wallet className="w-8 h-8 text-blue-400" />,
      title: "4. Instant Payouts",
      description: "Once a campaign ends or you hit your threshold, withdraw your earnings directly to your bank account or PayPal instantly.",
      color: "bg-blue"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-dark relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <SlideUp>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">How AdOnReel Works</h1>
            <p className="text-xl text-muted">Four simple steps to turn your creativity into a reliable revenue stream.</p>
          </div>
        </SlideUp>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-12 top-10 bottom-10 w-1 bg-gradient-to-b from-purple/20 via-blue/20 to-purple/20 rounded-full" />
          
          <div className="space-y-12">
            {steps.map((step, i) => (
              <SlideUp key={i} delay={0.1 * i}>
                <div className="flex flex-col md:flex-row gap-8 items-start relative group">
                  {/* Icon Circle */}
                  <div className={`w-24 h-24 rounded-3xl ${step.color}/10 border border-${step.color}/30 flex items-center justify-center shrink-0 z-10 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500`}>
                    {step.icon}
                  </div>
                  
                  <GlassCard className="p-8 flex-1 border-white/5 group-hover:border-white/20 transition-colors">
                    <h2 className="text-2xl font-bold text-white mb-4">{step.title}</h2>
                    <p className="text-muted text-lg leading-relaxed">{step.description}</p>
                  </GlassCard>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
