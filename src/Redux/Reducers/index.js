import { combineReducers } from "redux";

import { alert } from "./alertReducer";
import auth from "./login";
import getUHR from "./getUHR";

export default combineReducers({
  alert,
  auth,
  getUHR,
});
