import { useState } from "react";
import { ScanLine, ImagePlus, Info } from "lucide-react";
import TopBar from "../components/TopBar.jsx";
import Button from "../components/Button.jsx";

export default function OCRScanScreen({ navigate }) {
  const [scanning, setScanning] = useState(false);

  const startScan = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      navigate("details");
    }, 2200);
  };

  return (
    <div className="h-full w-full flex flex-col bg-navy">
      <div className="bg-navy">
        <TopBar title="" onBack={() => navigate("home")} right={<span className="text-white font-display font-semibold">Scan Medicine</span>} />
      </div>

      <div className="flex-1 relative flex items-center justify-center px-8">
        <div className="absolute inset-6 border-2 border-dashed border-white/30 rounded-3xl" />
        <div className="relative flex flex-col items-center gap-6 text-center">
          <div className="relative w-40 h-40 flex items-center justify-center">
            {scanning && (
              <>
                <span className="absolute inset-0 rounded-full bg-primary/40 animate-pulseRing" />
                <span className="absolute inset-0 rounded-full bg-primary/40 animate-pulseRing [animation-delay:0.6s]" />
              </>
            )}
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center relative z-10 shadow-floating">
              <ScanLine size={40} className="text-white" strokeWidth={2.2} />
            </div>
          </div>
          <p className="text-white/90 text-lg max-w-[260px]">
            {scanning ? "Detecting medicine label…" : "Place the medicine box or strip inside the frame"}
          </p>
        </div>
      </div>

      <div className="bg-bg rounded-t-[2.5rem] px-6 pt-6 pb-8 flex flex-col gap-4">
        <div className="flex items-start gap-2 bg-primary-light rounded-2xl p-4">
          <Info size={20} className="text-primary-dark shrink-0 mt-0.5" />
          <p className="text-navy text-sm leading-relaxed">
            Hold your phone steady, about 8 inches from the label. Good lighting helps us read it clearly.
          </p>
        </div>
        <Button icon={ScanLine} onClick={startScan}>{scanning ? "Scanning…" : "Start Scan"}</Button>
        <Button variant="secondary" icon={ImagePlus} onClick={startScan}>Upload Prescription Photo</Button>
      </div>
    </div>
  );
}