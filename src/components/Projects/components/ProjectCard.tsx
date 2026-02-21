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
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  className?: string;
  url: string;      
  source: string; 
  live?: string;  
  description: string;
  tech: string[];
  type: string;
  demo?: string;
}

export const ProjectCard = ({
  title,
  url,
  source,
  live,
  description,
  tech,
  type,
  demo
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
              <FaGithub style={{ marginRight: "6px" }} />
              Source Code
            </ExternalLinks>

            {live && (
              <ExternalLinks
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "10px" }}
              >
                <FaExternalLinkAlt style={{ marginRight: "6px" }} />
                Live Demo
              </ExternalLinks>
            )}
            {demo && (
              <ExternalLinks
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "10px" }}
              >
                <FaExternalLinkAlt style={{ marginRight: "6px" }} />
                Demo Video
              </ExternalLinks>
            )}

          </CardContent>
        </>
      ) : (
        <div className="heading p-4">{title}....</div>
      )}
    </ProjectCardContainer>
  );
};