import { GET_ROOMS_FAIL, GET_ROOMS_SUCCESS } from "../Actions/Types";

const initialState = {
  data: [],
  errMsg: "",
};

export default function getRooms(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ROOMS_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    case GET_ROOMS_FAIL:
      return {
        ...state,
        errMsg: payload,
      };
    default:
      return state;
  }
}
