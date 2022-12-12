// Styles
import { Bank, Link, Text, Wrap, Wrapper } from './style';

// Images
import bank from "../../img/bank.png";
import facebook from "../../img/facebook.svg";
import telegram from "../../img/teleg.png";
import instagram from "../../img/instagram.svg";
import youtube from "../../img/youtube.svg";

export const Footer = () => {
  return(
    <Wrap>
      <div>
        <Text href='tel:+380955262502'>+380 (99) 026 27 17</Text>
        <Text href='mailto:ispirittime@gmail.com'>ispirittime@gmail.com</Text>
      </div>
      <Wrapper>
        <Link>
          <a href="https://www.facebook.com/fspirittime">
            <img src={facebook} alt="Facebook"/>
          </a>
          <a href="https://www.youtube.com/channel/UCrbDY2PO98TD5S_Dk-P0RLA">
            <img src={youtube} alt="YouTube"/>
          </a>
          <a href="https://www.instagram.com/ispirittime/">
            <img src={instagram} alt="Instagram"/>
          </a>
          <a href="https://t.me/spirittime">
            <img src={telegram} alt="Telegram"/>
          </a>
        </Link>
      </Wrapper>
      <Wrapper>
        <Bank src={bank}/>
      </Wrapper>
    </Wrap>
  );
};