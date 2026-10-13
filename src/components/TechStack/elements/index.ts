'use client';

import styled from "styled-components";
import { Theme } from "../../../types";
import { cardStyle } from "../../../styles/GlobalComponents";

export const TechStackContainer = styled.div<{ theme: Theme }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 40px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryTitle = styled.h3<{ theme: Theme }>`
  margin: 0 0 14px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.colors.accent1};
`;

export const SkillGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  gap: 10px;
  margin: 0;
  padding: 0;

  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillCardContainer = styled.li<{ theme: Theme }>`
  ${cardStyle};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 12px;
  min-width: 0;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
    flex-shrink: 0;
  }

  img.invert {
    filter: invert(1) brightness(0.92);
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

export const SkillName = styled.span<{ theme: Theme }>`
  font-size: 15px;
  font-weight: 500;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.primary1};
`;
