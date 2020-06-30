import { reducer } from "./store";
import {
  SET_ACTIVE_STATION,
  UNSET_ACTIVE_STATION,
  RESET_STATE,
} from "./actions";

describe("Reducer", () => {
  it("should set an active station", () => {
    const newState = reducer(undefined, {
      type: SET_ACTIVE_STATION,
      payload: "test station",
    });

    expect(newState).toEqual({ stationName: "test station" });
  });

  it("should unset active station", () => {
    const initialState = { stationName: "active-station" };
    const newState = reducer(initialState, {
      type: UNSET_ACTIVE_STATION,
    });

    expect(newState).toEqual({ stationName: null });
  });

  it("should reset state to its initial state", () => {
    const newState = reducer(undefined, { type: RESET_STATE });

    expect(newState).toEqual({ stationName: null });
  });

  it("should return current state if no matching action is found", () => {
    const initialState = { stationName: "current-station" };

    const newState = reducer(initialState, { type: "NOT_EXISTING_ACTION" });

    expect(newState).toEqual({ stationName: "current-station" });
  });
});
