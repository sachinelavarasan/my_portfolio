import { Img, TechStackContainer } from "./elements";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { skills } from "../../constants/constants";
import { SkillCard } from "./components/SkillCard";

export const TechStack = () => {
  return (
    <Section id="tech">
      <TechStackContainer>
        <SectionDivider />
        <SectionTitle $main>Tech Stack</SectionTitle>
        <div className="entire-div">
          <p className="subhead">
            {" "}
            Technologies I've been working with recently
          </p>
          <div className="skills">
            <div className="grid-container mt-5">
              {skills.map((item) => (
                <SkillCard
                  url={item.image}
                  key={item.id}
                  description={item?.description || "description"}
                />
              ))}
            </div>
          </div>
        </div>
      </TechStackContainer>
    </Section>
  );
};
