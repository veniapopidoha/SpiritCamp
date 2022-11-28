import styled from 'styled-components';
import back from './back.jpeg';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #322a2d;
  height: 100vh;
`;

export const Info = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
  @media screen and (max-width: 300px) {
    font-size: 12px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0;
  p:first-child {
    padding-right: 20px;
    font-weight: 700;
  }
`;

export const FlexStart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
