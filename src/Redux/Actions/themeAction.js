import { TOGGLE } from "./Types";
const toggleTheme = (data) => {
  return {
    type: TOGGLE,
    payload: data,
  };
};

export default toggleTheme;
