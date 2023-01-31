import { GET_UHR_START, GET_UHR_SUCCESS, GET_UHR_FAIL } from "./Types";
import api from "../Api/Api";
import { alertActions } from "./alertActions";

export const getUHR = (path) => async (dispatch) => {
  dispatch({
    type: GET_UHR_START,
  });
  try {
    const res = await api.get(`/${path}`);
    if (res) {
      dispatch({
        type: GET_UHR_SUCCESS,
        payload: res.data,
      });
      console.log(res);
    }
  } catch (err) {
    dispatch({
      type: GET_UHR_FAIL,
      payload: err.response.data.message,
    });
    console.log("get users/hotels/rooms error in the frontend: ", err);
  }
};

export const deleteUHR = (path, id) => async (dispatch) => {
  try {
    const deleteResponse = await api.delete(`/${path}/${id}`);
    dispatch({
      type: "DELETE_UHR_SUCCESS",
      payload: deleteResponse.data.message,
    });
    console.log(deleteResponse);
    dispatch(alertActions.success(deleteResponse.data.message));
    setTimeout(() => {
      dispatch(alertActions.success_clear());
      dispatch(alertActions.clear());
    }, 3000);
  } catch (err) {
    dispatch({
      type: "DELETE_UHR_FAIL",
      payload: err.response.data.message,
    });
  }
};
