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

  const isOdd = projects.length % 2 !== 0;
  if (!isOdd) return projects;

    return [
      ...projects,
      {
        title: "Upcoming",
        type: "",
        id: `upcoming-${projects.length}`,
        description: "",
        image: "",
        tags: [],
        source: "",
      },
    ];
}, [projects]);

  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle $main>Projects</SectionTitle>
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
