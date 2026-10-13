import { createGlobalStyle } from 'styled-components';
import { normalize } from './normalize';
import { palettes, toCssVars } from './colors';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  /* Colour tokens. data-theme is set before paint by the script in app/layout.tsx;
     the media query is the no-JS fallback that follows the system setting. */
  :root,
  :root[data-theme="dark"] {
    ${toCssVars(palettes.dark)}
    color-scheme: dark;
  }
  @media (prefers-color-scheme: light) {
    :root:not([data-theme]) {
      ${toCssVars(palettes.light)}
      color-scheme: light;
    }
  }
  :root[data-theme="light"] {
    ${toCssVars(palettes.light)}
    color-scheme: light;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  /* Keep section headings clear of the sticky header when jumping via nav links */
  section[id] {
    scroll-margin-top: 72px;
  }

  ::selection {
    background: ${props => props.theme.colors.accent1};
    color: ${props => props.theme.colors.onAccent};
  }

  /* One visible focus style for every interactive element (keyboard only) */
  a:focus-visible,
  button:focus-visible,
  [tabindex]:focus-visible {
    outline: 2px solid ${props => props.theme.colors.accentText};
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyles;
