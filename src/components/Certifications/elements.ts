'use client';

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

export const CertificationsGrid = styled.div<{ theme: Theme }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  padding-bottom: 64px;

  @media ${(p) => p.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  @media ${(p) => p.theme.breakpoints.sm} {
    gap: 12px;
    padding-bottom: 40px;
  }
`;

export const CertificationCard = styled.a<{ theme: Theme; $delay?: number }>`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
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
    animation: ${shimmerAnim} 3s linear infinite;
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
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`;

export const IconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(19, 173, 199, 0.18) 0%,
    rgba(148, 93, 214, 0.18) 100%
  );
  border: 1px solid rgba(148, 93, 214, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #13adc7;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    font-size: 18px;
  }
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.35;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const IssuerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 4px;

  span {
    background: linear-gradient(90deg, #13adc7, #945dd6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.5);
  margin: 8px 0 0 0;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
