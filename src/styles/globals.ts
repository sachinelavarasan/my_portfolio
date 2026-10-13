import { createGlobalStyle } from 'styled-components';
import { normalize } from './normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
    outline: 2px solid ${props => props.theme.colors.accent1};
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
