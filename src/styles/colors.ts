// Colour tokens for both themes. Components read them through the styled-components
// theme (which points at these CSS variables), so switching theme needs no re-render.
export const palettes = {
  dark: {
    "--bg": "#0F1C2E",
    "--surface": "#16263D",
    "--accent": "#8AB8F0",
    // accent used as text/icons; same as --accent on dark, deeper on light for contrast
    "--accent-text": "#8AB8F0",
    "--on-accent": "#0F1C2E",
    "--heading": "#F1F5F9",
    "--body": "#94A3B8",
    "--border": "rgba(255, 255, 255, 0.08)",
    "--card-border": "rgba(138, 184, 240, 0.16)",
    "--shadow": "rgba(0, 0, 0, 0.3)",
    "--graph-empty": "rgba(255, 255, 255, 0.07)",
  },
  light: {
    "--bg": "#FFFFFF",
    "--surface": "#F8FAFC",
    "--accent": "#8AB8F0",
    "--accent-text": "#2D6CB5",
    "--on-accent": "#0F1C2E",
    "--heading": "#0F1C2E",
    "--body": "#475569",
    "--border": "rgba(15, 28, 46, 0.1)",
    "--card-border": "rgba(15, 28, 46, 0.12)",
    "--shadow": "rgba(15, 28, 46, 0.1)",
    "--graph-empty": "#E2E8F0",
  },
} as const;

export const toCssVars = (palette: Record<string, string>) =>
  Object.entries(palette)
    .map(([name, value]) => `${name}: ${value};`)
    .join("\n");

// Translucent version of a colour (works with CSS variables, unlike appending hex alpha).
export const alpha = (color: string, percent: number) =>
  `color-mix(in srgb, ${color} ${percent}%, transparent)`;
