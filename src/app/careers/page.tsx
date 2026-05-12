"use client";

import { SlideUp } from "@/components/animations/SlideUp";
import { GlassCard } from "@/components/ui/glass-card";
import { Briefcase, ArrowRight, MapPin, Laptop } from "lucide-react";

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Hyderabad",
      type: "Full-time",
    },
    {
      title: "Creator Success Manager",
      department: "Operations",
      location: "Visakhapatnam",
      type: "Full-time",
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Hyderabad",
      type: "Full-time",
    },
    {
      title: "Brand Partnerships Lead",
      department: "Sales",
      location: "Visakhapatnam",
      type: "Full-time",
    },
    {
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Hyderabad",
      type: "Full-time",
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      location: "Visakhapatnam",
      type: "Full-time",
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <SlideUp>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Careers at AdOnReel</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Join a fast-paced, remote-first team revolutionizing the creator economy. At AdOnReel, we value innovation, transparency, and a passion for empowering creators. We are constantly looking for bright minds to help us build the future of advertising.
            </p>
          </div>
        </SlideUp>

        <SlideUp delay={0.1}>
          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
          <div className="space-y-4 mb-16">
            {jobs.map((job, idx) => (
              <GlassCard key={idx} className="p-6 border-border hover:border-primary/50 transition-colors group cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="bg-secondary px-3 py-1 rounded-full">{job.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Laptop className="w-4 h-4" /> {job.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View Role <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </SlideUp>

        <SlideUp delay={0.2}>
          <GlassCard className="p-12 text-center bg-gradient-to-b from-primary/10 to-transparent border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Don't see a fit?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <a 
              href="mailto:careers@adonreels.com" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-colors"
            >
              Email Your Resume
              <ArrowRight className="w-5 h-5" />
            </a>
          </GlassCard>
        </SlideUp>
      </div>
    </div>
  );
}
