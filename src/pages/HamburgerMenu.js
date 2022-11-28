import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const COLORS = {
  primaryDark: "#000000",
  primaryLight: "#ffffff",
};

const MenuLabel = styled.label`
  background-color: ${COLORS.primaryLight};
  position: fixed;
  top: 2rem;
  right: 1rem;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  z-index: 10000;
  text-align: center;
  display: none;
  @media only screen and (max-width: 480px) {
    display: inherit;
  }
`;

const NavBackground = styled.div`
  position: fixed;
  top: 3rem;
  right: 2rem;
  background-color: ${COLORS.primaryDark};
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 1rem;
  height: 3px;
  display: inline-block;
  margin-top: 1.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 1rem;
    height: 3px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.3rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "0.3rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute !important;
  list-style: none !important;
  top: 50% !important;
  left: 45% !important;
  transform: translate(-50%, -50%) !important;
  text-align: center !important;
  width: 100% !important;
`;
const ItemLink = styled(NavLink)`
  display: inline-block !important;
  font-size: 1.5rem !important;
  font-weight: bold !important;
  letter-spacing: 3px !important;
  font-family: "Roboto", sans-serif !important;
  text-decoration: none !important;
  border-bottom:1px solid #ffffff !important;
  width: 75% !important;
  color: ${COLORS.primaryLight} !important;
  padding: 1.5rem 3rem !important;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240% !important;
  transition: all 0.4s;
  // &:hover,
  // &:active {
  //   background-position: 100%;
  //   color: ${COLORS.primaryDark};
  //   transform: translateX(1rem);
  // }
`;

function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li>
            <a className="mobile-nav" onClick={handleClick} href="#holovna">
              ГОЛОВНА
            </a>
          </li>
          <li>
            <a className="mobile-nav" onClick={handleClick} href="#about">
              ПРО ТАБІР
            </a>
          </li>
          <li>
            <a className="mobile-nav" onClick={handleClick} href="#program">
              ПРОГРАМА
            </a>
          </li>
          <li>
            <a className="mobile-nav" onClick={handleClick} href="#registration">
              РЕЄСТРАЦІЯ
            </a>
          </li>
          <li>
            <a className="mobile-nav" onClick={handleClick} href="#donate">
              ПІДТРИМКА
            </a>
          </li>

          <li className="plan">
            "Збирай молодь та друзiв <br />
            завiтай на SPIRITCAMP"
          </li>
        </List>
      </Navigation>
    </>
  );
}

export default HamburgerMenu;
