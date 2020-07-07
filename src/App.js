import React from "react";

import "./styles/functional.css";
import "normalize.css";
import "./styles/reset.css";
import "./styles/layout.css";
import "./styles/typography.css";
import "./App.css";

import Header from "./components/header";
import FormContainer from "./components/form-container";
import ResultBlock from "./components/result-block";

function App() {
  return (
    <div className="app">
      <Header className="app__header" />
      <div className="container app__container">
        <div className="app__form-section">
          <FormContainer className="app__form" />
          <div className="app__divider" />
        </div>
        <ResultBlock className="app__result-block" />
      </div>
    </div>
  );
}

export default App;
