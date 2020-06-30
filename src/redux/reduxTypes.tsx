import {
  SET_ACTIVE_STATION,
  UNSET_ACTIVE_STATION,
  RESET_STATE,
} from "./actions";

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

export interface ResetState {
  type: typeof RESET_STATE;
}

export type WidgetActions = SetActiveStation | UnsetActiveStation | ResetState;

export interface StationData {
  stationName: string;
  stationFrequency: string;
}
