export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  source: string;
  id: number;
  type: string;
  live?: string;
  demo?: string;
  apiSource?: string;
  playStore?: string;
  badge?: string;
  featured?: boolean;
  summary?: string;
}

export interface Skill {
  name: string;
  image: string;
  // Single-colour logos: "dark" ones are flipped on the dark theme, "light" ones on the light theme
  tone?: "dark" | "light";
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Theme {
  fonts: {
    title: string;
    main: string;
    mono: string;
  };
  colors: {
    primary1: string;
    background1: string;
    accent1: string;
    accentText: string;
    accentHover: string;
    onAccent: string;
    button: string;
    background2: string;
    text: string;
    textSubtle: string;
    cardBg: string;
    cardBorder: string;
    border: string;
    shadow: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Achievement {
  id: number;
  icon: "trophy" | "medal" | "calendar-check";
  title: string;
  meta?: string;
  description: string;
}

export interface Stat {
  id: number;
  number: string;
  label: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  link?: string;
};