"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { SlideUp } from "@/components/animations/SlideUp";
import { BarChart3, Users, PlusCircle, Target, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BrandDashboard() {
  const activeCampaigns = [
    { id: 1, name: "Summer Tech Refresh", budget: "$15,000", spent: "$8,450", reach: "1.2M", roi: "2.4x" },
    { id: 2, name: "Back to School Promo", budget: "$25,000", spent: "$2,100", reach: "350K", roi: "1.8x" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SlideUp>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Brand Command Center</h1>
              <p className="text-muted">Track your campaigns and influencer ROI in real-time.</p>
            </div>
            <button className="bg-purple text-white px-6 py-2 rounded-full font-semibold hover:bg-purple/90 transition-colors self-start md:self-auto flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)]">
              <PlusCircle className="w-5 h-5" /> Launch Campaign
            </button>
          </div>
        </SlideUp>

        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <SlideUp delay={0.1}>
            <GlassCard className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue" />
                </div>
                <div className="text-sm font-medium text-muted">Total Reach</div>
              </div>
              <div className="text-3xl font-bold mb-1">4.8M</div>
              <div className="text-sm text-green-400 flex items-center">
                <ArrowUpRight className="w-4 h-4 mr-1" /> +24% vs last month
              </div>
            </GlassCard>
          </SlideUp>

          <SlideUp delay={0.2}>
            <GlassCard className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-purple-light" />
                </div>
                <div className="text-sm font-medium text-muted">Average ROI</div>
              </div>
              <div className="text-3xl font-bold mb-1">3.2x</div>
              <div className="text-sm text-muted">Across all campaigns</div>
            </GlassCard>
          </SlideUp>

          <SlideUp delay={0.3}>
            <GlassCard className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-orange-400" />
                </div>
                <div className="text-sm font-medium text-muted">Active Creators</div>
              </div>
              <div className="text-3xl font-bold mb-1">42</div>
              <div className="text-sm text-muted">Matched via AI</div>
            </GlassCard>
          </SlideUp>

          <SlideUp delay={0.4}>
            <GlassCard className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400 font-bold">$</span>
                </div>
                <div className="text-sm font-medium text-muted">Total Ad Spend</div>
              </div>
              <div className="text-3xl font-bold mb-1">$45,200</div>
              <div className="text-sm text-muted">YTD 2026</div>
            </GlassCard>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Campaigns */}
          <SlideUp delay={0.5} className="lg:col-span-2">
            <GlassCard className="p-6 h-[400px]">
              <h3 className="text-xl font-bold mb-6">Active Campaigns</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="pb-3 text-sm font-medium text-muted">Campaign Name</th>
                      <th className="pb-3 text-sm font-medium text-muted">Budget</th>
                      <th className="pb-3 text-sm font-medium text-muted">Spent</th>
                      <th className="pb-3 text-sm font-medium text-muted">Reach</th>
                      <th className="pb-3 text-sm font-medium text-muted">ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeCampaigns.map((camp, i) => (
                      <tr key={camp.id} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                        <td className="py-4 font-semibold">{camp.name}</td>
                        <td className="py-4">{camp.budget}</td>
                        <td className="py-4 text-purple-light">{camp.spent}</td>
                        <td className="py-4">{camp.reach}</td>
                        <td className="py-4 text-green-400 font-bold">{camp.roi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </SlideUp>

          {/* AI Recommended Influencers */}
          <SlideUp delay={0.6}>
            <GlassCard className="p-6 h-[400px]">
              <h3 className="text-xl font-bold mb-6 flex items-center justify-between">
                AI Matches
                <span className="text-xs bg-purple/20 text-purple-light px-2 py-1 rounded-full border border-purple/30">Live</span>
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-blue/30 transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple to-blue opacity-80" />
                      <div>
                        <div className="font-semibold text-sm">Tech Reviewer #{i + 1}</div>
                        <div className="text-xs text-muted">Est. 50K-80K Reach</div>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-blue bg-blue/10 px-2 py-1 rounded">
                      98% Match
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-2 border border-white/10 rounded-lg text-sm text-muted hover:text-white hover:bg-white/5 transition-colors">
                View All Matches
              </button>
            </GlassCard>
          </SlideUp>
        </div>
      </div>
    </div>
  );
}
