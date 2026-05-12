"use client";

import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";
import { SlideUp } from "@/components/animations/SlideUp";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-background relative overflow-hidden flex items-center justify-center">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[600px] bg-blue/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-md relative z-10">
        <SlideUp>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your AdOnReel account</p>
          </div>
          
          <GlassCard className="p-8 border-border">
            <form className="space-y-6">
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
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-foreground">Password</label>
                  <Link href="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
                </div>
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
                className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Sign In
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>



            <div className="mt-6 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/register" className="text-primary font-semibold hover:underline">
                Create one
              </Link>
            </div>
          </GlassCard>
        </SlideUp>
      </div>
    </div>
  );
}
