import React from "react";

import { SkillCardContainer, SkillName } from "../elements";
import { SafeImage } from "../../SafeImage";

interface SkillCardProps {
  url: string;
  name: string;
  invert?: boolean;
}

export const SkillCard = ({ url, name, invert }: SkillCardProps) => {
  return (
    <SkillCardContainer>
      <SafeImage
        src={url}
        alt={`${name} logo`}
        width={28}
        height={28}
        className={invert ? "invert" : undefined}
      />
      <SkillName>{name}</SkillName>
    </SkillCardContainer>
  );
};
