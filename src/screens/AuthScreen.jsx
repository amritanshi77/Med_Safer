import { useState } from "react";
import { Mail, Lock, ShieldPlus } from "lucide-react";
import Button from "../components/Button.jsx";

export default function AuthScreen({ onLogin, onGuest }) {
  const [mode, setMode] = useState("login");

  return (
    <div className="h-full w-full flex flex-col px-6 pt-14 pb-8 bg-bg">
      <div className="flex flex-col items-center gap-3 mb-8">
        <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center">
          <ShieldPlus size={30} className="text-primary" />
        </div>
        <h1 className="font-display text-2xl font-bold text-navy">
          {mode === "login" ? "Welcome back" : "Create your account"}
        </h1>
        <p className="text-slate text-base text-center">
          {mode === "login" ? "Sign in to manage your medicines safely" : "Join MedSafer_AI in under a minute"}
        </p>
      </div>

      <div className="flex bg-surfaceAlt rounded-2xl p-1 mb-6">
        <button
          onClick={() => setMode("login")}
          className={`flex-1 h-12 rounded-xl font-display font-semibold text-base ${mode === "login" ? "bg-white text-primary-dark shadow-card" : "text-slate"}`}
        >
          Log In
        </button>
        <button
          onClick={() => setMode("signup")}
          className={`flex-1 h-12 rounded-xl font-display font-semibold text-base ${mode === "signup" ? "bg-white text-primary-dark shadow-card" : "text-slate"}`}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="flex flex-col gap-4">
        <label className="flex flex-col gap-2">
          <span className="text-navy font-semibold text-base">Email address</span>
          <div className="flex items-center gap-3 bg-white rounded-2xl border-2 border-primary-light px-4 h-14">
            <Mail size={20} className="text-slate" />
            <input type="email" required placeholder="you@example.com" className="flex-1 bg-transparent outline-none text-lg text-navy placeholder:text-slate/60" />
          </div>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-navy font-semibold text-base">Password</span>
          <div className="flex items-center gap-3 bg-white rounded-2xl border-2 border-primary-light px-4 h-14">
            <Lock size={20} className="text-slate" />
            <input type="password" required placeholder="••••••••" className="flex-1 bg-transparent outline-none text-lg text-navy placeholder:text-slate/60" />
          </div>
        </label>
        <div className="mt-2">
          <Button type="submit">{mode === "login" ? "Log In" : "Create Account"}</Button>
        </div>
      </form>

      <div className="flex-1" />
      <Button variant="outline" onClick={onGuest}>Continue as Guest</Button>
      <p className="text-center text-sm text-slate mt-4">By continuing you agree to our Terms & Privacy Policy</p>
    </div>
  );
}