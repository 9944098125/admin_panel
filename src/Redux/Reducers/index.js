import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import auth from "./loginReducer";
import { alert } from "./alertReducer";
import getUsers from "./getUsers";

export default combineReducers({
  themeReducer,
  auth,
  alert,
  getUsers,
});
