import { ChevronLeft } from "lucide-react";

export default function TopBar({ title, onBack, right }) {
  return (
    <div className="flex items-center justify-between px-5 pt-6 pb-4 bg-bg sticky top-0 z-10">
      <div className="flex items-center gap-2">
        {onBack && (
          <button
            aria-label="Go back"
            onClick={onBack}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-card text-navy"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        <h1 className="font-display text-xl font-semibold text-navy">{title}</h1>
      </div>
      {right}
    </div>
  );
}