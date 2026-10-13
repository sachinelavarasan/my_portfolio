'use client';

import styled from "styled-components"
import { Theme } from "../../types";

export const FooterWrapper = styled.footer<{ theme: Theme }>`
  max-width: 1040px;
  margin: 48px auto 0;
  padding: 32px 0 40px;
  border-top: 1px solid ${props => props.theme.colors.border};

  /* line the border up with the section content (sections use 48/32/16px side padding) */
  @media (max-width: 1136px) {
    margin-left: 48px;
    margin-right: 48px;
  }
  @media ${props => props.theme.breakpoints.md} {
    margin-left: 32px;
    margin-right: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 16px;
    margin-right: 16px;
    padding: 28px 0 40px;
  }
`

export const FooterRow = styled.div<{ theme: Theme }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    text-align: center;
  }
`

export const Slogan = styled.p<{ theme: Theme }>`
  margin: 0;
  font-size: 17px;
  line-height: 1.5;
  color: ${props => props.theme.colors.text};

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 15px;
  }
`

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const SocialIcon = styled.a<{ theme: Theme }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.border};
  transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.accent1};
    border-color: ${props => props.theme.colors.accent1}80;
    transform: translateY(-2px);
  }
`

export const Copyright = styled.p<{ theme: Theme }>`
  margin: 24px 0 0;
  font-size: 14px;
  color: ${props => props.theme.colors.textSubtle};

  @media ${props => props.theme.breakpoints.sm} {
    text-align: center;
  }
`
