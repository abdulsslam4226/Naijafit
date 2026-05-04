"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", icon: "home", href: "/tracker" },
  { name: "Eat", icon: "restaurant", href: "/nutrition" },
  { name: "Train", icon: "fitness_center", href: "/workout" },
  { name: "Me", icon: "person", href: "/profile" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 p-6 z-50">
      <nav className="bg-white/80 dark:bg-emerald-950/80 backdrop-blur-2xl max-w-md mx-auto rounded-[40px] border border-stone-100 dark:border-emerald-900 shadow-2xl flex justify-around items-center px-4 py-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center px-6 py-2.5 transition-all active:scale-90 duration-300 ease-out group relative ${
                isActive
                  ? "text-primary dark:text-white"
                  : "text-slate-400 dark:text-emerald-100/20 hover:text-primary dark:hover:text-emerald-100/60"
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-emerald-50 dark:bg-emerald-900/40 rounded-3xl -z-10 blur-sm scale-110 opacity-50"></div>
              )}
              <span
                className={`material-symbols-outlined mb-1 text-2xl transition-all ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              <span className={`font-lexend text-[10px] font-black tracking-widest uppercase transition-all ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
