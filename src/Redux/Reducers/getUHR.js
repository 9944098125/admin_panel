import { GET_UHR_START, GET_UHR_FAIL, GET_UHR_SUCCESS } from "../Actions/Types";

const initialState = {
  UHRData: [],
  errorMsg: "",
  loading: false,
};

export default function getUHR(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_UHR_START:
      return {
        ...state,
        loading: true,
      };
    case GET_UHR_SUCCESS:
      return {
        ...state,
        loading: false,
        UHRData: payload,
      };
    case GET_UHR_FAIL:
      return {
        ...state,
        loading: false,
        errorMsg: payload,
      };
    default:
      return state;
  }
}
