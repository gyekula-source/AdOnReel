"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { SlideUp } from "@/components/animations/SlideUp";
import { Wallet, Banknote, CreditCard, ArrowRight, Building } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function WithdrawFundsPage() {
  const [method, setMethod] = useState<"bank" | "paypal">("bank");
  const [amount, setAmount] = useState<string>("4250");
  const availableBalance = 4250.00;

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <SlideUp>
          <div className="mb-10">
            <Link href="/dashboard/creator" className="text-primary text-sm hover:underline mb-4 inline-block">
              &larr; Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold mb-2">Withdraw Funds</h1>
            <p className="text-muted-foreground">Transfer your earnings directly to your preferred account.</p>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Balance Summary */}
          <div className="md:col-span-1">
            <SlideUp delay={0.1}>
              <GlassCard className="p-6 border-border mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center">
                    <Wallet className="w-5 h-5 text-purple-light" />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">Available Balance</div>
                </div>
                <div className="text-4xl font-bold mb-1">₹4,250.00</div>
                <div className="text-sm text-green-500 mt-2">Ready for withdrawal</div>
              </GlassCard>
            </SlideUp>

            <SlideUp delay={0.2}>
              <GlassCard className="p-6 border-border">
                <h3 className="font-semibold mb-4">Recent Withdrawals</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <Banknote className="w-4 h-4 text-muted-foreground" />
                      <span>Apr 12</span>
                    </div>
                    <span className="font-medium">₹2,100.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-muted-foreground" />
                      <span>Mar 28</span>
                    </div>
                    <span className="font-medium">₹5,400.00</span>
                  </div>
                </div>
              </GlassCard>
            </SlideUp>
          </div>

          {/* Withdrawal Form */}
          <div className="md:col-span-2">
            <SlideUp delay={0.3}>
              <GlassCard className="p-8 border-border">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Amount */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground">Withdrawal Amount (₹)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">₹</span>
                      <input 
                        type="number" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        max={availableBalance}
                        min={100}
                        className="w-full pl-10 pr-4 py-4 text-xl font-bold bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Minimum: ₹100.00</span>
                      <button type="button" onClick={() => setAmount(availableBalance.toString())} className="text-primary hover:underline">Withdraw All</button>
                    </div>
                  </div>

                  {/* Method Selection */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground">Withdrawal Method</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setMethod("bank")}
                        className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${
                          method === "bank" ? "border-primary bg-primary/10 text-primary" : "border-border bg-card text-muted-foreground hover:border-primary/50"
                        }`}
                      >
                        <Building className="w-6 h-6" />
                        <span className="text-sm font-medium">Bank Transfer</span>
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setMethod("paypal")}
                        className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${
                          method === "paypal" ? "border-blue-400 bg-blue-400/10 text-blue-500" : "border-border bg-card text-muted-foreground hover:border-blue-400/50"
                        }`}
                      >
                        <CreditCard className="w-6 h-6" />
                        <span className="text-sm font-medium">PayPal</span>
                      </button>
                    </div>
                  </div>

                  {/* Dynamic Fields based on method */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    {method === "bank" && (
                      <>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Account Holder Name</label>
                          <input type="text" placeholder="Sarah Jenkins" className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Account Number / IBAN</label>
                          <input type="text" placeholder="XXXX XXXX XXXX 1234" className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">IFSC / Swift Code</label>
                          <input type="text" placeholder="BANK0001234" className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" />
                        </div>
                      </>
                    )}

                    {method === "paypal" && (
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">PayPal Email Address</label>
                        <input type="email" placeholder="sarah@example.com" className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 text-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Summary & Submit */}
                  <div className="bg-secondary/50 p-4 rounded-xl border border-border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Withdrawal Amount</span>
                      <span className="font-medium text-foreground">₹{amount || "0"}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-border/50">
                      <span className="text-sm text-muted-foreground">Processing Fee (0%)</span>
                      <span className="font-medium text-green-500">Free</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-foreground">Total to Receive</span>
                      <span className="text-xl font-bold text-primary">₹{amount || "0"}</span>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Confirm Withdrawal
                    <ArrowRight className="w-5 h-5" />
                  </button>

                </form>
              </GlassCard>
            </SlideUp>
          </div>
        </div>
      </div>
    </div>
  );
}
