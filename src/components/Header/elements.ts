import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";
import Link from "next/link";
import { Theme } from "../../types";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
`;
export const Div1 = styled.div<{ theme: Theme }>`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
// export const Div2 = styled.ul<{ theme: Theme }>`
//   display: flex;
//   align-items: center;
//   gap: 32px;
//   justify-content: flex-end;

//   @media ${(props) => props.theme.breakpoints.sm} {
//     grid-area: 2 / 1 / 3 / 5;
//     justify-content: center;
//     gap: 20px;
//   }
// `;
export const Div3 = styled.div<{ theme: Theme }>`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;


export const NavLink = styled(Link)`
  font-size: 16px;
  color: rgba(255,255,255,0.75);
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ContactDropDown = styled.button<{ theme: Theme }>`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

interface NavProductsIconProps {
  isOpen?: boolean;
  theme: Theme;
}

export const NavProductsIcon = styled(IoIosArrowDropdown)<NavProductsIconProps>`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const Div2 = styled.ul<{ $open?: boolean }>`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 28px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    position: absolute;
    top: 65px;
    right: 0;
    width: 100%;
    flex-direction: column;

    background: ${({ theme }) => theme.colors.background1};
    border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
    backdrop-filter: blur(10px);
    

    max-height: ${({ $open }) => ($open ? "400px" : "0")};
    overflow: hidden;

    transition: 0.3s ease;
    gap: 0px;
    li{
      padding: 15px 0;
    }
  }
`;
export const MobileIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;