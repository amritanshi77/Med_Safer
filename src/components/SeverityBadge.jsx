import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

const config = {
  safe: { bg: "bg-safe-bg", text: "text-safe", icon: CheckCircle2, label: "Safe" },
  moderate: { bg: "bg-moderate-bg", text: "text-moderate", icon: AlertTriangle, label: "Moderate" },
  danger: { bg: "bg-danger-bg", text: "text-danger", icon: XCircle, label: "Dangerous" },
};

export default function SeverityBadge({ level }) {
  const c = config[level];
  const Icon = c.icon;
  return (
    <span
      className={`inline-flex items-center gap-1.5 ${c.bg} ${c.text} px-3 py-1.5 rounded-full text-sm font-semibold`}
    >
      <Icon size={16} strokeWidth={2.5} />
      {c.label}
    </span>
  );
}