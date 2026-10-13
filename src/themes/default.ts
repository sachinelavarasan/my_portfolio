import { Theme } from "../types";

const defaultTheme: Theme = {
  // Temp fonts
  fonts: {
    title: "var(--font-space-grotesk), Space Grotesk, sans-serif",
    main: "var(--font-space-grotesk), Space Grotesk, sans-serif",
  },
  // Colors for layout (matched to the LinkedIn banner: deep navy + soft blue)
  colors: {
    primary1: "#E6EDF7",
    background1: "#0F1C2E",
    accent1: "#8AB8F0",
    accentHover: "#A9CBF4",
    onAccent: "#0F1C2E",
    button: "#8AB8F0",
    background2: "#15263D",
    text: "rgba(230, 237, 247, 0.72)",
    textSubtle: "rgba(230, 237, 247, 0.6)",
    cardBg: "#15263D",
    cardBorder: "rgba(138, 184, 240, 0.16)",
    border: "rgba(255, 255, 255, 0.08)",
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (max-width: 768px)",
    lg: "screen and (max-width: 1024px)",
    xl: "screen and (max-width: 1280px)",
  },
};

export default defaultTheme;
