import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Widget from "./Widget";
import { Provider } from "react-redux";
import store from "../redux/store";
import { RESET_STATE } from "../redux/actions";

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

  it("should render the footer with no station name in it", () => {
    expect(screen.getByTestId("footer currently playing")).not.toBeVisible();
  });

  ///////////////

  it("station name should be visible in footer when station is selected", () => {
    const footer = screen.getByTestId("footer currently playing");
    const station = screen.getByText(/putin fm/i).parentElement;

    expect(footer).not.toBeVisible();

    userEvent.click(station);

    expect(screen.getByTestId("footer currently playing")).toBeVisible();
  });

  it("station name in footer should be same as active station", () => {
    expect(screen.getAllByText(/putin fm/i).length).toBe(1);
    const station = screen.getByText(/putin fm/i).parentElement;

    userEvent.click(station);

    expect(screen.getAllByText(/putin fm/i).length).toBe(2);
  });

  it("should display correct station name in when station is changed", () => {
    const station1 = screen.getByText(/putin fm/i).parentElement;
    const station2 = screen.getByText(/doge fm/i).parentElement;

    userEvent.click(station1);

    expect(screen.getAllByText(/putin fm/i).length).toBe(2);
    expect(screen.getAllByText(/doge fm/i).length).toBe(1);

    userEvent.click(station2);

    expect(screen.getAllByText(/putin fm/i).length).toBe(1);
    expect(screen.getAllByText(/doge fm/i).length).toBe(2);
  });

  it("station name in footer shouldn't be visible when power button is clicked", () => {
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
