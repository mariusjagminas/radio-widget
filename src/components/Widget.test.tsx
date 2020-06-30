import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Widget from "./Widget";
import { Provider } from "react-redux";
import store from "../redux/store";
import { UNSET_ACTIVE_STATION, RESET_STATE } from "../redux/actions";

describe("<Widget/>", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Widget />
      </Provider>
    );
  });

  afterEach(() => {
    store.dispatch({ type: RESET_STATE });
  });

  it("should render title in the header", () => {
    expect(screen.getByText(/stations/i)).toBeInTheDocument();
  });

  it("should render power button in the header", () => {
    expect(screen.getByLabelText("power button")).toBeInTheDocument();
  });

  it("should render station list containing 8 stations", () => {
    expect(screen.getAllByRole("listitem").length).toBe(8);
  });

  it("station name should not be visible in footer", () => {
    expect(screen.getByTestId("footer currently playing")).not.toBeVisible();
  });

  ///////////////

  it("should display current station name in footer when station is selected", () => {
    const footer = screen.getByTestId("footer currently playing");
    const station = screen.getByText(/putin fm/i).parentElement;

    expect(footer).not.toBeVisible();

    userEvent.click(station);

    expect(screen.getByTestId("footer currently playing")).toBeVisible();
  });

  it("footer should be empty when power button is clicked", () => {
    const powerBtn = screen.getByLabelText("power button");
    const station = screen.getByText(/putin fm/i).parentElement;
    const footer = screen.getByTestId("footer currently playing");

    expect(footer).not.toBeVisible();
    userEvent.click(station);
    expect(footer).toBeVisible();

    userEvent.click(powerBtn);

    expect(footer).not.toBeVisible();
  });
});
