import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global-styles.scss";

import axios from "axios";

// Install bootstrap and node-sass
// Create components folder and several components

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
  const [vacancies, setVacancies] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3001/vacancies").then(({ data }) => {
      setVacancies(data);
    });
  }, []);

  return (
    <React.Fragment>
      <div className="main-container">
        <Header />
        <WhatIsIT />
        <TypesOfJobs />
        <WhoIsWebDev />
        <Vacancies data={vacancies} />
        <Opportunity />
      </div>
      <WantTry />
      {/* <div className="bg-animation"></div> */}
    </React.Fragment>
  );
}

export default App;
