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
            
            <SubTitle>СУБОТА</SubTitle>
            <Text>Сніданок</Text>
            <Text>Служіння</Text>
            <Text>Обід</Text>
            <Text>Вільний час</Text>
            <Text>Семінар</Text>
            <Text>Спілкування</Text>
            <Text>Вечеря</Text>
            <Text>Служіння</Text>
          </Day>
        </Row>
        <Row>
          <Day>
            <SubTitle>НЕДІЛЯ</SubTitle>
            <Text>Сніданок</Text>
            <Text>Служіння</Text>
            <Text>Обід</Text>
            <Text>Вільний час</Text>
            <Text>Семінар</Text>
            <Text>Спілкування</Text>
            <Text>Вечеря</Text>
            <Text>Служіння</Text>
            <Text>Закриття</Text>
          </Day>
          <Day>
            <SubTitle>ПОНЕДІЛОК</SubTitle>
            <Text>Сніданок</Text>
            <Text>Роз'їзд після 10:00</Text>
          </Day>
        </Row>
      </Wrapper>
    </Wrap>
  );
};