'use client';

import styled from "styled-components";
import { Theme } from "../../../types";

export const AboutText = styled.p<{ theme: Theme }>`
  max-width: 760px;
  margin: 0;
  font-size: 19px;
  font-weight: 400;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.text};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
  }
`;
