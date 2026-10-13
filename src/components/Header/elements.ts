'use client';

import styled from "styled-components";
import { alpha } from "../../styles/colors";

// The full nav only fits on wider screens; below this it collapses into the menu button.
const NAV_COLLAPSE = "(max-width: 1080px)";

export const Container = styled.header<{ $scrolled?: boolean }>`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme, $scrolled }) =>
    $scrolled ? alpha(theme.colors.background1, 88) : theme.colors.background1};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(12px)" : "none")};
  /* the divider only appears once the page has scrolled */
  border-bottom: 1px solid
    ${({ theme, $scrolled }) => ($scrolled ? theme.colors.border : "transparent")};
  transition: background 0.2s ease, border-color 0.2s ease;
`;

/* Same width and side padding as the page sections, so the logo lines up with the content */
export const Inner = styled.nav`
  display: flex;
  align-items: center;
  max-width: 1040px;
  height: 68px;
  margin: 0 auto;
  padding: 0 48px;
  box-sizing: content-box;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0 32px;
  }
  @media ${({ theme }) => theme.breakpoints.sm} {
    height: 60px;
    padding: 0 16px;
  }
`;

export const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.primary1};
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.01em;
  border-radius: 10px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary1};
  }
  &:hover .mark {
    background: ${({ theme }) => theme.colors.accentHover};
  }
`;

export const LogoMark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.accent1};
  color: ${({ theme }) => theme.colors.onAccent};
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.02em;
  transition: background 0.2s ease;
`;

export const LogoSuffix = styled.span`
  color: ${({ theme }) => theme.colors.accentText};
`;

export const NavList = styled.ul<{ $open?: boolean }>`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 4px;
  margin: 0 0 0 auto;
  padding: 0;

  @media ${NAV_COLLAPSE} {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 2px;
    padding: ${({ $open }) => ($open ? "8px 16px 16px" : "0 16px")};

    background: ${({ theme }) => theme.colors.background1};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: 0 16px 24px ${({ theme }) => theme.colors.shadow};

    max-height: ${({ $open }) => ($open ? "520px" : "0")};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    overflow: hidden;
    transition: max-height 0.25s ease, padding 0.25s ease, visibility 0.25s;
  }
`;

export const NavLink = styled.a<{ $active?: boolean }>`
  position: relative;
  display: inline-block;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme, $active }) => ($active ? theme.colors.primary1 : theme.colors.text)};
  transition: color 0.2s ease, background 0.2s ease;

  /* short accent bar under the current section's link */
  &::after {
    content: "";
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 2px;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.accent1};
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transition: transform 0.2s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary1};
    background: ${({ theme }) => alpha(theme.colors.accent1, 10)};
  }

  @media ${NAV_COLLAPSE} {
    display: block;
    padding: 12px 14px;
    font-size: 16px;
    background: ${({ theme, $active }) => ($active ? alpha(theme.colors.accent1, 12) : "transparent")};

    &::after {
      left: 0;
      right: auto;
      top: 10px;
      bottom: 10px;
      width: 3px;
      height: auto;
      transform: scaleY(${({ $active }) => ($active ? 1 : 0)});
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 16px;

  @media ${NAV_COLLAPSE} {
    margin-left: auto;
  }
`;

const iconButton = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
`;

export const MenuButton = styled.button`
  ${iconButton};
  display: none;
  color: ${({ theme }) => theme.colors.primary1};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    border-color: ${({ theme }) => alpha(theme.colors.accent1, 55)};
  }

  @media ${NAV_COLLAPSE} {
    display: inline-flex;
  }
`;

export const ToggleButton = styled.button`
  ${iconButton};
  color: ${({ theme }) => theme.colors.primary1};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    color: ${({ theme }) => theme.colors.accentText};
    border-color: ${({ theme }) => alpha(theme.colors.accent1, 55)};
  }

  /* show the icon for the theme you'd switch to */
  .icon-moon { display: none; }
  :root[data-theme="light"] & .icon-sun { display: none; }
  :root[data-theme="light"] & .icon-moon { display: block; }
`;
