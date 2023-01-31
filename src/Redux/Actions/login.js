import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./Types";
import api from "../Api/Api";
import { alertActions } from "./alertActions";

export const login = (data) => async (dispatch) => {
  dispatch({
    type: LOGIN_START,
  });
  try {
    const loginResponse = await api.post("/auth/login", data);
    // console.log(loginResponse);
    if (loginResponse.data.isAdmin === "true") {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: loginResponse.data.details,
      });
    }
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.message,
    });
    dispatch(alertActions.error(err.response.data.message));
    setTimeout(() => {
      dispatch(alertActions.error_clear());
      dispatch(alertActions.clear());
    }, 3000);
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
