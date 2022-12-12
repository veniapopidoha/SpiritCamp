import React from 'react';
import { MainPage } from '../modules/MainPage';
import { CarouselBox } from './Carousel.js';
import axios from 'axios';
// Images
import playmobile from '../img/play.png';
import calendar from '../img/calendar.svg';
import cash from '../img/cash.svg';
import chevoler from '../img/chevoler.png';
import leo from '../img/leo.png';
import aboutphoto from '../img/aboutcamp.png';
import Registration from './Registation';

class Holovna extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get('https://spiri-camp-user-registration.herokuapp.com')
      .then((response) => this.setState({ data: response.data }));
  }

  render() {
    return (
      <>
        <MainPage data={this.state.data} />
        <div className='mobile-pages'>
          <div id='holovna' className='holovna-mobile'>
            <div className='carousel_photo__text__block'>
              <div className='carousel_photo__text'>
                <div className='carousel_photo__text_item carousel_photo__text__date'>
                  <img src={calendar} width='50px' alt='' />
                  <p className='carousel_photo__text__date__text'>
                    27 січня - 30 січня
                  </p>
                </div>
                <div className='carousel_photo__text_item carousel_photo__text__prise'>
                  <img src={cash} width='50px' alt='' />
                  <p className='carousel_photo__text__prise__text'>4000грн</p>
                </div>
                <div className='carousel_photo__text_item_cost'>
                  *З &nbsp;1 Грудня ціна 2900 грн
                </div>
                <div className='members-mobile'>
                  <p className='num'>{550 - this.state.data.length}</p>
                  <br />
                  <p className='mem'>*залишилось місць</p>
                </div>
              </div>
            </div>

            {/* <div className="video-button">
                <a href="https://www.instagram.com/tv/CKwJs9BnCnV/?utm_source=ig_web_copy_link">
                  <img src={playmobile} alt="video" className="play" />
                </a>
                <p className="text">як це було</p>
              </div> */}
          </div>

          <div id='about' className='comp about-page'>
            <p className='title'>ПРО ТАБІР</p>
            <div className='about'>
              <div className='about-group '>
                <img className='about-picture' src={chevoler} />
                <p className='about-text'>
                  {' '}
                  Chevalier Panorama розташований в селі Яблуниця, на висоті
                  близько 1000 м над рівнем моря. Завдяки цьому з вікон готелю
                  Ви можете спостерігати за найвищими точками України – Говерлою
                  та вершинами Чорногірського хребта.
                </p>
                <h1 className='about-title base'>БАЗА CHEVALIER PANORAMA</h1>
              </div>
              <div className='about-group about-group-speaker'>
                <h1 className='about-title reverse'>СПІКЕР ЛЕО ФРАНК</h1>
                <p className='about-text speaker '>
                  {' '}
                  Служитель в п’ятидесятницькій російськомовній церкві в
                  Німеччині, а служить російсько - німецькомовним християнам в
                  Росії, Україні, Казахстані, Прибалтиці, Німеччині, Канаді та
                  США. Виступає, як учитель в різних напрямках: від академічних
                  семінарів до участі в молодіжних конференціях, сімейних
                  семінарах.
                </p>

                <img className='about-picture-speaker' src={leo} />
              </div>
              <div className='about-group '>
                <img className='about-picture' src={aboutphoto} />
                <div className='about-text'>
                  {' '}
                  Spirit Time місце єдності та служіння.
                  <p className='br'>
                    Ми організовуємо зимові та літні табори вже впродовж
                    декількох років. Сумарно в наших таборах побувало більше
                    1500 унікальних учасників. #spiritcamp22 буде наш четвертий
                    зимовий табір.
                  </p>
                  <p className='br'>
                    Якщо коротко описати наші зимові табори це: дуже багато
                    молоді, затишна атмосфера, спільне прагнення глибокого
                    пізнання Бога. Ми з командою робимо все, щоб створити для
                    вас максимально затишну атмосферу, щоб ви змогли відпочити
                    духом та тілом, вирости духовно та знайти багато нових
                    знайомств. Програма в нас дуже насичена, проте матимете
                    багато вільного часу.
                  </p>
                </div>
                <div className='title-block'>
                  <h1 className='about-title'>
                    КОМАНДА ОРГАНІЗАТОРИ SPIRIT TIME
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div id='program' className='comp mobile-program'>
            <p className='title'>ПРОГРАМА</p>
            <div className='carousel'>
              <CarouselBox />
            </div>
          </div>
          <div id='registration' className='comp'>
            {/* <p className='title'>РЕЄСТРАЦІЯ</p>
            <p className='registration'>
              *обмеження віку 15+
              <br />
              *реєстрація вважається дійсна після оплати
              <br />
              <br />
              *Вартість путівки 2700 грн <br />
              *З 1 Грудня ціна 2900 грн
              <br />
              *З 1 Січня ціна 3000 грн
              <br />
              <br />
              *При реєстрації потрібно обов’язково оплатити аванс в розмірі 700
              грн
              <br />
              *Кошти можна буде повернути до 2 Січня
            </p>
            <a
              href='https://spiritcamp.site/registration'
              className='reg-button donate-button'
            >
              ЗАРЕЄСТРУВАТИСЬ
            </a>
            <p className='takefriend'>
              "НЕ ЗАБУДЬ ПРО СВОГО ДРУГА <br />
              СКИНЬ ЙОМУ ПОСИЛАННЯ, МIСЦЯ ОБМЕЖЕНI"
            </p> */}
            <Registration/>
          </div>
          <div id='donate' className='comp'>
            <p className='title'>ПІДТРИМКА</p>
            <div className='donate'>
              <p className='donate_title'>СТАНЬ ПАРТНЕРОМ SPIRITTIME</p>
              <p className='donate_text'>
                Кожного року Бог по-особливому працює з кожним, хто відвідує
                наші зустрічі та табори, радикально змінює серця багатьох
                молодих людей.
                <br /> І в тебе є надзвичайна можливість посприяти цій справі.
                Якщо у своєму серці ти відчуваєш потяг до того, щоб зробити
                добровільний внесок, це можна зробити в зазначений спосіб. Ти
                можеш стати справжнім благословіням для людини та бути
                інструментом, якого використовує сам Бог.
              </p>
            </div>

            <a
              href='https://www.liqpay.ua/ru/checkout/card/i38256884768'
              className='reg-button donate-button'
            >
              пожертвувати
            </a>
            <p className='turn'>* не підлягає поверненню</p>
            <p className='best'>«ТВIЙ НАЙКРАЩИЙ ЗИМОВИЙ ВIДПОЧИНОК»</p>
          </div>
        </div>
      </>
    );
  }
}
export default Holovna;
