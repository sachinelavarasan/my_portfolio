'use client';

import styled from "styled-components";
import { alpha } from "../../styles/colors";
import { cardStyle } from "../../styles/GlobalComponents";

export const Timeline = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;

  &::after {
    content: "";
    position: absolute;
    width: 2px;
    background: ${({ theme }) => alpha(theme.colors.accent1, 25)};
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    padding-left: 52px;

    &::after {
      left: 17px;
      transform: none;
    }
  }
`;

export const TimelineItem = styled.div<{ $isLeft: boolean }>`
  display: flex;
  justify-content: ${({ $isLeft }) =>
    $isLeft ? "flex-start" : "flex-end"};
  position: relative;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 20px;
  }
`;

export const Card = styled.div`
  ${cardStyle};
  padding: 22px 24px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 18px;
  }
`;

export const Role = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary1};
  margin-bottom: 4px;

  @media (max-width: 640px) {
    font-size: 18px;
  }
`;

export const Company = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accentText};
  margin-bottom: 2px;
`;

export const Location = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSubtle};
`;

export const List = styled.ul`
  margin: 14px 0 0;
  padding-left: 18px;

  li {
    list-style: disc;
    margin-bottom: 6px;
    font-size: 15px;
    line-height: 1.55;
    color: ${({ theme }) => theme.colors.text};
  }
  li::marker {
    color: ${({ theme }) => theme.colors.accentText};
  }
`;

export const Content = styled.div<{ $isLeft: boolean }>`
  width: 45%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 20px;
    /* the card is 45% wide, so the gap to the centre line is 5/45 of its width */
    width: calc(100% * 5 / 45);
    height: 2px;
    background: ${({ theme }) => alpha(theme.colors.accent1, 25)};
    ${({ $isLeft }) => ($isLeft ? "left: 100%;" : "right: 100%;")}
  }

  @media (max-width: 768px) {
    width: 100%;

    &::after {
      display: none;
    }
  }
`;

export const Center = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 2;

  @media (max-width: 768px) {
    left: -52px;
    transform: none;
  }
`;

export const Icon = styled.div<{ $isLatest?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  background: ${({ theme, $isLatest }) =>
    $isLatest ? theme.colors.accent1 : theme.colors.cardBg};
  color: ${({ theme, $isLatest }) =>
    $isLatest ? theme.colors.onAccent : theme.colors.accentText};
  border: 2px solid ${({ theme }) => theme.colors.accent1};

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 13px;
  }
`;
