import { FaBriefcase } from "react-icons/fa";

import { Timeline, TimelineItem, Card, Role, Company, List, Location, Content, Center, Icon } from './elements';
import { experiences } from '../../constants/constants';
import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";


export const Experience = () => {
  return (
    <Section id="experience">
      <SectionDivider />
      <SectionTitle $main>Experience</SectionTitle>

      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem key={index} $isLeft={index % 2 === 0}>
            <Content $isLeft={index % 2 === 0}>
              <Card>
                <Role>{exp.title}</Role>
                <Company>
                  {exp.company} • {exp.period}
                </Company>
                <Location>{exp.location}</Location>

                <List>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </List>
              </Card>
            </Content>

            <Center>
              <Icon $isLatest={index === 0}>
                <FaBriefcase aria-hidden="true" />
              </Icon>
            </Center>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
};

export default Experience;
