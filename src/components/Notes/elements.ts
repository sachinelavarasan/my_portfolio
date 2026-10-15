'use client';

import Link from "next/link";
import styled from "styled-components";
import { alpha } from "../../styles/colors";
import { cardStyle } from "../../styles/GlobalComponents";

/* ---------- Shell ---------- */

export const TopBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => alpha(theme.colors.background1, 90)};
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TopInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 860px;
  height: 60px;
  margin: 0 auto;
  padding: 0 24px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 0 16px;
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 8px;

  &:hover {
    color: ${({ theme }) => theme.colors.accentText};
  }
`;

export const Main = styled.main<{ $wide?: boolean }>`
  max-width: ${({ $wide }) => ($wide ? "860px" : "760px")};
  margin: 0 auto;
  padding: 48px 24px 80px;

  @media ${({ theme }) => theme.breakpoints.sm} {
    padding: 32px 16px 56px;
  }
`;

/* ---------- Page header ---------- */

export const Divider = styled.div`
  width: 48px;
  height: 4px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.accent1};
`;

export const PageTitle = styled.h1`
  margin: 16px 0 8px;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.primary1};

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 30px;
  }
`;

export const Intro = styled.p`
  margin: 0 0 32px;
  font-size: 17px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

/* ---------- Hub cards ---------- */

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media ${({ theme }) => theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const NoteCard = styled(Link)`
  ${cardStyle};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 22px;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
  &:hover .arrow {
    transform: translateX(4px);
  }
`;

export const NoteTitle = styled.h2`
  margin: 0;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primary1};
`;

export const NoteDescription = styled.p`
  margin: 6px 0 0;
  font-size: 15px;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.text};
`;

export const NoteFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 16px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accentText};

  .arrow {
    transition: transform 0.2s ease;
  }
`;

/* ---------- Note article ---------- */

export const Meta = styled.p`
  margin: 0 0 24px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Callout = styled.aside`
  margin: 0 0 32px;
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => alpha(theme.colors.accent1, 30)};
  background: ${({ theme }) => alpha(theme.colors.accent1, 8)};
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.primary1};

  a {
    color: ${({ theme }) => theme.colors.accentText};
    text-decoration: underline;
  }
`;

export const Toc = styled.nav`
  ${cardStyle};
  margin: 0 0 40px;
  padding: 18px 22px;

  &:hover {
    transform: none;
    box-shadow: none;
  }

  h2 {
    margin: 0 0 10px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme.colors.accentText};
  }
  ol {
    margin: 0;
    padding-left: 20px;
  }
  li {
    list-style: decimal;
    margin: 4px 0;
    color: ${({ theme }) => theme.colors.text};
  }
  a {
    color: ${({ theme }) => theme.colors.primary1};
  }
  a:hover {
    color: ${({ theme }) => theme.colors.accentText};
  }
`;

/* Long-form text: headings, lists, tables */
export const Prose = styled.article`
  font-size: 16px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};

  section {
    scroll-margin-top: 76px;
  }
  section + section {
    margin-top: 48px;
  }

  h2 {
    margin: 0 0 16px;
    padding-bottom: 8px;
    font-size: 26px;
    font-weight: 700;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.primary1};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  h3 {
    margin: 28px 0 10px;
    font-size: 19px;
    font-weight: 700;
    line-height: 1.3;
    color: ${({ theme }) => theme.colors.primary1};
  }
  p {
    margin: 0 0 14px;
  }
  ul, ol {
    margin: 0 0 16px;
    padding-left: 22px;
  }
  li {
    list-style: disc;
    margin: 5px 0;
  }
  ol > li {
    list-style: decimal;
  }
  li::marker {
    color: ${({ theme }) => theme.colors.accentText};
  }
  strong {
    color: ${({ theme }) => theme.colors.primary1};
    font-weight: 600;
  }
  code {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.88em;
    padding: 1px 6px;
    border-radius: 6px;
    background: ${({ theme }) => alpha(theme.colors.accent1, 12)};
    color: ${({ theme }) => theme.colors.primary1};
  }
  a {
    color: ${({ theme }) => theme.colors.accentText};
    text-decoration: underline;
  }

  /* tables scroll sideways on small screens instead of squashing */
  .table-wrap {
    overflow-x: auto;
    margin: 0 0 20px;
    border: 1px solid ${({ theme }) => theme.colors.cardBorder};
    border-radius: 12px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 15px;
  }
  /* 3+ column tables keep a readable width and scroll on phones; 2-column ones just wrap */
  table.wide {
    min-width: 520px;
  }
  th, td {
    padding: 10px 14px;
    text-align: left;
    vertical-align: top;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
  tr:last-child td {
    border-bottom: none;
  }
  th {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary1};
    background: ${({ theme }) => theme.colors.cardBg};
  }
  td:first-child {
    color: ${({ theme }) => theme.colors.primary1};
    font-weight: 500;
  }
`;
