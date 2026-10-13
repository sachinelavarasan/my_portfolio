import { CategoryTitle, Group, SkillGrid, TechStackContainer } from "./elements";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { skillGroups } from "../../constants/constants";
import { SkillCard } from "./components/SkillCard";

export const TechStack = () => {
  return (
    <Section id="tech">
      <SectionDivider />
      <SectionTitle $main>Tech Stack</SectionTitle>
      <TechStackContainer>
        {skillGroups.map((group) => (
          <Group key={group.category}>
            <CategoryTitle>{group.category}</CategoryTitle>
            <SkillGrid>
              {group.skills.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} url={skill.image} invert={skill.invert} />
              ))}
            </SkillGrid>
          </Group>
        ))}
      </TechStackContainer>
    </Section>
  );
};
