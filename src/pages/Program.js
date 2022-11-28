import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Carousel from "./Carousel";

export default class Program extends React.Component {
  render() {
    return (
      <div>
        <div className="comp program-page">
          <div>
            <p className="title">ПРОГРАМА</p>
            <div className="program_general">
              <div className="program_day">
                <p className="program_day_text prog-title">П'ЯТНИЦЯ</p>
                <p className="program_day_text">15:00-17:00 - поселення</p>
                <p className="program_day_text">18:00 - вечеря</p>
                <p className="program_day_text">20:00 - відкриття</p>
              </div>
              <div className="program_day">
                <p className="program_day_text prog-title">СУБОТА</p>
                <p className="program_day_text">Сніданок</p>
                <p className="program_day_text">Служіння</p>
                <p className="program_day_text">Обід</p>
                <p className="program_day_text">Вільний час</p>
                <p className="program_day_text">Семінар</p>
                <p className="program_day_text">Спілкування</p>
                <p className="program_day_text">Вечеря</p>
                <p className="program_day_text">Служіння</p>
              </div>
              <div className="program_day">
                <p className="program_day_text prog-title">НЕДІЛЯ</p>
                <p className="program_day_text">Сніданок</p>
                <p className="program_day_text">Служіння</p>
                <p className="program_day_text">Обід</p>
                <p className="program_day_text">Вільний час</p>
                <p className="program_day_text">Семінар</p>
                <p className="program_day_text">Спілкування</p>
                <p className="program_day_text">Вечеря</p>
                <p className="program_day_text">Служіння</p>
                <p className="program_day_text">Закриття</p>
              </div>
              <div className="program_day">
                <p className="program_day_text prog-title">ПОНЕДІЛОК</p>
                <p className="program_day_text">Сніданокя</p>
                <p className="program_day_text">Роз'їзд після 10:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="comp mobile-program">
          <p className="title">ПРОГРАМА</p>
          <div className="carousel">
            <Carousel />
          </div>
        </div>
      </div>
    );
  }
}
