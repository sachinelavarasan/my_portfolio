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
  GHStatsRow,
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

      <GHStatsRow>
        <img
          src={`https://streak-stats.demolab.com?user=${GH_USER}&theme=react&background=0D1117&border_radius=8&border=FFFFFF14`}
          alt="GitHub Streak"
          loading="lazy"
        />
        {/* <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GH_USER}&layout=compact&theme=react&hide_border=true&bg_color=0d1117&title_color=13ADC7&text_color=ffffff99`}
          alt="Top Languages"
          loading="lazy"
        /> */}
      </GHStatsRow>

      <SectionSubLabel>Contribution Graph</SectionSubLabel>
      <GraphWrapper>
        <ContributionGraph user={GH_USER} />
      </GraphWrapper>

      <SectionSubLabel>Top Repositories</SectionSubLabel>
      <ReposGrid>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : repos.map((repo, i) => (
              <RepoCard
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                $delay={i}
              >
                <RepoName>📁 {repo.name}</RepoName>
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
                    <AiFillStar size="0.85rem" />
                    {repo.stargazers_count}
                  </RepoMetaItem>
                  <RepoMetaItem>
                    <BiGitRepoForked size="0.85rem" />
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
        <AiFillGithub size="1.35rem" />
        View Full GitHub Profile
      </GHCta>
    </Section>
  );
};
