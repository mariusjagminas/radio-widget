import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Widget from "./Widget";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("<Widget/>", () => {
  render(
    <Provider store={store}>
      <Widget />
    </Provider>
  );

  it("should render title in the header", () => {
    expect(screen.getByText(/stations/i)).toBeInTheDocument();
  });

  it("should render power button in the header", () => {
    expect(screen.getByLabelText("power button")).toBeInTheDocument();
  });

  it("should render station list containing 8 stations", () => {
    expect(screen.getAllByRole("listitem").length).toBe(8);
  });

  it.only("station name should not be visible in footer", () => {
    expect(screen.getByTestId("footer currently playing")).not.toBeVisible();
  });

  ///////////////

  it("station name should not be visible in footer", () => {
    expect(screen.getByTestId("footer currently playing")).not.toHaveClass(
      "isActive"
    );

    const station = screen.getByText(/putin fm/i);
    userEvent.click(station);

    expect(screen.getByTestId("footer currently playing")).not.toHaveClass(
      "isActive"
    );

    // screen.debug(station);
  });
});
