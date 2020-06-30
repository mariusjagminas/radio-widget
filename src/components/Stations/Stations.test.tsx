import React from "react";
import { render, screen } from "@testing-library/react";
import Stations from "./Stations";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("<Stations/>", () => {
  it("should render 8 stations", () => {
    render(
      <Provider store={store}>
        <Stations />
      </Provider>
    );
  });
});
