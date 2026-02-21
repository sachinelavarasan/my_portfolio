'use client';

import styled, { keyframes } from "styled-components";
import { Theme } from "../../types";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% { background-position: -400px 0; }
  100% { background-position: 400px 0; }
`;


export const StatsStrip = styled.div<{ theme: Theme }>`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 32px 0 48px;

  @media ${(p) => p.theme.breakpoints.md} {
    gap: 16px;
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    gap: 12px;
    flex-direction: row;
  }
`;

export const StatCard = styled.div<{ theme: Theme }>`
  flex: 1 1 180px;
  background: linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 28px 20px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeInUp} 0.6s ease both;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(19, 173, 199, 0.5);
    box-shadow: 0 12px 40px rgba(19, 173, 199, 0.15);
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    flex: 1 1 calc(50% - 6px);
    padding: 20px 12px 16px;
  }
`;

export const StatNumber = styled.span`
  font-size: 48px;
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(135deg, #13ADC7 0%, #945DD6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const StatLabel = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.55);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.4;
`;


export const AchievementsGrid = styled.div<{ theme: Theme }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding-bottom: 64px;

  @media ${(p) => p.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 12px;
    padding-bottom: 40px;
  }
`;

export const AchievementCard = styled.div<{ theme: Theme; $delay?: number }>`
  background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 28px 28px 24px;
  display: flex;
  gap: 18px;
  align-items: flex-start;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeInUp} 0.6s ease both;
  animation-delay: ${(p) => (p.$delay ?? 0) * 0.1}s;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.04) 50%,
      transparent 100%
    );
    background-size: 800px 100%;
    animation: ${shimmer} 3s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(148, 93, 214, 0.45);
    box-shadow: 0 12px 40px rgba(148, 93, 214, 0.12);
  }
  &:hover::before {
    opacity: 1;
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 20px 16px;
    gap: 14px;
  }
`;

export const AchievementIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(19, 173, 199, 0.18) 0%, rgba(148, 93, 214, 0.18) 100%);
  border: 1px solid rgba(148, 93, 214, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    font-size: 18px;
  }
`;

export const AchievementContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;

export const AchievementTitle = styled.h3`
  font-size: 17px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.35;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const AchievementMeta = styled.span`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  background: linear-gradient(90deg, #13ADC7, #945DD6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const AchievementDescription = styled.p`
  font-size: 14px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
