import { GET_ROOMS_SUCCESS, GET_ROOMS_FAIL } from "./Types";
import api from "../Api/Api";

export const getRooms = () => async (dispatch) => {
  try {
    const roomsResponse = await api.get("/rooms");
    if (roomsResponse) {
      dispatch({
        type: GET_ROOMS_SUCCESS,
        payload: roomsResponse.data,
      });
      // console.log(roomsResponse);
    }
  } catch (err) {
    dispatch({
      type: GET_ROOMS_FAIL,
      payload: err.response.data.message,
    });
    console.log("get rooms error in the frontend: ", err);
  }
};
