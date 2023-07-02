import { combineReducers } from "redux";
import { pdpReducer } from "./pdpReducer";

export default combineReducers({
  pdp: pdpReducer,
});
