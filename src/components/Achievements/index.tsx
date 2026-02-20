import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { achievements, stats } from "../../constants/constants";
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

export const Achievements = () => {
  return (
    <Section id="achievements">
      <SectionDivider />
      <SectionTitle main>Achievements</SectionTitle>
      <StatsStrip>
        {stats.map((stat) => (
          <StatCard key={stat.id}>
            <StatNumber>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsStrip>

      <AchievementsGrid>
        {achievements.map((item) => (
          <AchievementCard key={item.id} $delay={item.id}>
            <AchievementIcon>{item.icon}</AchievementIcon>
            <AchievementContent>
              <AchievementTitle>{item.title}</AchievementTitle>
              {item.meta && <AchievementMeta>{item.meta}</AchievementMeta>}
              <AchievementDescription>{item.description}</AchievementDescription>
            </AchievementContent>
          </AchievementCard>
        ))}
      </AchievementsGrid>
    </Section>
  );
};
