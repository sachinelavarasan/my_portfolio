'use client'

import { useEffect, useState } from "react";
import { AiFillGithub, AiFillStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  GHCta,
  GraphWrapper,
  RepoCard,
  RepoDescription,
  RepoLanguageDot,
  RepoMeta,
  RepoMetaItem,
  RepoName,
  ReposGrid,
  SectionSubLabel,
  SkeletonCard,
} from "./elements";
import { ContributionGraph } from "./ContributionGraph";


const GH_USER = "sachinelavarasan";

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Dart: "#00B4AB",
  PHP: "#4F5D95",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  default: "#8b949e",
};

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export const GitHub = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [graphFailed, setGraphFailed] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${GH_USER}/repos?sort=updated&per_page=6&type=public&direction=desc`
    )
      .then((r) => r.json())
      .then((data: Repo[]) => {
        if (Array.isArray(data)) setRepos(data.slice(0, 6));
      })
      .catch(() => {
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Section id="github">
      <SectionDivider />
      <SectionTitle $main>GitHub Activity</SectionTitle>

      {!graphFailed && (
        <>
          <SectionSubLabel>Contribution Graph</SectionSubLabel>
          <GraphWrapper>
            <ContributionGraph user={GH_USER} onError={() => setGraphFailed(true)} />
          </GraphWrapper>
        </>
      )}

      <SectionSubLabel>Top Repositories</SectionSubLabel>
      <ReposGrid>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : repos.map((repo) => (
              <RepoCard
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RepoName>{repo.name}</RepoName>
                <RepoDescription>
                  {repo.description ?? "No description provided."}
                </RepoDescription>
                <RepoMeta>
                  {repo.language && (
                    <RepoMetaItem>
                      <RepoLanguageDot
                        $color={
                          LANG_COLORS[repo.language] ?? LANG_COLORS.default
                        }
                      />
                      {repo.language}
                    </RepoMetaItem>
                  )}
                  <RepoMetaItem>
                    <AiFillStar size="0.85rem" aria-label="Stars" />
                    {repo.stargazers_count}
                  </RepoMetaItem>
                  <RepoMetaItem>
                    <BiGitRepoForked size="0.85rem" aria-label="Forks" />
                    {repo.forks_count}
                  </RepoMetaItem>
                </RepoMeta>
              </RepoCard>
            ))}
      </ReposGrid>

      <GHCta
        id="github-profile-cta"
        href={`https://github.com/${GH_USER}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size="1.35rem" aria-hidden="true" />
        View Full GitHub Profile
      </GHCta>
    </Section>
  );
};
