import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import chevoler from "../img/chevoler.png";
import leo from "../img/leo.png";
import aboutphoto from "../img/aboutcamp.png";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <div className="comp about-page">
          <div>
            <p className="title">ПРО ТАБІР</p>
            <div className="about">
              <div className="about-group ">
              <p className="best">«ТВIЙ НАЙКРАЩИЙ ЗИМОВИЙ ВIДПОЧИНОК»</p>
                <img className="about-picture" src={chevoler} />
                <p className="about-text">
                  {" "}
                  Chevalier Panorama розташований в селі Яблуниця, на висоті
                  близько 1000 м над рівнем моря. Завдяки цьому з вікон готелю
                  Ви можете спостерігати за найвищими точками України – Говерлою
                  та вершинами Чорногірського хребта.
                </p>
                <h1 className="about-title base">БАЗА CHEVALIER PANORAMA</h1>
              </div>
              <div className="about-group about-group-speaker">
                <h1 className="about-title reverse">СПІКЕР ЛЕО ФРАНК</h1>
                <p className="about-text speaker ">
                  {" "}
                  Служитель в п’ятидесятницькій російськомовній церкві в
                  Німеччині, а служить російсько - німецькомовним християнам в
                  Росії, Україні, Казахстані, Прибалтиці, Німеччині, Канаді та
                  США. Виступає, як учитель в різних напрямках: від академічних
                  семінарів до участі в молодіжних конференціях, сімейних
                  семінарах.
                </p>

                <img className="about-picture-speaker" src={leo} />
              </div>
              <div className="about-group ">
                <img className="about-picture" src={aboutphoto} />
                <p className="about-text">
                  {" "}
                  Spirit Time місце єдності та служіння.
                  <p className="br">Ми організовуємо зимові та літні табори вже впродовж декількох
                  років. Сумарно в наших таборах побувало більше 1500 унікальних
                  учасників. #spiritcamp22 буде наш четвертий зимовий табір.
                  </p><p className="br">Якщо коротко описати наші зимові табори це: дуже багато
                  молоді, затишна атмосфера, спільне прагнення глибокого
                  пізнання Бога. Ми з командою робимо все, щоб створити для вас
                  максимально затишну атмосферу, щоб ви змогли відпочити духом
                  та тілом, вирости духовно та знайти багато нових знайомств.
                  Програма в нас дуже насичена, проте матимите багато вільного
                  часу.</p>
                </p>
                <div className="title-block">
                  <h1 className="about-title">КОМАНДА ОРГАНІЗАТОРИ SPIRIT TIME</h1>
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
