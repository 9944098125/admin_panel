import { GET_USERS_SUCCESS, GET_USERS_FAIL } from "./Types";
import api from "../Api/Api";

export const getUsersAction = () => async (dispatch) => {
  try {
    const res = await api.get("/users");
    if (res) {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res.data,
      });
      console.log("get res", res);
    }
  } catch (err) {
    dispatch({
      type: GET_USERS_FAIL,
      payload: err.response.data.error,
    });
    console.log("get users error in frontend: ", err);
  }
};
