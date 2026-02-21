'use client';

import styled, { keyframes } from "styled-components";
import { Theme } from "../../types";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(19, 173, 199, 0.35); }
  50%       { box-shadow: 0 0 0 14px rgba(19, 173, 199, 0); }
`;


export const ContactWrapper = styled.div<{ theme: Theme }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 16px 24px 80px;
  animation: ${fadeInUp} 0.7s ease both;

  @media ${(p) => p.theme.breakpoints.sm} {
    padding: 8px 0 56px;
  }
`;


export const ContactTagline = styled.p<{ theme: Theme }>`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.55);
  max-width: 560px;
  margin: 12px 0 48px;

  @media ${(p) => p.theme.breakpoints.md} {
    font-size: 16px;
    margin-bottom: 40px;
  }

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 15px;
    margin-bottom: 32px;
  }
`;


export const ContactButtons = styled.div<{ theme: Theme }>`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;

  @media ${(p) => p.theme.breakpoints.sm} {
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }
`;

export const ContactButtonPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${pulse} 2.8s ease-in-out infinite;

  &:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 12px 36px rgba(19, 173, 199, 0.4);
    animation: none;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: 15px 24px;
  }
`;

export const ContactButtonSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 28px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, border-color 0.3s ease,
    background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(148, 93, 214, 0.55);
    background: rgba(148, 93, 214, 0.1);
    box-shadow: 0 10px 30px rgba(148, 93, 214, 0.18);
    color: #fff;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
    padding: 15px 20px;
  }
`;

export const ContactDividerLine = styled.div`
  width: 100%;
  max-width: 480px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.12) 30%,
    rgba(255, 255, 255, 0.12) 70%,
    transparent 100%
  );
  margin: 0 auto 48px;

  @media (max-width: 480px) {
    margin-bottom: 32px;
  }
`;
