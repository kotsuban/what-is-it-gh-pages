import React from "react";

import "./WhoIsWebDev.scss";

import { Section } from "../index";

import TestIcon from "../../assets/images/programmer.svg";

const WhoIsWebDev = () => {
  return (
    <Section
      className="who-is-dev"
      sectionName={"хто такий web-майстер?"}
      id="who-is-dev"
    >
      <div className="section-illustration who-is-dev-illustration">
        <object type="image/svg+xml" data={TestIcon}>
          svg-animation
        </object>
      </div>
      <div className="section-description who-is-dev-description">
        <div className="who-is-dev-line">
          <div className="prompt">{`>`}</div>
          <div
            className="section-name who-is-dev-title"
            data-text="хто такий web-майстер?"
          ></div>
        </div>
        <p>
          Веб-майстер створює сайти: пошуковики, соцмережі, банківські програми.
          <br />
          <span />
          Він відповідає як за зовнішній вигляд сайту, так і за його логіку:
          роботу серверів, файлів і баз даних. Якщо прибрати веб-розробників,
          бізнес перестане заробляти в інтернеті.
        </p>
      </div>
    </Section>
  );
};

export default WhoIsWebDev;
