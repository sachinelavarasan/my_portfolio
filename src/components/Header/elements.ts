'use client';

import styled from "styled-components";

// The full nav only fits on wider screens; below this it collapses into the menu button.
const NAV_COLLAPSE = "(max-width: 900px)";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.background1}e6;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 14px 16px;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.primary1};
  font-weight: 600;
  font-size: 18px;

  &:hover {
    color: ${({ theme }) => theme.colors.accent1};
  }
`;

export const NavLink = styled.a`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent1};
  }

  @media ${NAV_COLLAPSE} {
    display: block;
    padding: 14px 0;
    font-size: 17px;
  }
`;

export const NavList = styled.ul<{ $open?: boolean }>`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 24px;
  margin-bottom: 0;

  @media ${NAV_COLLAPSE} {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    gap: 0;

    background: ${({ theme }) => theme.colors.background1};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    max-height: ${({ $open }) => ($open ? "480px" : "0")};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    overflow: hidden;
    transition: max-height 0.25s ease, visibility 0.25s;

    li {
      width: 100%;
      text-align: center;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  font-size: 22px;
  color: ${({ theme }) => theme.colors.primary1};
  background: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  @media ${NAV_COLLAPSE} {
    display: flex;
  }
`;
