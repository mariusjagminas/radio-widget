import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Station from "./Station";
import { Provider } from "react-redux";
import store from "../../../redux/store";

describe("<Station/>", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Station
          station={{ stationName: "test-station", stationFrequency: "72782" }}
        />
      </Provider>
    );
  });

  it("should render station name and frequency", () => {
    expect(screen.getByText("test-station")).toBeInTheDocument();
    expect(screen.getByText("72782")).toBeInTheDocument();
  });

  it("should expand when clicked", () => {
    expect(screen.getByRole("listitem")).not.toHaveClass("activeStation");

    const button = screen.getByRole("button", { name: /test-station 72782/ });
    fireEvent.click(button);

    expect(screen.getByRole("listitem")).toHaveClass("activeStation");
  });
});
