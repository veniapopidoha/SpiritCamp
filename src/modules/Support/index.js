import { Title } from '../Routine/style';
import { Button, SubTitle, Text, Turn, Wrap, Wrapper } from './style';


export const Support = () => {
  return(
    <Wrap>
      <Title>ПІДТРИМКА</Title>
      <Wrapper>
        <SubTitle>СТАНЬ ПАРТНЕРОМ SPIRITTIME</SubTitle>
        <Text>
          Кожного року Бог по-особливому працює з кожним, хто відвідує
          наші зустрічі та табори, радикально змінює серця багатьох
          молодих людей.
          <br /> І в тебе є надзвичайна можливість посприяти цій справі.
          Якщо у своєму серці ти відчуваєш потяг до того, щоб зробити
          добровільний внесок, це можна зробити в зазначений спосіб. Ти
          можеш стати справжнім благословіням для людини та бути
          інструментом, якого використовує сам Бог.
        </Text>
        <Button href="https://www.liqpay.ua/uk/checkout/card/380955262502">пожертвувати</Button>
        <Turn>* не підлягає поверненню</Turn>
      </Wrapper>
    </Wrap>
  );
};