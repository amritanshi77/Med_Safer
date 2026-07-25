export const user = {
  name: "Margaret",
  greetingTime: "Good morning",
  avatarInitials: "MG",
};

export const reminders = [
  { id: 1, name: "Metformin 500mg", time: "8:00 AM", taken: true },
  { id: 2, name: "Amlodipine 5mg", time: "1:00 PM", taken: false },
  { id: 3, name: "Atorvastatin 10mg", time: "9:00 PM", taken: false },
];

export const recentScans = [
  { id: 1, name: "Metformin", date: "Today, 8:02 AM", confidence: 96 },
  { id: 2, name: "Amlodipine", date: "Yesterday, 1:15 PM", confidence: 91 },
  { id: 3, name: "Vitamin D3", date: "2 days ago", confidence: 99 },
];

export const medicineDetail = {
  name: "Metformin",
  generic: "Metformin Hydrochloride",
  dosage: "500 mg, twice daily with meals",
  usage:
    "Used to control blood sugar levels in people with type 2 diabetes. Take with food to reduce stomach upset.",
  sideEffects: ["Mild nausea", "Stomach discomfort", "Metallic taste (rare)"],
  confidence: 96,
  image: "💊",
};

export const interactions = [
  {
    id: 1,
    level: "danger",
    pair: "Metformin + Contrast Dye",
    message:
      "Combining these can affect kidney function. Avoid unless directed by your doctor.",
  },
  {
    id: 2,
    level: "moderate",
    pair: "Amlodipine + Grapefruit Juice",
    message:
      "May increase blood pressure medication effects. Drink in moderation and monitor for dizziness.",
  },
  {
    id: 3,
    level: "safe",
    pair: "Atorvastatin + Vitamin D3",
    message: "No known interaction. Safe to take together as prescribed.",
  },
];

export const history = [
  { id: 1, name: "Metformin 500mg", date: "Today", time: "8:02 AM" },
  { id: 2, name: "Amlodipine 5mg", date: "Yesterday", time: "1:15 PM" },
  { id: 3, name: "Vitamin D3", date: "Feb 12", time: "9:30 AM" },
  { id: 4, name: "Atorvastatin 10mg", date: "Feb 10", time: "9:00 PM" },
  { id: 5, name: "Aspirin 75mg", date: "Feb 8", time: "8:00 AM" },
];

export const emergencyContact = {
  name: "Sarah (Daughter)",
  phone: "+1 (555) 012-3456",
};