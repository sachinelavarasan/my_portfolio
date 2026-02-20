import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiDevdotto } from "react-icons/si";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>

      <CompanyContainer>
        <Slogan>Design Your Future</Slogan>
        <p style={{ marginTop: "8px", opacity: 0.7 }}>
          Full Stack Developer specializing in modern web applications
        </p>
      </CompanyContainer>

      <SocialIconsContainer>
        <SocialContainer>

          <SocialIcons
            href="https://github.com/sachinelavarasan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <AiFillGithub size="2.5rem" />
          </SocialIcons>

          <SocialIcons
            href="https://www.linkedin.com/in/elavarasan-murugesan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin size="2.5rem" />
          </SocialIcons>

          <SocialIcons
            href="https://dev.to/sachinelavarasan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dev.to"
          >
            <SiDevdotto size="2.5rem" />
          </SocialIcons>

        </SocialContainer>
      </SocialIconsContainer>

      <div style={{ marginTop: "24px", opacity: 0.6, fontSize: "14px" }}>
        © {year} Elavarasan M. All rights reserved.
      </div>

    </FooterWrapper>
  );
};