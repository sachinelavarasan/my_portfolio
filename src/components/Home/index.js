import { HomeContainer } from "./elements";
import Image from "next/image";
import myphotoIcon from "../../../public/myphoto.png";
import { Section } from "../../styles/GlobalComponents";

export const Home = () => {
  return (
    <Section>
      <HomeContainer>
        <div className="left">
          <div className="hometext">Hi 👋,</div>
          <div className="hometext">My name is</div>
          <div className="hometext">
            <p className="name-color">Elavarasan M</p>
          </div>
          <div className="hometext">I build things for web and mobile</div>
        </div>
        <div className="right">
          <Image src={myphotoIcon} alt="myicon" width={150} height={150} />
        </div>
      </HomeContainer>
    </Section>
  );
};
