import styled from 'styled-components';

export const Wrap = styled.div`
  background: black;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60% !important;
  margin-left: 25% !important;
  margin-bottom: 50px !important;
  margin-top: 10vh;
`;

export const SubTitle = styled.p`
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px !important;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 10px !important;
  width: 80%;
  @media screen and (max-width: 1500px){
    font-size: 30px;
  }
  @media screen and (max-width: 1024px){
    font-size: 25px;
  }
  @media screen and (max-width: 768px){
    font-size: 20px;
  }
`;

export const Text = styled.p`
  color: #ffffff;
  text-indent: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 17px;
  width: 100%;
  @media screen and (max-width: 768px){
    font-size: 12px;
  }
`;

export const Button = styled.a`
  left: 65%;
  padding: 10px 15px;
  background-color: #1a0066;
  text-decoration: none;
  text-align: center;
  color: #ffffff;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  border-radius: 5px;
  position: relative;
  bottom: 5%;
  z-index: 1000;
  width: 20%;
  @media screen and (max-width: 1280px) {
    width: 200px;
    margin-top: 20px;
  }
  @media screen and (max-width: 768px){
    width: 130px;
    font-size: 12px;
  }
`;

export const Turn = styled.p`
  font-size: 16px;
  padding: 20px 0 0;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  left: 65%;
  color: white;
  max-width: 300px;
  @media screen and (max-width: 768px){
    left: 50%;
    font-size: 14px;
  }
`;