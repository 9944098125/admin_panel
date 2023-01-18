import { GET_USERS_SUCCESS, GET_USERS_FAIL } from "../Actions/Types";

const initialState = {
  users: [],
  failMessage: "",
};

export default function getUsers(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: payload,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        failMessage: payload,
      };
    default:
      return state;
  }
}
