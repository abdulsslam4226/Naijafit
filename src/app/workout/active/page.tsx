"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ActiveWorkoutPage() {
  const [seconds, setSeconds] = useState(45);
  const [isActive, setIsActive] = useState(false);
  const [currentSet, setCurrentSet] = useState(1);
  const totalSets = 3;

  useEffect(() => {
    let interval: any = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setSeconds(45);
    setIsActive(false);
  };

  const nextSet = () => {
    if (currentSet < totalSets) {
      setCurrentSet(currentSet + 1);
      resetTimer();
    }
  };

  return (
    <div className="bg-primary text-white min-h-screen font-jakarta flex flex-col">
      {/* Header */}
      <header className="px-6 py-6 flex justify-between items-center bg-primary-container/30 backdrop-blur-md sticky top-0 z-50">
        <Link href="/workout" className="flex items-center gap-2">
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="font-lexend font-bold">End Workout</span>
        </Link>
        <div className="flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Current Exercise</span>
          <span className="font-lexend font-bold">Mountain Climbers</span>
        </div>
        <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-8">
        {/* Exercise Visual */}
        <div className="w-full max-w-md aspect-square bg-white/5 rounded-[40px] overflow-hidden relative mb-12 shadow-2xl border border-white/10">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-qFCpQi25cQZqRHKzEwqBFCOSBbG1ft7GUh8aGAyDvHrl_yjdDIVYEFC_rmX02jGPzoGMSVzcPVSj_kBA8m2z5nq6GbjKG4AERPhABX8MPmHQT2Nm4bFw8khPreORnJkqvO-W06fqC2_GfCQ-W0_Rq4QNSEB37ieGcmhxCtnnyeqIvf6MjzJ_npG4I24X3aOkTPC6lX3Jyg-TylkVJC2Op4IDOsWz1AUzG8h8dsa2v8srjwRpcHemaKpNqvPKaNWXzPxQapjYzSIh" 
            alt="Mountain Climbers"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <span className="bg-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Active set</span>
          </div>
        </div>

        {/* Timer/Progress Stats */}
        <div className="w-full max-w-sm grid grid-cols-2 gap-4 mb-12">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 text-center border border-white/10">
            <p className="text-[10px] uppercase font-bold opacity-60 mb-2">Set</p>
            <p className="text-3xl font-lexend font-extrabold">{currentSet}<span className="text-sm opacity-40">/{totalSets}</span></p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 text-center border border-white/10">
            <p className="text-[10px] uppercase font-bold opacity-60 mb-2">Target</p>
            <p className="text-3xl font-lexend font-extrabold">45<span className="text-sm opacity-40">s</span></p>
          </div>
        </div>

        {/* Large Timer Display */}
        <div className="relative mb-12">
          <div className="w-64 h-64 rounded-full border-8 border-white/5 flex items-center justify-center relative">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle 
                cx="128" 
                cy="128" 
                r="120" 
                fill="transparent" 
                stroke="currentColor" 
                strokeWidth="8" 
                className="text-secondary transition-all duration-1000"
                style={{ 
                  strokeDasharray: "754", 
                  strokeDashoffset: `${754 - (seconds / 45) * 754}` 
                }}
              />
            </svg>
            <div className="text-center">
              <span className="text-7xl font-lexend font-black tabular-nums">{seconds}</span>
              <p className="text-sm font-bold opacity-60 uppercase tracking-widest">Seconds</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="w-full max-w-sm flex items-center justify-center gap-8">
          <button 
            onClick={resetTimer}
            className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-3xl">replay</span>
          </button>
          <button 
            onClick={toggleTimer}
            className="w-24 h-24 rounded-full bg-secondary text-white flex items-center justify-center shadow-2xl shadow-secondary/40 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              {isActive ? "pause" : "play_arrow"}
            </span>
          </button>
          <button 
            onClick={nextSet}
            className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-3xl">skip_next</span>
          </button>
        </div>
      </main>

      {/* Footer Motivation */}
      <footer className="p-8 bg-black/20 text-center">
        <p className="text-sm italic opacity-80">"Consistency is the key to Naija Strength. Keep pushing!"</p>
      </footer>
    </div>
  );
}
