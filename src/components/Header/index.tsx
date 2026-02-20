"use client";

import Link from "next/link";
import React, { useState } from "react";
import { DiCssdeck } from "react-icons/di";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  Container,
  Div1,
  Div2,
  NavLink,
  MobileIcon,
} from "./elements";

export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>

      <Div1>
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "white",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "18px",
          }}
        >
          <DiCssdeck size="2rem" />
          Elavarasan.dev
        </Link>
      </Div1>

      <MobileIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileIcon>

      <Div2 $open={isOpen}>

        <li><NavLink href="#about">About</NavLink></li>
        <li><NavLink href="#tech">Tech Stack</NavLink></li>
        <li><NavLink href="#achievements">Achievements</NavLink></li>
        <li><NavLink href="#certifications">Certifications</NavLink></li>
        <li><NavLink href="#projects">Projects</NavLink></li>
        <li><NavLink href="#github">GitHub</NavLink></li>
        <li><NavLink href="#contact">Contact</NavLink></li>

      </Div2>

    </Container>
  );
};