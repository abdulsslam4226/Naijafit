"use client";

import BottomNav from "@/components/layout/BottomNav";
import Image from "next/image";
import { useState } from "react";
import { useToast } from "@/components/ui/toast";
import { toggleMovement } from "@/app/actions";

export default function TrackerClient({ initialStreak, hasMovedToday }: { initialStreak: number, hasMovedToday: boolean }) {
  const [moved, setMoved] = useState(hasMovedToday);
  const [streak, setStreak] = useState(initialStreak);
  const { showToast } = useToast();

  const handleMove = async (isMoved: boolean) => {
    try {
      await toggleMovement(isMoved);
      setMoved(isMoved);
      if (isMoved && !moved) setStreak(s => s + 1);
      showToast(isMoved ? "Movement logged! Keep it up!" : "Check-in updated.");
    } catch (e) {
      showToast("Error saving progress.");
    }
  };
  return (
    <div className="bg-background text-on-background font-jakarta min-h-screen pb-32">
      {/* Top App Bar */}
      <header className="bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md font-lexend font-medium text-lg top-0 sticky z-50 shadow-sm shadow-emerald-900/5 flex justify-between items-center w-full px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed relative">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMMlxmeOVzElCTZbTdopGg7va-eeVif_u1SMjGYanOTrxhl5aM8V4dqiKGMCqmPZUd_NqhI2TIX4ETzZPhOP1wCc1y_e0DRc0RVVP01CtUzeRxrWun18OPUV-xAbmfaF48ahMw_ZShymQnJgb4fbxANi5QAyInlGN1Muh7AvRkr7eOj5D2Ps_gPNR6XJLAmCtOLdM1WeLmbFcJXehAnfIcC4CVasQlEw_Oy8779vY9KVSWysuEONnPS4C3-rANbb6dX_kizijkNp9l" 
              alt="User"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-emerald-900 dark:text-emerald-50 font-bold">Hello, Progress!</h1>
        </div>
        <button className="text-emerald-900 dark:text-emerald-50 hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <main className="max-w-md mx-auto px-6 pt-8 space-y-10">
        {/* Check-in Section */}
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold text-primary dark:text-white font-lexend">Did you move today?</h2>
            <p className="text-slate-500 dark:text-emerald-100/60 font-medium">No pressure, just checking in on your energy.</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <button 
              onClick={() => handleMove(true)}
              className={`flex items-center justify-between p-6 rounded-[32px] bg-white dark:bg-emerald-950 border transition-all shadow-sm group ${moved ? 'border-secondary' : 'border-stone-100 dark:border-emerald-900'}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${moved ? 'bg-secondary text-white' : 'bg-emerald-100 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-100'}`}>
                  <span className="material-symbols-outlined text-3xl">{moved ? 'check_circle' : 'check_circle'}</span>
                </div>
                <span className="text-xl font-bold text-primary dark:text-white font-lexend">Yes, I crushed it!</span>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            <button 
              onClick={() => handleMove(true)}
              className="flex items-center justify-between p-6 rounded-[32px] bg-white dark:bg-emerald-950 border border-stone-100 dark:border-emerald-900 hover:border-secondary transition-all shadow-sm group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-3xl">motion_photos_on</span>
                </div>
                <span className="text-xl font-bold text-primary dark:text-white font-lexend">Small movement</span>
              </div>
              <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
            {/* Bad Day Anchor */}
            <div 
              onClick={() => handleMove(true)}
              className="relative overflow-hidden rounded-[32px] bg-secondary text-white p-6 group cursor-pointer active:scale-95 duration-150 shadow-xl shadow-orange-900/10"
            >
              <div className="relative z-10 flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-lexend">Having a 'Bad Day'?</h3>
                  <p className="text-orange-100/80 font-medium">Try a 5-min bed stretch. No shame.</p>
                </div>
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">bedtime</span>
                </div>
              </div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </section>

        {/* Weekly Habit Streak */}
        <section className="bg-emerald-50 dark:bg-emerald-950/40 rounded-[40px] p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">local_fire_department</span>
                <h3 className="text-2xl font-bold text-primary dark:text-white font-lexend">{streak} Day Streak</h3>
              </div>
              <p className="text-sm font-bold text-slate-500 dark:text-emerald-100/60 mt-1">Consistency over perfection!</p>
            </div>
            <div className="bg-white dark:bg-emerald-900 px-4 py-2 rounded-2xl shadow-sm text-xs font-bold text-primary dark:text-white">
              72% This Week
            </div>
          </div>
          <div className="flex justify-between items-center">
            {[
              { day: "M", done: true },
              { day: "T", done: true },
              { day: "W", done: true },
              { day: "T", current: true },
              { day: "F", upcoming: true },
              { day: "S", upcoming: true },
              { day: "S", upcoming: true },
            ].map((d, i) => (
              <div key={i} className={`flex flex-col items-center gap-2 ${d.upcoming ? "opacity-20" : ""}`}>
                <span className={`text-xs font-bold ${d.done || d.current ? "opacity-40" : ""}`}>{d.day}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  d.done ? "bg-primary text-white" : 
                  d.current ? "bg-secondary text-white ring-4 ring-orange-100 shadow-lg" : 
                  "bg-slate-200 dark:bg-emerald-800"
                }`}>
                  {d.done && <span className="material-symbols-outlined">done</span>}
                  {d.current && <span className="material-symbols-outlined">bolt</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Progress Card */}
        <section className="relative h-56 rounded-[40px] overflow-hidden organic-gradient p-10 text-white flex flex-col justify-center group cursor-pointer shadow-2xl">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF9l6MKnXHiFis9iKJ3QHysMkBznwQFmwsBtfPzNQs6iZYBigEbhssyfoxkUH02vrPHQ_TXGFw516KNoDyHq-hSqikodEo51y_USGpPKYM36EE5PaH8uJveJ6UoswV77DL0VuBi5GJrpMnlUqSUNIpxfSNWf5i8We5RPpsUa4McfLsRhBy3uQdXQSUBQy1wHzR9-cBYn9ZJs-FLMaD-jPmSSfMCWkGn6Ticz_L1dddYqNuvR7vgPzIweoN-ROhEC5-q43lh6QDFEoT" 
            alt="Training"
            fill
            className="object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="relative z-10 space-y-4">
            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest inline-block">Naija Strength</span>
            <h4 className="text-3xl font-bold font-lexend leading-tight">Your movement is <br/> your medicine.</h4>
            <div className="flex items-center gap-2 text-sm font-bold opacity-80">
              View Activity <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
