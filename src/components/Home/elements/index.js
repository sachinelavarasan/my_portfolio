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
