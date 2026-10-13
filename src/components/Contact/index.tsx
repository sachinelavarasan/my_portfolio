import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import {
  OutlineButton,
  PrimaryButton,
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  ContactButtons,
  ContactTagline,
  ContactWrapper,
} from "./elements";

export const Contact = () => {
  return (
    <Section id="contact">
      <SectionDivider />
      <SectionTitle $main>Let&apos;s Work Together</SectionTitle>

      <ContactWrapper>
        <ContactTagline>
          Happy to connect with fellow developers and talk about backend
          architecture, NestJS, and building SaaS products. Feel free to reach
          out through any of the platforms below.
        </ContactTagline>

        <ContactButtons>

          <PrimaryButton
            id="contact-email"
            href="mailto:sachinelavarasan321@gmail.com"
          >
            <AiOutlineMail size="1.25rem" aria-hidden="true" />
            Email Me
          </PrimaryButton>

          <OutlineButton
            id="contact-linkedin"
            href="https://www.linkedin.com/in/elavarasan-murugesan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size="1.25rem" aria-hidden="true" />
            LinkedIn
          </OutlineButton>

          <OutlineButton
            id="contact-github"
            href="https://github.com/sachinelavarasan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size="1.25rem" aria-hidden="true" />
            GitHub
          </OutlineButton>
        </ContactButtons>
      </ContactWrapper>
    </Section>
  );
};
