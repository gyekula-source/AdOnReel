import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { RevenueCalculator } from "@/components/home/RevenueCalculator";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FoundersSection } from "@/components/home/FoundersSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <RevenueCalculator />
      <FeaturesSection />
      <TestimonialsSection />
      <FoundersSection />
    </div>
  );
}
