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
}

export interface Skill {
  image: string;
  id: number;
  description: string;
}

export interface Theme {
  fonts: {
    title: string;
    main: string;
  };
  colors: {
    primary1: string;
    background1: string;
    accent1: string;
    button: string;
    background2: string;
    text: string;
    cardBg: string,
    cardBorder: string
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
  icon: string;
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