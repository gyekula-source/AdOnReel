"use client";

import { SlideUp } from "@/components/animations/SlideUp";
import { GlassCard } from "@/components/ui/glass-card";
import { RevenueCalculator } from "@/components/home/RevenueCalculator";
import { ArrowRight, Banknote, Bitcoin, CreditCard, Wallet, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function EarningsPage() {
  const paymentMethods = [
    {
      name: "Bank Transfer",
      icon: <Banknote className="w-8 h-8 text-purple-light" />,
      time: "2-3 Business Days",
      fee: "0% Fee"
    },
    {
      name: "PayPal",
      icon: <CreditCard className="w-8 h-8 text-blue-400" />,
      time: "Instant",
      fee: "1.5% Fee"
    },
    {
      name: "Digital Wallet",
      icon: <Wallet className="w-8 h-8 text-blue-400" />,
      time: "Instant",
      fee: "0% Fee"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-dark relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-blue/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto relative z-10 mb-20">
        <SlideUp>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Turn Your Views Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-blue-400">Revenue</span></h1>
            <p className="text-xl text-muted">
              Stop waiting for unpredictable sponsorships. AdOnReel pays you directly based on your performance. Transparent, instant, and limitless.
            </p>
          </div>
        </SlideUp>

        {/* Revenue Calculator Section */}
        <div className="bg-dark/40 rounded-3xl border border-white/5 p-4 md:p-8 backdrop-blur-sm mb-24">
          <RevenueCalculator />
        </div>

        {/* Multipliers Section */}
        <SlideUp delay={0.2}>
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">How Multipliers Work</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Go viral and earn exponentially more. Our dynamic multiplier engine rewards exceptional engagement.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <GlassCard className="p-8 border-purple/30 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple/20 rounded-bl-full blur-2xl group-hover:bg-purple/30 transition-colors" />
                <TrendingUp className="w-12 h-12 text-purple-light mb-6 relative z-10" />
                <h3 className="text-2xl font-bold mb-2 relative z-10">Viral Bonus (1.5x)</h3>
                <p className="text-muted relative z-10">
                  Hit over 100,000 views on a single reel and automatically unlock a 1.5x multiplier on your base payout for that specific reel.
                </p>
              </GlassCard>

              <GlassCard className="p-8 border-blue-400/30 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-bl-full blur-2xl group-hover:bg-blue-400/30 transition-colors" />
                <Zap className="w-12 h-12 text-blue-400 mb-6 relative z-10" />
                <h3 className="text-2xl font-bold mb-2 relative z-10">Shares Boost (2.0x)</h3>
                <p className="text-muted relative z-10">
                  High shareability means high brand value. Get 10,000+ shares and double your total payout instantly with our 2x boost.
                </p>
              </GlassCard>
            </div>
          </div>
        </SlideUp>

        {/* Payment Methods Section */}
        <SlideUp delay={0.3}>
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Flexible Payout Options</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Withdraw your earnings exactly how you want them. No more waiting 30 days for an invoice to clear.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paymentMethods.map((method, idx) => (
                <GlassCard key={idx} className="p-6 text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-dark rounded-2xl border border-white/5">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.name}</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-muted">{method.time}</p>
                    <p className="text-sm font-medium text-white/80">{method.fee}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </SlideUp>

        {/* CTA Section */}
        <SlideUp delay={0.4}>
          <GlassCard className="p-12 text-center bg-gradient-to-b from-purple/10 to-transparent border-purple/20">
            <h2 className="text-4xl font-bold mb-6">Ready to start earning?</h2>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are already monetizing their Instagram presence with AdOnReel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-dark font-bold rounded-full hover:bg-white/90 transition-colors"
              >
                Create Free Account
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/how-it-works" 
                className="inline-flex items-center justify-center px-8 py-4 bg-dark border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors"
              >
                Learn How It Works
              </Link>
            </div>
          </GlassCard>
        </SlideUp>
      </div>
    </div>
  );
}
