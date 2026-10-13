"use client";

import React, { useEffect, useState } from "react";
import { DiCssdeck } from "react-icons/di";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  Container,
  Logo,
  NavList,
  NavLink,
  MenuButton,
} from "./elements";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#github", label: "GitHub" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <Container>

      <Logo href="#main-content" aria-label="Elavarasan.dev, back to top">
        <DiCssdeck size="2rem" aria-hidden="true" />
        Elavarasan.dev
      </Logo>

      <MenuButton
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
      </MenuButton>

      <NavList id="primary-navigation" $open={isOpen}>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <NavLink href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </NavList>

    </Container>
  );
};
