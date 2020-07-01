import { SetActiveStation, UnsetActiveStation } from "./reduxTypes";

export const SET_ACTIVE_STATION = "SET_ACTIVE_STATION";
export const UNSET_ACTIVE_STATION = "UNSET_ACTIVE_STATION";
export const RESET_STATE = "RESET_STATE";

export function setActiveStation(stationName: string): SetActiveStation {
  return {
    type: SET_ACTIVE_STATION,
    payload: stationName,
  };
}

export function unsetActiveStation(): UnsetActiveStation {
  return {
    type: UNSET_ACTIVE_STATION,
  };
}
