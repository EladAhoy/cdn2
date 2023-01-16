export const initialState = { clicked: false };

export function reducer(state, action) {
  switch (action.type) {
    case "CLICK":
      return { ...state, clicked: !state.clicked };
    default:
      throw new Error();
  }
}

