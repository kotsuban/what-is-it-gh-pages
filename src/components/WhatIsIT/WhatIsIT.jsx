import React from "react";

import "./WhatIsIT.scss";

import { Section } from "../index";

import ITIcon from "../../assets/images/IT.svg";

const WhatIsIT = () => {
  return (
    <Section className="what-is-it" id="what-is-it">
      <div className="section-description">
        <div
          className="section-name what-is-it-title"
          data-text="Що таке IT?"
        ></div>
        <p className="what-is-it-description">
          Iнформаційні технології — це сукупність методів і засобів, що
          використовуються для збору, зберігання, обробки і поширення
          інформації.
          <br />
          <span /> В даний час діяльність людини стала сильно залежати від цих
          технологій, вони потребують постійного розвитку. Над розробками в
          галузі інформатики працюють безліч фахівців, які називаються
          IT-фахівцями. Їх робота так чи інакше пов'язана з комп'ютерами.
        </p>
      </div>
      <div className="it-image">
        <object
          style={{ width: "650px", height: "650px" }}
          type="image/svg+xml"
          data={ITIcon}
        >
          svg-animation
        </object>
      </div>
      <div className="scroll-down">
        <div className="scroll-down__line"></div>
      </div>
    </Section>
  );
};

export default WhatIsIT;
