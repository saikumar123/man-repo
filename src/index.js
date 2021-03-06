import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {HashRouter} from "react-router-dom";
import store from "./store";
import {Provider} from "react-redux";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


ReactDOM.render(
 <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
    </Provider>,
  document.getElementById("root")
);
