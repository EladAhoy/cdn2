export const initialState = { clicked: false };

export function reducer(state, action) {
  switch (action.type) {
    case "CLICK":
      const { customComponent } = action.payload;
      return { ...state, clicked: !state.clicked, customComponent };
    default:
      throw new Error();
  }
}

