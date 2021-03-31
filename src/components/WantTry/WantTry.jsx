import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./WantTry.scss";

import { Section, Button } from "../index";

import CollegePhoto from "../../assets/images/college-photo.jpg";

const WantTry = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <Section
      sectionName={"хочете спробувати?"}
      className="want-try"
      id="want-try"
    >
      <div className="want-try-container">
        <div
          className="college-photo"
          style={{ backgroundImage: `url(${CollegePhoto})` }}
        ></div>
        <CSSTransition in={isOpen} timeout={500} classNames="my-node">
          {isOpen ? (
            <div className="college-info">
              <div className="college-info__back" onClick={buttonHandler}>
                назад
              </div>
              <div className="college-info__content">
                <input
                  className="college-info__input"
                  type="email"
                  name=""
                  id=""
                  placeholder="номер телефону"
                />
                <Button buttonName="вiдправити" />
                <p className="text-center mt-3 ml-0">або</p>
                <a className="college-info__link" href="https://college.cv.ua/">
                  https://college.cv.ua/
                </a>
              </div>
            </div>
          ) : (
            <div className="college-info">
              <h5 className="college-name">
                Чернівецький кооперативний економіко-правовий коледж
              </h5>
              <p>
                Запрошує на навчання за спеціалізацією 123 «Комп’ютерна
                інженерія всiх бажаючих.
              </p>
              <br />
              <p>
                Навчання здійснюється в сучасних кабінетах та лабораторіях,
                оснащених сучасними засобами навчання, до послуг студентів 7
                комп’ютерних лабораторій, читальна, актова та спортивна зали,
                їдальня, бар, медпункт, стоматологічний кабінет.
              </p>
              <div className="college-button">
                <Button buttonName="менi цiкаво!" onClick={buttonHandler} />
              </div>
            </div>
          )}
        </CSSTransition>
      </div>
    </Section>
  );
};

export default WantTry;
