import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { WidgetActions, WidgetState } from "./reduxTypes";
import { SET_ACTIVE_STATION, UNSET_ACTIVE_STATION } from "./actions";

const initialState: WidgetState = { stationName: null };

const store = createStore(reducer, composeWithDevTools());

function reducer(state = initialState, action: WidgetActions): WidgetState {
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
