import { Volume2, ShieldCheck, AlertCircle } from "lucide-react";
import TopBar from "../components/TopBar.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import { medicineDetail as m } from "../data/mockData.js";

export default function MedicineDetailsScreen({ navigate }) {
  return (
    <div className="h-full w-full flex flex-col bg-bg">
      <TopBar title="Medicine Details" onBack={() => navigate("scan")} />

      <div className="flex-1 overflow-y-auto px-6 pb-8 flex flex-col gap-5">
        <Card className="flex flex-col items-center text-center gap-3 !py-8">
          <div className="w-24 h-24 rounded-3xl bg-primary-light flex items-center justify-center text-5xl">
            {m.image}
          </div>
          <h1 className="font-display text-2xl font-bold text-navy">{m.name}</h1>
          <p className="text-slate text-base">{m.generic}</p>
          <div className="flex items-center gap-1.5 bg-safe-bg text-safe px-3 py-1.5 rounded-full text-sm font-semibold">
            <ShieldCheck size={16} />
            AI Confidence: {m.confidence}%
          </div>
        </Card>

        <Card>
          <h2 className="font-display font-semibold text-lg text-navy mb-2">Dosage</h2>
          <p className="text-navy/90 text-base leading-relaxed">{m.dosage}</p>
        </Card>

        <Card>
          <h2 className="font-display font-semibold text-lg text-navy mb-2">Usage Instructions</h2>
          <p className="text-navy/90 text-base leading-relaxed">{m.usage}</p>
        </Card>

        <Card>
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle size={20} className="text-moderate" />
            <h2 className="font-display font-semibold text-lg text-navy">Possible Side Effects</h2>
          </div>
          <ul className="flex flex-col gap-2"></ul>