'use client';

import styled from 'styled-components';

export const Container = styled.div`
max-width: 1280px;
width: 100%;
margin: auto;

main:focus {
  outline: none;
}
`;

export const SkipLink = styled.a`
  position: absolute;
  top: -100px;
  left: 16px;
  z-index: 200;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.accent1};
  color: ${({ theme }) => theme.colors.onAccent};

  &:focus {
    top: 12px;
    color: ${({ theme }) => theme.colors.onAccent};
  }
`;
