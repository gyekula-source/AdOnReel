"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className = "", hoverEffect = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
        hoverEffect && "transition-all duration-500 hover:bg-white/10 hover:border-purple/30 hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.3)]",
        className
      )}
    >
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
