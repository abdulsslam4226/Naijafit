"use client";

import React, { useState } from "react";
import BottomNav from "@/components/layout/BottomNav";
import MarketList from "@/components/ui/MarketList";
import Image from "next/image";
import { useToast } from "@/components/ui/toast";
import { updatePantry } from "@/app/actions";

export default function NutritionClient({ initialPantry }: { initialPantry: any[] }) {
  const [pantry, setPantry] = useState(initialPantry);
  const [showMarketList, setShowMarketList] = useState(false);
  const { showToast } = useToast();

  const handlePantryUpdate = async (name: string, currentCount: number, unit: string) => {
    const newCount = currentCount + 1;
    try {
      await updatePantry(name, newCount, unit);
      setPantry((prev: any[]) => prev.map((item: any) => item.name === name ? { ...item, count: newCount } : item));
      showToast(`Added 1 ${unit} of ${name}`);
    } catch (e) {
      showToast("Error updating pantry.");
    }
  };

  return (
    <div className="bg-background text-on-background font-jakarta min-h-screen pb-48">
      {/* Market List Modal Overlay */}
      {showMarketList && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-primary/40 dark:bg-black/60 backdrop-blur-sm" 
            onClick={() => setShowMarketList(false)}
          />
          <div className="relative w-full max-w-md animate-in fade-in zoom-in duration-300">
            <MarketList />
            <button 
              onClick={() => setShowMarketList(false)}
              className="absolute top-4 right-4 text-white hover:scale-110 transition-transform"
            >
              <span className="material-symbols-outlined text-3xl">cancel</span>
            </button>
          </div>
        </div>
      )}

      {/* Top App Bar */}
      <header className="bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-md font-lexend font-medium text-lg top-0 sticky z-50 border-none shadow-sm shadow-emerald-900/5 flex justify-between items-center w-full px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-emerald-100 dark:bg-emerald-900 relative border-2 border-primary/10">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrnWy22_t1toOkBERkHKsdA38mFlJh1wPJkgSYppYYir3e_9KeL6vVFTs3w4Op8JgNXlgeT2kiL9Pt_BCzNkY-KVVaYSnDjdgpEfAaxdB7tEnVYVFAdhktDqXOo0O-DFXI6xA7YxgphhpavPzBiZuaCdNougGrna4Qird6i2W7BcmsBQSw9PDPsjEemWzCSvNTOzDlncaLUPZk1NyzlBrydmxMz0wGk_N92zHsSaY4jWxuYd3xVMvSaxfPIDXsWJQKbYsSg4dgqZez" 
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

      <main className="max-w-md mx-auto px-6 mt-8 space-y-10">
        {/* Portion Rule Card */}
        <section className="bg-primary text-white rounded-[40px] p-8 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-4">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest inline-block">Daily Guide</span>
            <h2 className="text-3xl font-bold font-lexend leading-tight">The Golden Rule</h2>
            <p className="text-emerald-100/60 font-medium leading-relaxed">Fueling progress with Nigerian staples. Aim for 1/2 veg, 1/4 protein, 1/4 grains.</p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-400">restaurant</span>
                <div>
                  <p className="text-xs font-bold uppercase opacity-60">1/4 Plate</p>
                  <p className="text-sm font-bold">Rice/Yam</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-400">eco</span>
                <div>
                  <p className="text-xs font-bold uppercase opacity-60">1/2 Plate</p>
                  <p className="text-sm font-bold">Greens</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 opacity-20">
            <span className="material-symbols-outlined text-[180px]">nutrition</span>
          </div>
        </section>

        {/* Meal Ideas */}
        <section className="space-y-6">
          <div className="flex justify-between items-end px-2">
            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-white font-lexend">Naija Fuel</h3>
              <p className="text-slate-500 dark:text-emerald-100/60 font-medium">Traditional flavors, modern macros.</p>
            </div>
            <button onClick={() => showToast("Opening Recipe Library")} className="text-secondary font-bold text-sm flex items-center gap-1">
              View all <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
          
          <div className="space-y-4">
            <div 
              onClick={() => showToast("Opening Jollof recipe")}
              className="bg-white dark:bg-emerald-950 rounded-[32px] overflow-hidden border border-stone-100 dark:border-emerald-900 shadow-sm group cursor-pointer"
            >
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp5le76TNflk37vwnZtyHT05It3UpOQjJSCr55tonZDKPgNflHElA-VtP1ABBA0g4A3h_3pxkLO45gVj76n9cJPz7H2nIzxhb3919gtgicniizt3O1lbYcUoBV6cFJ1_1wsCvOHGy4xsqcZz-CS0DikMqahj5JAwXFNZG6ZmRtGJAdR37isJJPGYMMjNIjFcJ21D3BwwUssEaRiyAQwPzDYrNrvjh-pm41janHJJTlLaJQGFbhP3zMvRqs1i1uDSr03Ff9rfhvDpMs" 
                  alt="Brown Jollof"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-2">
                  <span className="text-[10px] font-bold bg-secondary/10 text-secondary px-2 py-1 rounded-full uppercase">Lunch</span>
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-900 px-2 py-1 rounded-full uppercase">Fiber Rich</span>
                </div>
                <h4 className="text-xl font-bold text-primary dark:text-white font-lexend">Brown Jollof & Stir-fry</h4>
                <div className="mt-4 flex gap-6 text-xs font-bold text-slate-400">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">timer</span> 45m</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bolt</span> 520 kcal</span>
                </div>
              </div>
            </div>

            <div 
              onClick={() => showToast("Opening Beans recipe")}
              className="bg-white dark:bg-emerald-950 rounded-[32px] overflow-hidden border border-stone-100 dark:border-emerald-900 shadow-sm group cursor-pointer"
            >
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcSJ_adSFxwhSlay2pcYqbMAmnrbQAQeoSHrNTRu1RBGtSBJyZ5N_AGnXM2ymOYg5oKvrzq2BUCR8tlNGvSe2vx2CogDYs_FRSaCtGPQhKXELfFgrIsxGiSOEDm4xFASQ1KkPzgN61dzxFzk5Otf4yGX-VtmR9-DVOa--Zh8ayrX0VR3gmVbERPrb4Mb3UoXlifWQXhEzAUWreinwCJIG43CHCKO_qBXVCmGaaoD-X9z-Vmu_9FW_GoXhy9wvrDX9o-BWMMIeaLvDF" 
                  alt="Honey Beans"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-2">
                  <span className="text-[10px] font-bold bg-secondary/10 text-secondary px-2 py-1 rounded-full uppercase">Breakfast</span>
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-900 px-2 py-1 rounded-full uppercase">Protein Power</span>
                </div>
                <h4 className="text-xl font-bold text-primary dark:text-white font-lexend">Honey Beans Porridge</h4>
                <div className="mt-4 flex gap-6 text-xs font-bold text-slate-400">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">timer</span> 30m</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bolt</span> 480 kcal</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pantry Section */}
        <section className="bg-emerald-50 dark:bg-emerald-950/40 rounded-[40px] p-8 space-y-6">
          <div className="space-y-1 px-2">
            <h3 className="text-2xl font-bold text-primary dark:text-white font-lexend">The Derica & Cup</h3>
            <p className="text-slate-500 dark:text-emerald-100/60 font-medium">Measurement without the stress.</p>
          </div>
          <div className="space-y-4">
            {pantry.length > 0 ? pantry.map((item: any, i: number) => (
              <div key={i} className="bg-white dark:bg-emerald-900 p-5 rounded-3xl flex justify-between items-center shadow-sm border border-stone-100 dark:border-emerald-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-emerald-800 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">inventory_2</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary dark:text-white">{item.name}</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.count} {item.unit}s left</p>
                  </div>
                </div>
                <button 
                  onClick={() => handlePantryUpdate(item.name, item.count, item.unit)} 
                  className="bg-secondary text-white p-2 rounded-full shadow-md active:scale-90 transition-transform"
                >
                  <span className="material-symbols-outlined text-xl">add</span>
                </button>
              </div>
            )) : (
              <div className="bg-white/50 dark:bg-emerald-900/50 p-6 rounded-3xl text-center border border-dashed border-emerald-200 dark:border-emerald-800">
                <p className="text-sm font-medium text-slate-400">Pantry is empty. Generate a market list to start.</p>
              </div>
            )}
          </div>
          <button 
            onClick={() => { setShowMarketList(true); showToast("Market List generated!"); }}
            className="w-full bg-primary text-white py-5 rounded-full font-bold shadow-xl active:scale-95 transition-transform text-lg font-lexend mt-4"
          >
            Generate Market List
          </button>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
