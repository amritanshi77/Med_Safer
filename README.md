\# MedSafer\_AI



\*\*Smart Medicine Safety for Everyone\*\* — an accessible, elderly-friendly mobile UI prototype for a healthcare AI app that uses OCR and AI-powered drug interaction detection.



\## Screens included

1\. Splash Screen

2\. Login / Signup

3\. Home Dashboard

4\. OCR Scan (medicine label scanning)

5\. Medicine Details

6\. Drug Interaction Warning (color-coded severity)

7\. Voice Assistant

8\. Medicine History (timeline + search)

9\. Profile \& Settings (font size, dark mode, language, emergency contact)

10\. Emergency Alert (SOS)



\## Design system

\- \*\*Palette:\*\* white, soft blue (`#EAF4FB`), teal (`#2A9D8F`), navy text (`#1B2A3B`), safe green / moderate amber / danger coral for interaction severity.

\- \*\*Type:\*\* Poppins (headings) + Inter (body), large sizes by default, user-adjustable in Settings.

\- \*\*Accessibility:\*\* high-contrast text, 44px+ tap targets, visible keyboard focus rings, `prefers-reduced-motion` respected.

\- All tokens live in `tailwind.config.js` — change colors/fonts there to re-theme the whole app.



\## Tech stack

React 18 + Vite + Tailwind CSS + \[lucide-react](https://lucide.dev) icons. Plain component structure (no router library — a simple `screen` state in `App.jsx` acts as the prototype navigator), so it's easy to port into React Native (swap `div`/`button` for `View`/`Pressable`) or use as a reference for a Flutter build.



\## Run locally

\\`\\`\\`bash

npm install

npm run dev

\\`\\`\\`

Then open the printed local URL (usually `http://localhost:5173`).



\## Build for production

\\`\\`\\`bash

npm run build

npm run preview

\\`\\`\\`



\## Project structure

\\`\\`\\`

src/

&#x20; components/   # Button, Card, TopBar, BottomNav, SeverityBadge, PhoneFrame

&#x20; screens/      # one file per screen, matches the 10 screens above

&#x20; data/         # mock data (swap for real API / OCR / AI service calls)

&#x20; App.jsx       # screen state + navigation

&#x20; index.css     # global styles, accessibility defaults

\\`\\`\\`

