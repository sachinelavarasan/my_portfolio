import Image from "next/image";
import { FiDownload } from "react-icons/fi";

import { HomeContainer, HeroButtons, Greeting, Name, Tagline, Photo } from "./elements";
import profilePhoto from "../../../public/profile-photo.png";
import { OutlineButton, PrimaryButton, Section } from "../../styles/GlobalComponents";

export const Home = () => {
  return (
    <Section>
      <HomeContainer>
        <div className="left">
          <Greeting>Hello 👋, I&apos;m</Greeting>
          <Name>Elavarasan Murugesan</Name>
          <Tagline>Senior Full-Stack Engineer scaling SaaS products with NestJS and React Native</Tagline>

          <HeroButtons>
            <PrimaryButton href="#projects">View Projects</PrimaryButton>
            <OutlineButton href="#contact">Contact</OutlineButton>
            <OutlineButton
              href="https://drive.google.com/uc?export=download&id=1Qat_-fr42dCo4vnTJgn5nuINmB6iOwy6"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload aria-hidden="true" />
              Download Resume
            </OutlineButton>
          </HeroButtons>
        </div>
        <Photo>
          <Image
            src={profilePhoto}
            alt="Photo of Elavarasan Murugesan"
            width={260}
            height={260}
            sizes="(max-width: 640px) 160px, (max-width: 768px) 210px, 260px"
            priority
          />
        </Photo>
      </HomeContainer>
    </Section>
  );
};
