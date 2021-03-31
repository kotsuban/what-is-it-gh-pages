import React from "react";

import "./TypesOfJobs.scss";

import { Section } from "../index";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import UserInterfaseIcon from "../../assets/images/ui2.svg";
import Tester from "../../assets/images/tester.svg";
import Statistics from "../../assets/images/statistics.svg";
import Admin from "../../assets/images/admin.svg";
import Designer from "../../assets/images/designer.svg";

const TypesOfJobs = () => {
  return (
    <Section
      sectionName={"види IT професiй"}
      className={"type-of-jobs"}
      id={"type-of-jobs"}
    >
      <Carousel
        renderArrowPrev={(clickHandler1, hasPrev, labelPrev) =>
          hasPrev && (
            <button className="prev-button" onClick={clickHandler1}>
              {"<"}
            </button>
          )
        }
        renderArrowNext={(clickHandler2, hasNext, labelNext) =>
          hasNext && (
            <button className="next-button" onClick={clickHandler2}>
              {">"}
            </button>
          )
        }
        renderThumbs={() => null}
        statusFormatter={(currentItem, total) => (
          <p>
            {currentItem} / {total}
          </p>
        )}
        showIndicators={true}
      >
        <div className="jobs-container">
          <div className="job-info">
            <div className="job-name">
              Програміст<span>.exe</span>
            </div>
            <div className="section-description type-of-jobs-description">
              <p>
                Програмісти – це кістяк IT-індустрії. Це фахівці, які пишуть
                вихідний код програм і в кінцевому результаті створюють
                технології.
                <br />
                <span />В середньому українському програмісту 27 років, його
                зарплата в середньому дорівнює $ 1500-2500, а досвід роботи
                становить 4,5 років.
              </p>
            </div>
          </div>
          <div className="section-illustration">
            <div className="job-picture">
              <object type="image/svg+xml" data={UserInterfaseIcon}>
                svg-animation
              </object>
            </div>
          </div>
        </div>
        <div className="jobs-container">
          <div className="job-info">
            <div className="job-name">
              Тестувальник <span>.exe</span>
            </div>
            <div className="section-description type-of-jobs-description">
              <p>
                Спеціаліст, який, немов слідчий, спостерігає й вивчає, як працює
                програма, і шукає в ній помилки.
                <br />
                <span />В середньому українському QA-інженеру 26 років. Він має
                досвід роботи від півроку (джуніор) до 5 років (сеньйор) і
                отримує зарплату $ 600-2700.
              </p>
            </div>
          </div>
          <div className="section-illustration">
            <div className="job-picture">
              <object type="image/svg+xml" data={Tester}>
                svg-animation
              </object>
            </div>
          </div>
        </div>
        <div className="jobs-container">
          <div className="job-info">
            <div className="job-name">
              Бізнес-аналітик <span>.exe</span>
            </div>
            <div className="section-description type-of-jobs-description">
              <p>
                Бізнес-аналітик – це фахівець, який досліджує проблему
                замовника, шукає рішення і оформлює його концепцію в формі
                вимог, на які надалі будуть орієнтуватися розробники при
                створенні продукту.
                <br />
                <span />
                Середньому українському бізнес-аналітику 28 років, він має
                зарплату $ 1300-2500 і досвід роботи 3 роки.
              </p>
            </div>
          </div>
          <div className="section-illustration">
            <div className="job-picture">
              <object type="image/svg+xml" data={Statistics}>
                svg-animation
              </object>
            </div>
          </div>
        </div>
        <div className="jobs-container">
          <div className="job-info">
            <div className="job-name">
              Системний адміністратор<span>.exe</span>
            </div>
            <div className="section-description type-of-jobs-description">
              <p>
                Головна задача системного адміністратора – покращувати та
                модернізувати всю інформаційну інфраструктуру компанії, а також
                стежити за її працездатністю, реагувати на виникаючі проблеми.
                <br />
                <span />В середньому Cистемному адміністратору 29 років. Він має
                досвід роботи від 1 року (джуніор) до 5 років (сеньйор) і
                отримує зарплату $ 600-3000.
              </p>
            </div>
          </div>
          <div className="section-illustration">
            <div className="job-picture">
              <object type="image/svg+xml" data={Admin}>
                svg-animation
              </object>
            </div>
          </div>
        </div>
        <div className="jobs-container">
          <div className="job-info">
            <div className="job-name">
              Дизайнер <span>.exe</span>
            </div>
            <div className="section-description type-of-jobs-description">
              <p>
                Дизайнер – це фахівець, який створює графічні інтерфейси,
                основне завдання яких – вирішувати задачі користувачів.
                <br />
                <span />В середньому українському дизайнеру – 24 років, він має
                досвід роботи від 1 року і отримує зарплату $ 1000-2000.
              </p>
            </div>
          </div>
          <div className="section-illustration">
            <div className="job-picture">
              <object type="image/svg+xml" data={Designer}>
                svg-animation
              </object>
            </div>
          </div>
        </div>
      </Carousel>
    </Section>
  );
};

export default TypesOfJobs;
