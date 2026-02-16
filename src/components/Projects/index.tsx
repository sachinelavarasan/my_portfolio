import { useMemo } from "react";
import { projects } from "../../constants/constants";
import { ProjectCard } from "./components/ProjectCard";
import { GridContainer } from "./element";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

export const Projects = () => {
  const projectsMemoized = useMemo(() => {
    if (projects.length % 2 == 1) {
      return [
        ...projects,
        {
          title: "Upcoming",
          type: "empty",
          id: 999,
          description: "",
          image: "",
          tags: [],
          source: "",
        },
      ];
    }
    return projects;
  }, []);

  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projectsMemoized.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            url={item.image}
            description={item.description}
            tech={item.tags}
            source={item.source}
            type={item.type}
          />
        ))}
      </GridContainer>
    </Section>
  );
};
