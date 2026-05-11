"use client";

import { ReactNode } from "react";
import { SlideUp } from "@/components/animations/SlideUp";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  badge: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalLayout({ title, subtitle, badge, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-dark relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-purple/15 rounded-full blur-[100px] top-[-200px] left-[-150px] animate-[float_20s_infinite_ease-in-out_alternate]" />
        <div className="absolute w-[500px] h-[500px] bg-blue/15 rounded-full blur-[100px] bottom-[-100px] right-[-150px] animate-[float_20s_infinite_ease-in-out_alternate-reverse]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <SlideUp>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple-light text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(124,58,237,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-purple shadow-[0_0_8px_var(--purple)]" />
              {badge}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-light">
              {title}
            </h1>
            <p className="text-muted text-lg">{subtitle}</p>
          </div>
        </SlideUp>

        <SlideUp delay={0.1}>
          <div className="flex items-center justify-center gap-4 text-sm text-muted uppercase tracking-wider mb-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/10" />
            Effective Date: {lastUpdated}
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/10" />
          </div>
        </SlideUp>

        <div className="space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}
