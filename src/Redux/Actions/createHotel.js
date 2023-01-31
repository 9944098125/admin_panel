import {
  CREATE_HOTEL_START,
  CREATE_HOTEL_SUCCESS,
  CREATE_HOTEL_FAIL,
} from "./Types";
import api from "../Api/Api";
import { alertActions } from "./alertActions";

export const createHotel = (body) => async (dispatch) => {
  dispatch({
    type: CREATE_HOTEL_START,
  });
  try {
    const res = await api.post("/hotels/createHotel", body);
    if (res) {
      dispatch({
        type: CREATE_HOTEL_SUCCESS,
        payload: res.data,
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
      type: CREATE_HOTEL_FAIL,
      payload: err.response.data.message,
    });
    console.log("create hotel error in the frontend: ", err);
  }
};
