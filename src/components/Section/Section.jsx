import React from "react";
import "./Section.scss";
import inView from "in-view";

const Section = ({ sectionName, children, className, id }) => {
  let summaryTime = 3000;
  let time = 0;

  function runConcole(elem) {
    if (!elem) return null;
    if (elem.classList.contains("animating")) return null;
    let text = elem.dataset.text;
    let prevTime = 0;

    elem.innerHTML = "";
    elem.classList.add("animating");

    let curSpeed = summaryTime / text.length;
    let chars = text.split("");
    for (let i = 0; i < chars.length; i++) {
      time = Math.floor(Math.random() * curSpeed);
      setTimeout(() => {
        elem.innerHTML += chars[i];
        if (i === chars.length - 1) {
          elem.classList.remove("animating");
        }
      }, prevTime + time);

      prevTime += time;
    }
  }

  inView(".section-name").on("enter", (el) => {
    runConcole(el);
    console.log("section-name in view!");
  });

  return (
    <div
      className={`section ${className ? className : ""}`}
      id={`${id ? id : ""}`}
    >
      {sectionName ? (
        <div className="line">
          <div className="prompt">{`>`}</div>
          <div className="section-name" data-text={sectionName}></div>
        </div>
      ) : null}
      <div className="section-content">{children}</div>
    </div>
  );
};

export default Section;
