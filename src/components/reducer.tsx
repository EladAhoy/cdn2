import { FixMeLater } from "../types/general";

export const initialState = { clicked: false };

export function reducer(state: FixMeLater, action: FixMeLater) {
  switch (action.type) {
    case "CLICK":
      const { customComponent } = action.payload;
      return { ...state, clicked: !state.clicked, customComponent };
    default:
      throw new Error();
  }
}
