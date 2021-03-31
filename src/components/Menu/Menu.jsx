import React from "react";

import "../Menu/Menu.scss";

import { ReactComponent as GithubIcon } from "../../assets/images/github.svg";

const Menu = () => {
  return (
    <div className="menu">
      <a href="#what-is-it" className="menu-item first-item">
        <span className="prompt mr-2">{">"}</span>
        що таке IT
      </a>
      <a href="#type-of-jobs" className="menu-item">
        <span className="prompt mr-2">{">"}</span>
        види IT професій
      </a>
      <a href="#who-is-dev" className="menu-item">
        <span className="prompt mr-2">{">"}</span>
        хто такий веб-майстер
      </a>
      <a href="#vacancies" className="menu-item">
        <span className="prompt mr-2">{">"}</span>
        вакансії для веб-майстра
      </a>
      <a href="#opportunity" className="menu-item">
        <span className="prompt mr-2">{">"}</span>
        актуальнiсть професії
      </a>
      <a href="#want-try" className="menu-item">
        <span className="prompt mr-2">{">"}</span>
        хочете спробувати
      </a>
      <div className="creator">
        <a href="https://github.com/WEBl0ck">
          Created by Anton Tamazlukar <GithubIcon width="30" height="30" />
        </a>
      </div>
    </div>
  );
};

export default Menu;
