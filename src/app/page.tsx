import LandingNavbar from "@/components/layout/LandingNavbar";
import Image from "next/image";
import Link from "next/link";
import { CinematicHero } from "@/components/ui/cinematic-landing-hero";

export default function LandingPage() {
  return (
    <div className="bg-background text-on-background font-jakarta">
      <LandingNavbar />
      
      <main>
        {/* Cinematic Hero Section */}
        <CinematicHero />

        {/* Bento Grid Features */}

        {/* Localized Nutrition Section (Sync from Preview) */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-primary mb-8 font-lexend">Naija Fuel</h3>
          <div className="bg-white dark:bg-emerald-950 rounded-[40px] overflow-hidden shadow-sm border border-stone-100 dark:border-emerald-900 flex flex-col md:flex-row group cursor-pointer">
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp5le76TNflk37vwnZtyHT05It3UpOQjJSCr55tonZDKPgNflHElA-VtP1ABBA0g4A3h_3pxkLO45gVj76n9cJPz7H2nIzxhb3919gtgicniizt3O1lbYcUoBV6cFJ1_1wsCvOHGy4xsqcZz-CS0DikMqahj5JAwXFNZG6ZmRtGJAdR37isJJPGYMMjNIjFcJ21D3BwwUssEaRiyAQwPzDYrNrvjh-pm41janHJJTlLaJQGFbhP3zMvRqs1i1uDSr03Ff9rfhvDpMs" 
                alt="Brown Jollof"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-10 md:w-1/2 relative flex flex-col justify-center">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">Lunch Idea</span>
              <h4 className="text-3xl font-bold text-primary dark:text-white font-lexend group-hover:text-secondary transition-colors">Brown Jollof & Stir-fry</h4>
              <p className="text-slate-500 dark:text-emerald-100/60 mt-6 text-lg leading-relaxed">
                A heart-healthy twist on the classic. We swapping white rice for local brown rice to keep your energy steady all afternoon.
              </p>
              <div className="mt-8 flex gap-6 text-sm font-bold text-primary dark:text-emerald-400">
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">timer</span> 45 mins</span>
                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-lg">bolt</span> 520 kcal</span>
              </div>
              <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500">
                <span className="material-symbols-outlined text-4xl text-secondary">arrow_forward</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-primary text-white py-6 rounded-full font-bold shadow-xl active:scale-95 transition-transform mt-8 text-lg font-lexend">
            Generate Market List
          </button>
        </section>

        {/* Community CTA */}
        <section className="py-24 max-w-5xl mx-auto px-6 text-center">
          <div className="bg-primary text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[200px]">groups</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-lexend">Ready to Move Your Way?</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-emerald-100/80">
              Join over 50,000 Nigerians rewriting the rules of fitness. No gym membership required. No guilt included.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/onboarding" className="bg-secondary text-white px-12 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-lg">
                Create Free Account
              </Link>
              <button className="bg-white/10 backdrop-blur-md text-white px-12 py-5 rounded-full font-bold border border-white/20 hover:bg-white/20 transition-all text-lg">
                View Community
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary dark:bg-black w-full py-12 border-t border-emerald-800 dark:border-emerald-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-white">
            <div className="text-xl font-bold font-lexend mb-2">NaijaFit</div>
            <p className="text-white/70 text-sm font-lexend">© 2024 NaijaFit. No Shame, Just Progress.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-white/70 font-lexend text-sm">
            <Link href="#" className="hover:text-secondary transition-all">Privacy Policy</Link>
            <Link href="#" className="hover:text-secondary transition-all">Terms of Service</Link>
            <Link href="#" className="hover:text-secondary transition-all">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
