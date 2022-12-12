import styled from 'styled-components';
import holovna from '../../img/holovna.png';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  background-image: url(${holovna});
  height: 100vh;
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 10vh;
  }
`;

export const Title = styled.p`
  font-size: 120px !important;
  font-weight: bold;
  line-height: 1.27;
  letter-spacing: 20px;
  color: #ffffff;
  text-transform: uppercase;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0;
  padding-top: 13vh;
  @media screen and (max-width: 1024px) {
    font-size: 70px !important;
    padding-top: 25vh;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px !important;
    padding-top: 15vh;
    letter-spacing: 15px;
  }
`;

export const SubTitle = styled.p`
  font-size: 35px !important;
  line-height: 1.27;
  letter-spacing: 10px;
  color: #ffffff;
  text-decoration: none;
  font-family: 'mr_Vokiar', sans-serif;
  margin-top: 0;
  position: relative;
  top: -40px;
  right: -140px;
  @media screen and (max-width: 1024px) {
    font-size: 23px !important;
    top: -30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px !important;
    top: -10px;
    letter-spacing: 5px;
    right: -80px;
  }
`;

export const InfoBlock = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row-reverse;
  @media screen and (max-width: 768px) {
    margin-top: 30vh;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 125px 10px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  top: -10vh;
  position: relative;
  @media screen and (max-width: 1024px) {
    padding: 8px 60px 8px 8px;
  }
  img {
    width: 40px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #ffffff;
  height: 60px;
  padding: 5px;
`;

export const Date = styled.p`
  margin: 15px 0 15px 15.3px !important;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 25px;
  font-weight: bold;
  line-height: 1.32;
  letter-spacing: 4px;
  color: #ffffff;
  font-family: 'Monserrat', sans-serif;
  @media screen and (max-width: 1024px) {
    font-size: 20px !important;
  }
`;

export const Cost = styled.p`
  margin-left: 56.3px !important;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-size: 26px;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 4px;
  font-family: 'Monserrat', sans-serif;
  color: #ffffff;
  @media screen and (max-width: 1024px) {
    font-size: 20px !important;
  }
`;

export const Description = styled.p`
  margin-left: 80px;
  font-size: 14px;
  color: #ffffff;
  padding: 10px 10px 10px 60px;
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
  left: 80%;
  bottom: 5%;
  z-index: 1000;
  width: 18vw !important;
  text-align: center;
  @media screen and (max-width: 1024px) {
    left: 68%;
    width: 22vw !important;
  }
  @media screen and (max-width: 768px) {
    left: 70%;
    padding: 10px;
    font-size: 12px;
    width: 30vw !important;
  }
`;

export const VideoLink = styled.img`
  cursor: pointer;
  width: 70px;
  display: flex;
  position: relative;
  bottom: 15vh;
  z-index: 3;
`;

export const VideoText = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  font-size: 20px;
  transform: rotate(270deg);
  transform-origin: top left;
  letter-spacing: 2px;
  font-weight: bold;

  padding: 20px 30px 20px 0;
  width: 200px;
  @media screen and (max-width: 1024px) {
    font-size: 15px;
    padding: 25px 35px 25px 0;
  }
`;

export const VideoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  position: relative;
  left: 20%;
  top: -25%;
  width: 80px;
`;

export const Members = styled.div`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.5);
  font-weight: bold;
  border-radius: 5px;

  position: relative;
  left: 43vw;
  bottom: 25vh;
  font-size: 12px;
  margin: 0;
  padding: 5px;
  width: 190px;
  :hover {
    color: white;
  }

  @media screen and (max-width: 1024px) {
    bottom: 35vh;
  }
  @media screen and (max-width: 768px) {
    left: 37vw;
    bottom: 25vh;
  }
`;

export const Num = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 60px;
  padding: 0;
  line-height: 55px;
  text-transform: uppercase;
  color: transparent;
  background-clip: text;
  background: #000;
  -webkit-background-clip: text;
  background-image: linear-gradient(90deg, #4e89cc, #1a0066);
`;

export const Mem = styled.p`
  background-color: #000;
  -webkit-background-clip: text;
  background-image: linear-gradient(90deg, #4e89cc, #1a0066);
  bottom: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  line-height: 12px;
  font-weight: 400;
  color: transparent;
  background-clip: text;
`;
