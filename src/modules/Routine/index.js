import { Day, Row, SubTitle, Text, Title, Wrapper } from './style';
import { Wrap } from './style';


export const Routine = () => {
  return(
    <Wrap>
      <Title>ПРОГРАМА</Title>
      <Wrapper>
        <Row>
          <Day>
            <SubTitle>П'ЯТНИЦЯ</SubTitle>
            <Text>15:00-17:00 - поселення</Text>
            <Text>18:00 - вечеря</Text>
            <Text>20:00 - відкриття</Text>
          </Day>
          <Day>
            <SubTitle>П'ЯТНИЦЯ</SubTitle>
            <Text>поселення</Text>
            <Text>вечеря</Text>
            <Text>відкриття</Text>
          </Day>
        </Row>
        <Row>
          <Day>
            <SubTitle>П'ЯТНИЦЯ</SubTitle>
            <Text>поселення</Text>
            <Text>вечеря</Text>
            <Text>відкриття</Text>
          </Day>
          <Day>
            <SubTitle>П'ЯТНИЦЯ</SubTitle>
            <Text>поселення</Text>
            <Text></Text>
            <Text>відкриття</Text>
          </Day>
        </Row>
      </Wrapper>
    </Wrap>
  );
};