import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Header from "./Header";
import { Provider } from "react-redux";
import configureStore, { MockStoreCreator } from "redux-mock-store";

const createStore = configureStore();
const store = createStore({});

describe("<Header/>", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
  });

  it("should render power button", () => {
    expect(screen.getByLabelText("power button")).toBeInTheDocument();
  });

  it("should render title", () => {
    expect(screen.getByText(/stations/i)).toBeInTheDocument();
  });

  it.only("should dispatch event when button is clicked", () => {
    const button = screen.getByLabelText("power button");
    fireEvent.click(button);
    expect(store.getActions).toEqual({ nae: "kk" });
  });
});
