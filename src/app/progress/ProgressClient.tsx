"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/components/ui/toast";
import { logWeight } from "@/app/actions";

export default function ProgressClient({ initialWeight, targetWeight, streak, recentLogs }: { initialWeight: number, targetWeight: number, streak: number, recentLogs: any[] }) {
  const [currentWeight, setCurrentWeight] = useState(initialWeight);
  const { showToast } = useToast();

  const handleWeightUpdate = async () => {
    const newWeight = prompt("Enter current weight (KG):", currentWeight.toString());
    if (newWeight && !isNaN(parseFloat(newWeight))) {
      const weightNum = parseFloat(newWeight);
      try {
        await logWeight(weightNum);
        setCurrentWeight(weightNum);
        showToast("Weight log updated!");
      } catch (e) {
        showToast("Error saving weight.");
      }
    }
  };
  const weeklyStats = [
    { day: "M", height: "h-12", active: true },
    { day: "T", height: "h-20", active: true },
    { day: "W", height: "h-16", active: true },
    { day: "T", height: "h-24", active: true },
    { day: "F", height: "h-8", active: false },
    { day: "S", height: "h-4", active: false },
    { day: "S", height: "h-6", active: false },
  ];

  return (
    <div className="bg-background min-h-screen pb-48 font-jakarta text-on-background">
      <header className="bg-primary text-white p-8 pt-12 pb-24 rounded-b-[60px] shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-10 bottom-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-md mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <Link href="/profile" className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="text-2xl font-bold font-lexend">Your Analytics</h1>
          </div>

          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">Current Streak</p>
              <div className="text-6xl font-bold font-lexend flex items-baseline gap-3">
                {streak} <span className="text-2xl text-secondary">Days</span>
              </div>
            </div>
            <div className="w-20 h-20 bg-secondary/20 border border-secondary/30 rounded-3xl flex items-center justify-center text-secondary shadow-2xl">
              <span className="material-symbols-outlined text-4xl">local_fire_department</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 -mt-12 relative z-20 space-y-10">
        {/* Weekly Activity Chart */}
        <section className="bg-white dark:bg-emerald-950 p-8 rounded-[40px] shadow-sm border border-stone-100 dark:border-emerald-900">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold text-primary dark:text-white font-lexend">Activity</h2>
            <select className="bg-slate-50 dark:bg-emerald-900 text-[10px] font-black text-slate-400 dark:text-emerald-100/60 py-2 px-4 rounded-full border-none outline-none uppercase tracking-widest">
              <option>This Week</option>
              <option>Last Week</option>
            </select>
          </div>
          
          <div className="flex justify-between items-end h-40 mb-4 px-2">
            {weeklyStats.map((stat: any, i: number) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div 
                  onClick={() => stat.active && showToast(`Activity on ${stat.day}: 45 mins`)}
                  className={`w-10 rounded-2xl ${stat.active ? 'bg-secondary shadow-lg shadow-orange-900/10' : 'bg-slate-100 dark:bg-emerald-900/50'} ${stat.height} relative group cursor-pointer transition-all hover:scale-105 active:scale-95`}
                >
                </div>
                <span className={`text-xs font-black ${stat.active ? 'text-primary dark:text-white' : 'text-slate-300 dark:text-emerald-100/10'}`}>{stat.day}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bad Day Progress */}
        <section className="bg-secondary text-white p-8 rounded-[40px] shadow-2xl relative overflow-hidden group">
          <div className="absolute right-[-20px] top-[-20px] w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-100">Bad Day Protection</p>
              <h3 className="text-4xl font-bold font-lexend">3 Saved</h3>
              <p className="text-sm font-medium text-orange-100/80 mt-2 max-w-[200px] leading-relaxed">
                You chose 5-min movement instead of skipping.
              </p>
            </div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
              <span className="material-symbols-outlined text-3xl text-white">shield</span>
            </div>
          </div>
        </section>

        {/* Weight Tracker */}
        <section className="bg-white dark:bg-emerald-950 p-8 rounded-[40px] shadow-sm border border-stone-100 dark:border-emerald-900">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold text-primary dark:text-white font-lexend">Weight</h2>
            <button onClick={handleWeightUpdate} className="bg-emerald-50 dark:bg-emerald-900 text-primary dark:text-emerald-400 w-10 h-10 rounded-full flex items-center justify-center shadow-md active:scale-90 transition-transform">
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-[10px] font-black text-slate-300 dark:text-emerald-100/10 uppercase tracking-widest mb-2">Current</p>
              <p className="text-2xl font-bold text-primary dark:text-white font-lexend">{currentWeight} <span className="text-xs text-slate-400 font-medium">KG</span></p>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-300 dark:text-emerald-100/10 uppercase tracking-widest mb-2">Target</p>
              <p className="text-2xl font-bold text-primary dark:text-white font-lexend">{targetWeight} <span className="text-xs text-slate-400 font-medium">KG</span></p>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-300 dark:text-emerald-100/10 uppercase tracking-widest mb-2">Lost</p>
              <p className="text-2xl font-bold text-secondary font-lexend">{(initialWeight - currentWeight).toFixed(1)} <span className="text-xs font-medium">KG</span></p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-stone-100 dark:border-emerald-900">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-900 flex items-center justify-center text-emerald-500">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <p className="text-sm font-medium text-slate-600 dark:text-emerald-100/60 leading-relaxed">
                On track to hit goal by <span className="font-bold text-primary dark:text-white">Dec 15</span>.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
