"use client";

import React, { useState } from "react";
import { ShoppingCart, CheckCircle2, ChevronRight, Printer } from "lucide-react";
import { cn } from "@/lib/utils";

interface MarketItem {
  id: string;
  name: string;
  quantity: string;
  category: "Grains" | "Protein" | "Tubers" | "Veggies";
  checked: boolean;
}

export default function MarketList() {
  const [items, setItems] = useState<MarketItem[]>([
    { id: "1", name: "Local Rice (Ofada)", quantity: "2 Dericas", category: "Grains", checked: false },
    { id: "2", name: "Honey Beans", quantity: "1 Derica", category: "Grains", checked: false },
    { id: "3", name: "Yam", quantity: "3 Medium Tubers", category: "Tubers", checked: false },
    { id: "4", name: "Chicken (Local Hard)", quantity: "Half Kilo", category: "Protein", checked: false },
    { id: "5", name: "Ugwu Leaves", quantity: "2 Bunches", category: "Veggies", checked: false },
    { id: "6", name: "Scotch Bonnet (Atarodo)", quantity: "N200 worth", category: "Veggies", checked: false },
  ]);

  const toggleItem = (id: string) => {
    setItems(items.map((item: any) => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const categories = Array.from(new Set(items.map((i: any) => i.category)));

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-emerald-950 rounded-[40px] shadow-2xl overflow-hidden border border-emerald-50 dark:border-emerald-900">
      <div className="bg-secondary p-8 text-white relative">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold font-lexend">Market Memo</h3>
            <p className="text-orange-100/70 text-sm">Generated from your pantry</p>
          </div>
          <ShoppingCart className="w-8 h-8 opacity-50" />
        </div>
        <div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      </div>

      <div className="p-8 space-y-8">
        {categories.map((cat) => (
          <div key={cat} className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-emerald-100/30 flex items-center gap-2">
              <ChevronRight className="w-3 h-3" />
              {cat}
            </h4>
            <div className="space-y-3">
              {items.filter((i: any) => i.category === cat).map((item: any) => (
                <div 
                  key={item.id} 
                  onClick={() => toggleItem(item.id)}
                  className={cn(
                    "flex justify-between items-center p-4 rounded-2xl cursor-pointer transition-all border",
                    item.checked 
                      ? "bg-slate-50 dark:bg-emerald-900/20 border-transparent opacity-50 scale-95" 
                      : "bg-white dark:bg-emerald-900 border-slate-100 dark:border-emerald-800 shadow-sm"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                      item.checked ? "bg-emerald-500 border-emerald-500" : "border-slate-200 dark:border-emerald-700"
                    )}>
                      {item.checked && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                    <span className={cn(
                      "font-medium",
                      item.checked ? "line-through text-slate-400" : "text-primary dark:text-white"
                    )}>
                      {item.name}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-secondary">{item.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="pt-4 flex gap-4">
          <button className="flex-1 bg-primary dark:bg-white text-white dark:text-primary py-4 rounded-full font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform">
            <Printer className="w-5 h-5" />
            Share Memo
          </button>
        </div>
      </div>
    </div>
  );
}
