import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiDevdotto } from "react-icons/si";

import {
  Copyright,
  FooterRow,
  FooterWrapper,
  Slogan,
  SocialContainer,
  SocialIcon,
} from "./FooterStyles";

const SOCIALS = [
  { href: "https://github.com/sachinelavarasan", label: "GitHub", Icon: AiFillGithub },
  { href: "https://www.linkedin.com/in/elavarasan-murugesan", label: "LinkedIn", Icon: AiFillLinkedin },
  { href: "https://dev.to/sachinelavarasan", label: "dev.to", Icon: SiDevdotto },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterRow>
        <Slogan>Building secure, scalable APIs and SaaS platforms</Slogan>

        <SocialContainer>
          {SOCIALS.map(({ href, label, Icon }) => (
            <SocialIcon
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in a new tab)`}
              title={label}
            >
              <Icon size="2.2rem" aria-hidden="true" />
            </SocialIcon>
          ))}
        </SocialContainer>
      </FooterRow>

      <Copyright>© {year} Elavarasan Murugesan. All rights reserved.</Copyright>
    </FooterWrapper>
  );
};
