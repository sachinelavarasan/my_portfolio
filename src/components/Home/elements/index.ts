import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 7rem 0;
  .left {
    .hometext {
      font-style: normal;
      font-weight: 700;
      font-size: 3.5rem;
      display: flex;
      letter-spacing: -1px;

      .name-color {
        background: linear-gradient(90deg, #13b0f5 -2.06%, #e70faa 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: unset;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;
  flex-wrap: wrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 32px;
    gap: 12px;
  }
`;

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 12px 36px rgba(19, 173, 199, 0.4);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    justify-content: center;
    padding: 14px 24px;
  }
`;

export const ProjectsButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, border-color 0.3s ease,
    background 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(148, 93, 214, 0.55);
    background: rgba(148, 93, 214, 0.1);
    box-shadow: 0 10px 30px rgba(148, 93, 214, 0.18);
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    justify-content: center;
    padding: 14px 24px;
  }
`;
