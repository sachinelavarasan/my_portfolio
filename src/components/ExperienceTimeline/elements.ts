'use client';

import styled, { css, keyframes } from "styled-components";

export const Section = styled.section`
  padding: 80px 20px;
  background: ${({ theme }) => theme.colors.background1};
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 50px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: auto;

  &::after {
    content: "";
    position: absolute;
    width: 4px;
    background: ${({ theme }) => theme.colors.button};
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 768px) {
    padding-left: 50px;

    &::after {
      left: 20px;
      transform: none;
    }
  }
`;

export const TimelineItem = styled.div<{ $isLeft: boolean }>`
display: flex;
  justify-content: ${({ $isLeft }) =>
    $isLeft ? "flex-start" : "flex-end"};
  position: relative;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }

`;

export const IconWrapper = styled.div`
  position: absolute;
  left: -2px;
  top: 0;
  width: 36px;
  height: 36px;
  background: ${({ theme }) => theme.colors.button};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;

  box-shadow: 0 0 0 4px rgba(0, 118, 255, 0.15);
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid #5274b7;
  padding: 20px 24px;
  border-radius: 12px;
  transition: transform 500ms 100ms;

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0px 4px 6px rgba(0, 0, 0, 0.4);
  }

   @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  margin-bottom: 12px;
`;

export const Role = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary1};
  margin-bottom: 4px;
`;

export const Company = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.accent1};
  margin-bottom: 4px;
`;

export const Location = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
`;

export const List = styled.ul`
  margin-top: 10px;
  padding-left: 18px;

  li {
    margin-bottom: 6px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primary1};
    opacity: 0.85;
  }
`;

export const Content = styled.div<{ $isLeft: boolean }>`
  width: 45%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 20px;
    width: 40px;
    height: 2px;
    background: ${({ theme }) => theme.colors.button};

    ${({ $isLeft }) =>
      $isLeft
        ? `
        right: -40px;
      `
        : `
        left: -40px;
      `}
  }
  
   @media (max-width: 768px) {
    width: 100%;

    &::after {
      left: -30px;
      right: auto;
      top: 10px;
    }
  }
`;

export const Center = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  @media (max-width: 768px) {
    left: -20px;
    transform: none;
    top: -10px;
  }

`;

const blink = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 118, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(0, 118, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 118, 255, 0);
  }
`;

export const Icon = styled.div<{ $isLatest?: boolean }>`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.button};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  box-shadow: 0 0 0 6px rgba(0, 118, 255, 0.15);
  ${({ $isLatest }) =>
    $isLatest &&
    css`
      animation: ${blink} 1.8s infinite;
    `}
`;
