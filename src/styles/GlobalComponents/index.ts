'use client';

import styled, { css } from 'styled-components';
import { alpha } from "../colors";
import { Theme } from '../../types';

interface SectionProps {
  grid?: boolean;
  row?: boolean;
  nopadding?: boolean;
  theme: Theme;
}

interface SectionTitleProps {
  $main?: boolean;
  $theme?: Theme;
}

interface SectionDividerProps {
  colorAlt?: boolean;
  divider?: boolean;
  theme: Theme;
}

export const Section = styled.section<SectionProps>`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "48px 48px" } ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: ${(props) => props.nopadding ? "0" : "40px 32px" } ;
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "32px 16px" } ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const SectionTitle = styled.h2<SectionTitleProps>`
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  max-width: 100%;
  color: ${(props) => props.theme.colors.primary1};
  margin: 16px 0 32px;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 34px;
    margin-bottom: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 28px;
    margin: 12px 0 24px;
  }
`

export const SectionDivider = styled.div<SectionDividerProps>`
  width: 48px;
  height: 4px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.accent1};
  margin: ${(props) => props.divider ? "4rem 0" : "" };

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 36px;
    height: 3px;
  }
`

/* The one card look: same surface, radius, border and hover in every section */
export const cardStyle = css`
  background: ${(props) => props.theme.colors.cardBg};
  border: 1px solid ${(props) => props.theme.colors.cardBorder};
  border-radius: 16px;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: ${(props) => alpha(props.theme.colors.accent1, 55)};
    box-shadow: 0 10px 28px ${(props) => props.theme.colors.shadow};
  }
`

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 14.5px;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`

/* Solid primary button */
export const PrimaryButton = styled.a`
  ${buttonBase};
  background: ${(props) => props.theme.colors.accent1};
  color: ${(props) => props.theme.colors.onAccent};
  border: 1px solid ${(props) => props.theme.colors.accent1};

  &:hover {
    background: ${(props) => props.theme.colors.accentHover};
    border-color: ${(props) => props.theme.colors.accentHover};
    color: ${(props) => props.theme.colors.onAccent};
  }
`

/* Outlined secondary button */
export const OutlineButton = styled.a`
  ${buttonBase};
  background: transparent;
  color: ${(props) => props.theme.colors.primary1};
  border: 1px solid ${(props) => alpha(props.theme.colors.accentText, 50)};

  &:hover {
    background: ${(props) => alpha(props.theme.colors.accent1, 12)};
    border-color: ${(props) => props.theme.colors.accentText};
    color: ${(props) => props.theme.colors.primary1};
  }
`
