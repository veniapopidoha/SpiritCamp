import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex !important;
  justify-content: space-between !important;
  width: 100% !important;
  position:fixed !important;
  z-index: 10000;;
  bottom: 0;   
  background-color: #ffffff;
  align-items: center;
`;

export const Text = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 12px;
  width: 80px;
  margin-top: 2%;
  margin-left: 10px;
  margin-right: 0px;
  text-decoration: none;
  color: #000;
  padding: 0 20px;
  @media screen and (max-width: 1024px) {
    font-size: 10px;
    width: 100px;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    font-size: 8px;
    width: 80px;
    padding: 0;
  }
  @media screen and (max-width: 375px){
    font-size: 7px;
  }
  @media screen and (max-width: 320px){
    font-size: 6px;
  }
`;

export const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center ;
`;

export const Bank = styled.img`
  width: 300px;
  height: 30px;
  @media screen and (max-width: 768px){
    width: 200px;
  }
  @media screen and (max-width: 480px){
    width: 100px;
    height: 20px;
  }
  
`;

export const Link = styled.div`
  display: flex;
  align-self: center;
  margin: 10px 25px;

  img {
    width: 18px;
    margin: 0 25px;
    @media screen and (max-width: 1024px){
      width: 15px;
      margin: 0 15px;
    }
    @media screen and (max-width: 768px) {
      margin: 0 5px;
    }
    @media screen and (max-width: 375px){
      width: 10px;
    }
    @media screen and (max-width: 320px){
      width: 9px;
      margin: 2px;
    }
  }
  @media screen and (max-width: 768px){
      margin: 0;
    }
`;