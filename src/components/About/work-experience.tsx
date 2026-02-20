import { FaBriefcase } from "react-icons/fa";

import { Section, Timeline, TimelineItem, Card, Role, Company, List, Location, Content, Center, Icon } from './elements/work-timeline';
import { experiences } from '../../constants/constants';


export default function ExperienceTimeline(){
  return (
    <Section id="experience">

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
                <FaBriefcase />
              </Icon>
            </Center>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
};