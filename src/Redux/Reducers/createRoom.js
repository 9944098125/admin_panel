import {
  CREATE_ROOM_START,
  CREATE_ROOM_SUCCESS,
  CREATE_ROOM_FAIL,
} from "../Actions/Types";

const initialState = {
  loading: false,
  room: {},
  errMsg: "",
};

export default function createRoom(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_ROOM_START:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ROOM_SUCCESS:
      return {
        ...state,
        loading: false,
        room: payload,
      };
    case CREATE_ROOM_FAIL:
      return {
        ...state,
        loading: false,
        errMsg: payload,
      };
    default:
      return state;
  }
}
