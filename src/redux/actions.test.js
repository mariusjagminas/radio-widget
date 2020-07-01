import {
  setActiveStation,
  unsetActiveStation,
  SET_ACTIVE_STATION,
  UNSET_ACTIVE_STATION,
} from "./actions";

describe("Action creator", () => {
  it("should set station", () => {
    expect(setActiveStation("test-station")).toEqual({
      type: SET_ACTIVE_STATION,
      payload: "test-station",
    });
  });

  it("should unset active station", () => {
    expect(unsetActiveStation()).toEqual({
      type: UNSET_ACTIVE_STATION,
    });
  });
});
