'use client';

import styled, { css } from "styled-components";
import { Theme } from "../../../types";
import { cardStyle, OutlineButton, PrimaryButton } from "../../../styles/GlobalComponents";

/* ---------- Featured project ---------- */

export const FeaturedCard = styled.article<{ theme: Theme }>`
  ${cardStyle};
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  overflow: hidden;
  margin-bottom: 32px;

  &:hover {
    transform: none;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    grid-template-columns: 1fr;
  }
`;

export const FeaturedImage = styled.div<{ theme: Theme }>`
  position: relative;
  min-height: 360px;
  background: ${({ theme }) => theme.colors.background1};

  img {
    object-fit: cover;
  }

  @media ${({ theme }) => theme.breakpoints.lg} {
    min-height: 0;
    aspect-ratio: 16 / 9;
  }
`;

export const FeaturedContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 20px;
  }
`;

export const FeaturedLabel = styled.span<{ theme: Theme }>`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.accent1};
  margin-bottom: 8px;
`;

export const FeaturedHeading = styled.h3<{ theme: Theme }>`
  font-size: 26px;
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.primary1};

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 22px;
  }
`;

/* ---------- Grid of smaller projects ---------- */

export const GridContainer = styled.div<{ theme: Theme }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const ProjectCardContainer = styled.article<{ theme: Theme }>`
  ${cardStyle};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ImageWrapper = styled.div<{ theme: Theme }>`
  position: relative;
  aspect-ratio: 16 / 10;
  background: ${({ theme }) => theme.colors.background1};

  img {
    object-fit: cover;
  }
`;

export const Badge = styled.span<{ theme: Theme }>`
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  font-size: 13px;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 999px;

  background: ${({ theme }) => theme.colors.accent1};
  color: ${({ theme }) => theme.colors.onAccent};
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);

  @media ${({ theme }) => theme.breakpoints.sm} {
    top: 10px;
    left: 10px;
    font-size: 12px;
    padding: 5px 10px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

export const Heading = styled.h3<{ theme: Theme }>`
  font-size: 19px;
  font-weight: 600;
  line-height: 1.3;
  margin: 0 0 8px;
  color: ${({ theme }) => theme.colors.primary1};
`;

/* ---------- Shared pieces ---------- */

export const Description = styled.p<{ theme: Theme; $expanded?: boolean; $clamp?: number }>`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 12px;

  ${({ $expanded, $clamp }) =>
    !$expanded &&
    $clamp &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${$clamp};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`;

export const ReadMore = styled.button<{ theme: Theme }>`
  align-self: flex-start;
  margin: -4px 0 14px;
  padding: 0;
  border: none;
  background: none;

  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent1};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0 0 18px;
  padding: 0;
`;

export const Tag = styled.li<{ theme: Theme }>`
  font-size: 12.5px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent1}14;
  border: 1px solid ${({ theme }) => theme.colors.accent1}33;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: auto;
`;

const smallButton = css`
  padding: 8px 14px;
  font-size: 13.5px;
`;

export const SmallPrimaryButton = styled(PrimaryButton)`
  ${smallButton};
`;

export const SmallOutlineButton = styled(OutlineButton)`
  ${smallButton};
`;
