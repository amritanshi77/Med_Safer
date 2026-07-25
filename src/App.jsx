import { useState } from "react";
import PhoneFrame from "./components/PhoneFrame.jsx";
import SplashScreen from "./screens/SplashScreen.jsx";
import AuthScreen from "./screens/AuthScreen.jsx";
import HomeDashboard from "./screens/HomeDashboard.jsx";
import OCRScanScreen from "./screens/OCRScanScreen.jsx";
import MedicineDetailsScreen from "./screens/MedicineDetailsScreen.jsx";
import InteractionWarningScreen from "./screens/InteractionWarningScreen.jsx";
import VoiceAssistantScreen from "./screens/VoiceAssistantScreen.jsx";
import MedicineHistoryScreen from "./screens/MedicineHistoryScreen.jsx";
import ProfileSettingsScreen from "./screens/ProfileSettingsScreen.jsx";
import EmergencyAlertScreen from "./screens/EmergencyAlertScreen.jsx";

export default function App() {
  const [screen, setScreen] = useState("splash");
  const navigate = (key) => setScreen(key);

  const screens = {
    splash: <SplashScreen onContinue={() => navigate("auth")} />,
    auth: <AuthScreen onLogin={() => navigate("home")} onGuest={() => navigate("home")} />,
    home: <HomeDashboard navigate={navigate} />,
    scan: <OCRScanScreen navigate={navigate} />,
    details: <MedicineDetailsScreen navigate={navigate} />,
    interaction: <InteractionWarningScreen navigate={navigate} />,
    voice: <VoiceAssistantScreen navigate={navigate} />,
    history: <MedicineHistoryScreen navigate={navigate} />,
    profile: <ProfileSettingsScreen navigate={navigate} />,
    emergency: <EmergencyAlertScreen navigate={navigate} />,
  };

  return <PhoneFrame>{screens[screen]}</PhoneFrame>;
}