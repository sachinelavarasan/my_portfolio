import styled, { keyframes } from "styled-components";
import { Theme } from "../../types";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmerAnim = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
`;


export const GHStatsRow = styled.div<{ theme: Theme }>`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 24px 0 32px;
  width: 100%;

  img {
    border-radius: 16px;
    height: 160px;
    // object-fit: contain;
    flex: 1 1 300px;
    max-width: 420px;
    display: block;
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
  }
`;


export const GraphWrapper = styled.div<{ theme: Theme }>`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  margin-bottom: 40px;
  padding: 20px 24px 16px;
  animation: ${fadeInUp} 0.7s ease both;

  @media ${(p) => p.theme.breakpoints.sm} {
    margin-bottom: 28px;
    border-radius: 14px;
    padding: 16px 12px 12px;
  }
`;

export const GraphHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const GraphTotal = styled.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.55);

  strong {
    font-size: 18px;
    font-weight: 700;
    background: linear-gradient(90deg, #13ADC7, #945DD6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const GraphScroll = styled.div`
  width: 100%;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.15) transparent;

  svg {
    display: block;
    width: 100%;
    height: auto;
  }

  .label {
    font-size: 9px;
    fill: rgba(255, 255, 255, 0.4);
  }

  rect {
    transition: opacity 0.2s ease;
  }
  rect:hover {
    opacity: 0.7;
  }
`;

export const GraphFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const GraphLegend = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);

  span {
    width: 11px;
    height: 11px;
    border-radius: 2.5px;
  }
`;

export const GraphMessage = styled.p`
  margin: 0;
  padding: 24px 0;
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);

  a {
    color: #13ADC7;
  }
`;

export const GraphSkeleton = styled.div`
  height: 150px;
  border-radius: 12px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 25%,
    rgba(255, 255, 255, 0.09) 50%,
    rgba(255, 255, 255, 0.05) 75%
  );
  background-size: 600px 100%;
  animation: ${shimmerAnim} 1.6s linear infinite;
`;


export const ReposGrid = styled.div<{ theme: Theme }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  margin-bottom: 40px;

  @media ${(p) => p.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 28px;
  }
`;

export const RepoCard = styled.a<{ theme: Theme; $delay?: number }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px 20px 16px;
  border-radius: 16px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeInUp} 0.5s ease both;
  animation-delay: ${(p) => (p.$delay ?? 0) * 0.08}s;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 16px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.04) 50%,
      transparent 100%
    );
    background-size: 600px 100%;
    animation: ${shimmerAnim} 3s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(19, 173, 199, 0.45);
    box-shadow: 0 10px 32px rgba(19, 173, 199, 0.14);
  }
  &:hover::after {
    opacity: 1;
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 16px;
  }
`;

export const RepoName = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  word-break: break-word;
  line-height: 1.3;
`;

export const RepoDescription = styled.p`
  font-size: 12.5px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.45);
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

export const RepoMetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
`;

export const RepoLanguageDot = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(p) => p.$color};
  display: inline-block;
  flex-shrink: 0;
`;


export const SkeletonCard = styled.div<{ theme: Theme }>`
  height: 120px;
  border-radius: 16px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 25%,
    rgba(255, 255, 255, 0.09) 50%,
    rgba(255, 255, 255, 0.05) 75%
  );
  background-size: 600px 100%;
  animation: ${shimmerAnim} 1.6s linear infinite;
`;


export const GHCta = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, border-color 0.3s ease,
    background 0.3s ease, box-shadow 0.3s ease;
  margin: 0 auto 64px;
  align-self: center;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(19, 173, 199, 0.5);
    background: rgba(19, 173, 199, 0.08);
    box-shadow: 0 10px 30px rgba(19, 173, 199, 0.18);
    color: #fff;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 48px;
  }
`;

export const SectionSubLabel = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.35);
  margin: 0 0 16px;
  align-self: flex-start;
`;
