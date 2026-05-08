"use client";

import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/components/ui/toast";

export default function ProPage() {
  const { showToast } = useToast();
  const benefits = [
    "Direct WhatsApp access to certified coaches",
    "Personalized meal plans with local flavors",
    "Form correction via private video feedback",
    "Exclusive accountability group access",
    "Priority support & weekly check-ins"
  ];

  return (
    <div className="bg-[#051c14] min-h-screen text-white font-jakarta pb-48">
      {/* Dynamic Header */}
      <div className="relative pt-12 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-md mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <Link href="/profile" className="w-12 h-12 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <span className="bg-secondary/10 text-secondary text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em] border border-secondary/20">NaijaFit Pro</span>
          </div>

          <div className="text-center space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-[32px] bg-gradient-to-tr from-secondary to-orange-400 shadow-2xl shadow-secondary/40 rotate-12">
              <span className="material-symbols-outlined text-4xl text-white">grade</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl font-bold font-lexend leading-tight tracking-tight">
                Never Feel <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-300">Stuck Again.</span>
              </h1>
              <p className="text-emerald-100/60 text-lg leading-relaxed max-w-[300px] mx-auto font-medium">
                1-on-1 coaching, custom meal plans, and real accountability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-md mx-auto px-6 -mt-10 relative z-20 space-y-10">
        {/* Pricing Card */}
        <div className="bg-gradient-to-b from-white/10 to-white/5 p-1 rounded-[48px] backdrop-blur-3xl border border-white/10 shadow-3xl">
          <div className="bg-[#051c14]/80 p-10 rounded-[44px] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-orange-400 to-secondary"></div>
            
            <div className="flex justify-between items-start mb-10">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">Monthly Plan</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold font-lexend">₦15,000</span>
                  <span className="text-emerald-100/40 text-sm font-medium">/mo</span>
                </div>
              </div>
              <div className="bg-secondary/20 text-secondary text-[10px] font-black px-3 py-1.5 rounded-lg tracking-widest uppercase">POPULAR</div>
            </div>

            <div className="space-y-6 mb-12">
              {benefits.map((benefit: any, i: number) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary text-sm">check</span>
                  </div>
                  <span className="text-sm font-medium text-emerald-50/90 leading-tight">{benefit}</span>
                </div>
              ))}
            </div>

            <button 
              onClick={() => showToast("Opening payment portal...")}
              className="w-full bg-secondary text-white py-6 rounded-full font-bold shadow-2xl shadow-secondary/30 active:scale-95 transition-all flex justify-center items-center gap-3 text-lg font-lexend"
            >
              <span className="material-symbols-outlined text-2xl">bolt</span>
              Upgrade to PRO
            </button>
            <p className="text-center text-[10px] font-black text-emerald-100/20 mt-6 uppercase tracking-widest">Secure Paystack Payment • Cancel Anytime</p>
          </div>
        </div>

        {/* Coach Section */}
        <div className="bg-white/5 p-8 rounded-[40px] border border-white/5 flex gap-5 items-center backdrop-blur-md">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-secondary/40 flex-shrink-0">
             <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMMlxmeOVzElCTZbTdopGg7va-eeVif_u1SMjGYanOTrxhl5aM8V4dqiKGMCqmPZUd_NqhI2TIX4ETzZPhOP1wCc1y_e0DRc0RVVP01CtUzeRxrWun18OPUV-xAbmfaF48ahMw_ZShymQnJgb4fbxANi5QAyInlGN1Muh7AvRkr7eOj5D2Ps_gPNR6XJLAmCtOLdM1WeLmbFcJXehAnfIcC4CVasQlEw_Oy8779vY9KVSWysuEONnPS4C3-rANbb6dX_kizijkNp9l" 
              alt="Coach" 
              fill
              className="object-cover"
            />
            <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#051c14]"></div>
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-lg font-lexend">Coach Tunde is online</h3>
            <p className="text-xs font-medium text-emerald-100/40">Response time: ~5 mins</p>
          </div>
          <button onClick={() => showToast("Starting chat with Coach...")} className="ml-auto bg-green-500/10 w-12 h-12 rounded-2xl flex items-center justify-center text-green-400 border border-green-500/20 active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-2xl">chat_bubble</span>
          </button>
        </div>
      </main>
    </div>
  );
}
