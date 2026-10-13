import { AboutText } from "./elements";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

export const About = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle $main>About Me</SectionTitle>
      <AboutText>
        Senior Full Stack Developer with 5+ years of experience building scalable web applications using modern frontend and backend technologies. Focused on performance, clean architecture, and delivering reliable production-ready solutions.
      </AboutText>
    </Section>
  );
};
