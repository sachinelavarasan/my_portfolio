'use client';

import { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

import { ThemeToggle } from "../Header/ThemeToggle";
import { BackLink, TopBar, TopInner } from "./elements";

// Slim top bar for the notes pages: back to the portfolio + theme toggle.
export const NotesShell = ({ children }: { children: ReactNode }) => (
  <>
    <TopBar>
      <TopInner>
        <BackLink href="/">
          <ArrowLeft size={18} aria-hidden="true" />
          Elavarasan.dev
        </BackLink>
        <ThemeToggle />
      </TopInner>
    </TopBar>
    {children}
  </>
);
