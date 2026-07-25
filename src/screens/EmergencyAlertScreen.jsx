import { PhoneCall, MapPin, Share2 } from "lucide-react";
import TopBar from "../components/TopBar.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import { emergencyContact } from "../data/mockData.js";

export default function EmergencyAlertScreen({ navigate }) {
  return (
    <div className="h-full w-full flex flex-col bg-bg">
      <TopBar title="Emergency Help" onBack={() => navigate("home")} />

      <div className="flex-1 overflow-y-auto px-6 pb-8 flex flex-col gap-5">
        <div className="flex flex-col items-center gap-4 py-4">
          <button
            aria-label="Call SOS"
            className="w-40 h-40 rounded-full bg-danger text-white shadow-floating flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
          >
            <PhoneCall size={40} strokeWidth={2.2} />
            <span className="font-display font-bold text-xl">SOS</span>
          </button>
          <p className="text-slate text-base text-center max-w-[240px]">
            One tap calls emergency services and shares your location
          </p>
        </div>

        <Card className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center">
              <MapPin size={20} className="text-primary-dark" />
            </div>
            <div>
              <p className="font-semibold text-navy text-base">Nearby Hospital</p>
              <p className="text-slate text-sm">City General — 1.2 miles away</p>
            </div>
          </div>
        </Card>

        <Card className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center">
              <PhoneCall size={20} className="text-primary-dark" />
            </div>
            <div>
              <p className="font-semibold text-navy text-base">{emergencyContact.name}</p>
              <p className="text-slate text-sm">{emergencyContact.phone}</p>
            </div>
          </div>
        </Card>

        <Button variant="secondary" icon={Share2}>Share Medicine List with Doctor</Button>
        <Button variant="outline" icon={MapPin}>Get Directions to Hospital</Button>
      </div>
    </div>
  );
}