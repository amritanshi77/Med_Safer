import { useState } from "react";
import { Mic, Volume2 } from "lucide-react";
import TopBar from "../components/TopBar.jsx";
import Card from "../components/Card.jsx";

export default function VoiceAssistantScreen({ navigate }) {
  const [listening, setListening] = useState(false);

  return (
    <div className="h-full w-full flex flex-col bg-bg">
      <TopBar title="Voice Assistant" onBack={() => navigate("details")} />

      <div className="flex-1 flex flex-col items-center justify-center px-8 gap-8">
        <div className="relative w-44 h-44 flex items-center justify-center">
          {listening && (
            <>
              <span className="absolute inset-0 rounded-full bg-primary/30 animate-pulseRing" />
              <span className="absolute inset-0 rounded-full bg-primary/30 animate-pulseRing [animation-delay:0.6s]" />
            </>
          )}
          <button
            onClick={() => setListening((v) => !v)}
            aria-pressed={listening}
            aria-label="Toggle voice input"
            className="w-28 h-28 rounded-full bg-primary flex items-center justify-center shadow-floating relative z-10"
          >
            <Mic size={44} className="text-white" strokeWidth={2.2} />
          </button>
        </div>
        <p className="text-navy text-lg text-center font-medium">
          {listening ? "Listening… say “Read my medicine info”" : "Tap the microphone to speak"}
        </p>

        <Card className="w-full flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
            <Volume2 size={22} className="text-primary-dark" />
          </div>
          <p className="text-navy text-base leading-relaxed">
            "Metformin, 500 milligrams, twice daily with meals. Take with food to reduce stomach upset."
          </p>
        </Card>
      </div>

      <div className="px-8 pb-10">
        <p className="text-center text-slate text-sm leading-relaxed">
          Voice Assistant reads medicine information aloud and understands simple spoken commands — built for easy, hands-free use.
        </p>
      </div>
    </div>
  );
}