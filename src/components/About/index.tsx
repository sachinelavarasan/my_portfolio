import { AboutContainer } from "./elements";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import ExperienceTimeline from "./work-experience";
export const About = () => {
  return (
    <Section id="about">
      <AboutContainer>
        <SectionDivider />
        <SectionTitle main>About Me</SectionTitle>
        <div className="entire-div">
          <div className="subhead">
            Senior Full Stack Developer with 5+ years of experience building scalable web applications using modern frontend and backend technologies. Focused on performance, clean architecture, and delivering reliable production-ready solutions.
          </div>
          <div className="grid-container">
            <div className="d-flex align-items-center justify-content-center">
              <span className="heading">Work Experience</span>
            </div>
            <ExperienceTimeline/>
          </div>
        </div>
      </AboutContainer>
    </Section>
  );
};
