import { TOGGLE } from "../Actions/Types";

const initialState = {
  toggleTheme: "",
};

export default function themeReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE:
      return {
        ...state,
        ...payload,
        toggleTheme: payload,
      };
    default:
      return state;
  }
}
