import React, { useState } from "react";

import "./Header.scss";
import "../../styles/Hamburger.scss";

import ClassNames from "classnames";
import { Menu } from "../index";

import WhiteThemeIcon from "../../assets/images/sun.svg";
import UkraineIcon from "../../assets/images/ukraine-flag.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-toggler">
        <button
          className={ClassNames(
            "hamburger",
            "hamburger--emphatic",
            isOpen ? "is-active" : null
          )}
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className="header-menu">{isOpen && <Menu />}</div>
      </div>
      <div className="header-buttons">
        <button className="header-theme-button header-button mr-3">
          <img src={WhiteThemeIcon} alt="" />
        </button>
        <button className="header-language-button header-button">
          <img src={UkraineIcon} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
