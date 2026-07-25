import { useState } from "react";
import { Moon, Sun, Globe, Phone, LogOut, Type } from "lucide-react";
import TopBar from "../components/TopBar.jsx";
import Card from "../components/Card.jsx";
import BottomNav from "../components/BottomNav.jsx";
import { user, emergencyContact } from "../data/mockData.js";

export default function ProfileSettingsScreen({ navigate }) {
  const [dark, setDark] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const [language, setLanguage] = useState("English");

  return (
    <div className="h-full w-full flex flex-col bg-bg pb-24">
      <TopBar title="Profile & Settings" onBack={() => navigate("home")} />

      <div className="flex-1 overflow-y-auto px-6 flex flex-col gap-5">
        <Card className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-xl">
            {user.avatarInitials}
          </div>
          <div>
            <p className="font-display font-semibold text-lg text-navy">{user.name}</p>
            <p className="text-slate text-sm">margaret@example.com</p>
          </div>
        </Card>

        <Card className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Type size={20} className="text-primary-dark" />
              <span className="font-medium text-navy text-base">Font Size</span>
            </div>
            <div className="flex items-center gap-2">
              {[0.9, 1, 1.2, 1.4].map((scale) => (
                <button
                  key={scale}
                  onClick={() => setFontScale(scale)}
                  className={`w-9 h-9 rounded-full text-sm font-semibold ${fontScale === scale ? "bg-primary text-white" : "bg-surfaceAlt text-slate"}`}
                >
                  A
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {dark ? <Moon size={20} className="text-primary-dark" /> : <Sun size={20} className="text-primary-dark" />}
              <span className="font-medium text-navy text-base">Dark Mode</span>
            </div>
            <button
              onClick={() => setDark((v) => !v)}
              aria-pressed={dark}
              className={`w-14 h-8 rounded-full flex items-center px-1 transition-colors ${dark ? "bg-primary justify-end" : "bg-surfaceAlt justify-start"}`}
            >
              <span className="w-6 h-6 rounded-full bg-white shadow-card" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe size={20} className="text-primary-dark" />
              <span className="font-medium text-navy text-base">Language</span>
            </div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-surfaceAlt rounded-xl px-3 py-2 text-navy font-medium text-sm outline-none"
            >
              <option>English</option>
              <option>Hindi</option>
              <option>Tamil</option>
              <option>Spanish</option>
            </select>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-2">
            <Phone size={20} className="text-primary-dark" />
            <span className="font-display font-semibold text-navy text-base">Emergency Contact</span>
          </div>
          <p className="text-navy/90 text-base">{emergencyContact.name}</p>
          <p className="text-slate text-sm">{emergencyContact.phone}</p>
        </Card>

        <button onClick={() => navigate("splash")} className="flex items-center justify-center gap-2 text-danger font-semibold text-base py-3">
          <LogOut size={18} />
          Log Out