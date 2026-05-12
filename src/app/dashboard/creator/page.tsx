"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { SlideUp } from "@/components/animations/SlideUp";
import { Wallet, TrendingUp, Video, Activity, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CreatorDashboard() {
  const recentReels = [
    { id: 1, title: "Morning Routine feat. TechGear", views: "125K", earnings: "₹145.50", status: "Active" },
    { id: 2, title: "Setup Tour with GlowX", views: "340K", earnings: "₹520.00", status: "Active" },
    { id: 3, title: "Unboxing AdOnReel Merch", views: "89K", earnings: "₹95.20", status: "Completed" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <SlideUp>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Welcome back, Sarah</h1>
              <p className="text-muted-foreground">Here's your engagement and earnings overview.</p>
            </div>
            <Link 
              href="/dashboard/creator/withdraw"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-semibold hover:bg-primary/90 transition-colors self-start md:self-auto"
            >
              Withdraw Funds
            </Link>
          </div>
        </SlideUp>

        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <SlideUp delay={0.1}>
            <GlassCard className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-purple-light" />
                </div>
                <div className="text-sm font-medium text-muted">Available Balance</div>
              </div>
              <div className="text-3xl font-bold mb-1">₹4,250.00</div>
              <div className="text-sm text-green-400 flex items-center">
                <ArrowUpRight className="w-4 h-4 mr-1" /> +15% this week
              </div>
            </GlassCard>
          </SlideUp>

          <SlideUp delay={0.2}>
            <GlassCard className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue" />
                </div>
                <div className="text-sm font-medium text-muted">Total Earnings</div>
              </div>
              <div className="text-3xl font-bold mb-1">₹12,840.50</div>
              <div className="text-sm text-muted">Lifetime</div>
            </GlassCard>
          </SlideUp>

          <SlideUp delay={0.3}>
            <GlassCard className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Video className="w-5 h-5 text-orange-400" />
                </div>
                <div className="text-sm font-medium text-muted">Monetized Reels</div>
              </div>
              <div className="text-3xl font-bold mb-1">14</div>
              <div className="text-sm text-muted">2 active campaigns</div>
            </GlassCard>
          </SlideUp>

          <SlideUp delay={0.4}>
            <GlassCard className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-sm font-medium text-muted">Avg Engagement</div>
              </div>
              <div className="text-3xl font-bold mb-1">8.4%</div>
              <div className="text-sm text-green-400 flex items-center">
                <ArrowUpRight className="w-4 h-4 mr-1" /> Top 10% creator
              </div>
            </GlassCard>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Earnings Graph Placeholder */}
          <SlideUp delay={0.5} className="lg:col-span-2">
            <GlassCard className="p-6 h-[400px] flex flex-col">
              <h3 className="text-xl font-bold mb-6">Earnings Overview</h3>
              <div className="flex-1 relative flex items-end gap-2 pb-6 px-4">
                {/* Mock Graph Bars */}
                {[40, 70, 45, 90, 60, 110, 85].map((height, i) => (
                  <div key={i} className="flex-1 group relative">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className="w-full bg-purple/30 rounded-t-md group-hover:bg-purple transition-colors relative"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-dark text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        ₹{height * 10}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-sm text-muted px-4 border-t border-white/10 pt-4">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </GlassCard>
          </SlideUp>

          {/* Recent Reels */}
          <SlideUp delay={0.6}>
            <GlassCard className="p-6 h-full">
              <h3 className="text-xl font-bold mb-6">Recent Reels</h3>
              <div className="space-y-4">
                {recentReels.map((reel) => (
                  <div key={reel.id} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple/30 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sm line-clamp-1 flex-1 pr-4">{reel.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${reel.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-muted'}`}>
                        {reel.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">{reel.views} Views</span>
                      <span className="font-bold text-purple-light">{reel.earnings}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </SlideUp>
        </div>
      </div>
    </div>
  );
}
