'use client';

import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
  padding: 48px 0 16px;

  .left {
    flex: 1;
    min-width: 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 24px;
    padding: 24px 0 0;
  }
`;

export const Greeting = styled.p`
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 17px;
  }
`;

export const Name = styled.h1`
  margin: 0;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.accentText};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 44px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 34px;
  }
`;

export const Tagline = styled.p`
  margin: 20px 0 0;
  max-width: 620px;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.45;
  color: ${(props) => props.theme.colors.text};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 17px;
    margin-top: 14px;
  }
`;

export const Photo = styled.div`
  flex-shrink: 0;

  img {
    /* the photo is a transparent PNG with its own accent ring */
    width: 260px;
    height: 260px;
    display: block;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    img {
      width: 210px;
      height: 210px;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    img {
      width: 160px;
      height: 160px;
    }
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 36px;
  flex-wrap: wrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    margin-top: 28px;

    a {
      width: 100%;
    }
  }
`;
