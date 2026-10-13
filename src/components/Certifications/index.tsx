import { TbCertificate } from "react-icons/tb";
import { certifications } from "../../constants/constants";
import {
  CertificationCard,
  CertificationsBlock,
  CertificationsGrid,
  CertificationsHeading,
  ContentArea,
  IconWrapper,
  IssuerRow,
  Title,
} from "./elements";

// Rendered at the end of the Achievements section as a compact list.
export const Certifications = () => {
  return (
    <CertificationsBlock id="certifications" aria-labelledby="certifications-heading">
      <CertificationsHeading id="certifications-heading">Certifications</CertificationsHeading>

      <CertificationsGrid>
        {certifications.map((cert) => (
          <CertificationCard
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            title={cert.description}
          >
            <IconWrapper aria-hidden="true">
              <TbCertificate size={20} />
            </IconWrapper>
            <ContentArea>
              <Title>{cert.title}</Title>
              <IssuerRow>
                {cert.issuer}
                {cert.date && ` · ${cert.date}`}
              </IssuerRow>
            </ContentArea>
          </CertificationCard>
        ))}
      </CertificationsGrid>
    </CertificationsBlock>
  );
};
