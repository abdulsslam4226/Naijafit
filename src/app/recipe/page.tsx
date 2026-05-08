"use client";

import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/components/ui/toast";
import { logMeal } from "@/app/actions";

export default function RecipePage() {
  const { showToast } = useToast();

  const handleLogMeal = async () => {
    try {
      await logMeal("brown-jollof", "Brown Jollof & Stir-fry");
      showToast("Progress updated! You logged a healthy meal.");
    } catch (e) {
      showToast("Error logging meal.");
    }
  };

  const macros = [
    { label: "Protein", value: "35g", color: "text-blue-500", bar: "bg-blue-500" },
    { label: "Carbs", value: "45g", color: "text-secondary", bar: "bg-secondary" },
    { label: "Fats", value: "12g", color: "text-amber-500", bar: "bg-amber-500" },
  ];

  const ingredients = [
    { name: "Local Brown Rice", amount: "1/2 Derica" },
    { name: "Chicken Breast", amount: "200g" },
    { name: "Mixed Vegetables", amount: "1 Cup" },
    { name: "Olive Oil / Red Oil", amount: "1 Teaspoon" },
    { name: "Jollof Spice Blend", amount: "To taste" },
  ];

  const instructions = [
    "Parboil the brown rice for 15 minutes, then wash thoroughly to remove excess starch.",
    "Grill or air-fry the chicken breast seasoned with Suya spice or your preferred local marinade.",
    "In a pan, add 1 teaspoon of oil, fry onions, and add your blended pepper mix.",
    "Add the parboiled rice, mixed vegetables, and just enough water to cook through.",
    "Simmer on low heat until water dries up. Serve hot."
  ];

  return (
    <div className="bg-background min-h-screen pb-48 font-jakarta text-on-background">
      {/* Hero Image Section */}
      <div className="relative h-[400px] w-full rounded-b-[60px] overflow-hidden shadow-2xl">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp5le76TNflk37vwnZtyHT05It3UpOQjJSCr55tonZDKPgNflHElA-VtP1ABBA0g4A3h_3pxkLO45gVj76n9cJPz7H2nIzxhb3919gtgicniizt3O1lbYcUoBV6cFJ1_1wsCvOHGy4xsqcZz-CS0DikMqahj5JAwXFNZG6ZmRtGJAdR37isJJPGYMMjNIjFcJ21D3BwwUssEaRiyAQwPzDYrNrvjh-pm41janHJJTlLaJQGFbhP3zMvRqs1i1uDSr03Ff9rfhvDpMs" 
          alt="Brown Jollof"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
        
        <Link href="/nutrition" className="absolute top-12 left-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30 hover:bg-white/40 transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </Link>
        
        <button onClick={() => showToast("Playing recipe video...")} className="absolute top-12 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30 hover:bg-white/40 transition-colors">
          <span className="material-symbols-outlined">play_arrow</span>
        </button>

        <div className="absolute bottom-12 left-8 right-8 text-white space-y-4">
          <span className="bg-secondary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest inline-block shadow-xl shadow-orange-900/40">
            Lunch Idea
          </span>
          <h1 className="text-4xl font-bold font-lexend leading-tight">Brown Jollof & <br/>Stir-fry</h1>
        </div>
      </div>

      <main className="max-w-md mx-auto px-6 mt-8 space-y-12">
        {/* Quick Stats */}
        <div className="flex justify-between bg-white dark:bg-emerald-950 p-8 rounded-[40px] shadow-sm border border-stone-100 dark:border-emerald-900">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900 flex items-center justify-center text-primary dark:text-emerald-400">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <span className="text-xs font-bold text-slate-500 dark:text-emerald-100/60 uppercase tracking-widest">45 Mins</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">bolt</span>
            </div>
            <span className="text-xs font-bold text-slate-500 dark:text-emerald-100/60 uppercase tracking-widest">520 Kcal</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <span className="material-symbols-outlined">skillet</span>
            </div>
            <span className="text-xs font-bold text-slate-500 dark:text-emerald-100/60 uppercase tracking-widest">Easy</span>
          </div>
        </div>

        {/* Macros Breakdown */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-primary dark:text-white font-lexend px-2">Nutrition Breakdown</h2>
          <div className="flex gap-4">
            {macros.map((macro: any, i: number) => (
              <div key={i} className="flex-1 bg-white dark:bg-emerald-950 p-5 rounded-[32px] shadow-sm border border-stone-100 dark:border-emerald-900 text-center relative overflow-hidden group">
                <div className={`absolute top-0 left-0 right-0 h-1 ${macro.bar} opacity-40`}></div>
                <div className={`text-2xl font-bold ${macro.color} mb-1 font-lexend`}>{macro.value}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{macro.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Ingredients */}
        <section className="space-y-6">
          <div className="flex justify-between items-end px-2">
            <h2 className="text-2xl font-bold text-primary dark:text-white font-lexend">Ingredients</h2>
            <span className="text-xs font-bold text-secondary uppercase tracking-widest">1 Serving</span>
          </div>
          <div className="bg-white dark:bg-emerald-950 rounded-[40px] p-4 border border-stone-100 dark:border-emerald-900 shadow-sm">
            {ingredients.map((item: any, i: number) => (
              <div key={i} className={`flex justify-between items-center p-5 ${i !== ingredients.length - 1 ? 'border-b border-stone-50 dark:border-emerald-900' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="font-bold text-primary dark:text-white">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-secondary">{item.amount}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Instructions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-primary dark:text-white font-lexend px-2">Instructions</h2>
          <div className="space-y-4">
            {instructions.map((step: any, i: number) => (
              <div key={i} className="flex gap-6 p-6 bg-white dark:bg-emerald-950 rounded-[32px] border border-stone-100 dark:border-emerald-900 shadow-sm relative group transition-all hover:border-secondary/40">
                <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-900 flex items-center justify-center font-bold text-primary dark:text-emerald-400 font-lexend">
                  {i + 1}
                </div>
                <p className="text-sm font-medium text-slate-600 dark:text-emerald-100/60 leading-relaxed pt-2">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        <button 
          onClick={handleLogMeal}
          className="w-full bg-primary text-white py-6 rounded-full font-bold shadow-2xl active:scale-95 transition-transform flex justify-center items-center gap-3 text-lg font-lexend mb-10"
        >
          <span className="material-symbols-outlined">task_alt</span>
          I've Cooked This
        </button>
      </main>
    </div>
  );
}
