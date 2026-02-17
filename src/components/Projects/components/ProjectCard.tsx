import React from "react";

import {
  ExternalLinks,
  Img,
  ProjectCardContainer,
  Tag,
  TagList,
  TitleContent,
  CardContent,
  Heading,
  Description
} from "../element";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  className?: string;
  url: string;
  source: string;
  description: string;
  tech: string[];
  type: string;
}

export const ProjectCard = ({
  title,
  url,
  source,
  description,
  tech,
  type,
}: ProjectCardProps) => {
  return (
    <ProjectCardContainer>

      {type ? (
        <>
          {url && <Img src={url} alt={title} />}

          <CardContent>

            <Heading>{title}</Heading>

            <Description>{description}</Description>

            <TitleContent>Tech Stack</TitleContent>

            <TagList>
              {tech.map((t, i) => (
                <Tag key={i}>{t}</Tag>
              ))}
            </TagList>

            <ExternalLinks
              href={source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              Source Code
            </ExternalLinks>

          </CardContent>
        </>
      ) : (
        <div className="heading p-4">{title}....</div>
      )
      }
    </ProjectCardContainer>
  );
};
