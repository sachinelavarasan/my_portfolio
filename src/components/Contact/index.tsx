import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  ContactButtons,
  ContactButtonPrimary,
  ContactButtonSecondary,
  ContactDividerLine,
  ContactTagline,
  ContactWrapper,
} from "./elements";

export const Contact = () => {
  return (
    <Section id="contact">
      <SectionDivider />
      <SectionTitle main>Let&apos;s Work Together</SectionTitle>

      <ContactWrapper>
        <ContactTagline>
          I&apos;m open to Full Stack Developer roles and freelance
          opportunities. Feel free to reach out through any of the platforms
          below.
        </ContactTagline>

        <ContactDividerLine />

        <ContactButtons>

          <ContactButtonPrimary
            id="contact-email"
            href="mailto:sachinelavarasan321@gmail.com"
          >
            <AiOutlineMail size="1.25rem" />
            Email Me
          </ContactButtonPrimary>

          <ContactButtonSecondary
            id="contact-linkedin"
            href="https://www.linkedin.com/in/elavarasan-murugesan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size="1.25rem" />
            LinkedIn
          </ContactButtonSecondary>

          <ContactButtonSecondary
            id="contact-github"
            href="https://github.com/sachinelavarasan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size="1.25rem" />
            GitHub
          </ContactButtonSecondary>
        </ContactButtons>
      </ContactWrapper>
    </Section>
  );
};
