"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SlideUp } from "@/components/animations/SlideUp";
import { cn } from "@/lib/utils";

interface LegalSectionProps {
  number: number;
  title: string;
  children: React.ReactNode;
  delay?: number;
}

export function LegalSection({ number, title, children, delay = 0 }: LegalSectionProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SlideUp delay={delay}>
      <div 
        className={cn(
          "bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl transition-all duration-300 overflow-hidden",
          "hover:bg-white/10 hover:border-purple/30 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
        )}
      >
        <div 
          className="flex items-center justify-between p-6 cursor-pointer select-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-xl font-medium text-white flex items-center gap-4 m-0">
            <div className="w-8 h-8 bg-purple/15 text-purple-light border border-purple/30 rounded-lg flex items-center justify-center text-sm font-bold shadow-[inset_0_2px_5px_rgba(255,255,255,0.05)]">
              {number}
            </div>
            {title}
          </h2>
          <ChevronDown 
            className={cn(
              "w-5 h-5 text-muted transition-transform duration-300",
              !isOpen && "rotate-[-90deg]"
            )} 
          />
        </div>
        
        <div 
          className={cn(
            "grid transition-[grid-template-rows] duration-300",
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div className={cn(
              "px-6 pb-6 text-muted prose prose-invert max-w-none transition-opacity duration-300",
              "prose-h3:text-purple-light prose-h3:mt-6 prose-h3:mb-3 prose-p:leading-relaxed prose-li:text-muted",
              isOpen ? "opacity-100 delay-100" : "opacity-0"
            )}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </SlideUp>
  );
}
