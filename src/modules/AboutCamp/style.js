import styled from 'styled-components';

export const Wrap = styled.div`
  background-color: black;
  height: 100vh;
`;

export const Wrapper = styled.div`
  margin-top: 15vh;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
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

export const Group = styled.div`
  display: flex;
  align-items: center !important;
  flex-direction: column;
`;

export const ReversedGroup = styled(Group)`
  flex-direction: column-reverse !important;
  margin-bottom: 10vh;
`;

export const Image = styled.img`
  width: 400px;
  height: 190px;
  @media screen and (max-width: 1280px) {
    width: 350px;
    height: 165px;
  }
`;

export const Description = styled.p`
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1px !important;
  font-size: 10px;
  width: 400px;
  padding: 20px;
  margin-bottom: 20px !important;
  text-indent: 20px !important;
  @media screen and (max-width: 1280px) {
    width: 300px;
    padding: 10px;
    font-size: 9px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 11px;
    width: 65%;
  }
`;

export const SubTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  letter-spacing: 2px;
  /* width: 80%; */
  margin: 70px ;
  margin-top: 0 !important;
  font-weight: bold;
  font-size: 18px !important;
  color: #ffffff;
  border-bottom: #ffffff 1px solid;
  padding-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  width: 80% !important;
  text-align: center;
`;

export const Br = styled.p`
  text-indent: 20px;
  margin: 0;
`;

export const ReverseSubTitle = styled(SubTitle)`
  margin: 0;
  border-bottom: 0;
  display: flex;
  align-items: center;
  border-top: 1px solid #ffffff;
  padding-top: 20px;
  text-align: center;
  justify-content: center;
`;


export const SpeakerImage = styled(Image)`
  width:300px !important;
  height:280px !important;
`;