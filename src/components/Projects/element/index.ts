import styled from "styled-components";
import { Theme } from "../../../types";

export const ProjectContainer = styled.div`
  .heading {
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
  }
  .bottom {
    padding: 10px 10px;
  }
`;

export const GridContainer = styled.div<{ theme: Theme }>`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 3rem;

  padding: 3rem;

  width: 100%;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

export const ProjectCardContainer = styled.div<{ theme: Theme }>`
  position: relative;
  border-radius: 16px;

  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.background2},
    ${({ theme }) => theme.colors.background1}
  );

  border: 1px solid rgba(255, 255, 255, 0.08);

  overflow: hidden;

  transition: all 0.35s ease;

  transform-style: preserve-3d;

  &:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow:
      0 10px 30px rgba(0, 0, 0, 0.5),
      0 0 20px ${({ theme }) => theme.colors.button}33;
  }


  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1px;
    background: linear-gradient(
      120deg,
      transparent,
      ${({ theme }) => theme.colors.button},
      transparent
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    pointer-events: none;
  }
  .heading {
    display: grid;
    place-items: center;
    height: 100%;
    font-size: 2.5rem;
    color: #5274b7;
    font-weight: bold;

    animation: pulse 2s infinite;

    @keyframes pulse {
      0% { opacity: 0.4; }
      50% { opacity: 1; }
      100% { opacity: 0.4; }
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: center;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  transition: transform 0.5s ease;

  ${ProjectCardContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const Heading = styled.h3<{ theme: Theme }>`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 8px;

  color: ${({ theme }) => theme.colors.accent1};
`;

export const Description = styled.p<{ theme: Theme }>`
  font-size: 1.4rem;
  line-height: 1.6;

  color: ${({ theme }) => theme.colors.text};

  margin-bottom: 15px;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TitleContent = styled.div<{ theme: Theme }>`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 8px;

  color: ${({ theme }) => theme.colors.primary1};
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-bottom: 15px;
`;

export const Tag = styled.span<{ theme: Theme }>`
  font-size: 1.1rem;
  padding: 6px 12px;

  border-radius: 999px;

  background: ${({ theme }) => theme.colors.background1};

  border: 1px solid ${({ theme }) => theme.colors.button}55;

  color: ${({ theme }) => theme.colors.primary1};

  transition: 0.25s;

  &:hover {
    background: ${({ theme }) => theme.colors.button};
    color: white;
  }
`;

export const ExternalLinks = styled.a<{ theme: Theme }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  font-size: 1.3rem;
  font-weight: 600;

  padding: 8px 16px;

  border-radius: 8px;

  background: ${({ theme }) => theme.colors.button};

  color: white;

  text-decoration: none;

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.accent1};
    color: black;
  }
`;