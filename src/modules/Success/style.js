import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30vh;
  padding: 0 10vw;
`;

export const Text = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  margin: 20px;
  text-align: center;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const A = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-size: 26px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  text-align: center;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const RegButton = styled(Link)`
  background-color: #1a0066;
  text-decoration: none;
  color: #ffffff;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  padding: 15px 0;
  border-radius: 5px;
  position: relative;
  z-index: 10;
  width: 18vw !important;
  text-align: center;

  :hover {
    color: black;
  }
  @media screen and (max-width: 1024px) {
    width: 22vw !important;
  }
  @media screen and (max-width: 768px) {
    padding: 10px;
    font-size: 12px;
    width: 30vw !important;
  }
`;

