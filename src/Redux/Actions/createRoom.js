import {
  CREATE_ROOM_START,
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_FAIL,
} from "./Types";
import api from "../Api/Api";
import { alertActions } from "./alertActions";

export const createRoom = (hotelId, info) => async (dispatch) => {
  dispatch({
    type: CREATE_ROOM_START,
  });
  try {
    const res = await api.post("/rooms/createRoom/" + hotelId, info);
    if (res) {
      dispatch({
        type: CREATE_ROOM_SUCCESS,
        payload: res.data.room,
      });
      console.log(res.data);
      dispatch(alertActions.success(res.data.message));
      setTimeout(() => {
        dispatch(alertActions.success_clear());
        dispatch(alertActions.clear());
      }, 3000);
    }
  } catch (err) {
    dispatch({
      type: CREATE_ROOM_FAIL,
      payload: err.response.data.message,
    });
    console.log("create hotel error in the frontend: ", err);
  }
};
