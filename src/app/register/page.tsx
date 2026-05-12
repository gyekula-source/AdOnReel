"use client";

import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";
import { SlideUp } from "@/components/animations/SlideUp";
import { Mail, Lock, User, ArrowRight, Camera, Building2 } from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [accountType, setAccountType] = useState<"creator" | "brand">("creator");

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-background relative overflow-hidden flex items-center justify-center">
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-blue/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-md relative z-10">
        <SlideUp>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Create Account</h1>
            <p className="text-muted-foreground">Join the AdOnReel revolution</p>
          </div>
          
          <GlassCard className="p-8 border-border">
            <div className="flex p-1 bg-secondary rounded-xl mb-6">
              <button
                onClick={() => setAccountType("creator")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-lg transition-all ${
                  accountType === "creator" ? "bg-background text-foreground shadow" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Camera className="w-4 h-4" /> Creator
              </button>
              <button
                onClick={() => setAccountType("brand")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-lg transition-all ${
                  accountType === "brand" ? "bg-background text-foreground shadow" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Building2 className="w-4 h-4" /> Brand
              </button>
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input 
                    type="email" 
                    placeholder="you@example.com" 
                    className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-4"
              >
                Sign Up
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="text-center text-sm text-muted-foreground mb-4">
                Or explore the platform
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Link 
                  href="/dashboard/creator"
                  className="py-2.5 bg-secondary text-secondary-foreground font-semibold rounded-xl hover:bg-secondary/80 transition-colors flex items-center justify-center text-sm border border-border"
                >
                  Demo Creator
                </Link>
                <Link 
                  href="/dashboard/brand"
                  className="py-2.5 bg-secondary text-secondary-foreground font-semibold rounded-xl hover:bg-secondary/80 transition-colors flex items-center justify-center text-sm border border-border"
                >
                  Demo Brand
                </Link>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-semibold hover:underline">
                Sign in
              </Link>
            </div>
          </GlassCard>
        </SlideUp>
      </div>
    </div>
  );
}
