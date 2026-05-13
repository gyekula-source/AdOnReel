"use client";

import { SlideUp } from "@/components/animations/SlideUp";
import { GlassCard } from "@/components/ui/glass-card";
import { Zap, Shield, Sparkles, BarChart, Users, Smartphone } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-purple-light" />,
      title: "AI-Powered Matching",
      description: "Our proprietary algorithm analyzes creator audiences and brand requirements to ensure perfect synergy and high conversion rates.",
      color: "from-purple/20 to-transparent border-purple/30"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: "Automated Overlays",
      description: "Upload your reel, and we automatically inject non-intrusive, high-converting brand overlays without you needing to edit anything.",
      color: "from-blue/20 to-transparent border-blue/30"
    },
    {
      icon: <BarChart className="w-8 h-8 text-purple-light" />,
      title: "Real-Time Analytics",
      description: "Track views, engagement, clicks, and revenue instantly. Our dashboard updates in real-time as your reels go viral.",
      color: "from-purple/20 to-transparent border-purple/30"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Fraud Protection",
      description: "Advanced bot-detection ensures brands only pay for genuine human engagement, protecting budgets and platform integrity.",
      color: "from-blue/20 to-transparent border-blue/30"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-light" />,
      title: "Community Growth",
      description: "Connect with other creators, collaborate on mega-campaigns, and grow your audience while monetizing.",
      color: "from-purple/20 to-transparent border-purple/30"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      title: "Mobile First",
      description: "Manage your entire advertising pipeline directly from your phone. Perfect for creators and brands on the go.",
      color: "from-blue/20 to-transparent border-blue/30"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 text-center mb-20">
        <SlideUp>
          <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple-light text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Platform Capabilities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue">scale</span></h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Whether you're a creator looking to monetize or a brand aiming for viral reach, our platform is built to deliver exceptional results.
          </p>
        </SlideUp>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {features.map((feature, i) => (
          <SlideUp key={i} delay={0.1 * (i + 1)}>
            <GlassCard className={`p-8 h-full bg-gradient-to-br ${feature.color} hover:-translate-y-2 transition-transform duration-300`}>
              <div className="w-16 h-16 rounded-2xl bg-dark/50 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted leading-relaxed">
                {feature.description}
              </p>
            </GlassCard>
          </SlideUp>
        ))}
      </div>
    </div>
  );
}
