import { projects } from "../../constants/constants";
import { FeaturedProject } from "./components/FeaturedProject";
import { ProjectCard } from "./components/ProjectCard";
import { GridContainer } from "./element";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

const featured = projects.find((p) => p.featured);
const others = projects.filter((p) => p !== featured);

export const Projects = () => {
  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle $main>Projects</SectionTitle>

      {featured && <FeaturedProject project={featured} />}

      <GridContainer>
        {others.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </GridContainer>
    </Section>
  );
};
