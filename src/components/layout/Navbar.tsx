"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        scrolled ? "bg-background/80 backdrop-blur-md border-border py-4 shadow-lg" : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.jpg" 
            alt="AdOnReel Logo" 
            width={140} 
            height={50} 
            className="object-contain h-10 w-auto md:h-12"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/features" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Features</Link>
          <Link href="/pricing" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Pricing</Link>
          <Link href="/earnings" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Earnings</Link>
          <Link href="/creators" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">For Creators</Link>
          <Link href="/brands" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">For Brands</Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/login" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors hidden md:block">
            Log in
          </Link>
          <Link 
            href="/register" 
            className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
