'use client';

import styled from "styled-components";
import { Theme } from "../../types";


export const ContactWrapper = styled.div<{ theme: Theme }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


export const ContactTagline = styled.p<{ theme: Theme }>`
  font-size: 19px;
  font-weight: 400;
  line-height: 1.7;
  color: ${(p) => p.theme.colors.text};
  max-width: 640px;
  margin: 0 0 32px;

  @media ${(p) => p.theme.breakpoints.sm} {
    font-size: 16px;
    margin-bottom: 24px;
  }
`;


export const ContactButtons = styled.div<{ theme: Theme }>`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media ${(p) => p.theme.breakpoints.sm} {
    flex-direction: column;
    width: 100%;

    a {
      width: 100%;
    }
  }
`;
