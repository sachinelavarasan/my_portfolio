import React from "react";

import { SkillCardContainer, SkillName } from "../elements";
import { SafeImage } from "../../SafeImage";

interface SkillCardProps {
  url: string;
  name: string;
  tone?: "dark" | "light";
}

export const SkillCard = ({ url, name, tone }: SkillCardProps) => {
  return (
    <SkillCardContainer>
      <SafeImage
        src={url}
        alt={`${name} logo`}
        width={28}
        height={28}
        className={tone ? `tone-${tone}` : undefined}
      />
      <SkillName>{name}</SkillName>
    </SkillCardContainer>
  );
};
