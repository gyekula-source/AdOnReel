"use client";

import { SlideUp } from "@/components/animations/SlideUp";
import { GlassCard } from "@/components/ui/glass-card";
import { Link2, Video, Banknote, Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function ForCreatorsPage() {
  const steps = [
    {
      icon: <Link2 className="w-8 h-8 text-purple-light" />,
      title: "1. Install the App & Sync Socials",
      description: "Open the app, connect your Instagram or TikTok account, and authorize campaign tracking in seconds.",
    },
    {
      icon: <Video className="w-8 h-8 text-blue-400" />,
      title: "2. Post Your Content",
      description: "Continue creating the reels and videos your audience loves. You retain full creative control over your content.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-light" />,
      title: "3. Manual Banner Placement",
      description: "Select and place non-intrusive brand banners into your videos yourself, choosing timing and style that match your creative flow.",          
    },
    {
      icon: <Banknote className="w-8 h-8 text-blue-400" />,
      title: "4. Earn Money",
      description: "Get paid based on the views and engagement your videos generate. Withdraw your earnings easily to your bank account.",
    }
  ];

  const benefits = [
    {
      title: "No Sponsorship Hunts",
      description: "Stop spending hours pitching to brands. We bring the campaigns directly to your content.",
      icon: <TrendingUp className="w-6 h-6 text-primary" />
    },
    {
      title: "Transparent Payouts",
      description: "See exactly how much you earn per view. Our interactive dashboard updates your revenue in real-time.",
      icon: <Banknote className="w-6 h-6 text-primary" />
    },
    {
      title: "Creative Freedom",
      description: "You don't need to read scripts or change your style. Just post what you love and let the banners do the work.",
      icon: <Video className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SlideUp>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">Turn Your Social Influence Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-blue-400">Guaranteed Income</span></h1>
            <p className="text-xl text-foreground/70">
              Install the app, sync your social accounts, and manually add branded banners to your reels with easy placement controls.
            </p>
          </div>
        </SlideUp>

        {/* How It Works Section */}
        <div className="mb-32">
          <SlideUp delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-foreground">How You Earn</h2>
              <p className="text-lg text-foreground/70">A seamless integration process designed for creators.</p>
            </div>
          </SlideUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <SlideUp key={i} delay={0.2 + (i * 0.1)}>
                <GlassCard className="p-8 h-full border-border hover:border-primary/30 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </GlassCard>
              </SlideUp>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-32 bg-secondary/50 rounded-3xl p-8 md:p-16 border border-border">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Creators Love Us</h2>
            </div>
          </SlideUp>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <SlideUp key={i} delay={0.1 * i}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-foreground/70">{benefit.description}</p>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <SlideUp delay={0.3}>
          <GlassCard className="p-12 text-center bg-gradient-to-b from-primary/10 to-transparent border-primary/20">
            <h2 className="text-4xl font-bold mb-6">Ready to monetize your passion?</h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already earning passive income on AdOnReel.
            </p>
            <Link 
              href="/download-app" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors"
            >
              Download the App
              <ArrowRight className="w-5 h-5" />
            </Link>
          </GlassCard>
        </SlideUp>
      </div>
    </div>
  );
}
