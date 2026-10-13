import React from "react";
import { FaGithub, FaGooglePlay, FaServer, FaExternalLinkAlt, FaPlayCircle } from "react-icons/fa";

import { Project } from "../../../types";
import { OutlineButton, PrimaryButton } from "../../../styles/GlobalComponents";
import { Row } from "../element";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

// Buttons for a project's links. The first available link gets the filled style.
export const ProjectLinks = ({ project }: { project: Project }) => {
  const links = [
    project.playStore && { href: project.playStore, label: "Google Play", Icon: FaGooglePlay },
    { href: project.source, label: project.apiSource ? "App Code" : "Source Code", Icon: FaGithub },
    project.apiSource && { href: project.apiSource, label: "API Code", Icon: FaServer },
    project.live && { href: project.live, label: "Live Demo", Icon: FaExternalLinkAlt },
    project.demo && { href: project.demo, label: "Demo Video", Icon: FaPlayCircle },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof FaGithub }[];

  return (
    <Row>
      {links.map(({ href, label, Icon }, i) => {
        const Button = i === 0 && project.playStore ? PrimaryButton : OutlineButton;
        return (
          <Button
            key={label}
            href={href}
            {...external}
            aria-label={`${label} for ${project.title} (opens in a new tab)`}
          >
            <Icon aria-hidden="true" />
            {label}
          </Button>
        );
      })}
    </Row>
  );
};
