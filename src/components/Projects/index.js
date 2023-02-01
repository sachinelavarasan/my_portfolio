import React from "react";
import { projects } from "../../constants/constants";
import { ProjectCard } from "./components/ProjectCard";
import { GridContainer, ProjectContainer } from "./element";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

export const Projects = () => {
  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            url={item.image}
            description={item.description}
            tech={item.tags}
            source={item.source}
          />
        ))}
      </GridContainer>
    </Section>
  );
};
