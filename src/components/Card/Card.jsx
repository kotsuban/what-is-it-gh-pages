import React from "react";

import "./Card.scss";

import { Col } from "react-bootstrap";

import { ReactComponent as PopularIcon } from "../../assets/images/fire.svg";

const Card = ({
  cardName,
  isPopular,
  cardDescription,
  cardSalary,
  cardPros,
  cardCons,
  cardClassName,
  cardId,
}) => {
  return (
    <Col className={cardClassName}>
      <div className="card">
        <div className="card-top">
          <h4 className="card-name">
            <span className="mr-2">{cardName.split(" ")[0]}</span>
            {cardName.split(" ")[1]}
          </h4>
          {isPopular ? (
            <span>
              <PopularIcon />
            </span>
          ) : null}
        </div>
        <div className="card-description">
          <p>{cardDescription}</p>
        </div>
        <div className="card-pros-and-cons">
          {cardPros.map((item) => (
            <div
              className={`card-pros ${cardPros ? "" : "d-none"}`}
              key={item.length}
            >
              {item}
            </div>
          ))}
          {cardCons &&
            cardCons.map((item) => (
              <div
                className={`card-cons ${cardCons ? "" : "d-none"}`}
                key={item.length}
              >
                {item}
              </div>
            ))}
        </div>
        <div className="card-bottom">
          Середня зараплата: <span>{cardSalary}грн.</span>
        </div>
      </div>
    </Col>
  );
};

export default Card;
