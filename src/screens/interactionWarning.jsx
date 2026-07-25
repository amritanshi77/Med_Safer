import { PhoneCall } from "lucide-react";
import TopBar from "../components/TopBar.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import SeverityBadge from "../components/SeverityBadge.jsx";
import { interactions } from "../data/mockData.js";

export default function InteractionWarningScreen({ navigate }) {
  const hasDanger = interactions.some((i) => i.level === "danger");

  return (
    <div className="h-full w-full flex flex-col bg-bg">
      <TopBar title="Interaction Check" onBack={() => navigate("details")} />

      <div className="flex-1 overflow-y-auto px-6 pb-8 flex flex-col gap-4">
        <p className="text-slate text-base leading-relaxed">
          We checked your current medicines against each other. Here's what we found:
        </p>

        {interactions.map((i) => (
          <Card key={i.id} className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display font-semibold text-navy text-base leading-snug">{i.pair}</h3>
              <SeverityBadge level={i.level} />
            </div>
            <p className="text-navy/80 text-base leading-relaxed">{i.message}</p>
          </Card>
        ))}

        {hasDanger && (
          <Card className="!bg-danger-bg !shadow-none border-2 border-danger/30 flex flex-col gap-3 items-center text-center">
            <p className="text-danger font-display font-semibold text-lg">A dangerous interaction was found</p>
            <p className="text-navy/80 text-base">
              Please speak with your doctor or pharmacist before combining these medicines.
            </p>
            <Button variant="danger" icon={PhoneCall} onClick={() => navigate("emergency")}>
              Consult Doctor Now
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}