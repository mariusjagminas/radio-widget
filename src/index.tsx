import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Widget from "./components/Widget";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Widget />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
