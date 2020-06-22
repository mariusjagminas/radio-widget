import { SET_ACTIVE_STATION, UNSET_ACTIVE_STATION } from "./actions";

export interface WidgetState {
  stationName: string | null;
}

export interface SetActiveStation {
  type: typeof SET_ACTIVE_STATION;
  payload: string;
}

export interface UnsetActiveStation {
  type: typeof UNSET_ACTIVE_STATION;
}

export type WidgetActions = SetActiveStation | UnsetActiveStation;
