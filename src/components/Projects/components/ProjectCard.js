import React from "react";

import {
  ExternalLinks,
  Img,
  ProjectCardContainer,
  Tag,
  TagList,
  TitleContent,
} from "../element";

export const ProjectCard = ({
  title,
  className,
  url,
  source,
  description,
  tech,
  type,
}) => {
  return (
    <ProjectCardContainer className={className}>
      {type === "project" ? (
        <div className="d-flex align-items-center container-project">
          <Img src={url} alt={title} />
          <div className="bottom ms-4">
            <div className="heading pb-2">{title}</div>
            <div className="description">{description}</div>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tech.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <div className="mt-2 d-flex align-items-center justify-content-center">
              <ExternalLinks href={source} target="_blank" className="mt-2">
                Source
              </ExternalLinks>
            </div>
          </div>
        </div>
      ) : (
        <div className="heading pb-2 mt-3">{title}....</div>
      )}
    </ProjectCardContainer>
  );
};
