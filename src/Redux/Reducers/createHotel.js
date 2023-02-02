import {
  CREATE_HOTEL_START,
  CREATE_HOTEL_SUCCESS,
  CREATE_HOTEL_FAIL,
} from "../Actions/Types";

const initialState = {
  loading: false,
  hotel: {},
  errMsg: "",
};

export default function createHotel(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_HOTEL_START:
      return {
        ...state,
        loading: true,
      };
    case CREATE_HOTEL_SUCCESS:
      return {
        ...state,
        loading: false,
        hotel: payload,
      };
    case CREATE_HOTEL_FAIL:
      return {
        ...state,
        loading: false,
        errMsg: payload,
      };
    default:
      return state;
  }
}
