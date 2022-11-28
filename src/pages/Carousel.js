import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const CarouselBox = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <div className="slide">
            <p className="program_day_text prog-title">П'ЯТНИЦЯ</p>
            <p className="program_day_text">15:00-17:00 - поселення</p>
            <p className="program_day_text">18:00 - вечеря</p>
            <p className="program_day_text">20:00 - відкриття</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide">
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
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide">
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
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide">
            <p className="program_day_text prog-title">ПОНЕДІЛОК</p>
            <p className="program_day_text">Сніданок</p>
            <p className="program_day_text">Роз'їзд після 10:00</p>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
