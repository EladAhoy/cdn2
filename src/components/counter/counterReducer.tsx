import { FixMeLater } from "../../types/general";

export const counterReducer = function (state = 0, action: FixMeLater) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
