"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

import Image from "next/image";

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
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-dark/80 backdrop-blur-md border-white/10 py-4 shadow-lg shadow-black/20" : "bg-transparent py-6"
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
          <Link href="/features" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Features</Link>
          <Link href="/pricing" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Pricing</Link>
          <Link href="/creators" className="text-sm font-medium text-white/70 hover:text-white transition-colors">For Creators</Link>
          <Link href="/brands" className="text-sm font-medium text-white/70 hover:text-white transition-colors">For Brands</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-white/70 hover:text-white transition-colors hidden md:block">
            Log in
          </Link>
          <Link 
            href="/register" 
            className="text-sm font-semibold bg-white text-dark px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
