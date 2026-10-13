"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import {
  Actions,
  Container,
  Inner,
  Logo,
  LogoMark,
  LogoSuffix,
  NavList,
  NavLink,
  MenuButton,
} from "./elements";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "github", label: "GitHub" },
  { id: "tech", label: "Tech Stack" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

// A section becomes "current" once its top scrolls past this line (just below the sticky header).
// A fixed distance works on every screen height, unlike a percentage of the viewport.
const ACTIVE_LINE_PX = 160;

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  // Set when a nav link is clicked: keep that link highlighted until the visitor scrolls themselves.
  const clickedIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Show the header divider once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for the section you're reading: the last one whose top has
  // passed ACTIVE_LINE_PX. Short sections like About work on any screen size.
  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => !!el);

    let frame = 0;
    const update = () => {
      frame = 0;
      if (clickedIdRef.current) return;
      let current: string | null = null;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= ACTIVE_LINE_PX) current = section.id;
      }
      // At the very bottom the last section (Contact) may be too short to reach the line.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom && sections.length) current = sections[sections.length - 1].id;
      setActiveId(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    // Any scrolling the visitor does themselves ends the "clicked link" hold.
    const releaseClick = () => {
      if (!clickedIdRef.current) return;
      clickedIdRef.current = null;
      onScroll();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(e.key)) releaseClick();
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("wheel", releaseClick, { passive: true });
    window.addEventListener("touchmove", releaseClick, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("wheel", releaseClick);
      window.removeEventListener("touchmove", releaseClick);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const onNavClick = (id: string) => {
    clickedIdRef.current = id;
    setActiveId(id);
    setIsOpen(false);
  };

  return (
    <Container $scrolled={scrolled || isOpen}>
      <Inner aria-label="Primary">

        <Logo
          href="#main-content"
          aria-label="Elavarasan Murugesan, back to top"
          onClick={() => { clickedIdRef.current = null; }}
        >
          <LogoMark className="mark" aria-hidden="true">EM</LogoMark>
          <span aria-hidden="true">
            Elavarasan<LogoSuffix>.dev</LogoSuffix>
          </span>
        </Logo>

        <NavList id="primary-navigation" $open={isOpen}>
          {NAV_ITEMS.map((item) => {
            const active = activeId === item.id;
            return (
              <li key={item.id}>
                <NavLink
                  href={`#${item.id}`}
                  $active={active}
                  aria-current={active ? "location" : undefined}
                  onClick={() => onNavClick(item.id)}
                >
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </NavList>

        <Actions>
          <ThemeToggle />
          <MenuButton
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </MenuButton>
        </Actions>

      </Inner>
    </Container>
  );
};
