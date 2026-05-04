import Link from "next/link";
import { ThemeSwitch } from "@/components/ui/theme-switch-button";

export default function LandingNavbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-emerald-950/90 backdrop-blur-md border-b border-emerald-50 dark:border-emerald-900 shadow-[0_4px_20px_-4px_rgba(1,45,29,0.05)] h-20 flex items-center px-6 md:px-12 justify-between">
      <div className="flex items-center gap-12">
        <Link href="/" className="text-2xl font-extrabold text-primary dark:text-white tracking-tighter">NaijaFit</Link>
        <div className="hidden md:flex gap-8 font-label-md text-on-surface-variant dark:text-emerald-100/60">
          <Link href="#features" className="text-secondary dark:text-secondary border-b-2 border-secondary font-bold">Features</Link>
          <Link href="/nutrition" className="hover:text-secondary dark:hover:text-secondary transition-colors">Nutrition</Link>
          <Link href="#pricing" className="hover:text-secondary dark:hover:text-secondary transition-colors">Pricing</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ThemeSwitch />
        <Link href="/onboarding" className="bg-secondary text-on-secondary px-6 py-2.5 rounded-full font-headline-md text-sm shadow-lg active:scale-95 transition-all">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
