"use client";

import { SlideUp } from "@/components/animations/SlideUp";
import { GlassCard } from "@/components/ui/glass-card";

export function FoundersSection() {
  const founders = [
    {
      name: "Talapureddi. Sai jhansi",
      role: "Director",
      bio: "Steering the company towards transformative market leadership in the creator economy with innovative technology solutions.",
      image: "/founder1.jpg",
    },
    {
      name: "Talapureddi. Sasi Kiran",
      role: "Director",
      bio: "Driving operational excellence and strategic growth initiatives, ensuring seamless creator-brand collaborations worldwide.",
      image: "/founder2.jpg",
    },
    {
      name: "Uma Ganesh Allada",
      role: "Founder & CEO",
      bio: "Leading the vision for creator empowerment and platform innovation with a passion for democratizing social media monetization. Steering the company towards transformative market leadership in the creator economy with innovative technology solutions.",
      image: "/founder3.jpg",
    }
  ];

  return (
    <section id="founders" className="py-24 relative overflow-hidden bg-[#FDD7E4]">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <SlideUp>
            <div className="inline-flex items-center gap-2 bg-purple/10 border border-purple/30 text-purple-light text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              Our Team
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Meet the Founders
            </h2>

            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              The visionaries building the future of creator monetization.
            </p>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {founders.map((founder, index) => (
            <SlideUp key={founder.name} delay={index * 0.1}>
              <GlassCard className="p-8 h-full group hover:-translate-y-2 transition-all duration-500 border-purple/20 hover:border-purple/40 hover:shadow-[0_20px_40px_rgba(233,30,99,0.15)]">
                <div className="text-center">
                  
                  {/* Founder Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border-4 border-purple/30 group-hover:border-purple/50 transition-colors duration-300 shadow-lg">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-purple/20 to-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                  </div>

                  {/* Founder Info */}
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-purple transition-colors duration-300">
                    {founder.name}
                  </h3>

                  <p className="text-lg font-semibold text-purple mb-4">
                    {founder.role}
                  </p>

                  <p className="text-foreground/70 leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </GlassCard>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}