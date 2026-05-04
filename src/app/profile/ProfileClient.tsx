"use client";

import BottomNav from "@/components/layout/BottomNav";
import Image from "next/image";
import { useToast } from "@/components/ui/toast";
import { signOut } from "next-auth/react";

export default function ProfileClient({ user }: { user: any }) {
  const { showToast } = useToast();

  const handleLogout = async () => {
    showToast("Logging out...");
    await signOut({ callbackUrl: "/" });
  };

  const achievements = [
    { name: "Early Bird", icon: "🌅", description: "5 workouts before 7 AM" },
    { name: "Consistency King", icon: "👑", description: "30 day streak" },
    { name: "Ofada Master", icon: "🌾", description: "Logged 10 healthy meals" },
  ];

  const menuItems = [
    { name: "Edit Profile", icon: "person", color: "bg-blue-50 text-blue-600" },
    { name: "Subscription", icon: "credit_card", color: "bg-purple-50 text-purple-600", badge: "Pro" },
    { name: "Notifications", icon: "notifications", color: "bg-orange-50 text-orange-600" },
    { name: "Privacy & Security", icon: "shield", color: "bg-emerald-50 text-emerald-600" },
    { name: "App Settings", icon: "settings", color: "bg-stone-50 text-stone-600" },
  ];

  return (
    <div className="bg-background text-on-background font-jakarta min-h-screen pb-48">
      {/* Header */}
      <header className="bg-white dark:bg-emerald-950 p-8 pt-12 pb-20 rounded-b-[40px] shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        
        <div className="max-w-md mx-auto flex flex-col items-center text-center relative z-10">
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full border-4 border-white dark:border-emerald-900 shadow-xl overflow-hidden bg-stone-100">
               <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMMlxmeOVzElCTZbTdopGg7va-eeVif_u1SMjGYanOTrxhl5aM8V4dqiKGMCqmPZUd_NqhI2TIX4ETzZPhOP1wCc1y_e0DRc0RVVP01CtUzeRxrWun18OPUV-xAbmfaF48ahMw_ZShymQnJgb4fbxANi5QAyInlGN1Muh7AvRkr7eOj5D2Ps_gPNR6XJLAmCtOLdM1WeLmbFcJXehAnfIcC4CVasQlEw_Oy8779vY9KVSWysuEONnPS4C3-rANbb6dX_kizijkNp9l" 
                alt="User Avatar" 
                width={96} 
                height={96} 
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center border-2 border-white dark:border-emerald-950 shadow-lg">
              <span className="text-[10px] font-bold">LV.5</span>
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-primary dark:text-white font-lexend">{user.name}</h1>
          <p className="text-slate-500 dark:text-emerald-300/60 text-sm font-bold">{user.email} • Lagos, NG</p>
          
          <div className="mt-8 flex gap-4 w-full">
            <div className="flex-1 bg-emerald-50 dark:bg-white/5 p-4 rounded-3xl border border-emerald-100 dark:border-white/10 backdrop-blur-sm">
              <div className="text-xl font-bold text-primary dark:text-emerald-400 font-lexend">{user._count?.mealLogs || 0}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Meals</div>
            </div>
            <div className="flex-1 bg-emerald-50 dark:bg-white/5 p-4 rounded-3xl border border-emerald-100 dark:border-white/10 backdrop-blur-sm">
              <div className="text-xl font-bold text-secondary font-lexend">{user.streak}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Streak</div>
            </div>
            <div className="flex-1 bg-emerald-50 dark:bg-white/5 p-4 rounded-3xl border border-emerald-100 dark:border-white/10 backdrop-blur-sm">
              <div className="text-xl font-bold text-primary dark:text-emerald-400 font-lexend">{user.currentWeight || "—"}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">KG Weight</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 -mt-10 relative z-20 space-y-8">
        {/* Achievements */}
        <section>
          <div className="flex justify-between items-end mb-4 px-2">
            <h2 className="text-xl font-bold text-primary dark:text-white font-lexend">Badges</h2>
            <button onClick={() => showToast("Opening Achievement Gallery")} className="text-secondary text-sm font-bold">View All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            {achievements.map((item, i) => (
              <div key={i} className="min-w-[140px] bg-white dark:bg-emerald-950 p-6 rounded-[32px] shadow-sm border border-stone-100 dark:border-emerald-900 text-center transition-all hover:scale-105 active:scale-95 cursor-pointer">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-xs font-bold text-primary dark:text-white mb-1 font-lexend">{item.name}</div>
                <div className="text-[10px] text-slate-400 dark:text-emerald-100/40 leading-tight font-bold">{item.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Menu Items */}
        <section className="bg-white dark:bg-emerald-950 rounded-[40px] overflow-hidden shadow-sm border border-stone-100 dark:border-emerald-900">
          {menuItems.map((item, i) => (
            <button 
              key={i} 
              onClick={() => showToast(`Opening ${item.name}`)}
              className={`w-full flex items-center justify-between p-6 transition-colors hover:bg-stone-50 dark:hover:bg-emerald-900/40 ${i !== menuItems.length - 1 ? 'border-b border-stone-50 dark:border-emerald-900' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color}`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <span className="font-bold text-primary dark:text-white font-lexend">{item.name}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.badge && (
                  <span className="bg-secondary/10 text-secondary text-[10px] font-black px-2 py-1 rounded-lg tracking-widest uppercase">
                    {item.badge}
                  </span>
                )}
                <span className="material-symbols-outlined text-stone-300 dark:text-emerald-800">chevron_right</span>
              </div>
            </button>
          ))}
        </section>

        {/* Logout */}
        <button onClick={handleLogout} className="w-full bg-red-50 dark:bg-red-950/20 text-red-600 p-6 rounded-[32px] font-bold flex items-center justify-center gap-2 transition-all hover:bg-red-100 active:scale-[0.98]">
          <span className="material-symbols-outlined">logout</span>
          Logout Account
        </button>

        <p className="text-center text-slate-300 dark:text-emerald-100/20 text-[10px] font-black tracking-widest uppercase pb-10">
          NaijaFit v0.1.0 • Built with Pride in NG
        </p>
      </main>

      <BottomNav />
    </div>
  );
}
