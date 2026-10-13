'use client';

import styled from "styled-components";
import { Theme } from "../../types";
import { cardStyle } from "../../styles/GlobalComponents";

export const CertificationsBlock = styled.section`
  margin-top: 40px;
`;

export const CertificationsHeading = styled.h3<{ theme: Theme }>`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${(p) => p.theme.colors.accent1};
  margin: 0 0 14px;
`;

export const CertificationsGrid = styled.div<{ theme: Theme }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  width: 100%;

  @media ${(p) => p.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

export const CertificationCard = styled.a<{ theme: Theme }>`
  ${cardStyle};
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  border-radius: 12px;
  color: inherit;

  &:hover {
    color: inherit;
  }
`;

export const IconWrapper = styled.div<{ theme: Theme }>`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: ${(p) => p.theme.colors.accent1}1a;
  border: 1px solid ${(p) => p.theme.colors.accent1}33;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.accent1};
  flex-shrink: 0;
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

export const Title = styled.span<{ theme: Theme }>`
  font-size: 15px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.primary1};
  line-height: 1.35;
`;

export const IssuerRow = styled.span<{ theme: Theme }>`
  font-size: 13px;
  color: ${(p) => p.theme.colors.textSubtle};
`;
