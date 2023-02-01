import React from "react";

import { SkillImg, SkillCardContainer } from "../elements";

export const SkillCard = ({ className, url, description }) => {
  return (
    <SkillCardContainer className={className}>
      <SkillImg src={url} alt="myicon" className="image" />
      <div className="block mt-2">
        <p className="description">{description}</p>
      </div>
    </SkillCardContainer>
  );
};
