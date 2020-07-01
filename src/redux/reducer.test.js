import { reducer } from "./reducer";
import {
  SET_ACTIVE_STATION,
  UNSET_ACTIVE_STATION,
  RESET_STATE,
} from "./actions";

describe("Reducer", () => {
  it("should return current state if no matching action is found", () => {
    const state = reducer(undefined, {});

    expect(state).toEqual({ stationName: null });
  });

  it("should handle SET_ACTIVE_STATION ", () => {
    const state = reducer(undefined, {
      type: SET_ACTIVE_STATION,
      payload: "test station",
    });

    expect(state).toEqual({ stationName: "test station" });
  });

  it("should handle UNSET_ACTIVE_STATION ", () => {
    const state = reducer(undefined, {
      type: UNSET_ACTIVE_STATION,
    });

    expect(state).toEqual({ stationName: null });
  });

  it("should reset state to initial", () => {
    const newState = reducer(undefined, { type: RESET_STATE });

    expect(newState).toEqual({ stationName: null });
  });
});
