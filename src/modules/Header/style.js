import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const StyledHeader = styled.header`
  width: 100%;
  font-family: 'Roboto', sans-serif;
  height: 100px;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  z-index: 100000;
  /* margin-right: 1000px; */
  align-items: center;
  background-color:rgba(0,0,0,0.5);
  @media screen and (max-width: 1024px){
    justify-content: center;
    height: 70px;
  }
  @media screen and (max-width: 768px){
    height: 50px;
  }
  @media screen and (max-width: 480px){
    display: none;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
  padding-right: 20vh;
  @media screen and (max-width: 1024px){
    padding-right: 0;
  }
`;

export const StyledLink = styled(Link)`
  margin-right: 36px;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.33;
  letter-spacing: 0.6px;
  color: ${({ $active }) => ($active ? '#F86A3B' : 'white' )};
  text-decoration: none;
  text-transform: uppercase;
  :hover {
    color: #F86A3B;
  }
  :focus {
    color: #F86A3B;
  }
  @media screen and (max-width: 1024px){
    font-size: 15px;
  }
  @media screen and (max-width: 768px){
    font-size: 10px;
    margin-right: 20px;
  }
`;