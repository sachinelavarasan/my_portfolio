'use client';

import styled from "styled-components";
import { alpha } from "../../styles/colors";
import { Theme } from "../../types";
import { cardStyle } from "../../styles/GlobalComponents";


export const StatsStrip = styled.div<{ theme: Theme }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;

  @media ${(p) => p.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

export const StatCard = styled.div<{ theme: Theme }>`
  ${cardStyle};
  padding: 24px 16px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 18px 12px 16px;
  }
`;

export const StatNumber = styled.span<{ theme: Theme }>`
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  color: ${(p) => p.theme.colors.accentText};
  margin-bottom: 8px;

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 30px;
  }
`;

export const StatLabel = styled.span<{ theme: Theme }>`
  font-size: 13px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  line-height: 1.4;
`;


export const AchievementsGrid = styled.div<{ theme: Theme }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media ${(p) => p.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(p) => p.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const AchievementCard = styled.div<{ theme: Theme }>`
  ${cardStyle};
  padding: 24px;
  display: flex;
  gap: 16px;
  align-items: flex-start;

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 18px 16px;
    gap: 14px;
  }
`;

export const AchievementIcon = styled.div<{ theme: Theme }>`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${(p) => alpha(p.theme.colors.accent1, 10)};
  border: 1px solid ${(p) => alpha(p.theme.colors.accent1, 20)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.accentText};
  flex-shrink: 0;
`;

export const AchievementContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
`;

export const AchievementTitle = styled.h3<{ theme: Theme }>`
  font-size: 17px;
  font-weight: 700;
  color: ${(p) => p.theme.colors.primary1};
  line-height: 1.35;
  margin: 0;
`;

export const AchievementMeta = styled.span<{ theme: Theme }>`
  font-size: 12.5px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${(p) => p.theme.colors.accentText};
`;

export const AchievementDescription = styled.p<{ theme: Theme }>`
  font-size: 14.5px;
  line-height: 1.6;
  color: ${(p) => p.theme.colors.text};
  margin: 0;
`;
