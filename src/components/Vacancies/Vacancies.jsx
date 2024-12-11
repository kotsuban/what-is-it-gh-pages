import React from "react";

import "./Vacancies.scss";
import "../Card/Card.scss";

import { Section } from "../index";
import { Container, Row, Col } from "react-bootstrap";

import { ReactComponent as PopularIcon } from "../../assets/images/fire.svg";

const Vacancies = () => {
  return (
    <Section
      sectionName={"вакансії для web-майстра"}
      className={"vacancies"}
      id="vacancies"
    >
      <Container fluid>
        <Row className="vacancies-row">
          <Col className="card-1">
            <div className="card">
              <div className="card-top">
                <h4 className="card-name">
                  <span className="mr-2">
                    {"Frontend розробник".split(" ")[0]}
                  </span>
                  {"Frontend розробник".split(" ")[1]}
                </h4>
                {true ? (
                  <span>
                    <PopularIcon />
                  </span>
                ) : null}
              </div>
              <div className="card-description">
                <p>
                  це програміст, що займається розробкою користувальницького
                  інтерфейсу, тобто зовнішній публічній частині сайту в
                  браузері. Головне завдання фронт-енд розробника - зробити
                  максимально зручним взаємодію користувачів з сайтом або
                  веб-додатком.
                </p>
              </div>
              <div className="card-pros-and-cons">
                <div className={`card-pros`}>
                  високооплачувана і затребувана професія.
                </div>

                <div className={`card-cons`}>
                  у цій професії нечітко визначені посадові обов'язки.
                </div>
              </div>
              <div className="card-bottom">
                Середня зараплата: <span>40000грн.</span>
              </div>
            </div>
          </Col>
          <Col className="card-2">
            <div className="card">
              <div className="card-top">
                <h4 className="card-name">
                  <span className="mr-2">
                    {"HTML верстальщик".split(" ")[0]}
                  </span>
                  {"HTML верстальщик".split(" ")[1]}
                </h4>
                {false ? (
                  <span>
                    <PopularIcon />
                  </span>
                ) : null}
              </div>
              <div className="card-description">
                <p>
                  це фахівець, який виконує верстку web-сторінок. Іншими
                  словами, він створює HTML-шаблон для web-сайту з використанням
                  знань HTML-коду і всіх особливостей стилю і графічного
                  оформлення.
                </p>
              </div>
              <div className="card-pros-and-cons">
                <div className={`card-pros`}>
                  високооплачувана і затребувана професія. високий попит на
                  ринку праці.
                </div>
                <div className={`card-pros`}>високий попит на ринку праці.</div>
                <div className={`card-pros`}>
                  можливість працювати віддалено.
                </div>
                <div className={`card-pros`}>
                  необхідність постійного вдосконалення і оновлення знань.
                </div>

                <div className={`card-cons`}>
                  присутня частка рутинності і одноманітності.
                </div>
                <div className={`card-cons`}>
                  необхідність довготривалого сидіння за комп'ютером.
                </div>
              </div>
              <div className="card-bottom">
                Середня зараплата: <span>20000грн.</span>
              </div>
            </div>
          </Col>
          <Col className="card-3">
            <div className="card">
              <div className="card-top">
                <h4 className="card-name">
                  <span className="mr-2">
                    {"Back-end розробник".split(" ")[0]}
                  </span>
                  {"Back-end розробник".split(" ")[1]}
                </h4>
                {true ? (
                  <span>
                    <PopularIcon />
                  </span>
                ) : null}
              </div>
              <div className="card-description">
                <p>
                  це фахівець, який займається програмно-адміністративною
                  частиною веб-додатку, внутрішнім змістом системи, серверними
                  технологіями - базою даних, архітектурою, програмної логікою.
                </p>
              </div>
              <div className="card-pros-and-cons">
                <div className={`card-pros`}>
                  високооплачувана і затребувана професія.
                </div>
              </div>
              <div className="card-bottom">
                Середня зараплата: <span>50000грн.</span>
              </div>
            </div>
          </Col>
          <Col className="card-4">
            <div className="card">
              <div className="card-top">
                <h4 className="card-name">
                  <span className="mr-2">{"Web дизайнер".split(" ")[0]}</span>
                  {"Web дизайнер".split(" ")[1]}
                </h4>
                {true ? (
                  <span>
                    <PopularIcon />
                  </span>
                ) : null}
              </div>
              <div className="card-description">
                <p>
                  це людина, що володіє художнім смаком і знаннями
                  інтернет-технологій, який створює Web-сторінки і об'єднує їх в
                  Web-сайти. Головне завдання web-дизайнера - оформити
                  інтернет-проект так, щоб якомога більше користувачів їм
                  зацікавилося.
                </p>
              </div>
              <div className="card-pros-and-cons">
                <div className={`card-pros`}>
                  постійна затребуваність на ринку праці.
                </div>
                <div className={`card-pros`}>
                  робота не обмежується межами однієї країни.
                </div>
                <div className={`card-pros`}>
                  можливість працювати віддалено.
                </div>
                <div className={`card-pros`}>
                  широкі можливості професійного зростання.
                </div>
                <div className={`card-pros`}>
                  можна реалізувати практично будь-яку ідею без грошових витрат.
                </div>
                <div className={`card-cons`}>
                  розбіжність (іноді) художнього бачення замовника і виконавця.
                </div>
              </div>
              <div className="card-bottom">
                Середня зараплата: <span>20000грн.</span>
              </div>
            </div>
          </Col>
          <Col className="card-5">
            <div className="card">
              <div className="card-top">
                <h4 className="card-name">
                  <span className="mr-2">{"QA iнженер".split(" ")[0]}</span>
                  {"QA iнженер".split(" ")[1]}
                </h4>
                {false ? (
                  <span>
                    <PopularIcon />
                  </span>
                ) : null}
              </div>
              <div className="card-description">
                <p>
                  це фахівець з тестування програмного забезпечення на етапі
                  розробки. Тестувальник програмного забезпечення працює над
                  формуванням процесів тестування на етапі розробки, які в
                  результаті забезпечать підвищення якості ПЗ.
                </p>
              </div>
              <div className="card-pros-and-cons">
                <div className={`card-pros`}>
                  престиж і все зростаюча затребуваність професії в майбутньому.
                </div>

                <div className={`card-cons`}>
                  рутинна і монотонна робота при тестуванні і роботі з
                  документацією.
                </div>
              </div>
              <div className="card-bottom">
                Середня зараплата: <span>40000грн.</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Vacancies;
