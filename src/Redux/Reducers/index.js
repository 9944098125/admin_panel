import { combineReducers } from "redux";

import { alert } from "./alertReducer";
import auth from "./login";
import getUHR from "./getUHR";
import getRooms from "./getRooms";
import getHotels from "./getHotels";
import createRoom from "./createRoom";
import register from "./register";
import createHotel from "./createHotel";
import toggleTheme from "./toggleTheme";

export default combineReducers({
  alert,
  auth,
  getUHR,
  getRooms,
  getHotels,
  createRoom,
  register,
  createHotel,
  toggleTheme,
});
