import styled from "styled-components";
import { Theme } from "../../../types";

export const TechStackContainer = styled.div<{ theme: Theme }>`
  .entire-div {
    display: flex;
    flex-direction: column;

    .heading {
      font-style: normal;
      font-weight: 600;
      font-size: 2rem;
      display: flex;
      align-items: center;
      text-align: center;
    }
    .subhead {
      font-style: normal;
      font-weight: 600;
      font-size: 2rem;
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      text-align: center;
      margin-bottom: unset;
    }
    .skills {
      height: 500px;
      overflow-y: auto;
      margin: 1rem;
      -ms-overflow-style: none;
      scrollbar-width: none;
      ::-webkit-scrollbar {
        display: none;
      }
    }
    .grid-container {
      width: 100%;
      display: grid;
      grid-template-columns: auto auto auto;

      align-items: center;
      justify-items: center;
      grid-row-gap: 6rem;
      padding: 30px 0;
      @media ${(props) => props.theme.breakpoints.sm} {
        width: 100%;
        grid-template-columns: auto;
        padding: 30px 30px;
      }
    }
  }
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  overflow: hidden;
  filter: drop-shadow(3px -1px 0px #000);
`;

export const SkillCardContainer = styled.div<{ theme: Theme }>`
  border-radius: 8px;
  box-shadow: 0px 0px 3px 7px rgba(0, 0, 0, 0.1);
  padding: 10px;
  background: ${({ theme }) => theme.colors.cardBg};
  border: 2px solid #5274b7;
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 500ms 100ms;

  .block {
    display: none;
  }
  .description {
    font-weight: 500;
    font-size: 1.5rem;
    letter-spacing: 0.5px;
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0px 4px 6px rgba(0, 0, 0, 0.4);
    .block {
      display: block;
      animation: fadeIn 1s;
      -webkit-animation: fadeIn 1s;
    }
    .image {
      width: 60px;
      height: 60px;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }

  .heading {
    font-weight: 800;
    font-size: 1.9rem;
    color: ${(props) => props.theme.colors.accent1};
  }
`;

export const SkillImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  overflow: hidden;
`;
