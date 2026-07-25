import { Home, ScanLine, Clock, User } from "lucide-react";

const items = [
  { key: "home", label: "Home", icon: Home },
  { key: "scan", label: "Scan", icon: ScanLine },
  { key: "history", label: "History", icon: Clock },
  { key: "profile", label: "Profile", icon: User },
];

export default function BottomNav({ active, onNavigate }) {
  return (
    <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-primary-light px-2 pt-2 pb-3 flex justify-around">
      {items.map(({ key, label, icon: Icon }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onNavigate(key)}
            aria-label={label}
            aria-current={isActive ? "page" : undefined}
            className="flex flex-col items-center gap-1 flex-1 py-1"
          >
            <div
              className={`w-11 h-11 flex items-center justify-center rounded-2xl ${
                isActive ? "bg-primary-light text-primary-dark" : "text-slate"
              }`}
            >
              <Icon size={24} strokeWidth={2.2} />
            </div>
            <span
              className={`text-xs font-medium ${
                isActive ? "text-primary-dark" : "text-slate"
              }`}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}