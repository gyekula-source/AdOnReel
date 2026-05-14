"use client";

import { SlideUp } from "@/components/animations/SlideUp";
import { GlassCard } from "@/components/ui/glass-card";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SlideUp>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">Get in Touch</h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              Have questions about our platform or want to discuss a custom enterprise plan? Our team is ready to help.
            </p>
          </div>
        </SlideUp>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <SlideUp delay={0.1}>
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-foreground/70 mb-2">Reach out to our team directly.</p>
                  <a href="mailto:ceo@adonreel.com" className="text-primary font-medium hover:underline">ceo@adonreel.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Office Location</h3>
                  <p className="text-foreground/70 mb-2">Visit us at our headquarters.</p>
                  <p className="text-foreground font-medium">INFLUDOT TECHNOLOGIES PRIVATE LIMITED<br/>C/O Talapureddi Sunitha<br/>Panachdarala Dharapalem, Rambilli<br/>Anakapalle, Visakhapatnam<br/>Andhra Pradesh, India - 531061</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-foreground/70 mb-2">Call us during business hours.</p>
                  <a href="tel:+919063810137" className="text-primary font-medium hover:underline">+91 9063810137</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Support Hours</h3>
                  <p className="text-foreground/70 mb-2">When we're online and ready to assist.</p>
                  <p className="text-foreground font-medium">Mon - Fri, 9am - 6pm IST</p>
                </div>
              </div>

              <div className="bg-secondary p-6 rounded-xl border border-primary/10">
                <h3 className="font-semibold text-lg mb-4 text-foreground">Company Information</h3>
                <div className="space-y-2 text-sm text-foreground">
                  <p><strong>CIN:</strong> U74909AP2025PTC120808</p>
                  <p><strong>PAN:</strong> AAICI3762N</p>
                  <p><strong>TAN:</strong> VPNI02010B</p>
                  <p><strong>Incorporated:</strong> Aug 21, 2025</p>
                </div>
              </div>
            </div>
          </SlideUp>

          {/* Contact Form */}
          <SlideUp delay={0.2}>
            <GlassCard className="p-8 border-border">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input type="text" placeholder="Jane" required className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input type="text" placeholder="Doe" required className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <input type="email" placeholder="jane@example.com" required className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea placeholder="How can we help you?" rows={4} required className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={submitted}
                  className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                  {!submitted && <Send className="w-5 h-5" />}
                </button>
              </form>
            </GlassCard>
          </SlideUp>
        </div>
      </div>
    </div>
  );
}
