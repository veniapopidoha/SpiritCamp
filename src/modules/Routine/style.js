import styled from 'styled-components';

export const Wrap = styled.div`
  background: black;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 50px;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 8px;
  font-weight: bolder;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  width: 350px;
  justify-content: flex-start;
  left: 20vh;
  top: 10vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid white;
  width: 80%;
  margin-left: 10%;
  padding-bottom: 50px;
  position: relative;
  top: 15vh;
`;

export const Text = styled.div`
  margin: 1px;
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  @media screen and (max-width: 1024px) {
   font-size: 12px;
  }
`;

export const SubTitle = styled(Text)`
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 4px;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  padding-left: 0;
`;

export const Day = styled.div`
  margin: 50px;
  margin-top: 0 !important;
  @media screen and (max-width: 1024px) {
    margin: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
   flex-direction: column;
  }
`;