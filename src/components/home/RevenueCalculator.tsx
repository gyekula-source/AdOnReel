"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { SlideUp } from "@/components/animations/SlideUp";
import { motion } from "framer-motion";

export function RevenueCalculator() {
  const [views, setViews] = useState(50000);
  const [likes, setLikes] = useState(5000);
  const [shares, setShares] = useState(500);

  // Formula: Payout = (Views * 0.005) + (Likes * 0.075) + (Shares * 0.15)
  let basePayout = (views * 0.005) + (likes * 0.075) + (shares * 0.15);
  
  // Viral Bonus Engine Logic
  let isViral = false;
  let hasBoost = false;
  
  if (views >= 100000) {
    isViral = true;
    basePayout *= 1.5; // Viral bonus
  }
  
  if (shares >= 10000) {
    hasBoost = true;
    basePayout *= 2; // 2x Boost
  }

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <SlideUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Calculate Your Earnings</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Our AI analyzes engagement in real-time. See exactly how much your next reel could make on the AdOnReel platform.
            </p>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <SlideUp delay={0.1}>
            <GlassCard className="p-8">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-white/80">Reel Views</label>
                    <span className="text-purple-light">{views.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="1000000" 
                    step="1000"
                    value={views} 
                    onChange={(e) => setViews(Number(e.target.value))}
                    className="w-full accent-purple h-2 bg-dark rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-white/80">Likes</label>
                    <span className="text-purple-light">{likes.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="100000" 
                    step="100"
                    value={likes} 
                    onChange={(e) => setLikes(Number(e.target.value))}
                    className="w-full accent-blue h-2 bg-dark rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-semibold text-white/80">Shares</label>
                    <span className="text-purple-light">{shares.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="50000" 
                    step="10"
                    value={shares} 
                    onChange={(e) => setShares(Number(e.target.value))}
                    className="w-full accent-white h-2 bg-dark rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </GlassCard>
          </SlideUp>

          <SlideUp delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple/40 to-blue/40 rounded-3xl blur-[50px] animate-pulse" />
              <GlassCard className="p-10 border-white/20 relative z-10 flex flex-col items-center justify-center text-center">
                <div className="text-sm font-bold tracking-widest text-muted uppercase mb-4">Estimated Payout</div>
                
                <motion.div 
                  key={basePayout}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-light to-white drop-shadow-lg mb-6"
                >
                  ${basePayout.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </motion.div>

                <div className="flex flex-wrap gap-4 justify-center">
                  <div className={`px-4 py-2 rounded-full border text-sm font-bold transition-colors ${isViral ? 'bg-orange-500/20 border-orange-500/50 text-orange-400' : 'bg-dark/50 border-white/10 text-muted'}`}>
                    🔥 Viral Bonus {isViral && '(1.5x)'}
                  </div>
                  <div className={`px-4 py-2 rounded-full border text-sm font-bold transition-colors ${hasBoost ? 'bg-blue/20 border-blue/50 text-blue-400' : 'bg-dark/50 border-white/10 text-muted'}`}>
                    🚀 Shares Boost {hasBoost && '(2.0x)'}
                  </div>
                </div>
              </GlassCard>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
