import { ShieldPlus } from "lucide-react";

export default function SplashScreen({ onContinue }) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-between bg-gradient-to-b from-primary-light via-bg to-bg px-8 py-16">
      <div />
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="w-28 h-28 rounded-[2rem] bg-white shadow-floating flex items-center justify-center animate-breathe">
          <ShieldPlus size={56} strokeWidth={2} className="text-primary" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold text-navy tracking-tight">
            MedSafer<span className="text-primary">_AI</span>
          </h1>
          <p className="mt-3 text-lg text-slate font-body max-w-[260px]">
            Smart Medicine Safety for Everyone
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <span className="w-8 h-2 rounded-full bg-primary" />
          <span className="w-2 h-2 rounded-full bg-primary-light" />
          <span className="w-2 h-2 rounded-full bg-primary-light" />
        </div>
        <button onClick={onContinue} className="text-slate text-base underline underline-offset-4">
          Tap anywhere to continue
        </button>
      </div>
    </div>
  );
}