import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

export const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", color: "white" }}
      >
        <DiCssdeck size="3rem" />
        <span>Portfolio</span>
      </Link>
    </Div1>
    <Div2>
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
        <NavLink href="#projects">
          Projects
        </NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/sachinelavarasan" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/elavarasan-murugesan"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.facebook.com/elavarasan.elavarasan.750546"
        target="_blank"
      >
        <AiFillFacebook size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);
