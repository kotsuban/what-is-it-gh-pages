import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global-styles.scss";

import {
  WhatIsIT,
  Header,
  TypesOfJobs,
  WhoIsWebDev,
  Vacancies,
  Opportunity,
  WantTry,
} from "./components/index";

function App() {
  return (
    <React.Fragment>
      <div className="main-container">
        <Header />
        <WhatIsIT />
        <TypesOfJobs />
        <WhoIsWebDev />
        <Vacancies />
        <Opportunity />
      </div>
      <WantTry />
      {/* <div className="bg-animation"></div> */}
    </React.Fragment>
  );
}

export default App;
