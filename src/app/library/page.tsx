"use client";

import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/components/ui/toast";

export default function ExerciseLibraryPage() {
  const { showToast } = useToast();
  const categories = ["All", "Core", "Upper Body", "Lower Body", "Cardio"];
  
  const exercises = [
    {
      name: "Mountain Climbers",
      target: "Core & Cardio",
      level: "Intermediate",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-qFCpQi25cQZqRHKzEwqBFCOSBbG1ft7GUh8aGAyDvHrl_yjdDIVYEFC_rmX02jGPzoGMSVzcPVSj_kBA8m2z5nq6GbjKG4AERPhABX8MPmHQT2Nm4bFw8khPreORnJkqvO-W06fqC2_GfCQ-W0_Rq4QNSEB37ieGcmhxCtnnyeqIvf6MjzJ_npG4I24X3aOkTPC6lX3Jyg-TylkVJC2Op4IDOsWz1AUzG8h8dsa2v8srjwRpcHemaKpNqvPKaNWXzPxQapjYzSIh"
    },
    {
      name: "Pushups",
      target: "Upper Body",
      level: "Beginner",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6RgdNZ-USp7c8Db7GPPFTexUoS02C_Fg6dVsvNef16OnAH63g3dyhDitnXiCFZKsXOY6SeFpa3lBKHQFxY_Rk4DUVWmya6R7GYetJsSpE_v1QNaijMDp8i-XljKh6eLP02lqYEAuCjcsJax-UGDMNtaI9wttM8w77-ll5CYx8vPteFumnfRLBEtS6DgUcIBsUYMNaIAbpij_RzU69csWMxQNx_QdCo9YEINMTLKWU6nWVnwKxaQF57pQN22qogbO_EkQcen_8Ifta"
    },
    {
      name: "Jumping Jacks",
      target: "Cardio",
      level: "Beginner",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMacvYe9-adSiBfjJIgBs3AjCsJqpnl5gDRoZ-WyYGWSlUlw_9tJuggYdgdmoLkUbb5tYx5iHFspc2LYQ49SQ9Q4rnv6DOodlCJ_cJ5u1iiegBXHuKRnTrretE5VuzkZAT-2drRJDcETff7kaFANVU_a-YtSiFZGWG5pSCu9kG0qfWISq93DR_YlncI7z1lO_CROxrjOBwMPoKBxeM4YrNlRZr2B7mrKzoj6jUvZw1TR-OYOhgbEmyBTC-JbaN4f50jMnmpq1q7ky9"
    }
  ];

  return (
    <div className="bg-background min-h-screen pb-48 font-jakarta text-on-background">
      <header className="bg-white dark:bg-emerald-950 p-6 pt-12 pb-6 border-b border-stone-100 dark:border-emerald-900 sticky top-0 z-40">
        <div className="flex items-center gap-4 mb-6">
          <Link href="/workout" className="w-12 h-12 bg-slate-50 dark:bg-emerald-900 flex items-center justify-center text-primary dark:text-white rounded-2xl shadow-sm">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="text-2xl font-bold text-primary dark:text-white font-lexend">Library</h1>
        </div>
        
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input 
            type="text" 
            placeholder="Search movements..." 
            className="w-full bg-slate-50 dark:bg-black border border-stone-100 dark:border-emerald-900 focus:border-secondary rounded-[2rem] py-5 pl-12 pr-12 text-sm font-bold outline-none transition-all dark:text-white"
          />
          <button onClick={() => showToast("Filters coming in Phase 2")} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-emerald-900 flex items-center justify-center text-primary dark:text-white shadow-sm">
            <span className="material-symbols-outlined text-xl">tune</span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 mt-6 space-y-10">
        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat: any, i: number) => (
            <button 
              key={i} 
              onClick={() => showToast(`Filtering by ${cat}`)}
              className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold transition-all ${i === 0 ? 'bg-primary text-white shadow-xl' : 'bg-white dark:bg-emerald-950 text-slate-500 dark:text-emerald-100/60 border border-stone-100 dark:border-emerald-900'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="space-y-4">
          <p className="text-xs font-black text-slate-300 dark:text-emerald-100/10 uppercase tracking-widest px-2">{exercises.length} Results Found</p>
          
          {exercises.map((ex: any, i: number) => (
            <div 
              key={i} 
              onClick={() => showToast(`Opening ${ex.name} tutorial`)}
              className="bg-white dark:bg-emerald-950 p-4 rounded-[32px] shadow-sm border border-stone-100 dark:border-emerald-900 flex gap-5 items-center group cursor-pointer hover:border-secondary transition-colors"
            >
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-slate-100 dark:bg-emerald-900 flex-shrink-0">
                <Image src={ex.image} alt={ex.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-white text-3xl">play_circle</span>
                </div>
              </div>
              <div className="flex-grow py-1">
                <h3 className="text-xl font-bold text-primary dark:text-white font-lexend leading-tight">{ex.name}</h3>
                <p className="text-slate-500 dark:text-emerald-100/60 text-sm font-bold mt-1">{ex.target}</p>
                <div className="mt-3">
                  <span className="bg-emerald-50 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
                    {ex.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
