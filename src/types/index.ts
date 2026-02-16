export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  source: string;
  id: number;
  type: string;
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
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
