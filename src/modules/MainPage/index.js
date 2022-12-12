// Styles
import {
  Cost,
  Description,
  InfoBlock,
  SubTitle,
  Title,
  Wrap,
  Wrapper,
  Date,
  Logo,
  TextBlock,
  RegButton,
  VideoLink,
  VideoText,
  VideoWrap,
  Members,
  Mem,
  Num,
} from './style';
import { Link } from 'react-router-dom';

// Images
import calendar from '../../img/calendar.svg';
import cash from '../../img/cash.svg';
import playmobile from '../../img/play.png';

export const MainPage = (props) => {
  return (
    <Wrap>
      <Logo>
        <Title>Spirit Camp</Title>
        <SubTitle>«Мiсце твого зростання»</SubTitle>
      </Logo>
      <InfoBlock>
        <TextBlock>
          <Wrapper>
            <img src={calendar} />
            <Date>27 - 30 січня</Date>
          </Wrapper>
          <Wrapper>
            <img src={cash} />
            <Cost>4000 грн</Cost>
          </Wrapper>
          <Description>* встигни зареєструватись</Description>
        </TextBlock>
      </InfoBlock>
      <RegButton to='/registration'>ЗАРЕЄСТРУВАТИСЬ</RegButton>
      <VideoWrap>
        <VideoLink
          onClick={() => {
            window.location.replace(
              'https://www.instagram.com/tv/CZM2FOBFMit/?utm_source=ig_web_copy_link'
            );
          }}
          src={playmobile}
          alt='video'
          className='play'
        />
        <VideoText>як це було</VideoText>
      </VideoWrap>
      <Members>
        <Num>{550 - props.data.length}</Num>
        <Mem>*залишилось місць</Mem>
      </Members>
    </Wrap>
  );
};
