"use client";

import { SlideUp } from "@/components/animations/SlideUp";
import { GlassCard } from "@/components/ui/glass-card";
import { Target, Lightbulb, Users, Globe } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Our Goal",
      description: "To become the global standard for decentralized influencer advertising, empowering creators of all sizes to earn a living doing what they love."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
      title: "Innovation First",
      description: "We leverage cutting-edge AI to match brands with the perfect creators, maximizing engagement and return on investment."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Community Driven",
      description: "We are building an ecosystem where creators and brands thrive together without predatory fees or hidden algorithms."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "Global Reach",
      description: "Breaking down geographical barriers to allow authentic collaborations across borders and cultures."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <SlideUp>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">About AdOnReel</h1>
            <p className="text-xl text-primary font-semibold mb-6">"Built for Creators. Designed for Brands."</p>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              AdOnReel is the premier AI-powered marketplace bridging the gap between innovative brands and dynamic content creators. We believe in democratizing social media monetization by replacing tedious sponsorship negotiations with automated, performance-based ad placements.
            </p>
          </div>
        </SlideUp>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {values.map((val, idx) => (
            <SlideUp key={idx} delay={0.1 * idx}>
              <GlassCard className="p-8 h-full border-border hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{val.title}</h3>
                <p className="text-foreground/70">{val.description}</p>
              </GlassCard>
            </SlideUp>
          ))}
        </div>

        <SlideUp delay={0.4}>
          <GlassCard className="p-12 text-center bg-secondary border-border">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Join the Revolution</h2>
            <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
              Whether you are a creator looking to monetize your passion or a brand seeking authentic engagement, there is a place for you here.
            </p>
          </GlassCard>
        </SlideUp>
      </div>
    </div>
  );
}
