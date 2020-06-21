import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const SET_ACTIVE_STATION = "SET_ACTIVE_STATION";
export const UNSET_ACTIVE_STATION = "UNSET_ACTIVE_STATION";

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

function reducer(state = { stationName: null }, action: any) {
  switch (action.type) {
    case SET_ACTIVE_STATION:
      return { stationName: action.payload };
    case UNSET_ACTIVE_STATION:
      return { stationName: null };
    default:
      return state;
  }
}

export default store;

export interface State {
  stationName: string;
}
