import { GET_HOTELS_FAIL, GET_HOTELS_SUCCESS } from "../Actions/Types";

const initialState = {
  data: [],
  errMsg: "",
};

export default function getHotels(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_HOTELS_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    case GET_HOTELS_FAIL:
      return {
        ...state,
        errMsg: payload,
      };
    default:
      return state;
  }
}
