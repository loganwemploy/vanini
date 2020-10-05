import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

const testApp = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
ReactDOM.render(testApp, rootElement);
