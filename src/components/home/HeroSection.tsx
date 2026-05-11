"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { SlideUp } from "@/components/animations/SlideUp";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-blue/20 rounded-full blur-[100px] mix-blend-screen" style={{ animationDuration: '4s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] z-0 opacity-10" />

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <FadeIn>
          <div className="inline-flex items-center rounded-full border border-purple/30 bg-purple/10 px-3 py-1 text-sm font-medium text-purple-light backdrop-blur-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-purple mr-2 animate-pulse" />
            AdOnReel 2.0 is live
          </div>
        </FadeIn>

        <SlideUp delay={0.1}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Turn Every Reel <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue">Into Revenue</span>
          </h1>
        </SlideUp>

        <SlideUp delay={0.2}>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl text-muted mb-10">
            Monetize Instagram engagement instantly through AI-powered influencer advertising campaigns. Connect with top brands and turn views into cash.
          </p>
        </SlideUp>

        <SlideUp delay={0.3} className="flex flex-col sm:flex-row gap-4 items-center">
          <MagneticButton>
            <div className="flex items-center rounded-full bg-white text-dark px-8 py-4 font-semibold hover:bg-white/90 transition-colors cursor-pointer">
              Start Earning <ArrowRight className="ml-2 h-5 w-5" />
            </div>
          </MagneticButton>
          <MagneticButton>
            <div className="flex items-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 font-semibold text-white hover:bg-white/10 transition-colors cursor-pointer">
              Launch Campaign <PlayCircle className="ml-2 h-5 w-5" />
            </div>
          </MagneticButton>
        </SlideUp>

        {/* Dashboard/Reel Mockup Preview */}
        <FadeIn delay={0.5} className="mt-20 w-full max-w-5xl relative">
          <div className="rounded-2xl border border-white/10 bg-dark/50 backdrop-blur-xl p-2 shadow-2xl relative overflow-hidden">
            {/* Glossy top highlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-xl bg-body relative overflow-hidden flex items-center justify-center">
              {/* Animated placeholder for the dashboard/reel interface */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-purple/10 to-blue/5"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <div className="text-muted/50 font-mono text-sm flex flex-col items-center">
                <PlayCircle className="h-12 w-12 mb-4 opacity-50" />
                [Interactive Dashboard Mockup]
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            className="absolute -right-12 top-10 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-xl hidden lg:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-xs text-muted mb-1">Instant Payout</div>
            <div className="text-xl font-bold text-green-400">+$450.00</div>
          </motion.div>

          <motion.div 
            className="absolute -left-12 bottom-20 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-xl hidden lg:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="text-xs text-muted mb-1">Live Views</div>
            <div className="text-xl font-bold text-white flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse" />
              1.2M
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
