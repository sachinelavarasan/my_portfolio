import styled from "styled-components";
import { Theme } from "../../../types";

export const AboutContainer = styled.div<{ theme: Theme }>`
  .entire-div {
    display: flex;
    flex-direction: column;

    .subhead {
      font-style: normal;
      font-weight: 600;
      font-size: 2rem;
      margin-top: 0.5rem;
      margin-bottom: unset;
      color: ${(props) => props.theme.colors.text};
    }
    .grid-container {
      margin: 4rem 0 0 0;
      display: flex;
      width: 100%;
      flex-direction: column;
      .heading {
        font-style: normal;
        font-weight: 600;
        font-size: 4rem;
        display: flex;
        align-items: center;
        text-align: center;
      }
      .experience {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        .div1 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .role {
            margin: unset;
            letter-spacing: 1px;
            font-weight: 400;
            font-size: 20px;
          }

          .time {
            background: #212d45;
            padding: 0.6rem;
            display: flex;
            border-radius: 20px;
            align-items: center;
            justify-content: center;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            p {
              font-weight: 600;
              font-size: 1.6rem;
              margin: unset;
              color: ${(props) => props.theme.colors.text};
            }
          }
        }
        .div2 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
          .location {
            color: #a7a7a7;
            font-weight: 600;
            font-size: 1.6rem;
            margin: unset;
          }
          .year {
            color: #a7a7a7;
            font-weight: 600;
            font-size: 1.6rem;
            margin: unset;
          }
        }
      }
    }
  }
`;
