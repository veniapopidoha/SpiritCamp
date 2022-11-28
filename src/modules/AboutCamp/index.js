import { Br, Description, Group, Image, ReversedGroup, ReverseSubTitle, SpeakerImage, SubTitle, Title, Wrap, Wrapper } from './style';
import chevoler from "../../img/chevoler.png";
import leo from "../../img/leo.png";
import aboutphoto from "../../img/aboutcamp.png";


export const AboutCamp = () => {
  return(
    <Wrap>
      <Title>ПРО ТАБІР</Title>
      <Wrapper>
        <Group>
          <Image src={chevoler}/>
          <Description>
            {" "}
            Chevalier Panorama розташований в селі Яблуниця, на висоті
            близько 1000 м над рівнем моря. Завдяки цьому з вікон готелю
            Ви можете спостерігати за найвищими точками України – Говерлою
            та вершинами Чорногірського хребта.
          </Description>
          <SubTitle>БАЗА CHEVALIER PANORAMA</SubTitle>
        </Group>
        <ReversedGroup>
          <SpeakerImage src={leo}/>
          <Description>
            {" "}
            Служитель в п’ятидесятницькій російськомовній церкві в
            Німеччині, а служить російсько - німецькомовним християнам в
            Росії, Україні, Казахстані, Прибалтиці, Німеччині, Канаді та
            США. Виступає, як учитель в різних напрямках: від академічних
            семінарів до участі в молодіжних конференціях, сімейних
            семінарах.
          </Description>
          <ReverseSubTitle>СПІКЕР ЛЕО ФРАНК</ReverseSubTitle>
        </ReversedGroup>
        <Group>
          <Image src={aboutphoto}/>
          <Description>
            {" "}
            Spirit Time місце єдності та служіння.
            <Br>Ми організовуємо зимові та літні табори вже впродовж декількох
            років. Сумарно в наших таборах побувало більше 1500 унікальних
            учасників. #spiritcamp22 буде наш четвертий зимовий табір.</Br>
            <Br>Якщо коротко описати наші зимові табори це: дуже багато
            молоді, затишна атмосфера, спільне прагнення глибокого
            пізнання Бога. Ми з командою робимо все, щоб створити для вас
            максимально затишну атмосферу, щоб ви змогли відпочити духом
            та тілом, вирости духовно та знайти багато нових знайомств.
            Програма в нас дуже насичена, проте матимите багато вільного
            часу.</Br>
          </Description>
          <SubTitle>КОМАНДА SPIRITTIME</SubTitle>
        </Group>
      </Wrapper>
    </Wrap>
  );
}