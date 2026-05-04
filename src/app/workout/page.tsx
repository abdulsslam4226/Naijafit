"use client";

import BottomNav from "@/components/layout/BottomNav";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/components/ui/toast";

export default function WorkoutPage() {
  const { showToast } = useToast();

  const exercises = [
    {
      name: "Pushups",
      target: "3 sets of 15 reps",
      tip: "Keep elbows tucked in at 45°",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6RgdNZ-USp7c8Db7GPPFTexUoS02C_Fg6dVsvNef16OnAH63g3dyhDitnXiCFZKsXOY6SeFpa3lBKHQFxY_Rk4DUVWmya6R7GYetJsSpE_v1QNaijMDp8i-XljKh6eLP02lqYEAuCjcsJax-UGDMNtaI9wttM8w77-ll5CYx8vPteFumnfRLBEtS6DgUcIBsUYMNaIAbpij_RzU69csWMxQNx_QdCo9YEINMTLKWU6nWVnwKxaQF57pQN22qogbO_EkQcen_8Ifta",
      done: true,
    },
    {
      name: "Mountain Climbers",
      target: "4 sets of 45 seconds",
      tip: "Maintain a flat back throughout",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-qFCpQi25cQZqRHKzEwqBFCOSBbG1ft7GUh8aGAyDvHrl_yjdDIVYEFC_rmX02jGPzoGMSVzcPVSj_kBA8m2z5nq6GbjKG4AERPhABX8MPmHQT2Nm4bFw8khPreORnJkqvO-W06fqC2_GfCQ-W0_Rq4QNSEB37ieGcmhxCtnnyeqIvf6MjzJ_npG4I24X3aOkTPC6lX3Jyg-TylkVJC2Op4IDOsWz1AUzG8h8dsa2v8srjwRpcHemaKpNqvPKaNWXzPxQapjYzSIh",
      active: true,
    },
    {
      name: "Plank",
      target: "3 sets of 1 minute",
      tip: "Focus on deep rhythmic breathing",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBENp6jW3zXQWqH7FSqli1E28m2YuZ1-tXiEQLMxibwhvYBJhmaROgzoSAmotQul_gejgX8bx-ZNgkXCVDCzldoyPfGkyAd8Jgd9TsFdYIg-C8gMCaiIJqVXQNDDwyeRY5wMpN22maM5I5s3pS-Yq2veJaBhwi1hrLQjgjVhy7K66hXUbbBmPIO5C3PlQHP2fwPNQnn0nddwTdBruIAI1h_p3cYeeq56XaLg93QqxZvOVAI2FVh_aRKJ1QyJslcE2tcIwcNaH94U4Ii",
      locked: true,
    },
    {
      name: "Air Squats",
      target: "3 sets of 20 reps",
      tip: "Weight should be on your heels",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXEOeDvpgkVw2e55yo-rxKusX9EZT05mKc4oe18QUJrbMmLKuka9nk0xfiR7M5mh7VeEdJndcfej8CzC8J9g3WH61Pd-hBEBEmPnLjXP_C9wmPZM3bej5ynSITUiigFQfMZXGB8nVS2IQrczPin6vMF51FT581PgytNjnkMxDapPZzZxvThbgls4zH2W5QvXWdbRb3s7NQtM6PrwAM-QfY_3zBvXNpRJgmIm92edkGtUHh598NwGjUklnCIMr1llfC48bflWVLwt6d",
      locked: true,
    }
  ];

  return (
    <div className="bg-background text-on-background font-jakarta min-h-screen pb-48">
      {/* Top App Bar */}
      <header className="bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md font-lexend font-medium text-lg docked full-width top-0 sticky z-50 border-none shadow-sm shadow-emerald-900/5 flex justify-between items-center w-full px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-emerald-100 dark:bg-emerald-900 relative border-2 border-primary/10">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA46_EMdrxoTjPQszLaiElJLhTzwUZTvbR2GBRS5Uod6PhK2keSO7KaefgbHIIiuzYgYtSenvMGwD4NVp5M7oU0ljlOds0SGAWlUIjmQm7y8H6AumsiBIVaoPogeujp8yKmt_S2C3gwtgIu2Yq509bFzMCWhorMBG7qw0l66tsvChaLv-TjpgEEoFXwFK4nqlUWrVSrDEkeKA04ienvxl0DZ2NYtQnDUibA70BGXOICpZliIFFS87id3rvPRjgHDnVPSfDfBAYQ5bFr" 
              alt="User"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-emerald-900 dark:text-emerald-50 font-bold">Hello, Progress!</h1>
        </div>
        <button onClick={() => showToast("No new notifications")} className="hover:opacity-80 transition-opacity active:scale-95 duration-150">
          <span className="material-symbols-outlined text-2xl">notifications</span>
        </button>
      </header>

      <main className="max-w-2xl mx-auto px-6 pt-8 space-y-10">
        {/* Active Workout Header */}
        <div className="mb-10">
          <div className="flex items-baseline justify-between mb-2">
            <h2 className="text-3xl font-bold text-primary dark:text-white font-lexend">Daily Burn</h2>
            <span className="text-xs font-bold bg-secondary text-white px-3 py-1 rounded-full uppercase tracking-widest">Challenging</span>
          </div>
          <p className="text-slate-500 dark:text-emerald-100/60 font-medium text-lg leading-relaxed">Focus on core stability and upper body endurance.</p>
        </div>

        {/* Workout Whiteboard Section */}
        <div className="space-y-4">
          {exercises.map((ex, i) => (
            <div 
              key={i} 
              onClick={() => !ex.locked ? showToast(`Starting ${ex.name}`) : showToast("Unlock this exercise in Phase 2")}
              className={`block bg-white dark:bg-emerald-950 rounded-[32px] p-6 flex gap-6 items-center border border-stone-100 dark:border-emerald-900 transition-all active:scale-[0.98] cursor-pointer shadow-sm ${ex.locked ? "opacity-60" : "hover:border-secondary/30"}`}
            >
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 dark:bg-emerald-900 flex-shrink-0 relative">
                <Image src={ex.image} alt={ex.name} fill className="object-cover" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-primary dark:text-white font-lexend">{ex.name}</h3>
                  {ex.done ? (
                    <span className="material-symbols-outlined text-emerald-400">check_circle</span>
                  ) : ex.active ? (
                    <span className="material-symbols-outlined text-secondary">play_circle</span>
                  ) : (
                    <span className="material-symbols-outlined text-slate-300 dark:text-emerald-800">lock</span>
                  )}
                </div>
                <p className="text-lg font-bold text-primary dark:text-white opacity-80">{ex.target}</p>
                <p className="text-xs text-slate-400 dark:text-emerald-100/40 mt-1 font-bold italic">{ex.tip}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Gauge */}
        <div className="p-10 bg-primary text-white rounded-[40px] flex items-center justify-between overflow-hidden relative shadow-2xl">
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest inline-block">Workout Progress</span>
            <h4 className="text-4xl font-bold font-lexend">45% Complete</h4>
            <div className="h-3 w-48 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-secondary rounded-full" style={{ width: "45%" }}></div>
            </div>
          </div>
          <div className="relative z-10 text-right">
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1">Est. Remaining</p>
            <p className="text-3xl font-bold font-lexend">18 mins</p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl"></div>
        </div>
      </main>

      {/* Music Control Float */}
      <div className="fixed bottom-28 left-6 right-6 z-40 max-w-md mx-auto">
        <div className="bg-white/95 dark:bg-emerald-950/95 backdrop-blur-xl border border-stone-100 dark:border-emerald-900 rounded-[2rem] p-5 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100 dark:bg-emerald-900 relative">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUBYexcgUD58SEADcifD2DqRpukopyWZnIzPYRSSL3wXYn_qHSa9V86d9IQBQghR8OiM4dQ8cORnUBaiSYuHZDI_AmI8JQff5JRghnQhTURa6bxnf_0t6j0wnu-O1SxhFVNZdzy5BuauQ2sJl9eeQHuN-3y0fZR2Y7mJxLCa6GP_ZnBpZ5x1sbGJmlr6hsVFXMICByVhlfBnWCxKdoSN3zwD3O-vp_-5-ftWc8EXmk8-gzvvXsVsqdy4p3sR-GadrD56yYuN192Knb" 
                alt="Album Art"
                fill
                className="object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-primary dark:text-white truncate">Breathe Deep</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate">African Chill Beats</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button onClick={() => showToast("Previous track")} className="material-symbols-outlined text-primary dark:text-white text-2xl opacity-60 hover:opacity-100">skip_previous</button>
            <button onClick={() => showToast("Music paused")} className="w-12 h-12 rounded-full bg-primary dark:bg-emerald-100 flex items-center justify-center text-white dark:text-emerald-900 shadow-xl active:scale-90 transition-transform">
              <span className="material-symbols-outlined">pause</span>
            </button>
            <button onClick={() => showToast("Next track")} className="material-symbols-outlined text-primary dark:text-white text-2xl opacity-60 hover:opacity-100">skip_next</button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
