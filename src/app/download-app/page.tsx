import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";
import { SlideUp } from "@/components/animations/SlideUp";
import { ArrowRight, Sparkles, Monitor, Zap, HeartPulse } from "lucide-react";

const appRedirectUrl = "https://your-app-download-link.com";

export default function DownloadAppPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <SlideUp>
          <div className="text-center mb-16">
            <p className="inline-flex items-center justify-center gap-2 mb-4 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Download the creator app
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Get the AdOnReel app and start placing brand banners in your videos.
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Install the app, connect your accounts, and manually add sponsored banners to your reels with simple creator controls.
            </p>
          </div>
        </SlideUp>

        <SlideUp delay={0.1}>
          <div className="flex flex-col gap-4 sm:flex-row justify-center mb-16">
            <a
              href={appRedirectUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Open App Download <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              How It Works
            </Link>
          </div>
        </SlideUp>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start mb-20">
          <div className="space-y-8">
            <GlassCard className="p-8 border-border">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center rounded-2xl bg-purple-light/10 p-3 text-purple-light">
                  <Sparkles className="w-6 h-6" />
                </span>
                <div>
                  <h2 className="text-3xl font-bold mb-1">Creator examples made simple</h2>
                  <p className="text-muted-foreground">See exactly how your content becomes monetizable with manual banner placement and in-app preview controls.</p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-3xl bg-secondary/70 p-6 border border-border">
                  <h3 className="font-semibold text-xl mb-2">Example 1: Product Launch Banner</h3>
                  <p className="text-muted-foreground mb-3">
                    The app helps you place a polished callout within your reel: "New drop! Tap to shop the limited sneaker collab." You decide the timing and layout.
                  </p>
                  <div className="text-sm text-foreground/80">Good for: fashion, lifestyle, fitness creators.</div>
                </div>
                <div className="rounded-3xl bg-secondary/70 p-6 border border-border">
                  <h3 className="font-semibold text-xl mb-2">Example 2: Discount Code Banner</h3>
                  <p className="text-muted-foreground mb-3">
                    A branded CTA appears naturally in your video: "Use code REEL10 for 15% off." You choose the exact placement and style that fits your reel.
                  </p>
                  <div className="text-sm text-foreground/80">Good for: beauty, food, travel, and product review creators.</div>
                </div>
                <div className="rounded-3xl bg-secondary/70 p-6 border border-border">
                  <h3 className="font-semibold text-xl mb-2">Example 3: Sponsored Story Frame</h3>
                  <p className="text-muted-foreground mb-3">
                    The app adds a polished banner frame with brand messaging and a subtle CTA. It feels native to your video and builds trust with your audience.
                  </p>
                  <div className="text-sm text-foreground/80">Good for: creator spotlights, tutorials, and branded collaborations.</div>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8 border-border">
              <h2 className="text-3xl font-bold mb-4">Mobile banner size examples</h2>
              <p className="text-muted-foreground mb-6">
                See how standard ad sizes appear inside the app and how they map to a creator’s mobile screen.
              </p>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-3xl bg-secondary/70 p-6 border border-border">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary font-semibold">300x250</span>
                    <div>
                      <h3 className="font-semibold text-xl">Medium Rectangle</h3>
                      <p className="text-sm text-muted-foreground">A compact but bold banner perfect for in-stream promotions.</p>
                    </div>
                  </div>
                  <div className="rounded-3xl bg-background/80 border border-border p-4">
                    <div className="relative h-56 rounded-3xl bg-dark/80 overflow-hidden">
                      <div className="absolute inset-x-6 top-8 h-16 rounded-2xl bg-gradient-to-r from-primary/70 to-blue/70 shadow-xl" />
                      <div className="absolute left-6 top-32 w-28 h-6 rounded-full bg-white/20" />
                      <div className="absolute right-6 bottom-6 text-xs uppercase tracking-[0.2em] text-primary/70">
                        mobile preview
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-foreground/80">
                    Example photo: a mobile creator preview with a 300x250 banner overlay near the middle of the screen, ideal for sponsored product highlights.
                  </div>
                </div>

                <div className="rounded-3xl bg-secondary/70 p-6 border border-border">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary font-semibold">320x50</span>
                    <div>
                      <h3 className="font-semibold text-xl">Mobile Leaderboard</h3>
                      <p className="text-sm text-muted-foreground">A thin banner built for top or bottom placement without blocking the video.</p>
                    </div>
                  </div>
                  <div className="rounded-3xl bg-background/80 border border-border p-4">
                    <div className="relative h-56 rounded-3xl bg-dark/80 overflow-hidden">
                      <div className="absolute inset-x-4 top-6 h-12 rounded-2xl bg-gradient-to-r from-primary/60 to-blue/60 shadow-lg" />
                      <div className="absolute left-6 bottom-12 w-32 h-4 rounded-full bg-white/20" />
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-slate-950/90 flex items-center justify-center text-xs text-primary/70">
                        app preview with bottom banner
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-foreground/80">
                    Example photo: a mobile in-app preview where the 320x50 banner anchors the screen and keeps the content visible.
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          <GlassCard className="p-8 border-border bg-gradient-to-br from-blue-500/10 to-purple-500/10">
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 text-blue-400">
                <Monitor className="w-7 h-7" />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-primary">App experience</p>
                <h3 className="text-2xl font-bold">Instant launch, zero editing hassle</h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Add your socials once, then manually place brand-safe banners in your reels with the app’s preview and timing controls.
            </p>
            <div className="grid gap-4">
              <div className="rounded-3xl bg-background/80 p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Zap className="w-5 h-5" />
                  </span>
                  <div>
                <p className="font-semibold">Creator banner control</p>
                <p className="text-sm text-muted-foreground">Choose the message, design, and placement that fits your reel and audience.</p>
                  </div>
                </div>
                <div className="text-sm text-foreground/80">Example: a fitness coach chooses an overlay that says "Try the 7-day energy boost" and places it in the best moment of the reel.</div>
              </div>
              <div className="rounded-3xl bg-background/80 p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-light/10 text-purple-light">
                    <HeartPulse className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-semibold">Creator-first placement</p>
                    <p className="text-sm text-muted-foreground">Banners are placed to support your narrative, not interrupt it.</p>
                  </div>
                </div>
                <div className="text-sm text-foreground/80">Example: a beauty reel receives a subtle branded badge during product application, keeping the flow natural.</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
