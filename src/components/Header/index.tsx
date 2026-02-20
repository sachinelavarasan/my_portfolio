import Link from "next/link";
import React from "react";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  NavLink,
} from "./HeaderStyles";

export const Header = () => {
  return (
    <Container as="nav">
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
          <DiCssdeck size="2.5rem" />
          Elavarasan.dev
        </Link>
      </Div1>

      <Div2 as="ul" style={{ listStyle: "none", margin: 0, padding: 0 }}>

        <li>
          <NavLink href="#about">
            About
          </NavLink>
        </li>

        <li>
          <NavLink href="#tech">
            Tech Stack
          </NavLink>
        </li>

        <li>
          <NavLink href="#achievements">
            Achievements
          </NavLink>
        </li>

        <li>
          <NavLink href="#certifications">
            Certifications
          </NavLink>
        </li>

        <li>
          <NavLink href="#projects">
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink href="#github">
            GitHub
          </NavLink>
        </li>

        <li>
          <NavLink href="#contact">
            Contact
          </NavLink>
        </li>

      </Div2>

    </Container>
  );
};