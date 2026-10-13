'use client';

import React, { useEffect, useId, useRef, useState } from "react";
import { FaGooglePlay } from "react-icons/fa";

import { Project } from "../../../types";
import { SafeImage } from "../../SafeImage";
import { ProjectLinks } from "./ProjectLinks";
import {
  Badge,
  CardContent,
  Description,
  Heading,
  ImageWrapper,
  ProjectCardContainer,
  ReadMore,
  Tag,
  TagList,
} from "../element";

const CLAMP_LINES = 3;

export const ProjectCard = ({ project }: { project: Project }) => {
  const [expanded, setExpanded] = useState(false);
  const [clamped, setClamped] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const descriptionId = useId();

  // Only offer "Read more" when the description is actually cut off.
  useEffect(() => {
    const el = descriptionRef.current;
    if (!el) return;
    const check = () => setClamped(el.scrollHeight > el.clientHeight + 1);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [project.description]);

  return (
    <ProjectCardContainer>
      <ImageWrapper>
        {project.badge && (
          <Badge>
            <FaGooglePlay aria-hidden="true" />
            {project.badge}
          </Badge>
        )}
        <SafeImage
          src={project.image}
          alt={`${project.title} app screenshot`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
        />
      </ImageWrapper>

      <CardContent>
        <Heading>{project.title}</Heading>

        <Description
          ref={descriptionRef}
          id={descriptionId}
          $expanded={expanded}
          $clamp={CLAMP_LINES}
        >
          {project.description}
        </Description>
        {(clamped || expanded) && (
          <ReadMore
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={descriptionId}
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
      </CardContent>
    </ProjectCardContainer>
  );
};
