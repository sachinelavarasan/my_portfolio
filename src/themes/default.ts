import { Theme } from "../types";

const defaultTheme: Theme = {
  // Font variables are set by next/font in app/layout.tsx
  fonts: {
    title: "var(--font-heading), Space Grotesk, sans-serif",
    main: "var(--font-body), Inter, system-ui, sans-serif",
    mono: "var(--font-mono), JetBrains Mono, ui-monospace, monospace",
  },
  // Colors point at the CSS variables in styles/colors.ts, so light/dark switch without re-rendering
  colors: {
    primary1: "var(--heading)",
    background1: "var(--bg)",
    accent1: "var(--accent)",
    accentText: "var(--accent-text)",
    accentHover: "color-mix(in srgb, var(--accent) 80%, white)",
    onAccent: "var(--on-accent)",
    button: "var(--accent)",
    background2: "var(--surface)",
    text: "var(--body)",
    textSubtle: "var(--body)",
    cardBg: "var(--surface)",
    cardBorder: "var(--card-border)",
    border: "var(--border)",
    shadow: "var(--shadow)",
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
