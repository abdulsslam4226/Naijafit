"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/toast";

type QuizData = {
  budget: string;
  time: string;
  goal: string;
};

export default function OnboardingPage() {
  const { showToast } = useToast();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [data, setData] = useState<QuizData>({
    budget: "",
    time: "",
    goal: "",
  });
  const router = useRouter();

  const handleSelect = (field: keyof QuizData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    showToast(`${value.toUpperCase()} selected`);
    if (step < 3) {
      setTimeout(() => setStep(step + 1), 300);
    }
  };

  const handleFinish = async () => {
    if (!email) {
      showToast("Please enter your email");
      return;
    }
    showToast("Generating your personalized plan...");
    try {
      const result = await signIn("credentials", {
        email,
        redirect: false,
      });
      if (result?.error) {
        showToast("Error signing up.");
      } else {
        router.push("/tracker");
      }
    } catch (e) {
      showToast("Connection error.");
    }
  };

  return (
    <div className="bg-[#051c14] text-white font-jakarta min-h-screen flex flex-col overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <header className="relative z-50 flex justify-between items-center w-full px-8 py-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shadow-lg shadow-orange-900/20">
            <span className="material-symbols-outlined text-white">fitness_center</span>
          </div>
          <h1 className="text-xl font-bold font-lexend tracking-tight uppercase">NaijaFit</h1>
        </Link>
        <Link href="/" className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-white">close</span>
        </Link>
      </header>

      <main className="relative z-10 flex-grow flex flex-col items-center px-8 py-10 max-w-md mx-auto w-full">
        {/* Step Indicator */}
        <div className="w-full mb-16 space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400/60">Question {step}/3</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">{Math.round((step / 3) * 100)}% Ready</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-secondary shadow-[0_0_15px_rgba(242,121,53,0.5)] transition-all duration-700 ease-out" 
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold font-lexend tracking-tight">Find Your Path</h2>
          <p className="text-emerald-100/40 text-sm font-medium leading-relaxed max-w-[280px] mx-auto">No shame, just progress. Let&apos;s build your rhythm.</p>
        </div>

        <div className="w-full">
          {/* Question 1: Budget */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h3 className="text-xl font-bold font-lexend text-center mb-10">What&apos;s your vibe for investment?</h3>
              <div className="grid grid-cols-1 gap-5">
                <button 
                  onClick={() => handleSelect("budget", "free")}
                  className={`group relative flex items-center gap-6 p-6 rounded-[32px] border-2 transition-all text-left backdrop-blur-md ${
                    data.budget === "free" ? "bg-secondary/10 border-secondary" : "bg-white/5 border-white/5 hover:border-white/10"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${data.budget === "free" ? "bg-secondary text-white" : "bg-white/5 text-emerald-400"}`}>
                    <span className="material-symbols-outlined text-2xl">savings</span>
                  </div>
                  <div>
                    <span className="text-lg font-bold font-lexend block mb-1">Free Tier</span>
                    <p className="text-xs text-emerald-100/40 font-medium leading-relaxed">Pure grit. Access all community workouts.</p>
                  </div>
                </button>
                <button 
                  onClick={() => handleSelect("budget", "paid")}
                  className={`group relative flex items-center gap-6 p-6 rounded-[32px] border-2 transition-all text-left backdrop-blur-md ${
                    data.budget === "paid" ? "bg-secondary/10 border-secondary" : "bg-white/5 border-white/5 hover:border-white/10"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${data.budget === "paid" ? "bg-secondary text-white" : "bg-white/5 text-emerald-400"}`}>
                    <span className="material-symbols-outlined text-2xl">stars</span>
                  </div>
                  <div>
                    <span className="text-lg font-bold font-lexend block mb-1">Pro Plan</span>
                    <p className="text-xs text-emerald-100/40 font-medium leading-relaxed">Premium. Personal coaching & meal plans.</p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Question 2: Time */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h3 className="text-xl font-bold font-lexend text-center mb-10">How much time can you spare?</h3>
              <div className="grid grid-cols-1 gap-5">
                <div 
                  onClick={() => handleSelect("time", "15m")}
                  className={`relative overflow-hidden rounded-[32px] cursor-pointer border-2 transition-all h-48 group ${
                    data.time === "15m" ? "border-secondary" : "border-white/5"
                  }`}
                >
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1GtsGto2rUXa3-nw6e2Oqrg0UGTrN_NI3dDy8mDxnLxIRoczyUFyl-alDDa_M4ZyYK7bwx6I0e--44lNYT5UnKftnPh5RAm-ej7Dm6DPhXZ35Sc8UXCVzslDHIRGZNdr_E2SaYotzRloCkAAZtEKP-MXqG8XanM0W-v75Igy4n6Q9mt5tqZCWf2yU6yS9_l-F1sUkgsYRdt3nJgmq87RaILLgtJSCfxg4jF9G1B5rqVeiJO31O4v9eJcDUbo42uc1MzIpELfGYBwP" 
                    alt="Quick 15m"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-xl font-bold font-lexend">Quick 15m</span>
                    <p className="text-xs text-white/60 font-medium">Fits into any Lagos schedule.</p>
                  </div>
                </div>
                <div 
                  onClick={() => handleSelect("time", "45m")}
                  className={`relative overflow-hidden rounded-[32px] cursor-pointer border-2 transition-all h-48 group ${
                    data.time === "45m" ? "border-secondary" : "border-white/5"
                  }`}
                >
                  <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgXZ58oEsIY_Z_I1n8TIDZEuY-9QHJEiEraf8Pw08Fxm8HYqshlOV0F9G-qwsCvVKu0bYuWRioLBb1ua09gm-sBK6z0nAPj1M57_i8Efvn-FhYxn7SfJzXidp0vzfU3pTT3iyw-lldN9QIrRu4CN_laUpsQ9dkSUo8MsvQJSJp_ImgL5ragCVph_kL6kEwDOpsTq6-rDrtWGzdmB679V4dLCRLBwaq3wX2m11visrP6W1JBuVbCbBcn8X3xPHCQICZETYBNCHVRFSk" 
                    alt="Solid 45m"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-xl font-bold font-lexend">Solid 45m</span>
                    <p className="text-xs text-white/60 font-medium">Deep focus. Feel the burn.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Question 3: Goal */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h3 className="text-xl font-bold font-lexend text-center mb-10">What&apos;s the main goal?</h3>
              <div className="flex flex-col gap-5">
                <button 
                  onClick={() => handleSelect("goal", "weight-loss")}
                  className={`flex items-center gap-6 p-6 rounded-[32px] border-2 transition-all text-left backdrop-blur-md ${
                    data.goal === "weight-loss" ? "bg-secondary/10 border-secondary" : "bg-white/5 border-white/5 hover:border-white/10"
                  }`}
                >
                  <div className="h-16 w-16 rounded-2xl overflow-hidden flex-shrink-0 relative">
                    <Image 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC55o3kMuJu3SNgU2eexhv80UNaq5Z71opd5x6X4kEcpgT8T6En6eg-bmvEuYs60d3SzJ4o0XBRYu1GZPu6jFvkC6OhW6vdts7ITeALcYcKcO1cFOCNeid6cBfLkqQvgI8JximimsDvoOF9il1Af69HEn_7liOBALpSh8_6rOlLTiAZlzzBtgT23SyS8M_2yzBDJrjuA_eQv6yYzf_R4cvgtgPb_udXaKlsaTuHfVdSwGkq6To-VgBeOZzR3PcbJ6ZjbJdaZeEGLekn" 
                      alt="Weight Loss"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <span className="text-lg font-bold font-lexend block mb-1">Weight Loss</span>
                    <p className="text-xs text-emerald-100/40 font-medium">Burn fat & build metabolism.</p>
                  </div>
                </button>
                <button 
                  onClick={() => handleSelect("goal", "muscle-gain")}
                  className={`flex items-center gap-6 p-6 rounded-[32px] border-2 transition-all text-left backdrop-blur-md ${
                    data.goal === "muscle-gain" ? "bg-secondary/10 border-secondary" : "bg-white/5 border-white/5 hover:border-white/10"
                  }`}
                >
                  <div className="h-16 w-16 rounded-2xl overflow-hidden flex-shrink-0 relative">
                    <Image 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZkkwXQO7SPNRK1BK2XeNv8hs38TenLtih6EIoeUIBTViVUAjxH4jiL1tndVbVw7vv61wpqPFt3L-opTfa_nC2e03b78NiO-jcWMRCA0Jsrh2lq7JElyIE7lvU4196fdHiJzI8J-Mk_PhsUEDZasMgJwka3ypU4wMCUbaR5B8DvcCLW7Ll-rcnHs1m25LlY5zSiGobDXFjM9XnDNob3a0x_4w0q8o3fFf6_tyhNE1V2EfqT95111DtTzwD2CkvIs-KaGD_hqCsUowK" 
                      alt="Muscle Gain"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <span className="text-lg font-bold font-lexend block mb-1">Muscle Gain</span>
                    <p className="text-xs text-emerald-100/40 font-medium">Strength & power focus.</p>
                  </div>
                </button>
              </div>
              <div className="mt-10 space-y-4">
                <p className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] text-center">Your Email (Final Step)</p>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-white placeholder:text-white/20 focus:border-secondary outline-none transition-all font-medium text-center"
                />
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="w-full mt-auto pt-10 flex flex-col gap-5">
          <div className="flex gap-4">
            {step > 1 && (
              <button 
                onClick={() => setStep(step - 1)}
                className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center active:scale-90 transition-transform"
              >
                <span className="material-symbols-outlined text-white">arrow_back</span>
              </button>
            )}
            {step === 3 ? (
              <button 
                onClick={handleFinish}
                disabled={!data.goal}
                className="flex-grow h-16 bg-secondary text-white font-bold font-lexend rounded-2xl shadow-2xl shadow-orange-900/40 active:scale-95 transition-all disabled:opacity-50"
              >
                Find My Path
              </button>
            ) : (
              <button 
                onClick={() => setStep(step + 1)}
                disabled={step === 1 ? !data.budget : !data.time}
                className="flex-grow h-16 bg-primary text-white font-bold font-lexend rounded-2xl shadow-2xl shadow-emerald-900/40 active:scale-95 transition-all disabled:opacity-50"
              >
                Next Step
              </button>
            )}
          </div>
          <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-white/20 px-8 leading-relaxed">
            By continuing, you agree to our <Link className="text-secondary hover:underline" href="#">Progress Terms</Link>.
          </p>
        </div>
      </main>
    </div>
  );
}
