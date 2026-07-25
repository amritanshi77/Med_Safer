import { ScanLine, ShieldAlert, Clock, PhoneCall, Bell, ChevronRight } from "lucide-react";
import Card from "../components/Card.jsx";
import BottomNav from "../components/BottomNav.jsx";
import { user, reminders, recentScans } from "../data/mockData.js";

const quickActions = [
  { key: "scan", label: "Scan Medicine", icon: ScanLine, color: "bg-primary text-white" },
  { key: "interaction", label: "Check Interaction", icon: ShieldAlert, color: "bg-moderate-bg text-moderate" },
  { key: "history", label: "Medicine History", icon: Clock, color: "bg-primary-light text-primary-dark" },
  { key: "emergency", label: "Emergency Help", icon: PhoneCall, color: "bg-danger-bg text-danger" },
];

export default function HomeDashboard({ navigate }) {
  const nextReminder = reminders.find((r) => !r.taken);

  return (
    <div className="h-full w-full flex flex-col bg-bg pb-24">
      <div className="px-6 pt-14 pb-4 flex items-center justify-between">
        <div>
          <p className="text-slate text-base">{user.greetingTime},</p>
          <h1 className="font-display text-2xl font-bold text-navy">{user.name}</h1>
        </div>
        <button aria-label="Notifications" className="w-12 h-12 rounded-full bg-white shadow-card flex items-center justify-center relative">
          <Bell size={22} className="text-navy" />
          <span className="absolute top-2.5 right-3 w-2 h-2 bg-danger rounded-full" />
        </button>
      </div>

      <div className="px-6 flex flex-col gap-5 overflow-y-auto">
        {nextReminder && (
          <Card className="!bg-gradient-to-r !from-primary !to-primary-dark !text-white flex items-center justify-between">
            <div>
              <p className="text-sm text-white/80 font-medium">Next medication</p>
              <p className="font-display text-lg font-semibold mt-1">{nextReminder.name}</p>
              <p className="text-white/90 text-base mt-0.5">{nextReminder.time}</p>
            </div>
            <button className="bg-white text-primary-dark font-display font-semibold text-sm px-4 h-11 rounded-xl">
              Mark Taken
            </button>
          </Card>
        )}

        <div>
          <h2 className="font-display text-lg font-semibold text-navy mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map(({ key, label, icon: Icon, color }) => (
              <Card key={key} onClick={() => navigate(key)} className="flex flex-col gap-3 !p-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${color}`}>
                  <Icon size={24} strokeWidth={2.2} />
                </div>
                <span className="font-display font-semibold text-navy text-base leading-snug">{label}</span>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-display text-lg font-semibold text-navy">Recent Scans</h2>
            <button onClick={() => navigate("history")} className="text-primary font-semibold text-sm flex items-center gap-1">
              See all <ChevronRight size={16} />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {recentScans.map((s) => (
              <Card key={s.id} onClick={() => navigate("details")} className="flex items-center justify-between !p-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center text-xl">💊</div>
                  <div>
                    <p className="font-semibold text-navy text-base">{s.name}</p>
                    <p className="text-slate text-sm">{s.date}</p>
                  </div>
                </div>
                <span className="text-safe font-semibold text-sm">{s.confidence}% match</span>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <BottomNav active="home" onNavigate={navigate} />
    </div>
  );
}