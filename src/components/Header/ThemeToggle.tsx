"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { ToggleButton } from "./elements";

type ThemeName = "light" | "dark";

const STORAGE_KEY = "theme";

const readTheme = (): ThemeName =>
  document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

const applyTheme = (theme: ThemeName) => {
  document.documentElement.setAttribute("data-theme", theme);
};

// The initial theme is set before paint by the inline script in app/layout.tsx.
export const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeName | null>(null);

  useEffect(() => {
    setTheme(readTheme());

    // Follow the system setting until the visitor picks a theme themselves.
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onSystemChange = (e: MediaQueryListEvent) => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem(STORAGE_KEY);
      } catch {}
      if (saved) return;
      const next: ThemeName = e.matches ? "light" : "dark";
      applyTheme(next);
      setTheme(next);
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  const toggle = () => {
    const next: ThemeName = readTheme() === "light" ? "dark" : "light";
    applyTheme(next);
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  const label = theme
    ? `Switch to ${theme === "light" ? "dark" : "light"} mode`
    : "Toggle colour theme";

  return (
    <ToggleButton type="button" onClick={toggle} aria-label={label} title={label}>
      {/* Both icons render; CSS shows the right one from data-theme, so SSR markup never mismatches */}
      <Sun className="icon-sun" size={20} aria-hidden="true" />
      <Moon className="icon-moon" size={20} aria-hidden="true" />
    </ToggleButton>
  );
};
