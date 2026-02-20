import { TbCertificate } from "react-icons/tb";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { certifications } from "../../constants/constants";
import {
  CardHeader,
  CertificationCard,
  CertificationsGrid,
  ContentArea,
  Description,
  IconWrapper,
  IssuerRow,
  Title,
} from "./elements";

export const Certifications = () => {
  return (
    <Section id="certifications">
      <SectionDivider />
      <SectionTitle main>Certifications</SectionTitle>

      <CertificationsGrid>
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}>
            <CardHeader>
              <IconWrapper>
                <TbCertificate size="1.45rem" />
              </IconWrapper>
            </CardHeader>
            <ContentArea>
              <Title>{cert.title}</Title>
              <IssuerRow>
                <span>{cert.issuer}</span>
                {cert.date && ` · ${cert.date}`}
              </IssuerRow>
              {cert.description && (
                <Description>{cert.description}</Description>
              )}
            </ContentArea>
          </CertificationCard>
        ))}
      </CertificationsGrid>
    </Section>
  );
};
