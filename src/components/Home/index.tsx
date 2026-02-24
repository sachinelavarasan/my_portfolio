import {
  HomeContainer,
  HeroButtons,
  ResumeButton,
  ProjectsButton,
} from "./elements";
import Image from "next/image";
import myphotoIcon from "../../../public/myphoto.png";
import { Section } from "../../styles/GlobalComponents";

export const Home = () => {
  return (
    <Section>
      <HomeContainer>
        <div className="left">
          <div className="hometext"><p>Hello 👋,</p><p className="name-color">I'm Elavarasan M</p></div>
          <div className="mt-4 hometext small">Senior Full-Stack Engineer scaling SaaS products with NestJS and React Native</div>
          
          <HeroButtons>
            <ResumeButton
              href="https://drive.google.com/uc?export=download&id=1Qat_-fr42dCo4vnTJgn5nuINmB6iOwy6"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Download Resume
            </ResumeButton>
          </HeroButtons>
        </div>
        <div className="right">
          <Image src={myphotoIcon} alt="myicon" width={150} height={150} />
        </div>
      </HomeContainer>
    </Section>
  );
};
