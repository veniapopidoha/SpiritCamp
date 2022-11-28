import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Program extends React.Component {
  render() {
    return (
      <div>
        <div className="comp">
          <div>
            <p className="title">ПІДТРИМКА</p>
            <div className="donate">
              <p className="donate_title">СТАНЬ ПАРТНЕРОМ SPIRITTIME</p>
              <p className="donate_text">
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

            <a href="https://www.liqpay.ua/uk/checkout/card/380955262502" className="reg-button donate-button">
              пожертвувати
            </a>
            <p className="reg-button donate-button turn">* не підлягає поверненню</p>
          </div>
        </div>
        
      </div>
    );
  }
}
