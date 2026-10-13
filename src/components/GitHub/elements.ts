'use client';

import styled, { keyframes } from "styled-components";
import { alpha } from "../../styles/colors";
import { Theme } from "../../types";
import { cardStyle, OutlineButton } from "../../styles/GlobalComponents";

// Contribution levels: empty cell, then the accent at increasing strength (no other hues).
// --accent-text is the accent itself on dark and a deeper shade on white, so pale levels stay visible.
const levelColors = [
  "var(--graph-empty)",
  alpha("var(--accent-text)", 30),
  alpha("var(--accent-text)", 55),
  alpha("var(--accent-text)", 80),
  "var(--accent-text)",
];

const shimmerAnim = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`;


export const GraphWrapper = styled.div<{ theme: Theme }>`
  ${cardStyle};
  width: 100%;
  margin-bottom: 40px;
  padding: 20px 24px 16px;

  @media ${(p) => p.theme.breakpoints.sm} {
    margin-bottom: 32px;
    padding: 16px 12px 12px;
  }
`;

export const GraphHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const GraphTotal = styled.span<{ theme: Theme }>`
  font-size: 14px;
  color: ${(p) => p.theme.colors.text};

  strong {
    font-size: 18px;
    font-weight: 700;
    color: ${(p) => p.theme.colors.accentText};
  }
`;

export const GraphScroll = styled.div<{ theme: Theme }>`
  width: 100%;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: ${(p) => p.theme.colors.border} transparent;

  svg {
    display: block;
    width: 100%;
    height: auto;
  }

  .label {
    font-size: 9px;
    fill: ${(p) => p.theme.colors.textSubtle};
  }

  ${levelColors.map((c, i) => `rect.lvl-${i} { fill: ${c}; }`).join("\n")}

  rect:hover {
    stroke: ${(p) => p.theme.colors.primary1};
    stroke-width: 1;
  }
`;

export const GraphFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const GraphLegend = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${(p) => p.theme.colors.textSubtle};

  span {
    width: 11px;
    height: 11px;
    border-radius: 2.5px;
  }
  ${levelColors.map((c, i) => `span.lvl-${i} { background: ${c}; }`).join("\n")}
`;

export const GraphSkeleton = styled.div`
  height: 150px;
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    ${alpha("var(--heading)", 4)} 25%,
    ${alpha("var(--heading)", 8)} 50%,
    ${alpha("var(--heading)", 4)} 75%
  );
  background-size: 600px 100%;
  animation: ${shimmerAnim} 1.6s linear infinite;
`;


export const ReposGrid = styled.div<{ theme: Theme }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  margin-bottom: 32px;

  @media ${(p) => p.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const RepoCard = styled.a<{ theme: Theme }>`
  ${cardStyle};
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px 20px 16px;

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 16px;
  }
`;

export const RepoName = styled.span<{ theme: Theme }>`
  font-size: 15px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.primary1};
  word-break: break-word;
  line-height: 1.3;
`;

export const RepoDescription = styled.p<{ theme: Theme }>`
  font-size: 14px;
  line-height: 1.55;
  color: ${(p) => p.theme.colors.text};
  margin: 0;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const RepoMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 4px;
`;

export const RepoMetaItem = styled.span<{ theme: Theme }>`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  color: ${(p) => p.theme.colors.textSubtle};
`;

export const RepoLanguageDot = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(p) => p.$color};
  display: inline-block;
  flex-shrink: 0;
`;


export const SkeletonCard = styled.div`
  height: 120px;
  border-radius: 16px;
  background: linear-gradient(
    90deg,
    ${alpha("var(--heading)", 4)} 25%,
    ${alpha("var(--heading)", 8)} 50%,
    ${alpha("var(--heading)", 4)} 75%
  );
  background-size: 600px 100%;
  animation: ${shimmerAnim} 1.6s linear infinite;
`;


export const GHCta = styled(OutlineButton)`
  align-self: center;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SectionSubLabel = styled.h3<{ theme: Theme }>`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${(p) => p.theme.colors.accentText};
  margin: 0 0 14px;
  align-self: flex-start;
`;
