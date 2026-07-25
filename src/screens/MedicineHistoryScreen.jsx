import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import TopBar from "../components/TopBar.jsx";
import BottomNav from "../components/BottomNav.jsx";
import { history } from "../data/mockData.js";

export default function MedicineHistoryScreen({ navigate }) {
  const [query, setQuery] = useState("");

  const filtered = history.filter((h) => h.name.toLowerCase().includes(query.toLowerCase()));

  const grouped = filtered.reduce((acc, item) => {
    acc[item.date] = acc[item.date] || [];
    acc[item.date].push(item);
    return acc;
  }, {});

  return (
    <div className="h-full w-full flex flex-col bg-bg pb-24">
      <TopBar title="Medicine History" onBack={() => navigate("home")} />

      <div className="px-6 flex gap-3 mb-2">
        <div className="flex-1 flex items-center gap-2 bg-white rounded-2xl border-2 border-primary-light px-4 h-12">
          <Search size={18} className="text-slate" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search medicines"
            className="flex-1 bg-transparent outline-none text-base text-navy placeholder:text-slate/60"
          />
        </div>
        <button aria-label="Filter" className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center shrink-0">
          <SlidersHorizontal size={20} className="text-primary-dark" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-4">
        {Object.entries(grouped).map(([date, items]) => (
          <div key={date} className="mb-6">
            <p className="text-slate font-semibold text-sm mb-3 uppercase tracking-wide">{date}</p>
            <div className="relative pl-6 border-l-2 border-primary-light flex flex-col gap-5">
              {items.map((it) => (
                <div key={it.id} className="relative">
                  <span className="absolute -left-[1.9rem] top-1.5 w-3 h-3 rounded-full bg-primary" />
                  <p className="font-display font-semibold text-navy text-base">{it.name}</p>
                  <p className="text-slate text-sm">{it.time}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        {filtered.length === 0 && <p className="text-center text-slate mt-10">No medicines found.</p>}
      </div>

      <BottomNav active="history" onNavigate={navigate} />
    </div>
  );
}