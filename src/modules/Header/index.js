// import { useState } from 'react';
import { HeaderNav, StyledHeader, StyledLink } from './style';


export const Header = () => {
  // const [ isActive, changeTab ] = useState(false)
  // const changeHandler = () => {
  //   if (!isActive) {
  //     changeTab(!isActive);
  //   }
  // }
  return(
    <StyledHeader>
      <HeaderNav>
        <StyledLink to="/">Головна</StyledLink>
        <StyledLink to="/about">ПРО ТАБІР</StyledLink>
        <StyledLink to="/registration">РЕЄСТРАЦІЯ</StyledLink>
        <StyledLink to="/program">ПРОГРАМА</StyledLink>
        <StyledLink to="/donate">ПІДТРИМКА</StyledLink>
      </HeaderNav>
    </StyledHeader>

  
  );
};