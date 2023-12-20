import styled from "styled-components";

export const ProjectContainer = styled.div`
  .heading {
    font-style: normal;
    font-weight: 600;
    font-size: 2rem;
  }
  .bottom {
    padding: 10px 10px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
    width: 100%;
  }
`;

export const ProjectCardContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0px 0px 3px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 100%;
  background: #212d45;
  bottom: 0px;
  position: relative;

  &:hover {
    transition: all 0.1s ease-in;
    bottom: -4px;
    box-shadow: 0 0px 4px 5px rgba(0, 0, 0, 0.3);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
    .container-project{
      display: flex;
      flex-direction: column;
    }
  }
  .heading {
    font-weight: 800;
    font-size: 1.9rem;
    color: ${(props) => props.theme.colors.accent1};
  }
  .description {
    font-weight: 500;
    font-size: 1.5rem;
    letter-spacing: 1px;
    padding: 0 2rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const Img = styled.img`

  max-width: 400px;

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 100%;
  }
  /* width: 100%;
  height: 200px;
  object-fit: contain;
  object-position: center;
  overflow: hidden; */
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 0.5rem 0.5rem;
  background: #6b3030;
  border-radius: 6px;
  transition: 0.5s;
  text-decoration: none;
  cursor: pointer;
  color: white;
  &:hover {
    background: #801414;
    color: white;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.1rem;
  font-weight: 600;
  background-color: #243556;
  padding: 0.5rem;
  border-radius: 0.7rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 0.875rem;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
`;
