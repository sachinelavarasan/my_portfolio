import { CalendarCheck, Medal, Trophy } from "lucide-react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { achievements, stats } from "../../constants/constants";
import { Certifications } from "../Certifications";
import {
  AchievementCard,
  AchievementContent,
  AchievementDescription,
  AchievementIcon,
  AchievementMeta,
  AchievementsGrid,
  AchievementTitle,
  StatCard,
  StatLabel,
  StatNumber,
  StatsStrip,
} from "./elements";

const ICONS = {
  trophy: Trophy,
  medal: Medal,
  "calendar-check": CalendarCheck,
};

export const Achievements = () => {
  return (
    <Section id="achievements">
      <SectionDivider />
      <SectionTitle $main>Achievements</SectionTitle>
      <StatsStrip>
        {stats.map((stat) => (
          <StatCard key={stat.id}>
            <StatNumber>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsStrip>

      <AchievementsGrid>
        {achievements.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <AchievementCard key={item.id}>
              <AchievementIcon aria-hidden="true">
                <Icon size={22} strokeWidth={1.75} />
              </AchievementIcon>
              <AchievementContent>
                <AchievementTitle>{item.title}</AchievementTitle>
                {item.meta && <AchievementMeta>{item.meta}</AchievementMeta>}
                <AchievementDescription>{item.description}</AchievementDescription>
              </AchievementContent>
            </AchievementCard>
          );
        })}
      </AchievementsGrid>

      <Certifications />
    </Section>
  );
};
