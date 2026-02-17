import { AboutContainer } from "./elements";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import ExperienceTimeline from "./WorkExperience";
export const About = () => {
  return (
    <Section id="about">
      <AboutContainer>
        <SectionDivider />
        <SectionTitle main>About Me</SectionTitle>
        <div className="entire-div">
          <div className="subhead">
            Full Stack Developer with strong experience in building scalable, high-performance web applications using Node.js, NestJS, and TypeScript. Proven
            ability to design modular, service-oriented backend architectures for enterprise SaaS platforms. Hands-on expertise in PostgreSQL, MySQL, MongoDB,
            and ORM-based data modelling, with experience in real-time and event-driven systems using Socket.IO. Skilled in performance optimisation, API
            scalability, CI/CD automation, and production-ready deployments. Collaborative team player with a strong ownership mindset and continuous learning
            approach.
          </div>
          <div className="grid-container">
            <div className="d-flex align-items-center justify-content-center">
              <span className="heading">Work Experience</span>
            </div>
            <ExperienceTimeline/>
            {/* <div className="experience">
              <div className="div1">
                <div>
                  <p className="role">Software Engineer </p>
                </div>
                <div className="time">
                  <p>full time</p>
                </div>
              </div>
              <div className="div2">
                <p className="location">Bititude Technologies , kerala</p>
                <p className="year">Mar 2021 - Current</p>
              </div>
            </div>
            <div className="experience">
              <div className="div1">
                <div>
                  <p className="role">Junior php Developer </p>
                </div>
                <div className="time">
                  <p>full time</p>
                </div>
              </div>
              <div className="div2">
                <p className="location">Gnanaguru Technologies , coimbatore</p>
                <p className="year">Dec 2020 - Feb 2021</p>
              </div>
            </div> */}
          </div>
        </div>
      </AboutContainer>
    </Section>
  );
};
