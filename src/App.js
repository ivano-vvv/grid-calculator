import React from "react";
import "normalize.css";
import "./styles/reset.css";
import "./styles/layout.css";
import "./styles/typography.css";

import Header from "./components/header";
import FormContainer from "./components/form-container";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <FormContainer className="app__form" />
      </div>
    </div>
  );
}

export default App;
