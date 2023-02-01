import { AboutContainer } from "./elements";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

export const About = () => {
  return (
    <Section id="about">
      <AboutContainer>
        <SectionDivider />
        <SectionTitle main>About Me</SectionTitle>
        <div className="entire-div">
          <div className="subhead">
            An enthusiastic Full stack Javascript developer with successful
            experience in NodeJS, MongoDB, Mysql, HTML & CSS, Javascript, PHP,
            and hands-on experience in React. Proficient with database programs
            including MySQL. Leverage technical, analytical and problem solving
            skills to create dynamic and highly scalable web applications with
            minimalized code
          </div>
          <div className="grid-container">
            <div className="d-flex align-items-center justify-content-center">
              <span className="heading">Work Experience</span>
            </div>
            <div className="experience">
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
            </div>
          </div>
        </div>
      </AboutContainer>
    </Section>
  );
};
