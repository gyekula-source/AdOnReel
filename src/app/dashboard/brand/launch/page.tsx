"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { SlideUp } from "@/components/animations/SlideUp";
import { Upload, Target, DollarSign, ArrowRight, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function LaunchCampaignPage() {
  const [budget, setBudget] = useState<string>("5000");

  const platformFee = Number(budget) * 0.1; // 10% mock fee
  const totalSpend = Number(budget) + platformFee;

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <SlideUp>
          <div className="mb-10">
            <Link href="/dashboard/brand" className="text-primary text-sm hover:underline mb-4 inline-block">
              &larr; Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold mb-2">Launch New Campaign</h1>
            <p className="text-muted-foreground">Upload your creatives and let our AI distribute them to the right creators.</p>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <SlideUp delay={0.1}>
              <GlassCard className="p-8 border-border">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Campaign Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold border-b border-border pb-2">Campaign Details</h3>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Campaign Name</label>
                      <input type="text" placeholder="e.g., Summer Sale 2026" className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Target Niche</label>
                      <select className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground appearance-none">
                        <option value="tech">Technology & Gadgets</option>
                        <option value="lifestyle">Lifestyle & Fashion</option>
                        <option value="gaming">Gaming</option>
                        <option value="finance">Finance & Crypto</option>
                      </select>
                    </div>
                  </div>

                  {/* Banner Upload */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-semibold border-b border-border pb-2">Creative Assets</h3>
                    <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <Upload className="w-6 h-6 text-primary" />
                      </div>
                      <p className="font-semibold mb-1">Click to upload or drag and drop</p>
                      <p className="text-sm text-muted-foreground">PNG, JPG, or GIF (Vertical 9:16 recommended)</p>
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-semibold border-b border-border pb-2">Budget Allocation</h3>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Campaign Budget (₹)</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">₹</span>
                        <input 
                          type="number" 
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          min={1000}
                          className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground font-bold"
                        />
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    Launch Campaign
                    <ArrowRight className="w-5 h-5" />
                  </button>

                </form>
              </GlassCard>
            </SlideUp>
          </div>

          {/* Summary Panel */}
          <div className="md:col-span-1">
            <SlideUp delay={0.2}>
              <GlassCard className="p-6 border-border sticky top-24">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Estimated Reach
                </h3>
                
                <div className="text-3xl font-bold text-primary mb-2">
                  ~{Math.floor(Number(budget) * 2.5).toLocaleString()}
                </div>
                <p className="text-sm text-muted-foreground mb-6">Estimated impressions based on current AI matching.</p>

                <h3 className="font-semibold mb-4 flex items-center gap-2 border-t border-border pt-6">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  Cost Summary
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Campaign Budget</span>
                    <span>₹{Number(budget).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground border-b border-border pb-3">
                    <span>Platform Fee (10%)</span>
                    <span>₹{platformFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-1">
                    <span>Total Cost</span>
                    <span>₹{totalSpend.toLocaleString()}</span>
                  </div>
                </div>
              </GlassCard>
            </SlideUp>
          </div>
        </div>
      </div>
    </div>
  );
}
