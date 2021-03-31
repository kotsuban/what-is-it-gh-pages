import React from "react";

import "./Opportunity.scss";

import { Section, Slider } from "../index";

const Opportunity = () => {
  return (
    <Section
      sectionName={"актуальнiсть професії"}
      className="opportunity"
      id="opportunity"
    >
      <div className="opportunity-cons">
        <p className="opportunity-name">
          професія "веб-розробника" знаходиться на <span>5</span> мiсцi серед
          найпотрiбнiших професій по Українi.
        </p>
        <p className="opportunity-name">
          середня зараплата веб-розробника по Українi становить{" "}
          <span>25000грн.</span>
        </p>
        <p className="opportunity-name">
          можливiсть працювати в компанiях свiтового рiвня:
        </p>
      </div>
      <Slider />
    </Section>
  );
};

export default Opportunity;
