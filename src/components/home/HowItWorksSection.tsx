"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { SlideUp } from "@/components/animations/SlideUp";
import { Link2, Video, BarChart3, Wallet } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      title: "Connect",
      description: "Creators sync their Instagram account securely via OAuth in seconds.",
      icon: <Link2 className="w-8 h-8 text-purple-light" />,
      color: "bg-purple",
    },
    {
      title: "Publish",
      description: "Upload your Reels with auto-generated dynamic brand banner overlays.",
      icon: <Video className="w-8 h-8 text-purple-light" />,
      color: "bg-blue",
    },
    {
      title: "Track",
      description: "Our AI and Meta Graph API track views, likes, shares, and reach in real-time.",
      icon: <BarChart3 className="w-8 h-8 text-purple-light" />,
      color: "bg-purple",
    },
    {
      title: "Earn",
      description: "Get instant payouts directly to your wallet based on your engagement metrics.",
      icon: <Wallet className="w-8 h-8 text-purple-light" />,
      color: "bg-blue",
    },
  ];

  return (
    <section className="py-32 relative bg-dark">
      <div className="container mx-auto px-4">
        <SlideUp>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">How AdOnReel Works</h2>
            <p className="text-muted text-xl max-w-2xl mx-auto">
              A seamless, automated pipeline from posting your Reel to cashing out.
            </p>
          </div>
        </SlideUp>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple/20 via-blue/20 to-purple/20 -translate-y-1/2 rounded-full overflow-hidden">
             <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-purple to-transparent animate-[shimmer_3s_infinite]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <SlideUp key={step.title} delay={index * 0.15}>
                <GlassCard className="p-8 h-full relative group">
                  <div className={`absolute -top-6 left-8 w-12 h-12 rounded-2xl flex items-center justify-center ${step.color} shadow-lg shadow-${step.color}/50 transform group-hover:-translate-y-2 transition-transform duration-300`}>
                    <span className="text-xl font-bold text-white">{index + 1}</span>
                  </div>
                  
                  <div className="mt-8 mb-6">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </GlassCard>
              </SlideUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
