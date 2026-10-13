'use client';

import React, { useState } from "react";
import { FaGooglePlay } from "react-icons/fa";

import { Project } from "../../../types";
import { SafeImage } from "../../SafeImage";
import { ProjectLinks } from "./ProjectLinks";
import {
  Badge,
  Description,
  FeaturedCard,
  FeaturedContent,
  FeaturedHeading,
  FeaturedImage,
  FeaturedLabel,
  ReadMore,
  Tag,
  TagList,
} from "../element";

export const FeaturedProject = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = !!project.summary && project.summary !== project.description;

  return (
    <FeaturedCard aria-labelledby="featured-project-title">
      <FeaturedImage>
        {project.badge && (
          <Badge>
            <FaGooglePlay aria-hidden="true" />
            {project.badge}
          </Badge>
        )}
        <SafeImage
          src={project.image}
          alt={`${project.title.split(" – ")[0]} app screenshot`}
          fill
          sizes="(max-width: 1024px) 100vw, 560px"
          priority
        />
      </FeaturedImage>

      <FeaturedContent>
        <FeaturedLabel>Featured project</FeaturedLabel>
        <FeaturedHeading id="featured-project-title">{project.title}</FeaturedHeading>

        <Description id="featured-project-description">
          {expanded || !project.summary ? project.description : project.summary}
        </Description>
        {hasMore && (
          <ReadMore
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls="featured-project-description"
          >
            {expanded ? "Show less" : "Read more"}
          </ReadMore>
        )}

        <TagList aria-label="Tech stack">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </TagList>

        <ProjectLinks project={project} />
      </FeaturedContent>
    </FeaturedCard>
  );
};
